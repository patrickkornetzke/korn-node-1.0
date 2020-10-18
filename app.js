const express = require('express')
const app = express()
const port = 3000

app.set('view engine', 'pug')
app.use(express.static('public'))

app.get('/jjj:username', (req, res) => {
    res.send(app.settings)
})

app.get('/user/:username', (req, res) => {
    const username = req.params.username
    res.locals.username = username
    res.render('index', {'data':'test'})
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})