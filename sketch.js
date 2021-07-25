var rect1,rect2;
function setup() {
  createCanvas(1200,1200);
   rect1=createSprite(600, 800, 50, 50);
   rect1.shapeColor=("red")
   rect2=createSprite(600, 600, 50, 50);
   rect2.shapeColor=("red")
}

function draw() {
  background(0); 
  rect1.x=World.mouseX; 
  rect1.y=World.mouseY; 
  if (rect1.x-rect2.x<rect1.width/2+rect2.width/2&&rect2.x-rect1.x<rect1.width/2+rect2.width/2
    &&rect1.y-rect2.y<rect1.height/2+rect2.height/2&&rect2.y-rect1.y<rect1.height/2+rect2.height/2) {
    rect1.shapeColor=("blue");
    rect2.shapeColor=("blue");
  } else {
    rect1.shapeColor=("red");
    rect2.shapeColor=("red");
  }
  drawSprites();
}