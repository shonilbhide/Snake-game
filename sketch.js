var ht,wd,size,snake,food,rows,cols,scale;
function setup() {
ht=600;
wd=600;

scale=30;
rows=ht/scale;
cols=wd/scale;
size=rows;
createCanvas(ht,wd);
snake=new Snake();
food=new Food()
food.pickLocation();

  // put setup code here
}



function draw() {
  // put drawing code here
  frameRate(10);
  background(255,20,147);
  snake.update();
  food.show();
  snake.show();
  snake.hasEaten();
  snake.death();
  
  



}

function keyPressed()
{
  if(keyCode == UP_ARROW)
  {
    snake.xSpeed=0;
    snake.ySpeed=1;
  }
  if(keyCode == DOWN_ARROW)
  {
    snake.xSpeed=0;
    snake.ySpeed=-1;
  }
  if(keyCode == LEFT_ARROW)
  {
    snake.xSpeed=1;
    snake.ySpeed=-1;
  }
  if(keyCode == RIGHT_ARROW)
  {
    snake.xSpeed=-1;
    snake.ySpeed=1;
  }
}

function mousePressed()
{
  snake.total++;
}