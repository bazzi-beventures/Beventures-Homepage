// GSAP and ScrollTrigger are loaded via CDN in index.html

gsap.registerPlugin(ScrollTrigger);

document.addEventListener("DOMContentLoaded", (event) => {
    // --- Burger Menu Toggle ---
    const burgerMenu = document.getElementById('burger-menu');
    const navOverlay = document.getElementById('nav-overlay');
    const overlayLinks = document.querySelectorAll('.overlay-link');

    if (burgerMenu && navOverlay) {
        const closeOverlayFn = () => {
            burgerMenu.classList.remove('active');
            navOverlay.classList.remove('active');
            document.body.style.overflow = '';
        };

        burgerMenu.addEventListener('click', () => {
            burgerMenu.classList.toggle('active');
            navOverlay.classList.toggle('active');
            document.body.style.overflow = navOverlay.classList.contains('active') ? 'hidden' : '';
        });

        // Close button (X)
        const closeBtn = document.getElementById('nav-overlay-close');
        if (closeBtn) closeBtn.addEventListener('click', closeOverlayFn);

        // Close menu when a link is clicked
        overlayLinks.forEach(link => {
            link.addEventListener('click', closeOverlayFn);
        });
    }

    // --- Hero Animation ---
    const heroTl = gsap.timeline({ defaults: { ease: "power3.out" } });

    // Abstract Gradient Fade In
    heroTl.to('.hero-gradient', {
        opacity: 0.8,
        duration: 2,
        ease: "power2.inOut"
    }, 0);

    // Staggered Text Reveal
    heroTl.to('.hero-title .word', {
        y: 0,
        opacity: 1,
        duration: 1.2,
        stagger: 0.2
    }, 0.5);

    // Subtitle fade up
    heroTl.to('.hero-subtitle', {
        y: 0,
        opacity: 1,
        duration: 1
    }, "-=0.6");

    // CTA fade up
    heroTl.to('.hero-cta', {
        y: 0,
        opacity: 1,
        duration: 1
    }, "-=0.8");

    // --- Vision Section Animation ---
    const visionTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.vision',
            start: "top 75%",
        }
    });

    visionTl.fromTo('.vision-content > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // --- Problems Section Animation ---
    const problemsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.problems',
            start: "top 75%",
        }
    });

    problemsTl.fromTo('.section-header.center > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    )
        .fromTo('.problem-card',
            { y: 40, opacity: 0 },
            { y: 0, opacity: 1, duration: 0.6, stagger: 0.15, ease: "power2.out" },
            "-=0.4"
        );

    // --- Solutions Section Animation ---
    const solutionsTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.solutions',
            start: "top 75%",
        }
    });

    solutionsTl.fromTo('.solution-header.center > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    const solutionRows = document.querySelectorAll('.solution-row');
    solutionRows.forEach((row, index) => {
        const content = row.querySelector('.solution-content');
        const image = row.querySelector('.solution-image');

        const rowTl = gsap.timeline({
            scrollTrigger: {
                trigger: row,
                start: "top 80%",
            }
        });

        // Alternate entry direction based on reverse class
        const xOffset = row.classList.contains('reverse') ? 50 : -50;

        rowTl.fromTo(content,
            { x: xOffset, opacity: 0 },
            { x: 0, opacity: 1, duration: 0.8, ease: "power2.out" }
        )
            .fromTo(image,
                { x: -xOffset, opacity: 0, scale: 0.95 },
                { x: 0, opacity: 1, scale: 1, duration: 0.8, ease: "power2.out" },
                "-=0.6"
            );
    });

    // --- Partnership Section Animation ---
    const partnershipTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.partnership',
            start: "top 75%",
        }
    });

    partnershipTl.fromTo('.partnership .section-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    )
        .fromTo('.partner-item',
            { y: 40, opacity: 0, scale: 0.95 },
            { y: 0, opacity: 1, scale: 1, duration: 0.6, stagger: 0.15, ease: "back.out(1.5)" },
            "-=0.4"
        );

    // --- Roadmap Section Animation ---
    const roadmapTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.roadmap',
            start: "top 75%",
        }
    });

    roadmapTl.fromTo('.roadmap .section-header > *',
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, ease: "power2.out" }
    );

    // Reveal timeline items sequentially
    const timelineItems = document.querySelectorAll('.timeline-item');
    timelineItems.forEach((item, index) => {
        gsap.fromTo(item,
            { y: 50, opacity: 0 },
            {
                y: 0,
                opacity: 1,
                duration: 0.6,
                ease: "power2.out",
                scrollTrigger: {
                    trigger: item,
                    start: "top 85%",
                }
            }
        );
    });

    // --- Contact Section Animation ---
    const contactTl = gsap.timeline({
        scrollTrigger: {
            trigger: '.contact',
            start: "top 75%",
        }
    });

    contactTl.fromTo('.contact-info > *',
        { x: -50, opacity: 0 },
        {
            x: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: "power2.out"
        }
    )
        .fromTo('.contact-form-container',
            { x: 50, opacity: 0 },
            {
                x: 0,
                opacity: 1,
                duration: 0.8,
                ease: "power2.out"
            }, "-=0.6"
        );

    // --- Navigation Scroll Effect ---
    const nav = document.querySelector('.nav');

    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // --- Smooth Scroll for Anchor Links ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Adjust offset if nav is fixed
                const navHeight = nav.offsetHeight;
                const targetPosition = targetElement.getBoundingClientRect().top + window.scrollY - navHeight;

                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Interactive Hover for Button ---
    const primaryBtn = document.querySelector('.hero-cta .btn-primary');
    if (primaryBtn) {
        primaryBtn.addEventListener('mouseenter', () => {
            gsap.to(primaryBtn, { scale: 1.05, duration: 0.3, ease: 'power2.out' });
        });
        primaryBtn.addEventListener('mouseleave', () => {
            gsap.to(primaryBtn, { scale: 1, duration: 0.3, ease: 'power2.out' });
        });
    }

    console.log("ECHTWERK initialized.");

    // --- Brush Drawing Animation ---
    gsap.registerPlugin(MotionPathPlugin);

    const brushDividers = document.querySelectorAll('.brush-divider');
    brushDividers.forEach((divider) => {
        const path = divider.querySelector('.brush-path');
        const tip = divider.querySelector('.brush-tip');

        if (!path || !tip) return;

        // Set initial state
        gsap.set(tip, { visibility: 'visible', opacity: 0 });

        const drawTl = gsap.timeline({
            scrollTrigger: {
                trigger: divider,
                start: "top 85%",
                toggleActions: "play none none reverse"
            }
        });

        // Calculate path length
        const length = path.getTotalLength();
        gsap.set(path, { strokeDasharray: length, strokeDashoffset: length });

        drawTl.to(tip, { opacity: 1, duration: 0.2 })
            .to(path, {
                strokeDashoffset: 0,
                duration: 1.5,
                ease: "power1.inOut"
            })
            .to(tip, {
                motionPath: {
                    path: path,
                    align: path,
                    autoRotate: 90,
                    alignOrigin: [0.5, 0] // Bristles touch the path
                },
                duration: 1.5,
                ease: "power1.inOut"
            }, "<")
            .to(tip, { opacity: 0, duration: 0.3 });
    });
});
