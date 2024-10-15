const clock=document.querySelector('#clock')
const clock1=document.querySelector('#clock1')

setInterval(()=>{
    let date=new Date();
    clock.innerHTML=date.toLocaleTimeString();
},1000)
const date1=new Date();
clock1.innerHTML=date1.toLocaleDateString(date1);