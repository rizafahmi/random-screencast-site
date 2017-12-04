---
path: '/14-fakerjs'
title: 'Data Dummy Dengan FakerJS'
draft: false
description: 'Ketika kita membuat aplikasi baru seringkali dihadapkan pada kebutuhan dummy data dalam jumlah banyak agar kita bisa bekerja lebih cepat. Untuk kebutuhan tersebut, kita bisa menggunakan FakerJS, sebuah library JavaScript yang dapat menciptakan banyak data dengan berbagai kriteria. Episode kali ini kita akan melihat demo penggunaan library FakerJS.'
---

# Data Dummy Dengan FakerJS

<iframe width="840" height="590" src="https://www.youtube.com/embed/xcqNN5xDJfs?rel=0" frameborder="0" allowfullscreen></iframe>

Ketika kita membuat aplikasi baru seringkali dihadapkan pada kebutuhan dummy data dalam jumlah banyak agar kita bisa bekerja lebih cepat. Untuk kebutuhan tersebut, kita bisa menggunakan FakerJS, sebuah library JavaScript yang dapat menciptakan banyak data dengan berbagai kriteria.

Episode singkat kali ini kita akan melihat demo penggunaan library FakerJS.


**Download Video:** [mp4](https://drive.google.com/file/d/1Q8ffwNy5f8YwhRdWCCzdlnlgYVQZLn_L/view?usp=sharing)

## Contoh Code FakerJS

```javascript
// app.js
// ...
const faker = require('faker')
// ...

app.get('/seeds', async (req, res) => {
  const count = await Category.count({})
  if (count < 1) {
    for (let i = 0; i < 100; i++) {
      const name = faker.lorem.words()
      const description = faker.lorem.paragraph()
      const orderNumber = faker.random.number()
      const slug = faker.lorem.slug()
      console.log(name, description, orderNumber, slug)
      const newCategory = new Category({ name, description, orderNumber, slug })
      newCategory.save().then(() => console.log('Data seeds...'))
    }
  }

  res.send('Seeding data...')
})
```

