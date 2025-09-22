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
        
      // Handle Form Submission
document.getElementById('contact-form').addEventListener('submit', async function(e) {
    e.preventDefault();
    
    const submitBtn = document.getElementById('submit-btn');
    const statusEl = document.getElementById('form-status');
    
    // Change button text to indicate loading
    submitBtn.innerHTML = 'Sending...';
    submitBtn.disabled = true;
    
    // Hide any previous status messages
    statusEl.className = 'form-status';
    
    // Collect form data
    const formData = new FormData(this);
    const data = {
        name: formData.get('name'),
        email: formData.get('email'),
        phone: formData.get('phone'),
        subject: formData.get('subject'),
        message: formData.get('message')
    };
    
    try {
        // If using Netlify Forms (simple approach)
        // Let Netlify handle the form submission
        const response = await fetch('/', {
            method: 'POST',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            body: new URLSearchParams(formData).toString()
        });
        
        if (response.ok) {
            statusEl.innerHTML = 'Message sent successfully! I\'ll get back to you soon.';
            statusEl.className = 'form-status success';
            this.reset();
        } else {
            throw new Error('Form submission failed');
        }
    } catch (error) {
        statusEl.innerHTML = 'Sorry, there was an error sending your message. Please try again or contact me directly at your-email@example.com';
        statusEl.className = 'form-status error';
    } finally {
        // Reset button
        submitBtn.innerHTML = 'Send Message';
        submitBtn.disabled = false;
    }
});
