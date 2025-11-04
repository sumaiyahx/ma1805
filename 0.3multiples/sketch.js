let thetext= ("text", "example", "to", "Display");
let word= thetext[2];


function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220); circle(200, 200, 50);

  tetSize (40);

  text (word,30, height/2);

  
}
