
let form= document.getElementById("myForm");
form.addEventListener("submit", function(event) {
    event.preventDefault()
    let users = JSON.parse(localStorage.getItem("users"))
    let email = document.getElementById("email").value;
    let password = document.getElementById("password").value;

    for (let i = 0; i < users.length; i++) {
        if (users[i].email == email && users[i].password == password) {
            localStorage.setItem("userId",users[i].id)
            window.location.href = "../index.html"
            return;
        }else{
            alert("メールアドレスまたはパスワードが間違っています!")
            return;
        }
    }
    console.log("đăng nhập thất bại");
})
// function login(e) {
//     e.preventDefault()
//     let users = JSON.parse(localStorage.getItem("users"))
//     let email = document.getElementById("email").value;
//     let password = document.getElementById("password").value;

//     for (let i = 0; i < users.length; i++) {
//         if (users[i].email == email && users[i].password == password) {
//             localStorage.setItem("userId",users[i].id)
//             window.location.href = "../index.html"
//         }else{
//             alert("メールアドレスまたはパスワードが間違っています!")
//         }
//     }
//     console.log("đăng nhập thất bại");
// }