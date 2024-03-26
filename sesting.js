import "./src/scss/sesting"

const passwordbtn=document.querySelector('#changePasswword');
const emailBtn=document.querySelector('#changeEmail');
const login=document.querySelector('#changeLogin');
const container=document.querySelector('#cardsettings');
const token=localStorage.getItem('Token')
passwordbtn.addEventListener('click',()=>{
    container.innerHTML+=`
    <input type="password" placeholder="Enter your current password">
    <input type="password" placeholder="Enter your new password" id="PasswordInput">
    <button class="main_cardSettings_SaveButton" id="SavePassword">Save</button>
    `
    const SavePasswordBtn=document.querySelector('SavePassword');
    const passwordInput=document.querySelector("#PasswordInput")
    SavePasswordBtn.addEventListener("click",()=>{
        axios.get(`http://localhost:4000/user/edit?token=${token}`,{
            password:passwordInput.value
        })
        window.location.href='/profile.html'
    })
});
emailBtn.addEventListener('click',()=>{
    container.innerHTML+=`
    <input type="text" placeholder="Enter your current email">
    <input type="text" placeholder="Enter your new email" id="EmailInput">
    <button class="main_cardSettings_SaveButton" id="SaveEmail">Save</button>
    `
    const SaveEmailBtn=document.querySelector("#SaveEmail");
    const email=document.querySelector("#EmailInput")
    SaveEmailBtn.addEventListener("click",()=>{
        axios.get(`http://localhost:4000/user/edit?token=${token}`,{
            email:email.value
        })
        window.location.href='/profile.html'
    })
});
login.addEventListener('click',()=>{
    container.innerHTML+=`
    <input type="text" placeholder="Enter your new login" id="LoginInput">
    <button class="main_cardSettings_SaveButton" id="SaveLogin">Save</button>
    `
    const SaveLoinBtn=document.querySelector("#SaveLogin")
    const LoginInput=document.querySelector("#LoginInput")
    SaveLoinBtn.addEventListener("click",()=>{
        axios.get(`http://localhost:4000/user/edit?token=${token}`,{
            login:LoginInput.value
        })
        window.location.href='/profile.html'
    })
})