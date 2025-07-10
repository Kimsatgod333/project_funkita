const logo = document.querySelector('header h1 a')
logo.addEventListener('click', (e)=>{
    e.preventDefault()
    window.location.href = './index.html'
})