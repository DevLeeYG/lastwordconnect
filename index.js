const number = Number(prompt("명몇이 참가합니까?"));
const $button = document.querySelector("button");
const $input = document.querySelector("input");
const $word = document.querySelectorAll("#word");
const $order = document.querySelector("#order");

let word;
let newWord;

const onClickButoon = () => {
  if (!word) {
    //제시어가 비어있는가?
    word = newWord; //입력한단어가 제시어
    //워드변수가 아무것도 없다면
    //비어있다
    $word.textContent = word; //textContent는 태그내부의 문자열을 가져옴 word를 해당값으로 설정("")
    const order = Number($order.textContent);
    if (order + 1 > number) {
      $order.textContent = 1; //3명인데 4로간다면 다시 1번으로 초기화하는 문
    } else {
      $order.textContent = order + 1; // 작다면 +1
    }
  } else {
    //비어있지않다
    if (word[word.length - 1] === newWord[0]) {
      word = newWord;
      $word.textContent = word;

      const order = Number($order.textContent);
      if (order + 1 > number) {
        $word.textContent = 1;
      } else {
        $word.textContent = order + 1;
      }
    } else {
    }
  }
  const onInput = (event) => {
    newWord = event.target.value;
  };
};

$button.addEventListener("click", onClickButoon);

$input.addEventListener("input", onInput);
