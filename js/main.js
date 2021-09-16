
const months = [    'january', 'february', 'march', 'april', 'may', 'june', 'july', 
                    'august', 'september', 'october', 'november', 'december'];
var alarmTime = document.getElementById('alarm-time');
// var setAlarm = document.getElementById('set-alarm');

function updateTime() {
    var date = new Date();
    var month = date.getMonth();
    var day = date.getDate();
    var year = date.getFullYear();

    var hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    var am_pm = (hour >= 12 ? 'PM' : 'AM');

    if (hour == 0 || hour == 12) {
        hour = '12';
    } else if (hour > 12) {
        hour = '0' + (hour - 12);
    } 

    hour = (hour < 10 ? '0' + hour : hour);
    minute = (minute < 10 ? '0' + minute : minute);
    second = (second < 10 ? '0' + second : second);

    document.getElementById('date').innerHTML = months[month] + ' ' + day + ', ' + year;
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second + ' ' + am_pm;
    
    // document.getElementById('set-alarm').innerHTML = setAlarm.innerHTML;
};

function setAlarm() {
    var currentTime = new Date();
    var hour = currentTime.getHours();
    var minute = currentTime.getMinutes();
    var second = currentTime.getSeconds();
    var millisecond = currentTime.getMilliseconds();
    var msCurrent = convertToMS(hour, minute);

    var alarmHour = Number(alarmTime.value.split(':')[0]);
    var alarmMinute = Number(alarmTime.value.split(':')[1]);
    var msAlarm = convertToMS(alarmHour, alarmMinute);

    var timeDiff = (msAlarm - msCurrent) - ((second * 1000) + millisecond);

    if (timeDiff < 0) {
        timeDiff += 86400000;
    }

    document.getElementById('set-alarm').innerHTML = "Alarm Set!";
    setTimeout(function() { alert("Time's up!"); }, timeDiff);
    
}

function convertToMS(hours, minutes) {
    return (hours * 60 * 60 * 1000) + (minutes * 60 * 1000);
}

alarmTime.addEventListener("input", setAlarm);

updateTime();
setInterval(updateTime, 1000);