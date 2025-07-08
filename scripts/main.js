const newsList = document.querySelectorAll('.news_list ul li')
for(i = 0 ; i < 3 ; i++){
    const newsContent = document.createElement('a')
    newsList[i].appendChild(newsContent)
    newsContent.innerHTML = `<img src="#" alt="#">`
    newsContent.innerHTML += `<span class="date">${news[i].date}</span>`
    newsContent.innerHTML += `<span class="title">${news[i].title}</span>`
    console.log(newsContent)
}