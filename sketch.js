const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const constraint = Matter.Constraint;

var Mouse;

function setup() {
  canvas = createCanvas(800,800);

  engine = Engine.create();
	world = engine.world;

  /*let canvasmouse = Mouse.create(canvas.elt);
  canvasmouse.pixelRatio = pixelDensity();

  let options = {
    mouse: canvasmouse
  };

  mConstraint = MouseConstraint.create(engine,options);
  World.add(world, mConstraint)*/

  pendulum = new Pendulum(250,250,"red")

  Roof1 = new Roof(400,225,400,30)

	Pendulum1 = new Pendulum(400,450,"red");
	Pendulum2 = new Pendulum(320,450,"red");
	Pendulum3 = new Pendulum(480,450,"red");
	Pendulum4 = new Pendulum(240,450,"red");
	Pendulum5 = new Pendulum(560,450,"red");

	rope1 = new Sling(Pendulum1.body,Roof1.body,0,0)
	rope2 = new Sling(Pendulum2.body,Roof1.body,-60,0)
	rope3 = new Sling(Pendulum3.body,Roof1.body,60,0)
	rope4 = new Sling(Pendulum4.body,Roof1.body,-120,0)
	rope5 = new Sling(Pendulum5.body,Roof1.body,120,0)


  Engine.run(engine);
}

function draw() {
  background("gray");

  Roof1.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  Pendulum1.display();
  Pendulum2.display();
  Pendulum3.display();
  Pendulum4.display();
  Pendulum5.display();
}

function mouseDragged(){
  if(mouseX < 400){
    //Matter.Body.setStatic(Pendulum4.body,true);
    Matter.Body.setPosition(Pendulum4.body,{x:mouseX,y:mouseY});
  }
  else if(mouseX > 400){
    Matter.Body.setPosition(Pendulum5.body,{x:mouseX,y:mouseY});
  }
}

function mouseReleased(){
  Matter.Body.setStatic(Pendulum1.body,false);
  Matter.Body.setStatic(Pendulum2.body,false);
  Matter.Body.setStatic(Pendulum3.body,false);
  Matter.Body.setStatic(Pendulum4.body,false);
  Matter.Body.setStatic(Pendulum5.body,false);
}