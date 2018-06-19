var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var snake;
// var snakeX = 0;
// var snakeY = 0;
var dy = 0;
var dx = 0;
var tileSize = 10;
// var snakeWidth = 20;
// var snakeHeight = 20;
// var appleWidth = 20;
// var appleHeight = 20;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var direction;
// var appleX = (Math.floor(Math.random()*10)) * tileSize;
// var appleY = (Math.floor(Math.random()*10)) * tileSize;



function snakeLength() {
    var length = 4;
    snake = [];
    for (var i = 0; i<length; i++) {
        snake.push({x:i, y:0});
    }
}


function drawSnake(x, y) {
    ctx.beginPath();
    ctx.rect(x*tileSize, y*tileSize, tileSize, tileSize);
    ctx.fillStyle = "#dd1817";
    ctx.fill();
    ctx.closePath();
}



// function drawApple() {
//     ctx.beginPath();
//     ctx.rect(appleX, appleY, tileSize, tileSize);
//     ctx.fillStyle = "#3a3fdd";
//     ctx.fill();
//     ctx.closePath();
// }

document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    if (e.keyCode === 39 && direction !== 'left') {
        // rightPressed = true;
        direction = 'right';
    } else if (e.keyCode === 37 && direction !== 'right') {
        // leftPressed = true;
        direction = 'left';
    } else if (e.keyCode === 38) {
        // upPressed = true;
        direction = 'up';
    } else if (e.keyCode === 40) {
        // downPressed = true;
        direction = 'down';
    }
}
// document.addEventListener("keyup", keyUpHandler, false);
// function keyUpHandler(e) {
//     if (e.keyCode === 39) {
//         rightPressed = false;
//     } else if (e.keyCode === 37) {
//         leftPressed = false;
//     } else if (e.keyCode === 38) {
//         upPressed = false;
//     } else if (e.keyCode === 40) {
//         downPressed = false;
//     }
// }

function runSnake() {
    if (direction === 'right') {

    }
} runSnake();

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    if (direction === 'left') {
        snake.push({x:snake[snake.length-1].x-1, y:snake[snake.length-1].y});
        snake.shift();
    } else if (direction === 'up') {
        snake.push({x:snake[snake.length-1].x, y:snake[snake.length-1].y-1});
        snake.shift();
    } else if (direction === 'down') {
        snake.push({x:snake[snake.length-1].x, y:snake[snake.length-1].y+1});
        snake.shift();
    } else {
        snake.push({x:snake[snake.length-1].x+1, y:snake[snake.length-1].y});
        snake.shift();
    }
    for (var i=0; i<snake.length; i++) {
        drawSnake(snake[i].x, snake[i].y);
    }

}

snakeLength();

setInterval(draw, 1000);
