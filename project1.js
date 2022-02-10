var radius = 50;//半径
var d = 2 * radius;
var x = 0;


function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  rectMode(CENTER);
  frameRate(20);    
  window.alert('Welcome to my Art 151 Project 1.\nThere are mutiple way of using this webpage \n  1. Drag your mouse across the page.\n  2. You can use Key R to change color\n  3. You can use your left arrow and right arrow\n  4. You can use Key A or D to change the shape');
  r = random(255);
  g = random(100,200);
  b = random(100);
}

function draw1() {
    fill(230);
    for(i=1;i<=(windowWidth/10);i++){
      for(j = 1;j<=(windowHeight/10);j++){
    ellipse((2*i-1)*radius + 5*i, (2*j-1)*radius + 5*j, d, d);
      }
    }
  }
  
  function draw2() {

    // x+=0.1;
    for(i=1;i<=(windowWidth/20);i++){
      for(j = 1;j<=(windowHeight/20);j++){
        fill(r, g, b);
        arc((4*i-3)*radius + 5*(2*i-1), (4*j-3)*radius + 5*(2*j-1), d+1, d+1, -x, PI/2-x); 
        arc((4*i-1)*radius + 10*i, (4*j-3)*radius + 5*(2*j-1), d+1, d+1, HALF_PI+x, PI/2+HALF_PI+x); 
        arc((4*i-3)*radius + 5*(2*i-1), (4*j-1)*radius + 10*j, d+1, d+1, -HALF_PI+x, PI/2-HALF_PI+x); 
        arc((4*i-1)*radius + 10*i, (4*j-1)*radius + 10*j, d+1, d+1, PI-x, HALF_PI+PI-x); 
      }
    }
  }
function mouseDragged() {
  x+=0.1;
  if (x > 255) {
    x = 0;
  }
}


function keyPressed() {
  if (keyCode === 82 ) {
    r = random(255); 
    g = random(100,200);
    b = random(100);
  }

  

}


function draw(){
  background(32);
  draw1();
  draw2();
  if (keyIsDown(LEFT_ARROW)) {
    x+=0.1;
    if (x > 255) {
      x = 0;
    }
  } 
  if (keyIsDown(RIGHT_ARROW)) {
    x-=0.1;
    if (x > 255) {
      x = 0;
    }
  }
  if (keyIsDown(65)) {
    x+=0.1;
    if (x > 255) {
      x = 0;
    }
  } 
  if (keyIsDown(68)) {
    x-=0.1;
    if (x > 255) {
      x = 0;
    }
  }


}