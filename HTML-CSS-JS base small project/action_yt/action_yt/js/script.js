var countDownDate = new Date('2024-11-04T13:45:30').getTime();

var x = setInterval(function() {
    var now = new Date().getTime();

    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('countdown').innerHTML = days + 'д ' + hours + 'ч ' + minutes + 'м ' + seconds + 'c';

    if (distance < 0){
        clearInterval(x);
        document.getElementById('discountBlock').style.display = 'none';
    }
}, 1000);