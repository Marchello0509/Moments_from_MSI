import "./src/scss/style.js"

const loginEl = {
    btnLog: document.querySelector('#btnLog'),
    btnReg: document.querySelector('#btnReg'),
    btnRestore:document.querySelector('#btnRestore'),
    inpEm: document.querySelector('#inpEm'),
    inpPass: document.querySelector('#inpPass'),
}

let dataBase = [
    {
        email: "marchello0509@gmail.com",
        password: "Admin0509"
    }
]


loginEl.btnLog.addEventListener('click', () => {
    let inp1 = loginEl.inpEm.value
    let inp2 = loginEl.inpPass.value
    dataBase.forEach((user) => {
        if (inp1 === user.email && inp2 === user.password) {
            console.log(true)
            window.location.href = './main.html'
        } else if (inp1 !== user.email && inp2 !== user.password) {
            console.log(false)
            alert('True again')
        } else if (inp1 !== user.email) {
            console.log(false)
            alert('Wrong email')
        } else if (inp1 !== user.password) {
            console.log(false)
            alert('Wrong password')
        } 
    })
})

loginEl.btnReg.addEventListener('click', () => {
    window.location.href = './reg.html'
})
loginEl.btnRestore.addEventListener('click',()=>{
    window.location.href='/restore.html'

})