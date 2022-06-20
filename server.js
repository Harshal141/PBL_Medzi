const express = require('express')
const app = express()
const port = 3000


let data = [
  {
      name:'Hospital 1',
      id:0,
      type:'clinic',
      emergency:'yes',
      spec:['Cardiologist','Neurologist','Oncologist','Endocrinologists'],
      equip:['OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
      desc:'This is a hospital',
      beds:123,
      dist:69,
      rating:50,
      docs:[
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'}
      ]
  },
  {
      name:'Hospital 2',
      id:1,
      type:'clinic',
      emergency:'yes',
      spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
      equip:['OPD','X-ray','Ultrasound','Emergency department'],
      desc:'This is a hospital',
      beds:123,
      dist:69,
      rating:50,
      docs:[
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'}
      ]
  },
  {
      name:'Hospital 3',
      id:2,
      type:'clinic',
      emergency:'yes',
      spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
      equip:['OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
      desc:'This is a hospital',
      rating:50,
      beds:123,
      dist:69,
      docs:[
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'}
      ]
  },
  {
      name:'Hospital 4',
      id:3,
      type:'clinic',
      emergency:'yes',
      spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
      equip:['OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
      desc:'This is a hospital',
      rating:50,
      beds:123,
      dist:69,
      docs:[
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'}
      ]
  },
  {
      name:'Hospital 5',
      id:4,
      type:'clinic',
      emergency:'yes',
      spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
      equip:['OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
      desc:'This is a hospital',
      rating:50,
      beds:123,
      dist:69,
      docs:[
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'},
          {name:'hp',desc:'ashdk',spec:'cardio'}
      ]
  }
]

app.use('/', express.static("public"))

// render post of /comp?id=num
app.post('/comp', (req, res) => {
  const id = req.query.id;
  res.render('index.pug', {id:id,name:data[id].name,type:data[id].type});
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})