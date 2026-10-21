// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var links = document.querySelector('.nav-links');
  if (toggle && links) {
    toggle.addEventListener('click', function () {
      links.classList.toggle('open');
      var expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
    });
    links.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { links.classList.remove('open'); });
    });
  }

  // Capability tiles: first two value statements visible, the rest expand on click
  document.querySelectorAll('.tile-points').forEach(function (box) {
    var btn = box.querySelector('.tile-toggle');
    if (!btn) return;
    var label = btn.querySelector('.tile-toggle-label');
    box.classList.add('is-collapsible');
    btn.hidden = false;
    btn.addEventListener('click', function () {
      var open = box.classList.toggle('is-open');
      btn.setAttribute('aria-expanded', String(open));
      if (label) label.textContent = open ? 'Show less' : 'Show more';
    });
  });

  // Legal page tabs
  var tabButtons = document.querySelectorAll('.legal-tabs button');
  if (tabButtons.length) {
    tabButtons.forEach(function (btn) {
      btn.addEventListener('click', function () {
        var target = btn.getAttribute('data-tab');
        document.querySelectorAll('.legal-tabs button').forEach(function (b) { b.classList.remove('active'); });
        document.querySelectorAll('.legal-panel').forEach(function (p) { p.classList.remove('active'); });
        btn.classList.add('active');
        document.getElementById(target).classList.add('active');
        history.replaceState(null, '', '#' + target);
      });
    });
    var hash = window.location.hash.replace('#', '');
    if (hash && document.getElementById(hash)) {
      document.querySelector('.legal-tabs button[data-tab="' + hash + '"]').click();
    }
  }

  // Contact form (placeholder submit handler until backend function is wired up)
  var contactForm = document.getElementById('contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      var status = document.getElementById('form-status');
      if (status) {
        status.textContent = 'Thanks — this form isn\'t connected yet. We\'ll wire it up to email/Netlify Forms next.';
      }
    });
  }
});

// Subtle reveal-on-scroll (content stays visible if JS or IntersectionObserver is unavailable)
(function () {
  var els = document.querySelectorAll('.reveal');
  if (!('IntersectionObserver' in window)) {
    els.forEach(function (el) { el.classList.add('in'); });
    return;
  }
  var io = new IntersectionObserver(function (entries) {
    entries.forEach(function (e) {
      if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); }
    });
  }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
  els.forEach(function (el) { io.observe(el); });
})();
