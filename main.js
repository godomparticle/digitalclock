const hourEle = document.getElementById("hour");
const minuteEle = document.getElementById("minutes");
const secondEle = document.getElementById("seconds");
const ampmEle = document.getElementById("hour");  

function realTimeClock(){
    let hours=new Date().getHours();
    let minute=new Date().getMinutes();
    let second=new Date().getSeconds();
    let ampm="AM";
    if(hours>12){
        hours=hours-12;
        ampm="PM";
    }
    hours=hours<10?"0"+hours:hours;
    minute=minute<10?"0"+minute:minute;
    second=second<10?"0"+second:second;
    hourEle.innerText=hours;
    minuteEle.innerText=minute;
    secondEle.innerText=second;
    
}
setInterval(()=>{
    realTimeClock()
},1000);