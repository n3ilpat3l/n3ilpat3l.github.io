document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a[href^="#"]');
    const nav = document.querySelector('.nav');
    const navHeight = nav ? nav.offsetHeight : 64;

    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            const targetSection = document.querySelector(targetId);

            if (targetSection) {
                const offsetTop = targetSection.offsetTop - navHeight - 8;
                window.scrollTo({
                    top: offsetTop,
                    behavior: 'smooth'
                });
            }
        });
    });

    const observerOptions = {
        threshold: 0.12,
        rootMargin: '0px 0px -40px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    const sections = document.querySelectorAll('section');
    sections.forEach(section => {
        section.style.opacity = '0';
        section.style.transform = 'translateY(20px)';
        section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(section);
    });

    const carousel = document.querySelector('.carousel');
    if (carousel) {
        const track = carousel.querySelector('.carousel-track');
        const cards = track ? track.querySelectorAll('.project-card') : [];

        if (track && cards.length) {
            const autoScrollSpeed = 0.7;
            let autoScrollFrame = null;
            let isAutoScrolling = false;
            let loopWidth = 0;

            const originals = Array.from(cards);
            originals.forEach(card => {
                track.appendChild(card.cloneNode(true));
            });

            const autoScroll = () => {
                if (!isAutoScrolling) {
                    return;
                }
                if (loopWidth > 0) {
                    track.scrollLeft += autoScrollSpeed;
                    if (track.scrollLeft >= loopWidth) {
                        track.scrollLeft = 0;
                    }
                }
                autoScrollFrame = window.requestAnimationFrame(autoScroll);
            };

            const updateLoopWidth = () => {
                if (!originals.length) {
                    loopWidth = 0;
                    return;
                }
                const card = originals[0];
                const trackStyles = window.getComputedStyle(track);
                const gap = parseFloat(trackStyles.columnGap) || 0;
                const itemWidth = card.getBoundingClientRect().width + gap;
                loopWidth = itemWidth * originals.length;
            };

            const startAutoScroll = () => {
                if (isAutoScrolling) {
                    return;
                }
                isAutoScrolling = true;
                autoScrollFrame = window.requestAnimationFrame(autoScroll);
            };

            const stopAutoScroll = () => {
                isAutoScrolling = false;
                if (autoScrollFrame) {
                    window.cancelAnimationFrame(autoScrollFrame);
                    autoScrollFrame = null;
                }
            };

            updateLoopWidth();
            window.addEventListener('resize', updateLoopWidth);
            startAutoScroll();
            track.addEventListener('mouseenter', stopAutoScroll);
            track.addEventListener('mouseleave', startAutoScroll);
            track.addEventListener('focusin', stopAutoScroll);
            track.addEventListener('focusout', startAutoScroll);
        }
    }
});

document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const activeElements = document.querySelectorAll('.active, .open');
        activeElements.forEach(element => {
            element.classList.remove('active', 'open');
        });
    }
});
