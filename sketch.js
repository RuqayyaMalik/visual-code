var box1,box2,box3,box4;


function setup() {
  createCanvas(800,400);
  box1 = createSprite(400, 200, 50, 50);
  box2 = createSprite(400,300,50,50)
  box3 = createSprite(400,350,50,50);
  box4 = createSprite(400,100,50,50);


  box1.debug = true
  box2.debug = true



  box1.shapeColor = "black"
  box2.shapeColor = "black"

}

function draw() {
  background("yellow");  



  box2.x = mouseX
  box2.y = mouseY

if (myistouching(box4,box2)){
  box4.shapeColor = "blue"
  box2.shapeColor = "blue"

}
else
{

  box4.shapeColor = "black"
  box2.shapeColor = "black"

}

 drawSprites()
}
 


  