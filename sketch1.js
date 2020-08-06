//matter.js
//creates a physics engine
//Matter.Engine? =
const Engine = Matter.Engine;
//World->makes the object adapt to the world
const World = Matter.World;
//creates the rigid objects
const Bodies = Matter.Bodies;
var engineO, eWorld;
var ground;

function setup() {
    createCanvas(400, 400);
    //in order to create an Engine: cmd -Engine.create();
    //When u create an engine, the engine will return an object
    //we're storing the engine object inside the var engineO
    engineO = Engine.create();
    //eWorld: Engine has a property called as world, engineO.world
    eWorld = engineO.world;
    //create a variable: mention all the changes u want to do 
    var groundOptions = {
            isStatic: true
        }
        /*
        why should you write it in { }?
        the reason is when you create an object -
        JAVASCRIPT STORES THE OBJECT IN BTW THE { }
        */
        //Bodies.rectangle it will create a BODY which u r supposed to 
        //store it in a variable
    ground = Bodies.rectangle(200, 380, 400, 50, groundOptions);
    //You need to the world - so that it inhabits the world and follows
    //physics law.
    World.add(eWorld, ground);
    console.log(ground);
    // console.log(ground.area);
    // console.log(ground.position.x);
}

function draw() {
    background(0);
    //we need to update the engine constantly in function draw
    // in order to do so we use the cmd Engine.update(engine);
    Engine.update(engineO);
    //when you're trying to display the physics object in the screen
    //if it is rectangle ensure that you give the RECT MODE AS CENTER
    rectMode(CENTER);
    //use RECT cmd to display the object
    //in order to display the ground we need to use the object's x position
    //and y position.
    rect(ground.position.x, ground.position.y, 400, 50);
}