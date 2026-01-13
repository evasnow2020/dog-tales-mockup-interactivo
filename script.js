// Form submission
document.querySelector('.contact-form').addEventListener('submit', (e) => {
    e.preventDefault();
    alert('Thank you for your message! ðŸ•');
    e.target.reset();
});

// Smooth image loading effect - simplified and more reliable
document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item img');
    
    images.forEach((img, index) => {
        // Set initial state
        img.style.opacity = '0';
        img.style.transform = 'scale(0.9)';
        img.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        
        // Animate after a delay
        setTimeout(() => {
            img.style.opacity = '1';
            img.style.transform = 'scale(1)';
        }, index * 100 + 100);
    });
});
