var car,wall;
var speed,weight;

function setup() {
  //The canvas is 1600 pixels wide and 400 pixels tall
  createCanvas(1600,400);
  
  //Setting speed and weight to random values 
  speed = random(55,90);
  weight = random(400,1500);
  
  //car and wall
  car = createSprite(50,200,50,30);
  wall = createSprite(1500,200,60,height/2);
  
  //Color for wall sprite
  wall.shapeColor = color(80,80,80);
}

function draw() {
  //Background
  background(255,255,205); 
  
  //Giving X velocity to the car
  car.velocityX = speed;
  
  /*Conditions*/
  //Detecting the collision of the car with the wall
  if (wall.x - car.x < wall.width/2 + car.width/2){
    //When the collision happens, set the velocityX of the car to 0
    car.velocityX = 0;
    /*Calculate deformation*/
    var deformation = 0.5*weight*speed*speed / 22500;
    //When collision happens, based on deformation calculations determine the color of the car as red, yellow or green
    if(deformation < 100){
      car.shapeColor = color(0,255,0);
    }

    if(deformation<180 && deformation>100){
      car.shapeColor = color(230,230,0);
    }

    if(deformation > 180){
      car.shapeColor = color(255,0,0);
    }

  }

  drawSprites();
}
