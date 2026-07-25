// ============================================
// SCROLL REVEAL ANIMATION
// ============================================
const revealElements = document.querySelectorAll('.reveal');
const revealOnScroll = () => {
    const windowHeight = window.innerHeight;
    revealElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;
        const revealPoint = 120;
        if (elementTop < windowHeight - revealPoint) {
            el.classList.add('visible');
        } else {
            el.classList.remove('visible');
        }
    });
};
window.addEventListener('scroll', revealOnScroll);
window.addEventListener('load', revealOnScroll);

// ============================================
// BACK TO TOP BUTTON
// ============================================
const backToTopBtn = document.querySelector('.back-to-top');
window.addEventListener('scroll', () => {
    if (window.scrollY > 400) {
        backToTopBtn.classList.add('show');
    } else {
        backToTopBtn.classList.remove('show');
    }
});

// ============================================
// CONTACT FORM (DEMO)
// ============================================
const contactForm = document.getElementById('contactForm');
const formFeedback = document.getElementById('formFeedback');
contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();
    const message = document.getElementById('message').value.trim();
    if (!name || !email || !message) {
        formFeedback.textContent = '❌ Please fill all required fields.';
        formFeedback.className = 'form-feedback error';
        return;
    }
    formFeedback.textContent = '✅ Message sent successfully! (demo)';
    formFeedback.className = 'form-feedback success';
    contactForm.reset();
});