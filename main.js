noseX="";
noseY="";
GameStatus=""; 
canvas.parent=0;


function preload()
{
	world_start = loadSound("world_start.wav"); 
    setSprites();
	MarioAnimation();
	img = loadImage("mario05.png");	
	mario_jump = loadSound("jump.wav");
    mario_coin = loadSound("coin.wav");
	mario_coin.play();
	mario_gameover = loadSound("gameover.wav");
	mario_gameover.play();
	mario_kick = loadSound("kick.wav");
    mario_kick.play();
	mario_die = loadSound("die.wav");
}


function setup() {
	createCanvas(1240, 336);
	canvas.parent('canvas');

    instializeInSetup(mario);


	video = createCanvas(VIDEO);
	video.size(800,400);
	video.parent('game_console');

	poseNet = ml5.poseNet(video, modelloaded);
    poseNet,on('pose', gotPoses);
}

function modelloaded() {
	console.log('Model loaded!');
}

function draw() {
	background('#D3D3D3');
	if(noseX < 300)
	{
		marioX = marioX - 1;
  	}
	if(noseX > 300) 
	{
		marioX = marioX + 1;
	}
	if(noseY < 150)
	{
		marioY = marioY - 1;
  	}
    if(noseY < 150)
    {
		marioY = marioY + 1;
		}

	image(img,marioX, marioY, 40, 70);
}

function gotPoses(results)
{
	if(results.length > 0)
	{
		console.log(results);
		noseX = results[0].pose.nose.x;
		noseY = results[0].pose.nose.y;
			
	}
}

function game(){
	console.log("noseX = " + noseX + ", noseY = " + noseY);
}

function startGame()
{
	GameStatus = "start";
	document.getElementById("status").innerHTML = "Game Is Loading";
}

function changeGameStatus(character){
	if(GameStatus=="start"&& noseX !="" && gameConfig.status=="start"){
	world_start .play();
	}
}

function jumping(character){
	if(noseY < 200 && character.live) !! (touchIsDown&&character.live) }{
		mario_jump.play();
		character.velocity.y

	} 



