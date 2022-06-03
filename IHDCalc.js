const bigNum = document.querySelector("#main-num");
const randProblem = document.querySelector("#random-problem");
const addBtn = document.querySelector("#add");
const subBtn = document.querySelector("#sub");
const multiBtn = document.querySelector("#multiply");
const divideBtn = document.querySelector("#divide");
const blobBtn = document.querySelector("#clear");
const generateBtn = document.querySelector("#solo-btn");
const checkAnswer = document.querySelector("#check-btn");
const revealBtn = document.querySelector("#reveal-btn");
const correctOrNot = document.querySelector("#right-wrong");
const answerRevealed = document.querySelector("#answer-txt");

let problem;
let problemText;
let problemAnswer;
let solved;

addBtn.addEventListener("click", function() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  if(valOne && valTwo) {
    let val = parseFloat(valOne) + parseFloat(valTwo);
    bigNum.textContent = val;
  }
});

subBtn.addEventListener("click", function() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  if(valOne && valTwo) {
    let val = parseFloat(valOne) - parseFloat(valTwo);
    bigNum.textContent = val;
  }
});

multiBtn.addEventListener("click", function() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  if(valOne && valTwo) {
    let val = parseFloat(valOne) * parseFloat(valTwo);
    bigNum.textContent = Math.round(val * 10000.0) / 10000.0;
  }
});

divideBtn.addEventListener("click", function() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  if(valOne && valTwo) {
    let val = parseFloat(valOne) / parseFloat(valTwo);
    bigNum.textContent = Math.round(val * 10000.0) / 10000.0;
  }
});

blobBtn.addEventListener("click", function() {
  const valOne = document.getElementById("value-one").value="";
  const valTwo = document.getElementById("value-two").value="";
  bigNum.textContent = "0";
});

generateBtn.addEventListener("click", function(){
  let variables = ["x","n","k","p","z","y"];
  let signs = ["+","/","*","-"];
  let generatedProblem = [];

  let firstInt = Math.floor(Math.random(99-1+1)*99);
  let secondInt = Math.floor(Math.random(99-1+1)*99);
  let thirdInt = Math.floor(Math.random(99-1+1)*99);
  let fourthInt = Math.floor(Math.random(99-1+1)*99);

  for(let k = 0; k < variables.length; k++) {
    for(let a = 0; a < signs.length; a++) {
      for(let s = 0; s < signs.length; s++) {
        generatedProblem.push(firstInt + " " + variables[k] + " " + signs[a] + " " + secondInt + " = " + thirdInt + " " + variables[k] + " " + signs[s] + " " + fourthInt);
      };
    };
  };

  problem = generatedProblem.splice(Math.floor(Math.random()*generatedProblem.length),1);
  randProblem.textContent = problem;
  problemText = problem.toString().split(" ");
  answer();
  correctOrNot.textContent = "";
  answerRevealed.textContent = "";
  document.querySelector("#answer-input").value="";
});

checkAnswer.addEventListener("click", function(){
  const userAnswer = parseFloat(document.querySelector("#answer-input").value);
  if(userAnswer === solved) {
    correctOrNot.textContent = `That's a correct answer...*Blob* ${problemText[1]} does indeed = ${userAnswer}...love it!`
  } else {
    correctOrNot.textContent = `Ehh, ${userAnswer} isn't correct, maybe next time! ${problemText[6]} can and will be defeated! *Blob*`;
  }
  console.log(userAnswer);
});

revealBtn.addEventListener("dblclick", function(){
  answerRevealed.textContent = `${problemText[1]} = ${solved}`;
})

function answer() {
  let leftSide = 0;
  let rightSide = 0;

  if (problemText[2] === "/" && problemText[7] === "/") {
    problemAnswer = 0;
  } else if (problemText[2] === "*" && problemText[7] === "*") {
    problemAnswer = 0;
  } else if (problemText[2] === "*" && problemText[7] === "/") {
    problemAnswer = 0;
  } else if (problemText[2] === "/" && problemText[7] === "*") {
    problemAnswer = 0;
  } else if (problemText[2] === "+" && problemText[7] === "+") {
    leftSide = problemText[3]-problemText[8];
    rightSide = problemText[5]-problemText[0];
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "-" && problemText[7] === "-") {
    leftSide = -problemText[3]+problemText[8];
    rightSide = problemText[5]-problemText[0];
    problemAnswer =leftSide/rightSide;
  } else if (problemText[2] === "+" && problemText[7] === "-") {
    leftSide = problemText[3]+problemText[8];
    rightSide = problemText[5]-problemText[0];
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "-" && problemText[7] === "+") {
    leftSide = -problemText[3]-problemText[8];
    rightSide = problemText[5]-problemText[0];
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "+" && problemText[7] === "*") {
    rightSide = (problemText[8]*problemText[5])-problemText[0];
    leftSide = problemText[3];
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "+" && problemText[7] === "/") {
    rightSide = problemText[5] - (problemText[8]*problemText[0]);
    leftSide = (problemText[8]*problemText[3]);
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "-" && problemText[7] === "*") {
    rightSide = (problemText[8]*problemText[5])-problemText[0];
    leftSide = -problemText[3];
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "-" && problemText[7] === "/") {
    rightSide = problemText[5] - (problemText[8]*problemText[0]);
    leftSide = -(problemText[8]*problemText[3]);
    problemAnswer = leftSide/rightSide;
  } else if (problemText[2] === "*" && problemText[7] === "-") {
    leftSide = (problemText[0]*problemText[3])-problemText[5];
    rightSide = -problemText[8];
    problemAnswer = rightSide/leftSide;
  } else if (problemText[2] === "*" && problemText[7] === "+") {
    rightSide = (problemText[0]*problemText[3])-problemText[0];
    leftSide = problemText[3];
    problemAnswer = rightSide/leftSide;
  } else if (problemText[2] === "/" && problemText[7] === "-") {
    leftSide = problemText[0]-(problemText[3]*problemText[5]);
    rightSide = -(problemText[3]*problemText[8]);
    problemAnswer = rightSide/leftSide;
  } else if (problemText[2] === "/" && problemText[7] === "+") {
    leftSide = problemText[0]-(problemText[3]*problemText[5]);
    rightSide = (problemText[3]*problemText[8]);
    problemAnswer = rightSide/leftSide;
  } else {
    problemAnswer = NaN;
  }

  solved = Math.round(problemAnswer*1000)/1000;

  return solved;
};
