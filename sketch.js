var bullet, wall;
var thickness;
var speed, weight;

function setup() {
  createCanvas(1600,400);
  speed=random(223,321)
  weight=random(30,52)
  thickness=random(22,83)
  bullet=createSprite(50,200,50,10)
  wall=createSprite(1200,200,thickness,height/2)
  wall.shapeColor=color(80,80,80)
  wall.debug=true
  bullet.shapeColor=("white")
}

function draw() {
  background("black");  
  bullet.velocityX=speed;
  if(wall.x - bullet.x < (bullet.width+wall.width)/2 ){
    bullet.velocityX = 0;
    var deformation = 0.5* weight* speed* speed/22500;

    if(deformation>180){
    bullet.shapeColor= color(255,0,0);
    }
    if(deformation<180 && deformation>80){
      bullet.shapeColor= color(230,230,0);
      }
      if(deformation<80){
        bullet.shapeColor= color(0,225,0);
        }
  }
  if(hasCollided(bullet,wall)){
    bullet.velocityX=0;
    var damage=(0.5*weight*speed*speed)/22509;
    if (damage>10){
      wall.shapeColor=("red");
    } else if (damage<10){
      wall.shapeColor=("green")
    }
    
  }
  drawSprites();
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x+lbullet.width;
  wallLeftEdge=lwall.x;
  if(bulletRightEdge>=wallLeftEdge){
    return true;
  }
  return false;
}