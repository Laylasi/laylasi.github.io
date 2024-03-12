document.getElementById('contactForm').addEventListener('submit', function(event) {
  event.preventDefault();
  const formData = new FormData(event.target);
  const data = Object.fromEntries(formData.entries());
  localStorage.setItem('contactFormData', JSON.stringify(data));
  alert('Form submitted successfully!');
});