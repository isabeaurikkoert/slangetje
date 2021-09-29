class Snake {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
    this.vx = vx;
    this.vy = vy;
  }

  drawSnake() {

    rect(this.x, this.y, 40, 20, 20);
    fill(0,216,0);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

  }


}
function preload() {
  img1 = loadImage('imgh/seamless-textured-grass-background-on-lawn-vector-30229922.jpg');
}
var snake;

function setup() {
  createCanvas(500, 300);
  background(img1);
  snake = new Snake(30, 30, 30, 30, 2, 0);
}

function draw() {
  background(225);
  snake.drawSnake();
}

function keyPressed() {
  console.log(keyCode);

  if(keyCode == 40){
    snake.vx = 0;
    snake.vy = 2;
  }
  if(keyCode == 37){
    snake.vx = -2;
    snake.vy = 0;
  }
  if(keyCode == 38){
    snake.vx = 0;
    snake.vy = -2;
  }
  if(keyCode == 39){
    snake.vx = 2;
    snake.vy = 0;
  }
}

