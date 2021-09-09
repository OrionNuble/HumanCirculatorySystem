
window.addEventListener('load', () => {

    const Canvas = document.getElementById('Canvas');
    const Context = Canvas.getContext('2d');

    Canvas.height = window.innerHeight / 1.65;
    Canvas.width = window.innerWidth / 1.65;

    BackGround = new Image();
    BackGround.src = "CirculatorySystemAnimationBackground_HEARTLUNGADDED.png";
    BackGround.onload = function () {

        Context.drawImage(BackGround, 0, 0);

    };

});

let ChooseCoordinates = [[100, 100]];

function SetCoordinates(e){

    //ChooseCoordinates.push(e.clientX - 240, e.clientY - 366);
    //alert('X ORIGINAL: ' + e.clientX + ', Y ORIGINAL: ' + e.clientY + ' // X CHANGED: ' + e.clientX + ', Y CHANGED: ' + e.clientY - 266);

}

function PaintAButton(e){

    const MovingCanvas = document.getElementById('MovingCanvas');
    const MovingContext = MovingCanvas.getContext('2d');

    MovingCanvas.height = window.innerHeight / 1.65;
    MovingCanvas.width = window.innerWidth / 1.65;

    RedBall = new Image();
    RedBall.src = "Small Red Vein Bump.png";
    RedBall.onload = function () {

        MovingContext.drawImage(RedBall, e.clientX, e.clientY);

    }

}

//window.addEventListener('mousedown', PaintAButton);

function Start(e){

    const MovingCanvas = document.getElementById('MovingCanvas');
    const MovingContext = MovingCanvas.getContext('2d');

    MovingCanvas.height = window.innerHeight / 1.65;
    MovingCanvas.width = window.innerWidth / 1.65;

    let x_v = 1000;
    let y_v = 600;

    //x_v = x_v - 566;
    //y_v = y_v - 266;

    MovingContext.beginPath();
    MovingContext.arc(x_v, y_v, 5, 0, 2 * Math.PI, false);
    MovingContext.strokeStyle = 'red';
    MovingContext.stroke();

    MovingContext.moveTo(x_v - 25, y_v);
    MovingContext.lineTo(x_v + 25, y_v);
    MovingContext.lineWidth = 5;
    MovingContext.stroke();

}

//window.addEventListener('mousedown', ReadCoor);

/*
function UpdateImage(e){

    const Canvas = document.getElementById('Canvas');
    const Context = Canvas.getContext('2d');

    BackGroundMoving = new Image();
    BackGroundMoving.src = "Big Red Vein Bump.png";
    BackGroundMoving.onload = function () {

    let x = 25;
    let y = 50;
        for(let i = 0; i < 5; i++){


            Context.drawImage(BackGroundMoving, x, y);
            x = x + 15;
            y = y + 10;
        }

        

    };

}

window.addEventListener('mousedown', UpdateImage);*/