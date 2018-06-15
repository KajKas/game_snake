var canvas = document.getElementById('myCanvas');
var ctx = canvas.getContext('2d');
var snakeX = 0;
var snakeY = 0;
var dy = 0;
var dx = 0;
var snakeWidth = 20;
var snakeHeight = 20;
var appleWidth = 20;
var appleHeight = 20;
var rightPressed = false;
var leftPressed = false;
var upPressed = false;
var downPressed = false;
var appleX = (Math.floor(Math.random()*10)) * appleWidth;
var appleY = (Math.floor(Math.random()*10)) * appleWidth;




function drawSnake() {
    ctx.beginPath();
    ctx.rect(snakeX, snakeY, snakeWidth, snakeHeight);
    ctx.fillStyle = "#dd1817";
    ctx.fill();
    ctx.closePath();
}

function drawApple() {
    ctx.beginPath();
    ctx.rect(appleX, appleY, appleWidth, appleHeight);
    ctx.fillStyle = "#3a3fdd";
    ctx.fill();
    ctx.closePath();
}

document.addEventListener("keydown", keyDownHandler, false);
function keyDownHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = true;
    } else if (e.keyCode === 37) {
        leftPressed = true;
    } else if (e.keyCode === 38) {
        upPressed = true;
    } else if (e.keyCode === 40) {
        downPressed = true;
    }
}
document.addEventListener("keyup", keyUpHandler, false);
function keyUpHandler(e) {
    if (e.keyCode === 39) {
        rightPressed = false;
    } else if (e.keyCode === 37) {
        leftPressed = false;
    } else if (e.keyCode === 38) {
        upPressed = false;
    } else if (e.keyCode === 40) {
        downPressed = false;
    }
}

function draw() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    drawSnake();
    drawApple();
    if (rightPressed) {
        snakeX += appleWidth;
    } else if (leftPressed) {
        snakeX -= appleWidth;
    } else if (upPressed) {
        snakeY -= appleWidth;
    } else if (downPressed) {
        snakeY += appleWidth;
    }
    if (snakeX === appleX && snakeY === appleY) {
        snakeWidth += 20;
    }


} setInterval(draw, 80);
