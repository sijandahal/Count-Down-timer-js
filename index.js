var countDownTimer = new Date('March 26, 2021 1:14:60').getTime();

function myCountDown() {
  setInterval(function () {

    var currentDate = new Date().getTime();
    var timeLeft = countDownTimer - currentDate;

    var days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    var hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);
    document.querySelector(".days").innerHTML = days;
    document.querySelector(".hours").innerHTML = hours;
    document.querySelector(".minutes").innerHTML = minutes;
    document.querySelector(".seconds").innerHTML = seconds;

    if (timeLeft < 0) {
      clearInterval(myfunc);
      document.querySelector(".days").innerHTML = days;
      document.querySelector(".hours").innerHTML = hours;
      document.querySelector(".minutes").innerHTML = minutes;
      document.querySelector(".seconds").innerHTML = seconds;
      alert("Time's Up");
    }

  }, 1000)
}

myCountDown();