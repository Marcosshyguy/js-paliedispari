// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.


// button
const btnOdd = document.getElementById("odd-button");
const btnEven = document.getElementById("even-button")

// html sum
const sumResult = document.getElementById("sum");



let userNumber = prompt("inserisci un numero da 1 a 5 ")//document.getElementById("user-number");
// add while in order to prevent NaN values and number less than 0 and greater than 5
while((isNaN(userNumber)) || (userNumber <= 0)  || ( userNumber > 5)){
    userNumber = parseInt(prompt("Inserisci il numero richiesto da 1 a 5"));
}


// random generator
const cpuNumber = randomNumberGen()

// sum result and sum on html
const sum = parseInt(userNumber) + cpuNumber;
sumResult.innerHTML = sum
console.log(userNumber, cpuNumber, sum);


let result =""
// listers that check is sum is even or odd
btnEven.addEventListener("click", function(){
     result = isEven(sum)
})

btnOdd.addEventListener("click", function(){
     result = isOdd(sum)
})


// functions
function randomNumberGen(){
    let randomNumber = Math.floor((Math.random() * 5) + 1)
    return  randomNumber;
}

let evenAlert = "" 
function isEven(evenResult){
    if (evenResult % 2 === 0){
        evenOrOddAlert = alert("si")
    } else {
        evenOrOddAlert = alert("no")
    }
    return evenAlert
}


let oddAlert = ""
function isOdd(oddResult){
    if (oddResult % 2 !== 0){
        oddAlert = alert("si")
    } else {
        oddAlert = alert("no")
    }
    return oddAlert
}