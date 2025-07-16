console.log("hello");

const navbar = document.getElementById("navbar");

window.addEventListener("scroll", () => {
    console.log("My possition Y is", window.scrollY);
    if (window.scrollY > 50) {
        navbar.classList.add("active");
    } else {
        navbar.classList.remove("active");
    }
});

//Burger meny
// Select DOM elements
const menuBar = document.querySelector(".menu-bar");

// Create burger menu button
const burgerMenu = document.createElement("div");
burgerMenu.className = "burger-menu";
burgerMenu.innerHTML = "<span></span><span></span><span></span>";
navbar.insertBefore(burgerMenu, menuBar);

// Add toggle functionality
burgerMenu.addEventListener("click", () => {
    menuBar.classList.toggle("active");
    burgerMenu.classList.toggle("active");
});

// Close menu when clicking a link
const navLinks = document.querySelectorAll(".menu-bar ul li a");
navLinks.forEach((link) => {
    link.addEventListener("click", () => {
        menuBar.classList.remove("active");
        burgerMenu.classList.remove("active");
    });
});

// Close menu when clicking outside
document.addEventListener("click", (e) => {
    if (!navbar.contains(e.target)) {
        menuBar.classList.remove("active");
        burgerMenu.classList.remove("active");
    }
});

// Resize handler - return to normal view on larger screens
window.addEventListener("resize", () => {
    if (window.innerWidth > 768) {
        menuBar.classList.remove("active");
        burgerMenu.classList.remove("active");
    }
});

//Send the email
 // Initialize EmailJS
  (function() {
    emailjs.init("3rkn-fnGdZzc_K1ug");
})();

document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault();

    // Show sending state
    const submitBtn = document.getElementById('submit-btn');
    const statusMessage = document.getElementById('status-message');
    submitBtn.disabled = true;
    submitBtn.textContent = 'SENDING...';

    // Get form data
    const templateParams = {
        name: document.getElementById('name').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        subject: document.getElementById('subject').value,
        message: document.getElementById('message').value,
        to_email: 'nicolaecaldarasan1983@gmail.com'
    };

    // Send email using EmailJS
    emailjs.send('service_mgqz7xk', 'template_a23a6m7', templateParams)
        .then(function(response) {
            console.log('SUCCESS!', response.status, response.text);
            submitBtn.textContent = 'SEND MESSAGE';
            submitBtn.disabled = false;

            // Show success message
            statusMessage.className = 'success';
            statusMessage.textContent = 'Your message has been sent successfully!';
            statusMessage.style.display = 'block';

            // Reset form
            document.getElementById('contactForm').reset();

            // Hide success message after 5 seconds
            setTimeout(function() {
                statusMessage.style.display = 'none';
            }, 5000);
        }, function(error) {
            console.log('FAILED...', error);
            submitBtn.textContent = 'SEND MESSAGE';
            submitBtn.disabled = false;

            // Show error message
            statusMessage.className = 'error';
            statusMessage.textContent = 'Failed to send message. Please try again later.';
            statusMessage.style.display = 'block';
        });
});

document.addEventListener('DOMContentLoaded', function() {
    // Get all model images
    const modelImages = document.querySelectorAll('.model-image');
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.close-btn');
    
    // Add click event to each image
    modelImages.forEach(image => {
        image.addEventListener('click', function() {
            // Set the src attribute of the lightbox image
            lightboxImg.src = this.src;
            
            // Get the figcaption text and set it as the lightbox caption
            const caption = this.closest('figure').querySelector('figcaption').textContent;
            lightboxCaption.textContent = caption;
            
            // Display the lightbox
            lightbox.style.display = 'flex';
            
            // Add active class after a small delay to trigger the transition
            setTimeout(() => {
                lightbox.classList.add('active');
            }, 10);
        });
    });
    
    // Close lightbox when clicking on the close button
    closeBtn.addEventListener('click', closeLightbox);
    
    // Close lightbox when clicking outside the image
    lightbox.addEventListener('click', function(e) {
        if (e.target === lightbox) {
            closeLightbox();
        }
    });
    
    // Close lightbox on ESC key press
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape') {
            closeLightbox();
        }
    });
    
    // Function to close the lightbox
    function closeLightbox() {
        lightbox.classList.remove('active');
        
        // Hide the lightbox after the transition completes
        setTimeout(() => {
            lightbox.style.display = 'none';
        }, 300);
    }
});




        // Language toggle functionality
        document.addEventListener('DOMContentLoaded', function() {
            const languageBtns = document.querySelectorAll('.language-btn');
            const enElements = document.querySelectorAll('.en');
            const esElements = document.querySelectorAll('.es');
            
            // Function to change language
            function changeLanguage(lang) {
                // Update buttons
                languageBtns.forEach(btn => {
                    if (btn.dataset.lang === lang) {
                        btn.classList.add('active');
                    } else {
                        btn.classList.remove('active');
                    }
                });
                
                // Show/hide language elements
                if (lang === 'en') {
                    enElements.forEach(el => el.style.display = '');
                    esElements.forEach(el => el.style.display = 'none');
                } else {
                    enElements.forEach(el => el.style.display = 'none');
                    esElements.forEach(el => el.style.display = '');
                }
                
                // Store preference
                localStorage.setItem('preferredLanguage', lang);
            }
            
            // Add click event to language buttons
            languageBtns.forEach(btn => {
                btn.addEventListener('click', function() {
                    changeLanguage(this.dataset.lang);
                });
            });
            
            // Check for stored language preference
            const storedLang = localStorage.getItem('preferredLanguage');
            if (storedLang) {
                changeLanguage(storedLang);
            }
        });

// Image Slider
let slideIndex = 0;
const slides = document.querySelectorAll('.slide');

function showSlides(n) {
    if (n >= slides.length) {slideIndex = 0}
    if (n < 0) {slideIndex = slides.length - 1}
    slides.forEach(slide => slide.classList.remove('active'));
    slides[slideIndex].classList.add('active');
}

function plusSlides(n) {
    showSlides(slideIndex += n);
}


// Navigation hide/show on scroll functionality
(function() {
    let lastScrollTop = 0;
    let scrollThreshold = 10; // Minimum scroll distance before triggering
    let navbar = document.getElementById('navbar');
    
    // Add CSS transitions for smooth animation
    navbar.style.transition = 'transform 0.3s ease-in-out';
    
    window.addEventListener('scroll', function() {
        let currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Prevent negative scrolling (bounce effect on mobile)
        if (currentScrollTop < 0) {
            return;
        }
        
        // Check if we've scrolled enough to trigger the effect
        if (Math.abs(lastScrollTop - currentScrollTop) <= scrollThreshold) {
            return;
        }
        
        // Hide navbar when scrolling down
        if (currentScrollTop > lastScrollTop && currentScrollTop > 100) {
            navbar.style.transform = 'translateY(-100%)';
        } 
        // Show navbar when scrolling up
        else if (currentScrollTop < lastScrollTop) {
            navbar.style.transform = 'translateY(0)';
        }
        
        lastScrollTop = currentScrollTop;
    });
    
    // Optional: Show navbar when hovering near the top of the page
    document.addEventListener('mousemove', function(e) {
        if (e.clientY <= 50) {
            navbar.style.transform = 'translateY(0)';
        }
    });
})();

// Alternative version with more customization options
class NavigationController {
    constructor(options = {}) {
        this.navbar = document.getElementById(options.navbarId || 'navbar');
        this.scrollThreshold = options.scrollThreshold || 10;
        this.hideOffset = options.hideOffset || 100;
        this.transitionDuration = options.transitionDuration || '0.3s';
        this.enableMouseReveal = options.enableMouseReveal !== false;
        this.mouseRevealZone = options.mouseRevealZone || 50;
        
        this.lastScrollTop = 0;
        this.isNavbarHidden = false;
        
        this.init();
    }
    
    init() {
        if (!this.navbar) {
            console.error('Navbar element not found');
            return;
        }
        
        // Add CSS transitions
        this.navbar.style.transition = `transform ${this.transitionDuration} ease-in-out`;
        
        // Bind scroll event
        window.addEventListener('scroll', this.handleScroll.bind(this));
        
        // Optional mouse reveal functionality
        if (this.enableMouseReveal) {
            document.addEventListener('mousemove', this.handleMouseMove.bind(this));
        }
    }
    
    handleScroll() {
        const currentScrollTop = window.pageYOffset || document.documentElement.scrollTop;
        
        // Prevent negative scrolling
        if (currentScrollTop < 0) return;
        
        // Check if we've scrolled enough to trigger
        if (Math.abs(this.lastScrollTop - currentScrollTop) <= this.scrollThreshold) {
            return;
        }
        
        // Hide navbar when scrolling down
        if (currentScrollTop > this.lastScrollTop && currentScrollTop > this.hideOffset) {
            this.hideNavbar();
        } 
        // Show navbar when scrolling up
        else if (currentScrollTop < this.lastScrollTop) {
            this.showNavbar();
        }
        
        this.lastScrollTop = currentScrollTop;
    }
    
    handleMouseMove(e) {
        if (e.clientY <= this.mouseRevealZone) {
            this.showNavbar();
        }
    }
    
    hideNavbar() {
        if (!this.isNavbarHidden) {
            this.navbar.style.transform = 'translateY(-100%)';
            this.isNavbarHidden = true;
        }
    }
    
    showNavbar() {
        if (this.isNavbarHidden) {
            this.navbar.style.transform = 'translateY(0)';
            this.isNavbarHidden = false;
        }
    }
    
    // Public methods for manual control
    show() {
        this.showNavbar();
    }
    
    hide() {
        this.hideNavbar();
    }
    
    toggle() {
        if (this.isNavbarHidden) {
            this.showNavbar();
        } else {
            this.hideNavbar();
        }
    }
}