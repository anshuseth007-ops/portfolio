// Interactive logic for Utkarsh Seth Executive Portfolio

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu Toggle
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    // Close menu when clicking a link
    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Navbar Backdrop on Scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('bg-dark-950/95', 'shadow-xl', 'shadow-black/20');
      navbar.classList.remove('bg-dark-950/80');
    } else {
      navbar.classList.remove('bg-dark-950/95', 'shadow-xl', 'shadow-black/20');
      navbar.classList.add('bg-dark-950/80');
    }
  });

  // 3. Filterable Case Studies
  const filterBtns = document.querySelectorAll('.filter-btn');
  const caseCards = document.querySelectorAll('.case-card');

  filterBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      filterBtns.forEach(b => {
        b.classList.remove('active', 'bg-brand-600', 'text-white');
        b.classList.add('bg-dark-850', 'text-slate-300');
      });

      btn.classList.add('active', 'bg-brand-600', 'text-white');
      btn.classList.remove('bg-dark-850', 'text-slate-300');

      const filterValue = btn.getAttribute('data-filter');

      caseCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(10px)';
          setTimeout(() => {
            card.style.transition = 'all 0.3s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 50);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. Smooth Anchor Scrolling
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#') return;
      
      const targetElement = document.querySelector(targetId);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({
          behavior: 'smooth',
          block: 'start'
        });
      }
    });
  });

  console.log('Utkarsh Seth Portfolio Initialized.');
});
