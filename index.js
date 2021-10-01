const button = document.querySelector("button");
const input = document.querySelector("input");

const onClickButoon = () => {
  console.log("버튼클릭");
};

button.addEventListener("click", onClickButoon);

const onInput = (e) => {
  console.log("글자입력", e.target.value);
};

input.addEventListener("input", onInput);
