function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
  
  
  //draw the face
  stroke('black');
  fill('yellow')
  ellipse (200,200,200,200);
  
  textSize(20)
  fill(0,0,0);
  text('MouseX'  + mouseX,0,20);
  text('MouseX'  + mouseX,0,40);
  
  ellipse (160,180,30,30);
  ellipse (240,180,30,30);
  arc(200,230,90,50,0,154);
  
  
}