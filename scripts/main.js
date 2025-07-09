const aAll = document.querySelectorAll('a')
for(i = 0 ; i < 37 ; i++){
    aAll[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
const newsList = document.querySelectorAll('.news_list ul li')
for(i = 0 ; i < 3 ; i++){
    const newsContent = document.createElement('a')
    newsList[i].appendChild(newsContent)
    newsContent.innerHTML = `<img src="${news[i].src}" alt="#">`
    newsContent.innerHTML += `<span class="date">${news[i].date}</span>`
    newsContent.innerHTML += `<span class="title">${news[i].title}</span>`
}
const cateBtn = document.querySelectorAll('.cate_btn')
for(let i = 0 ; i < 7 ; i++){
    cateBtn[0].children[0].children[0].classList.add('active')
    cateBtn[0].children[i].children[0].addEventListener('click', ()=>{
        cateBtn[0].children[0].children[0].classList.remove('active')
        cateBtn[0].children[1].children[0].classList.remove('active')
        cateBtn[0].children[2].children[0].classList.remove('active')
        cateBtn[0].children[3].children[0].classList.remove('active')
        cateBtn[0].children[4].children[0].classList.remove('active')
        cateBtn[0].children[5].children[0].classList.remove('active')
        cateBtn[0].children[6].children[0].classList.remove('active')
        cateBtn[0].children[i].children[0].classList.add('active')
    })
    cateBtn[1].children[0].children[0].classList.add('active')
    cateBtn[1].children[i].children[0].addEventListener('click', ()=>{
        cateBtn[1].children[0].children[0].classList.remove('active')
        cateBtn[1].children[1].children[0].classList.remove('active')
        cateBtn[1].children[2].children[0].classList.remove('active')
        cateBtn[1].children[3].children[0].classList.remove('active')
        cateBtn[1].children[4].children[0].classList.remove('active')
        cateBtn[1].children[5].children[0].classList.remove('active')
        cateBtn[1].children[6].children[0].classList.remove('active')
        cateBtn[1].children[i].children[0].classList.add('active')
    })
}