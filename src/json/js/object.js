let year = 1;

let studentObj = {
    name: "김준일",
    schoolName: "코리아아이티아카데미",
    hobby: ["축구", "농구", "골프"],
    info: {
        "year": year, //=> 1번줄 변수를 가져오는데 year이 중복일때 "" 사용
        group: 2,
        number: 3
    }
};

 console.log(studentObj.name);

 for(let i = 0; i < studentObj.hobby.length; i++) {
    console.log(studentObj.hobby[i]);
 }

 console.log(studentObj.info.year);

 console.log("학생객체: " + studentObj);

/*
 json 형변환
 1. object -> JSON ->JSON.stringify(객체); 오브젝트를 JSON 문자열로 변환해줌
 2. JSON -> object -> JSON.parse(JSON); JSON문자열을 오브젝트(객체)로 변홤해줌
*/ 

let jsonData = JSON.stringify(studentObj); //JSON으로 변환

console.log("JSON으로 변환: " + jsonData);

let jsonObj = JSON.parse(jsonData); //undifined가 나와서 선언

console.log(jsonData.name); //=>undifined : 초기화x , 값을 찾을 수 없음
