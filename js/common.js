function createPhotoCollage(images) {
    const collage = document.getElementById('photoCollage');
    const row = document.createElement('div');
    row.className = 'row';
    
    const column1 = document.createElement('div');
    column1.className = 'column';
    const column2 = document.createElement('div');
    column2.className = 'column';
    
    images.forEach((imagePath, index) => {
        const img = document.createElement('img');
        img.src = imagePath;
        img.alt = `Photo ${index + 1}`;
        img.style.width = '100%';
        
        const photoItem = document.createElement('div');
        photoItem.className = 'photo-item';
        photoItem.appendChild(img);
        
        // Add click event to open modal
        photoItem.addEventListener('click', function() {
            openModal(imagePath);
        });
        
        if (index % 2 === 0) {
            column1.appendChild(photoItem);
        } else {
            column2.appendChild(photoItem);
        }
    });
    
    row.appendChild(column1);
    row.appendChild(column2);
    collage.appendChild(row);
}

function openModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    modalImage.src = imageSrc;
    const modal = new bootstrap.Modal(document.getElementById('imageModal'));
    modal.show();
}

// Disable right-click on the entire page
document.addEventListener('contextmenu', function(e) {
    e.preventDefault();
});