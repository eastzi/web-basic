const box1 = document.querySelector(".box1");
const btn1 = document.querySelector(".btn1")
const box2 = document.querySelector(".box2");
const btn2 = document.querySelector(".btn2");

//이벤트사용시 on을 붙이고
btn1.onclick = () => {
    box1.classList.toggle("box1-resize");
}
//toggle은 값변경 뜻 (0->1, 1->0) 버튼일때만 사용x
btn2.onclick = () => {
    box2.classList.toggle("box2-bg-change");
}

box1.onmouseover = () => {
    box1.classList.toggle("box2-bg-change");
}
//on 뒤에 카멜표시 x -> m 소문자로
box1.onmouseout = () => {
    box1.classList.toggle("box2-bg-change");
}

function() {
    console.log()
}
