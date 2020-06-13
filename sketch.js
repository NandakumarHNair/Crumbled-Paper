const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bin;
var paper, launcher;

function preload(){

    bin = loadImage("images/dustbin1.jpg");

}

function setup(){
    var canvas = createCanvas(1200,400);
    
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20); 

    paper = new Paper(200,150);

    launcher = new Launcher(paper.body,{x:200, y:150});
}

function draw(){
    background(255);
    Engine.update(engine);
    ground.display();

    image(bin, 500,220,160,160);

    paper.display();
    launcher.display();   

    //console.log(paper.body.position.y - 220);

}

function mouseDragged(){
    Matter.Body.setPosition(paper.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    launcher.fly();
}