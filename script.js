class Snake {
  constructor(x, y, w, h, vx, vy) {
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
    this.vx = vx;
    this.vy = vy;
    this.total = 0;
    this.tail = [];

    this.eat = function(pos){
      var d = dist(this.x, this.y, pos.x, pos.y);
      if (d < 1) {
        total++;
        return true;
      } else {
        return false;
      }
    }
   }
  
  drawSnake(){

    circle(this.x, this.y, 10, 10);
    fill(0,216,0);

    this.x = this.x + this.vx;
    this.y = this.y + this.vy;

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
  eten = pickLocation();
  framerate = 10;
}
function pickLocation() {
var cols = floor(width/300);
var rows = floor(height/500);
eten = creatVector(floor(random(cols)), floor(random(rows)));
//food.mult(scl);
}

eat(pos){
  let x = this.body[this.body.length-1].x
  let y = this.body[this.body.length-1].y
  if( x == pos.x && y == pos.y) {
    this.grow();
    return true;
  }
  return false;
}



function draw() {
  background(img1);
  snake.drawSnake();
  
  if (snake.eat(eten)) {
    eten = pickLocation();
  }


  fill(255,0,100);
  rect(eten.x, eten.y, 10, 10);

  
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

//this.dir = function(x, y) {
  this.xspeed = x;
  this.yspeed = y;
 }

//this.update = function() {
  for (var i = 0; i < total; i++) {
  }

  this.x = this.x + this.xspeed*scl;
  this.y = this.y + this.yspeed*scl;

  this.x = constrain(this.x, 0, width-scl);
  this.y = constrain(this.y, 0, width-scl);


  }
