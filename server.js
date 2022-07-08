const express = require('express')
const neww = require('./public/js/data')
const app = express()
const port = process.env.PORT || 3000

let data = neww.data;

app.use('/', express.static("public"))

// render post of /comp?id=num
app.post('/comp', (req, res) => {
  const id = req.query.id;
  res.render('index.pug', {id:id,name:data[id].name,type:data[id].type});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})