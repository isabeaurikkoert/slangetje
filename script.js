var gameState = 0;


class Snake {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
    this.vx = vx;
    this.vy = vy;
    this.c = "white";
  }

  drawSnake() {

    fill(this.c);
    rect(this.x, this.y, 10, 10);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;


    if (this.x + 10 > eten.pos.x && this.x < eten.pos.x + 10 && this.y + 10 > eten.pos.y && this.y < eten.pos.y + 10) {
      eten = new Food();
      // score ++
    }
  }
}

function preload() {
  img1 = loadImage('imgh/gras.jpg');
}
var snake;
var eten;

function setup() {
  createCanvas(500, 300);
  snake = new Snake(30, 30, 30, 30, 2, 0);
  eten = new Food();
}

function draw() {

  text("gameState" + gameState, 25, 25);

  if (gameState == 0) {
    menu();
  }

  if (gameState == 1) {
    game();
  }

  if (gameState == 2) {
    gameOver();
  }

}

var x = 0;

function menu() {
  background(238, 211, 229);
  textSize(30);
  text("press ENTER to play", 100, 150);
  fill(255, 20, 147)
}

function game() {

  background(img1);
  snake.drawSnake();
  eten.draw();

  if (snake.x > 500 || snake.x < 0 || snake.y > 300 || snake.y < 0) {
    gameState = 2;
  }

}


function gameOver() {
  background(img1);
  textSize(30);
  text("GAME OVER", 160, 150);
  fill("black")
  x = 500;
}


function keyPressed() {
  console.log(keyCode);

  if (keyCode == 40) {
    snake.vx = 0;
    snake.vy = 2;
  }
  if (keyCode == 37) {
    snake.vx = -2;
    snake.vy = 0;
  }
  if (keyCode == 38) {
    snake.vx = 0;
    snake.vy = -2;
  }
  if (keyCode == 39) {
    snake.vx = 2;
    snake.vy = 0;
  }
  if (keyCode == 13) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }
}

