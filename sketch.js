let flowerImages = [];
let numberOfFlowerImages = 12;
let beeImage;
let bees = [];
let bg;
let resetButton;


function preload() {
  bg = loadImage('images/h4.jpg');

  beeImage = loadImage('images/bee.png');

  flowerData = loadTable('flowers.csv', 'csv', 'header');

  for (let i = 1; i <= numberOfFlowerImages; i++) {
    flowerImages.push(loadImage('images/f' + i + '.png'));
  }
  
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  
}

function draw() {
  background(0);

  image(bg, windowWidth/2, windowHeight/2, windowWidth, windowHeight);

  drawFlowers();
  drawMouse();

  rectMode(CENTER);
  rect(windowWidth/2, windowHeight/2 + 300, 700, 50);

  textSize(20);
  textAlign(CENTER);
  text('Press the mouse over the flower so that the bee can gather honey.', windowWidth/2, windowHeight/2 + 295);

  textSize(20);
  textAlign(CENTER);
  text('ENTER to reset.', windowWidth/2, windowHeight/2 + 315);

  for (let bee of bees) {
    bee.display();
  }

}

function mousePressed() {
  let newBee = new Bee(mouseX, mouseY);
  bees.push(newBee);
}

function keyPressed() {
  if (keyCode === ENTER) {
    resetSketch();
  }
}

function resetSketch() {
  bees = [];
  background(255);
}

class Bee {
  constructor(x, y) {
    this.x = x;
    this.y = y;
  }

  display() {
    imageMode(CENTER);
    image(beeImage, this.x, this.y, 200, 150);
  }
}

function drawFlowers() {

  imageMode(CORNER);
  image(flowerImages[0], 1, windowHeight/3)
  image(flowerImages[1], 600, windowHeight/3)
  image(flowerImages[2], 500, windowHeight/3)
  image(flowerImages[3], 1000, windowHeight/3)
  image(flowerImages[4], 300, windowHeight/3)
  image(flowerImages[5], 800, windowHeight/3)
}

function drawMouse() {

  imageMode(CENTER);
  image(beeImage, mouseX, mouseY, 200, 150);

}