let equation = '';

// Button event listeners
document.querySelector('.btn1').addEventListener('click', () => buttonkey(1));
document.querySelector('.btn2').addEventListener('click', () => buttonkey(2));
document.querySelector('.btn3').addEventListener('click', () => buttonkey(3));
document.querySelector('.btn4').addEventListener('click', () => buttonkey(4));
document.querySelector('.btn5').addEventListener('click', () => buttonkey(5));
document.querySelector('.btn6').addEventListener('click', () => buttonkey(6));
document.querySelector('.btn7').addEventListener('click', () => buttonkey(7));
document.querySelector('.btn8').addEventListener('click', () => buttonkey(8));
document.querySelector('.btn9').addEventListener('click', () => buttonkey(9));
document.querySelector('.btn0').addEventListener('click', () => buttonkey(0));
document.querySelector('.btn-add').addEventListener('click', () => buttonkey('+'));
document.querySelector('.btn-sub').addEventListener('click', () => buttonkey('-'));
document.querySelector('.btn-multi').addEventListener('click', () => buttonkey('*')); 
document.querySelector('.btn-div').addEventListener('click', () => buttonkey('/'));
document.querySelector('.btn-comma').addEventListener('click', () => buttonkey('.'));
document.querySelector('.btn-obracket').addEventListener('click', () => buttonkey('('));
document.querySelector('.btn-cbracket').addEventListener('click', () => buttonkey(')'));
document.querySelector('.btn-eq').addEventListener('click', () => calculate());

// Clear screen
document.querySelector('.btn-delete').addEventListener('click', () => {
  equation = '';
  document.querySelector('#screen1').innerHTML = equation;
  document.getElementById('screen2').innerHTML = "";
});

function calculate() {
  if (equation !== "") {
    try {
      const answer = eval(equation); 
      document.getElementById('screen2').innerHTML = answer;
    } catch (error) {
      document.getElementById('screen2').innerHTML = "Error";
    }
  }
  equation = '';
}

function buttonkey(key) {
  if (typeof key === 'number' || key === '.') {
    equation += key; 
  } else {
    equation += ` ${key} `; 
  }
  document.querySelector('#screen1').innerHTML = equation;
}