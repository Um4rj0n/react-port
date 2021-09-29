const {Router} = require('express')
const Course = require('../models/course')
const router = Router()

router.get('/', async (req, res) => {
  const courses = await Course.getAll()
  res.render('courses', {
    title: 'Проекты',
    isCourses: true,
    courses
  })
})

router.get('/:id/edit', async (req, res) => {
  if (!req.query.allow) {
    return res.redirect('/')
  }

  const course = await Course.getById(req.params.id)

  res.render('course-edit', {
    title: `Редактировать ${course.title}`,
    course
  })
})

router.post('/edit', async (req, res) => {
  console.log(req.body);
  await Course.update(req.body)
  res.redirect('/')
})

router.get('/:id', async (req, res) => {
  const course = await Course.getById(req.params.id)
  res.render('courses', {
    layout: 'empty',
    title: `Проект `,
    course
  })
})

module.exports = router