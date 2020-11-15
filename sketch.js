var  wall,thickness;

var  bullet,speed, weight;


function setup() {
  createCanvas(1000,400);

  speed = random(55,90);
  weight = random(400,1500);
  //thickness=random(22,83);
  
  car = createSprite(50,200,50,50)
  wall = createSprite(800,200,20,height/2)
  wall.shapeColor=color(80,80,80);

  car.velocityX = speed;
}

function draw() {
  background(0); 
  
  if(wall.x - car.x<=(car.width + wall.width)/2){
    car.velocityX = 0;
    var deformation = (0.5 * weight * speed * speed)/22500;

    if(deformation > 180){
      car.shapeColor = color(225,0,0);
    }

    if(deformation < 180 && deformation > 100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation < 100){
      car.shapeColor = color(0,225,0);
    }
  }
  drawSprites();
}