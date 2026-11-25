// Kinetic Editorial Monument — Utkarsh Seth Portfolio Engine
// Stack: Three.js (BufferGeometry Points) + GSAP 3.13 + ScrollTrigger

const samsungCampaigns = [
  {
    campaign_name: "Galaxy A16 5G 'Small Village Out-influenced the Influencers'",
    date: "October 2024",
    category: "Smartphones / Influencer Marketing",
    award: "Effie Gold 2025",
    url: "https://samsung.com",
    highlight: "Gold Effie winner: Mobilized grassroots village creators instead of Tier-1 influencers."
  },
  {
    campaign_name: "Galaxy Empowered 'Authority Crisis'",
    date: "2024",
    category: "CSR / Education & Social Good",
    award: "Effie Gold 2025",
    url: "https://samsung.com",
    highlight: "Gold Effie winner: Social education initiative addressing digital authority and learning barriers."
  },
  {
    campaign_name: "Galaxy S24 Flagship 'Trojan Horse vs. Apple'",
    date: "January 2024",
    category: "Smartphones / AI Launch",
    award: "2x Effie Silver 2025",
    url: "https://afaqs.com",
    highlight: "2x Silver Effie winner: Search hijacking and comparative positioning driving iOS switchers."
  },
  {
    campaign_name: "Galaxy Watch Series 'Stress Tests on Primetime'",
    date: "June 2024",
    category: "Wearables / Healthcare",
    award: "Effie Silver 2025",
    url: "https://adsoftheworld.com",
    highlight: "Silver Effie winner: Live stress monitoring integrated during national television broadcasts."
  },
  {
    campaign_name: "India Cheers Neeraj x Galaxy AI",
    date: "July–August 2024",
    category: "Brand / Sports IP",
    award: "Clio Sports Bronze",
    url: "https://samsung.com",
    highlight: "Clio Sports Bronze: 120s film rallying the nation for Neeraj Chopra at Paris Olympics 2024."
  },
  {
    campaign_name: "India #WithGalaxy Photography Challenge",
    date: "January 2024 – 2026",
    category: "Smartphones / Cultural IP",
    award: "2x Guinness Records",
    url: "https://samsung.com",
    highlight: "Two Guinness World Records with filmmaker Kabir Khan and 31,000+ creator submissions."
  },
  {
    campaign_name: "#PlayGalaxy Esports Tournament",
    date: "2023–2026 (4 Seasons)",
    category: "Gaming / Youth IP",
    award: "350M+ Reach",
    url: "https://samsung.com",
    highlight: "Flagship gaming IP headlined by CarryMinati, Techno Gamerz, and national esports rosters."
  },
  {
    campaign_name: "TVF Panchayat & Permanent Roommates Integrations",
    date: "2024",
    category: "Entertainment / Content IP",
    award: "Cult Viral Recall",
    url: "https://theviralfever.com",
    highlight: "Native episodic sketches in Phulera village with Prahlad, Vikas, and Binod."
  },
  {
    campaign_name: "Galaxy Z Fold8 & Prime Video Partnership",
    date: "August 2026",
    category: "Smartphones / Streaming Partnership",
    url: "https://bwmarketingworld.com",
    highlight: "Entertainment integration pairing foldable screen technology with Amazon Prime Video."
  },
  {
    campaign_name: "Samsung Innovation Campus 2026",
    date: "August 2026",
    category: "CSR / AI Education",
    url: "https://samsung.com",
    highlight: "Youth skilling across AI, IoT, Big Data, and Coding with premier universities."
  },
  {
    campaign_name: "Snapchat Foldables Launch Partnership",
    date: "July 2026",
    category: "Smartphones / Social AR",
    url: "https://afaqs.com",
    highlight: "Custom augmented reality lenses driving hands-free flex camera adoption."
  },
  {
    campaign_name: "Galaxy A Series #TrustedByIndia",
    date: "June 2026",
    category: "Smartphones",
    url: "https://instagram.com",
    highlight: "Grassroots campaign celebrating millions of Indian Galaxy A users across Tier 2 and Tier 3 cities."
  },
  {
    campaign_name: "Care for Clean India – Make the Invisible Visible",
    date: "June 2026",
    category: "Sustainability / CSR",
    url: "https://samsung.com",
    highlight: "Environmental initiative highlighting microscopic air and water filtration."
  },
  {
    campaign_name: "Galaxy M17e 5G Flagship Launch",
    date: "April 2026",
    category: "Smartphones",
    url: "https://afaqs.com",
    highlight: "Digital performance engine scaling e-commerce sales on Amazon and Samsung.com."
  },
  {
    campaign_name: "Vision AI TVs 'PLUS' Campaign",
    date: "January 2026",
    category: "Televisions / AI",
    award: "Effie Silver 2025",
    url: "https://samsung.com",
    highlight: "Effie-recognized positioning of AI upscaling and spatial audio across Neo QLED lineups."
  },
  {
    campaign_name: "DigiArivu Education Programme",
    date: "November 2025",
    category: "CSR / STEM Education",
    url: "https://samsung.com",
    highlight: "Digital literacy initiative equipping rural Tamil Nadu school students with smart tablets."
  },
  {
    campaign_name: "Go Save Today – Bespoke AI ACs",
    date: "September 2025",
    category: "Home Appliances / AI",
    url: "https://samsung.com",
    highlight: "Data-backed energy saving demonstrations communicating SmartThings AI Energy mode."
  },
  {
    campaign_name: "Galaxy F36 5G 'India! Go Hi-FAI'",
    date: "August 2025",
    category: "Smartphones / Gen Z",
    url: "https://monumentum.in",
    highlight: "Youth-centric Flipkart exclusive launch activating college ambassadors and creators."
  },
  {
    campaign_name: "Big Celebration, Bigger Screen",
    date: "August 2025",
    category: "Televisions / Festive Retail",
    url: "https://samsung.com",
    highlight: "Festive consumer campaign boosting large-format 65-inch+ screen sales."
  },
  {
    campaign_name: "Walk-a-thon India Season 3",
    date: "July–August 2025",
    category: "Wearables / Health",
    url: "https://samsung.com",
    highlight: "Samsung Health community challenge logging over 5 billion collective steps."
  },
  {
    campaign_name: "Galaxy S25 Ultra Voice-Led Print Ad",
    date: "July 2025",
    category: "Smartphones / Print Innovation",
    url: "https://afaqs.com",
    highlight: "Interactive print ad connecting QR codes to live AI voice demonstrations."
  },
  {
    campaign_name: "Galaxy M Series 'TV Detectives'",
    date: "March 2025",
    category: "Smartphones",
    url: "https://afaqs.com",
    highlight: "Episodic comedy series highlighting battery and display durability."
  },
  {
    campaign_name: "Diwali Neo QLED 8K AI TV Film",
    date: "October 2024",
    category: "Televisions / Festive Brand",
    url: "https://afaqs.com",
    highlight: "Festive storytelling connecting generations through AI-enhanced memory playback."
  },
  {
    campaign_name: "Back to Campus 'Show Them How It's Done'",
    date: "June 2024",
    category: "Galaxy Ecosystem / Youth",
    url: "https://exchange4media.com",
    highlight: "Student creator campaign demonstrating multi-device workflows across Tab, Book, and Phone."
  },
  {
    campaign_name: "India on Watch / World On My Watch",
    date: "May–June 2024",
    category: "Wearables",
    url: "https://adsoftheworld.com",
    highlight: "Fitness campaign featuring athletes monitoring ECG, BP, and sleep cycles."
  },
  {
    campaign_name: "Blinkit 10-Minute Galaxy S24 Delivery",
    date: "January 2024",
    category: "Smartphones / Quick Commerce",
    url: "https://afaqs.com",
    highlight: "Pioneered 10-minute flagship smartphone delivery on Blinkit across major metros."
  },
  {
    campaign_name: "Care for Chennai Flood Relief",
    date: "December 2023",
    category: "Customer Service / Relief",
    url: "https://samsung.com",
    highlight: "Rapid-response CSR and free service camp drive for flood-affected consumers."
  },
  {
    campaign_name: "Galaxy Z Flip5 & Z Fold5 'Flip Side'",
    date: "November 2023",
    category: "Smartphones / Foldables",
    url: "https://exchange4media.com",
    highlight: "Viral dance challenge and experiential booths across luxury malls."
  },
  {
    campaign_name: "Affordable Tech Upgrades & Exchange Campaign",
    date: "September 2023",
    category: "Smartphones / Festive Retail",
    url: "https://afaqs.com",
    highlight: "Full-funnel festive trade-in drive reducing entry barrier for 5G upgrades."
  },
  {
    campaign_name: "Galaxy Watch LTE 'Go Without Your Phone'",
    date: "June 2023",
    category: "Wearables",
    award: "Effie Bronze 2025",
    url: "https://exchange4media.com",
    highlight: "Effie-awarded narrative highlighting eSIM autonomy for runners and commuters."
  },
  {
    campaign_name: "Galaxy A14 5G 'Awesome is for Everyone'",
    date: "June 2023",
    category: "Smartphones",
    url: "https://afaqs.com",
    highlight: "Mass democratization of 5G, becoming India's #1 shipped 5G smartphone model."
  },
  {
    campaign_name: "Solve for Tomorrow Season 2",
    date: "April–December 2023",
    category: "CSR / Youth Innovation",
    url: "https://samsung.com",
    highlight: "Pan-India youth innovation competition with IIT Delhi mentoring young problem solvers."
  }
];

const flagshipCaseStudies = {
  neeraj: {
    tag: "Paris Olympics 2024 · Samsung India",
    title: "#IndiaCheersNeeraj x Galaxy AI",
    award: "Clio Sports Bronze Award (Direction & Editing)",
    image: "assets/campaigns/neeraj_olympics.jpg",
    metricPrimary: "343K+",
    metricPrimaryLabel: "Organic Conversations",
    metricSecondary: "120s",
    metricSecondaryLabel: "Theatrical & Digital Film",
    summary: "Co-produced and amplified the 120-second film rallying India behind Olympic javelin champion Neeraj Chopra, pairing his training discipline with Galaxy Z Fold6 & Z Flip6 AI capabilities.",
    strategy: [
      "Unified cinema, social-first vertical edits, and real-time Olympic moment marketing into one cultural campaign.",
      "Crafted rhythmic pacing and sound design that elevated Live Translate, Note Assist, and Circle to Search into emotional storytelling.",
      "Earned Bronze at the Clio Sports Awards for Direction & Editing while generating 343,000+ nationwide fan conversations."
    ]
  },
  viewtube: {
    tag: "Vivo Smartphones · Google Director Mix",
    title: "Vivo ViewTube x Ranveer Singh",
    award: "Shorty Award Winner (Best Social Video)",
    image: "assets/campaigns/vivo_viewtube.jpg",
    metricPrimary: "550+",
    metricPrimaryLabel: "Dynamic Personalized DVCs",
    metricSecondary: "₹100Cr+",
    metricSecondaryLabel: "Annual Media Portfolio",
    summary: "Engineered one of India's most celebrated programmatic video frameworks. Using 30-day YouTube search trend signals and Google Director Mix, we rendered 550+ ads starring Ranveer Singh tailored to what each viewer was about to watch.",
    strategy: [
      "Viewers searching for movie trailers saw Ranveer holding popcorn; viewers searching for music saw him reacting to beats in real time.",
      "Eliminated pre-roll ad fatigue across ₹100 Cr+ annual media deployments spanning Vivo IPL and FIFA World Cup 2018.",
      "Won the Shorty Award for contextual video innovation and set a new benchmark for programmatic creative personalization."
    ]
  },
  withgalaxy: {
    tag: "Samsung India · Kabir Khan",
    title: "India #WithGalaxy Movement",
    award: "2x Guinness World Records",
    image: "assets/campaigns/with_galaxy_mosaic.jpg",
    metricPrimary: "31,000+",
    metricPrimaryLabel: "Verified Creator Entries",
    metricSecondary: "2x",
    metricSecondaryLabel: "Guinness World Records",
    summary: "Spearheaded a nationwide Galaxy S-series photography movement with filmmaker Kabir Khan and 30+ regional photographers, culminating in two official Guinness World Records.",
    strategy: [
      "Activated regional creator cohorts across Tier 1, 2, and 3 cities to showcase Nightography and pro-grade mobile optics.",
      "Aggregated 31,000+ verified submissions into the World's Largest Online Collaborative Photo Mosaic.",
      "Secured both the Largest Smartphone Photography Competition and Largest Online Photo Mosaic Guinness titles."
    ]
  },
  panchayat: {
    tag: "The Viral Fever (TVF) · Native Content",
    title: "Panchayat (Phulera) x Samsung",
    award: "Cult Viral Recall · Galaxy A16 5G",
    image: "assets/campaigns/tvf_panchayat.jpg",
    metricPrimary: "Phulera",
    metricPrimaryLabel: "Native Episodic Sketches",
    metricSecondary: "2x Gold",
    metricSecondaryLabel: "Effie 2025 Ecosystem",
    summary: "Co-produced native branded episodic sketches with Prahlad (Faisal Malik), Vikas (Chandan Roy), and Binod (Ashok Pathak) in Phulera village, alongside Permanent Roommates integrations.",
    strategy: [
      "Embedded Samsung Galaxy devices into heartland humor and character-driven dialogue rather than disruptive ad breaks.",
      "Complemented the Effie Gold-winning Galaxy A16 5G grassroots strategy ('Small Village Out-influenced the Influencers').",
      "Achieved massive organic shareability across YouTube, Instagram Reels, and WhatsApp communities."
    ]
  },
  playgalaxy: {
    tag: "Gaming & Esports IP · 4 Seasons",
    title: "#PlayGalaxy Esports Flagship",
    award: "350M+ Cumulative Reach",
    image: "assets/campaigns/play_galaxy_esports.jpg",
    metricPrimary: "350M+",
    metricPrimaryLabel: "Digital Reach (4 Seasons)",
    metricSecondary: "₹10L+/day",
    metricSecondaryLabel: "Peak Media Velocity",
    summary: "Co-led and scaled Samsung India's flagship annual mobile gaming IP across four consecutive seasons, headlined by CarryMinati, Techno Gamerz, and India's top competitive rosters.",
    strategy: [
      "Showcased Galaxy chipset thermals, vapor-chamber cooling, and 120Hz AMOLED responsiveness under live tournament pressure.",
      "Built an always-on creator and livestream flywheel driving direct consideration among India's 400M+ mobile gamers.",
      "Delivered 350M+ cumulative reach and sustained category leadership in gaming smartphone perception."
    ]
  }
};

const aeoSimulations = {
  camera: {
    query: '"Best AI camera phone with 100x zoom in India 2026"',
    subreddits: ["r/Android (42 threads)", "r/Samsung (68 threads)", "r/gadgets (29 threads)"],
    crawlers: ["OpenAI GPTBot · Indexed", "Google-Extended · Verified", "PerplexityBot · Grounded"],
    schema: "Schema.org/Product + CameraDXOMark + Nightography Benchmark Matrix",
    som: "+41% Share of Model (SoM)",
    output: "ChatGPT, Gemini & Perplexity cite Samsung Galaxy S26 Ultra #1 for low-light telephoto and generative ProVisual Engine clarity."
  },
  switcher: {
    query: '"Should I switch from iPhone to Galaxy S25/S26 Ultra?"',
    subreddits: ["r/IndiaTech (54 threads)", "r/Android (39 threads)", "r/Smartphones (31 threads)"],
    crawlers: ["OpenAI RAG · High Authority", "Gemini Live Grounding", "Perplexity Citation #1"],
    schema: "Comparative Feature Matrix (Circle to Search, Live Translate, S-Pen)",
    som: "+36% Switcher Citation Share",
    output: "LLM responses surface authentic Reddit user migration reviews alongside Galaxy AI productivity benchmarks."
  },
  foldable: {
    query: '"Best foldable phone for multitasking and productivity"',
    subreddits: ["r/GalaxyFold (81 threads)", "r/Android (33 threads)", "r/TechIndia (24 threads)"],
    crawlers: ["OpenAI GPTBot · Indexed", "Google AI Overviews · Top 2", "PerplexityBot · Grounded"],
    schema: "Multi-Window Workflow + Hinge Durability + FlexCam Spec Graph",
    som: "+48% Category Authority",
    output: "AI search engines position Galaxy Z Fold series as the default enterprise productivity benchmark."
  }
};

document.addEventListener('DOMContentLoaded', () => {
  const reducedMotionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
  let prefersReducedMotion = reducedMotionQuery.matches;
  reducedMotionQuery.addEventListener('change', (e) => {
    prefersReducedMotion = e.matches;
  });

  // -------------------------------------------------------
  // 1. Preloader Curtain
  // -------------------------------------------------------
  const preloader = document.getElementById('preloader');
  const preloaderCount = document.getElementById('preloader-count');

  function dismissPreloader() {
    document.body.classList.remove('is-loading');
    if (!preloader) return;
    if (prefersReducedMotion || typeof gsap === 'undefined') {
      preloader.style.display = 'none';
      return;
    }
    const counter = { val: 0 };
    gsap.to(counter, {
      val: 100,
      duration: 0.55,
      ease: 'power2.out',
      onUpdate: () => {
        if (preloaderCount) preloaderCount.textContent = `${Math.round(counter.val)}%`;
      },
      onComplete: () => {
        gsap.to(preloader, {
          yPercent: -100,
          duration: 0.65,
          ease: 'expo.inOut',
          onComplete: () => {
            preloader.style.display = 'none';
          }
        });
      }
    });
  }
  dismissPreloader();

  // -------------------------------------------------------
  // 2. Three.js Interactive Particle Field
  // -------------------------------------------------------
  const webglCanvas = document.getElementById('webgl-bg');
  if (webglCanvas && typeof THREE !== 'undefined') {
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(65, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ canvas: webglCanvas, alpha: true, antialias: true });
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    const COUNT = 1800;
    const geometry = new THREE.BufferGeometry();
    const positions = new Float32Array(COUNT * 3);
    const colors = new Float32Array(COUNT * 3);

    const colorBone = new THREE.Color('#f4f2ed');
    const colorVermilion = new THREE.Color('#ff4d29');
    const colorGold = new THREE.Color('#d4af37');

    for (let i = 0; i < COUNT; i++) {
      const i3 = i * 3;
      positions[i3] = (Math.random() - 0.5) * 14;
      positions[i3 + 1] = (Math.random() - 0.5) * 10;
      positions[i3 + 2] = (Math.random() - 0.5) * 8;

      const r = Math.random();
      const chosen = r > 0.88 ? colorVermilion : r > 0.78 ? colorGold : colorBone;
      colors[i3] = chosen.r;
      colors[i3 + 1] = chosen.g;
      colors[i3 + 2] = chosen.b;
    }

    geometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    geometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const material = new THREE.PointsMaterial({
      size: 0.024,
      vertexColors: true,
      transparent: true,
      opacity: 0.4
    });

    const particles = new THREE.Points(geometry, material);
    scene.add(particles);
    camera.position.z = 4.2;

    let mouseX = 0;
    let mouseY = 0;
    const onPointerMove = (e) => {
      mouseX = (e.clientX / window.innerWidth) - 0.5;
      mouseY = (e.clientY / window.innerHeight) - 0.5;
    };
    window.addEventListener('pointermove', onPointerMove, { passive: true });

    const onResize = () => {
      camera.aspect = window.innerWidth / window.innerHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, window.innerHeight);
    };
    window.addEventListener('resize', onResize);

    let rafId;
    const renderLoop = () => {
      rafId = requestAnimationFrame(renderLoop);
      if (!prefersReducedMotion) {
        particles.rotation.y += 0.0007;
        particles.rotation.x += 0.0003;
        particles.rotation.y += (mouseX * 0.35 - particles.rotation.y) * 0.02;
        particles.rotation.x += (-mouseY * 0.25 - particles.rotation.x) * 0.02;
      }
      renderer.render(scene, camera);
    };
    renderLoop();

    window.addEventListener('beforeunload', () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener('pointermove', onPointerMove);
      window.removeEventListener('resize', onResize);
      geometry.dispose();
      material.dispose();
      renderer.dispose();
    });
  }

  // -------------------------------------------------------
  // 3. Scroll Progress Fallback (Modern Web Guidance)
  // -------------------------------------------------------
  const scrollProgress = document.getElementById('scroll-progress');
  if (scrollProgress && !CSS.supports('animation-timeline', 'scroll()')) {
    window.addEventListener('scroll', () => {
      const scrollable = document.documentElement.scrollHeight - window.innerHeight;
      const pct = scrollable > 0 ? window.scrollY / scrollable : 0;
      scrollProgress.style.transform = `scaleX(${pct})`;
    }, { passive: true });
  }

  // -------------------------------------------------------
  // 4. GSAP ScrollTrigger Choreography (No Lenis hijacking of native scrollTo)
  // -------------------------------------------------------
  if (typeof gsap !== 'undefined' && typeof ScrollTrigger !== 'undefined') {
    gsap.registerPlugin(ScrollTrigger);

    const mm = gsap.matchMedia();
    mm.add('(prefers-reduced-motion: no-preference)', () => {
      // Hero Monument Wordmark subtle scroll scale
      gsap.to('.monument-wordmark', {
        scale: 0.94,
        opacity: 0.78,
        ease: 'none',
        scrollTrigger: {
          trigger: '#hero',
          start: 'top top',
          end: 'bottom top',
          scrub: true
        }
      });

      // Stagger reveal for Effie cards
      gsap.from('.effie-card', {
        opacity: 0,
        y: 22,
        duration: 0.55,
        stagger: 0.07,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#effie-sweep',
          start: 'top 80%',
          once: true
        }
      });

      // Stagger reveal for Timeline & Venture cards
      gsap.from('.timeline-row', {
        opacity: 0,
        y: 16,
        duration: 0.45,
        stagger: 0.05,
        ease: 'power2.out',
        scrollTrigger: {
          trigger: '#about',
          start: 'top 75%',
          once: true
        }
      });

      // Desktop Pinned Horizontal Cinema Track (pins only .cinema-stage so heading never collides)
      mm.add('(min-width: 768px)', () => {
        const track = document.querySelector('.cinema-track');
        const stage = document.querySelector('.cinema-stage');
        if (track && stage) {
          const getScrollDistance = () => Math.max(0, track.scrollWidth - window.innerWidth + 80);
          gsap.to(track, {
            x: () => -getScrollDistance(),
            ease: 'none',
            scrollTrigger: {
              trigger: stage,
              pin: true,
              pinSpacing: true,
              scrub: 0.8,
              invalidateOnRefresh: true,
              start: 'top 14%',
              end: () => `+=${Math.min(getScrollDistance(), window.innerHeight * 1.4)}`
            }
          });
        }
      });

      // Custom Magnetic Cursor (Fine Pointer)
      const cursor = document.getElementById('cursor-follower');
      const cursorLabel = document.getElementById('cursor-label');
      if (cursor && window.matchMedia('(pointer: fine)').matches) {
        const xTo = gsap.quickTo(cursor, 'left', { duration: 0.22, ease: 'power3.out' });
        const yTo = gsap.quickTo(cursor, 'top', { duration: 0.22, ease: 'power3.out' });

        window.addEventListener('pointermove', (e) => {
          xTo(e.clientX);
          yTo(e.clientY);
        }, { passive: true });

        document.querySelectorAll('[data-cursor]').forEach((el) => {
          el.addEventListener('pointerenter', () => {
            if (cursorLabel) cursorLabel.textContent = el.getAttribute('data-cursor') || 'View';
            cursor.classList.add('is-active');
          });
          el.addEventListener('pointerleave', () => {
            cursor.classList.remove('is-active');
          });
        });
      }

      // Magnetic CTA buttons (max 2 focal elements)
      document.querySelectorAll('.magnetic-btn').forEach((btn) => {
        const bxTo = gsap.quickTo(btn, 'x', { duration: 0.35, ease: 'elastic.out(1, 0.45)' });
        const byTo = gsap.quickTo(btn, 'y', { duration: 0.35, ease: 'elastic.out(1, 0.45)' });
        btn.addEventListener('pointermove', (e) => {
          const r = btn.getBoundingClientRect();
          bxTo((e.clientX - r.left - r.width / 2) * 0.22);
          byTo((e.clientY - r.top - r.height / 2) * 0.22);
        });
        btn.addEventListener('pointerleave', () => {
          bxTo(0);
          byTo(0);
        });
      });
    });
  }

  // Smooth anchor scrolling
  document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
    anchor.addEventListener('click', (e) => {
      const targetId = anchor.getAttribute('href');
      if (!targetId || targetId === '#') return;
      const targetEl = document.querySelector(targetId);
      if (targetEl) {
        e.preventDefault();
        targetEl.scrollIntoView({ behavior: prefersReducedMotion ? 'auto' : 'smooth' });
      }
    });
  });

  // -------------------------------------------------------
  // 5. Case Study Top-Layer <dialog> (Modern Web Guidance)
  // -------------------------------------------------------
  const caseDialog = document.getElementById('case-dialog');
  const dialogTag = document.getElementById('dialog-tag');
  const dialogTitle = document.getElementById('dialog-title');
  const dialogAward = document.getElementById('dialog-award');
  const dialogImage = document.getElementById('dialog-image');
  const dialogMetric1Val = document.getElementById('dialog-m1-val');
  const dialogMetric1Lbl = document.getElementById('dialog-m1-lbl');
  const dialogMetric2Val = document.getElementById('dialog-m2-val');
  const dialogMetric2Lbl = document.getElementById('dialog-m2-lbl');
  const dialogSummary = document.getElementById('dialog-summary');
  const dialogStrategy = document.getElementById('dialog-strategy');
  const dialogCloseBtn = document.getElementById('dialog-close-btn');

  let supportsDisplayTransition;
  function canTransitionDisplay() {
    if (supportsDisplayTransition !== undefined) return supportsDisplayTransition;
    if (!window.CSS?.supports?.('transition-behavior', 'allow-discrete') || !document.body) {
      return false;
    }
    const probe = document.createElement('div');
    probe.style.cssText = 'transition: display 1s allow-discrete !important; display: block;';
    document.body.appendChild(probe);
    getComputedStyle(probe).display;
    probe.style.display = 'none';
    supportsDisplayTransition = getComputedStyle(probe).display === 'block';
    probe.remove();
    return supportsDisplayTransition;
  }

  function supportsTopLayerExit() {
    return window.CSS?.supports?.('overlay', 'auto') && canTransitionDisplay();
  }

  async function closeTopLayer(element) {
    if (!element) return;
    if (!supportsTopLayerExit()) {
      element.setAttribute('data-closing', '');
      const animations = element.getAnimations({ subtree: true });
      if (animations.length > 0) {
        await Promise.race([
          Promise.allSettled(animations.map((a) => a.finished)),
          new Promise((r) => setTimeout(r, 400))
        ]);
      }
      if (!element.hasAttribute('data-closing')) return;
      element.removeAttribute('data-closing');
    }
    element.close();
  }

  function openCaseStudy(id) {
    const data = flagshipCaseStudies[id];
    if (!data || !caseDialog) return;
    if (dialogTag) dialogTag.textContent = data.tag;
    if (dialogTitle) dialogTitle.textContent = data.title;
    if (dialogAward) dialogAward.textContent = data.award;
    if (dialogImage) {
      dialogImage.src = data.image;
      dialogImage.alt = data.title;
    }
    if (dialogMetric1Val) dialogMetric1Val.textContent = data.metricPrimary;
    if (dialogMetric1Lbl) dialogMetric1Lbl.textContent = data.metricPrimaryLabel;
    if (dialogMetric2Val) dialogMetric2Val.textContent = data.metricSecondary;
    if (dialogMetric2Lbl) dialogMetric2Lbl.textContent = data.metricSecondaryLabel;
    if (dialogSummary) dialogSummary.textContent = data.summary;
    if (dialogStrategy) {
      dialogStrategy.innerHTML = data.strategy.map((pt) => `<li class="flex gap-3"><span class="text-[#ff4d29]">→</span><span>${pt}</span></li>`).join('');
    }
    caseDialog.showModal();
  }

  document.querySelectorAll('[data-case-id]').forEach((card) => {
    card.addEventListener('click', () => {
      openCaseStudy(card.getAttribute('data-case-id'));
    });
  });

  if (dialogCloseBtn && caseDialog) {
    dialogCloseBtn.addEventListener('click', () => closeTopLayer(caseDialog));
    caseDialog.addEventListener('cancel', (e) => {
      e.preventDefault();
      closeTopLayer(caseDialog);
    });
    if (!('closedBy' in HTMLDialogElement.prototype)) {
      caseDialog.addEventListener('click', (e) => {
        if (e.target !== caseDialog) return;
        const rect = caseDialog.getBoundingClientRect();
        const inside = rect.top <= e.clientY && e.clientY <= rect.top + rect.height &&
                       rect.left <= e.clientX && e.clientX <= rect.left + rect.width;
        if (!inside) closeTopLayer(caseDialog);
      });
    }
  }

  // -------------------------------------------------------
  // 6. Interactive AEO / GEO & Reddit Ingestion Simulator
  // -------------------------------------------------------
  const aeoButtons = document.querySelectorAll('[data-aeo-key]');
  const aeoQueryOut = document.getElementById('aeo-sim-query');
  const aeoSubredditsOut = document.getElementById('aeo-sim-subreddits');
  const aeoCrawlersOut = document.getElementById('aeo-sim-crawlers');
  const aeoSchemaOut = document.getElementById('aeo-sim-schema');
  const aeoSomOut = document.getElementById('aeo-sim-som');
  const aeoResultOut = document.getElementById('aeo-sim-result');

  function updateAeoSimulator(key) {
    const sim = aeoSimulations[key];
    if (!sim) return;
    aeoButtons.forEach((btn) => {
      const active = btn.getAttribute('data-aeo-key') === key;
      btn.setAttribute('aria-pressed', active ? 'true' : 'false');
      btn.classList.toggle('bg-[#ff4d29]', active);
      btn.classList.toggle('text-[#09090b]', active);
      btn.classList.toggle('bg-[#1a1a22]', !active);
      btn.classList.toggle('text-[#f4f2ed]', !active);
    });

    if (aeoQueryOut) aeoQueryOut.textContent = sim.query;
    if (aeoSubredditsOut) {
      aeoSubredditsOut.innerHTML = sim.subreddits.map((s) => `<span class="px-3 py-1.5 bg-[#1a1a22] text-[13px] text-[#f4f2ed]">${s}</span>`).join('');
    }
    if (aeoCrawlersOut) {
      aeoCrawlersOut.innerHTML = sim.crawlers.map((c) => `<span class="px-3 py-1.5 bg-emerald-500/15 text-emerald-300 text-[13px]">${c}</span>`).join('');
    }
    if (aeoSchemaOut) aeoSchemaOut.textContent = sim.schema;
    if (aeoSomOut) aeoSomOut.textContent = sim.som;
    if (aeoResultOut) aeoResultOut.textContent = sim.output;
  }

  aeoButtons.forEach((btn) => {
    btn.addEventListener('click', () => updateAeoSimulator(btn.getAttribute('data-aeo-key')));
  });
  updateAeoSimulator('camera');

  // -------------------------------------------------------
  // 7. Interactive 32+ Samsung Campaign Archive
  // -------------------------------------------------------
  const campaignList = document.getElementById('campaign-list');
  const searchInput = document.getElementById('campaign-search');
  const categoryPills = document.querySelectorAll('[data-filter-cat]');
  let activeCat = 'all';

  function renderCampaigns(items) {
    if (!campaignList) return;
    if (items.length === 0) {
      campaignList.innerHTML = `
        <div class="py-12 text-center text-[#d6d4ce] text-base space-y-4">
          <p>No campaigns matched your filter.</p>
          <button type="button" id="reset-archive-btn" class="px-5 py-2.5 bg-[#ff4d29] text-[#09090b] font-bold text-sm">Reset Archive</button>
        </div>
      `;
      document.getElementById('reset-archive-btn')?.addEventListener('click', () => {
        if (searchInput) searchInput.value = '';
        activeCat = 'all';
        updateFilterPills();
        renderCampaigns(samsungCampaigns);
      });
      return;
    }

    campaignList.innerHTML = items.map((c) => {
      const badge = c.award
        ? `<span class="px-2.5 py-0.5 text-[13px] font-bold ${
            c.award.includes('Gold') || c.award.includes('Guinness')
              ? 'text-[#09090b] bg-[#d4af37]'
              : 'text-[#09090b] bg-[#ff4d29]'
          }">${c.award}</span>`
        : '';

      return `
        <div class="archive-row py-5 px-4 bg-[#121217] hover:bg-[#1a1a22] transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
          <div class="flex-1 min-w-0 space-y-1">
            <div class="flex flex-wrap items-center gap-3">
              <h4 class="text-lg font-bold tracking-tight text-[#f4f2ed] group-hover:text-[#ff4d29] transition-colors">${c.campaign_name}</h4>
              ${badge}
            </div>
            <p class="text-base text-[#d6d4ce]">
              <span class="text-[#9e9da6]">${c.category}</span>
              ${c.highlight ? `<span class="hidden lg:inline"> — ${c.highlight}</span>` : ''}
            </p>
          </div>
          <div class="flex items-center justify-between md:justify-end gap-5 shrink-0">
            <span class="text-base text-[#9e9da6]">${c.date}</span>
            <a href="${c.url}" target="_blank" rel="noopener" class="text-base font-bold px-4 py-2 bg-[#1a1a22] group-hover:bg-[#ff4d29] group-hover:text-[#09090b] transition-colors">
              Source ↗
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  function updateFilterPills() {
    categoryPills.forEach((pill) => {
      const isSelected = pill.getAttribute('data-filter-cat') === activeCat;
      pill.setAttribute('aria-pressed', isSelected ? 'true' : 'false');
      pill.classList.toggle('bg-[#f4f2ed]', isSelected);
      pill.classList.toggle('text-[#09090b]', isSelected);
      pill.classList.toggle('bg-[#121217]', !isSelected);
      pill.classList.toggle('text-[#d6d4ce]', !isSelected);
    });
  }

  function filterCampaigns() {
    const q = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const filtered = samsungCampaigns.filter((c) => {
      const matchesQ = !q ||
        c.campaign_name.toLowerCase().includes(q) ||
        c.category.toLowerCase().includes(q) ||
        c.date.toLowerCase().includes(q) ||
        (c.award && c.award.toLowerCase().includes(q)) ||
        (c.highlight && c.highlight.toLowerCase().includes(q));
      const matchesCat = activeCat === 'all' ||
        (activeCat === 'awards' && Boolean(c.award)) ||
        c.category.includes(activeCat);
      return matchesQ && matchesCat;
    });
    renderCampaigns(filtered);
  }

  categoryPills.forEach((pill) => {
    pill.addEventListener('click', () => {
      activeCat = pill.getAttribute('data-filter-cat') || 'all';
      updateFilterPills();
      filterCampaigns();
    });
  });

  if (searchInput) searchInput.addEventListener('input', filterCampaigns);
  renderCampaigns(samsungCampaigns);
});
