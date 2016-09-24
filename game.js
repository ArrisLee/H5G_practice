var canvas = document.getElementById('game');
var context = canvas.getContext('2d');

//set style and location for the text
context.fillStyle = "#0099CC";
context.textAlign = 'center';

//set font
context.font = '50px Impact';
//set first draw content and the location on canvas
context.fillText('My First Game', canvas.width/2, canvas.height/2);


//second draw -- click text
context.font = '20px Courier Bold';
context.fillText('Click to start', canvas.width/2, canvas.height/1.5);