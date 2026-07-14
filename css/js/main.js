let playerName="";

const canvas =
document.getElementById("gameCanvas");


const ctx =
canvas.getContext("2d");


canvas.width=900;

canvas.height=500;



function startGame(){

    let name =
    document.getElementById(
        "studentName"
    ).value;


    if(name===""){

        alert(
        "请输入你的名字！"
        );

        return;

    }


    playerName=name;


    document.getElementById(
        "menu"
    ).style.display="none";


    canvas.style.display="block";


    gameLoop();

}



function toggleFullScreen(){

    if(!document.fullscreenElement){

        document.documentElement.requestFullscreen();

    }

    else{

        document.exitFullscreen();

    }

}




// Robo-M

let robot={

    x:100,

    y:350,

    width:50,

    height:50,

    speed:5

};



let keys={};



document.addEventListener(
"keydown",
function(event){

    keys[event.key]=true;

});


document.addEventListener(
"keyup",
function(event){

    keys[event.key]=false;

});





function update(){


    if(keys["ArrowRight"]){

        robot.x+=robot.speed;

    }


    if(keys["ArrowLeft"]){

        robot.x-=robot.speed;

    }



}



function draw(){


    ctx.clearRect(
        0,
        0,
        canvas.width,
        canvas.height
    );


    // ground

    ctx.fillStyle="green";

    ctx.fillRect(
        0,
        430,
        900,
        70
    );


    // Robo-M placeholder

    ctx.fillStyle="#2563eb";


    ctx.fillRect(
        robot.x,
        robot.y,
        robot.width,
        robot.height
    );


    ctx.fillStyle="white";

    ctx.font="20px Arial";

    ctx.fillText(
        "🤖 Robo-M",
        robot.x-10,
        robot.y-10
    );


    ctx.fillStyle="black";

    ctx.font="20px Arial";


    ctx.fillText(
        "玩家: "+playerName,
        20,
        30
    );


}




function gameLoop(){

    update();

    draw();

    requestAnimationFrame(
        gameLoop
    );

}
