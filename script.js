// Get lightbox elements
const lightbox = document.getElementById('lightbox');
const lightboxContent = document.getElementById('lightbox-content');
const closeLightbox = document.querySelector('.lightbox .close');
const imageInfo= document.getElementById('image-info');
const photoLocation=document.getElementById('photo-location');

const imageDetails = {
    "DSC07242.jpg": "Taken in Mongolia."
    "DSC07321.jpg": "Taken in Mongolia."
    "DSC07331.jpg": "Taken in Mongolia."
    "DSC07425.jpg": "Taken in Mongolia."
    "DSC07374.jpg": "Taken in Mongolia."
};

// Open lightbox on image click
document.querySelectorAll('.lightbox-img').forEach(img => {
    img.addEventListener('click', () => {
        const imageSrc = img.getAttribute('data-src');
        lightbox.style.display = 'flex';
        lightboxContent.src = imageSrc;

        // Set the corresponding image info (location)
        const locationText = imageDetails[imageSrc] || "Location information not available";
        photoLocation.textContent = locationText;
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
