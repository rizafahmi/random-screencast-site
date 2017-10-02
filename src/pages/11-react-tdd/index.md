---
path: '/11-react-tdd'
title: '11 React TDD'
draft: false
---

# Testing-Driven Development With React

02 October 2017

<iframe width="840" height="590" src="https://www.youtube.com/embed/videoseries?list=PLTY2nW4jwtG9C-by_yIwmYZVsbVU4B3wy" frameborder="0" allowfullscreen></iframe>

Dengan mengadaptasi beberapa sifat dari _functional programming_, React semakin mudah untuk ditest. Dengan bantuan testing library [Jest](https://facebook.github.io/jest/) dan [Enzyme](http://airbnb.io/enzyme/) saat ini melakukan TDD di sisi _front-end_ sudah tidak sulit lagi. Mau bukti? Tonton saja video-nya untuk melihat bagaimana menerapkan TDD dengan React.


**Download video**: [mp4](/static/videos/11-react-tdd.mp4)

**GitHub Repo**: [randcast-react-tdd](https://github.com/rizafahmi/randcast-react-tdd)

## Instalasi dan menjalankan test

```text
$ create-react-app react-tdd
$ cd react-tdd
$ yarn add enzyme react-addons-test-utils react-test-renderer -D
$ yarn test

```
