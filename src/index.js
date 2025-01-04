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

window.addEventListener('scroll', function() {
    const menuBar = document.querySelector('.menu-bar');
    if (window.scrollY > 200) {
        menuBar.classList.add('scrolled');
    } else {
        menuBar.classList.remove('scrolled');
    }
});

function scrollToAboutMe() {
    window.scrollTo({
        top: 890,
    })
}

function scrollToExperience() {
    window.scrollTo({
        top: 1500,
    })
}

function scrollToProjects() {
    window.scrollTo({
        top: 890,
    })
}

function scrollToContactMe() {
    window.scrollTo({
        top: 890,
    })
}