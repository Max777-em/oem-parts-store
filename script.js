// =======================================
// OEM PARTS STORE - JavaScript
// =======================================

// Mobile Navigation Toggle
const mobileToggle = document.getElementById('mobile-toggle');
const nav = document.getElementById('nav');

if (mobileToggle && nav) {
    mobileToggle.addEventListener('click', () => {
        nav.classList.toggle('active');
        mobileToggle.classList.toggle('active');

        // Animate hamburger to X
        const spans = mobileToggle.querySelectorAll('span');
        if (nav.classList.contains('active')) {
            spans[0].style.transform = 'rotate(45deg) translateY(10px)';
            spans[1].style.opacity = '0';
            spans[2].style.transform = 'rotate(-45deg) translateY(-10px)';
        } else {
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        }
    });

    // Close mobile nav when clicking on a link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', () => {
            nav.classList.remove('active');
            const spans = mobileToggle.querySelectorAll('span');
            spans.forEach(span => {
                span.style.transform = '';
                span.style.opacity = '1';
            });
        });
    });
}

// Smooth Scroll for Anchor Links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        if (href !== '#' && href.length > 1) {
            e.preventDefault();
            const target = document.querySelector(href);
            if (target) {
                const headerOffset = 100;
                const elementPosition = target.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        }
    });
});

// Header Scroll Effect
const header = document.getElementById('header');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 50) {
        header.style.boxShadow = '0 4px 12px rgba(0, 0, 0, 0.15)';
    } else {
        header.style.boxShadow = '0 2px 4px rgba(0, 0, 0, 0.1)';
    }
});

// Search Functionality
const searchBtn = document.querySelector('.search-btn');
const brandSelect = document.getElementById('brand-select');
const searchInput = document.getElementById('search-input');

if (searchBtn) {
    searchBtn.addEventListener('click', () => {
        const brand = brandSelect.value;
        const query = searchInput.value.trim();

        if (!brand) {
            alert('Please select a vehicle brand');
            return;
        }

        alert(`Searching for "${query || 'all parts'}" for ${brand.charAt(0).toUpperCase() + brand.slice(1)}...\n\nThis feature will be connected to your parts database.`);
    });
}

// Brand Cards Click Handler
document.querySelectorAll('.brand-card').forEach(card => {
    card.addEventListener('click', (e) => {
        e.preventDefault();
        const brand = card.dataset.brand;
        alert(`Browsing ${brand.charAt(0).toUpperCase() + brand.slice(1)} parts catalog...\n\nThis will be connected to your parts database.`);
    });
});

// Part Cards Click Handler
document.querySelectorAll('.part-btn').forEach(btn => {
    btn.addEventListener('click', () => {
        const partName = btn.closest('.part-card').querySelector('h3').textContent;
        alert(`Viewing options for ${partName}...\n\nThis will show part variations and pricing.`);
    });
});

// Contact Form Handling
const contactForm = document.getElementById('contact-form');

if (contactForm) {
    contactForm.addEventListener('submit', async function(e) {
        e.preventDefault();

        const submitBtn = contactForm.querySelector('button[type="submit"]');
        const originalText = submitBtn.textContent;

        // Get form data
        const formData = new FormData(contactForm);
        const data = {
            name: formData.get('name'),
            phone: formData.get('phone'),
            email: formData.get('email'),
            vehicle_brand: formData.get('vehicle_brand'),
            vehicle_year: formData.get('vehicle_year'),
            message: formData.get('message')
        };

        // Show loading state
        submitBtn.textContent = 'Sending...';
        submitBtn.disabled = true;

        try {
            // Send to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: 'abeb3949-1aa7-4ae5-8a35-848400d9697f',
                    subject: 'Parts Inquiry - OEM Parts Store',
                    from_name: 'OEM Parts Store Website',
                    ...data
                })
            });

            const result = await response.json();

            if (result.success) {
                // Create WhatsApp message
                const whatsappMessage = `🚗 *New Parts Inquiry*%0A%0A` +
                    `*Name:* ${data.name}%0A` +
                    `*Phone:* ${data.phone}%0A` +
                    `*Email:* ${data.email}%0A` +
                    `*Vehicle:* ${data.vehicle_brand || 'Not specified'} ${data.vehicle_year || ''}%0A` +
                    `*Message:* ${data.message || 'No message'}`;

                const whatsappNumber = '16467509028';
                window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

                alert('Thank you for your inquiry! We will contact you shortly with part availability and pricing.');
                contactForm.reset();
            } else {
                throw new Error('Form submission failed');
            }
        } catch (error) {
            console.error('Error:', error);

            // Fallback to WhatsApp
            const whatsappMessage = `🚗 *New Parts Inquiry*%0A%0A` +
                `*Name:* ${data.name}%0A` +
                `*Phone:* ${data.phone}%0A` +
                `*Email:* ${data.email}%0A` +
                `*Vehicle:* ${data.vehicle_brand || 'Not specified'} ${data.vehicle_year || ''}%0A` +
                `*Message:* ${data.message || 'No message'}`;

            const whatsappNumber = '16467509028';
            window.open(`https://wa.me/${whatsappNumber}?text=${whatsappMessage}`, '_blank');

            alert('Please complete your inquiry via WhatsApp.');
        }

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
    });
}

// Newsletter Form
const newsletterForm = document.getElementById('newsletter-form');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const email = newsletterForm.querySelector('input').value;
        alert(`Thank you for subscribing with ${email}!\n\nYou'll receive exclusive deals and promotions.`);
        newsletterForm.reset();
    });
}

// Phone Number Formatting
const phoneInput = document.getElementById('phone');

if (phoneInput) {
    phoneInput.addEventListener('input', function(e) {
        let value = e.target.value.replace(/\D/g, '');

        if (value.length > 0) {
            if (value.length <= 3) {
                value = `(${value}`;
            } else if (value.length <= 6) {
                value = `(${value.slice(0, 3)}) ${value.slice(3)}`;
            } else {
                value = `(${value.slice(0, 3)}) ${value.slice(3, 6)}-${value.slice(6, 10)}`;
            }
        }

        e.target.value = value;
    });
}

// Scroll Animation Observer
const observerOptions = {
    threshold: 0.1,
    rootMargin: '0px 0px -50px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.transform = 'translateY(0)';
        }
    });
}, observerOptions);

// Add animations on load
document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll(
        '.brand-card, .feature-card, .part-card, .about-stat'
    );

    animatedElements.forEach((el, index) => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = `opacity 0.6s ease ${index * 0.05}s, transform 0.6s ease ${index * 0.05}s`;
        observer.observe(el);
    });
});

// Cart functionality (placeholder)
let cartCount = 0;
const cartCountEl = document.querySelector('.cart-count');

function updateCart(count) {
    cartCount = count;
    if (cartCountEl) {
        cartCountEl.textContent = cartCount;
    }
}

// Initialize
updateCart(0);
