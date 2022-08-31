function preload() {
	world_start = loadSound("world_start.wav");
	setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");
}

function setup() {
	canvas = createCanvas(1240,336);
	canvas.parent('canvas');
    video = createCapture(VIDEO);
    video.size(600,300);
  
  poseNet = ml5.poseNet(video, modelLoaded);
  poseNet.on('pose', gotPoses);
	instializeInSetup(mario);
}

function draw() {
	game();
}

function modelLoaded(){
  console.log('Model Loaded!');
}

function draw() {
  background("#D3D3D3");
  if(noseX < 300)    
   {
   morioX = marioX - 1;
   }
  if (noseX > 300)
 {
     marioX = marioX + 1;
 }
  if(noseY < 150) 
     {
     marioY = marioY -1;
     }
  image(img,marioX, marioY, 40,70);
}








