var movingrect, fixedrect;
function setup() {
  createCanvas(800,400);
movingrect=createSprite(100,100,80,20)
movingrect.shapeColor="green"
movingrect.debug=true; 
fixedrect = createSprite(200,200,50,50)
fixedrect.shapeColor="green"
fixedrect.debug=true;
}

function draw() 
{
  movingrect.x=mouseX;
  movingrect.y=mouseY; 
  background(255,255,255);
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.x-movingrect.x<fixedrect.width/2+movingrect.width/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2 &&
    fixedrect.y-movingrect.y<fixedrect.height/2+movingrect.height/2){
    movingrect.shapeColor="orange";
    fixedrect.shapeColor="orange";
  }
  else{
    movingrect.shapeColor="green";
    fixedrect.shapeColor="green";
  }

  drawSprites();
}