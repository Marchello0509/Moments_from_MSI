import "./src/scss/main.js"
import './src/js/post.js'

const mainEl = {
    btnSearch: document.querySelector('#btnSearch'),
    userName: document.querySelector('#userName'),
    btnSet: document.querySelector('#btnSet'),
}

console.log(mainEl)

mainEl.btnSet.addEventListener('click', () => {
    window.location.href = './sesting.html'
})