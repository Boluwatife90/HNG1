let current_date= document.getElementById('current-date')
let current_time = document.getElementById('current-time')
let d = new Date()
const weekday = ['Sunday','Monday','Tuesday','Wednessday','Thurday','Friday','Saturday']
let day = weekday[d.getDay()]

current_date.innerHTML=day


setInterval(function(){
    let d = new Date()
    time = d.toUTCString().slice(16 ,25)
   current_time.innerHTML= time
   
},1000)

