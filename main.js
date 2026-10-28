jQuery(document).ready(function(){
    
    "use strict"
    $('.slider').ripples({
        dropRadius: 12,
        pertubance: 0.01,
    });
});



/* -----------------------------------------------------------------
   Sticky Navigation Bar
----------------------------------------------------------------- */
$(window).scroll(function() {
    var top = $(window).scrollTop();
    if (top >= 60) {
        $("nav").addClass("secondary");
    } else {
        if ($("nav").hasClass("secondary")) {
            $("nav").removeClass("secondary");
        }
    }
});

/* -----------------------------------------------------------------
   Typing Effect
----------------------------------------------------------------- */
const words = ["I LIKE TO LEARN!!!", " AND TO SHARE!!!"];
let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const typingWord = document.getElementById("typing-word");
    if (!typingWord) return;

    const currentWord = words[wordIndex];

    if (!deleting) {
        typingWord.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex === currentWord.length) {
            deleting = true;
            setTimeout(typeEffect, 1500);
            return;
        }
        setTimeout(typeEffect, 120);
    } else {
        typingWord.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
        setTimeout(typeEffect, 70);
    }
}

document.addEventListener("DOMContentLoaded", typeEffect);

/* -----------------------------------------------------------------
   Smooth Scroll Navigation Links
----------------------------------------------------------------- */
$(document).ready(function() {
    $('a[href^="#"]').on('click', function(e) {
        var target = $(this.getAttribute('href'));
        if (target.length) {
            e.preventDefault();
            $('html, body').stop().animate({
                scrollTop: target.offset().top - 70
            }, 800);
        }
    });

    /* Owl Carousel Initialization */
    $("#team-members").owlCarousel({
        items: 3,
        autoplay: true,
        smartSpeed: 700,
        loop: true,
        autoplayHoverPause: true,
        dots: true,
        nav: false,
        responsive: {
            0: {
                items: 1
            },
            480: {
                items: 2
            },
            768: {
                items: 3
            }
        }
    });
});