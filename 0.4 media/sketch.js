let img; //"antenna.jpg".
let hum;
let capture;
let video;

function preload() {
  img= loadImage("Antenna.jpg");// Load image
  //hum= loadSound ("hum.wav");
  //video= createVideo ("TheSea.mp4");
  //video.hide(); // Required to hide HTML
  //video.play();

  // video capture
  //capture = createCapture(VIDEO); 
  //capture.size(320,240);
  //capture.hide();
}

function setup() {
  createCanvas (windowWidth, windowHeight);
  background (0, 255, 0)
  //hum.amp(0.1);
  //video.amp(0.1);
}

function draw() {
  background(200);
  image(img, 0, 0, windowWidth, windowHeight);
  //image(img, 0, 100,img.width/2, mouseX;
  circle(50,50,50);
  //image(capture,200,200);
  //video 
}
