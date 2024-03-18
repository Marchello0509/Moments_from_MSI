import "./src/scss/reg.js";
import axios from "axios";
const inputs={
    emailInputs:document.querySelector("#EmailInput"),
    passwordInput:document.querySelector("#PasswordInput"),
    repassword:document.querySelector('#Re-enterPassword'),
    errorInput:document.querySelector(`#error`),
    loginInput:document.querySelector(`#LoginInput`)
}
const SingUpButton=document.querySelector("#SingUp");
SingUpButton.addEventListener("click",()=>{
    let succcsesfull=true;
    let ParamNow="";
    console.log(candidate)
    for(const param in candidate){
        if(candidate[param].length == 0){
            succcsesfull = false;
            ParamNow=param
        }
    }
    if(!succcsesfull){
        inputs.errorInput.innerHTML=`Param ${ParamNow} has been inccorect`
    } else{
        const checkPassword = candidate.password == candidate.repassword;
        if(!checkPassword){
            inputs.errorInput.innerHTML='Check your password or Re-password'
        } else{
            let isInclude = false
            users.forEach((person)=>{
                if (person.email==candidate.email){
                    isInclude = true 
                }
            }) 
            if(isInclude){
                inputs.errorInput.innerHTML='Check your email'
            } else{
                axios.post("http://localhost:4000/user/create",{
                    login:inputs.loginInput.value,
                    password:inputs.passwordInput.value,
                    email:inputs.emailInputs.value,
                    name:inputs.nameInput.value
                }).then((res)=>{
                    localStorage.setItem("Token",userToken)
                    window.location.href=`/login.html`
                })
            }
        }
    }
});