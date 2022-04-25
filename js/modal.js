const modal = () => {
    const modal = document.querySelector('.modal');
    const modalButton = document.querySelector('.modal__button');
    const courseButton = document.querySelector('.course__button');
    function modalAppend(){
        modal.style.display = 'flex';
    }
    courseButton.addEventListener('click',modalAppend);
    modalButton.addEventListener('click',modalAppend);

    modal.addEventListener('click',(event)=>{
        const modalContent = event.target;
        if(modalContent.classList.contains('modal')||modalContent.classList.contains('closeBtn')){
            modal.style.display = '';
        }
    })
}
modal()
