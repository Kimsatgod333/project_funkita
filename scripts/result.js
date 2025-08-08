//검색버튼 JS
const searchBtn = document.querySelector('#search');
const mSearchBtn = document.querySelector('.search_info');
const searchWrap = document.querySelector('.search_wrap');
const searchArea = document.querySelector('#search_area');
const resultSearch = document.querySelector('.result_search');
searchBtn.addEventListener('click', ()=>{
    searchWrap.style.opacity = '1';
    searchArea.style.transform = 'translateY(0)';
    searchWrap.style.zIndex = '99';
})
searchWrap.addEventListener('click',()=>{
    searchWrap.style.opacity = '0';
    searchArea.style.transform = 'translateY(-100px)';
    searchWrap.style.zIndex = '-1';
})
mSearchBtn.addEventListener('click', ()=>{
    searchWrap.style.opacity = '1';
    searchArea.style.transform = 'translateY(0)';
    searchWrap.style.zIndex = '99';
})
resultSearch.addEventListener('click',()=>{
    window.location.href = './result.html'
})
document.addEventListener('keydown', (e)=>{
    if(e.key == 'Escape'){
        searchWrap.style.opacity = '0';
        searchArea.style.transform = 'translateY(-100px)';
    searchWrap.style.zIndex = '-1';
}
})