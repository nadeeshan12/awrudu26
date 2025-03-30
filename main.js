// Loader
window.addEventListener('load', () => {
    setTimeout(() => {
        document.querySelector('.loader').style.opacity = '0';
        setTimeout(() => {
            document.querySelector('.loader').style.display = 'none';
        }, 500);
    }, 2000);
});

// Off-canvas menu
const menuBtn = document.querySelector('.menu-btn');
const closeBtn = document.querySelector('.close-btn');
const offCanvas = document.querySelector('.off-canvas');

menuBtn.addEventListener('click', () => {
    offCanvas.classList.add('active');
});

closeBtn.addEventListener('click', () => {
    offCanvas.classList.remove('active');
});

// Share button
const shareBtn = document.querySelector('.share-btn');
const socialShare = document.querySelector('.social-share');

shareBtn.addEventListener('click', () => {
    socialShare.classList.toggle('active');
});

// Grid item animations
const imageBoxes = document.querySelectorAll('.image-box');

imageBoxes.forEach(box => {
    box.addEventListener('click', () => {
        box.style.animation = 'zoom 0.3s ease-out';
        setTimeout(() => {
            box.style.animation = '';
        }, 300);
    });
});

// Close menu when clicking outside
document.addEventListener('click', (e) => {
    if (!offCanvas.contains(e.target) && !menuBtn.contains(e.target)) {
        offCanvas.classList.remove('active');
    }
});

document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('.glow-button');
    
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Add ripple effect
            const ripple = document.createElement('span');
            ripple.classList.add('ripple');
            this.appendChild(ripple);
            
            // Remove ripple after animation
            setTimeout(() => {
                ripple.remove();
            }, 1000);
        });
    });
});