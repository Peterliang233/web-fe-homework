function register(){
    var pw1 = document.getElementById("password").value;
    var pw2 = document.getElementById("newPassword").value;
    if(pw1!=pw2){
        alert("两次密码不一样");
    }else{
        alert("注册成功");
    }
}

function BackLogin(){
    window.location.href = '../html/index.html';
}
