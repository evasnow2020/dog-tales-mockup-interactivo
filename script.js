// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! 🐕');
    e.target.reset();
});

// Smooth image loading effect
const images = document.querySelectorAll('.gallery-item img');
images.forEach((img, index) => {
    img.style.opacity = '0';
    img.style.transform = 'scale(0.9)';
    
    img.addEventListener('load', () => {
        setTimeout(() => {
            img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100);
    });
});