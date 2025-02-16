let currentIndex = 0; // Começamos no primeiro slide
const slides = document.querySelectorAll('.carousel-slide .related-product');
const totalSlides = slides.length;
const slideContainer = document.getElementById('carousel-slide');
const slideWidth = slides[0].clientWidth;

const prevButton = document.getElementById('prev-btn');
const nextButton = document.getElementById('next-btn');

function updateCarousel() {
    slideContainer.style.transform = `translateX(-${currentIndex * slideWidth}px)`;
}

prevButton.addEventListener('click', () => {
    currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
    updateCarousel();
});

nextButton.addEventListener('click', () => {
    currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
    updateCarousel();
});

// Atualiza o carrossel ao redimensionar a janela
window.addEventListener('resize', () => {
    slideWidth = slides[0].clientWidth;
    updateCarousel();
});
