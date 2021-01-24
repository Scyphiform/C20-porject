var background,background_img;
var cat,cat_img,mouse,mouse_img,mouse_img2;

function preload() {
    //load the images here
    background_img = loadImage("images/garden.png");
    cat_img = loadImage("images/cat1.png");
    mouse_img = loadImage("images/mouse1.png");
    mouse_img2 = loadImage("images/mouse2.png");
}

function setup(){
    createCanvas(1000,800);
    //create tom and jerry sprites here

}

function draw() {
    background = createSprite(200,200,10,10);
    background.addImage(background_img);
    background.scale = 2;

    cat = createSprite(mouseX-300,mouseY,10,10);
    cat.addImage(cat_img);
    cat.scale = 0.1;

    mouse = createSprite(200,200,10,10);
    mouse.addImage(mouse_img);
    mouse.scale = 0.1;
    //Write condition here to evalute if tom and jerry collide

    if(cat.isTouching(mouse)){
        console.log("pog");
        mouse.addImage(mouse_img2);
    }

    drawSprites();
}


function keyPressed(){

  //For moving and changing animation write code here


}
