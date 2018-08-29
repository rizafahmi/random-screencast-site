---
path: '/16-node-redis'
title: 'Caching With Redis and NodeJS'
draft: false
description: 'Caching merupakan salah satu strategi scaling aplikasi yang paling umum diterapkan dalam dunia pemrograman. Di episode kali ini kita akan membahas tentang apa itu caching dan menerapkannya dalam aplikasi nodejs.'
---

# Caching With Redis and NodeJS

Caching merupakan salah satu strategi scaling aplikasi yang paling umum diterapkan dalam dunia pemrograman. Di episode kali ini kita akan membahas tentang apa itu caching dan menerapkannya dalam aplikasi nodejs.

Aplikasi yang akan kita buat adalah sebuah REST API yang akan membaca [GitHub API](https://api.github.com/) dan mengkalkulasi seberapa banyak bintang yang dipunyai seorang user pada 100 _repository_ terakhirnya.

<iframe width="840" height="590" src="https://www.youtube.com/embed/_ckarChbGBg?rel=0" frameborder="0" allowfullscreen></iframe>

**Package Yang Digunakan:**

* [Express Web Framework](http://expressjs.com/)
* [Redis Server](https://redis.io/)
* [Redis Driver](https://www.npmjs.com/package/redis)

