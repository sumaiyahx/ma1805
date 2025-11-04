function setup() {
  createCanvas(500, 500); // canvas width/height
  background(0); // Make background black
}

// Start draw function code block
function draw(){ 
  fill(255);    // Set fill color
  ellipse(250, 250, 200, 200); 
} 
// End of the code block













let moving_size = 80;
let static_size = 20;
function setup() {
  createCanvas(windowWidth, windowHeight);
  frameRate(15);
}
function draw() {
  //background
  background(random(230, 240));
  //left
  noStroke()
  fill(133,194,230);
  beginShape();
  circle(140, 200, 200);
  fill (235, 199, 237);
  endShape(CLOSE);
  //right
  noStroke()
  //bottom
  noFill();
  stroke(130);
  strokeWeight(2);
  ellipse(255, 350, static_size, static_size);
  //mouse interactions
 
  fill(3000, 100, 200)
  circle(94, 180, 40); 
  circle(180, 180, 40);
  rect(85,245,110,20);
  fill(235,199,240);
  ellipse(145, 275, 40, 80);

}
