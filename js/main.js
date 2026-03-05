/* ============================================
   NIT — Main JavaScript
   Alpine.js components, GSAP animations, utilities
   ============================================ */

/* --- Alpine.js global store --- */
document.addEventListener('alpine:init', () => {
  Alpine.store('nav', {
    open: false,
    toggle() {
      this.open = !this.open;
    },
    close() {
      this.open = false;
    }
  });
});

/* --- Scroll-aware header --- */
(function () {
  const header = document.querySelector('.site-header');
  if (!header) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        header.classList.toggle('scrolled', window.scrollY > 10);
        ticking = false;
      });
      ticking = true;
    }
  });
})();

/* --- Scroll to top button --- */
(function () {
  const btn = document.querySelector('.scroll-top');
  if (!btn) return;

  let ticking = false;
  window.addEventListener('scroll', () => {
    if (!ticking) {
      requestAnimationFrame(() => {
        btn.classList.toggle('visible', window.scrollY > 400);
        ticking = false;
      });
      ticking = true;
    }
  });

  btn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  });
})();

/* --- GSAP ScrollTrigger animations --- */
(function () {
  if (typeof gsap === 'undefined' || typeof ScrollTrigger === 'undefined') return;

  gsap.registerPlugin(ScrollTrigger);

  gsap.utils.toArray('.animate-on-scroll').forEach((el) => {
    gsap.fromTo(
      el,
      { opacity: 0, y: 40 },
      {
        opacity: 1,
        y: 0,
        duration: 0.7,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: el,
          start: 'top 85%',
          once: true
        }
      }
    );
  });
})();

/* --- Contact form Alpine component --- */
function contactForm() {
  return {
    name: '',
    email: '',
    phone: '',
    message: '',
    errors: {},
    submitted: false,
    submitting: false,

    validate() {
      this.errors = {};

      if (!this.name.trim()) {
        this.errors.name = 'Name is required.';
      }

      if (!this.email.trim()) {
        this.errors.email = 'Email is required.';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(this.email)) {
        this.errors.email = 'Please enter a valid email address.';
      }

      if (this.phone && !/^[\d\s\-\+\(\)]{7,}$/.test(this.phone)) {
        this.errors.phone = 'Please enter a valid phone number.';
      }

      if (!this.message.trim()) {
        this.errors.message = 'Message is required.';
      }

      return Object.keys(this.errors).length === 0;
    },

    async submit() {
      if (!this.validate()) return;

      this.submitting = true;

      try {
        const response = await fetch('https://formspree.io/f/xpwdjkwl', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json', 'Accept': 'application/json' },
          body: JSON.stringify({
            name: this.name,
            email: this.email,
            phone: this.phone,
            message: this.message
          })
        });

        if (response.ok) {
          this.submitted = true;
        } else {
          this.errors.form = 'Something went wrong. Please try again or email us directly.';
        }
      } catch {
        this.errors.form = 'Network error. Please try again or email us directly.';
      } finally {
        this.submitting = false;
      }
    }
  };
}
