var wall,thickness
var bullet,speed,weight
function setup() {
  createCanvas(1600,400);
    thickness=random(22,83)
  

bullet = createSprite(50,200,20,20)
wall=createSprite(1200,200,thickness,height/2)
speed=random(223,321)
weight=random(30,52)

}

function draw() {
  background("grey");  
  bullet.velocityX=speed
  wall.shapeColor=color(80,80,80)
  bullet.shapeColor="white"


  

  

  if(hasCollided(bullet,wall))
  {
    bullet.velocityX=0
    var damage=0.5*weight*speed*speed/(thickness*thickness*thickness)
    if(damage>10)
    {
      wall.shapeColor=color(255,0,0)
    }

    if(damage<10)
    {
      wall.shapeColor=color(0,255,0) 
    }
  }
  drawSprites();
}
function hasCollided (bullet,wall)
{
bulletRightEdge=bullet.x+bullet.width
wallLeftEdge=wall.x
if(bulletRightEdge>=wallLeftEdge)
{
  return true
}
return false;
}