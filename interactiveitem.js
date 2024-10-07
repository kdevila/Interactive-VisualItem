light1 = 'white';
light2 = 'white';
light3 = 'white';
light4 = 'white';
light5 = 'white';

function setup() {
  createCanvas(720, 400);
}

function draw() {
  background('rgb(255,255,185)');
  
  //start text//
  fill("black");
  textSize(15);
  text("Use your mouse to trigger the bottom switches and find the right sequence to win!", 100,370)
  
  //light switches (bottom row)//
  fill("pink");
  ellipse(150,300,50,50);
  ellipse(250,300,50,50);
  ellipse(350,300,50,50);
  ellipse(450,300,50,50);
  ellipse(550,300,50,50);
  
  //lights (top row)//
  fill(light1);
  ellipse(150,100,50,50);
  fill(light2);
  ellipse(250,100,50,50);
  fill(light3);
  ellipse(350,100,50,50);
  fill(light4);
  ellipse(450,100,50,50);
  fill(light5);
  ellipse(550,100,50,50);
  
  if (light1 == '#afdc93' && light2 == '#afdc93' && light3 == '#afdc93' && light4 == '#afdc93' && light5 == '#afdc93'){
    fill("black");
    textSize(50);
    text("You Win!", 250,200);
  }
}

function mousePressed() {
  // User interaction
  if (dist(mouseX, mouseY, 150, 300) < 50/2) {
    // switch 1
    light1 = '#afdc93';
    light4 = '#afdc93';
  }
  if (dist(mouseX, mouseY, 250, 300) < 50/2) {
    // switch 2
    light3 = '#afdc93';
    light4 = 'white';
  }
  if (dist(mouseX, mouseY, 350, 300) < 50/2) {
    // switch 3
    light5 = '#afdc93';
  }
  if (dist(mouseX, mouseY, 450, 300) < 50/2) {
    // switch 4
    light2 = '#afdc93';
    light1= 'white';
  }
  if (dist(mouseX, mouseY, 550, 300) < 50/2) {
    // switch 5
    light1 = 'white';
    light2 = 'white';
    light3 = 'white';
    light4 = 'white';
    light5 = 'white';
  }
}

