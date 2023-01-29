var reStartFlag = true;
var startIntervel;
var count = 10;
var op = "+";
const onBodyLoad = () => {
  let op1 = document.getElementById("operant1");
  let op2 = document.getElementById("operant2");
  op1.innerText = Math.floor(Math.random() * 100);
  op2.innerText = Math.floor(Math.random() * 100);
};
const checkValue = (el) => {
  let value = el.value;
  let op1 = document.getElementById("operant1");
  let op2 = document.getElementById("operant2");
  let output = document.getElementById("output");
  let op1Value = parseInt(op1.innerText);
  let op2Value = parseInt(op2.innerText);
  switch (op) {
    case "+":
      if (op1Value + op2Value == parseInt(el.value)) {
        count = count + 6;
        op1.innerText = Math.floor(Math.random() * 100);
        op2.innerText = Math.floor(Math.random() * 100);
        output.value = "";
      }
      break;
    case "-":
      if (op1Value - op2Value == parseInt(el.value)) {
        count = count + 6;
        op1.innerText = Math.floor(Math.random() * 100);
        op2.innerText = Math.floor(Math.random() * 100);
        output.value = "";
      }
      break;
    case "*":
      if (op1Value * op2Value == parseInt(el.value)) {
        count = count + 6;
        op1.innerText = Math.floor(Math.random() * 100);
        op2.innerText = Math.floor(Math.random() * 100);
        output.value = "";
      }
      break;
  }
};
const startTimer = (el) => {
  if (reStartFlag) {
    reStartFlag = false;
    startIntervel = setInterval(() => {
      let counttext = document.getElementById("countdown");
      counttext.innerHTML = count--;
      if (count < 0) {
        alert("Game Over");
        clearInterval(startIntervel);
        reStartFlag = true;
        count = 10;
      }
    }, 1000);
  }
};
const onOperatorChange = (elm) => {
  op = elm.value;
  document.getElementById("operation").innerText = op;
  clearInterval(startIntervel);
  reStartFlag = true;
  count = 15;
  document.getElementById("countdown").innerText = count;
  let op1 = document.getElementById("operant1");
  let op2 = document.getElementById("operant2");
  op1.innerText = Math.floor(Math.random() * 100);
  op2.innerText = Math.floor(Math.random() * 100);
};
