import "./src/scss/reg.js"

const inputs={
    name:document.querySelector("#nameInput"),
    email:document.querySelector("#EmailInput"),
    password:document.querySelector("#PasswordInput"),
    repassword:document.querySelector('#Re-enterPassword'),
    errorInput:document.querySelector('#error')
}
const SingUpButton=document.querySelector("#SingUp");
let users=[
    {
        name:'Fsdfsrgd1',
        email:'gergrg4egrdfgd1',
        password:'gretgrfhfr245341'
    },
    {
        name:'Fsdfsrgd2',
        email:'gergrg4egrdfgd2',
        password:'gretgrfhfr245342'
    },
    {
        name:'Fsdfsrgd3',
        email:'gergrg4egrdfgd3',
        password:'gretgrfhfr245343'
    }, {
        name:'Fsdfsrgd4',
        email:'gergrg4egrdfgd4',
        password:'gretgrfhfr245344'
    }
]

const CheckPassword=(password,repassword)=>{
    if(password == repassword){
        return true;
    }else{
        return false;
    }
}
SingUpButton.addEventListener("click",()=>{
    let succcsesfull=true;
    let ParamNow="";
    const candidate={
            name:inputs.name.value,
            email:inputs.email.value,
            password:inputs.password.value,
            repassword:inputs.repassword.value
        }
    console.log(candidate)
    for(const param in candidate){
        if(candidate[param].length == 0){
            succcsesfull = false;
            ParamNow=param
        }
    }
    if(!succcsesfull){
        inputs.errorInput.innerHTML=`Param ${ParamNow} gas been inccorect`
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
                users=[
                    ...users,
                    {
                        name:candidate.name,
                        email:candidate.email,
                        password:candidate.password,
                    },
                ];
            }
        }
    }
    
    console.log(users)
});