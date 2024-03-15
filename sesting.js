import "./src/scss/sesting"

const password=document.querySelector('#changePasswword');
const email=document.querySelector('#changeEmail');
const avatar=document.querySelector('#changeAvatar');
const container=document.querySelector('#cardsettings')
password.addEventListener('click',()=>{
    container.innerHTML+=`
    <input type="password" placeholder="Enter your current password">
    <input type="password" placeholder="Enter your new password">
    <button class="main_cardSettings_SaveButton">Save</button>
    `
});
email.addEventListener('click',()=>{
    container.innerHTML+=`
    <input type="text" placeholder="Enter your current email">
    <input type="password" placeholder="Enter your new email">
    <button class="main_cardSettings_SaveButton">Save</button>
    `
});
avatar.addEventListener('click',()=>{
    container.innerHTML+=`
    <div class="test"></div>
    <button class="main_cardSettings_SaveButton">Save</button>
    `
})