//attributes
var canvas = document.getElementById('game');
var context = canvas.getContext('2d');
var gameStarted = false;
//key mapping
var keys = [];
//speed down -- higher means more slippery
var friction = 0.8;
//limit jump height
var gravity = 0.98;
var player = {
  //position on x axis on canvas, topleft of the canvas is 0,0
  x: 5,
  //as the player's height is 20px
  y: canvas.height - 20,
  width: 20,
  height: 20,
  speed: 5,
  velX: 0,
  velY: 0,
  color: "#ff0000",
  jumpStrength: 14,
  jumping: false,
  draw: function() {
    context.fillStyle = this.color;
    context.fillRect(this.x, this.y, this.width, this.height);
  }
}

var platforms = [];
var platform_width = 120;
var platform_height = 10;

//add one platform into the platform array
platforms.push({
  x: canvas.width - 170,
  y: 40,
  width: platform_width,
  height: platform_height,
});

platforms.push({
  x: canvas.width - 170,
  y: canvas.height - 50,
  width: platform_width,
  height: platform_height,
});
platforms.push({
  x: canvas.width - 380,
  y: canvas.height - 120,
  width: platform_width,
  height: platform_height,
});
platforms.push({
  x: canvas.width - 380,
  y: canvas.height - 240,
  width: platform_width,
  height: platform_height,
});

platforms.push({
  x: canvas.width - 590,
  y: canvas.height - 180,
  width: platform_width,
  height: platform_height,
});


//logic
intro_screen();

document.body.addEventListener("keydown", function(event) {
  if (event.keyCode == 13 && gameStarted == false) {
    startGame();
  }
  keys[event.keyCode] = true;
});

document.body.addEventListener("keyup", function(event) {
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
  context.font = '18px Courier New';
  context.fillText('Press ENTER to start', canvas.width / 2, canvas.height / 1.5);
}

function startGame() {
  gameStarted = true;
  //console.log("Game started");
  setInterval(function() {
    clearMap();
    update();
    //1000ms
  }, 1000 / 55)
}

//draw platforms on canvas
function draw_platforms() {
  context.fillStyle = "#333333";
  for (var i = 0; i < platforms.length; i++) {
    context.fillRect(platforms[i].x, platforms[i].y, platforms[i].width, platforms[i].height);
  }
}

function update() {
  //console.log("Game running");
  //clearMap();
  draw_platforms();
  player.draw();

  //move right
  if (keys[39]) {
    if (player.velX < player.speed) {
      player.velX++;
    }
  }

  //move left
  if (keys[37]) {
    if (player.velX > -player.speed) {
      player.velX--;
    }
  }

  //move up
  if (keys[38] || keys[32]) {
    if (!player.jumping) {
      player.velY = -player.jumpStrength;
      player.jumping = true;
    }
  }
  //basic movement draw
  player.x += player.velX;
  player.y += player.velY;

  //speed down by timing friction
  player.velX *= friction;
  player.velY += gravity;

  //set a condition to stop player from dropping
  if (player.y >= canvas.height - player.height) {
    player.y = canvas.height - player.height;
    player.jumping = false;
  }
}

function clearMap() {
  context.clearRect(0, 0, 640, 360);
}
