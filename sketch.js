var h, m, s;
var hAngle, mAngle, sAngle;

function setup() {
  createCanvas(400,400);
  
}

function draw() {
  background(0,0,0);
  h=hour();
  m=minute();
  s=second();
  console.log(h,m,s);
  hAngle=map(h%12,0,12,0,360);
  mAngle=map(m,0,60,0,360);
  sAngle=map(s,0,60,0,360);

  textSize(45)
  text(".",200,80)

  textSize(45)
  text(".",200,310)

  textSize(45)
  text(".",310,200)

  textSize(45)
  text(".",80,200)

  translate(200,200)
  rotate(-90);
  push()
  rotate(sAngle)
  stroke("red");
  strokeWeight(7);
  line(0,0,100,0);
  pop()
  
  push()
  rotate(mAngle)
  stroke("green");
  strokeWeight(7);
  line(0,0,80,0);
  pop()

  push()
  rotate(hAngle)
  stroke("blue");
  strokeWeight(7);
  line(0,0,60,0);
  pop()
}