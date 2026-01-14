document.querySelector('.toggle-btn').addEventListener('click', function() {
  const isPressed = this.getAttribute('aria-pressed') === 'true';
  this.setAttribute('aria-pressed', String(!isPressed));
});