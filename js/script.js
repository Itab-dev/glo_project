const contents = document.querySelectorAll('.program-line__content')
function closeAccordion(event){
    contents.forEach(item => {
        item.querySelector('.program-line__descr').classList.remove('active')
    })
    event.target.nextElementSibling.classList.add('active')
}
contents.forEach(item => {
    const title = item.querySelector('.program-line__title');
    title.addEventListener('click', closeAccordion)
})