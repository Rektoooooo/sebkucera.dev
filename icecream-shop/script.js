// Sabatovo Zmrzlinářství JavaScript

document.addEventListener('DOMContentLoaded', function() {
    console.log('Sabatovo Zmrzlinářství website loaded!');

    // ===== NAVIGATION FUNCTIONALITY =====

    // Get elements
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    const navbar = document.getElementById('navbar');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle mobile menu
    hamburger.addEventListener('click', function() {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking on nav links + set active state
    navLinks.forEach(link => {
        link.addEventListener('click', function() {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');

            // Update active state
            navLinks.forEach(l => l.classList.remove('active'));
            this.classList.add('active');
        });
    });

    // Add scroll effect to navbar
    window.addEventListener('scroll', function() {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Highlight active section on scroll
    window.addEventListener('scroll', function() {
        let current = '';
        const sections = document.querySelectorAll('section[id]');

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            if (window.pageYOffset >= sectionTop - 100) {
                current = section.getAttribute('id');
            }
        });

        navLinks.forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('href') === `#${current}`) {
                link.classList.add('active');
            }
        });
    });

    // Close mobile menu when clicking outside
    document.addEventListener('click', function(event) {
        const isClickInsideNav = navbar.contains(event.target);
        const isMenuOpen = navMenu.classList.contains('active');

        if (!isClickInsideNav && isMenuOpen) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });

    // ===== HERO SECTION FUNCTIONALITY =====

    // Smooth scroll for scroll indicator
    const scrollIndicator = document.querySelector('.scroll-indicator');
    if (scrollIndicator) {
        scrollIndicator.addEventListener('click', function() {
            const aboutSection = document.querySelector('#about');
            if (aboutSection) {
                aboutSection.scrollIntoView({ behavior: 'smooth' });
            } else {
                // If about section doesn't exist yet, scroll down one viewport
                window.scrollBy({ top: window.innerHeight, behavior: 'smooth' });
            }
        });
    }

    // Parallax effect for hero image
    window.addEventListener('scroll', function() {
        const heroImage = document.querySelector('.hero-image');
        if (heroImage) {
            const scrolled = window.pageYOffset;
            const parallax = scrolled * 0.5;
            heroImage.style.transform = `translateY(${parallax}px)`;
        }
    });

    // Add entrance animations on page load
    window.addEventListener('load', function() {
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.opacity = '1';
        }
    });

    // ===== SCROLL ANIMATIONS =====

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('animate-in');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    // Observe elements for animations
    const animateElements = document.querySelectorAll('.about-image-wrapper, .about-story, .feature-item, .flavor-card, .location-card');
    animateElements.forEach(el => {
        observer.observe(el);
    });

    // ===== FLAVORS FILTER FUNCTIONALITY =====

    const filterBtns = document.querySelectorAll('.filter-btn');
    const flavorCards = document.querySelectorAll('.flavor-card');

    filterBtns.forEach(btn => {
        btn.addEventListener('click', function() {
            const filter = this.getAttribute('data-filter');

            // Update active button
            filterBtns.forEach(b => b.classList.remove('active'));
            this.classList.add('active');

            // Filter cards
            flavorCards.forEach(card => {
                const categories = card.getAttribute('data-category').split(' ');

                if (filter === 'all' || categories.includes(filter)) {
                    card.style.display = 'block';
                    // Re-trigger animation
                    setTimeout(() => {
                        card.classList.add('animate-in');
                    }, 10);
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-in');
                }
            });
        });
    });

    // ===== REVIEWS CAROUSEL FUNCTIONALITY =====

    const reviewsWrapper = document.getElementById('reviewsWrapper');
    const reviewsPrev = document.getElementById('reviewsPrev');
    const reviewsNext = document.getElementById('reviewsNext');
    const carouselDots = document.getElementById('carouselDots');
    const reviewCards = document.querySelectorAll('.review-card');

    if (reviewsWrapper && reviewCards.length > 0) {
        let currentIndex = 0;
        const cardWidth = 350 + 32; // card width + gap
        const totalCards = reviewCards.length;

        // Create dots
        for (let i = 0; i < totalCards; i++) {
            const dot = document.createElement('div');
            dot.classList.add('dot');
            if (i === 0) dot.classList.add('active');
            dot.addEventListener('click', () => scrollToCard(i));
            carouselDots.appendChild(dot);
        }

        const dots = carouselDots.querySelectorAll('.dot');

        function updateDots() {
            dots.forEach((dot, index) => {
                dot.classList.toggle('active', index === currentIndex);
            });
        }

        function scrollToCard(index) {
            currentIndex = Math.max(0, Math.min(index, totalCards - 1));
            reviewsWrapper.scrollTo({
                left: currentIndex * cardWidth,
                behavior: 'smooth'
            });
            updateDots();
        }

        // Previous button
        reviewsPrev.addEventListener('click', () => {
            if (currentIndex > 0) {
                scrollToCard(currentIndex - 1);
            }
        });

        // Next button
        reviewsNext.addEventListener('click', () => {
            if (currentIndex < totalCards - 1) {
                scrollToCard(currentIndex + 1);
            }
        });

        // Update on scroll
        reviewsWrapper.addEventListener('scroll', () => {
            const scrollLeft = reviewsWrapper.scrollLeft;
            const newIndex = Math.round(scrollLeft / cardWidth);
            if (newIndex !== currentIndex) {
                currentIndex = newIndex;
                updateDots();
            }
        });

        // Touch swipe support
        let touchStartX = 0;
        let touchEndX = 0;

        reviewsWrapper.addEventListener('touchstart', (e) => {
            touchStartX = e.changedTouches[0].screenX;
        });

        reviewsWrapper.addEventListener('touchend', (e) => {
            touchEndX = e.changedTouches[0].screenX;
            handleSwipe();
        });

        function handleSwipe() {
            if (touchStartX - touchEndX > 50) {
                // Swipe left
                if (currentIndex < totalCards - 1) {
                    scrollToCard(currentIndex + 1);
                }
            } else if (touchEndX - touchStartX > 50) {
                // Swipe right
                if (currentIndex > 0) {
                    scrollToCard(currentIndex - 1);
                }
            }
        }
    }
});
