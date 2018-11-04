function showTime(){
    var date = new Date();
    var hours = date.getHours();
    var min = date.getMinutes();
    var sec = date.getSeconds();

    if(hours < 10){
        hours = "0" + hours;
    }

    if(min < 10){
        min = "0" + min;
    }

    if(sec < 10){
        sec = "0" + sec;
    }
    var time = `${hours}${min}${sec}`;

    document.getElementById('hour1').innerText= time[0];
    document.getElementById('hour2').innerText= time[1];
    document.getElementById('min1').innerText= time[2];
    document.getElementById('min2').innerText= time[3];
    document.getElementById('sec1').innerText= time[4];
    document.getElementById('sec2').innerText= time[5];


}

showTime();
setInterval(showTime, 1000);
