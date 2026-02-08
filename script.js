// Toggle dropdown menu
const menuToggle = document.getElementById("menuToggle");
const menuDropdown = document.getElementById("menuDropdown");

menuToggle.addEventListener("click", () => {
  const isOpen = menuDropdown.classList.contains("show");
  menuDropdown.classList.toggle("show");
  menuToggle.textContent = isOpen ? "Menu +" : "Menu –";
});

// Morphing Text Animation
const phrases = [
  "Clearer content.",
  " Better decisions.",
  "Precise Execution."
];

let currentPhraseIndex = 0;
const morphText = document.getElementById("morph-text");

function morphToNextPhrase() {
  const currentPhrase = phrases[currentPhraseIndex];
  currentPhraseIndex = (currentPhraseIndex + 1) % phrases.length;
  const nextPhrase = phrases[currentPhraseIndex];

  morphText.innerHTML = "";
  const maxLength = Math.max(currentPhrase.length, nextPhrase.length);

  for (let i = 0; i < maxLength; i++) {
    const fromChar = currentPhrase[i] || "\u00A0";
    const toChar = nextPhrase[i] || "\u00A0";

    const letterWrapper = document.createElement("span");
    letterWrapper.className = "letter";

    const flipInner = document.createElement("span");
    flipInner.className = "flip-inner";

    const front = document.createElement("span");
    front.className = "front";
    front.textContent = fromChar;

    const back = document.createElement("span");
    back.className = "back";
    back.textContent = toChar;

    flipInner.appendChild(front);
    flipInner.appendChild(back);
    letterWrapper.appendChild(flipInner);
    morphText.appendChild(letterWrapper);

    setTimeout(() => {
      letterWrapper.classList.add("flipping");
    }, i * 100);
  }
}


//fetch('https://mail-backend-e7g1.onrender.com/api/contact', { ... })
// Removed or comment out the incomplete fetch statement to prevent syntax errors.

morphToNextPhrase();
setInterval(morphToNextPhrase, 4000);

// Custom Cursor Animation
const cursor = document.getElementById('cursor');
let mouseX = 0, mouseY = 0;
let posX = 0, posY = 0;

window.addEventListener('mousemove', e => {
  mouseX = e.clientX;
  mouseY = e.clientY;
});

function animateCursor() {
  posX += (mouseX - posX) * 0.15;
  posY += (mouseY - posY) * 0.15;
  cursor.style.left = posX + 'px';
  cursor.style.top = posY + 'px';
  requestAnimationFrame(animateCursor);
}
animateCursor();

document.querySelectorAll('a, button').forEach(el => {
  el.addEventListener('mouseenter', () => cursor.classList.add('active'));
  el.addEventListener('mouseleave', () => cursor.classList.remove('active'));
});

let lastScrollY = window.scrollY;
const navbar = document.querySelector('.navbar');

// Navbar hide/show on scroll direction
window.addEventListener('scroll', () => {
  if (window.scrollY > lastScrollY) {
    // Scrolling down
    navbar.classList.add('hide');
  } else {
    // Scrolling up
    navbar.classList.remove('hide');
  }
  lastScrollY = window.scrollY;

  // Navbar background only when scrolled
  if (window.scrollY > 0) {
    navbar.classList.add('scrolled');
  } else {
    navbar.classList.remove('scrolled');
  }
});

// Register the ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

// Create a scroll-triggered animation
gsap.from(".showcase-text", {
  scrollTrigger: {
    trigger: ".showcase-text",
    x:10, // Start from the left
    start: "top 100%", // When the top of .showcase-text hits 80% of the viewport height
    end: "bottom 20%", // When the bottom of .showcase-text hits 20% of the viewport height
    scrub: true, // Smooth scrubbing, takes 1 second to "catch up" to the scrollbar
  },

  opacity: 0, // Start from transparent
  duration: 1, // Animation duration
  ease: "power2.out", // Easing function
});
gsap.from(".review-right", {
  scrollTrigger: {
    trigger: ".review-right",
    start: "top 95%",
    toggleActions: "play none none reverse",
  },

  y: 10,
  opacity: 0,
  duration: 1.2,
  ease: "power3.out",
});

function scrollToSection() {
  const nextSection = document.getElementById('showcase');
  if (nextSection) {
    nextSection.scrollIntoView({ behavior: 'smooth' });
  }
}

  // Only run animation if not on mobile
  if (window.innerWidth > 600) {
    gsap.utils.toArray(".showcase-text p").forEach((para, i) => {
      gsap.from(para, {
        scrollTrigger: {
          trigger: para,
          start: "top 90%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 50,

        duration: 1,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  }

    // Only run animation if not on mobile
  if (window.innerWidth > 600) {
    gsap.utils.toArray(".review-right p").forEach((para, i) => {
      gsap.from(para, {
        scrollTrigger: {
          trigger: para,
          start: "top 100%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 10,

        duration: 0.8,
        ease: "power3.out",
        delay: i * 0.1
      });
    });
  }


document.addEventListener("DOMContentLoaded", function () {
  const cookieBanner = document.getElementById('cookie-banner');
  const acceptCookies = document.getElementById('accept-cookies');
  const declineCookies = document.getElementById('decline-cookies');

  if (!cookieBanner || !acceptCookies || !declineCookies) return;

  // Show banner only if cookie not set
  if (!localStorage.getItem('cookieConsent')) {
    cookieBanner.classList.remove('hidden');
  } else {
    cookieBanner.classList.add('hidden');
  }

  acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'accepted');
    cookieBanner.classList.add('hidden');
  });

  declineCookies.addEventListener('click', () => {
    localStorage.setItem('cookieConsent', 'declined');
    cookieBanner.classList.add('hidden');
  });
});


  window.addEventListener('load', () => {
    setTimeout(() => {
      const splash = document.getElementById('splash-screen');
      splash.classList.add('fade-out');

      setTimeout(() => {
        splash.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
      }, 1000); // time to fully fade out
    }, 2000); // splash duration
  });

window.addEventListener('load', () => {
  setTimeout(() => {
    const splash = document.getElementById('splash-screen');
    // Animate logo and text out
    gsap.to('.splash-logo', { y: -80, opacity: 0, duration: 0.7, ease: "power2.in" });
    gsap.to('.splash-title', { y: 60, opacity: 0, duration: 0.7, delay: 0.1, ease: "power2.in" });
    gsap.to('.splash-desc', { y: 60, opacity: 0, duration: 0.7, delay: 0.2, ease: "power2.in" });
    // Animate splash background out
    gsap.to('#splash-screen', {
      scaleY: 0.8,
      scaleX: 1.2,
      opacity: 0,
      duration: 1,
      delay: 0.5,
      ease: "expo.inOut",
      onComplete: () => {
        splash.style.display = 'none';
        document.getElementById('main-content').style.display = 'block';
        // Optionally animate main content in
        gsap.from('#main-content', { opacity: 0, y: 60, duration: 1, ease: "power2.out" });
      }
    });
  }, 2000); // splash duration
});


document.getElementById('contact-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        firstName: document.getElementById('firstName').value,
        lastName: document.getElementById('lastName').value,
        email: document.getElementById('email').value,
        message: document.getElementById('message').value
    };

    // Create WhatsApp message
    const whatsappMessage = `*New Contact Request from ShavanxCoder Portfolio*

*Sender Details:*
Name: ${formData.firstName} ${formData.lastName}
Email: ${formData.email}

*Message:*
${formData.message}

---
Thanks for reaching out! I'll review your message and get back to you soon.`;

    // WhatsApp number (your number)
    const whatsappNumber = '916381568894'; // Format: country code + number (no spaces)
    
    // Encode message for URL
    const encodedMessage = encodeURIComponent(whatsappMessage);
    
    // Create WhatsApp URL
    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodedMessage}`;

    // Show success message
    alert('Thank you for getting in touch! Opening WhatsApp to send your message.');
    
    // Open WhatsApp in new tab
    window.open(whatsappURL, '_blank');
    
    // Reset form
    this.reset();
    
    console.log('Form submitted:', formData);
});
