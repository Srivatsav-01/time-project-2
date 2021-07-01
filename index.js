
var hours,minutes,seconds,ampm,milliseconds;

setInterval(getTime , 1000);

//time function which change the text in
function getTime()
{var d = new Date();
  hours = d.getHours();
  minutes = d.getMinutes();
  seconds = d.getSeconds();
  milliseconds = d.getMilliseconds();
  if(hours >=0 && hours<12)
{
  ampm = "am";
}
else
{
  ampm = "pm";
  hours = hours - 12;
}
  if(hours<10)
{
  hours = "0"+hours;

}
if(seconds<10)
{
  seconds = "0"+seconds;
}
if(minutes<10)
{
  minutes = "0"+minutes;
}
const time = hours+":"+minutes+":"+seconds+":"+ampm;
document.getElementsByClassName("clock")[0].innerHTML = time;

}
getTime();
