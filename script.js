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
        
        // Handle Netlify Form Submission
        document.getElementById('contact-form').addEventListener('submit', function(e) {
            const submitBtn = document.getElementById('submit-btn');
            const statusEl = document.getElementById('form-status');
            
            // Change button text to indicate loading
            submitBtn.innerHTML = 'Sending...';
            submitBtn.disabled = true;
            
            // Hide any previous status messages
            statusEl.className = 'form-status';
            
            // Netlify will handle the form submission, but we'll show a temporary message
            setTimeout(function() {
                statusEl.innerHTML = 'Message sent successfully! I\'ll get back to you soon.';
                statusEl.className = 'form-status success';
                
                // Reset form
                document.getElementById('contact-form').reset();
                
                // Reset button
                submitBtn.innerHTML = 'Send Message';
                submitBtn.disabled = false;
            }, 1000);
        });
