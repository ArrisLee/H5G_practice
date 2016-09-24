var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

context.font = '50px Impact';
context.fillStyle = "#0099CC";
context.textAlign = 'center';
context.fillText('My First Game', canvas.width/2, canvas.height/2);

context.font = '20px Courier Bold';
context.fillStyle = "#0099CC";
//context.textAlign = 'center';
context.fillText('Click to start', canvas.width/2, canvas.height/1.5);