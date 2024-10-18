document.addEventListener('DOMContentLoaded', () => {
    const tabs = document.querySelectorAll('nav ul li a');
    const sections = document.querySelectorAll('main section');

    tabs.forEach(tab => {
        tab.addEventListener('click', (e) => {
            e.preventDefault();
            const target = e.target.getAttribute('href').substring(1);

            tabs.forEach(t => t.classList.remove('active'));
            e.target.classList.add('active');

            sections.forEach(section => {
                section.classList.remove('active');
                if (section.id === target) {
                    section.classList.add('active');
                    animateSection(section);
                }
            });
        });
    });

    function animateSection(section) {
        const elements = section.querySelectorAll('*');
        anime({
            targets: elements,
            translateY: [20, 0],
            opacity: [0, 1],
            easing: 'easeOutExpo',
            duration: 800,
            delay: anime.stagger(100)
        });
    }

    // Animate background gradient
    const gradients = [
        'linear-gradient(45deg, #ff9a9e, #fad0c4, #ffecd2)',
        'linear-gradient(45deg, #a18cd1, #fbc2eb, #ffecd2)',
        'linear-gradient(45deg, #84fab0, #8fd3f4, #ffecd2)'
    ];

    let currentGradient = 0;

    function animateGradient() {
        currentGradient = (currentGradient + 1) % gradients.length;
        document.body.style.backgroundImage = gradients[currentGradient];
    }

    setInterval(animateGradient, 10000); // Change gradient every 10 seconds

    // Initial animation for the home section
    animateSection(document.querySelector('#home'));

    document.addEventListener('DOMContentLoaded', () => {
        const sections = document.querySelectorAll('main section');
        const navLinks = document.querySelectorAll('nav ul li a');
    
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                
                sections.forEach(section => {
                    section.classList.remove('active');
                });
                
                document.getElementById(targetId).classList.add('active');
                
                navLinks.forEach(navLink => {
                    navLink.classList.remove('active');
                });
                
                link.classList.add('active');
    
                // Add animation to iframe when Emu section becomes active
                if (targetId === 'emu') {
                    const iframeContainer = document.querySelector('.iframe-container');
                    iframeContainer.style.animation = 'none';
                    iframeContainer.offsetHeight; // Trigger reflow
                    iframeContainer.style.animation = null;
                }
            });
        });
    });    
});
