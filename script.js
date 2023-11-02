let pwd = document.getElementById('pwd');
let cpwd = document.getElementById('cpwd');
let errMsg = document.querySelector('.err-msg');
let btn = document.querySelector('.btn');

btn.addEventListener('click', ()=>{

    if(pwd.value.length < 7){
        errMsg.innerHTML = "Password should contain atleast 8 characters";
    }
    if(pwd.value != cpwd.value){
        errMsg.innerHTML = "Passwords are not same !"
    }
    console.log(pwd.value);
})

