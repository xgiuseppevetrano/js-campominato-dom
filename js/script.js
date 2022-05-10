/*---------------
    FUNCTION
---------------*/
// Funziona che genera un numero ramdom tra un min e un max
function genericNumber(min, max) {
    return Math.floor(Math.random() * (max - min + 1) + min);
}

/*-----------
    MAIN
-----------*/
// 1. Genero un array di 16 numeri casuali tra 1 e 100
const bombs = [];
let difficultyLevel;
let possibleNumbers;
//  1a. Chiedo all'utente il livello di difficoltà tra 0 e 2
do {
    difficultyLevel = Number(prompt("Choose a difficulty level between 0, 1 and 2"))
} while (isNaN(difficultyLevel) || difficultyLevel < 0 || difficultyLevel > 2);
//  1b. SE il livello di difficoltà è uguale a 0 - 1 - 2
//      ALLORA i numeri possibili saranno 100 - 80 - 50
if (difficultyLevel === 0) {
    possibleNumbers = 100;
} else if (difficultyLevel === 1) {
    possibleNumbers = 80;
} else if (difficultyLevel === 2) {
    possibleNumbers = 50;
}

while (bombs.length < 16) {
    let numbers = genericNumber(1, possibleNumbers);
    //  1c. I numeri generati NON possono essere duplicati
    if (!bombs.includes(numbers)) {
        bombs.push(numbers);
    }
}

// 2. Chiedo con un prompt all'utente (100 - 16) volte di inserire una numero alla volta compreso tra 1 e 100
const userNumber = [];
let controller = true;

while (userNumber.length < (possibleNumbers - 16) && controller) {
    const askUserNumber = Number(prompt("Enter a number between 1 and 100"));
    // 2a. SE il numero inserito dall'utente è presente nell'array di numeri generati
    //    ALLORA la partita termina e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
    if (bombs.includes(askUserNumber)) {
        controller = false;
        alert(`You lost, your score is: ${userNumber.length}`);
        // 2b. SE il numero inserito dall'utente NON è presente nell'array di numeri generati e
        //     SE l'utente ha inserito solo numeri e quest'ultimi sono compresi tra 1 e 100 e non sono stati già detti
        //     ALLORA si continua chiedendo all'utente un nuovo numero
    } else if (!isNaN(askUserNumber) && askUserNumber >= 1 && askUserNumber <= 100 && !userNumber.includes(askUserNumber)) {
        userNumber.push(askUserNumber);
    }

}

// 3. SE l'utente inserisce tutti i numeri che non sono presenti nell'array di numeri generati
//    ALLORA vince e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
if (userNumber.lenght === (100 - 16)) {
    alert(`You won, your score is: ${userNumber.length}`);
}