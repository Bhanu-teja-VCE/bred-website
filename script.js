// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    });
});

// Navbar background on scroll
const navbar = document.querySelector('.navbar');
let lastScroll = 0;

window.addEventListener('scroll', () => {
    const currentScroll = window.pageYOffset;

    if (currentScroll > 100) {
        navbar.style.background = 'rgba(10, 10, 10, 0.95)';
        navbar.style.boxShadow = '0 10px 30px rgba(0, 0, 0, 0.5)';
    } else {
        navbar.style.background = 'rgba(10, 10, 10, 0.8)';
        navbar.style.boxShadow = 'none';
    }

    lastScroll = currentScroll;
});

// Parallax effect for hero section
const hero = document.querySelector('.hero');
const heroCard = document.querySelector('.hero-card');

window.addEventListener('scroll', () => {
    const scrolled = window.pageYOffset;
    if (hero && scrolled < window.innerHeight) {
        heroCard.style.transform = `translateY(${scrolled * 0.3}px)`;
    }
});

// Intersection Observer for benefit cards animation
const observerOptions = {
    threshold: 0.2,
    rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach((entry, index) => {
        if (entry.isIntersecting) {
            setTimeout(() => {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }, index * 100);
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

// Apply animation to benefit cards
document.querySelectorAll('.benefit-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(50px)';
    card.style.transition = 'all 0.6s cubic-bezier(0.175, 0.885, 0.32, 1.275)';
    observer.observe(card);
});

// Credit card 3D tilt effect
const creditCard = document.querySelector('.credit-card');

if (creditCard) {
    creditCard.addEventListener('mousemove', (e) => {
        const rect = creditCard.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const centerX = rect.width / 2;
        const centerY = rect.height / 2;

        const rotateX = (y - centerY) / 10;
        const rotateY = (centerX - x) / 10;

        creditCard.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) translateY(-20px)`;
    });

    creditCard.addEventListener('mouseleave', () => {
        creditCard.style.transform = '';
    });
}

// Pause marquee on hover
const marqueeContent = document.querySelector('.marquee-content');

if (marqueeContent) {
    marqueeContent.addEventListener('mouseenter', () => {
        marqueeContent.style.animationPlayState = 'paused';
    });

    marqueeContent.addEventListener('mouseleave', () => {
        marqueeContent.style.animationPlayState = 'running';
    });
}

// CTA button ripple effect enhancement
document.querySelectorAll('.cta-button').forEach(button => {
    button.addEventListener('click', function (e) {
        const rect = this.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;

        const ripple = document.createElement('span');
        ripple.style.position = 'absolute';
        ripple.style.left = x + 'px';
        ripple.style.top = y + 'px';
        ripple.style.width = '0';
        ripple.style.height = '0';
        ripple.style.borderRadius = '50%';
        ripple.style.background = 'rgba(255, 255, 255, 0.5)';
        ripple.style.transform = 'translate(-50%, -50%)';
        ripple.style.animation = 'ripple 0.6s ease-out';

        this.appendChild(ripple);

        setTimeout(() => {
            ripple.remove();
        }, 600);
    });
});

// Add ripple animation
const style = document.createElement('style');
style.textContent = `
    @keyframes ripple {
        to {
            width: 200px;
            height: 200px;
            opacity: 0;
        }
    }
`;
document.head.appendChild(style);

// Animated counter for stats (if you want to add stats section later)
function animateCounter(element, target, duration = 2000) {
    let start = 0;
    const increment = target / (duration / 16);

    const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
            element.textContent = target;
            clearInterval(timer);
        } else {
            element.textContent = Math.floor(start);
        }
    }, 16);
}

// Add sparkle effect to gold elements on hover
document.querySelectorAll('.benefit-icon, .author-avatar').forEach(element => {
    element.addEventListener('mouseenter', function () {
        createSparkle(this);
    });
});

function createSparkle(element) {
    const sparkle = document.createElement('div');
    sparkle.style.position = 'absolute';
    sparkle.style.width = '4px';
    sparkle.style.height = '4px';
    sparkle.style.background = '#F4E4B8';
    sparkle.style.borderRadius = '50%';
    sparkle.style.pointerEvents = 'none';
    sparkle.style.animation = 'sparkle 0.8s ease-out forwards';

    const rect = element.getBoundingClientRect();
    sparkle.style.left = (rect.left + Math.random() * rect.width) + 'px';
    sparkle.style.top = (rect.top + Math.random() * rect.height) + 'px';

    document.body.appendChild(sparkle);

    setTimeout(() => {
        sparkle.remove();
    }, 800);
}

// Add sparkle animation
const sparkleStyle = document.createElement('style');
sparkleStyle.textContent = `
    @keyframes sparkle {
        0% {
            opacity: 0;
            transform: scale(0) translateY(0);
        }
        50% {
            opacity: 1;
        }
        100% {
            opacity: 0;
            transform: scale(1) translateY(-30px);
        }
    }
`;
document.head.appendChild(sparkleStyle);

// Loading animation
window.addEventListener('load', () => {
    document.body.style.opacity = '0';
    setTimeout(() => {
        document.body.style.transition = 'opacity 0.5s ease';
        document.body.style.opacity = '1';
    }, 100);
});

console.log('🏆 Bred Premium - Not Everybody Gets It');
