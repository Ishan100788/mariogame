var mario,platformGroup;

function preload()
{
 
}

function setup() {
  createCanvas(displayWidth, 668);

  var countDistanceX = 0;
  var platform;
  var gap;
  console.log(countDistanceX);
  //creating a mario player
  mario = new Player();

  //creating a group
  platformGroup = createGroup();

  for (var i=0;i<14;i++)
	 {
      platform = new Platform(countDistanceX);
      gap=random([0,0,0,0,80]);
      countDistanceX = countDistanceX + platform.rw + gap; 
      console.log(countDistanceX);
     }
 
}

function draw() {
  background('skyblue');
  //code to move the camera
  translate(-mario.spt.x+width/2,0);
  
  //apply gravity to mario set colliding to platform
  mario.applyGravity();
  mario.spt.collide(platformGroup);

  //calling various function for control mario
  if(keyDown ("left")){
    mario.moveLeft();

  }
  if(keyDown("right")){
    mario.moveRight();
  }
  if(keyDown("up")){
    mario.jump();
  }
  drawSprites();
}



