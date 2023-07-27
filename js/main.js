const firstImage = document.querySelector('#image_first');
const secondImage = document.querySelector('#image_second');
const thirdImage = document.querySelector('#image-tree');
const modal = document.querySelector('.modal');
modal.classList.add('inactive')
const closeModal = document.querySelector('.modal__content--close');

function openSlideSection() {
    modal.classList.remove('inactive');
}

function closeSlideSection() {
    modal.classList.add('inactive');
}

firstImage.addEventListener('click', () => {
    openSlideSection();
})

secondImage.addEventListener('click', () => {
    openSlideSection();
})

thirdImage.addEventListener('click', () => {
    openSlideSection();
})

closeModal.addEventListener('click', () => {
    closeSlideSection();
})
