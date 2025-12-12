// Get all image files from the pictures directory
const imageExtensions = ['.png', '.jpg', '.jpeg', '.webp', '.avif', '.gif'];
const picturesPath = 'pictures/';

// Fetch and display images
async function loadGallery() {
    const gallery = document.getElementById('gallery');
    
    // Since we can't directly list directory contents from client-side JS,
    // we'll create a list of known images based on the file structure
    // In a real application, you'd use a backend API or build script
    
    const imageFiles = [
        // Numbered images
        ...Array.from({length: 114}, (_, i) => {
            const num = i.toString().padStart(4, '0');
            return `pictures/${num}.png`;
        }),
        // Named images
        'pictures/avi schiffman photo.avif',
        'pictures/background for title.png',
        'pictures/boycottsticker.png',
        'pictures/crosssymbol.png',
        'pictures/Engelke.webp',
        'pictures/falun dafa.webp',
        'pictures/hare krishna.jpg',
        'pictures/italian harlem 1.png',
        'pictures/italian harlem 2.png',
        'pictures/jay z and jesus.jpeg',
        'pictures/Orsi.jpg',
        'pictures/Petro.png',
        'pictures/photo from friend.com official trailer.png',
        'pictures/political discourse.png',
        'pictures/protest tweet.png',
        'pictures/robot priest background.jpg',
        'pictures/Simmel.png',
        'pictures/Weiner.png',
        'pictures/why do you think i left so much white space?.webp',
        'pictures/with graffiti 1.PNG',
        'pictures/with graffiti 2.PNG',
        'pictures/with graffiti 3.PNG',
        'pictures/without graffiti 1.png',
        'pictures/without graffiti 2.png',
        'pictures/without graffiti 3.png'
    ];
    
    imageFiles.forEach(imagePath => {
        const galleryItem = document.createElement('div');
        galleryItem.className = 'gallery-item';
        
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = imagePath.split('/').pop();
        img.loading = 'lazy';
        
        // Handle image load errors
        img.onerror = function() {
            galleryItem.style.display = 'none';
        };
        
        const imageName = document.createElement('div');
        imageName.className = 'image-name';
        imageName.textContent = img.alt;
        
        galleryItem.appendChild(img);
        galleryItem.appendChild(imageName);
        
        // Add click handler for modal view
        galleryItem.addEventListener('click', () => showModal(imagePath));
        
        gallery.appendChild(galleryItem);
    });
}

// Modal functionality
function showModal(imageSrc) {
    const modal = document.createElement('div');
    modal.className = 'modal active';
    
    const closeBtn = document.createElement('span');
    closeBtn.className = 'modal-close';
    closeBtn.innerHTML = '&times;';
    closeBtn.addEventListener('click', () => {
        document.body.removeChild(modal);
    });
    
    const img = document.createElement('img');
    img.className = 'modal-content';
    img.src = imageSrc;
    img.alt = imageSrc.split('/').pop();
    
    modal.appendChild(closeBtn);
    modal.appendChild(img);
    
    // Close on background click
    modal.addEventListener('click', (e) => {
        if (e.target === modal) {
            document.body.removeChild(modal);
        }
    });
    
    // Close on Escape key
    const escapeHandler = (e) => {
        if (e.key === 'Escape') {
            document.body.removeChild(modal);
            document.removeEventListener('keydown', escapeHandler);
        }
    };
    document.addEventListener('keydown', escapeHandler);
    
    document.body.appendChild(modal);
}

// Initialize gallery when page loads
document.addEventListener('DOMContentLoaded', loadGallery);

