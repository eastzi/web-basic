const btn = document.querySelector('.user-list-load-btn');
const userTableList = document.querySelector(".user-table-list");

let userList = [
    {
        usercode: 20220001,
        username: "junil1",
        password: " 1234",
        name: "김준일",
        email: "aaa@naver.com",
        role: ["ROLE_ADMIN","ROLE_USER"],
        provider:"google"
    },
    {
        usercode: 20220002,
        username: "junil2",
        password: " 1234",
        name: "김준이",
        email: "bbb@naver.com",
        role: ["ROLE_ADMIN","ROLE_USER"],
        provider:"naver"
    },
    {
        usercode: 20220003,
        username: "junil3",
        password: " 1234",
        name: "김준삼",
        email: "ccc@naver.com",
        role: ["ROLE_ADMIN","ROLE_USER"],
        provider:"kakao"
    }
]

btn.onclick = () => {
    let userJSON = JSON.stringify(userList);
    let userListObj = JSON.parse(userJSON);

    // for(let i = 0; i < userListObj.length; i++) {
    //     userTableList.innerHTML += createTr3(userListObj[i]);
    // } 

                        //매개변수 1개라서 () 생략
    userListObj.forEach(user => {
        userTableList.innerHTML += `
            <tr>
                <td>${user.usercode}</td>
                <td>${user.username}</td>
                <td>${user.password}</td>
                <td>${user.name}</td>
                <td>${user.email}</td>
                <td>${user.role.join(", ")}</td>
                <td>${user.provider}</td>
            </tr>
        `;
    });
}

// function createTr3(userData) {
//     let tr = `
//         <tr>
//             <td>${userData.usercode}</td>
//             <td>${userData.username}</td>
//             <td>${userData.password}</td>
//             <td>${userData.name}</td>
//             <td>${userData.email}</td>
//             <td>${userData.role.join(", ")}</td>
//             <td>${userData.provider}</td>
//         </tr>
//     `;

//     return tr;
// }

