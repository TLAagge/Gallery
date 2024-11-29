// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeLightbox = document.querySelector('.lightbox .close');

// Open lightbox on image click
document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', () => {
        lightbox.style.display = 'flex';
        lightboxContent.src = img.getAttribute('data-src');
    });
});

// Close lightbox on 'X' click or outside click
closeLightbox.addEventListener('click', () => {
    lightbox.style.display = 'none';
});

lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) {
        lightbox.style.display = 'none';
    }
});

