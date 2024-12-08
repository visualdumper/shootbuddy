document.addEventListener("DOMContentLoaded", function () {
    const slideshows = document.querySelectorAll(".slideshow");  // Select all slideshow containers
    
    slideshows.forEach((slideshow) => {
        const slides = slideshow.querySelectorAll("img");  // Select all images within the current slideshow
        let currentIndex = 0;

        function showSlide(index) {
            slides.forEach((slide, i) => {
                slide.classList.toggle("active", i === index);  // Toggle 'active' class based on the index
            });
        }

        function nextSlide() {
            currentIndex = (currentIndex + 1) % slides.length;  // Move to next slide
            showSlide(currentIndex);
        }

        // Automatically change slides every 3 seconds
        setInterval(nextSlide, 3000);

        // Show the first slide initially
        showSlide(currentIndex);
    });
});
