const aAll = document.querySelectorAll('a')
for(i = 0 ; i < aAll.length ; i++){
    aAll[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
const logo = document.querySelector('header h1 a')
logo.addEventListener('click', ()=>{
    window.location.href = './index.html'
})