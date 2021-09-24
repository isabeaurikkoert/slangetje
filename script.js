class Snake{
  constructor(x, y, w, h, vx, vy){
    this.x = x;
    this.y = y;
    this.w = w
    this.h = h
    this.vx = vx;
    this.vy = vy;
  }

  drawSnake(){	

    square(this.x, this.y, 50, 50);

    this.x=this.x+this.vx;
    this.y=this.y+this.vy;

    
  }
  

}

function keyPressed() {
  switch (keyCode) {
   case 37:
   case 65:
    this.vx = -2;
  case 39:
  case 68:
    this.vx = 2;
  }
}

function keyRelease() {
  switch (keyCode) {
   case 37:
   case 65:
    this.vx = 0;
  case 39:
  case 68:
    this.vx = 0;
  }
}


function setup() {
	createCanvas(500, 400);

  snake = new Snake(30,30,30,30,0,0);
}

function draw() {
	background(225);
	snake.drawSnake();
  }