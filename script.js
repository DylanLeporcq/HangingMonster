let random = randomWord(words);
let NBofLT = random.length;
let tapedLet = document.getElementById('tapped');
let enterLt = document.getElementById('tap_letter');
let zombies = document.getElementById('zombies');
let all = document.getElementById('all');
let body = document.getElementById('body');
let guesses = document.getElementById('guesses');
let interface = document.getElementById('interface');
let grid = [];

let nbLetter = 0;
lifes=0;
mistakes=0;

document.getElementById('refresh').addEventListener('click', function () {
    location.reload();
});

document.getElementById('retry').addEventListener('click', function () {
    location.reload();
});

function easyMode() {
    lifes=lifes+7;
    document.getElementById('consigne').innerHTML='If you tap a wrong letter, zombies will be more dangerous. Be careful !';
    document.getElementById('difficulties').style.display='none';
    document.getElementById('refresh').style.display='block';
    document.getElementById('dif_end').innerHTML='Easy';
    interface.style.display='block';
    beginGame();
}

function mediumMode() {
    lifes=lifes+5;
    document.getElementById('consigne').innerHTML='If you tap a wrong letter, zombies will be very faster. Be careful.';
    document.getElementById('difficulties').style.display='none';
    document.getElementById('refresh').style.display='block';
    document.getElementById('dif_end').innerHTML='Medium';
    interface.style.display='block';
    beginGame();
}
function hardMode() {
    lifes=lifes+3;
    document.getElementById('consigne').innerHTML='If you tap a wrong letter, zombies will be very fuckin faster. Be careful.';
    document.getElementById('difficulties').style.display='none';
    document.getElementById('refresh').style.display='block';
    document.getElementById('dif_end').innerHTML='Hard';
    interface.style.display='block';
    beginGame();
}

function survivorMode() {
    lifes=lifes+1;
    document.getElementById('consigne').innerHTML='If you tap a wrong letter ... zombie will instant kill you';
    document.getElementById('difficulties').style.display='none';
    document.getElementById('refresh').style.display='block';
    document.getElementById('dif_end').innerHTML='Survivor';
    interface.style.display='block';
    beginGame();
}

function randomWord(e) {
    return e[Math.floor(Math.random()*e.length)];
}

function beginGame() {
    document.getElementById('begin').style.display='none';
    document.getElementById('enter').style.display='block';
    document.getElementById('tap_letter').style.display='inline-block';
    checkLetters();
}



function submitLetter() {
    var nb = enterLt.value;
    tappedLetters(nb);
    if (random.indexOf(nb)<0) {
        wrongLetter();
        deathComing();
    }
    else {
        checkLetters();
    }
    enterLt.value="";
}

function tappedLetters(nb) {
    tapedLet.innerHTML+= " " + nb;
    grid.push(nb);
}

function wrongLetter() {
   lifes=lifes-1;
   mistakes=mistakes+1;{
       if (lifes === 0) {
        all.style.display='none';
        body.style.backgroundImage="url(pics/gameover.jpg)";
        document.getElementById('retry').style.display='block';
       }
    }
}

var trouve = 0;
var motsT = [];

function checkLetters() {
    var p=document.getElementById("guesses");
    var child = p.lastElementChild;
    while (child) {
        p.removeChild(child);
        child = p.lastElementChild;
    }
    for (var i=0; i<=NBofLT-1; i++) {
        var e=document.createElement("span");
        e.className='guesses';
        if (grid.includes(random[i])) {
            if(!motsT[i]) {
                motsT[i] = random[i];
                trouve++;
            }
            e.innerHTML = random[i];
        } else {
            e.innerHTML="_";
        }
        p.appendChild(e);
    }
    if(trouve == random.length )
    {
        all.style.display='none';
        body.style.backgroundImage="url(pics/endscore.jpg)";
        document.getElementById('classement').style.display='block';
        document.getElementById('retry').style.display='block';
        rankingEnd();
    }
}

function deathComing() {
    lifes;
    {
        if (lifes===6) {
            zombies.style.left='80px';
        } else if (lifes===5) {
            zombies.style.left='120px';
        }else if (lifes===4) {
            zombies.style.left='160px';
        }else if (lifes===3) {
            zombies.style.left='200px';
        }else if (lifes===2) {
            zombies.style.left='240px';
        }else if (lifes===1) {
            zombies.style.left='280px';
        }
    }
}

function rankingEnd() {
    document.getElementById('mis_end').innerHTML=mistakes;
    {
        if (mistakes === 0) {
            document.getElementById('rank_end').innerHTML='A';
        } else if (mistakes >0 && mistakes <3) {
            document.getElementById('rank_end').innerHTML='B';
        }else if (mistakes >3 && mistakes <5) {
            document.getElementById('rank_end').innerHTML='C';
        }else if (mistakes === 6) {
            document.getElementById('rank_end').innerHTML='D';
        }else if (mistakes === 7) {
            document.getElementById('rank_end').innerHTML='E';
        }
    }
}
