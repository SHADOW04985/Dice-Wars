var plr1 = 0
var plr2 = 0
var turn = 1
var target = 30

function randomnum(lo, hi) {
    return Math.floor(Math.random() * (hi - lo + 1) )+lo;
}

function diceroll() {
    var num = randomnum(1, 6);
    document.getElementById('dice_num').innerText =num;
    if (turn === 1) {
        plr1 = plr1 + num;
        turn = 2;
        document.getElementById('score1').innerText =plr1;
        if (plr1 >= target) {
            alert("Player1 Wins!");
            window.location.reload();
        }
    }
    else if (turn === 2) {
        plr2 = plr2 + num;
        turn = 1;
        document.getElementById('score2').innerText =plr2;
        if (plr2 >= target) {
            alert("Player1 Wins!");
            window.location.reload();
        }
    }
}


