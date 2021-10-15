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

  
    image(slang, this.x, this.y, 30, 30);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;


    if (this.x + 20 > eten.pos.x && this.x < eten.pos.x + 30 && this.y + 20 > eten.pos.y && this.y < eten.pos.y + 30) {
      eten = new Food();
      score += 1;
    }
  }
}

class Food {
  constructor () {
    this.pos = createVector(random(450), random(250));
  }

  draw() {
    image(appel,this.pos.x, this.pos.y, 30, 30);

  }
}

function preload() {
  img1 = loadImage('imgh/gras.jpg');
  appel = loadImage('imgh/appel.png');
  slang = loadImage('imgh/slang.png');
}
var snake;
var eten;

function setup() {
  createCanvas(500, 300);
  snake = new Snake(30, 30, 30, 30, 2, 0);
  eten = new Food();
  score = 0
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
  fill("black");
  text( "score: " + score, 30, 50);
  textSize(14);
  

  if (snake.x > 500 || snake.x < 0 || snake.y > 300 || snake.y < 0) {
    gameState = 2;
  }

}


function gameOver() {
  background(img1);
  textSize(30);
  text("GAME OVER", 160, 150);
  fill("black")
  x = 500;3

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

