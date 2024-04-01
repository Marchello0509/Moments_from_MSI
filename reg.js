import "./src/scss/reg.js";
import axios from "axios";
const FormEl={
    login:document.querySelector("#LoginInput"),
    password:document.querySelector("#PasswordInput"),
    email:document.querySelector("#EmailInput"),
    name:document.querySelector("#nameInput"),
    signUp:document.querySelector("#SingUp"),
    error:document.querySelector("#error"),
    repassword:document.querySelector("#Re-enterPassword")
}
FormEl.signUp.addEventListener("click",()=>{
    let points=0
    if(FormEl.login.value.length!=0){
        points += 1
    } else{
        FormEl.error.innerHTML=`Write your login`
    }
    if(FormEl.password.value.length!=0){
        points+=1
    }else{
        FormEl.error.innerHTML=`Write your password`
    }
    if(FormEl.email.value.length!=0){
        points+=1
    }else{
        FormEl.error.innerHTML=`Write your email`
    }
    if(FormEl.name.value.length!=0){
        points+=1
    }else{
        FormEl.error.innerHTML=`Write your name`
    }
    if(FormEl.password.value==FormEl.repassword.value){
        points+=1
    } else{
        FormEl.error.innerHTML=`Write your correct password`
    }
    if(points==5){
        axios.post("http://localhost:4000/user/create",{
            login:FormEl.login.value,
            password:FormEl.password.value,
            email:FormEl.email.value,
            name:FormEl.name.value
        }).then((res)=>{
            localStorage.setItem("Token",res.data.userToken)
            window.location.href=`/login.html`
        })
    }
})