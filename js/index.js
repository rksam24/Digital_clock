var showDate = () => {
    let time = new Date();
    var date = time.getDate();
    var month = time.getMonth();
    var year = time.getFullYear();
    var day = time.getDay();

    date = date < 10 ? "0" + date : date;
    month = month < 10 ? "0" + (month + 1) : month + 1;

    switch (day) {
        case 0:
            day = "Sunday";
            break
        case 1:
            day = "Monday";
            break
        case 2:
            day = "Tuesday";
            break
        case 3:
            day = "Wednesday";
            break
        case 4:
            day = "Thursday";
            break
        case 5:
            day = "Friday";
            break
        case 6:
            day = "Saturday";
            break;
    }

    document.querySelector(".date h1").innerText = date + "-" + month + "-" + year;
    document.querySelector(".day h1").innerText = day;
}

var timeout;

function showClock12() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();
    var am_pm = "AM";

    if (hour == 0) {
        hour = 12;
        am_pm = "AM";
    }

    if (hour > 12) {
        hour -= 12;
        am_pm = "PM";
    }


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    document.querySelector(".hours h1").innerText = hour;
    document.querySelector(".min h1").innerText = min;
    document.querySelector(".sec h1").innerText = sec;
    document.querySelector(".am_pm h1").innerText = am_pm;
    timeout = setTimeout(showClock12, 1000);


}

function stop() {
    clearTimeout(timeout);
}

function showClock24() {
    var time = new Date();
    var hour = time.getHours();
    var min = time.getMinutes();
    var sec = time.getSeconds();


    hour = hour < 10 ? "0" + hour : hour;
    min = min < 10 ? "0" + min : min;
    sec = sec < 10 ? "0" + sec : sec;


    document.querySelector(".hours h1").innerText = hour;
    document.querySelector(".min h1").innerText = min;
    document.querySelector(".sec h1").innerText = sec;
    document.querySelector(".am_pm h1").innerText = '';

    timeout = setTimeout(showClock24, 1000);
}
showClock12();
showDate();

function time24() {
    stop();
    showClock24();
}

function time12() {
    stop();
    showClock12();
}

function showImage() {
    imgSrc = document.getElementsByClassName("image-change")[0]
    var time = document.querySelector(".hours h1").innerText;
    var modifier = document.querySelector(".am_pm h1").innerText;
    if (time === '12') {
        hours = '00';
    }
    if (modifier == 'PM') {
        time = parseInt(time, 10) + 12;
    }

    if (time >= 6 && time < 12)
        imgSrc.src = "image/morning.jpg";
    else if (time >= 12 && time < 16)
        imgSrc.src = "image/afternoon.jpg";
    else if (time >= 16 && time < 20)
        imgSrc.src = "image/evening.jpg";
    else
        imgSrc.src = "image/night.png";
}

showImage();