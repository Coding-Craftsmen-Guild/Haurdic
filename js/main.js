// ============================================
// HAURDIĆ – The Furniture Company
// Main interactive behaviors (vanilla JS)
// ============================================

(function () {
  'use strict';

  // --- Language / i18n ----------------------------------------------------
  const translations = {
    en: {
      'nav-about': 'About',
      'nav-services': 'Expertise',
      'nav-process': 'Process',
      'nav-projects': 'Work',
      'nav-contact': 'Contact',
      'nav-quote': 'Request Quote',

      'hero-eyebrow': 'EST. 1966 • SLAVONSKI BROD',
      'hero-title': 'Crafted with three generations of mastery.',
      'hero-subtitle': 'Bespoke upholstered furniture and complete interior solutions. Every piece made by hand in our family workshop in Croatia.',
      'hero-cta-primary': 'Explore Our Work',
      'hero-cta-secondary': 'Request a Consultation',

      'stats-years': 'Years of Tradition',
      'stats-projects': 'Projects Delivered',
      'stats-artisans': 'Master Artisans',
      'stats-generations': 'Generations',

      'about-eyebrow': 'OUR LEGACY',
      'about-title': 'A family promise, kept for nearly six decades.',
      'about-p1': 'Since 1966, the Haurdić name has stood for uncompromising quality in custom furniture. What began as a small workshop founded by our grandfather has become a modern atelier run by the third generation — still guided by the same values: patience, precision, and deep respect for the craft.',
      'about-p2': 'Today our team of 13 artisans works with Europe’s finest materials — Italian velvets and leathers, responsibly sourced solid woods, and high-performance foams — to create furniture that lasts generations. We treat every commission as a personal promise.',
      'about-stat-1': 'Client satisfaction is our daily standard.',
      'about-stat-2': 'Of projects delivered on or before the agreed date.',
      'about-cta': 'Meet our process',

      'services-eyebrow': 'WHAT WE CREATE',
      'services-title': 'Expertise across every scale.',
      'services-subtitle': 'From intimate residential pieces to complete hospitality fit-outs, we bring the same obsessive attention to detail.',

      'process-eyebrow': 'HOW WE WORK',
      'process-title': 'From first conversation to white-glove delivery.',
      'process-1-title': 'Discovery',
      'process-1-desc': 'We listen. Every space, every family, every business has its own rhythm. We visit the site, understand your vision, and translate it into clear requirements.',
      'process-2-title': 'Design & Visualization',
      'process-2-desc': 'Our designers create detailed drawings and 3D visualizations. You approve proportions, comfort, and materials before a single frame is cut.',
      'process-3-title': 'Material Curation',
      'process-3-desc': 'We source only the best: top-grain leathers, performance velvets, solid hardwood frames. You receive physical samples and make the final choices.',
      'process-4-title': 'Masterful Craftsmanship',
      'process-4-desc': 'In our Slavonski Brod workshop, master upholsterers and cabinetmakers spend weeks on each piece. Every stitch, joint, and curve is inspected by hand.',
      'process-5-title': 'White-Glove Delivery',
      'process-5-desc': 'White-glove installation by our own team. We place every piece, adjust, and ensure it feels perfect in your space. Then we leave you with care instructions for a lifetime.',

      'projects-eyebrow': 'SELECTED WORK',
      'projects-title': 'Spaces we have shaped.',
      'projects-subtitle': 'A selection of hospitality, residential, and commercial projects across Croatia. Each one tells a story of collaboration and craft.',
      'projects-filter-all': 'All Projects',
      'projects-filter-hospitality': 'Hospitality',
      'projects-filter-residential': 'Residential',
      'projects-filter-commercial': 'Commercial',
      'projects-cta': 'Request a similar project',

      'craft-eyebrow': 'THE HAURDIĆ STANDARD',
      'craft-title': 'Materials &amp; mastery you can feel.',
      'craft-p': 'We believe the best furniture begins long before the first cut. That is why we travel Europe to select the finest hides, the most durable performance fabrics, and timber from sustainably managed forests. Our frames are built to outlast us all.',

      'testimonials-eyebrow': 'WHAT OUR CLIENTS SAY',
      'testimonials-title': 'The best measure of our work is the people who live with it every day.',

      'video-eyebrow': 'INSIDE THE WORKSHOP',
      'video-title': 'Watch the craft.',
      'video-desc': 'A short film showing how a Haurdić piece comes to life — from raw frame to finished masterpiece.',

      'contact-eyebrow': 'LET’S BEGIN',
      'contact-title': 'Tell us about your project.',
      'contact-subtitle': 'Whether you need a single statement sofa or furniture for an entire hotel, we would love to hear from you. We respond within 24 hours.',
      'contact-form-name': 'Full name',
      'contact-form-email': 'Email address',
      'contact-form-phone': 'Phone number',
      'contact-form-type': 'Type of project',
      'contact-form-type-placeholder': 'Select project type',
      'contact-form-type-residential': 'Residential',
      'contact-form-type-hospitality': 'Hospitality / Commercial',
      'contact-form-type-reupholstery': 'Reupholstery &amp; Restoration',
      'contact-form-type-other': 'Other / Consultation',
      'contact-form-budget': 'Approximate budget',
      'contact-form-budget-placeholder': 'Select range (EUR)',
      'contact-form-message': 'Tell us more about your project or needs',
      'contact-form-submit': 'Send Inquiry',
      'contact-direct': 'Prefer to talk?',
      'contact-phone': '+385 98 990 7117',
      'contact-email': 'teo@haurdic.com',
      'contact-address': 'Dr. Andrije Štampara 49, 35000 Slavonski Brod, Croatia',
      'contact-hours': 'Workshop visits by appointment only',

      'footer-tagline': 'Handcrafted in Slavonski Brod since 1966.',
      'footer-rights': 'All rights reserved.'
    },

    hr: {
      'nav-about': 'O nama',
      'nav-services': 'Stručnost',
      'nav-process': 'Proces',
      'nav-projects': 'Radovi',
      'nav-contact': 'Kontakt',
      'nav-quote': 'Zatraži ponudu',

      'hero-eyebrow': 'OSN. 1966. • SLAVONSKI BROD',
      'hero-title': 'Izrađeno s majstorstvom triju generacija.',
      'hero-subtitle': 'Namještaj po mjeri i cjelovita rješenja interijera. Svaki komad izrađen rukom u našoj obiteljskoj radionici u Hrvatskoj.',
      'hero-cta-primary': 'Istražite naše radove',
      'hero-cta-secondary': 'Zatražite konzultaciju',

      'stats-years': 'Godina tradicije',
      'stats-projects': 'Realiziranih projekata',
      'stats-artisans': 'Majstora zanata',
      'stats-generations': 'Generacije',

      'about-eyebrow': 'NAŠA BAŠTINA',
      'about-title': 'Obiteljsko obećanje, održano gotovo šest desetljeća.',
      'about-p1': 'Od 1966. ime Haurdić predstavlja neupitnu kvalitetu u izradi namještaja po mjeri. Ono što je započelo kao mala radionica našeg djeda danas je suvremeni atelier kojim upravlja treća generacija — vođena istim vrijednostima: strpljenjem, preciznošću i dubokim poštovanjem prema zanatu.',
      'about-p2': 'Danas naš tim od 13 obrtnika radi s najfinijim europskim materijalima — talijanskim baršunima i kožama, održivo dobavljenim masivnim drvom i visokokvalitetnim pjenama — kako bismo stvorili namještaj koji traje generacijama. Svaki projekt tretiramo kao osobno obećanje.',
      'about-stat-1': 'Zadovoljstvo klijenata naš je svakodnevni standard.',
      'about-stat-2': 'Projekata isporučeno na vrijeme ili ranije.',
      'about-cta': 'Upoznajte naš proces',

      'services-eyebrow': 'ŠTO STVARAJMO',
      'services-title': 'Stručnost u svakom mjerilu.',
      'services-subtitle': 'Od intimnih rezidencijalnih komada do cjelovitih ugostiteljskih projekata — isti opsesivni odnos prema detalju.',

      'process-eyebrow': 'KAKO RADIMO',
      'process-title': 'Od prvog razgovora do dostave s bijelim rukavicama.',
      'process-1-title': 'Otkriće',
      'process-1-desc': 'Slušamo. Svaki prostor, svaka obitelj, svaki posao ima svoj ritam. Posjećujemo lokaciju, razumijemo vašu viziju i prevodimo je u jasne zahtjeve.',
      'process-2-title': 'Dizajn i vizualizacija',
      'process-2-desc': 'Naši dizajneri izrađuju detaljne crteže i 3D vizualizacije. Odobravate proporcije, udobnost i materijale prije nego što se prvi okvir izreže.',
      'process-3-title': 'Odabir materijala',
      'process-3-desc': 'Nabavljamo samo najbolje: kože vrhunske kvalitete, performance baršune, okvire od masivnog drva. Primite fizičke uzorke i donesite konačne odluke.',
      'process-4-title': 'Majstorska izrada',
      'process-4-desc': 'U našoj radionici u Slavonskom Brodu majstori tapeceri i stolari tjednima rade na svakom komadu. Svaki šav, spoj i zakrivljenost provjerava se ručno.',
      'process-5-title': 'Dostava s bijelim rukavicama',
      'process-5-desc': 'Dostava s bijelim rukavicama od strane našeg tima. Postavljamo svaki komad, podešavamo i osiguravamo da savršeno stoji u vašem prostoru. Ostavljamo vam upute za njegu za cijeli život.',

      'projects-eyebrow': 'ODABRANI RADOVI',
      'projects-title': 'Prostori koje smo oblikovali.',
      'projects-subtitle': 'Izbor ugostiteljskih, rezidencijalnih i komercijalnih projekata diljem Hrvatske. Svaki priča priču o suradnji i zanatu.',
      'projects-filter-all': 'Svi projekti',
      'projects-filter-hospitality': 'Ugostiteljstvo',
      'projects-filter-residential': 'Rezidencijalno',
      'projects-filter-commercial': 'Komercijalno',
      'projects-cta': 'Zatraži sličan projekt',

      'craft-eyebrow': 'HAURDIĆ STANDARD',
      'craft-title': 'Materijali i majstorstvo koje osjećate.',
      'craft-p': 'Vjerujemo da najbolji namještaj počinje puno prije prvog reza. Zato putujemo Europom kako bismo odabrali najbolje kože, najizdržljivije performance tkanine i drvo iz održivo upravljanih šuma. Naši okviri građeni su da nas nadžive.',

      'testimonials-eyebrow': 'ŠTO KAŽU NAŠI KLIJENTI',
      'testimonials-title': 'Najbolja mjera našeg rada su ljudi koji s njim žive svaki dan.',

      'video-eyebrow': 'UNUTAR RADIONICE',
      'video-title': 'Pogledajte zanat.',
      'video-desc': 'Kratki film koji pokazuje kako Haurdićev komad oživljava — od sirovog okvira do gotovog remek-djela.',

      'contact-eyebrow': 'POČNIMO',
      'contact-title': 'Recite nam o svom projektu.',
      'contact-subtitle': 'Bilo da trebate jednu statement sofu ili namještaj za cijeli hotel — rado bismo vas čuli. Odgovaramo u roku od 24 sata.',
      'contact-form-name': 'Ime i prezime',
      'contact-form-email': 'E-mail adresa',
      'contact-form-phone': 'Broj telefona',
      'contact-form-type': 'Vrsta projekta',
      'contact-form-type-placeholder': 'Odaberite vrstu projekta',
      'contact-form-type-residential': 'Rezidencijalno',
      'contact-form-type-hospitality': 'Ugostiteljstvo / Komercijalno',
      'contact-form-type-reupholstery': 'Presvlačenje i restauracija',
      'contact-form-type-other': 'Ostalo / Konzultacija',
      'contact-form-budget': 'Približan budžet',
      'contact-form-budget-placeholder': 'Odaberite raspon (EUR)',
      'contact-form-message': 'Recite nam više o projektu ili potrebama',
      'contact-form-submit': 'Pošalji upit',
      'contact-direct': 'Radije biste razgovarali?',
      'contact-phone': '+385 98 990 7117',
      'contact-email': 'teo@haurdic.com',
      'contact-address': 'Dr. Andrije Štampara 49, 35000 Slavonski Brod, Hrvatska',
      'contact-hours': 'Posjeti radionici isključivo po dogovoru',

      'footer-tagline': 'Ručno izrađeno u Slavonskom Brodu od 1966.',
      'footer-rights': 'Sva prava pridržana.'
    }
  };

  let currentLang = localStorage.getItem('haurdic_lang') || 'en';

  function applyTranslations(lang) {
    currentLang = lang;
    localStorage.setItem('haurdic_lang', lang);

    // Update all elements with data-i18n
    document.querySelectorAll('[data-i18n]').forEach(el => {
      const key = el.getAttribute('data-i18n');
      if (translations[lang] && translations[lang][key]) {
        el.innerHTML = translations[lang][key];
      }
    });

    // Update lang switch buttons
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.classList.toggle('active', btn.dataset.lang === lang);
    });

    // Re-render dynamic content
    if (window.renderProjects) window.renderProjects();
    if (window.renderTestimonials) window.renderTestimonials();
  }

  // --- Project Data & Rendering ------------------------------------------
  let currentFilter = 'all';
  let currentProjectModal = null;
  let currentProjectList = [];
  let currentProjectIndex = 0;
  const LOREM = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.';

  function imgSrc(img) {
    return /^https?:\/\//.test(img) ? img : 'assets/images/' + img;
  }

  function renderProjects(filter = 'all') {
    const container = document.getElementById('projects-grid');
    if (!container || !window.HAURDIC_PROJECTS) return;

    currentFilter = filter;
    container.innerHTML = '';

    const projects = window.HAURDIC_PROJECTS.filter(p =>
      filter === 'all' || p.category === filter
    );

    currentProjectList = projects;
    const ASPECTS = ['aspect-[4/5]', 'aspect-[1/1]', 'aspect-[3/4]', 'aspect-[5/4]', 'aspect-[4/5]', 'aspect-[1/1]'];
    projects.forEach((project, idx) => {
      const title = currentLang === 'hr' ? project.title_hr : project.title_en;
      const location = currentLang === 'hr' ? project.location_hr : project.location_en;
      const client = currentLang === 'hr' ? project.client_hr : project.client_en;

      const card = document.createElement('div');
      card.className = 'project-card group relative mb-5 break-inside-avoid rounded-2xl overflow-hidden cursor-pointer bg-white/5 ' + ASPECTS[idx % ASPECTS.length];
      card.innerHTML = `
        <img src="${imgSrc(project.images[0])}" alt="${title}" loading="lazy" style="opacity:0;transition:opacity .6s ease" onload="this.style.opacity=1" class="absolute inset-0 w-full h-full object-cover">
        <div class="absolute top-4 left-4 z-10 flex gap-2">
          <span class="px-3 py-1 rounded-full bg-ink/65 backdrop-blur text-white text-[10px] font-medium tracking-[1.5px]">${project.category.toUpperCase()}</span>
        </div>
        <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent"></div>
        <div class="absolute inset-x-0 bottom-0 p-5 flex items-end justify-between gap-3">
          <div class="min-w-0">
            <div class="text-[10px] tracking-[2px] uppercase text-white/65 mb-1 truncate">${location}</div>
            <h3 class="font-serif text-white text-lg md:text-xl leading-snug">${title}</h3>
          </div>
          <span class="shrink-0 inline-flex items-center gap-1 text-[10px] tracking-[1.5px] text-white/75 group-hover:text-brass transition-colors">
            VIEW
            <svg xmlns="http://www.w3.org/2000/svg" class="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M9 5l7 7-7 7" /></svg>
          </span>
        </div>
      `;

      card.addEventListener('click', () => openProjectModal(project));
      container.appendChild(card);
    });
  }

  function setupProjectFilters() {
    const buttons = document.querySelectorAll('.filter-btn');
    buttons.forEach(btn => {
      btn.addEventListener('click', () => {
        buttons.forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
        const filter = btn.dataset.filter;
        renderProjects(filter);
      });
    });
  }

  function openProjectModal(project) {
    currentProjectModal = project;
    currentProjectIndex = currentProjectList.indexOf(project);

    const modal = document.getElementById('project-modal');
    const titleEl = document.getElementById('modal-title');
    const metaEl = document.getElementById('modal-meta');
    const descEl = document.getElementById('modal-desc');
    const scopeEl = document.getElementById('modal-scope');
    const imagesEl = document.getElementById('modal-images');

    const title = currentLang === 'hr' ? project.title_hr : project.title_en;
    const client = currentLang === 'hr' ? project.client_hr : project.client_en;
    const location = currentLang === 'hr' ? project.location_hr : project.location_en;
    const desc = currentLang === 'hr' ? project.desc_hr : project.desc_en;
    const scope = currentLang === 'hr' ? project.scope_hr : project.scope_en;

    titleEl.textContent = title;
    metaEl.innerHTML = `
      <span class="font-medium capitalize">${project.category}</span> 
      <span class="text-brass">•</span> 
      ${location} 
      <span class="text-brass">•</span> 
      ${project.pm}
    `;
    descEl.textContent = (desc && desc.trim()) ? desc : LOREM;



    // Images
    imagesEl.innerHTML = '';
    project.images.forEach((img, idx) => {
      const wrapper = document.createElement('div');
      wrapper.className = 'mb-3 break-inside-avoid rounded-xl overflow-hidden cursor-pointer bg-white/5';
      wrapper.innerHTML = '<img src="' + imgSrc(img) + '" alt="' + title + ' ' + (idx + 1) + '" loading="lazy" style="opacity:0;transition:opacity .5s ease" onload="this.style.opacity=1" class="w-full h-auto block hover:scale-105 transition-transform duration-700">';
      wrapper.addEventListener('click', () => openLightbox(project.images, idx));
      imagesEl.appendChild(wrapper);
    });

    modal.classList.remove('hidden');
    modal.classList.add('flex');
    document.body.style.overflow = 'hidden';
  }

  function gotoProject(dir) {
    if (!currentProjectList.length) return;
    currentProjectIndex = (currentProjectIndex + dir + currentProjectList.length) % currentProjectList.length;
    openProjectModal(currentProjectList[currentProjectIndex]);
  }

  function closeProjectModal() {
    const modal = document.getElementById('project-modal');
    modal.classList.add('hidden');
    modal.classList.remove('flex');
    document.body.style.overflow = '';
  }

  // --- Lightbox ------------------------------------------------------------
  let lightboxIndex = 0;
  let lightboxImages = [];

  function openLightbox(images, startIndex = 0) {
    lightboxImages = images;
    lightboxIndex = startIndex;

    const lb = document.getElementById('lightbox');
    const img = document.getElementById('lightbox-image');

    img.src = imgSrc(images[startIndex]);
    lb.classList.remove('hidden');
    lb.classList.add('flex');
    document.body.style.overflow = 'hidden';

    // Keyboard support
    document.onkeydown = function (e) {
      if (e.key === 'Escape') closeLightbox();
      if (e.key === 'ArrowRight') nextLightboxImage();
      if (e.key === 'ArrowLeft') prevLightboxImage();
    };
  }

  function closeLightbox() {
    const lb = document.getElementById('lightbox');
    lb.classList.add('hidden');
    lb.classList.remove('flex');
    document.body.style.overflow = '';
    document.onkeydown = null;
  }

  function nextLightboxImage() {
    lightboxIndex = (lightboxIndex + 1) % lightboxImages.length;
    document.getElementById('lightbox-image').src = imgSrc(lightboxImages[lightboxIndex]);
  }

  function prevLightboxImage() {
    lightboxIndex = (lightboxIndex - 1 + lightboxImages.length) % lightboxImages.length;
    document.getElementById('lightbox-image').src = imgSrc(lightboxImages[lightboxIndex]);
  }

  // --- Testimonials --------------------------------------------------------
  function renderTestimonials() {
    const container = document.getElementById('testimonials-grid');
    if (!container || !window.HAURDIC_TESTIMONIALS) return;

    container.innerHTML = '';

    window.HAURDIC_TESTIMONIALS.forEach(function (t) {
      const quote = currentLang === 'hr' ? t.quote_hr : t.quote_en;
      const name = currentLang === 'hr' ? t.name_hr : t.name_en;
      const role = currentLang === 'hr' ? t.role_hr : t.role_en;

      const slide = document.createElement('div');
      slide.className = 'testi-slide';
      slide.innerHTML = '<div class="bg-white border border-line rounded-2xl p-8 relative flex flex-col h-full">'
        + '<div class="quote text-ink flex-1"><p class="text-[15px] leading-relaxed text-cocoa relative z-10">' + quote + '</p></div>'
        + '<div class="mt-8 pt-6 border-t border-line"><div class="font-medium text-ink">' + name + '</div>'
        + '<div class="text-xs text-bronze mt-0.5">' + role + ' \u2022 ' + t.location + '</div></div>'
        + '</div>';
      container.appendChild(slide);
    });
  }

  function setupTestimonialCarousel() {
    const track = document.getElementById('testimonials-grid');
    if (!track) return;
    const dotsWrap = document.getElementById('testi-dots');
    const nextBtn = document.getElementById('testi-next');
    const prevBtn = document.getElementById('testi-prev');
    let index = 0, timer = null;
    function visible() { return window.innerWidth >= 1024 ? 3 : (window.innerWidth >= 768 ? 2 : 1); }
    function maxIndex() { return Math.max(0, track.children.length - visible()); }
    function updateDots() {
      if (!dotsWrap) return;
      dotsWrap.innerHTML = '';
      const pages = maxIndex() + 1;
      for (let p = 0; p < pages; p++) {
        const d = document.createElement('button');
        d.className = 'testi-dot' + (p === index ? ' is-active' : '');
        d.setAttribute('aria-label', 'Go to slide ' + (p + 1));
        (function (pp) { d.addEventListener('click', function () { go(pp); restart(); }); })(p);
        dotsWrap.appendChild(d);
      }
    }
    function go(i) {
      const mx = maxIndex();
      index = i > mx ? 0 : (i < 0 ? mx : i);
      track.style.transform = 'translateX(' + (-index * (100 / visible())) + '%)';
      updateDots();
    }
    function restart() { clearInterval(timer); timer = setInterval(function () { go(index + 1); }, 5000); }
    if (nextBtn) nextBtn.addEventListener('click', function () { go(index + 1); restart(); });
    if (prevBtn) prevBtn.addEventListener('click', function () { go(index - 1); restart(); });
    window.addEventListener('resize', function () { go(Math.min(index, maxIndex())); });
    const wrap = track.parentElement;
    if (wrap) {
      wrap.addEventListener('mouseenter', function () { clearInterval(timer); });
      wrap.addEventListener('mouseleave', restart);
    }
    go(0);
    restart();
  }

  // --- Animated Counters ---------------------------------------------------
  function animateCounters() {
    if (window.__countersRan) return;
    window.__countersRan = true;
    const counters = document.querySelectorAll('.stat-number');
    const duration = 1600;

    counters.forEach(counter => {
      const target = parseInt(counter.getAttribute('data-target'), 10);
      const isPlus = counter.getAttribute('data-plus') === 'true';
      let start = 0;
      const increment = Math.ceil(target / (duration / 16));

      const timer = setInterval(() => {
        start += increment;
        if (start >= target) {
          counter.textContent = target + (isPlus ? '+' : '');
          clearInterval(timer);
        } else {
          counter.textContent = start + (isPlus ? '+' : '');
        }
      }, 16);
    });
  }

  function setupCounters() {
    const section = document.getElementById('stats-section');
    if (!section) return;

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          animateCounters();
          observer.disconnect();
        }
      });
    }, { threshold: 0.15 });

    observer.observe(section);
    // hero stats sit above the fold — run on load too
    setTimeout(function () {
      const r = section.getBoundingClientRect();
      if (r.top < window.innerHeight && r.bottom > 0) animateCounters();
    }, 700);
  }

  // --- Mobile Menu ---------------------------------------------------------
  function setupMobileMenu() {
    const btn = document.getElementById('mobile-menu-btn');
    const menu = document.getElementById('mobile-menu');

    if (!btn || !menu) return;

    btn.addEventListener('click', () => {
      const isOpen = !menu.classList.contains('hidden');
      if (isOpen) {
        menu.classList.add('hidden');
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
      } else {
        menu.classList.remove('hidden');
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2.5" d="M6 18L18 6M6 6l12 12" /></svg>`;
      }
    });

    // Close on nav click
    menu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        menu.classList.add('hidden');
        btn.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" /></svg>`;
      });
    });
  }

  // --- Contact Form --------------------------------------------------------
  function setupContactForm() {
    const form = document.getElementById('contact-form');
    const success = document.getElementById('form-success');

    if (!form) return;

    form.addEventListener('submit', function (e) {
      e.preventDefault();

      // Simulate sending
      const submitBtn = form.querySelector('button[type="submit"]');
      const originalText = submitBtn.innerHTML;

      submitBtn.disabled = true;
      submitBtn.innerHTML = `
        <span class="flex items-center justify-center gap-2">
          <svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"></path>
          </svg>
          SENDING...
        </span>`;

      setTimeout(() => {
        form.classList.add('hidden');
        success.classList.remove('hidden');

        // Optional: log to console for the owner
        const data = Object.fromEntries(new FormData(form));
        console.log('%c[Haurdić] New inquiry received (demo):', 'color:#8B5E3C', data);

        // In real use: integrate Formspree / Netlify here
        // form.action = 'https://formspree.io/f/yourid'; method="POST"
      }, 850);
    });

    // Reset form when success "send another" clicked (if added later)
    const resetBtn = document.getElementById('reset-form');
    if (resetBtn) {
      resetBtn.addEventListener('click', () => {
        success.classList.add('hidden');
        form.classList.remove('hidden');
        form.reset();
        submitBtn.disabled = false;
        submitBtn.innerHTML = originalText;
      });
    }
  }

  // --- Language Switcher ---------------------------------------------------
  function setupLanguageSwitcher() {
    document.querySelectorAll('.lang-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        const lang = btn.dataset.lang;
        if (lang !== currentLang) {
          applyTranslations(lang);
        }
      });
    });
  }

  // --- Process: scroll-driven step stage --------------------------------
  function setupPctCounters() {
    const nums = document.querySelectorAll('.pct-num');
    if (!nums.length) return;
    const reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    const target = nums[0];
    let ran = false;
    function run() {
      if (ran) return;
      ran = true;
      nums.forEach(function (el) {
        const goal = parseInt(el.getAttribute('data-target'), 10) || 0;
        if (reduce) { el.textContent = goal; return; }
        const duration = 1500, stepTime = 16;
        const inc = Math.max(1, Math.ceil(goal / (duration / stepTime)));
        let val = 0;
        const t = setInterval(function () {
          val += inc;
          if (val >= goal) { el.textContent = goal; clearInterval(t); }
          else el.textContent = val;
        }, stepTime);
      });
    }
    if (!target) { run(); return; }
    const obs = new IntersectionObserver(function (entries) {
      entries.forEach(function (e) { if (e.isIntersecting) { run(); obs.disconnect(); } });
    }, { threshold: 0.5 });
    obs.observe(target);
  }

  function setupProcess() {
    const section = document.getElementById('process');
    if (!section) return;
    const bgs = Array.prototype.slice.call(section.querySelectorAll('.process-bg'));
    const slides = Array.prototype.slice.call(section.querySelectorAll('.process-slide'));
    const dots = Array.prototype.slice.call(section.querySelectorAll('.process-dot'));
    const n = slides.length;
    let active = -1;

    function setActive(i) {
      if (i === active) return;
      active = i;
      bgs.forEach((b, idx) => b.classList.toggle('is-active', idx === i));
      slides.forEach((sl, idx) => sl.classList.toggle('is-active', idx === i));
      dots.forEach((d, idx) => {
        d.classList.toggle('is-active', idx === i);
        d.classList.toggle('is-done', idx < i);
      });
    }

    function onScroll() {
      const total = section.offsetHeight - window.innerHeight;
      const scrolled = Math.min(Math.max(-section.getBoundingClientRect().top, 0), total);
      const p = total > 0 ? scrolled / total : 0;
      let i = Math.floor(p * n);
      if (i >= n) i = n - 1;
      if (i < 0) i = 0;
      setActive(i);
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    dots.forEach((d, idx) => d.addEventListener('click', () => {
      const total = section.offsetHeight - window.innerHeight;
      const target = section.offsetTop + ((idx + 0.5) / n) * total;
      window.scrollTo({ top: target, behavior: 'smooth' });
    }));

    setActive(0);
    onScroll();
  }

  // --- Smooth Scroll for Anchor Links --------------------------------------
  function setupHeader() {
    const header = document.getElementById('site-header');
    const hero = document.getElementById('hero');
    if (!header) return;
    function onScroll() {
      // solid the instant the page scrolls
      header.classList.toggle('scrolled', window.scrollY > 10);
    }
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    onScroll();
  }

  function setupSmoothScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function (e) {
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
          e.preventDefault();
          const hdr = document.getElementById('site-header');
      const navHeight = (hdr ? hdr.offsetHeight : 80) + 8;
          const top = target.getBoundingClientRect().top + window.scrollY - navHeight;
          window.scrollTo({ top, behavior: 'smooth' });
        }
      });
    });
  }

  // --- Keyboard Escape for Modals ------------------------------------------
  function setupKeyboard() {
    document.addEventListener('keydown', (e) => {
      const pmK = document.getElementById('project-modal');
      const lbK = document.getElementById('lightbox');
      if ((e.key === 'ArrowRight' || e.key === 'ArrowLeft') && pmK && !pmK.classList.contains('hidden') && lbK && lbK.classList.contains('hidden')) {
        gotoProject(e.key === 'ArrowRight' ? 1 : -1);
        return;
      }
      if (e.key === 'Escape') {
        const projectModal = document.getElementById('project-modal');
        const lightbox = document.getElementById('lightbox');

        if (!lightbox.classList.contains('hidden')) {
          closeLightbox();
        } else if (!projectModal.classList.contains('hidden')) {
          closeProjectModal();
        }
      }
    });
  }

  // --- Initialize Everything ------------------------------------------------
  function init() {
    // Apply saved language
    applyTranslations(currentLang);

    // Projects
    if (window.HAURDIC_PROJECTS) {
      renderProjects('all');
      setupProjectFilters();
      window.renderProjects = () => renderProjects(currentFilter);
    }

    // Testimonials
    if (window.HAURDIC_TESTIMONIALS) {
      renderTestimonials();
      window.renderTestimonials = renderTestimonials;
      setupTestimonialCarousel();
    }

    // UI
    setupMobileMenu();
    setupLanguageSwitcher();
    setupContactForm();
    setupHeader();
    setupSmoothScroll();
    setupKeyboard();
    setupCounters();
    setupProcess();
    setupPctCounters();

    // Close project modal button
    const closeModalBtn = document.getElementById('close-project-modal');
    if (closeModalBtn) closeModalBtn.addEventListener('click', closeProjectModal);

    // Close lightbox
    const closeLb = document.getElementById('close-lightbox');
    if (closeLb) closeLb.addEventListener('click', closeLightbox);

    // Click outside modal to close
    const projectModal = document.getElementById('project-modal');
    if (projectModal) {
      projectModal.addEventListener('click', (e) => {
        if (e.target === projectModal) closeProjectModal();
      });
    }

    const lightbox = document.getElementById('lightbox');
    if (lightbox) {
      lightbox.addEventListener('click', (e) => {
        if (e.target === lightbox) closeLightbox();
      });
    }

    // Make render functions globally available for language switch
    window.HAURDIC_CLOSE_PROJECT = closeProjectModal;
    window.HAURDIC_PREV_PROJECT = function () { gotoProject(-1); };
    window.HAURDIC_NEXT_PROJECT = function () { gotoProject(1); };

    // Optional: Preload a couple project images for snappier feel
    console.log('%c[Haurdić] Site initialized. Bilingual ready. All custom imagery loaded.', 'color:#8B5E3C; font-size:9px');
  }

  // Boot
  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
