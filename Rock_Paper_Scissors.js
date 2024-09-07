function getComputerChoice() {
    let num = Math.random();
    if ((num < 0.999) && (num > 0.666)) {
        return 'ROCK';
    } else if ((num < 0.667) && (num > 0.330)) {
        return 'PAPER';
    } else if ((num < 0.331) && (num > -0.01)) {
        return 'SCISSORS';
    }
}

function getHumanChoice() {
    let option = prompt('HA! You wanna challenge ME on Rock Paper Scissors? Come on, TRY ME! Type your choice!');
    option = option.toString();
    option = option.toUpperCase();
    if ((option != 'ROCK') && (option != 'PAPER') && (option != 'SCISSORS')) {
        return 'ERROR';
    } else {
        return option;
    }
}

function playRound(p, c) {

    if (p === 'ERROR') {
        return 'ERROR';
    } else if (p === c) {
        return 'TIE!';
    } else if (p === 'ROCK') {
        if (c === 'PAPER') {
            return 'HAHAHA I WON THIS ROUND!!!';
        }
        return 'I... I LOST!!! YOU CHEATED 100% THERE IS NO WAY!';
    } else if (p === 'PAPER') {
        if (c === 'SCISSORS') {
            return 'HAHAHA I WON THIS ROUND!!!';
        }
        return 'I... I LOST!!! YOU CHEATED 100% THERE IS NO WAY!';
    } else if (p === 'SCISSORS') {
        if (c === 'ROCK') {
            return 'HAHAHA I WON THIS ROUND!!!';
        }
        return 'I... I LOST!!! YOU CHEATED 100% THERE IS NO WAY!';
    }

}

function playGame() {
    let computer;
    let player;
    let cpoints = 0;
    let ppoints = 0;
    let result;
    let x = 0;
    while (x < 5) {
        console.log('ROUND: ', x + 1);
        computer = getComputerChoice();
        player = getHumanChoice();
        result = playRound(player, computer);
        console.log(result);

        if (result != 'ERROR') {
            console.log('Computer picked', computer);
            console.log('Player picked', player);
            if (result == 'I... I LOST!!! YOU CHEATED 100% THERE IS NO WAY!') {
                ppoints = ppoints + 1;
            } else if (result == 'HAHAHA I WON THIS ROUND!!!') {
                cpoints = cpoints + 1;
            } else if (result == 'TIE!') {
                cpoints = cpoints + 1
                ppoints = ppoints + 1;
            }
            console.log('My superior Score: ', cpoints);
            console.log('Your silly Score: ', ppoints);
            x = x + 1;
        } else {
            if (x == 0) {
                console.log('NO');
                x = 0;
            } else {
                console.log('NO');
                x = x;
            }
        }
    }
    if (ppoints > cpoints) {
        console.log('HOW... HOW DID I LOSE???');
    } else if (ppoints < cpoints) {
        console.log('MUAHAHAHA TOLD YOU YOU STAND NOOO CHANCE AGAINST IEL COMPUTAH!!!');
    } else {
        console.log('ok a tie, fair.')
    }
    return 'THE END';
}


console.log(playGame());
