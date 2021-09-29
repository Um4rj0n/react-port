const { Router } = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', (req, res) => {
  res.render('add', {
    title: 'Добавить проект',
    isAdd: true
  })
})

router.post('/', async (req, res) => {
  const course = new Course(
    req.body.title,
    req.body.description,
    req.body.link,
    req.body.img,
  )

  await course.save()
  console.log(req.body);
  res.redirect('/')
})

module.exports = router