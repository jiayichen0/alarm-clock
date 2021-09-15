
const Months = ['january', 'february', 'march', 'april', 'may', 'june', 'july', 'august']
var alarmTime = document.getElementById('alarm-time');
var setAlarm = document.getElementById('set-alarm');

function updateTime() {
    var date = new Date();

    var month = date.getMonth() + 1;
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
    } else {
        hour = '0' + hour;
    }

    minute = (minute < 10 ? '0' + minute : minute);
    second = (second < 10 ? '0' + second : second);

    document.getElementById('date').innerHTML = month + '/' + day + '/' + year;
    document.getElementById('time').innerHTML = hour + ':' + minute + ':' + second + ' ' + am_pm;
    
    document.getElementById('set-alarm').innerHTML = setAlarm;
};

alarmTime.addEventListener("input", function() {
    setAlarm.innerHTML = alarmTime.value;
});

updateTime();
setInterval(updateTime, 1000);