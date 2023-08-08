let index = 0;
function hideImages() {
    const allImages = document.querySelectorAll('.mainImageContainer');
    allImages.forEach(image => {
        image.style.display = 'none';
    })
    const currentImage = allImages[index];
    currentImage.style.display = 'block';

    index = (index + 1) % allImages.length;
}




// Function to start the image flashing animation
function startAnimation() {
    // Call the changeImage function initially
    hideImages();


    // Set an interval to call the changeImage function
    setInterval(hideImages, 6000);
}

// Call the startAnimation function when the page is loaded
window.onload = startAnimation;