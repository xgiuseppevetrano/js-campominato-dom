// BONUS
// 1. Chiedo all'utente il livello di difficoltà del gioco
//  1a. SE difficoltà 0 => numeri casuali tra 1 e 100
//  1a. SE difficoltà 1 => numeri casuali tra 1 e 80
//  1a. SE difficoltà 2 => numeri casuali tra 1 e 50

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

while (bombs.length < 16) {
    let numbers = genericNumber(1, 100);
    //  1a. I numeri generati NON possono essere duplicati
    if (!bombs.includes(numbers)) {
        bombs.push(numbers);
    }
}

console.log(bombs);

// 2. Chiedo con un prompt all'utente (100 - 16) volte di inserire una numero alla volta compreso tra 1 e 100
const userNumber = [];
let controller = false;

while (userNumber.length < 84 || controller === false) {
    const askUserNumber = Number(prompt("Inserisci un numero tra 1 e 100"));
    // 2a. SE il numero inserito dall'utente è presente nell'array di numeri generati
    //    ALLORA la partita termina e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
    if (bombs.includes(askUserNumber)) {
        controller = true;
        alert("Hai perso! Il tuo punteggio è:", userNumber.length);
        // 2b. SE il numero inserito dall'utente NON è presente nell'array di numeri generati e
        //     SE l'utente ha inserito solo numeri e quest'ultimi sono compresi tra 1 e 100 e non sono stati già detti
        //     ALLORA si continua chiedendo all'utente un nuovo numero
    } else if (!isNaN(askUserNumber) && askUserNumber >= 1 && askUserNumber <= 100 && !userNumber.includes(askUserNumber)) {
        userNumber.push(askUserNumber);
    }

}

// 3. SE l'utente inserisce tutti i numeri che non sono presenti nell'array di numeri generati
//    ALLORA vince e il punteggio sarà dato da il numero di volte che l'utente ha inserito un numero consentito
if (userNumber === 84) {
    alert("Hai vinto! Il tuo punteggio è:", userNumber.length);
}