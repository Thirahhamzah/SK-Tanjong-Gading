<script>
let slideIndex = 0; 
    showSlides(); 
 
    function showSlides() { 
        let slides = document.getElementsByClassName("slides"); 
        for (let i = 0; i < slides.length; i++) { 
            slides[i].style.display = "none"; 
        } 
        slideIndex++; 
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex - 1].style.display = "block"; 
        setTimeout(showSlides, 6000);  
    } 
 
    function plusSlides(n) { 
        slideIndex += n - 1; 
        showSlides(); 
    } 
</script>


<script> 
    let slideIndex = 0; 
    showSlides(); 
 
    function showSlides() { 
        let slides = document.getElementsByClassName("slides"); 
        for (let i = 0; i < slides.length; i++) { 
            slides[i].style.display = "none"; 
        } 
        slideIndex++; 
        if (slideIndex > slides.length) {slideIndex = 1} 
        slides[slideIndex - 1].style.display = "block"; 
        setTimeout(showSlides, 6000);  
    } 
 
    function plusSlides(n) { 
        slideIndex += n - 1; 
        showSlides(); 
    } 
</script>

<script>
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
</script>

<script>
    const images = document.querySelectorAll('.gallery-slideshow img');
    const prevButton = document.querySelector('.control.prev');
    const nextButton = document.querySelector('.control.next');

    let currentIndex = 0;

    function showImage(index) {
        images.forEach((img, i) => {
            img.classList.toggle('active', i === index);
        });
    }

    function nextImage() {
        currentIndex = (currentIndex + 1) % images.length;
        showImage(currentIndex);
    }

    function prevImage() {
        currentIndex = (currentIndex - 1 + images.length) % images.length;
        showImage(currentIndex);
    }

    nextButton.addEventListener('click', nextImage);
    prevButton.addEventListener('click', prevImage);

    // Optional: Auto-play slideshow
    setInterval(nextImage, 4000); 
</script>

<script>
  
  let slideIndex = 0;
  const slides = document.querySelectorAll(".slides img");

  function showSlides() {
    for (let i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }

    slideIndex++;
    if (slideIndex > slides.length) {slideIndex = 1}

    slides[slideIndex-1].style.display = "block";
    setTimeout(showSlides, 3000); 
  }

  showSlides();
</script>
