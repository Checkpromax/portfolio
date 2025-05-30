// AOS (Animate On Scroll)
AOS.init();

// Typed.js effect
var typed = new Typed('#typed', {
  strings: ['Web Developer.', 'Front-End Enthusiast.', 'Tailwind CSS Expert.', 'React Developer.'],
  typeSpeed: 60,
  backSpeed: 40,
  loop: true,
});

// Dark Mode
const toggleBtn = document.getElementById('toggleDark');
const htmlEl = document.documentElement;

function updateToggleText() {
  toggleBtn.textContent = htmlEl.classList.contains('dark') ? 'Light Mode' : 'Dark Mode';
}

// Load saved mode
if (localStorage.getItem('darkMode') === 'enabled') {
  htmlEl.classList.add('dark');
}
updateToggleText();

toggleBtn.addEventListener('click', () => {
  htmlEl.classList.toggle('dark');
  localStorage.setItem('darkMode', htmlEl.classList.contains('dark') ? 'enabled' : 'disabled');
  updateToggleText();
});

// Contact form handling
const form = document.getElementById('contactForm');
const messageEl = document.getElementById('formMessage');

form.addEventListener('submit', (e) => {
  e.preventDefault();
  const formData = new FormData(form);
  fetch(form.action, {
    method: 'POST',
    body: formData,
    headers: { 'Accept': 'application/json' },
  }).then(response => {
    if (response.ok) {
      messageEl.classList.remove('hidden');
      form.reset();
      setTimeout(() => messageEl.classList.add('hidden'), 5000);
    } else {
      alert('Oops! There was a problem submitting your form');
    }
  }).catch(() => alert('Oops! There was a problem submitting your form'));
});
