var titl = document.getElementById('par');


var timescale = 1500;
setInterval(changetext,timescale);
var index = 0;

function changetext() {
    index++;
    if(index === 0 || index === 1){
        document.getElementById('par').innerHTML = "instructions of the game on the count of 3 for player one A=Rock S=Sicssors D=Paper and for player Two J=Rock K=Sicssors L=Paper";
    }
    else if(index<5){
        document.getElementById('par').innerHTML = index-1;
    }
    else if(index===5){
        document.getElementById('par').innerHTML = "GO";

    }
    else if(index>6 && index!==6){
        document.getElementById('par').innerHTML = "Winner is ..............";
        document.removeEventListener("keypress",lintener);
    }
    else if(index===6){
        document.addEventListener("keypress", lintener);
    }
}

function getinput() {
    console.log("get the two players input");
}



function lintener (event)
{
    if(event.code==='KeyJ'){
        document.getElementById('p2').innerHTML = "Rocks";
    }else if(event.code==='KeyK'){
        document.getElementById('p2').innerHTML = "Paper";
    }else if(event.code==='KeyL'){
        document.getElementById('p2').innerHTML = "Scissors";
    }

    if(event.code==='KeyA'){
        document.getElementById('p1').innerHTML = "Rocks";
    }else if(event.code==='KeyS'){
        document.getElementById('p1').innerHTML = "Paper";
    }else if(event.code==='KeyD'){
        document.getElementById('p1').innerHTML = "Scissors";
    }
    //console.log(event);
}

//setTimeout(getinput(),3);