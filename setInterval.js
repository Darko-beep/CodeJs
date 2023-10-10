console.log (time(), 'start of the timer');

var count = 1;

var timer =setInterval(function(){
    console.log(time(), "count = ", count);
    // count++;
    if (count ==5 ) {
        clearInterval(timer); // timer stop
        console.log(timer(), "end of timer");
    }else count++;
}, 1000); // 1000 miliseconds equals 1 second

console.log(time(), "after setTimeout()");

function time(){
    //return time as HH:MM:SS
    var date = new Date();
    var hour = date.getHours();
    var min = date.getMinutes();
    var sec =date.getSeconds();

    // if statements
    if (hour < 10) hour = "0" + hour;
    if (min < 10) min = "0" + min;
    if (sec < 10) sec = "0" + sec;

    return "" + hour + ":" + min + ":" + sec + "";
}