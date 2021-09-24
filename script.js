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
   
    //this.x+this.vx;
   
    //this.y+this.vy;
   // if(this.x<=0 || this.x>500){
   // this.vx=this.vx*-1;
   // }
  //  if(this.y<=0 || this.y>400){
  //  this.vy=this.vy*-1;
   // }
  }
  

}

function keyPressed() {
  switch (keyCode) {
   case 37:
   case 65:
    xspeed = -2;
  case 39:
  case 68:
    xspeed = 2;
}


function setup() {
	createCanvas(500, 400);

  snake = new Snake(30,30,30,30,6,6);
}

function draw() {
	background(225);
	snake.drawSnake();

}