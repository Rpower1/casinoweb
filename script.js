let plus1 = document.getElementById('1plus1');
let stopknop = document.getElementById('stop');
let kaart1 = document.getElementById('kaart1');
let kaart2 = document.getElementById('kaart2');
let kaart3 = document.getElementById('kaart3');
let kaart4 = document.getElementById('kaart4');
let kaart5 = document.getElementById('kaart5');
let kaart6 = document.getElementById('kaart6');
let kaart7 = document.getElementById('kaart7');
let kaart8 = document.getElementById('kaart8');
let kaart9 = document.getElementById('kaart9');
let kaart10 = document.getElementById('kaart10');
let kaart11 = document.getElementById('kaart11');
let kaart12 = document.getElementById('kaart12');
let kaart13 = document.getElementById('kaart13');
let line = document.getElementById('line')
const getallenE = [16, 17, 18, 19, 20, 21, 22];
let getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
let k1 = null;
let k2 = null;
let k1C = false;
let myscore = 0;
let Escore = 0;
let scoretext = document.getElementById('scoretext');
let Escoretext = document.getElementById('escore');
let winnertext = document.getElementById('winner');
let Ilose = null;
let Elose = null;
let letter = null;
let resetknop = document.getElementById('resetknop');
let PPtext = document.getElementById('PP');
let PP = 50;
const betText = document.getElementById('bet');
let bet = null;

stopknop.onclick = function() { check3()};
resetknop.onclick = function() { reset()};


if (plus1.onclick, k1C === true){
    k2 = getallen[Math.floor(Math.random() * getallen.length)];
    check2 ()
}

plus1.onclick = function() {
    k1 = getallen[Math.floor(Math.random() * getallen.length)];
    console.log(k1);
    k1C = true
    check()
    
};
function check (){
    if (k1 === 1) {
        kaart1.style.display = 'block';
        kaart1.style.borderRadius = "5 px";
        kaart1.style.display = 'inline';
        myscore = myscore + 1
        getallen = getallen.filter(function (letter) {
            return letter !== '1';
        });
        
    }else if (k1 === 2){
        kaart2.style.display = 'block';
        kaart2.style.display = 'inline';
        myscore = myscore + 2
        getallen = getallen.filter(function (letter) {
            return letter !== '2';
        });
    }else if (k1 === 3){
        kaart3.style.display = 'block';
        kaart3.style.display = 'inline';
        myscore = myscore + 3
        getallen = getallen.filter(function (letter) {
            return letter !== '3';
        });
    }else if (k1 === 4){
        kaart4.style.display = 'block';
        kaart4.style.display = 'inline';
        myscore = myscore + 4
        getallen = getallen.filter(function (letter) {
            return letter !== '4';
        });
    }else if (k1 === 5){
        kaart5.style.display = 'block';
        kaart5.style.display = 'inline';
        myscore = myscore + 5
        getallen = getallen.filter(function (letter) {
            return letter !== '5';
        });
    }else if (k1 === 6){
        kaart6.style.display = 'block';
        kaart6.style.display = 'inline';
        myscore = myscore + 6
        getallen = getallen.filter(function (letter) {
            return letter !== '6';
        });
    }else if (k1 === 7){
        kaart7.style.display = 'block';
        kaart7.style.display = 'inline';
        myscore = myscore + 7
        getallen = getallen.filter(function (letter) {
            return letter !== '7';
        });
    }else if (k1 === 8){
        kaart8.style.display = 'block';
        kaart8.style.display = 'inline';
        myscore = myscore + 8
        getallen = getallen.filter(function (letter) {
            return letter !== '8';
        });
    }else if (k1 === 9){
        kaart9.style.display = 'block';
        kaart9.style.display = 'inline';
        myscore = myscore + 9
        getallen = getallen.filter(function (letter) {
            return letter !== '9';
        });
    }else if (k1 === 10){
        kaart10.style.display = 'block';
        kaart10.style.display = 'inline';
        myscore = myscore + 10
        getallen = getallen.filter(function (letter) {
            return letter !== '10';
        });
    }else if (k1 === 11){
        kaart11.style.display = 'block';
        kaart11.style.display = 'inline';
        myscore = myscore + 11
        getallen = getallen.filter(function (letter) {
            return letter !== '11';
        });
    }else if (k1 === 12){
        kaart12.style.display = 'block';
        kaart12.style.display = 'inline';
        myscore = myscore + 12
        getallen = getallen.filter(function (letter) {
            return letter !== '12';
        });
    }else if (k1 === 13){
        kaart13.style.display = 'block';
        kaart13.style.display = 'inline';
        myscore = myscore + 13
        getallen = getallen.filter(function (letter) {
            return letter !== '13';
        });
    } else {
        kaart1.style.display = 'none'; 
        kaart2.style.display = 'none';
        kaart3.style.display = 'none';
        kaart4.style.display = 'none';
        kaart5.style.display = 'none';
        kaart6.style.display = 'none';
        kaart7.style.display = 'none';
        kaart8.style.display = 'none';
        kaart9.style.display = 'none';
        kaart10.style.display = 'none';
        kaart11.style.display = 'none';
        kaart12.style.display = 'none';
        kaart13.style.display = 'none';
    }
}

function check2 (){
    if (k2 === 1) {
        kaart1.style.display = 'block';
        kaart1.style.borderRadius = "5 px";
        kaart1.style.display = 'inline';
        myscore = myscore + 1
        getallen = getallen.filter(function (letter) {
            return letter !== '1';
        });
    }else if (k2 === 2){
        kaart2.style.display = 'block';
        kaart2.style.display = 'inline';
        myscore = myscore + 2
        getallen = getallen.filter(function (letter) {
            return letter !== '2';
        });
    }else if (k2 === 3){
        kaart3.style.display = 'block';
        kaart3.style.display = 'inline';
        myscore = myscore + 3
        getallen = getallen.filter(function (letter) {
            return letter !== '3';
        });
    }else if (k2 === 4){
        kaart4.style.display = 'block';
        kaart4.style.display = 'inline';
        myscore = myscore + 4
        getallen = getallen.filter(function (letter) {
            return letter !== '4';
        });
    }else if (k2 === 5){
        kaart5.style.display = 'block';
        kaart5.style.display = 'inline';
        myscore = myscore + 5
        getallen = getallen.filter(function (letter) {
            return letter !== '5';
        });
    }else if (k2 === 6){
        kaart6.style.display = 'block';
        kaart6.style.display = 'inline';
        myscore = myscore + 6
        getallen = getallen.filter(function (letter) {
            return letter !== '6';
        });
    }else if (k2 === 7){
        kaart7.style.display = 'block';
        kaart7.style.display = 'inline';
        myscore = myscore + 7
        getallen = getallen.filter(function (letter) {
            return letter !== '7';
        });
    }else if (k2 === 8){
        kaart8.style.display = 'block';
        kaart8.style.display = 'inline';
        myscore = myscore + 8
        getallen = getallen.filter(function (letter) {
            return letter !== '8';
        });
    }else if (k2 === 9){
        kaart9.style.display = 'block';
        kaart9.style.display = 'inline';
        myscore = myscore + 9
        getallen = getallen.filter(function (letter) {
            return letter !== '9';
        });
    }else if (k2 === 10){
        kaart10.style.display = 'block';
        kaart10.style.display = 'inline';
        myscore = myscore + 10
        getallen = getallen.filter(function (letter) {
            return letter !== '10';
        });
    }else if (k2 === 11){
        kaart11.style.display = 'block';
        kaart11.style.display = 'inline';
        myscore = myscore + 11
        getallen = getallen.filter(function (letter) {
            return letter !== '11';
        });
    }else if (k2 === 12){
        kaart12.style.display = 'block';
        kaart12.style.display = 'inline';
        myscore = myscore + 12
        getallen = getallen.filter(function (letter) {
            return letter !== '12';
        });
    }else if (k2 === 13){
        kaart13.style.display = 'block';
        kaart13.style.display = 'inline';
        myscore = myscore + 13
        getallen = getallen.filter(function (letter) {
            return letter !== '13';
        });
    } else {
        kaart1.style.display = 'none'; 
        kaart2.style.display = 'none';
        kaart3.style.display = 'none';
        kaart4.style.display = 'none';
        kaart5.style.display = 'none';
        kaart6.style.display = 'none';
        kaart7.style.display = 'none';
        kaart8.style.display = 'none';
        kaart9.style.display = 'none';
        kaart10.style.display = 'none';
        kaart11.style.display = 'none';
        kaart12.style.display = 'none';
        kaart13.style.display = 'none';
    }
}

function check3 (){
    console.log("stop");
    plus1.style.display = 'none';
    scoretext.textContent = myscore;
    Escore = getallenE[Math.floor(Math.random() * getallenE.length)];
    resetknop.style.display = 'block';
    Escoretext.textContent = Escore;
    line.style.display = 'block'
    bet = betText.value;
    PP = PP - bet;
    PPtext.textContent = null;
    if (bet >= PP){
        alert("error(1): you can't bet more then you PP as punishmend the game will be reset!!!")
        reset ()
    }
    if (myscore === 21){
        Ilose = false 
        PP = PP + bet
        winnertext.textContent = "and the winner is: player1"
    }
    
    if (myscore >= 21){
        Ilose = true;
        console.log("1")
        PP = PP - bet;
    }
    if (Escore >= 21){
        Elose = true;
        console.log('2')
        PP = PP + bet;
    }
    if (Elose === true, Ilose === true){
        winnertext.textContent = "and the winner is: draw"
    }
    if (Elose === false, Ilose === false){
        if (myscore >= Escore){
            Ilose = null;
            Elose = true;
            winnertext.textContent = "and the winner is: player1"
            PP = PP + bet;
        }else{
            Ilose = true;
            Elose = null;
            winnertext.textContent = "and the winner is: player2 "
            PP = PP - bet;
        }
        if (Elose === true){
            Ilose = false;
            winnertext.textContent = "and the winner is: player1"
            PP = PP + bet;
        }
        if (Ilose === true){
            Elose = false;
            winnertext.textContent = "and the winner is: player2 "
            PP = PP - bet;
        }else {
            winnertext.textContent = "and the winner is the player with to most points but is les then 21"
        }
    }
    if (Elose === true){
        Ilose = false;
        winnertext.textContent = "and the winner is: player1"
        PP = PP + bet;
    }
    if (Ilose === true){
        Elose = false;
        winnertext.textContent = "and the winner is: player2 "
        PP = PP - bet;
    }else {
        winnertext.textContent = "and the winner is the player with to most points but is les then 21"
    }
    PPtext.textContent = PP
}

function reset (){
    line.style.display = 'none';
    resetknop.style.display = 'none';
    kaart1.style.display = 'none'; 
        kaart2.style.display = 'none';
        kaart3.style.display = 'none';
        kaart4.style.display = 'none';
        kaart5.style.display = 'none';
        kaart6.style.display = 'none';
        kaart7.style.display = 'none';
        kaart8.style.display = 'none';
        kaart9.style.display = 'none';
        kaart10.style.display = 'none';
        kaart11.style.display = 'none';
        kaart12.style.display = 'none';
        kaart13.style.display = 'none';
        getallen = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
        k1 = null;
        k2 = null;
        k1C = false;
        myscore = 0;
        Escore = 0;
        Ilose = null;
        Elose = null;
        letter = null;
        plus1.style.display = 'inline'
        winnertext.textContent = "and the winner is:"
        scoretext.textContent = 'press stop to calculate your score'
        Escoretext.textContent = 'press stop to calculate'
}