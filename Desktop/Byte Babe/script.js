// Dark Mode Toggle
        const toggleSwitch = document.querySelector('#checkbox');
        const currentTheme = localStorage.getItem('theme') || 'light';
        
        if (currentTheme === 'dark') {
            document.body.classList.add('dark-mode');
            toggleSwitch.checked = true;
        }
        
        function switchTheme(e) {
            if (e.target.checked) {
                document.body.classList.add('dark-mode');
                localStorage.setItem('theme', 'dark');
            } else {
                document.body.classList.remove('dark-mode');
                localStorage.setItem('theme', 'light');
            }    
        }
        
        toggleSwitch.addEventListener('change', switchTheme, false);
        
        // Mobile Menu Toggle
        document.querySelector('.menu-btn').addEventListener('click', function() {
            const navLinks = document.querySelector('.nav-links');
            navLinks.classList.toggle('active');
        });
        
        // Close mobile menu when a link is clicked
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', function() {
                if (window.innerWidth < 768) {
                    document.querySelector('.nav-links').classList.remove('active');
                }
            });
        });
        
        // Form submission handling
        document.querySelector('form').addEventListener('submit', function(e) {
            e.preventDefault();
            alert('Thanks for your message! I\'ll get back to you soon.');
            this.reset();
        });