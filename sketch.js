const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
    const Constraint = Matter.Constraint;
    var score = 0;


    function preload(){

    }

    function setup(){
    createCanvas(2000, 700);

        
	engine = Engine.create();
    world = engine.world;
    
    //Create the Bodies Here.
	ground1 = new Ground(600,height,2000,20);
	ground2 = new Ground(590,400,255,10);
    ground3 = new Ground(1000,250,225,10);
    polygon = new Polygon(200,250,30);

block1 = new Block(495,375,30,40);
block2 = new Block(525,375,30,40);
block3 = new Block(555,375,30,40);
block4 = new Block(585,375,30,40);
block5 = new Block(610,375,30,40);
block6 = new Block(640,375,30,40);
block7 = new Block(670,375,30,40);

    block8 = new Block(525, 335, 30, 40) ;
    block9 = new Block (555, 335, 30, 40) ;
    block10 = new Block(585, 335, 30, 40) ;
    block11 = new Block(610, 335, 30, 40) ;
    block12 = new Block(640, 335, 30, 40) ;
    //level three
    block13 = new Block(555, 295, 30, 40) ;
    block14 = new Block(585, 295, 30, 40) ;
    block15 = new Block(610, 295, 30, 40) ;
    //top
    block16 = new Block(582, 255, 30, 40) ;
    block17 = new Block(925, 225, 30, 40) ;
    block18 = new Block (955, 225, 30, 40) ;
    block19 = new Block(985, 225, 30, 40) ;
    block20 = new Block(1015, 225, 30, 40) ;
    block21 = new Block(1045, 225, 30, 40) ;
    //level three
    block22 = new Block(955, 185, 30, 40) ;
    block23 = new Block(985, 185, 30, 40) ;
    block24 = new Block(1015, 185, 30, 40) ;
    //top
    block25 = new Block(985, 145, 30, 40) ;


	slingshot = new SlingShot(polygon.body,{x:200,y:250});


    Engine.run(engine);

    }

    function draw(){
    background(225);
    textSize(25);

	text("Drag the Hexagonal Stone and Release it, to launch it towards the block",100,50);
    
    textSize(20);
    text("Press Space to get a second chance to play !!",900,600)
    textSize(25)
    fill("white")
    text("Score  " + score, 1000, 50)

    Engine.update(engine);

        ground1.display();
        ground2.display();
        ground3.display();
        fill(135,206,234);

        block1.display();
        block1.score();
        
        block2.display();
        block2. score( ) ;

        block3.display();
        block3. score( ) ;
``
        block4.display();
        block4. score( ) ;

        block5.display();
        block5. score( ) ;

        block6.display();
        block6. score( ) ;

        block7.display();
        block7. score( ) ;

        fill(255,192,203);

        block8.display();
        block8. score( ) ;

        block9.display();
        block9. score( ) ;

        block10.display();
        block10. score( ) ;

        block11.display();
        block11. score( ) ;

        block12.display();
        block12. score( ) ;

        fill(63,224,208);

        block13.display();
        block13. score( ) ;

        block14.display();
        block14. score( ) ;

        block15.display();
        block15. score( ) ;

        fill(128,128,128);
        block16.display();
        block16. score( ) ;

        fill(135,206,234);

        block17.display();
        block17. score( ) ;

        block18.display();
        block18. score( ) ;

        block19.display();
        block19. score( ) ;

        block20.display();
        block20. score( ) ;

        block21.display();
        block21. score( ) ;

        fill(255,192,203);

        block22.display();
        block22. score( ) ;

        block23.display();
        block23. score( ) ;

        block24.display();
        block24. score( ) ;

        fill(128,128,128);

        block25.display();
        block25. score( ) ;






        polygon.display();
        slingshot.display();
    }

    function mouseDragged(){
        Matter.Body.setPosition(polygon.body,{x:mouseX,y:mouseY});
    }
    
    function mouseReleased(){
        slingshot.fly();		
    }

function keyPressed() {
 if (keyCode === 32){
    Matter . Body .setPosition(polygon. body, {x:200, y:250})
    slingshot.attach(polygon.body);
    }
}
async function getBackground(){
    var response = await fetch("http://worldtimeapi.org/api/timezone/Asia/Kolkata");
    var responseJSON = await response.json();

    var datetime = responseJSON.datetime;
    var hour = datetime.slice(11,13);
    
    if(hour>=06 && hour<=19){
        background(255);

    }
    else{
        background(0);
    }

}

    
