

var bullet,wall;


var Speed, Weight,thickness; 


function setup() {
  createCanvas(1600, 400);

	Speed=random(223,321)
	Weight=random(30,52)
    thickness=random(22,83)

	bullet=createSprite(20, 200, 10, 20);   
	bullet.velocityX = Speed;
    bullet.shapeColor=color(255);

  	wall=createSprite(1200,200, thickness, height/2)
  	wall.shapeColor=color(80,80,80)
}


function draw() {
  background(0);

  if(hasCollided(bullet,wall)) {
  	bullet.velocityX=0;
	var Damage= 0.5 * bulletWeight * bulletSpeed * bulletSpeed/(thickness * thickness * thickness);
	  
	if(Damage>10)
	{
	  wall.shapeColor=color(255,0,0);
	}

	if(Damage<10)
	{
	  wall.shapeColor=color(0,255,0);
	}
  }  
  
  drawSprites();
 
}

function hasCollided(lbullet,lwall){
  bulletRightEdge=lbullet.x + lbullet.width;
  wallLeftEdge=lwall.x;
  if (bulletRightEdge>=wallLeftEdge){
    return true;
  }
    return false;
}


