const reset = document.querySelector("header button");
const pre = document.querySelector(".pre");
const next = document.querySelector(".next");
const speak = document.querySelector(".speak");
const hide = document.querySelector(".hide");
const audioPut = document.querySelector(".audio");
const number = document.querySelector("header h1");

let CardBorder = document.querySelector("main .cardBorder");
let Card = document.createElement("div");
Card.classList.add("card");
let cardHide = document.querySelector("main .cardBorder .card");
let isHiding = false;

let audio = document.querySelector("audio");
let presentNum = 0;

let presentChar = document.createElement("h1");
let presentRome = document.createElement("h3");

let fifty = [
  {
    text: "あ",
    sound: '<audio id="audio" src="./basic_sounds/a.mp3"></audio>',
    rome: "a",
    num: "1/46",
  },
  {
    text: "い",
    sound: '<audio id="audio" src="./basic_sounds/i.mp3"></audio>',
    rome: "i",
    num: "2/46",
  },
  {
    text: "う",
    sound: '<audio id="audio" src="./basic_sounds/u.mp3"></audio>',
    rome: "u",
    num: "3/46",
  },
  {
    text: "え",
    sound: '<audio id="audio" src="./basic_sounds/e.mp3"></audio>',
    rome: "e",
    num: "4/46",
  },
  {
    text: "お",
    sound: '<audio id="audio" src="./basic_sounds/o.mp3"></audio>',
    rome: "o",
    num: "5/46",
  },
  {
    text: "か",
    sound: '<audio id="audio" src="./basic_sounds/ka.mp3"></audio>',
    rome: "ka",
    num: "6/46",
  },
  {
    text: "き",
    sound: '<audio id="audio" src="./basic_sounds/ki.mp3"></audio>',
    rome: "ki",
    num: "7/46",
  },
  {
    text: "く",
    sound: '<audio id="audio" src="./basic_sounds/ku.mp3"></audio>',
    rome: "ku",
    num: "8/46",
  },
  {
    text: "け",
    sound: '<audio id="audio" src="./basic_sounds/ke.mp3"></audio>',
    rome: "ke",
    num: "9/46",
  },
  {
    text: "こ",
    sound: '<audio id="audio" src="./basic_sounds/ko.mp3"></audio>',
    rome: "ko",
    num: "10/46",
  },
  {
    text: "さ",
    sound: '<audio id="audio" src="./basic_sounds/sa.mp3"></audio>',
    rome: "sa",
    num: "11/46",
  },
  {
    text: "し",
    sound: '<audio id="audio" src="./basic_sounds/shi.mp3"></audio>',
    rome: "shi",
    num: "12/46",
  },
  {
    text: "す",
    sound: '<audio id="audio" src="./basic_sounds/su.mp3"></audio>',
    rome: "su",
    num: "13/46",
  },
  {
    text: "せ",
    sound: '<audio id="audio" src="./basic_sounds/se.mp3"></audio>',
    rome: "se",
    num: "14/46",
  },
  {
    text: "そ",
    sound: '<audio id="audio" src="./basic_sounds/so.mp3"></audio>',
    rome: "so",
    num: "15/46",
  },
  {
    text: "た",
    sound: '<audio id="audio" src="./basic_sounds/ta.mp3"></audio>',
    rome: "ta",
    num: "16/46",
  },
  {
    text: "ち",
    sound: '<audio id="audio" src="./basic_sounds/chi.mp3"></audio>',
    rome: "chi",
    num: "17/46",
  },
  {
    text: "つ",
    sound: '<audio id="audio" src="./basic_sounds/tsu.mp3"></audio>',
    rome: "tsu",
    num: "18/46",
  },
  {
    text: "て",
    sound: '<audio id="audio" src="./basic_sounds/te.mp3"></audio>',
    rome: "te",
    num: "19/46",
  },
  {
    text: "と",
    sound: '<audio id="audio" src="./basic_sounds/to.mp3"></audio>',
    rome: "to",
    num: "20/46",
  },
  {
    text: "な",
    sound: '<audio id="audio" src="./basic_sounds/na.mp3"></audio>',
    rome: "na",
    num: "21/46",
  },
  {
    text: "に",
    sound: '<audio id="audio" src="./basic_sounds/ni.mp3"></audio>',
    rome: "ni",
    num: "22/46",
  },
  {
    text: "ぬ",
    sound: '<audio id="audio" src="./basic_sounds/nu.mp3"></audio>',
    rome: "nu",
    num: "23/46",
  },
  {
    text: "ね",
    sound: '<audio id="audio" src="./basic_sounds/ne.mp3"></audio>',
    rome: "ne",
    num: "24/46",
  },
  {
    text: "の",
    sound: '<audio id="audio" src="./basic_sounds/no.mp3"></audio>',
    rome: "no",
    num: "25/46",
  },
  {
    text: "は",
    sound: '<audio id="audio" src="./basic_sounds/ha.mp3"></audio>',
    rome: "ha",
    num: "26/46",
  },
  {
    text: "ひ",
    sound: '<audio id="audio" src="./basic_sounds/hi.mp3"></audio>',
    rome: "hi",
    num: "27/46",
  },
  {
    text: "ふ",
    sound: '<audio id="audio" src="./basic_sounds/hu.mp3"></audio>',
    rome: "hu",
    num: "28/46",
  },
  {
    text: "へ",
    sound: '<audio id="audio" src="./basic_sounds/he.mp3"></audio>',
    rome: "he",
    num: "29/46",
  },
  {
    text: "ほ",
    sound: '<audio id="audio" src="./basic_sounds/ho.mp3"></audio>',
    rome: "ho",
    num: "30/46",
  },
  {
    text: "ま",
    sound: '<audio id="audio" src="./basic_sounds/ma.mp3"></audio>',
    rome: "ma",
    num: "31/46",
  },
  {
    text: "み",
    sound: '<audio id="audio" src="./basic_sounds/mi.mp3"></audio>',
    rome: "mi",
    num: "32/46",
  },
  {
    text: "む",
    sound: '<audio id="audio" src="./basic_sounds/mu.mp3"></audio>',
    rome: "mu",
    num: "33/46",
  },
  {
    text: "め",
    sound: '<audio id="audio" src="./basic_sounds/me.mp3"></audio>',
    rome: "me",
    num: "34/46",
  },
  {
    text: "も",
    sound: '<audio id="audio" src="./basic_sounds/mo.mp3"></audio>',
    rome: "mo",
    num: "35/46",
  },
  {
    text: "や",
    sound: '<audio id="audio" src="./basic_sounds/ya.mp3"></audio>',
    rome: "ya",
    num: "36/46",
  },
  {
    text: "ゆ",
    sound: '<audio id="audio" src="./basic_sounds/yu.mp3"></audio>',
    rome: "yu",
    num: "37/46",
  },
  {
    text: "よ",
    sound: '<audio id="audio" src="./basic_sounds/yo.mp3"></audio>',
    rome: "yo",
    num: "38/46",
  },
  {
    text: "ら",
    sound: '<audio id="audio" src="./basic_sounds/ra.mp3"></audio>',
    rome: "ra",
    num: "39/46",
  },
  {
    text: "り",
    sound: '<audio id="audio" src="./basic_sounds/ri.mp3"></audio>',
    rome: "ri",
    num: "40/46",
  },
  {
    text: "る",
    sound: '<audio id="audio" src="./basic_sounds/ru.mp3"></audio>',
    rome: "ru",
    num: "41/46",
  },
  {
    text: "れ",
    sound: '<audio id="audio" src="./basic_sounds/re.mp3"></audio>',
    rome: "re",
    num: "42/46",
  },
  {
    text: "ろ",
    sound: '<audio id="audio" src="./basic_sounds/ro.mp3"></audio>',
    rome: "ro",
    num: "43/46",
  },
  {
    text: "わ",
    sound: '<audio id="audio" src="./basic_sounds/wa.mp3"></audio>',
    rome: "wa",
    num: "44/46",
  },
  {
    text: "を",
    sound: '<audio id="audio" src="./basic_sounds/wo.mp3"></audio>',
    rome: "wo",
    num: "45/46",
  },
  {
    text: "ん",
    sound: '<audio id="audio" src="./basic_sounds/n.mp3"></audio>',
    rome: "n",
    num: "46/46",
  },
];

function loadCard() {
  CardBorder.appendChild(Card);
  Card.appendChild(presentChar);
  Card.appendChild(presentRome);
  presentChar.innerText = fifty[presentNum].text;
  presentRome.innerText = fifty[presentNum].rome;
  number.innerText = fifty[presentNum].num;
}

loadCard();

reset.addEventListener("click", (e) => {
  presentNum = 0;
  loadCard();
});

pre.addEventListener("click", (e) => {
  if (presentNum != 0) {
    presentNum -= 1;
    loadCard();
    if (isHiding) {
      hide.textContent = "隱藏";
      isHiding = false;
    }
  }
});

next.addEventListener("click", (e) => {
  if (presentNum != 45) {
    presentNum += 1;
    loadCard();
    if (isHiding) {
      hide.textContent = "隱藏";
      isHiding = false;
    }
  }
});

speak.addEventListener("click", (e) => {
  audioPut.innerHTML = fifty[presentNum].sound;
  let audio = document.querySelector("audio");
  audio.play();
});

hide.addEventListener("click", (e) => {
  if (isHiding) {
    loadCard();
    hide.textContent = "隱藏";
    isHiding = false;
  } else {
    hide.textContent = "顯示";
    isHiding = true;
    let removeCard = document.querySelector(".card");
    removeCard.remove();
  }
});
