const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var balloon;

function preload() {
      bg = loadImage("bg.png"); 
      balloonImage = loadAnimation("balloon1.png , balloon2.png , balloon3.png");
}

function setup(){
    createCanvas(1300,600);
    engine = Engine.create();
    world = engine.world;

}

function draw(){
    background(bg);
    
    Engine.update(engine);
    
   

}
