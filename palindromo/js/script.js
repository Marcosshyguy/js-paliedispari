// Chiedere all’utente di inserire una parola
// Creare una funzione per capire se la parola inserita è palindroma.

// creato funzione
function isPalindrome(word){
    const functionWord = word;
    let word1 = ""
    for(let i = 0; i < functionWord.length;i++ ){
        word1 = functionWord[i];
        console.log(word1);
    }
    let word2 =""
    for(let i = functionWord.length; i >= 0;i-- ){
        word2 = functionWord[i];
        console.log(word1);
    }

    let answer ="";
    if (word1 === word2){
        answer = alert("parola palindroma")
    }
    else{
        answer = alert("parola non palindroma")
    }
    return answer;
}

// Chiedere utente parola
let userWord = prompt("Dimmi una parola!");

while(Number(userWord)){
    userWord = prompt("Inserisci parola non numero");
}

const result = isPalindrome(userWord);
















// const word = "otto"
// contare lettere parola e dividerle per due dato che sono pari le parole e comparare la prima metà con l'altra con una funzione
// let wordIndex = 0;
// while( wordIndex < userWord.length / 2 ){
//     let  thisLetter = userWord[wordIndex];
//     console.log(thisLetter);
//     // let user = userWord.length % 2;
//     // console.log(user)
//     wordIndex++;
// }

// for(let wordIndex = userWord.length ; wordIndex >= 0; wordIndex--){
//     const leyley = userWord[wordIndex];
//     const invertedWord = userWord
//     console.log(invertedWord);
//     //         let j = 0;
//     //         while(j < invertedWord.length){
//     //             let lastHalfWord = invertedWord[j];
//     //             console.log(lastHalfWord);
//     //             j++ 
//     //     }
// }