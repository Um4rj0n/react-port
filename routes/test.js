const { Router } = require('express')
const router = Router()

router.get('/', (req, res) => {
  res.json({ message: 'Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloremque dolor odit veniam reiciendis saepe, quas repellendus nisi perferendis placeat fuga amet enim ducimus cum earum!Lorem ipsum, dolor sit amet consectetur adipisicing elit. Officiis doloremque dolor odit veniam reiciendis saepe, quas repellendus nisi perferendis placeat fuga amet enim ducimus cum earum!',app:"this is app" })
})

module.exports = router