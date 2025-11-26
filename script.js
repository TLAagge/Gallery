// Load image details from JSON file
let imageDetails = {};

// Load the data first, then set up everything
fetch('images-data.json')
    .then(response => response.json())
    .then(data => {
        // Convert JSON structure to path-based lookup
        Object.keys(data).forEach(category => {
            data[category].forEach(image => {
                const path = `images/${category}/${image.filename}`;
                imageDetails[path] = image.description;
            });
        });
        
        // Set up lightbox after data is loaded
        initializeLightbox();
    })
    .catch(error => {
        console.error('Error loading image data:', error);
        // Initialize lightbox anyway, even if JSON fails
        initializeLightbox();
    });

function initializeLightbox() {
    // Get lightbox elements
    const lightbox = document.getElementById('lightbox');
    const lightboxContent = document.getElementById('lightbox-content');
    const closeLightbox = document.querySelector('.lightbox .close');
    const photoLocation = document.getElementById('photo-location');

    if (!lightbox || !lightboxContent || !closeLightbox) {
        console.error('Lightbox elements not found');
        return;
    }

    // Open lightbox on image click
    document.querySelectorAll('.lightbox-img').forEach(img => {
        img.addEventListener('click', () => {
            const imageSrc = img.getAttribute('data-src');
            lightbox.style.display = 'flex';
            lightboxContent.src = imageSrc;

            // Set the corresponding image info (location)
            if (photoLocation) {
                const locationText = imageDetails[imageSrc] || "Location information not available";
                photoLocation.textContent = locationText;
            }
        });
    });

    // Close lightbox on 'X' click
    closeLightbox.addEventListener('click', () => {
        lightbox.style.display = 'none';
    });

    // Close lightbox when clicking on the background
    lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });

    // Close lightbox on Escape key
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            lightbox.style.display = 'none';
        }
    });
}


