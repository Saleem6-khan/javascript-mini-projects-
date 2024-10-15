let box = document.querySelectorAll(".box");
let btn = document.querySelector("#reset-btn");
let startBtn = document.querySelector("#start-btn");
let message = document.querySelector(".heading1");
let container = document.querySelector(".messasge");

let turn0 = true;
const winPatteren = [
  [0, 1, 2],
  [0, 3, 6],
  [0, 4, 8],
  [1, 4, 7],
  [2, 5, 8],
  [2, 4, 6],
  [3, 4, 5],
  [6, 7, 8],
];
box.forEach((element) => {
  element.addEventListener("click", () => {
   
    if (turn0) {
      element.innerHTML = "O";
      turn0 = false;
      element.style.color="#fff"
    } else {
      element.innerHTML = "X";
      turn0 = true;
      element.style.color="#DFD3C3"
    }
    element.disabled = true;
    checkwinner();
  });
});
const checkwinner = () => {
  for (let pattren of winPatteren) {
    let value1 = box[pattren[0]].innerHTML;
    let value2 = box[pattren[1]].innerHTML;
    let value3 = box[pattren[2]].innerHTML;
    if (value1 != "" && value2 != "" && value3 != "") {
      if (value1 === value2 && value2 === value3) {
        showWinner(value1);
      }
    }
  }
};
const showWinner = (winner) => {
  message.innerHTML = `congrats winner is ${winner}`;
   container.classList.remove('hide')
   disable();

};
const disable=()=>{
box.forEach((box)=>{
    box.disabled=true;
})
}
const enable=()=>{
    box.forEach((box)=>{
        box.disabled=false;
        box.innerHTML='';
    })
    turn0=true;
    message.innerHTML='';
    container.classList.add("hide");
   }
  startBtn.addEventListener('click',()=>{
    enable();
  })
  btn.addEventListener('click',()=>{
    enable();
  })