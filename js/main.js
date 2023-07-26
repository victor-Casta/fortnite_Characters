const firstImage = document.querySelector('#image_first');
const secondImage = document.querySelector('#image_second');
const thirdImage = document.querySelector('#image_third');
const modal = document.querySelector('.modal');
const closeModal = document.querySelector('.modal__content--close');

function showModal() {
    modal.classList.remove('inactive');
    modal.classList.add('visible');
}

function hideModal() {
    modal.classList.add('inactive');
    modal.classList.remove('visible');
}   

firstImage.addEventListener('click', showModal);
secondImage.addEventListener('click', showModal);
thirdImage.addEventListener('click', showModal);

closeModal.addEventListener('click', hideModal);
