const aAll = document.querySelectorAll('a')
console.log(aAll)
for(i = 0 ; i < aAll.length ; i++){
    aAll[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
const logo = document.querySelector('header h1 a')
logo.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = './index.html'
})