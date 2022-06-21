const brandLogo = document.querySelector(".brand-logo-border");
const convertBtn = document.querySelector(".article-footer button");
const textarea = document.querySelector(".article-body-textarea textarea");
const pre = document.querySelector(".article-body pre");
const inputUrl = document.querySelector("#web-url");
const linkButton = document.querySelector(".button-url button");


//일회성인 익명함수 사용
brandLogo.onclick = () => {
    // alert("로고 클릭되었음");
    //location.href = "https://papago.naver.com"; => 히스토리가 남음(뒤로가기가능)
    //location.replace("https://papago.naver.com"); //=>href 반대
    location.href = "http://127.0.0.1:5500/papago/historyback.html"; //이전페이지 돌아가기
}

convertBtn.onclick = () => {
    //이 함수안에서만 사용 => 지역변수로 선언
    // const textarea = document.querySelector(".article-body-textarea textarea");
    // const pre = document.querySelector(".article-body pre")
    //alert("번역하기 버튼 클릭됨");
    //alert(textarea.value);
    pre.textContent = textarea.value;
}

textarea.onkeyup = () => {
    pre.textContent = textarea.value;
}

//방법1 - 화살표 누르면 url 입력 주소로 이동
// linkButton.onclick = () => {
//     location.href = inputUrl.value;
// }

//방법2
linkButton.onclick = () => {
    //http 기입안해도 이동하게 메크로?
    let protocols = new Array();
    protocols.push("http://");
    protocols.push("https://");

    for(let i = 0; i < protocols.length; i++){
        if(inputUrl.value.includes(protocols[i])) {
            location.href = inputUrl.value;
            return;
        }
    }
    location.href = "https://" + inputUrl.value;
}

//방법3 => enter 를 쳤을때 주소로 이동
inputUrl.onkeypress = () => {
    if(window.event.keyCode == 13) {
        //alert("엔터키 동작");
        linkButton.click(); //=>방법2 동작을 불러오는것 
    }
}