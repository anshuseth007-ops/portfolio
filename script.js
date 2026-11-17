// Flixen-Inspired Portfolio Interactions for Utkarsh Seth

document.addEventListener('DOMContentLoaded', () => {
  // 1. Mobile Menu
  const mobileBtn = document.getElementById('mobile-menu-btn');
  const mobileMenu = document.getElementById('mobile-menu');

  if (mobileBtn && mobileMenu) {
    mobileBtn.addEventListener('click', () => {
      mobileMenu.classList.toggle('hidden');
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        mobileMenu.classList.add('hidden');
      });
    });
  }

  // 2. Navbar on scroll
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-cinema-950/95', 'shadow-2xl', 'shadow-black/50');
      navbar.classList.remove('bg-cinema-950/80');
    } else {
      navbar.classList.remove('bg-cinema-950/95', 'shadow-2xl', 'shadow-black/50');
      navbar.classList.add('bg-cinema-950/80');
    }
  });

  // 3. Flixen Filter System
  const filterPills = document.querySelectorAll('.filter-pill');
  const campaignCards = document.querySelectorAll('.campaign-card');

  filterPills.forEach(pill => {
    pill.addEventListener('click', () => {
      filterPills.forEach(p => p.classList.remove('active'));
      pill.classList.add('active');

      const filterValue = pill.getAttribute('data-filter');

      campaignCards.forEach(card => {
        const categories = card.getAttribute('data-category') || '';
        if (filterValue === 'all' || categories.includes(filterValue)) {
          card.classList.remove('hidden');
          card.style.opacity = '0';
          card.style.transform = 'translateY(12px)';
          setTimeout(() => {
            card.style.transition = 'all 0.35s cubic-bezier(0.16, 1, 0.3, 1)';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
          }, 30);
        } else {
          card.classList.add('hidden');
        }
      });
    });
  });

  // 4. Video Modal System
  const videoModal = document.getElementById('video-modal');
  const closeModal = document.getElementById('close-modal');
  const modalTitle = document.getElementById('modal-title');
  const modalContent = document.getElementById('modal-content');

  const campaignMedia = {
    'Vivo ViewTube x Ranveer Singh': {
      title: 'Vivo ViewTube x Ranveer Singh (550+ Contextual DVCs)',
      desc: 'Google Director Mix campaign that dynamically rendered 550+ personalized ad variations based on 30-day trending YouTube keywords.'
    },
    '#IndiaCheersNeeraj x Paris Olympics': {
      title: '#IndiaCheersNeeraj — Paris Olympics 2024 (Clio Sports Winner)',
      desc: 'Official brand film rallying the nation behind Neeraj Chopra, integrating Galaxy Z Fold6 & Z Flip6 Galaxy AI capabilities.'
    }
  };

  campaignCards.forEach(card => {
    card.addEventListener('click', () => {
      const titleElem = card.querySelector('h3');
      const title = titleElem ? titleElem.innerText.trim() : 'Campaign Showcase';

      if (videoModal && modalTitle && modalContent) {
        modalTitle.innerText = title;
        modalContent.innerHTML = `
          <div class="space-y-4">
            <span class="inline-block px-3 py-1 rounded-full bg-accent-blue/20 text-accent-blue font-mono text-xs uppercase tracking-wider">
              High-Production Showcase
            </span>
            <h3 class="text-xl font-display font-bold text-white">${title}</h3>
            <p class="text-xs text-slate-300 max-w-lg mx-auto font-light leading-relaxed">
              ${campaignMedia[title] ? campaignMedia[title].desc : 'Full commercial reel and creative assets for this campaign.'}
            </p>
            <div class="pt-4">
              <span class="text-xs font-mono text-slate-400">Embed URL slot ready for direct YouTube / MP4 streaming.</span>
            </div>
          </div>
        `;
        videoModal.classList.remove('hidden');
      }
    });
  });

  if (closeModal && videoModal) {
    closeModal.addEventListener('click', () => {
      videoModal.classList.add('hidden');
    });

    videoModal.addEventListener('click', (e) => {
      if (e.target === videoModal) {
        videoModal.classList.add('hidden');
      }
    });
  }
});
