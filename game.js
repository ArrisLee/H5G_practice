//attributes
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var gameStarted = false;
//key mapping
var keys = [];
//speed down -- higher means more slippery
var friction = 0.84;
var player =
	{
		x: 5,
		y: canvas.height - 20,
		width: 20,
		height: 20,
		speed: 5,
		velX: 0,
		velY: 0,
		color: "#ff0000",
		draw: function () {
			context.fillStyle = this.color;
			context.fillRect(this.x, this.y, this.width, this.height);
		}
	}


//logic
intro_screen();

document.body.addEventListener("keydown", function (event) {
	if (event.keyCode == 13 && gameStarted == false) {
		startGame();
		//alert('fuck off');
	}
	keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function (event) {
	keys[event.keyCode] = false;
});


function intro_screen() {
	//set style and location for the text
	context.fillStyle = "#0099CC";
	context.textAlign = 'center';

	//set font
	context.font = '44px Impact';
	//set first draw content and the location on canvas
	context.fillText('My First Game', canvas.width / 2, canvas.height / 2);


	//second draw -- click text
	context.font = '16x Courier Bold';
	context.fillText('Press ENTER to start', canvas.width / 2, canvas.height / 1.5);
}

function startGame() {
	gameStarted = true;
	//console.log("Game started");
	setInterval(function () {
		clearMap();
		loop();
		//1000ms
	}, 1000 / 30)
}

function loop() {
	//console.log("Game running");
	//clearMap();
	player.draw();
	if (keys[39]) {
		if (player.velX < player.speed) {
			player.velX++;
		}
	}
	if (keys[37]) {
		if (player.velX > -player.speed) {
			player.velX--;
		}
	}

	player.x += player.velX;
	player.velX *= friction;
}

function clearMap() {
	context.clearRect(0, 0, 640, 360);
}
