const readlineSync = require("readline-sync");
const chalk = require('chalk');

let userName = readlineSync.question("Enter your name "+"\r\n" );

console.log('Welcome ' + chalk.bold.rgb(210,105,30)(userName) + '!! Do you know Me? '+"\r\n" );

let score = 0;

//play function
function play(question, answer){
  let userAnswer = readlineSync.question(question);
  if(userAnswer.toUpperCase() === answer.toUpperCase()){
    console.log(chalk.green.bold('Your answer is right'));
    score++;
  }else{
    console.log(chalk.redBright.bold('Your answer is wrong:'));
  }
  console.log('current score: ' + score + "\r\n");
}


// question and answer
let questionOne = {
  question: 'What is my hobby? ',
  answer : 'photography'
}

let questionTwo = {
  question: 'What is my age? ',
  answer : '22'
}

let questionThree = {
  question: 'What is my Favorite movie? ',
  answer : 'Endgame'
}

let questionFour = {
  question: 'What is my Favorite sports? ',
  answer : 'Badminton'
}

// array of question,answer object
let QnA = [questionOne , questionTwo , questionThree,questionFour];

for(let i = 0; i < QnA.length; i++){
  
  // make function call
  play(QnA[i].question, QnA[i].answer);
}

console.log(chalk.bold.rgb(210,105,30)('Total score: ' + score));
