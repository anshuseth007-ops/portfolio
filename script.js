// Nuestudio Style Interactions & Interactive Samsung Campaign Archive for Utkarsh Seth

const samsungCampaigns = [
  {
    "campaign_name": "Galaxy Z Fold8 & Prime Video Partnership",
    "date": "August 2026",
    "category": "Smartphones / Streaming Partnership",
    "url": "https://bwmarketingworld.com"
  },
  {
    "campaign_name": "Samsung Innovation Campus 2026",
    "date": "August 2026",
    "category": "CSR / AI Education",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Snapchat Foldables Launch Partnership",
    "date": "July 2026",
    "category": "Smartphones / Social AR",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Galaxy A Series #TrustedByIndia",
    "date": "June 2026",
    "category": "Smartphones",
    "url": "https://instagram.com"
  },
  {
    "campaign_name": "Care for Clean India – Make the Invisible Visible",
    "date": "June 2026",
    "category": "Sustainability / CSR",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Galaxy M17e 5G 'All in One Monster'",
    "date": "April 2026",
    "category": "Smartphones",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Vision AI TVs 'PLUS' Campaign",
    "date": "January 2026",
    "category": "Televisions / AI",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "India #WithGalaxy Photography Challenge",
    "date": "January 2026",
    "category": "Smartphones / Brand",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "DigiArivu Education Programme",
    "date": "November 2025",
    "category": "CSR / STEM Education",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Go Save Today – Bespoke AI ACs",
    "date": "September 2025",
    "category": "Home Appliances / AI",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Galaxy F36 5G 'India! Go Hi-FAI'",
    "date": "August 2025",
    "category": "Smartphones / Gen Z",
    "url": "https://monumentum.in"
  },
  {
    "campaign_name": "Big Celebration, Bigger Screen",
    "date": "August 2025",
    "category": "Televisions / Festive Retail",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Walk-a-thon India Season 3",
    "date": "July–August 2025",
    "category": "Wearables / Health",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Galaxy S25 Ultra Voice-Led Print Ad",
    "date": "July 2025",
    "category": "Smartphones / Print Innovation",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Galaxy M Series 'TV Detectives'",
    "date": "March 2025",
    "category": "Smartphones",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Diwali Neo QLED 8K AI TV Film",
    "date": "October 2024",
    "category": "Televisions / Festive Brand",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "India Cheers Neeraj",
    "date": "July–August 2024",
    "category": "Brand / Sports",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Back to Campus 'Show Them How It's Done'",
    "date": "June 2024",
    "category": "Galaxy Ecosystem / Youth",
    "url": "https://exchange4media.com"
  },
  {
    "campaign_name": "India on Watch / World On My Watch",
    "date": "May–June 2024",
    "category": "Wearables",
    "url": "https://adsoftheworld.com"
  },
  {
    "campaign_name": "Blinkit 10-Minute Galaxy S24 Delivery",
    "date": "January 2024",
    "category": "Smartphones / Quick Commerce",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Care for Chennai Flood Relief",
    "date": "December 2023",
    "category": "Customer Service / Relief",
    "url": "https://samsung.com"
  },
  {
    "campaign_name": "Galaxy Z Flip5 & Z Fold5 'Flip Side'",
    "date": "November 2023",
    "category": "Smartphones / Foldables",
    "url": "https://exchange4media.com"
  },
  {
    "campaign_name": "Affordable Tech Upgrades & Exchange Campaign",
    "date": "September 2023",
    "category": "Smartphones / Festive Retail",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Galaxy Watch LTE 'Go Without Your Phone'",
    "date": "June 2023",
    "category": "Wearables",
    "url": "https://exchange4media.com"
  },
  {
    "campaign_name": "Galaxy A14 5G 'Awesome is for Everyone'",
    "date": "June 2023",
    "category": "Smartphones",
    "url": "https://afaqs.com"
  },
  {
    "campaign_name": "Solve for Tomorrow Season 2",
    "date": "April–December 2023",
    "category": "CSR / Youth Innovation",
    "url": "https://samsung.com"
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Samsung Campaign Archive Table
  const campaignList = document.getElementById('campaign-list');
  const searchInput = document.getElementById('campaign-search');
  const categoryFilter = document.getElementById('category-filter');

  function renderCampaigns(items) {
    if (!campaignList) return;
    
    if (items.length === 0) {
      campaignList.innerHTML = `
        <div class="py-12 text-center text-slate-500 font-mono text-xs uppercase">
          No campaigns found matching your filter criteria.
        </div>
      `;
      return;
    }

    campaignList.innerHTML = items.map((c, i) => {
      const num = String(i + 1).padStart(2, '0');
      return `
        <div class="py-5 px-4 sm:px-6 hover:bg-nue-card/60 transition-colors flex flex-col md:flex-row md:items-center justify-between gap-4 group">
          <div class="flex items-start md:items-center gap-4 sm:gap-6">
            <span class="font-mono text-xs text-slate-400 group-hover:text-nue-accent transition-colors pt-0.5 md:pt-0">
              ${num}
            </span>
            <div>
              <h4 class="font-display font-bold text-base sm:text-lg text-white group-hover:text-nue-accent transition-colors">
                ${c.campaign_name}
              </h4>
              <span class="text-xs font-mono text-slate-400">
                ${c.category}
              </span>
            </div>
          </div>

          <div class="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0">
            <span class="text-xs font-mono text-slate-400">
              ${c.date}
            </span>
            <a href="${c.url}" target="_blank" rel="noopener" class="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3 py-1 rounded-full border border-nue-border hover:border-slate-400 transition-all flex items-center gap-1.5">
              <span>View Source</span>
              <span>↗</span>
            </a>
          </div>
        </div>
      `;
    }).join('');
  }

  // Initial render
  renderCampaigns(samsungCampaigns);

  // Filter & Search Handler
  function filterCampaigns() {
    const query = searchInput ? searchInput.value.toLowerCase().trim() : '';
    const selectedCat = categoryFilter ? categoryFilter.value : 'all';

    const filtered = samsungCampaigns.filter(c => {
      const matchesQuery = c.campaign_name.toLowerCase().includes(query) ||
                           c.category.toLowerCase().includes(query) ||
                           c.date.toLowerCase().includes(query);
      
      const matchesCat = (selectedCat === 'all') || c.category.includes(selectedCat);
      return matchesQuery && matchesCat;
    });

    renderCampaigns(filtered);
  }

  if (searchInput) searchInput.addEventListener('input', filterCampaigns);
  if (categoryFilter) categoryFilter.addEventListener('change', filterCampaigns);

  // 2. Mobile Menu
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

  // 3. Navbar scroll effect
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 40) {
      navbar.classList.add('bg-nue-black/95', 'shadow-2xl');
      navbar.classList.remove('bg-nue-black/80');
    } else {
      navbar.classList.remove('bg-nue-black/95', 'shadow-2xl');
      navbar.classList.add('bg-nue-black/80');
    }
  });

  console.log('Nuestudio Portfolio initialized with 26 Samsung campaigns.');
});
