import "./src/scss/style.js"
import axios from "axios"

const loginEl = {
    btnLog: document.querySelector('#btnLog'),
    btnReg: document.querySelector('#btnReg'),
    inpEm: document.querySelector('#inpEm'),
    inpPass: document.querySelector('#inpPass'),
}

// let dataBase = [
//     {
//         email: "marchello0509@gmail.com",
//         password: "Admin0509"
//     }
// ]

console.log(loginEl)

loginEl.btnLog.addEventListener('click', () => {
    const candidateUser = {
        login: loginEl.inpEm.value,
        password: loginEl.inpPass.value,
    }
    if (candidateUser.login.length !== 0 && candidateUser.password.length !== 0) {
        axios
        .post ("http://localhost:4000/user/sign-in", {
            login: candidateUser.login,
            password: candidateUser.password,
        })
        .then((res) => {
            console.log(res.data)
            localStorage.setItem("userToken", res.data.userToken)
            window.location.href = "./main.html"
        })
    } else {
        alert("Wrong password or email")
    }
})

// let inp1 = loginEl.inpEm.value
//     let inp2 = loginEl.inpPass.value
//     dataBase.forEach((user) => {
        // if (inp1 === user.email && inp2 === user.password) {
        //     console.log(true)
        //     window.location.href = './main.html'
        // } else if (inp1 !== user.email && inp2 !== user.password) {
        //     console.log(false)
        //     alert('True again')
        // } else if (inp1 !== user.email) {
        //     console.log(false)
        //     alert('Wrong email')
        // } else if (inp1 !== user.password) {
        //     console.log(false)
        //     alert('Wrong password')
        // } 
//     })

loginEl.btnReg.addEventListener('click', () => {
    window.location.href = './reg.html'
})