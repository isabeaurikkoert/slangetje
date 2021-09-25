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

    square(this.vx, this.vy, 50, 50);

    this.x=this.x*this.vx;
    this.y=this.y*this.vy;
    
  }
  

}

function keyPressed() {
    if(keyCode === 39){
      this.vx=this.vx*1;
    }
    if(keyCode === 37){
      this.vx=this.vx*-1;
    }
  }


function keyRelease() {
   if(keyCode === 39){
      this.vx= 0;
    }
    if(keyCode === 37){
      this.vx= 0;
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