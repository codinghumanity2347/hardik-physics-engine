var movingRect, fixedRect;
//depth
function setup() {
    createCanvas(800, 800);
    fixedRect = createSprite(400, 400, 100, 100);
    fixedRect.debug = true;
    fixedRect.shapeColor = "white";
    movingRect = createSprite(600, 300, 100, 100);
    movingRect.debug = true;
    movingRect.shapeColor = "white";
    console.log(movingRect.width / 2 + fixedRect.width / 2);

}

function draw() {
    background(0);
    movingRect.x = mouseX;
    movingRect.y = mouseY;
    console.log(movingRect.x - fixedRect.x);
    if (movingRect.x - fixedRect.x <= movingRect.width / 2 + fixedRect.width / 2 &&
        fixedRect.x - movingRect.x <= movingRect.width / 2 + fixedRect.width / 2 &&
        movingRect.y - fixedRect.y <= movingRect.height / 2 + fixedRect.height / 2 &&
        fixedRect.y - movingRect.y <= movingRect.height / 2 + fixedRect.height / 2) {
        fixedRect.shapeColor = "red";
        movingRect.shapeColor = "red";
    } else {
        movingRect.shapeColor = "white";
        fixedRect.shapeColor = "white";
    }
    drawSprites();
}