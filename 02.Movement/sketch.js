let i = 0;

function setup () {
  createCanvas(400, 400);
}

function draw () {
  background(220);

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
  ellipse(145, 275, i, 80);

  //Triangle 
  triangle(200, 50, i, 150, i, 150);


// Increment i
  i += 1;
}

