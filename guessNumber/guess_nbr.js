// // const randomNbr=parseInt(Math.random()*10+1);
// // const submit=document.querySelector('#subt');
// // const user_input=document.querySelector('#guessField');
// // const guess_slot=document.querySelector('.guesses');
// // const remmaining=document.querySelector('.lastResult');
// // const lowOrHigh=document.querySelector('.lowOrHi');
// // const statOver=document.querySelector('.resultParas');

// // const p=document.createElement('p')
// // let prevGuess=[];
// // let numGuess=1;

// // let playGame=true;

// // if (playGame) {
// //     submit.addEventListener('click',(e)=>{
// //         e.preventDefault();
// //         const guess=parseInt(user_input.value);
// //            console.log(guess);
// //         validateGuess(guess)
                 
// //     })

// // }


// // function validateGuess(guess) {
// //     if (isNaN(guess)) {
// //         alert("please give  a vlid number")
        
// //     }else if (guess < 0) {
// //         alert("please give a number greater than zero")
// //     }
// //     else if (guess===100) {
// //         alert('please give a number less than 100 ')
// //     }else{
// //         prevGuess.push(guess);
// //         if (numGuess==11) {
// //             displayGuess(guess);
// //             displayMessage(`your game is over and random number was  ${randomNbr}`);
// //             endGame();
// //         }else{
// //             displayGuess(guess);
// //             CheckGuess(guess)
// //         }
// //     }

    
// // };
// // function CheckGuess(guess) {
// //     if (guess === randomNbr) {
// //         displayMessage(" congrats you were right ")
// //     }else if (guess < randomNbr) {
// //         displayMessage('your number is too low ')
// //     }else if (guess>randomNbr) {
// //         displayMessage("too high ")
        
// //     }
    
// // }
// // function displayGuess(guess) {
// //     user_input.value='';
// //     guess_slot.innerHTML=`${guess}`
// //     numGuess++;
// //     remmaining.innerHTML=`${11-numGuess}`


    
    
// // }
// // function displayMessage(message) {
// //     lowOrHigh.innerHTML=`<p>${message}</P>`
// // }
// // function endGame() {
    
// // }
// // function newGame() {
    
// // }

// let randomNbr=parseInt(Math.random()*100+1);
// const submit=document.querySelector('#subt');
// const user_input=document.querySelector('#guessField');
// const guess_slot=document.querySelector('.guesses');
// const remmaining=document.querySelector('.lastResult');
// const LoworHi=document.querySelector('.lowOrHi');
// const statOver=document.querySelector('.resultParas');
// const p=document.createElement('p');

// const prevGuess=[];
// let numGuess=1;
// let playGame=true;
// if (playGame) {
//     submit.addEventListener('click',(e)=>{
//         e.preventDefault();
//         const guess=parseInt(user_input.value);
//         console.log(guess);
//         validateGuess(guess)
//     })
// }

// function validateGuess(guess) {
//     if (isNaN(guess)) {
//         alert('please enter a valid number! Thank u ')
//     }else if (guess < 0) {
//         alert('please enter a number greater than zero! Thank u ')
//     }else if (guess > 100) {
//       alert('please enter a number less than 100! thank u ')   
// }else{
//     prevGuess.push(guess);
//     if (numGuess==11) {
//         displayMessage(`you have lost  the match and random number was ${randomNbr}`)
//         displayGuess(guess);
//         endGame();
        
//     }else{
//         CheckGuess(guess);
//         displayGuess(guess);
//     }
// }
// }

// function CheckGuess(guess) {
//     if (randomNbr===guess) {
//         displayMessage("congrats! you have won match");
//     }else if (guess<randomNbr) {
//         displayMessage('Too low ')
//     }else if (guess > randomNbr) {
//         displayMessage("Too high ")
        
//     }
    
 
    
// }
// function displayGuess(guess) {
//     user_input.value='';
//     remmaining.innerHTML=`${11-numGuess}`;
//     numGuess++;
//     guess_slot.innerHTML=`${guess}`
   
// }
// function displayMessage(message) {
//     LoworHi.innerHTML=`<p>${message}</p>`
    
// }
// function endGame() {
//     user_input.value='';
//     user_input.setAttribute('disabled','');
//     p.classList.add('button');
//     p.innerHTML=`<button id ="new-game ">start again</button>`
//     statOver.appendChild(p);
//     playGame=false
//     startAgain();
// }
// function startAgain() {
//      const newGame=document.querySelector('#new-game');
//      newGame.addEventListener('click',(e)=>{
//         randomNbr =parseInt(Math.random()*100+1);
//         prevGuess=[];
//         guess_slot.innerHTML='';
//         numGuess=1;
//         remmaining.innerHTML=`${11-numGuess}`
//         user_input.removeAttribute('disabled');
//         statOver.removeChild(p)
//         playGame=true;

//      });
// }
let randomNbr=parseInt(Math.random()*100+1);
const submit=document.querySelector('#subt');
const user_input=document.querySelector('#guessField');
const guess_slot=document.querySelector('.guesses');
const remmaining=document.querySelector('.lastResult');
const lowOrHigh=document.querySelector('.lowOrHi');
const statOver=document.querySelector('.resultParas');

const p=document.createElement('p')
let prevGuess=[];
let numGuess=1;

let playGame=true;
if (playGame) {
     submit.addEventListener('click',(e)=>{
        e.preventDefault();
        const guess=parseInt(user_input.value);
        console.log(guess);
        validateGuess(guess);
     });
}


function validateGuess(guess) {
     if (isNaN(guess)) {
        alert('please enter a valid number ')
     }else if (guess < 0) {
        alert("please enter a number greater than 0")
     }else if (guess > 100) {
        alert('please enter a number less than 100')
     }else{
        prevGuess.push(guess);
        if (numGuess===11) {
            displayGuess(guess)
            displayMessage(`you have lost the match and the random was ${randomNbr}`);
            endGame();
        }else{
            CheckGuess(guess);
            displayGuess(guess)
        }

     }
}
function CheckGuess(guess) {
    if (guess==randomNbr) {
        displayMessage('you have won the match');
        endGame();
    }else if (guess < randomNbr) {
        displayMessage('too low ')
    }else if(guess > randomNbr) 
    displayMessage("too high ");
}
function displayGuess(guess) {
    user_input.value='';
    guess_slot.innerHTML=`${guess}`;
    numGuess++;
    remmaining.innerHTML=`${11-numGuess}`
}
function displayMessage(message) {
    lowOrHigh.innerHTML=`<p>${message}<p/>`
}
function endGame() {
    user_input.value='';
    user_input.setAttribute('disabled','');
    p.classList.add('button');
    p.innerHTML=`<button id=" StartAgain"> Start New Game</button>`
    statOver.appendChild(p);

    playGame=false;
    startAgain();
}
function startAgain() {
    StartAgain.addEventListener("click",(e)=>{
        user_input.value='';
        user_input.removeAttribute('disabled');
        randomNbr=parseInt(Math.random()*100+1);
        guess_slot.innerHTML='';
        prevGuess=[];
        numGuess=1;
        remmaining.innerHTML=`${11-numGuess}`
        statOver.removeChild(p);
        playGame=true;
    })
}
