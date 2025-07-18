const userId = document.querySelector('#user_id');
const userPw = document.querySelector('#user_pw');
const loginBtn = document.querySelector('#login');
loginBtn.addEventListener('click', ()=>{
    if(userId.value == ''){
        alert('아이디를 입력해주세요')
    }else if(userId.value && userPw.value == ''){
        alert('아이디를 입력해주세요')
    }else{
        alert('아이디 또는 비밀번호가 맞지 않습니다.')
    }
})