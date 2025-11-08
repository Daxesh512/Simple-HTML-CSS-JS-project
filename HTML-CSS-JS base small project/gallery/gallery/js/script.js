const images = [
    '../img/1.png',
    '../img/2.png',
    '../img/3.png',
    '../img/4.png',
];

let currentIndex = 0;

document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', (e) => {
        currentIndex = parseInt(e.target.dataset.index);
        updateImage();
    });
});

function updateImage() {
    const galleryImage = document.getElementById('galleryImage');
    galleryImage.style.opacity = 0;

    setTimeout(() => {
        galleryImage.src = images[currentIndex];
        galleryImage.style.opacity = 1;
        updateDots();
    }, 500);
}

function updateDots() {
    document.querySelectorAll('.dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === currentIndex);
    });
}

updateDots();