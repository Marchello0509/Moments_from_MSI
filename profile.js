import "./src/scss/profile.js"

const dialog = document.querySelector('#dialog')
const addBtn = document.querySelector('#addBtn')
const cross = document.querySelector('#cross')



const openDialog = () => {
    dialog.classList.toggle('none')
}

cross.addEventListener('click', () => {
    openDialog()
})

dialog.addEventListener('click', (event) => {
    if(event.target === dialog) {
        openDialog()
    }
})

addBtn.addEventListener('click' , () => {
    openDialog()
})

