const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var box1,box2,box3,box4,box5,box6;
var Log1,Log2,Log3


function setup(){
    var canvas = createCanvas(1200,410);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,340,70,70);
    box2 = new Box(930,340,70,70)

    ground = new Ground(600,height,1200,25)
   Log1 = new Log(815,320,300,PI/2)
    
   box3= new Box(700,280,70,70)
   box4= new Box(930,280,70,70)
   Log2 = new Log(815,275,300,PI/2)
   
   box5= new Box(700,190,70,70)
   box6= new Box(930,190,70,70)
  Log3 = new Log(815,175,300,PI/2)
}

function draw(){
    background(0);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    Log1.display()
    box3.display();
    box4.display();
    Log2.display()
    box5.display();
    box6.display();
    Log3.display()
}