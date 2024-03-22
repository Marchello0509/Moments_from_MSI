import "./src/scss/main.js"
import './src/js/post.js'
import axios from "axios"

const mainEl = {
    btnSearch: document.querySelector('#btnSearch'),
    userName: document.querySelector('#userName'),
    btnSet: document.querySelector('#btnSet'),
    
}

const token = localStorage.getItem("userToken")

console.log(mainEl)

mainEl.btnSet.addEventListener('click', () => {
    window.location.href = './sesting.html'
})

const renderUserName = () => {
    axios
    .get(`http://localhost:4000/user/info?token=${token}`)
    .then((res) => {
        console.log(res.data)
        mainEl.userName.innerHTML = res.data.login
    })
}

renderUserName()