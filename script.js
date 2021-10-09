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
    

    if (this.x + 10 > eten.x && this.x < eten.x + 10) {
     if (this.y + 10 > eten.y && this.y < eten.y + 10){ 
        this.c = "red";
      }
      else{
        this.c = "white";
    }
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
  eten = createVector(random(450), random(250));
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
  background("pink");
  text("MENU", 25, 45);
  text("1. start", 25, 65);
  text("2. game over", 25, 85);
  text("3. terug naar menu", 25, 105);
}

function game() {

  background(img1);
  snake.drawSnake();

  fill(255, 0, 100);
  rect(eten.x, eten.y, 10, 10);
  if(this.x = 10 > 500){
    gameState = 2;
  }
  }


function gameOver() {
  background("green");
  text("GAME OVER", 25, 45);
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
  if (keyCode == 49) {
    gameState = 1;
  }

  if (keyCode == 50) {
    gameState = 2;
  }

  if (keyCode == 51) {
    gameState = 0;
  }
}

