// L’utente sceglie pari o dispari e inserisce un numero da 1 a 5.
// Generiamo un numero random (sempre da 1 a 5) per il computer (usando una funzione).
// Sommiamo i due numeri
// Stabiliamo se la somma dei due numeri è pari o dispari (usando una funzione)
// Dichiariamo chi ha vinto.

// let oddOrEven = prompt("pari o dispari");
// const usernumber = parseInt(prompt("dimmi un numero da 1 a 5"))
// console.log(oddOrEven, usernumber);

// button
const btnOdd = document.getElementById("odd-button");
const btnEven = document.getElementById("even-button")

const userNumber = prompt("dimmi numero")//document.getElementById("user-number");
while()



// generatore random
const cpuNumber = randomNumberGen()
console.log(cpuNumber);

// lister to check  if sum is even or not
const sum = parseInt(userNumber) + cpuNumber;
let result =""
// lister
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