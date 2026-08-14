/**
 * Luna Beauty Salon - Interactive JavaScript Functionality
 * Handles:
 *  1. Smooth scroll animation for navigation links
 *  2. Mobile navigation hamburger menu toggle
 *  3. Dynamic active nav state highlighting on scroll
 *  4. Appointment form custom validation & success message
 */

document.addEventListener('DOMContentLoaded', () => {

    /* ==========================================
       1. Mobile Navigation Hamburger Menu
       ========================================== */
    const navToggle = document.querySelector('.nav-toggle');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    if (navToggle && navMenu) {
        navToggle.addEventListener('click', () => {
            const isExpanded = navToggle.getAttribute('aria-expanded') === 'true';
            navToggle.setAttribute('aria-expanded', !isExpanded);
            navMenu.classList.toggle('open');
        });

        // Close the menu when a nav link is clicked
        navLinks.forEach(link => {
            link.addEventListener('click', () => {
                navToggle.setAttribute('aria-expanded', 'false');
                navMenu.classList.remove('open');
            });
        });
    }


    /* ==========================================
       2. Smooth Scroll Navigation Animation
       ========================================== */
    const allLinks = document.querySelectorAll('a[href^="#"]');
    allLinks.forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;

            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                e.preventDefault();

                // Get navbar height for proper scroll offset padding
                const headerHeight = document.querySelector('.header').offsetHeight || 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerHeight;

                window.scrollTo({
                    top: offsetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });


    /* ==========================================
       3. Active Navigation State on Scroll
       ========================================== */
    const sections = document.querySelectorAll('section[id]');

    function highlightActiveSection() {
        const scrollPosition = window.pageYOffset;
        const headerHeight = document.querySelector('.header').offsetHeight || 80;

        sections.forEach(section => {
            const sectionHeight = section.offsetHeight;
            const sectionTop = section.offsetTop - headerHeight - 10;
            const sectionId = section.getAttribute('id');
            const correspondingNavLink = document.querySelector(`.nav-link[href="#${sectionId}"]`);

            if (correspondingNavLink) {
                if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                    correspondingNavLink.classList.add('active');
                } else {
                    correspondingNavLink.classList.remove('active');
                }
            }
        });
    }

    window.addEventListener('scroll', highlightActiveSection);
    highlightActiveSection(); // Initialize on page load


    /* ==========================================
       4. Appointment Form Validation & Submission
       ========================================== */
    const appointmentForm = document.getElementById('appointment-form');
    const successAlert = document.getElementById('appointment-success');

    if (appointmentForm) {
        appointmentForm.addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent standard page reload on submit

            // Retrieve form input elements
            const fullName = document.getElementById('full-name');
            const email = document.getElementById('email');
            const phone = document.getElementById('phone');
            const service = document.getElementById('service');
            const date = document.getElementById('date');
            const time = document.getElementById('time');

            let isFormValid = true;

            // Reset previous validation styles and messages
            const inputs = [fullName, email, phone, service, date, time];
            inputs.forEach(input => {
                input.classList.remove('invalid');
                const errorSpan = document.getElementById(`${input.id}-error`);
                if (errorSpan) {
                    errorSpan.style.display = 'none';
                }
            });

            // Helper function to show errors
            function showError(inputElement) {
                isFormValid = false;
                inputElement.classList.add('invalid');
                const errorSpan = document.getElementById(`${inputElement.id}-error`);
                if (errorSpan) {
                    errorSpan.style.display = 'block';
                }
            }

            // 1. Full Name Validation (Required, non-empty)
            if (!fullName.value.trim()) {
                showError(fullName);
            }

            // 2. Email Validation (Required, standard format)
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!email.value.trim() || !emailRegex.test(email.value.trim())) {
                showError(email);
            }

            // 3. Phone Validation (Required, basic non-empty/length check)
            if (!phone.value.trim() || phone.value.trim().length < 7) {
                showError(phone);
            }

            // 4. Service Selection Validation (Required selection)
            if (!service.value) {
                showError(service);
            }

            // 5. Preferred Date Validation (Required)
            if (!date.value) {
                showError(date);
            }

            // 6. Preferred Time Validation (Required)
            if (!time.value) {
                showError(time);
            }

            // If form passes frontend validation rules
            if (isFormValid) {
                // Display the dynamic success container
                if (successAlert) {
                    successAlert.classList.remove('hidden');

                    // Smoothly scroll to the success alert so the client can visually confirm
                    successAlert.scrollIntoView({ behavior: 'smooth', block: 'center' });
                }

                // Reset all input values to empty
                appointmentForm.reset();

                // Automatically hide the success message after 7 seconds
                setTimeout(() => {
                    if (successAlert) {
                        successAlert.classList.add('hidden');
                    }
                }, 7000);
            }
        });
    }
});
