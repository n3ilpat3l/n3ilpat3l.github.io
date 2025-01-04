function githubRoute() {
    const githubUrl = "https://github.com/n3ilpat3l";
    window.open(githubUrl, '_blank');
}

function emailRoute() {
    const emailUrl = "mailto:n3il.pat3l.03@gmail.com";
    window.location.href = emailUrl;
}

function linkedinRoute() {
    const linkedinUrl = "https://www.linkedin.com/in/neil-patel2003"
    window.open(linkedinUrl, '_blank');
}

function scrollToAboutMe() {
    const aboutMeSection = document.getElementById('about-me-section');
    if (aboutMeSection) {
        const elementPosition = aboutMeSection.offsetTop;

        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    } else {
        console.error('Element not found');
    }
}

function scrollToExperience() {
    const experienceSection = document.getElementById('experience-section');
    if (experienceSection) {
        const elementPosition = experienceSection.offsetTop;

        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    } else {
        console.error('Element not found');
    }
}

function scrollToProjects() {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
        const elementPosition = projectsSection.offsetTop;

        window.scrollTo({
            top: elementPosition,
            behavior: "smooth",
        });
    } else {
        console.error('Element not found');
    }
}

document.addEventListener("DOMContentLoaded", () => {
    const fadeElements = document.querySelectorAll('.fade-in-on-scroll');

    const handleScroll = () => {
        fadeElements.forEach(element => {
            const rect = element.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            // Check if the element is visible in the viewport
            if (rect.top < windowHeight && rect.bottom > 50) {
                element.classList.add('visible');
            } else {
                element.classList.remove('visible'); // Fade out if not in view
            }
        });
    };

    // Run on scroll
    window.addEventListener('scroll', handleScroll);

    // Run on load (in case some elements are already in view)
    handleScroll();
});
