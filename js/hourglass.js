let defaults = {}
    , one_second = 1000
    , one_minute = one_second * 60
    , one_hour = one_minute * 60
    , one_day = one_hour * 24
    , startDate = new Date()
    , face = document.getElementById('lazy');


let requestAnimationFrame = (function() {
    return window.requestAnimationFrame    ||
        window.webkitRequestAnimationFrame ||
        window.mozRequestAnimationFrame    ||
        window.oRequestAnimationFrame      ||
        window.msRequestAnimationFrame     ||
        function( callback ){
            window.setTimeout(callback, 1000 / 60);
        };
}());

tick();

function tick() {

    let now = new Date()
        , elapsed = now - startDate
        , parts = [];

    parts[0] = '' + Math.floor( elapsed / one_hour );
    parts[1] = '' + Math.floor( (elapsed % one_hour) / one_minute );
    parts[2] = '' + Math.floor( ( (elapsed % one_hour) % one_minute ) / one_second );

    parts[0] = (parts[0].length == 1) ? '0' + parts[0] : parts[0];
    parts[1] = (parts[1].length == 1) ? '0' + parts[1] : parts[1];
    parts[2] = (parts[2].length == 1) ? '0' + parts[2] : parts[2];

    face.innerText = parts.join(':');

    requestAnimationFrame(tick);

}



function func() {
let myTime = $('#lazy').text();

switch (myTime) {
    case "00:00:10":
        $('#srclImgPafe').attr('src', "./img/sircl/22222.png");

        $('#onnes').attr('src', "./img/CoinDark.png");
        $('#onnesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:00:20":
        $('#srclImgPafe').attr('src', "./img/sircl/333333.png");

        $('#twones').attr('src', "./img/CoinDark.png");
        $('#twonesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:00:40":
        $('#srclImgPafe').attr('src', "./img/sircl/444444.png");

        $('#trines').attr('src', "./img/CoinDark.png");
        $('#trinesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:00:50":
        $('#srclImgPafe').attr('src', "./img/sircl/55555.png");

        $('#fones').attr('src', "./img/CoinDark.png");
        $('#fonesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:00:60":
        $('#srclImgPafe').attr('src', "./img/sircl/666666.png");

        $('#fivnes').attr('src', "./img/CoinDark.png");
        $('#fivnesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:01:00":
        $('#srclImgPafe').attr('src', "./img/sircl/777777.png");

        $('#sixnes').attr('src', "./img/CoinDark.png");
        $('#sixnesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:01:10":
        $('#srclImgPafe').attr('src', "./img/sircl/888888.png");

        $('#sevnes').attr('src', "./img/CoinDark.png");
        $('#sevnesm').attr('src', "./img/CoinDark.png");
        break;
    case "00:01:20":
        $('#srclImgPafe').attr('src', "./img/sircl/11111111.png");

        $('#ninnes').attr('src', "./img/CoinDark.png");
        $('#ninnesm').attr('src', "./img/CoinDark.png");

        break;
    default:

}

}



setInterval( func , 1000)