var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var gameStarted = false;

intro_screen();

document.body.addEventListener("keydown", function(event)
{
	if(event.keyCode == 13 && gameStarted == false)
	{
		startGame();
		//alert('fuck off');
	}
	
});




function intro_screen()
{
	//set style and location for the text
	context.fillStyle = "#0099CC";
	context.textAlign = 'center';

	//set font
	context.font = '50px Impact';
	//set first draw content and the location on canvas
	context.fillText('My First Game', canvas.width/2, canvas.height/2);


	//second draw -- click text
	context.font = '20px Courier Bold';
	context.fillText('Press enter to start', canvas.width/2, canvas.height/1.5);
}

function startGame()
{
	gameStarted = true;
	console.log("started");
	setInterval(function()
	{
		clearMap();
		loop();
	//1000ms
	},1000/30)
}

function loop()
{
	console.log("Game running");
}

function clearMap()
{
	context.clearRect(0,0,720,360);	
}