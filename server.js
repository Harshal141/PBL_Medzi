const express = require('express')
const app = express()
const port = 3000

app.use('/', express.static("public"))

// render post of /comp?id=num
app.post('/comp', (req, res) => {
  const id = req.query.id;
  res.render('index.pug', {id:id});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})