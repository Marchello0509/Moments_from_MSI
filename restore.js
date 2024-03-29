const FormEl={
    email:document.querySelector('#EmailInput'),
    password:document.querySelector('#PasswordInput'),
    btn:document.querySelector('#SaveBtn')
}
FormEl.btn.addEventListener('click',()=>{
    const ValueEmail=FormEl.email.value
    const ValuePassword=FormEl.password.value
    if(FormEl.email.length==0){
        alert('Please write email')
    }
    if(FormEl.password.length==0){
        alert('Please write password')
    }
    axios.put(`http://Localhost:400/user/restore-password?email=${ValueEmail}&password=${ValuePassword}`)
    .then((res)=>{
        password=ValuePassword
        window.location.href='/login.html'
    })
})