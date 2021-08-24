var countDownDate = new Date("Aug 25, 2021 16:09:00").getTime();
i=0;
var x = setInterval(function() {
  var now = new Date().getTime();
  var distance = countDownDate - now;
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);
  rotateOnDaysChange(days)
  rotateOnHoursChange(hours)
  rotateOnMinutesChange(minutes)
  rotateOnSecondsChange(seconds)  
  if (distance <= 0) {
    clearInterval(x);
    document.getElementById("clock").innerText="Expired Event"
  }
}, 1000);
function rotateOnDaysChange(days)
{
    var el=document.getElementById("days")
    el.innerText=days
    el.style.transformStyle ="preserve-3d";
    el.style.transition="transform 0.8s";
    if(days%2==0)
    {
        el.style.transform ="rotateX(360deg)";
    }else{
        el.style.transform ="rotateX(0deg)";

    }
}
function rotateOnHoursChange(hours)
{
    var el=document.getElementById("hours")
    el.innerText=hours
    el.style.transformStyle ="preserve-3d";
    el.style.transition="transform 0.8s";
    if(hours%2==0)
    {
        el.style.transform ="rotateX(360deg)";
    }else{
        el.style.transform ="rotateX(0deg)";

    }
}
function rotateOnMinutesChange(minutes)
{
    var el=document.getElementById("min")
    el.innerText=minutes
    el.style.transformStyle ="preserve-3d";
    el.style.transition="transform 0.8s";
    if(minutes%2==0)
    {
        el.style.transform ="rotateX(360deg)";
    }else{
        el.style.transform ="rotateX(0deg)";

    }
}
function rotateOnSecondsChange(seconds)
{
    var el=document.getElementById("sec")
    el.innerText=seconds
    el.style.transformStyle ="preserve-3d";
    el.style.transition="transform 0.8s";
    if(seconds%2==0)
    {
        el.style.transform ="rotateX(360deg)";
    }else{
        el.style.transform ="rotateX(0deg)";

    }
}
