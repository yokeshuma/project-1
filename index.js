var readLineSync = require('readline-sync');
questions=[
  {
    question : "What weather do I prefer?",
    answer : "Snowy"
  },
  {
    question : "When is my Birthday?",
    answer :"February"
  },
  {
    question : "Emotions do i like most?",
    answer : "Happy"
  },
  {
    question : "Would i rather live without internet or cellphone?",
    answer : "without Internet"
  },
  {
    question : "How often do I exercise?",
    answer : "rarely"
  }
]
var score = 0;
var name = readLineSync.question("Enter your name ");
console.log("welcome "+name+" to do you know yokesh");
for(i=0; i<questions.length; i++)
  play(questions[i].question,questions[i].answer)
console.log("Final Score = "+score)
function play(question, answer)
{
  var userAnswer = readLineSync.question(question);
  if(userAnswer.toUpperCase()===answer.toUpperCase()){
    console.log("right");
    score=score+1;
  }
  else
    console.log("Right");
  console.log("Current Score "+score)
}