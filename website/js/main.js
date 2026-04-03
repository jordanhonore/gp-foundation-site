// G&P Foundation for Wellness — Main JS

document.addEventListener('DOMContentLoaded', function () {
  // Mobile Nav Toggle
  const toggle = document.querySelector('.mobile-toggle');
  const navLinks = document.querySelector('.nav-links');
  if (toggle && navLinks) {
    toggle.addEventListener('click', function () {
      navLinks.classList.toggle('open');
      toggle.textContent = navLinks.classList.contains('open') ? '✕' : '☰';
    });
  }

  // Newsletter Form
  document.querySelectorAll('.newsletter-form').forEach(function (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var input = form.querySelector('input[type="email"]');
      var msg = form.nextElementSibling;
      if (input && input.value) {
        input.value = '';
        if (msg && msg.classList.contains('newsletter-success')) {
          msg.classList.add('show');
          setTimeout(function () { msg.classList.remove('show'); }, 4000);
        }
      }
    });
  });

  // Active Nav Link
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.nav-links a').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage) {
      link.classList.add('active');
    }
  });
});
