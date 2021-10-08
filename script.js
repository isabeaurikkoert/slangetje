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
  eten = createVector(random(width), random(height));
}

function draw() {
  background(img1);
  snake.drawSnake();

  fill(255, 0, 100);
  rect(eten.x, eten.y, 10, 10);


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
}

