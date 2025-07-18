const aAll = document.querySelectorAll('a')
for(i = 0 ; i < 37 ; i++){
    aAll[i].addEventListener('click',(e)=>{
        e.preventDefault()
    })
}
const bnrLocate = document.querySelectorAll('.bnr_swiper .swiper-slide')
for(let i = 0 ; i < 4 ; i++){
    const bnrLink = document.createElement('a')
    bnrLocate[i].appendChild(bnrLink)
    bnrLink.innerHTML = `<img src="${topBnr[i]}" alt="">`
}
const newList = document.querySelectorAll('.new_swiper .swiper-slide')
for(let i = 0 ; i < 9 ; i++){
    const newContent = document.createElement('a')
    newList[i].appendChild(newContent)
    newContent.innerHTML = `<img src="${newArrivalsWoman[i].src}" alt="썸네일">`
    newContent.innerHTML += `<span class="gender">${newArrivalsWoman[i].gender}</span>`
    newContent.innerHTML += `<span class="name">${newArrivalsWoman[i].name}</span>`
    newContent.innerHTML += `<span class="kind">${newArrivalsWoman[i].kind}</span>`
    newContent.innerHTML += `<span class="price">${newArrivalsWoman[i].price.toLocaleString('ko-kr')}원</span>`
    newContent.addEventListener('click',()=>{
        window.location.href = './buy.html'
    })
}
const weekList = document.querySelectorAll('.week_swiper .swiper-slide')
for(let i = 0 ; i < 10 ; i++){
    const weekContent = document.createElement('a')
    weekList[i].appendChild(weekContent)
    weekContent.innerHTML = `<img src="${weekBestWoman[i].src}" alt="썸네일">`
    weekContent.innerHTML += `<span class="gender">${weekBestWoman[i].gender}</span>`
    weekContent.innerHTML += `<span class="name">${weekBestWoman[i].name}</span>`
    weekContent.innerHTML += `<span class="kind">${weekBestWoman[i].kind}</span>`
    weekContent.innerHTML += `<span class="price">${weekBestWoman[i].price.toLocaleString('ko-kr')}원</span>`
    weekContent.addEventListener('click',()=>{
        window.location.href = './buy.html'
    })
}
const trandList = document.querySelectorAll('.trand_swiper .swiper-slide')
for(let i = 0 ; i < 9 ; i++){
    const trandContent = document.createElement('a')
    trandList[i].appendChild(trandContent)
    trandContent.innerHTML = `<img src="${trand[i].src}" alt="썸네일">`
    trandContent.innerHTML += `<span>${trand[i].title}</span>`
}
const newsList = document.querySelectorAll('.news_list ul li')
for(let i = 0 ; i < 3 ; i++){
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
const nav = document.querySelectorAll('nav > ul > li')
const lnb = document.querySelectorAll('li > .lnb, li .lnb_wrap');
const lnbFunc = (ind1, ind2)=>{
    nav[ind1].addEventListener('mouseover', ()=>{
        lnb[ind2].style.transform = 'scaleY(1)'
    })
    nav[ind1].addEventListener('mouseout', ()=>{
        lnb[ind2].style.transform = 'scaleY(0)'
    })
}
lnbFunc(0, 0)
lnbFunc(1, 1)
lnbFunc(3, 2)
lnbFunc(7, 3)
const account = document.querySelector('.account');
account.addEventListener('click', ()=>{
    window.location.href = './login.html'
})
const search = document.querySelector('#search')
console.log(search)