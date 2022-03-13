var readlineSync = require('readline-sync');
score=0;
var userName = readlineSync.question("Enter your Name-> ");
var highScore={
  Name: "Faizan",
  Score: "0"
}
console.log("Welcome "+ userName+"!\nLets check How Well do you know Faizan Akhtar?");
console.log("For the right answer you will get 1 Marks and for a wrong answer 0.25 will be deducted.");
console.log("=========================================");
function play(question,answer)
  {
    var userAnswer = readlineSync.question(question);
    if(userAnswer.toUpperCase() === answer.toUpperCase())
    {
      console.log("Congratulations! You are Right.");
      score++;
    } else{
      console.log("Oops! You are Wrong\nAll the Best for the next Question.");
      console.log("The right Answer is -> "+answer);
      score-= 0.25;
    }
    console.log("Your score till now:-> "+score);
    console.log("=========================================");
  }
var array = [
  {
  question: "How old am I? " ,
  answer: "20"
},
  {
  question: "What I want to become? ",
  answer: "Software Engineer"
},
  {
  question: "Which dish I eat regularly? " ,
  answer: "Biryani"
},
  {
  question: "Do I go to Gym? " ,
  answer: "No"
}
  ];
for(var i=0;i<array.length;i++){
    play(array[i].question,array[i].answer);
  }
console.log("Your total score is -> "+score+"\n-----------------------------");
console.log("The highest score is made by "+highScore.Name+" and score is "+highScore.Score);

console.log("Send me the screen shot of your Score");
