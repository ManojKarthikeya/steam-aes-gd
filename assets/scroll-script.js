const arrow = document.querySelector('.down-arrow')
const title = document.querySelector('.feature_main_title')

arrow.addEventListener('click',()=> {
    title.scrollIntoView({ behavior: 'smooth'});
})