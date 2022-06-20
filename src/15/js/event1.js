const box1 = document.querySelector(".box1");
const changeBtn = document.querySelector(".change-btn");

//classlist => 배열
//toggle => 호출할때마다 값이 변경됨.(0,1 반복)(누르면 다시 나오는것)
changeBtn.onclick = () => {
    box1.classList.toggle("bg-color");
}
