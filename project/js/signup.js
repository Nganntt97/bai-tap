
// function tạo id
function userId() {
    return Math.floor(Math.random() * 323864873678)
}
// funtion đăng ký
let users = JSON.parse(localStorage.getItem("users")) || [];
var form = document.getElementById("myForm");
form.addEventListener("submit", function(event) {event.preventDefault()
    let email = document.getElementById("email").value;
    let name = document.getElementById("name").value;
    let password = document.getElementById("password").value;
    let confirmPassword = document.getElementById("confirmPassword").value;

    let obj = {
        email: email,
        name: name,
        password: password,
        id: userId(),
        cart:[],
    }
    let check = users.filter((item) => {
        return item.email == email
    })
    if (check.length == 0) {
        if(confirmPassword!=password){
            alert("もう一度パスワードを確認して下さい！")
            document.getElementsByClassName("error")[0].style.display="block"
        }else{
        users.push(obj);
        localStorage.setItem("users", JSON.stringify(users))
        // đăng ký thành công=> trang đăng nhập
        window.location.href = "../pages/loginpage.html"
        }
         
    } else {
        alert("Account already existst")
    }
})
// function signup(e) {
//     e.preventDefault()
//     let email = document.getElementById("email").value;
//     let name = document.getElementById("name").value;
//     let password = document.getElementById("password").value;
//     let confirmPassword = document.getElementById("confirmPassword").value;

//     let obj = {
//         email: email,
//         name: name,
//         password: password,
//         id: userId(),
//         cart:[],
//     }
//     let check = users.filter((item) => {
//         return item.email == email
//     })
//     if (check.length == 0) {
//         if(confirmPassword!=password){
//             alert("もう一度パスワードを確認して下さい！")
//             document.getElementsByClassName("error")[0].style.display="block"
//         }else{
//         users.push(obj);
//         localStorage.setItem("users", JSON.stringify(users))
//         // đăng ký thành công=> trang đăng nhập
//         window.location.href = "../pages/loginpage.html"
//         }
         
//     } else {
//         alert("Account already existst")
//     }
// }

const passwordInput = document.getElementById("password")
const togglePassword = document.getElementById("toggle-password")

togglePassword.addEventListener("click", showAndHidePassword)

function showAndHidePassword() {
    const type = passwordInput.getAttribute("type") === "password" ? "text" : "password"
    passwordInput.setAttribute("type", type)

    togglePassword.classList.toggle("active")
}