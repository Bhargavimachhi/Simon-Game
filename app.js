let start = false;
let point = 0;
let idx = 0;
let seq = [];
let btns=document.querySelectorAll('.btn');

document.querySelector("body").addEventListener("click", function () {
  if (!start) {
    gameStart();
  }
});

for(let btn of btns){
  btn.addEventListener("click", function (event) {
    event.stopPropagation();
    blink(btn,"lime",150);
    setTimeout(function(){
      if (start) {
        checkAnswer(btn);
      } else {
        gameStart();
      }
    },500);
  });
}

let checkAnswer = function (btn) {
  console.log(seq);
  let x = btn.id.slice(4);
  if (seq[idx] == x) {
    idx++;

    if (idx == seq.length) {
      let h2 = document.querySelector("h2");
      point++;
      h2.innerText = `Level ${point + 1}`;
      idx = 0;
      randomBlink();
    }
  } else {
    idx = 0;
    start = false;
    let h2 = document.querySelector("h2");
    document.querySelector('body').style.backgroundColor='red';
    h2.innerText = `Game Over !!! Your Score is ${point}\nClick Anywhere to Continue`;
    point = 0;
    seq=[];
  }
};

let gameStart = function () {
  document.querySelector('body').style.backgroundColor='white';
  start = true;
  let h2 = document.querySelector("h2");
  h2.innerText = `Level ${point + 1}`;
  randomBlink();
};

let blink = function (btn,color,time) {
  let ini = btn.style.backgroundColor;
  const blinkInterval = setInterval(() => {
    btn.style.backgroundColor = color;
  }, time);

  setTimeout(() => {
    clearInterval(blinkInterval);
    btn.style.backgroundColor = ini;
  }, 2*time);
};

let randomBlink = function () {
  let x = Math.floor(Math.random() * 4);
  seq.push(x);
  blink(btns[x],"white",300);
};
