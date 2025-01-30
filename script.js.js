document.addEventListener("DOMContentLoaded", function () {
    // ---------------- Slideshow 1 (Auto-play) ---------------- //
    let slideIndex = 0;
    function showSlides() {
        let slides = document.querySelectorAll(".slides img");
        slides.forEach(slide => slide.style.display = "none");

        slideIndex++;
        if (slideIndex > slides.length) { slideIndex = 1; }

        slides[slideIndex - 1].style.display = "block";
        setTimeout(showSlides, 3000); 
    }
    showSlides();

    // ---------------- Image Modal ---------------- //
    const images = [
        "tahun1.jpg",
        "tahun2.jpg",
        "tahun3.jpg",
        "tahun4.jpg",
        "tahun5.jpg",
        "tahun6.jpg"
    ];

    let currentIndex = 0;

    function openModal(imageSrc, index) {
        currentIndex = index;
        document.getElementById("imageModal").style.display = "flex";
        document.getElementById("modalImage").src = imageSrc;
    }

    function closeModal() {
        document.getElementById("imageModal").style.display = "none";
    }

    function nextImage(event) {
        event.stopPropagation();
        currentIndex = (currentIndex + 1) % images.length;
        document.getElementById("modalImage").src = images[currentIndex];
    }

    function prevImage(event) {
        event.stopPropagation();
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        document.getElementById("modalImage").src = images[currentIndex];
    }

    // ---------------- Slideshow 2 (Gallery) ---------------- //
    const galleryImages = document.querySelectorAll('.gallery-slideshow img');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');

    let galleryIndex = 0;

    function showGalleryImage(index) {
        galleryImages.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextGalleryImage() {
        galleryIndex = (galleryIndex + 1) % galleryImages.length;
        showGalleryImage(galleryIndex);
    }

    function prevGalleryImage() {
        galleryIndex = (galleryIndex - 1 + galleryImages.length) % galleryImages.length;
        showGalleryImage(galleryIndex);
    }

    if (prevButton && nextButton) {
        nextButton.addEventListener('click', nextGalleryImage);
        prevButton.addEventListener('click', prevGalleryImage);
    }

    setInterval(nextGalleryImage, 4000);
});
