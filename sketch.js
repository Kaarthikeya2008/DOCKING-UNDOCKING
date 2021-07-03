var iss, spacecraft, hasDocked, space
var hasDocked = false

function preload(){
  space=loadImage("Images/Docking-undocking/spacebg.jpg");
  spacecraft1=loadImage("Images/Docking-undocking/spacecraft1.png");
  spacecraft2=loadImage("Images/Docking-undocking/spacecraft2.png");
  spacecraft3=loadImage("Images/Docking-undocking/spacecraft3.png");
  spacecraft4=loadImage("Images/Docking-undocking/spacecraft4.png");
  iss1=loadImage("Images/Docking-undocking/iss.png");
}








function setup() {
  createCanvas(1000,600);
  iss=createSprite(350, 200, 50, 50);
  iss.addImage(iss1);
  iss.scale=0.50;

  spacecraft=createSprite(280,300,50,50);
  spacecraft.addImage(spacecraft1);
  spacecraft.scale=0.15

  
}

function draw() {
  background(space); 
  if (!hasDocked){
    spacecraft.x=spacecraft.x+random (-1,1)
  }
  if (keyDown(UP_ARROW)){
    spacecraft.y=spacecraft.y-1;
  }
  if (keyDown(DOWN_ARROW)){
    spacecraft.addImage(spacecraft2)
  }
  if (keyDown(RIGHT_ARROW)){
    spacecraft.addImage(spacecraft4)
    spacecraft.x=spacecraft.x+1;
  }
  if (keyDown(LEFT_ARROW)){
    spacecraft.addImage(spacecraft3)
    spacecraft.x=spacecraft.x-1;
    
  }
  
  if (spacecraft.y<=(iss.y+70)  && spacecraft.x<=(iss.x-12)){
    hasDocked=true
    fill ("white")
    textSize (20)
    text ('Docking Successful',700,300)
  }








  drawSprites()
}