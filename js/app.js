console.log("yo")
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