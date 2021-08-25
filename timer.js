var countDownDate = new Date("Aug 25, 2021 11:023:50").getTime();
i = 0;
var x = setInterval(function() {
    var title = document.getElementById("title");
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
        title.innerText = "Expired Event"
    }
}, 1000);

function rotateOnDaysChange(days) {
    var el = document.getElementById("days")
    if (days <= 0) {
        el.innerText = 0
    } else {
        el.innerText = days
        el.style.transformStyle = "preserve-3d";
        el.style.transition = "transform 0.8s";
        if (days % 2 == 0) {
            el.style.transform = "rotateX(360deg)";
        } else {
            el.style.transform = "rotateX(0deg)";
        }
    }
}

function rotateOnHoursChange(hours) {
    var el = document.getElementById("hours")
    if (hours <= 0) {
        el.innerText = 0

    } else {
        el.innerText = hours
        el.style.transformStyle = "preserve-3d";
        el.style.transition = "transform 0.8s";
        if (hours % 2 == 0) {
            el.style.transform = "rotateX(360deg)";
        } else {
            el.style.transform = "rotateX(0deg)";
        }
    }

}

function rotateOnMinutesChange(minutes) {
    var el = document.getElementById("min")
    if (minutes <= 0) {
        el.innerText = 0
    } else {
        el.innerText = minutes
        el.style.transformStyle = "preserve-3d";
        el.style.transition = "transform 0.8s";
        if (minutes % 2 == 0) {
            el.style.transform = "rotateX(360deg)";
        } else {
            el.style.transform = "rotateX(0deg)";
        }
    }

}

function rotateOnSecondsChange(seconds) {
    var el = document.getElementById("sec")
    if (seconds <= 0) {
        el.innerText = 0;
    } else {
        el.innerText = seconds
        el.style.transformStyle = "preserve-3d";
        el.style.transition = "transform 0.8s";
        if (seconds % 2 == 0) {
            el.style.transform = "rotateX(360deg)";
        } else {
            el.style.transform = "rotateX(0deg)";
        }
    }

}