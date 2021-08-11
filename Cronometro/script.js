let fieldSecond = document.querySelector('.second');
let fieldMinute = document.querySelector('.minute');
let fieldHour = document.querySelector('.hour');
let hour = 0;
let second = 0;
let minute = 0;
let interval;
let position = 1;
let timeHour= document.querySelector('.time-hour');
let timeMinute = document.querySelector('.time-minute');
let timeSecond = document.querySelector('.time-second');
let list = document.querySelector('.list');

function start(){
    interval = setInterval(() => {
        time()
    }, 1000);
}
function stoped(){
    clearInterval(interval)
    
   
    list.innerHTML += `<li>#${position++} - ${timeHour.innerHTML= fieldHour.innerHTML}:${timeMinute.innerHTML= fieldMinute.innerHTML}:${timeSecond.innerHTML= fieldSecond.innerHTML}</li>`



}
function reset(){
    clearInterval(interval)
    hour = 0;
    second = 0;
    minute = 0;
    fieldHour.innerHTML = '00'
    fieldMinute.innerHTML = '00';
    fieldSecond.innerHTML = '00';

}
function time(){
    second++
    if(second <= 9){
        fieldSecond.innerHTML = "0"+second;
    }
    else if(second > 9){
        fieldSecond.innerHTML = second;
    }
    if(second >= 60){
        second = 0;
        minute++;
        if(minute <=9){
            fieldMinute.innerHTML = '0'+minute;
        }
        else if(minute >9){
            fieldMinute.innerHTML = minute;
        }
    }
    if(minute >= 60){
        minute=  0;
        second = 0;
        if(hour <=9){
            fieldHour.innerHTML = '0'+hour;
        }
        else if(hour >9){
            fieldHour.innerHTML = hour;
        }
    }



}
