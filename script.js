// Image details data (embedded to avoid CORS issues when opening locally)
const imageData = {
  "animals": [
    {
      "filename": "DSC07242.jpg",
      "description": "This is a mongolian domestic horse, scientific name Equus ferus caballus. Taken in Mongolia. One fun fact about these horses is that they can survive in extreme temperatures ranging from -40°C to 40°C (-40°F to 104°F)."
    },
    {
      "filename": "DSC07321.jpg",
      "description": "This is a Ruddy Shelduck with its 2 ducklings, scientific name Tadorna ferruginea. Taken in Mongolia. A fun fact about Ruddy Shelducks is that in Tibetan Buddhism they are considered sacred and a symbol of fidelity because pairs often mate for life and are very protective of each others."
    },
    {
      "filename": "DSC07331.jpg",
      "description": "This is a Ruddy Shelduck, scientific name Tadorna ferruginea. Taken in Mongolia. A fun fact about Ruddy Shelducks is that in Tibetan Buddhism they are considered sacred and a symbol of fidelity because pairs often mate for life and are very protective of each others."
    },
    {
      "filename": "DSC07425.jpg",
      "description": "This is a bearded vulture, scientific name Gypaetus barbatus. Taken in Mongolia. A fun fact about bearded vultures is that they get these orange colors from bathing in iron-rich mud."
    },
    {
      "filename": "DSC07374.jpg",
      "description": "This is a Brandt's vole, scientific name Lasiopodomys brandtii. Taken in Mongolia. A fun fact about Brandt's voles is that they are known for their population explosions, which can lead to significant ecological impacts in their habitats."
    },
    {
      "filename": "DSC07309.jpg",
      "description": "This is a Ruddy Shelduck mid flight, scientific name Tadorna ferruginea. Taken in Mongolia. A fun fact about Ruddy Shelducks is that in Tibetan Buddhism they are considered sacred and a symbol of fidelity because pairs often mate for life and are very protective of each others."
    }
  ],
  "nature": [
    {
      "filename": "DSC07215.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07216.jpg",
      "description": "Taken in Mongolia."
    }
  ],
  "vehicles": [
    {
      "filename": "DSC07725.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07758.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07831.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07841.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07747.jpg",
      "description": "Taken in Mongolia."
    },
    {
      "filename": "DSC07852.jpg",
      "description": "Taken in Mongolia."
    }
  ]
};

// Convert to path-based lookup
let imageDetails = {};
Object.keys(imageData).forEach(category => {
    imageData[category].forEach(image => {
        const path = `images/${category}/${image.filename}`;
        imageDetails[path] = image.description;
    });
});

// Initialize lightbox immediately
initializeLightbox();

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
                console.log('Looking for:', imageSrc);
                console.log('Available paths:', Object.keys(imageDetails));
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


