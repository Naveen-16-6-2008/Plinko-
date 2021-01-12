const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;

    var divisionHeight = 300;

    var particles = [];
var plinkopos = [];
var divisions =[];

    function preload(){

    }

    function setup(){
    createCanvas(480, 800);

        
	engine = Engine.create();
    world = engine.world;
    
    //Create the Bodies Here.
	ground = new Ground(600,795,2000,15);



	


    Engine.run(engine);

    }

    function draw(){
    background(0);
    for(var k = 0;k<=width;k=k+80){
      divisions.push (new Divisions(k, height-divisionHeight/2, 10, divisionHeight) ) ;
    }
      
        for (var j = 15; j <=width-10; j=j+50) {
        plinkopos.push (new plinko(j, 175));
        }

        for (var j = 0; j < particles. length; j++) {

          particles [j] . display ( ) ;
          for (var k = 0; k < divisions. length; k++) {
          divisions [k] . display ( ) ;
          }
        }
    
        ground.display();
    }