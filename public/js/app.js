//--------------------------------------
// Search Page js
//--------------------------------------

let count1 = document.querySelector('.count1')
let count2 = document.querySelector('.count2')
let count3 = document.querySelector('.count3')
let count4 = document.querySelector('.count4')

// geting counters
for(let i=0;i<86;++i){
    setTimeout(function(){count1.innerText=i},20+10*i)
}
for(let i=0;i<70;++i){
    setTimeout(function(){count2.innerText=i},20+10*i)
}
for(let i=0;i<50;++i){
    setTimeout(function(){count3.innerText=i},20+10*i)
}
for(let i=0;i<18;++i){
    setTimeout(function(){count4.innerText=i},20+10*i)
}

let data = [
    {
        name:'h1',
        id:0,
        type:'clinic',
        emergency:'yes',
        spec:['Cardiologist','Neurologist','Oncologist','Endocrinologists'],
        equip:['equip,OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
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
        name:'hh1',
        id:1,
        type:'clinic',
        emergency:'yes',
        spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
        equip:['equip,OPD','X-ray','Ultrasound','Emergency department'],
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
        name:'h69',
        id:2,
        type:'clinic',
        emergency:'yes',
        spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
        equip:['equip,OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
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
        name:'h69',
        id:3,
        type:'clinic',
        emergency:'yes',
        spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
        equip:['equip,OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
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
        name:'h69',
        id:4,
        type:'clinic',
        emergency:'yes',
        spec:['Cardiologist','Dermatologist','Neurologist','Oncologist','Endocrinologists'],
        equip:['equip,OPD','Ventilator','X-ray','Ultrasound','Emergency department'],
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

//--------------------------------------
// search Page js
//--------------------------------------

// calling search
function boxx(name,dist,rating,type,beds,id){
    let a = 
    `
    <div class="col-md-4 my-3">
        <div class="card p-3 mb-2">
            <div class="d-flex justify-content-between mb-1">
                <div class="d-flex flex-row align-items-center">
                    <div class="icon icon_card"><i class="fa-solid fa-hand-holding-medical"></i></div>
                    <div class="ms-2 c-details pl-3">
                        <h6 class="mb-0">${type}</h6> <span>${beds} beds available</span>
                    </div>
                </div>
                <div class="badge"> 
                  <form action = /comp?id=${id} method="post">
                    <span style="display:none">${id}</span>
                    <button type="submit" class="btn btn-primary" style="background-color:#63e6be;border:none;">More..</button>
                </form>
                </div>
            </div>
            <img src = "images/2.png" class = "img-responsive" alt = "Online Training">
            <div class="mt-4">
                <h3 class="heading">${name}</h3>
                <div class="mt-4">
                    <div class="progress">
                        <div class="progress-bar" role="progressbar" style="width: ${rating}%" aria-valuenow="50" aria-valuemin="0" aria-valuemax="100"></div>
                    </div>
                    <div class="mt-3"> <span class="text1">${dist} Km <span class="text2">from current location</span></span> </div>
                </div>
            </div>
        </div>
      </div>
    `;
    return a;
}

let box = document.querySelector('.fa-magnifying-glass')
box.addEventListener('click',()=>{
    let spec = document.querySelector('.spec').value
    let equip = document.querySelector('.equip').value
    console.log(spec,equip)
    if(spec == '' || equip == ''){
        alert('Please Select both field')
    }
    else{
        for(let i=0;i<data.length;++i){
            if(data[i].spec.includes(spec) && data[i].equip.includes(equip)){
                let neww = data[i] 
                document.querySelector('.rowFilter').innerHTML += boxx(neww.name,neww.dist,neww.rating,neww.type,neww.beds,neww.id)  
            }
        }
    }
})
