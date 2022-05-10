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
let difficultyLevel;
let possibleNumbers;
// 1. Chiedo all'utente il livello di difficoltà tra 0 e 2
do {
    difficultyLevel = Number(prompt("Choose a difficulty level between 0, 1 and 2"))
} while (isNaN(difficultyLevel) || difficultyLevel < 0 || difficultyLevel > 2);
//  1a. SE il livello di difficoltà è uguale a 0 - 1 - 2
//      ALLORA i numeri possibili saranno 100 - 80 - 50
if (difficultyLevel === 0) {
    possibleNumbers = 100;
} else if (difficultyLevel === 1) {
    possibleNumbers = 80;
} else if (difficultyLevel === 2) {
    possibleNumbers = 50;
}

// 2. Genero un array di 16 numeri casuali tra 1 e i numeri possibili in base alla difficoltà
const bombs = [];

while (bombs.length < 16) {
    let numbers = genericNumber(1, possibleNumbers);
    //  1c. I numeri generati NON possono essere duplicati
    if (!bombs.includes(numbers)) {
        bombs.push(numbers);
    }
}

// 3. Chiedo con un prompt all'utente (numeri possibili - 16) volte di inserire una numero alla volta compreso tra 1 e 100
const userNumber = [];
let bombsNotExploded = true;

while (userNumber.length < (possibleNumbers - 16) && bombsNotExploded) {
    let askUserNumber;
    //  3a. Controllo che nel prompt l'utente inserisca un numero e che questo sia compreso tra 1 e 100
    do {
        askUserNumber = Number(prompt("Enter a number between 1 and 100"));
    } while (isNaN(askUserNumber) || askUserNumber < 1 || askUserNumber > 100);
    //  3b. SE il numero inserito dall'utente è presente nell'array di numeri generati
    //      ALLORA esplode la bomba la partita termina e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
    if (bombs.includes(askUserNumber)) {
        bombsNotExploded = false;
        //  3c. SE il numero inserito dall'utente NON è presente nell'array di numeri generati
        //      ALLORA inserisco il numero nell'array dei numeri utente e continuo a chiedere un numero
    } else if (!userNumber.includes(askUserNumber)) {
        userNumber.push(askUserNumber);
    }

}

// 4. SE esplode la bomba (bombsNotExploded === false)
//    ALLORA l'utente perde e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
if (bombsNotExploded === false) {
    alert(`You lost, your score is: ${userNumber.length}`);
    // 5. SE l'utente inserisce tutti i numeri che non sono presenti nell'array di numeri generati
   //     ALLORA vince e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
} else if (userNumber.lenght === (possibleNumbers - 16)) {
    alert(`You won, your score is: ${userNumber.length}`);
} 
