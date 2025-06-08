// Typing animation function
function typeEffect(element, text, speed = 100) {
    let i = 0;
    element.innerHTML = ""; // Clear initial content
    const cursor = document.createElement('span');
    cursor.className = 'typing-cursor';
    cursor.innerHTML = '|';
    element.appendChild(cursor);

    function type() {
        if (i < text.length) {
            element.insertBefore(document.createTextNode(text.charAt(i)), cursor);
            i++;
            setTimeout(type, speed);
        } else {
            if (element.cursorInterval) {
                clearInterval(element.cursorInterval);
            }
            element.cursorInterval = setInterval(() => {
                cursor.style.visibility = (cursor.style.visibility === 'hidden' ? 'visible' : 'hidden');
            }, 500);
        }
    }
    type();
}

// Scroll reveal function
function revealSections() {
    const sections = document.querySelectorAll('section[id]');
    const windowHeight = window.innerHeight;

    sections.forEach(section => {
        const sectionTop = section.getBoundingClientRect().top;
        if (sectionTop < windowHeight - 100) {
            section.classList.add('is-visible');
        }
    });
}

// Contact form handler
function handleContactForm(formId, statusDivId) {
    const form = document.getElementById(formId);
    const statusDiv = document.getElementById(statusDivId);
    const submitButton = form ? form.querySelector('button[type="submit"]') : null;

    if (!form || !statusDiv || !submitButton) {
        console.error("Contact form, status div, or submit button not found!");
        return;
    }

    form.addEventListener('submit', async function(event) {
        event.preventDefault();
        const originalButtonText = submitButton.textContent;
        submitButton.textContent = 'Sending...';
        submitButton.disabled = true;

        statusDiv.textContent = ''; // Clear previous status
        statusDiv.className = '';

        const name = form.elements['name'].value.trim();
        const email = form.elements['email'].value.trim();
        const message = form.elements['message'].value.trim();

        if (!name || !email || !message) {
            statusDiv.textContent = "Please fill in all fields.";
            statusDiv.className = 'error';
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        if (!validateEmail(email)) {
            statusDiv.textContent = "Please enter a valid email address.";
            statusDiv.className = 'error';
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            return;
        }

        try {
            // Determine the correct endpoint based on typical local dev vs. deployment
            // For local testing with `netlify dev` and the redirect in netlify.toml,
            // or for Vercel (if functions are in /api or rewritten),
            // this path should work.
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ name, email, message }),
            });

            const result = await response.json();

            if (response.ok) {
                statusDiv.textContent = result.message || 'Form submitted successfully!';
                statusDiv.className = 'success';
                form.reset();
            } else {
                statusDiv.textContent = result.error || 'An error occurred while submitting the form.';
                statusDiv.className = 'error';
            }
        } catch (error) {
            console.error('Error submitting form:', error);
            statusDiv.textContent = 'A network error occurred. Please try again.';
            statusDiv.className = 'error';
        } finally {
            submitButton.textContent = originalButtonText;
            submitButton.disabled = false;
            setTimeout(() => {
                statusDiv.textContent = '';
                statusDiv.className = '';
            }, 7000); // Keep message a bit longer for server responses
        }
    });
}

function validateEmail(email) {
    const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return re.test(String(email).toLowerCase());
}

// Call functions after the DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    const taglineElement = document.getElementById('tagline');
    if (taglineElement) {
        const taglineText = "Curious Coder | AIML & IoT Explorer | Lifelong Learner";
        typeEffect(taglineElement, taglineText);
    } else {
        console.error("Tagline element not found for typing effect!");
    }

    revealSections();
    window.addEventListener('scroll', revealSections);

    handleContactForm('contact-form', 'form-status');
});
