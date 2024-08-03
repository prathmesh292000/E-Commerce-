document.addEventListener('DOMContentLoaded', function () {
    const navbarToggle = document.querySelector('.navbar img');
    const navbarMenu = document.querySelector('.navbar nav');

    navbarToggle.addEventListener('click', function () {
        navbarMenu.classList.toggle('active');
    });
});


// JavaScript to set the background image
document.addEventListener('DOMContentLoaded', function() {
    const container = document.getElementById('background-container');
    container.style.backgroundImage = 'url("https://images.pexels.com/photos/2830828/pexels-photo-2830828.jpeg?auto=compress&cs=tinysrgb&w=600")';
    container.style.backgroundSize = 'cover';
    container.style.backgroundPosition = 'center';
    container.style.backgroundRepeat = 'no-repeat';
    container.style.backgroundAttachment = this.scripts;
});



// JavaScript for additional interactivity
document.addEventListener('DOMContentLoaded', function() {
    const viewButtons = document.querySelectorAll('.btn1');

    viewButtons.forEach(button => {
        button.addEventListener('click', function(event) {
            event.preventDefault();
            console.log('View button clicked');
            
        });
    });
});

// 

document.addEventListener('DOMContentLoaded', function() {
    const buyNowButton = document.querySelector('.offer .col-2 a button');
    const description = document.querySelector('.offer .col-2 small');

    buyNowButton.addEventListener('click', function(event) {
        event.preventDefault();
        description.classList.toggle('show');
    });
});


// Brands

    let currentIndex = 0;
    const row = document.querySelector('.row4');
    const col5 = document.querySelectorAll('.col-55');
    const totalSlides = col5.length;

    function updateSlidePosition() {
        const slideWidth = col5[0].clientWidth + 20; // +20 for padding
        row.style.transform = `translateX(${-currentIndex * slideWidth}px)`;
    }

    function nextSlide() {
        currentIndex = (currentIndex + 1) % totalSlides;
        updateSlidePosition();
    }

    function prevSlide() {
        currentIndex = (currentIndex - 1 + totalSlides) % totalSlides;
        updateSlidePosition();
    }

    // Event listeners for navigation buttons
    document.querySelector('.next-btn').addEventListener('click', nextSlide);
    document.querySelector('.prev-btn').addEventListener('click', prevSlide);

    // Adjust slide position on window resize
    window.addEventListener('resize', updateSlidePosition);


    // Nav Bar

    const menuToggle = document.getElementById('menuToggle');
const navMenu = document.getElementById('navMenu');

menuToggle.addEventListener('click', () => {
    navMenu.classList.toggle('active');
});


// FASHION

document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('.col-3 img');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const close = document.getElementsByClassName('close')[0];

    images.forEach(img => {
        img.addEventListener('click', function() {
            lightbox.style.display = 'block';
            lightboxImg.src = this.src;
        });
    });

    close.addEventListener('click', function() {
        lightbox.style.display = 'none';
    });

    lightbox.addEventListener('click', function(event) {
        if (event.target === lightbox) {
            lightbox.style.display = 'none';
        }
    });
});

// Offer

document.getElementById('buy-now-btn').addEventListener('click', function(event) {
    event.preventDefault();
    alert(' Coming Soon!');
});



// Trending

document.querySelectorAll('.btn2').forEach(button => {
    button.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        window.scrollTo({
            top: targetElement.offsetTop,
            behavior: 'smooth'
        });
    });
});



    


    





