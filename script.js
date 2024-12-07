document.addEventListener("DOMContentLoaded", function () {
    const slides = document.querySelectorAll(".slideshow img");
    let currentIndex = 0;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % slides.length;
        showSlide(currentIndex);
    }

    // Automatically change slides every 3 seconds
    setInterval(nextSlide, 3000);

    // Show the first slide initially
    showSlide(currentIndex);
});
