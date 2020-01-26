let getRandomNumber = size => Math.floor(Math.random() * size);

const getDistance = (event, target) => {
    let diffX = event.offsetX - target.x;
    let diffY = event.offsetY - target.y;
    return Math.sqrt((diffX * diffX) + (diffY * diffY));
};

const getDistanceHint = distance => {
    return distance < 10 
        ? 'You will burn yourself!'
        : distance < 20 
        ? 'Verryyyy-very Hot!'
        : distance < 30
        ? 'Very hot!'
        : distance < 40
        ? 'Hoot!'
        : distance < 60
        ? 'Warmly!'
        : distance < 80
        ? 'Warm!'
        : distance < 100
        ? 'Cold'
        : distance < 130
        ? 'Very Cold!'
        : distance < 160
        ? 'Very-very Cold!'
        : distance < 320
        ? 'Too much cold!'
        : 'Freeeze!'
};

let width = 800;
let heigth = 800;
let clicks = 0;
let clicksLimit = 20;

let target = {
    x: getRandomNumber(width),
    y: getRandomNumber(heigth)
};

console.log(target);

$('#map').click(function (event) {
    clicks++;
    $("#attempts").text(`You have a ${clicks} attempts.`);
    
    if (clicks > clicksLimit) {
        alert('You lose!');
        return;
    }

    let distance = getDistance(event, target);
    let distanceHint = getDistanceHint(distance);
    $("#distance").text(distanceHint);

    if (distance < 8) {
        alert('WINNER! How much clicks? ' + clicks);
    }
});



