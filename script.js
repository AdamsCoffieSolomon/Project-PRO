 // JavaScript code to create the slideshow effect
 let slidesContainer = document.querySelector('.slideshow-container');
 let slidesWrapper = document.querySelector('.slides');
 let slides = Array.from(document.querySelectorAll('.slide'));
 let currentIndex = 0;
 let slideWidth = slides[0].offsetWidth;
 let displayCount = 3;

 function scrollSlides() {
     currentIndex++;

     slidesWrapper.style.transform = `translateX(-${currentIndex * slideWidth}px)`;

     if (currentIndex >= slides.length - displayCount) {
         currentIndex = 0;
         setTimeout(() => {
             slidesWrapper.style.transition = 'none';
             slidesWrapper.style.transform = 'translateX(0)';
             setTimeout(() => {
                 slidesWrapper.style.transition = 'transform 0.5s';
                 currentIndex = 1;
             }, 50);
         }, 500);
     }

     setTimeout(scrollSlides, 4000); // Scroll slides every 4 seconds
 }

 // Initialize the slideshow
 scrollSlides();