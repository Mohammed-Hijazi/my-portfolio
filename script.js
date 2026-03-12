
        // ========================================
        // DATA
        // ========================================
        const skillsData = [
            {
                title: 'Languages',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16,18 22,12 16,6"/><polyline points="8,6 2,12 8,18"/></svg>',
                skills: ['Python', 'Java', 'C#', 'PHP', 'C++', 'JavaScript', 'HTML', 'CSS']
            },
            {
                title: 'Frontend',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="3" width="18" height="18" rx="2"/><path d="M3 9h18M9 21V9"/></svg>',
                skills: ['React', 'Bootstrap', 'Tailwind']
            },
            {
                title: 'Backend',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 12h-4l-3 9L9 3l-3 9H2"/></svg>',
                skills: ['Laravel', 'FastAPI']
            },
            {
                title: 'Databases',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><ellipse cx="12" cy="5" rx="9" ry="3"/><path d="M21 12c0 1.66-4 3-9 3s-9-1.34-9-3"/><path d="M3 5v14c0 1.66 4 3 9 3s9-1.34 9-3V5"/></svg>',
                skills: ['SQL', 'SQLite', 'MySQL', 'Oracle APEX']
            },
            {
                title: 'Tools',
                icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>',
                skills: ['Git', 'GitHub', 'Jira', 'Docker', 'RESTful APIs']
            }
        ];

        const experienceData = [
            {
                title: 'Full-Stack Web Developer',
                period: '2023 - Present',
                items: [
                    'Built responsive front-end interfaces using React with Bootstrap and Tailwind',
                    'Developed back-end solutions using Laravel and FastAPI',
                    'Designed RESTful APIs for client-server communication'
                ]
            },
            {
                title: 'Desktop Application Developer',
                period: '2024 - 2025',
                items: [
                    'Created Windows desktop applications using C# and Windows Forms',
                    'Built user-friendly desktop interfaces'
                ]
            },
            {
                title: 'Database Designer & MySQL Developer',
                period: '2023 - Present',
                items: [
                    'Designed ERD database schemas',
                    'Implemented optimized MySQL databases',
                    'Improved query performance and indexing'
                ]
            },
            {
                title: 'Competitive Programmer',
                period: '2024 - Present',
                items: [
                    'Participated in programming contests using C++',
                    'Solved algorithmic problems demonstrating strong analytical thinking'
                ]
            }
        ];

        const projectsData = [
            {
                title: 'PlanetPedia',
                desc: 'Explore the solar system with this interactive image map! Click any planet to discover fascinating facts. A fun, pure HTML learning tool for space lovers!',
                tech: ['HTML'],
                category: 'HTML & CSS',
                image: 'images/p1-html.jpg',
                github: 'https://github.com/Mohammed-Hijazi/PlanetPedia',
                demo: 'https://mohammed-hijazi.github.io/PlanetPedia/'
            },
            {
                title: 'Solar-System-Explorer',
                desc: 'Interactive Solar System: Click any planet to explore stunning space visuals. Fully responsive design for all devices.',
                tech: ['HTML', 'CSS'],
                category: 'HTML & CSS',
                image: 'images/p2-css.png',
                github: 'https://github.com/Mohammed-Hijazi/Solar-System-Explorer',
                demo: 'https://mohammed-hijazi.github.io/Solar-System-Explorer/'
            },
                        {
                title: 'Modern-Glass-Login-UI',
                desc: 'Modern Glassmorphism Login: A sleek HTML & CSS interface with blur effects, warm earth tones, and smooth hover animations.',
                tech: ['HTML', 'CSS'],
                category: 'HTML & CSS',
                image: 'images/p3-css.png',
                github: 'https://github.com/Mohammed-Hijazi/Modern-Glass-Login-UI',
                demo: 'https://mohammed-hijazi.github.io/Modern-Glass-Login-UI/'
            },
            {
                title: 'AlgoMotion',
                desc: 'An interactive algorithm visualizer built with AI coding tools. Created to help students deeply understand sorting algorithms and data structures through step-by-step visual animations and live pseudocode highlighting. Pure HTML/CSS/JS — no dependencies.',
                tech: ['HTML', 'CSS','JS'],
                category: 'HTML & CSS',
                image: 'images/p4-js.png',
                github: 'https://github.com/Mohammed-Hijazi/AlgoMotion',
                demo: 'https://mohammed-hijazi.github.io/AlgoMotion/'
            },
            
            {
                title: 'University-Library-Management-System',
                desc: 'University Library Manager: A Java console app for adding students/books, lending books, and tracking borrows. Demonstrates OOP concepts like inheritance and encapsulation. Great for learning Java basics!',
                tech: ['Java'],
                category: 'Java',
                image: 'images/p1-java.png',
                github: 'https://github.com/Mohammed-Hijazi/University-Library-Management-System-Java',
                demo: '#'
            },
            

        ];

        const certificatesData = [
            {
                title: 'HTML Fundamentals Certificate - Beginner Level',
                org: 'Official certification from Sattr platform in HTML fundamentals. Demonstrates proficiency in creating web page structures, using HTML5 semantic elements, working with links, images, lists, tables, and forms to build well-structured websites.',
                image: 'images/HTML.png'
            },
            {
                title: 'CSS Styling Essentials Certificate',
                org: 'Official certification from Sattr platform in CSS fundamentals. Demonstrates proficiency in styling text, controlling layouts, understanding the Box Model, and using basic selectors to build well-designed web pages',
                image: 'images/CSS.png'
            },
                {
                title: 'C# Programming Fundamentals Certificate - Beginner Level',
                org: 'Official certification from Sattr platform in C# programming fundamentals. Demonstrates proficiency in writing C# code, working with variables, loops, conditionals, methods, and understanding core object-oriented programming concepts.',
                image: 'images/ch.png'
            },
            {
                title: 'Advanced Java Programming Certificate',
                org: 'Official certification from Sattr platform in Advanced Java programming. Demonstrates expertise in multithreading, networking, JDBC, design patterns, lambda expressions, Stream API, and building enterprise-grade applications.',
                image: 'images/Java 3.png'
            },
            {
                title: 'ICPC Individual Participation Certificate',
                org: 'Official certification from Sattr platform in Advanced Java programming. Demonstrates expertise in multithreading, networking, JDBC, design patterns, lambda expressions, Stream API, and building enterprise-grade applications.',
                image: 'images/MY-ICPC.png'
            },
            {
                title: 'ICPC Team Participation Certificate',
                org: 'Official team certificate from the International Collegiate Programming Contest (ICPC) recognizing collaborative achievement in competitive programming. Successfully competed as part of a 3-person team, demonstrating excellence in teamwork, coordination, and collective problem-solving.',
                image: 'images/my-Team-icpc.png'
            }
        ];

        const languagesData = [
            { name: 'Arabic', level: 'Native' },
            { name: 'English', level: 'Intermediate (B1)' },
            { name: 'French', level: 'Beginner (A1)' }
        ];

        const contactData = [
            { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>', label: 'GitHub', value: 'github.com/mohammedhijazi', link: 'https://github.com/Mohammed-Hijazi' },
            { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>', label: 'Codeforces', value: 'codeforces.com/profile', link: 'https://codeforces.com/profile/mohammed_hiz' },
            { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>', label: 'LinkedIn', value: 'linkedin.com/in/mohammedhijazi', link: 'https://www.linkedin.com/in/mohammed-hijazi-445a89314/' },
            { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>', label: 'Email', value: 'mohammedhiz1113@gmail.com', link: 'mailto:mohammedhiz1113@gmail.com' },
            { icon: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"/></svg>', label: 'WhatsApp', value: '+84 39 296 6551', link: 'https://wa.me/84392966551' }
        ];

        const filterCategories = ['All', 'React', 'Laravel', 'HTML & CSS', 'C++', 'Java', 'FastAPI'];

        // ========================================
        // TRANSLATIONS
        // ========================================
        const translations = {
            en: {
                nav: { home: 'Home', about: 'About', skills: 'Skills', experience: 'Experience', projects: 'Projects', contact: 'Contact' },
                hero: {
                    badge: 'Available for work',
                    name: 'Mohammed Hijazi',
                    subtitle: 'Full-Stack Developer | Information Engineering Student',
                    desc: 'Information Engineering student with experience in full-stack web development. Skilled in React and Laravel with strong knowledge in database design and competitive programming.',
                    viewProjects: 'View Projects',
                    contactMe: 'Contact Me'
                },
                about: {
                    label: 'About Me',
                    title: 'Who I Am',
                    p1: 'Information Engineering student with one year of experience in full-stack web development. Proficient in React and Laravel with a strong foundation in database design and optimization.',
                    p2: 'Proven ability to build scalable applications, solve complex problems through competitive programming, and collaborate effectively within development teams.',
                    expYears: 'Years Experience',
                    projects: 'Projects',
                    technologies: 'Technologies'
                },
                skills: { label: 'Skills', title: 'Technical Expertise' },
                experience: { label: 'Experience', title: 'Work History' },
                projects: { label: 'Projects', title: 'Featured Work' },
                certificates: { label: 'Certificates', title: 'Achievements' },
                education: { title: 'Education', degree: 'Bachelor of Information Engineering', status: 'In Progress' },
                languages: { title: 'Languages' },
                contact: { label: 'Contact', title: 'Get In Touch' },
                footer: { rights: 'All rights reserved.' }
            },
            ar: {
                nav: { home: 'الرئيسية', about: 'عني', skills: 'المهارات', experience: 'الخبرات', projects: 'المشاريع', contact: 'التواصل' },
                hero: {
                    badge: 'متاح للعمل',
                    name: 'محمد حجازي',
                    subtitle: 'مطور Full-Stack | طالب هندسة معلوماتية',
                    desc: 'طالب هندسة معلوماتية ذو خبرة في تطوير الويب Full-Stack. متقن لـ React و Laravel مع معرفة قوية في تصميم قواعد البيانات والبرمجة التنافسية.',
                    viewProjects: 'عرض المشاريع',
                    contactMe: 'تواصل معي'
                },
                about: {
                    label: 'عني',
                    title: 'من أنا',
                    p1: 'طالب هندسة معلوماتية مع خبرة سنة في تطوير الويب Full-Stack. بارع في React و Laravel مع أساس قوي في تصميم وتحسين قواعد البيانات.',
                    p2: 'قدرة مثبتة على بناء تطبيقات قابلة للتوسع، وحل المشاكل المعقدة من خلال البرمجة التنافسية، والتعاون الفعال ضمن فرق التطوير.',
                    expYears: 'سنوات الخبرة',
                    projects: 'المشاريع',
                    technologies: 'التقنيات'
                },
                skills: { label: 'المهارات', title: 'الخبرات التقنية' },
                experience: { label: 'الخبرات', title: 'السيرة المهنية' },
                projects: { label: 'المشاريع', title: 'الأعمال المميزة' },
                certificates: { label: 'الشهادات', title: 'الإنجازات' },
                education: { title: 'التعليم', degree: 'بكالوريوس هندسة معلوماتية', status: 'جاري' },
                languages: { title: 'اللغات' },
                contact: { label: 'التواصل', title: 'تواصل معي' },
                footer: { rights: 'جميع الحقوق محفوظة.' }
            }
        };

        // ========================================
        // STATE
        // ========================================
        let currentLang = localStorage.getItem('lang') || 'en';
        let currentTheme = localStorage.getItem('theme') || 'dark';
        let currentFilter = 'All';

        // ========================================
        // DOM ELEMENTS
        // ========================================
        const loader = document.getElementById('loader');
        const scrollProgress = document.getElementById('scrollProgress');
        const cursor = document.getElementById('cursor');
        const cursorDot = document.getElementById('cursorDot');
        const navbar = document.getElementById('navbar');
        const hamburger = document.getElementById('hamburger');
        const mobileMenu = document.getElementById('mobileMenu');
        const mobileOverlay = document.getElementById('mobileOverlay');
        const themeToggle = document.getElementById('themeToggle');
        const themeIcon = document.getElementById('themeIcon');
        const langToggle = document.getElementById('langToggle');
        const modal = document.getElementById('modal');
        const modalClose = document.getElementById('modalClose');
        const modalImage = document.getElementById('modalImage');

        // ========================================
        // INITIALIZATION
        // ========================================
        function init() {
            // Apply saved theme
            document.documentElement.setAttribute('data-theme', currentTheme);
            updateThemeIcon();
            
            // Apply saved language
            if (currentLang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
            }
            applyTranslations();
            
            // Render dynamic content
            renderSkills();
            renderExperience();
            renderProjects();
            renderCertificates();
            renderLanguages();
            renderContact();
            
            // Setup observers
            setupObservers();
            
            // Hide loader
            setTimeout(() => {
                loader.classList.add('hidden');
            }, 2100);
        }

        // ========================================
        // CURSOR
        // ========================================
        let mouseX = 0;
        let mouseY = 0;
        let cursorX = 0;
        let cursorY = 0;

        function updateCursor() {
            cursorX += (mouseX - cursorX) * 0.15;
            cursorY += (mouseY - cursorY) * 0.15;
            
            if (cursor && cursorDot) {
                cursor.style.left = mouseX + 'px';
                cursor.style.top = mouseY + 'px';
                cursorDot.style.left = cursorX + 'px';
                cursorDot.style.top = cursorY + 'px';
            }
            
            requestAnimationFrame(updateCursor);
        }

        document.addEventListener('mousemove', (e) => {
            mouseX = e.clientX;
            mouseY = e.clientY;
        });

        updateCursor();

        // Cursor hover effects
        document.addEventListener('mouseover', (e) => {
            if (e.target.closest('a, button, .project-card, .certificate-card, .skill-tag, .stat-card')) {
                cursor.classList.add('hover');
            }
        });

        document.addEventListener('mouseout', (e) => {
            if (e.target.closest('a, button, .project-card, .certificate-card, .skill-tag, .stat-card')) {
                cursor.classList.remove('hover');
            }
        });

        // ========================================
        // SCROLL EFFECTS
        // ========================================
        function handleScroll() {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = Math.min((scrollTop / docHeight) * 100, 100);
            scrollProgress.style.width = progress + '%';
            
            if (scrollTop > 50) {
                navbar.classList.add('scrolled');
            } else {
                navbar.classList.remove('scrolled');
            }
        }

        window.addEventListener('scroll', handleScroll, { passive: true });

        // ========================================
        // INTERSECTION OBSERVER
        // ========================================
        function setupObservers() {
            const observerOptions = {
                threshold: 0.1,
                rootMargin: '0px 0px -50px 0px'
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal, .reveal-left, .reveal-right').forEach(el => {
                observer.observe(el);
            });
        }

        // ========================================
        // MOBILE MENU
        // ========================================
        function toggleMobileMenu(open) {
            hamburger.classList.toggle('active', open);
            mobileMenu.classList.toggle('active', open);
            mobileOverlay.classList.toggle('active', open);
            hamburger.setAttribute('aria-expanded', open);
            document.body.style.overflow = open ? 'hidden' : '';
        }

        hamburger.addEventListener('click', () => {
            const isOpen = mobileMenu.classList.contains('active');
            toggleMobileMenu(!isOpen);
        });

        mobileOverlay.addEventListener('click', () => toggleMobileMenu(false));

        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => toggleMobileMenu(false));
        });

        // ========================================
        // THEME TOGGLE
        // ========================================
        function updateThemeIcon() {
            if (currentTheme === 'dark') {
                themeIcon.innerHTML = '<circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/>';
            } else {
                themeIcon.innerHTML = '<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>';
            }
        }

        themeToggle.addEventListener('click', () => {
            currentTheme = currentTheme === 'dark' ? 'light' : 'dark';
            document.documentElement.setAttribute('data-theme', currentTheme);
            localStorage.setItem('theme', currentTheme);
            updateThemeIcon();
        });

        // ========================================
        // LANGUAGE TOGGLE
        // ========================================
        function applyTranslations() {
            document.querySelectorAll('[data-i18n]').forEach(el => {
                const key = el.getAttribute('data-i18n');
                const keys = key.split('.');
                let value = translations[currentLang];
                keys.forEach(k => {
                    if (value) value = value[k];
                });
                if (value) el.textContent = value;
            });
        }

        langToggle.addEventListener('click', () => {
            currentLang = currentLang === 'en' ? 'ar' : 'en';
            localStorage.setItem('lang', currentLang);
            
            if (currentLang === 'ar') {
                document.documentElement.setAttribute('dir', 'rtl');
                document.documentElement.setAttribute('lang', 'ar');
            } else {
                document.documentElement.setAttribute('dir', 'ltr');
                document.documentElement.setAttribute('lang', 'en');
            }
            
            applyTranslations();
        });

        // ========================================
        // RENDER FUNCTIONS
        // ========================================
        function renderSkills() {
            const grid = document.getElementById('skillsGrid');
            grid.innerHTML = skillsData.map((cat, i) => `
                <div class="skill-card reveal" style="transition-delay: ${i * 0.1}s">
                    <div class="skill-card-header">
                        <div class="skill-card-icon">${cat.icon}</div>
                        <h3 class="skill-card-title">${cat.title}</h3>
                    </div>
                    <div class="skill-tags">
                        ${cat.skills.map(skill => `<span class="skill-tag">${skill}</span>`).join('')}
                    </div>
                </div>
            `).join('');
        }

        function renderExperience() {
            const timeline = document.getElementById('timeline');
            timeline.innerHTML = experienceData.map((exp, i) => `
                <div class="timeline-item reveal" style="transition-delay: ${i * 0.15}s">
                    <div class="timeline-card">
                        <h3 class="timeline-title">${exp.title}</h3>
                        <p class="timeline-period">${exp.period}</p>
                        <ul class="timeline-list">
                            ${exp.items.map(item => `<li>${item}</li>`).join('')}
                        </ul>
                    </div>
                </div>
            `).join('');
        }

        function renderProjects() {
            const filtersContainer = document.getElementById('projectFilters');
            filtersContainer.innerHTML = filterCategories.map(cat => `
                <button class="filter-btn ${cat === currentFilter ? 'active' : ''}" data-filter="${cat}">${cat}</button>
            `).join('');

            const grid = document.getElementById('projectsGrid');
            const filtered = currentFilter === 'All' 
                ? projectsData 
                : projectsData.filter(p => p.category === currentFilter);
            
            grid.innerHTML = filtered.map((project, i) => `
                <article class="project-card reveal" style="transition-delay: ${i * 0.1}s">
                    <div class="project-image-wrapper">
                        <img src="${project.image}" alt="${project.title}" class="project-image" loading="lazy">
                    </div>
                    <div class="project-content">
                        <h3 class="project-title">${project.title}</h3>
                        <p class="project-desc">${project.desc}</p>
                        <div class="project-tech">
                            ${project.tech.map(t => `<span>${t}</span>`).join('')}
                        </div>
                        <div class="project-links">
                            <a href="${project.github}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"/></svg>
                                GitHub
                            </a>
                            <a href="${project.demo}" class="project-link" target="_blank" rel="noopener noreferrer">
                                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15 3 21 3 21 9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>
                                Demo
                            </a>
                        </div>
                    </div>
                </article>
            `).join('');

            // Filter handlers
            filtersContainer.querySelectorAll('.filter-btn').forEach(btn => {
                btn.addEventListener('click', () => {
                    currentFilter = btn.dataset.filter;
                    renderProjects();
                    setupObservers();
                });
            });
        }

        function renderCertificates() {
            const grid = document.getElementById('certificatesGrid');
            grid.innerHTML = certificatesData.map((cert, i) => `
                <article class="certificate-card reveal" style="transition-delay: ${i * 0.1}s" data-image="${cert.image}" tabindex="0" role="button" aria-label="View ${cert.title} certificate">
                    <div class="certificate-icon">
                        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="8" r="7"/>
                            <polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"/>
                        </svg>
                    </div>
                    <h3 class="certificate-title">${cert.title}</h3>
                    <p class="certificate-org">${cert.org}</p>
                </article>
            `).join('');

            grid.querySelectorAll('.certificate-card').forEach(card => {
                const handler = () => {
                    modalImage.src = card.dataset.image;
                    modal.classList.add('active');
                };
                card.addEventListener('click', handler);
                card.addEventListener('keydown', (e) => {
                    if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        handler();
                    }
                });
            });
        }

        function renderLanguages() {
            const list = document.getElementById('langList');
            list.innerHTML = languagesData.map(lang => `
                <li class="lang-item">
                    <span class="lang-name">${lang.name}</span>
                    <span class="lang-level">${lang.level}</span>
                </li>
            `).join('');
        }

        function renderContact() {
            const grid = document.getElementById('contactGrid');
            grid.innerHTML = contactData.map((contact, i) => `
                <a href="${contact.link}" class="contact-card reveal" style="transition-delay: ${i * 0.1}s" target="_blank" rel="noopener noreferrer">
                    <div class="contact-icon">${contact.icon}</div>
                    <p class="contact-label">${contact.label}</p>
                    <p class="contact-value">${contact.value}</p>
                </a>
            `).join('');
        }

        // ========================================
        // MODAL
        // ========================================
        function closeModal() {
            modal.classList.remove('active');
        }

        modalClose.addEventListener('click', closeModal);
        modal.addEventListener('click', (e) => {
            if (e.target === modal) closeModal();
        });
        document.addEventListener('keydown', (e) => {
            if (e.key === 'Escape' && modal.classList.contains('active')) {
                closeModal();
            }
        });

        // ========================================
        // NAV ACTIVE STATE
        // ========================================
        function updateNavActive() {
            const sections = document.querySelectorAll('section[id]');
            const navLinks = document.querySelectorAll('.nav-links a, .mobile-menu a');
            
            let current = '';
            sections.forEach(section => {
                const sectionTop = section.offsetTop - 200;
                if (window.scrollY >= sectionTop) {
                    current = section.getAttribute('id');
                }
            });

            navLinks.forEach(link => {
                link.classList.remove('active');
                if (link.getAttribute('href') === '#' + current) {
                    link.classList.add('active');
                }
            });
        }

        window.addEventListener('scroll', updateNavActive, { passive: true });

        // ========================================
        // START
        // ========================================
        init();
