// An highlighted block
var a = 50;//半径
var d = 2 * a;
var x = 0;

function setup() {
  createCanvas(635, 635);
  noStroke();
  rectMode(CENTER);
  frameRate(30);    
}

function draw1() {
    fill(230);
    for(i=1;i<=6;i++){
      for(j = 1;j<=6;j++){
    ellipse((2*i-1)*a + 5*i, (2*j-1)*a + 5*j, d, d);
      }
    }
  }
  function draw2() {
    fill(32);
    x+=0.1;
    for(i=1;i<=3;i++){
      for(j = 1;j<=3;j++){
    arc((4*i-3)*a + 5*(2*i-1), (4*j-3)*a + 5*(2*j-1), d+1, d+1, -x, PI/2-x); 
    arc((4*i-1)*a + 10*i, (4*j-3)*a + 5*(2*j-1), d+1, d+1, HALF_PI+x, PI/2+HALF_PI+x); 
    arc((4*i-3)*a + 5*(2*i-1), (4*j-1)*a + 10*j, d+1, d+1, -HALF_PI+x, PI/2-HALF_PI+x); 
    arc((4*i-1)*a + 10*i, (4*j-1)*a + 10*j, d+1, d+1, PI-x, HALF_PI+PI-x); 
      }
    }
  }

function draw(){
  background(32);
  draw1();
  draw2();
}