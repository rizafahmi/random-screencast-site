---
path: '/12-elixir-process'
title: 'Elixir Process 101'
description: 'Process di Elixir merupakan salah satu konsep yang sangat penting. Hal fundamental yang harus dikuasai jika ingin mendalami tentang concurrency di Elixir. Process di Elixir dan Erlang VM bukanlah seperti thread yang cukup berat dan membuat thread baru merupakan sesuatu yang mahal. Process itu sangat ringan dan lightweight dan terisolasi satu dengan yang lain, dan juga bukanlah proses di sistem operasi.'
draft: false

---

# Elixir Process 101

16 October 2017

<iframe width="840" height="590" src="https://www.youtube.com/embed/rRIf_cHPWRg" frameborder="0" allowfullscreen></iframe>

_Process_ di Elixir merupakan salah satu konsep yang sangat penting. Hal fundamental yang harus dikuasai jika ingin mendalami tentang _concurrency_ di Elixir.

_Process_ di Elixir dan Erlang VM bukanlah seperti thread yang cukup berat dan membuat thread baru merupakan sesuatu yang 'mahal'. _Process_ itu sangat ringan dan _lightweight_ dan terisolasi satu dengan yang lain, dan juga bukanlah proses di sistem operasi.

Dengan memahami _process_, kita juga sekaligus memahami konsep [actor model](http://theerlangelist.blogspot.co.id/2013/01/actors-in-erlangelixir.html) di dunia _concurrency_.


**Download video**: [mp4](/static/videos/12-elixir-process.mp4)

**GitHub Repo**: [randacast\_elixir\_github\_stargazers](https://github.com/rizafahmi/randacast_elixir_github_stargazers)

## Walkthrough

### New Project

```text
$ mix new github_stargazers
$ cd github_stargazers
$ v mix.exs
```

### Add dependencies

```elixir
# mix.exs
defmodule GithubStars.Mixfile do
  use Mix.Project

  def project do
    [
      app: :github_stars,
      version: "0.1.0",
      elixir: "~> 1.5",
      start_permanent: Mix.env == :prod,
      deps: deps()
    ]
  end

  # Run "mix help compile.app" to learn about applications.
  def application do
    [
      ::extra_applications: [:logger, :httpoison]::
    ]
  end

  # Run "mix help deps" to learn about dependencies.
  defp deps do
    [
      ::{:httpoison, "~> 0.9.0"},::
      ::{:json, "~> 0.3.0"}::
    ]
  end
end
```

### Get Dependencies

```text
$ mix deps.get
```

### Build Worker

```elixir
# lib/minion.ex

defmodule GithubStargazers.Minion do
  def get_stats(username) do
    result = url_for(username) |> HTTPoison.get() |> parse_response()

    case result do
      {:ok, name, followers, following} ->
        "#{username}: #{name} follows #{following}, got #{followers} follower(s)."
      :error ->
        "#{username} not found, sorry."
    end
  end

  defp url_for(username) do
    url = URI.encode(username)
    "https://api.github.com/users/#{url}"
  end

  defp parse_response({:ok, %HTTPoison.Response{body: body, status_code: 200}}) do
    body |> JSON.decode! |> get_followers
  end

  defp parse_response(_) do
    :error
  end

  defp get_followers(json) do
    {:ok, json["name"], json["followers"], json["following"]}
  end
end
```

### Trying Out

GitHub Elixir Indonesia: [Elixir in Indonesia | Git Awards](http://git-awards.com/users?utf8=%E2%9C%93&type=country&language=elixir&country=Indonesia)

```text
$ iex -S mix
iex> GithubStargazers.Minion.get_stats(“rizafahmi”)
iex> GithubStargazers.Minion.get_stats("fajarmf")
iex> GithubStargazers.Minion.get_stats("rizafahmi22")
```

### Scaling Out

```text
iex> elixir_stars = ["fajarmf", "bobbypriambodo", "mada41", "resir014", "zerosign"]
iex> elixir_stars |> Enum.map(fn star -> 
       GithubStargazers.Minion.get_stats(star) 
     end)
```

### Using Process

```elixir
# lib/minion.ex
defmodule GithubStargazers.Minion do
  ::def loop do::
    ::receive do::
      ::{sender_pid, username} ->::
        ::send(sender_pid, {:ok, get_stats(username)})::
      ::_ ->::
        ::IO.puts("Don't know how to process this message.")::
    ::end::
    ::loop::
  ::end::

# ...

end
```

#### Testing out

```text
iex> r(GithubStargazers.Minion)
iex> pid = spawn(GithubStargazers.Minion, :loop, [])
iex> send(pid, {self, "rizafahmi"})
{#PID<0.213.0>, "rizafahmi"}
iex> flush
{:ok, "rizafahmi: Riza Fahmi follows 17, got 139 follower(s)."}
:ok
iex> elixir_stars = ["fajarmf", "bobbypriambodo", "mada41", "resir014", "zerosign"]
iex(19)> elixir_stars |> Enum.each(fn star ->
...(19)> pid = spawn(GithubStargazers.Minion, :loop, [])
...(19)> send(pid, {self, star})
...(19)> end)
:ok
{:ok, "zerosign: Yuri Setiantoko follows 10, got 8 follower(s)."}
{:ok, "mada41: Mada Aryakusumah follows 2, got 12 follower(s)."}
{:ok, "fajarmf: Fajar Maulana Firdaus follows 6, got 12 follower(s)."}
{:ok, "bobbypriambodo: Bobby Priambodo follows 10, got 20 follower(s)."}
{:ok, "resir014: Resi Respati follows 66, got 55 follower(s)."}
:ok
```

### Collecting Results With New Actor

```elixir
# lib/gru.ex
defmodule GithubStargazers.Gru do
  def loop(results \\ [], results_expected) do
    receive do
      {:ok, result} ->
        new_results = [result| results]
        if results_expected == Enum.count(new_results) do
          send(self, :exit)
        end
        loop(new_results, results_expected)
      :exit ->
        IO.puts(results |> Enum.sort |> Enum.join(", "))
      _ ->
        loop(results, results_expected)
    end
  end
end
```

### Using Gru in main module
```elixir
# lib/github_stargazers.ex
defmodule GithubStargazers do
  def get_stars(stars) do
    coordinator_pid = spawn(GithubStargazers.Gru, :loop, [[], Enum.count(stars)])

    stars |> Enum.each(fn star -> 
      worker_pid = spawn(GithubStargazers.Minion, :loop, [])
      send(worker_pid, {coordinator_pid, star})
    end)
  end
end
```

#### Test It Out
```sh
$ iex -S mix
```

```elixir
iex> elixir_stars = ["fajarmf", "bobbypriambodo", "mada41", "resir014", "zerosign"]
iex(10)> GithubStargazers.get_stars(elixir_stars)
:ok
bobbypriambodo: Bobby Priambodo follows 10, got 20 follower(s).
fajarmf: Fajar Maulana Firdaus follows 6, got 12 follower(s).
mada41: Mada Aryakusumah follows 2, got 12 follower(s).
resir014: Resi Respati follows 66, got 55 follower(s).
zerosign: Yuri Setiantoko follows 10, got 8 follower(s).
```

## References

* [ Minion Movie ](https://www.rottentomatoes.com/m/minions)
* [ Little OTP Book ](https://www.manning.com/books/the-little-elixir-and-otp-guidebook)

