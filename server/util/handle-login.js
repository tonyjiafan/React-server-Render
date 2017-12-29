const router = require('express').Router()
const axios = require('axios')

const baseUrl = 'https://cnodejs.org/api/v1'

router.post('/login', (req, res, next) => {
  axios.post(`${baseUrl}/accesstoken`, {
    accesstoken: req.body.accessToken
  })
  .then(r => {
    if (r.status === 200 && r.success) {
      console.log(r.body)
      req.session.user = {
        accessToken: req.body.accessToken,
        loginName: r.data.loginName,
        id: r.data.id,
        avatarUrl: r.data.avatar_url
      }
      res.json({
        success: true,
        data: r.data
      })
    }
  })
  .catch(err => {
    if (err.response) {
      res.json({
        success: false,
        data: err.response
      })
    } else {
      next(err)
    }
  })
})


module.exports = router
