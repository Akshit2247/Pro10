var sea
var sea_ship

function preload(){
seaImage = loadImage("sea.png")
shipImg1 = loadAnimation("ship-1.png,ship-2.png,ship-3.png,ship-4.png")
}

Sea.addimage(sea.Img)
Sea.velocityX = -10

function setup(){
  createCanvas(400,400);
  
}

function draw() {
  background("blue");
 
}

if (sea.x < 0) {
  sea.x = sea.width/2
}