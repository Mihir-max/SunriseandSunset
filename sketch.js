const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var backgroundImg;
var score=0;

var bg ;

function preload() {
    
    
}

function setup(){
    var canvas = createCanvas(1200,700);
    engine = Engine.create();
    world = engine.world;

}

function draw(){

    
    
    if (backgroundImg){

        background(backgroundImg);

    }


    textSize (20)
    text ("Score:"+score,20,20)
    


    Engine.update(engine);
    //getBackgroundImage();
  

async function getBackgroundImg(){
        var response=await fetch("https://worldtimeapi.org/api/timezone/Asia/Kolkata");
        var responsejson=await response.json();
        console.log(responsejson)
        var datetime=responsejson.datetime;
        var hour=datetime.slice(11,13)
        var minute=datetime.slice(14,16)
        console.log (hour)
        console.log (minute)
        if (hour>=04&&hour<=06){
    
            bg = "sunrise1.png";
        }
        else if (hour>=06&&hour<=08){
    
            bg ="sunrise2.png";
        } 
        else if (hour>=23&&hour==0){
    
            bg = "sunrise10.png";
        } 
       
        else if (hour==0&&hour<=03){
    
            bg = "sunrise11.png";
        }

      
        backgroundImg=loadImage(bg);  
    
}
drawSprites();
}