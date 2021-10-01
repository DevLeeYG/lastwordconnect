const number = Number(prompt("명몇이 참가합니까?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelector("#word");
const $order = document.querySelector("#order");

let word;
let newWord;

const onClickButoon = () => {
  //비어있지않다
  if (!word || word[word.length - 1] === newWord[0]) {
    word = newWord;
    $word.textContent = word;

    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1;
    } else {
      $order.textContent = order + 1;
    }
  } else {
    alert("올바르지 않은 단어입니다");
  }
  $input.value = "";
  $input.focus();
};

const onInput = (event) => {
  newWord = event.target.value;
};

$button.addEventListener("click", onClickButoon);

$input.addEventListener("input", onInput);
