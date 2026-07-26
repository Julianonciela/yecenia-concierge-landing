/* ============================================================
   Yecenia Local — Main Script
   Language toggle (EN/ES), route-line scroll animation,
   header scroll state, mobile nav, mobile bar dismiss
   ============================================================ */

(function () {
  'use strict';

  /* ----------------------------------------------------------
     1. BILINGUAL CONTENT
  ---------------------------------------------------------- */
  const content = {
    en: {
      // Nav
      navTours: 'Tours',
      navSenior: 'Senior Care',
      navConcierge: 'Concierge',
      navAbout: 'About',
      navContact: 'Contact',

      // Hero
      heroTagline: 'Central Coast Concierge',
      heroTitle: 'Local help you can actually trust, from Paso Robles to Morro Bay.',
      heroSubtitle: 'Tours, senior companionship, and vacation rental support — from one local person who knows this coast by heart.',
      selectorLabel: 'How can I help you?',
      selectorTours: "I'm looking for a local tour or translation",
      selectorSenior: 'I need help caring for a family member',
      selectorConcierge: 'I manage a vacation rental',

      // Tours
      toursLabel: 'Tours & Language Services',
      toursTitle: 'See Paso Robles through local eyes',
      toursDesc: 'Walk the historic downtown with someone who actually lives here. I lead small-group walking tours in Spanish and English, covering the stories, flavors, and hidden corners that the guidebooks miss. I also offer translation and interpretation services for visitors, businesses, and families who need bilingual support on the Central Coast.',
      toursCta: 'Ask about tour times',
      toursBadge1: 'Bilingual tours',
      toursBadge2: 'Paso Robles & Atascadero',

      // Senior Care
      seniorLabel: 'Senior Companion Care',
      seniorTitle: 'A familiar face for your loved one in Morro Bay',
      seniorDesc: 'Sometimes all someone needs is company — a home-cooked meal, a ride to a doctor\'s appointment, someone to sit with on the porch and watch the ocean. I provide companionship, light housekeeping, cooking, and driving for seniors in Morro Bay and surrounding areas.',
      seniorCta: 'Ask about senior care',
      seniorBadge1: 'Registered with the California Home Care Aide Registry',
      seniorBadge2: 'Morro Bay area',

      // Concierge
      conciergeLabel: 'Concierge & Turnover',
      conciergeTitle: 'Your vacation rental runs itself — because someone local is watching it',
      conciergeDesc: 'Guest check-in, turnover cleaning, restocking, and coordination between stays. I work with property owners in both Paso Robles/Atascadero and Morro Bay to keep their rentals running smoothly, so they don\'t have to be on-site for every little thing.',
      conciergeCta: 'Get a cleaning quote',
      conciergeBadge1: 'Paso Robles & Morro Bay',
      conciergeBadge2: 'Same-day response',

      // Why Me
      whyMeTitle: 'Why me? Because I actually live here.',
      whyMeText: 'I moved to the Central Coast because I fell in love with the land, the people, and the pace. I\'m not a staffing agency or a franchise — I\'m one person who cares about doing a good job for the people and places in my community. When you work with me, you\'re working with me.',
      whyMePlaceholder: 'Meet Yecenia',
      whyMeBadge1: 'Bilingual — English & Spanish',
      whyMeBadge2: 'Locally based — Paso Robles & Morro Bay',
      whyMeBadge3: 'Registered & background-checked',

      // How It Works
      howTitle: 'Here\'s how it works',
      howStep1Title: 'Reach out',
      howStep1Desc: 'Send a message via WhatsApp, phone, or the form below. Tell me what you need.',
      howStep2Title: 'We talk it through',
      howStep2Desc: 'I\'ll ask a few questions so I understand exactly what would help you most.',
      howStep3Title: 'First visit or service',
      howStep3Desc: 'We schedule the first session — a tour, a care visit, or a rental walkthrough.',

      // Property Owners
      poLabel: 'For Property Owners',
      poTitle: 'Your rental deserves someone local who picks up the phone',
      poDesc: 'You can\'t always be on-site when something goes wrong between bookings. I live here. I speak Spanish and English, which matters for a growing number of your guests. And I actually respond — same day, every time.',
      poFeature1Title: 'Always reachable',
      poFeature1Desc: 'Same-day response, every time. No ticket systems, no hold music.',
      poFeature2Title: 'Truly local',
      poFeature2Desc: 'Based in Paso Robles and Morro Bay. I\'m 15 minutes away, not three hours.',
      poFeature3Title: 'Bilingual service',
      poFeature3Desc: 'Spanish-speaking guests feel welcomed and understood from the first message.',
      poCta: 'Message Yecenia about your rental',

      // Gallery
      galleryTitle: 'From the Central Coast',

      // Testimonials
      testimonialsTitle: 'What people are saying',
      testimonialsPlaceholder: 'Real client stories will be shared here soon. Yecenia values honest relationships — check back after our first sessions.',

      // Contact
      contactTitle: 'Let\'s talk',
      contactSubtitle: 'Whether you have a quick question or want to discuss ongoing help, I\'d love to hear from you.',
      formName: 'Your name',
      formNamePlaceholder: 'First name is fine',
      formContact: 'Best way to reach you',
      formContactPlaceholder: 'Phone, email, or WhatsApp number',
      formMessage: 'What do you need help with?',
      formMessagePlaceholder: 'Tell me a bit about what you\'re looking for...',
      formSubmit: 'Send message to Yecenia',
      formFallback: 'Or email directly',
      contactDirectTitle: 'Prefer to reach out directly?',
      contactWhatsappLabel: 'WhatsApp',
      contactWhatsappValue: 'Message Yecenia',
      contactPhoneLabel: 'Phone',
      contactPhoneValue: '(949) 795-5535',
      contactAreaTitle: 'Service area',

      // Mobile bar
      mobileWa: 'WhatsApp Yecenia',
      mobilePhone: 'Call',

      // Footer
      footerLegal: '© 2026 Yecenia Local. All rights reserved. Paso Robles, CA.',

      // Gallery items
      galleryItem1: '[ Real photo needed — Paso Robles downtown ]',
      galleryItem2: '[ Real photo needed — Morro Bay coastline ]',
      galleryItem3: '[ Real photo needed — Atascadero ]',
      galleryItem4: '[ Real photo needed — Tour in progress ]',
      galleryItem5: '[ Real photo needed — Local scenery ]',
      galleryItem6: '[ Real photo needed — Vacation rental interior ]',

      // Photo placeholders
      photoPlaceholderHero: '[ Full-bleed hero photo — replace with real Central Coast photo ]',
      photoPlaceholderYecenia: '[ Yecenia\'s photo — replace with real portrait ]',
      photoPlaceholderTours: 'Tour photo — coming soon',
      photoPlaceholderSenior: 'Senior care photo — coming soon',
      photoPlaceholderConcierge: 'Vacation rental photo — coming soon',
    },
    es: {
      // Nav
      navTours: 'Tours',
      navSenior: 'Adultos Mayores',
      navConcierge: 'Conserje',
      navAbout: 'Sobre mí',
      navContact: 'Contacto',

      // Hero
      heroTagline: 'Conserje de la Costa Central',
      heroTitle: 'Ayuda local en la que puedes confiar, de Paso Robles a Morro Bay.',
      heroSubtitle: 'Tours, acompañamiento para adultos mayores, y apoyo para rentas vacacionales — de una persona local que conoce esta costa de corazón.',
      selectorLabel: '¿Cómo te puedo ayudar?',
      selectorTours: 'Busco un tour local o traducción',
      selectorSenior: 'Necesito ayuda para cuidar a un familiar',
      selectorConcierge: 'Administro una renta vacacional',

      // Tours
      toursLabel: 'Tours y Servicios de Idioma',
      toursTitle: 'Conoce Paso Robles con ojos locales',
      toursDesc: 'Camina por el centro histórico con alguien que realmente vive aquí. Dirijo tours a pie en grupos pequeños en español e inglés, cubriendo las historias, sabores y rincones escondidos que las guías no mencionan. También ofrezco servicios de traducción e interpretación para visitantes, negocios y familias que necesitan apoyo bilingüe en la Costa Central.',
      toursCta: 'Pregunta por horarios de tours',
      toursBadge1: 'Tours bilingües',
      toursBadge2: 'Paso Robles y Atascadero',

      // Senior Care
      seniorLabel: 'Acompañamiento para Adultos Mayores',
      seniorTitle: 'Una cara familiar para tu ser querido en Morro Bay',
      seniorDesc: 'A veces lo único que alguien necesita es compañía — una comida casera, un viaje al doctor, alguien con quien sentarse en el porche a ver el mar. Ofrezco acompañamiento, limpieza ligera, cocina y transporte para adultos mayores en Morro Bay y alrededores.',
      seniorCta: 'Pregunta sobre cuidado de adultos mayores',
      seniorBadge1: 'Registrada con el Registro de Asistentes de Cuidado en el Hogar de California',
      seniorBadge2: 'Área de Morro Bay',

      // Concierge
      conciergeLabel: 'Conserje y Rotación',
      conciergeTitle: 'Tu renta vacacional funciona sola — porque alguien local la cuida',
      conciergeDesc: 'Check-in de huéspedes, limpieza entre estadías, reabastecimiento y coordinación. Trabajo con propietarios en Paso Robles/Atascadero y Morro Bay para que sus rentas funcionen sin problemas, sin que tengan que estar presentes para cada detalle.',
      conciergeCta: 'Pide una cotización de limpieza',
      conciergeBadge1: 'Paso Robles y Morro Bay',
      conciergeBadge2: 'Respuesta el mismo día',

      // Why Me
      whyMeTitle: '¿Por qué yo? Porque realmente vivo aquí.',
      whyMeText: 'Me mudé a la Costa Central porque me enamoré de la tierra, la gente y el ritmo de vida. No soy una agencia ni una franquicia — soy una persona que se preocupa por hacer un buen trabajo para las personas y los lugares de mi comunidad. Cuando trabajas conmigo, trabajas conmigo.',
      whyMePlaceholder: 'Conoce a Yecenia',
      whyMeBadge1: 'Bilingüe — Inglés y Español',
      whyMeBadge2: 'Local — Paso Robles y Morro Bay',
      whyMeBadge3: 'Registrada y verificada',

      // How It Works
      howTitle: 'Así funciona',
      howStep1Title: 'Escríbeme',
      howStep1Desc: 'Envía un mensaje por WhatsApp, teléfono o el formulario. Cuéntame qué necesitas.',
      howStep2Title: 'Platicamos',
      howStep2Desc: 'Te hago algunas preguntas para entender exactamente cómo puedo ayudarte.',
      howStep3Title: 'Primera visita o servicio',
      howStep3Desc: 'Agendamos la primera sesión — un tour, una visita de cuidado, o un recorrido de la renta.',

      // Property Owners
      poLabel: 'Para Propietarios',
      poTitle: 'Tu renta merece a alguien local que conteste el teléfono',
      poDesc: 'No siempre puedes estar presente cuando algo sale mal entre reservaciones. Yo vivo aquí. Hablo español e inglés, lo cual importa para un número creciente de tus huéspedes. Y realmente respondo — el mismo día, siempre.',
      poFeature1Title: 'Siempre disponible',
      poFeature1Desc: 'Respuesta el mismo día, siempre. Sin sistemas de tickets ni música de espera.',
      poFeature2Title: 'Verdaderamente local',
      poFeature2Desc: 'Basada en Paso Robles y Morro Bay. Estoy a 15 minutos, no a tres horas.',
      poFeature3Title: 'Servicio bilingüe',
      poFeature3Desc: 'Los huéspedes que hablan español se sienten bienvenidos desde el primer mensaje.',
      poCta: 'Escríbele a Yecenia sobre tu renta',

      // Gallery
      galleryTitle: 'Desde la Costa Central',

      // Testimonials
      testimonialsTitle: 'Lo que dice la gente',
      testimonialsPlaceholder: 'Próximamente se compartirán historias reales de clientes aquí. Yecenia valora las relaciones honestas — regrese después de nuestras primeras sesiones.',

      // Contact
      contactTitle: 'Hablemos',
      contactSubtitle: 'Ya sea que tengas una pregunta rápida o quieras hablar sobre ayuda continua, me encantaría saber de ti.',
      formName: 'Tu nombre',
      formNamePlaceholder: 'El primer nombre está bien',
      formContact: 'Mejor forma de contactarte',
      formContactPlaceholder: 'Teléfono, email o número de WhatsApp',
      formMessage: '¿Con qué necesitas ayuda?',
      formMessagePlaceholder: 'Cuéntame un poco sobre lo que estás buscando...',
      formSubmit: 'Enviar mensaje a Yecenia',
      formFallback: 'O escribe directamente',
      contactDirectTitle: '¿Prefieres contactarme directamente?',
      contactWhatsappLabel: 'WhatsApp',
      contactWhatsappValue: 'Escríbele a Yecenia',
      contactPhoneLabel: 'Teléfono',
      contactPhoneValue: '(949) 795-5535',
      contactAreaTitle: 'Área de servicio',

      // Mobile bar
      mobileWa: 'WhatsApp a Yecenia',
      mobilePhone: 'Llamar',

      // Footer
      footerLegal: '© 2026 Yecenia Local. Todos los derechos reservados. Paso Robles, CA.',

      // Gallery items
      galleryItem1: '[ Foto real necesaria — Centro de Paso Robles ]',
      galleryItem2: '[ Foto real necesaria — Costa de Morro Bay ]',
      galleryItem3: '[ Foto real necesaria — Atascadero ]',
      galleryItem4: '[ Foto real necesaria — Tour en progreso ]',
      galleryItem5: '[ Foto real necesaria — Paisaje local ]',
      galleryItem6: '[ Foto real necesaria — Interior de renta vacacional ]',

      // Photo placeholders
      photoPlaceholderHero: '[ Foto hero de ancho completo — reemplazar con foto real de la Costa Central ]',
      photoPlaceholderYecenia: '[ Foto de Yecenia — reemplazar con retrato real ]',
      photoPlaceholderTours: 'Foto del tour — próximamente',
      photoPlaceholderSenior: 'Foto de cuidado de adultos mayores — próximamente',
      photoPlaceholderConcierge: 'Foto de renta vacacional — próximamente',
    }
  };

  let currentLang = 'en';

  /* ----------------------------------------------------------
     2. LANGUAGE TOGGLE
  ---------------------------------------------------------- */
  function setLanguage(lang) {
    currentLang = lang;
    const t = content[lang];

    // Update all elements with data-i18n attribute
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (t[key] !== undefined) {
        if (el.tagName === 'INPUT' || el.tagName === 'TEXTAREA') {
          if (el.getAttribute('data-i18n-attr') === 'placeholder') {
            el.placeholder = t[key];
          } else {
            el.value = t[key];
          }
        } else if (el.tagName === 'OPTION' || el.getAttribute('data-i18n-attr') === 'label') {
          // for labels on inputs
          el.textContent = t[key];
        } else {
          el.textContent = t[key];
        }
      }
    });

    // Toggle active state on language buttons
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
      btn.setAttribute('aria-pressed', btn.getAttribute('data-lang') === lang);
    });

    // Update html lang attribute
    document.documentElement.lang = lang;
  }

  /* ----------------------------------------------------------
     3. HEADER SCROLL STATE
  ---------------------------------------------------------- */
  function initHeaderScroll() {
    const header = document.querySelector('.site-header');
    if (!header) return;

    let ticking = false;
    window.addEventListener('scroll', () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          header.classList.toggle('scrolled', window.scrollY > 60);
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  /* ----------------------------------------------------------
     4. MOBILE NAV
  ---------------------------------------------------------- */
  function initMobileNav() {
    const toggle = document.querySelector('.nav__mobile-toggle');
    const links = document.querySelector('.nav__links');
    const overlay = document.querySelector('.nav__overlay');
    if (!toggle || !links) return;

    function closeNav() {
      links.classList.remove('open');
      if (overlay) overlay.classList.remove('open');
      toggle.setAttribute('aria-expanded', 'false');
    }

    toggle.addEventListener('click', () => {
      const isOpen = links.classList.toggle('open');
      if (overlay) overlay.classList.toggle('open', isOpen);
      toggle.setAttribute('aria-expanded', isOpen);
    });

    if (overlay) overlay.addEventListener('click', closeNav);

    // Close on link click
    links.querySelectorAll('a').forEach(a => {
      a.addEventListener('click', closeNav);
    });

    // Close on Escape
    document.addEventListener('keydown', e => {
      if (e.key === 'Escape') closeNav();
    });
  }

  /* ----------------------------------------------------------
     5. MOBILE BOTTOM BAR DISMISS
  ---------------------------------------------------------- */
  function initMobileBar() {
    const bar = document.querySelector('.mobile-bar');
    const dismiss = document.querySelector('.mobile-bar__dismiss');
    if (!bar || !dismiss) return;

    dismiss.addEventListener('click', () => {
      bar.classList.add('dismissed');
      document.body.classList.add('mobile-bar-dismissed');
    });
  }

  /* ----------------------------------------------------------
     6. SVG ROUTE LINE ANIMATION
  ---------------------------------------------------------- */
  function initRouteAnimation() {
    const line = document.querySelector('.route-main-line');
    const pins = document.querySelectorAll('.route-pin');
    if (!line) return;

    // Check prefers-reduced-motion
    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    if (prefersReduced) {
      // Show everything immediately
      line.classList.add('drawn');
      pins.forEach(pin => pin.classList.add('visible'));
      return;
    }

    // Get line length
    const lineLength = line.getTotalLength();
    line.style.setProperty('--line-length', lineLength);
    line.style.strokeDasharray = lineLength;
    line.style.strokeDashoffset = lineLength;

    // IntersectionObserver for line draw
    const lineObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            line.classList.add('drawn');
            line.style.strokeDashoffset = '0';
            lineObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );

    // Observe the SVG container
    const svgContainer = line.closest('svg');
    if (svgContainer) lineObserver.observe(svgContainer);

    // IntersectionObserver for pins
    const pinObserver = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            pinObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    pins.forEach(pin => pinObserver.observe(pin));
  }

  /* ----------------------------------------------------------
     6b. SCROLL REVEAL (generic — fades/rises content blocks in
         as they enter the viewport; reuses the same pattern as
         the route-line pins)
  ---------------------------------------------------------- */
  function initScrollReveal() {
    const targets = document.querySelectorAll('.reveal');
    if (!targets.length) return;

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      targets.forEach(el => el.classList.add('is-visible'));
      return;
    }

    const observer = new IntersectionObserver(
      entries => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    targets.forEach(el => observer.observe(el));
  }

  /* ----------------------------------------------------------
     7. CONTACT FORM (Formspree fallback)
  ---------------------------------------------------------- */
  function initContactForm() {
    const form = document.getElementById('contact-form');
    if (!form) return;

    form.addEventListener('submit', async (e) => {
      e.preventDefault();

      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.textContent;
      submitBtn.disabled = true;
      submitBtn.textContent = currentLang === 'es' ? 'Enviando...' : 'Sending...';

      const formData = new FormData(form);

      try {
        // Try Formspree — replace YOUR_FORM_ID with actual ID
        const response = await fetch(form.action, {
          method: 'POST',
          body: formData,
          headers: { Accept: 'application/json' }
        });

        if (response.ok) {
          submitBtn.textContent = currentLang === 'es' ? '¡Mensaje enviado!' : 'Message sent!';
          form.reset();
          setTimeout(() => {
            submitBtn.textContent = originalText;
            submitBtn.disabled = false;
          }, 3000);
        } else {
          throw new Error('Form submission failed');
        }
      } catch (_err) {
        // Fallback to mailto
        const name = formData.get('name') || '';
        const contact = formData.get('contact') || '';
        const message = formData.get('message') || '';
        const subject = encodeURIComponent('Message from ' + name);
        const body = encodeURIComponent(
          'Name: ' + name + '\nContact: ' + contact + '\n\n' + message
        );
        window.location.href = 'mailto:hello@yecenialocal.com?subject=' + subject + '&body=' + body;

        submitBtn.textContent = originalText;
        submitBtn.disabled = false;
      }
    });
  }

  /* ----------------------------------------------------------
     8. SMOOTH SCROLL FOR ANCHOR LINKS
  ---------------------------------------------------------- */
  function initSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(link => {
      link.addEventListener('click', e => {
        const target = document.querySelector(link.getAttribute('href'));
        if (target) {
          e.preventDefault();
          target.scrollIntoView({ behavior: 'smooth', block: 'start' });
          // Set focus for accessibility
          target.setAttribute('tabindex', '-1');
          target.focus({ preventScroll: true });
        }
      });
    });
  }


  /* ----------------------------------------------------------
     8b. GALLERY CARD ROTATING BORDER HOVER ANIMATION
  ---------------------------------------------------------- */
  function initGalleryHover() {
    const galleryItems = document.querySelectorAll('.gallery__item--photo');
    galleryItems.forEach(item => {
      item.addEventListener('mousemove', e => {
        const rect = item.getBoundingClientRect();
        const x = e.clientX - rect.left - rect.width / 2;
        const y = e.clientY - rect.top - rect.height / 2;
        const angle = Math.atan2(y, x);
        item.style.setProperty('--rotation', angle + 'rad');
      });

      item.addEventListener('mouseleave', () => {
        item.style.setProperty('--rotation', '0deg');
      });
    });
  }

  /* ----------------------------------------------------------
     9. INIT
  ---------------------------------------------------------- */
  function init() {
    initHeaderScroll();
    initMobileNav();
    initMobileBar();
    initRouteAnimation();
    initScrollReveal();
    initContactForm();
    initSmoothScroll();
    initGalleryHover();

    // Language toggle buttons
    document.querySelectorAll('.lang-toggle button').forEach(btn => {
      btn.addEventListener('click', () => {
        setLanguage(btn.getAttribute('data-lang'));
      });
    });

    // Set initial language
    setLanguage('en');
  }

  // Run on DOM ready
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
