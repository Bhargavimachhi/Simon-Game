let start = false;
let point = 0;
let idx = 0;
let seq = [];

document.querySelector("body").addEventListener("click", function () {
  if (!start) {
    gameStart();
  }
});

let temp = function (btn) {
  if (start) {
    checkAnswer(btn);
  } else {
    gameStart();
  }
};

document.querySelector("#btn-0").addEventListener("click", function (event) {
  event.stopPropagation();
  temp(this);
});

document.querySelector("#btn-1").addEventListener("click", function (event) {
  event.stopPropagation();
  temp(this);
});

document.querySelector("#btn-2").addEventListener("click", function (event) {
  event.stopPropagation();
  temp(this);
});

document.querySelector("#btn-3").addEventListener("click", function (event) {
  event.stopPropagation();
  temp(this);
});

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
    h2.innerText = `Game Over !!! Your Score is ${point}\nClick Anywhere to Continue`;
    point = 0;
    while (seq.length > 0) {
      seq.pop();
    }
  }
};

let gameStart = function () {
  start = true;
  let h2 = document.querySelector("h2");
  h2.innerText = `Level ${point + 1}`;
  randomBlink();
};

let blink = function (btn) {
  let ini = btn.style.backgroundColor;
  const blinkInterval = setInterval(() => {
    btn.style.backgroundColor = "white";
  }, 400);

  setTimeout(() => {
    clearInterval(blinkInterval);
    btn.style.backgroundColor = ini;
  }, 800);
};

let randomBlink = function () {
  let x = Math.floor(Math.random() * 4);
  seq.push(x);
  blink(btns[x]);
};
