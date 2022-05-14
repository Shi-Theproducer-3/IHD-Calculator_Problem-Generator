const bigNum = document.querySelector("#main-num");
const randProblem = document.querySelector("#random-problem");

function addVal() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  let val = parseFloat(valOne) + parseFloat(valTwo);
  bigNum.textContent = val;

};

function sub() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  let val = parseFloat(valOne) - parseFloat(valTwo);
  bigNum.textContent = val;
};

function mult() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  let val = parseFloat(valOne) * parseFloat(valTwo);
  bigNum.textContent = val;
};

function divi() {
  const valOne = document.getElementById("value-one").value;
  const valTwo = document.getElementById("value-two").value;
  let val = parseFloat(valOne) / parseFloat(valTwo);
  bigNum.textContent = Math.round(val * 10000.0) / 10000.0;
};

function bClear() {
  const valOne = document.getElementById("value-one").value="";
  const valTwo = document.getElementById("value-two").value="";
  bigNum.textContent = "0";
};

function generateProblem() {
  let problem = [];
  let variables = ["x","n","k","p","z","y"];
  let signs = ["+","/","*","-"];
  let firstInt = [];
  let secondInt = [];
  let thirdInt = [];
  let fourthInt = [];
  firstInt.push(Math.floor(Math.random(99-1+1)*99));
  secondInt.push(Math.floor(Math.random(99-1+1)*99));
  thirdInt.push(Math.floor(Math.random(99-1+1)*99));
  fourthInt.push(Math.floor(Math.random(99-1+1)*99));
  for(let k = 0; k < variables.length; k++) {
    for(let a = 0; a < signs.length; a++) {
      for(let i = 0; i < signs.length; i++) {
        problem.push(firstInt[0] + variables[k] + signs[a] + secondInt[0] + " = " + thirdInt[0] + variables[k] + signs[i] + fourthInt[0]);    
      }
    }
  };
 for(let m = 0; m < problem.length; m++) {
   let rNum = Math.floor(Math.random()*problem.length);
   let yur = problem[m];
   problem[m] = problem[rNum];
   problem[rNum] = yur;
 };
  randProblem.textContent = problem[2];
};