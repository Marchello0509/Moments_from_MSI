import "./src/scss/welcome.js"

const singUpButton=document.querySelector('#SignUp');
const signInButton=document.querySelector('#SignIn')
singUpButton.addEventListener('click',()=>{
    window.location.href = '/reg.html'
})
signInButton.addEventListener('click',()=>{
    window.location.href = '/login.html'
})
