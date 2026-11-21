// Nuestudio Style Interactions & Interactive Samsung Campaign Archive for Utkarsh Seth

const samsungCampaigns = [
  {
    "campaign_name": "Galaxy A16 5G 'Small Village Out-influenced the Influencers'",
    "date": "October 2024",
    "category": "Smartphones / Influencer Marketing",
    "award": "🥇 Effie Gold 2025",
    "url": "https://samsung.com",
    "highlight": "Gold Effie winner: Mobilized authentic grassroots village creators instead of Tier-1 influencers."
  },
  {
    "campaign_name": "Galaxy Empowered 'Authority Crisis'",
    "date": "2024",
    "category": "CSR / Education & Social Good",
    "award": "🥇 Effie Gold 2025",
    "url": "https://samsung.com",
    "highlight": "Gold Effie winner: High-impact social education initiative addressing digital authority and learning barriers."
  },
  {
    "campaign_name": "Galaxy S24 Flagship 'Trojan Horse vs. Apple'",
    "date": "January 2024",
    "category": "Smartphones / AI Launch",
    "award": "🥈 2× Effie Silver 2025",
    "url": "https://afaqs.com",
    "highlight": "2× Silver Effie winner: Ambush search hijacking and comparative positioning driving massive iOS switchers."
  },
  {
    "campaign_name": "Galaxy Watch Series 'Stress Tests on Primetime'",
    "date": "June 2024",
    "category": "Wearables / Healthcare",
    "award": "🥈 Effie Silver 2025",
    "url": "https://adsoftheworld.com",
    "highlight": "Silver Effie winner: Live real-time stress monitoring integrated during high-stakes national television broadcasts."
  },
  {
    "campaign_name": "India Cheers Neeraj x Galaxy AI",
    "date": "July–August 2024",
    "category": "Brand / Sports IP",
    "award": "🥉 Clio Sports Bronze",
    "url": "https://samsung.com",
    "highlight": "Clio Sports Bronze: 120s cinematic film rallying the nation for Neeraj Chopra during Paris Olympics 2024."
  },
  {
    "campaign_name": "India #WithGalaxy Photography Challenge",
    "date": "January 2024 – 2026",
    "category": "Smartphones / Cultural IP",
    "award": "🏆 2× Guinness Records",
    "url": "https://samsung.com",
    "highlight": "Two Guinness World Records with filmmaker Kabir Khan and 31,000+ creator submissions."
  },
  {
    "campaign_name": "#PlayGalaxy Esports Tournament",
    "date": "2023–2026 (4 Seasons)",
    "category": "Gaming / Youth IP",
    "award": "🔥 350M+ Reach",
    "url": "https://samsung.com",
    "highlight": "Flagship gaming IP headlined by CarryMinati, Techno Gamerz, and top national esports rosters."
  },
  {
    "campaign_name": "TVF Panchayat & Permanent Roommates Integrations",
    "date": "2024",
    "category": "Entertainment / Content IP",
    "award": "⭐ Cult Viral Recall",
    "url": "https://theviralfever.com",
    "highlight": "Native episodic sketches in Phulera village with Prahlad, Vikas, and Binod seamlessly integrating Galaxy tech."
  },
  {
    "campaign_name": "Galaxy Z Fold8 & Prime Video Partnership",
    "date": "August 2026",
    "category": "Smartphones / Streaming Partnership",
    "url": "https://bwmarketingworld.com",
    "highlight": "Cinematic entertainment integration pairing foldable screen technology with Amazon Prime Video."
  },
  {
    "campaign_name": "Samsung Innovation Campus 2026",
    "date": "August 2026",
    "category": "CSR / AI Education",
    "url": "https://samsung.com",
    "highlight": "Youth skilling across AI, IoT, Big Data, and Coding with government bodies and premier universities."
  },
  {
    "campaign_name": "Snapchat Foldables Launch Partnership",
    "date": "July 2026",
    "category": "Smartphones / Social AR",
    "url": "https://afaqs.com",
    "highlight": "Custom augmented reality lenses and viral filters driving hands-free flex camera adoption."
  },
  {
    "campaign_name": "Galaxy A Series #TrustedByIndia",
    "date": "June 2026",
    "category": "Smartphones",
    "url": "https://instagram.com",
    "highlight": "Grassroots trust campaign celebrating millions of Indian Galaxy A users across Tier 2 and Tier 3 markets."
  },
  {
    "campaign_name": "Care for Clean India – Make the Invisible Visible",
    "date": "June 2026",
    "category": "Sustainability / CSR",
    "url": "https://samsung.com",
    "highlight": "Environmental awareness initiative highlighting microscopic air & water pollutants tackled by Samsung tech."
  },
  {
    "campaign_name": "Galaxy M17e 5G 'All in One Monster'",
    "date": "April 2026",
    "category": "Smartphones",
    "url": "https://afaqs.com",
    "highlight": "High-velocity digital performance engine scaling e-commerce sales on Amazon and Samsung.com."
  },
  {
    "campaign_name": "Vision AI TVs 'PLUS' Campaign",
    "date": "January 2026",
    "category": "Televisions / AI",
    "award": "🥈 Effie Silver 2025",
    "url": "https://samsung.com",
    "highlight": "Effie-recognized positioning of AI upscaling and smart spatial audio across Neo QLED and OLED lineups."
  },
  {
    "campaign_name": "DigiArivu Education Programme",
    "date": "November 2025",
    "category": "CSR / STEM Education",
    "url": "https://samsung.com",
    "highlight": "Digital literacy initiative equipping thousands of rural Tamil Nadu school students with smart tablets."
  },
  {
    "campaign_name": "Go Save Today – Bespoke AI ACs",
    "date": "September 2025",
    "category": "Home Appliances / AI",
    "url": "https://samsung.com",
    "highlight": "Data-backed energy saving demonstrations communicating SmartThings AI Energy mode benefits."
  },
  {
    "campaign_name": "Galaxy F36 5G 'India! Go Hi-FAI'",
    "date": "August 2025",
    "category": "Smartphones / Gen Z",
    "url": "https://monumentum.in",
    "highlight": "Youth-centric Flipkart exclusive launch activating college ambassadors and beatboxing creators."
  },
  {
    "campaign_name": "Big Celebration, Bigger Screen",
    "date": "August 2025",
    "category": "Televisions / Festive Retail",
    "url": "https://samsung.com",
    "highlight": "Nationwide festive consumer campaign boosting large-format screen sales (65\"+) during Cricket World Cup."
  },
  {
    "campaign_name": "Walk-a-thon India Season 3",
    "date": "July–August 2025",
    "category": "Wearables / Health",
    "url": "https://samsung.com",
    "highlight": "Gamified Samsung Health community challenge logging over 5 billion collective steps."
  },
  {
    "campaign_name": "Galaxy S25 Ultra Voice-Led Print Ad",
    "date": "July 2025",
    "category": "Smartphones / Print Innovation",
    "url": "https://afaqs.com",
    "highlight": "Interactive multi-page print ad connecting QR codes to AI voice assistance demonstrations."
  },
  {
    "campaign_name": "Galaxy M Series 'TV Detectives'",
    "date": "March 2025",
    "category": "Smartphones",
    "url": "https://afaqs.com",
    "highlight": "Humorous episodic series solving mystery phone drop problems with Monster battery and display resilience."
  },
  {
    "campaign_name": "Diwali Neo QLED 8K AI TV Film",
    "date": "October 2024",
    "category": "Televisions / Festive Brand",
    "url": "https://afaqs.com",
    "highlight": "Cinematic emotional storytelling connecting generations through AI-enhanced festive memory playback."
  },
  {
    "campaign_name": "Back to Campus 'Show Them How It's Done'",
    "date": "June 2024",
    "category": "Galaxy Ecosystem / Youth",
    "url": "https://exchange4media.com",
    "highlight": "Student creator campaign demonstrating multi-device synergy across Galaxy Tab, Book, and Phone."
  },
  {
    "campaign_name": "India on Watch / World On My Watch",
    "date": "May–June 2024",
    "category": "Wearables",
    "url": "https://adsoftheworld.com",
    "highlight": "Fitness empowerment campaign featuring real athletes monitoring ECG, BP, and sleep cycles."
  },
  {
    "campaign_name": "Blinkit 10-Minute Galaxy S24 Delivery",
    "date": "January 2024",
    "category": "Smartphones / Quick Commerce",
    "url": "https://afaqs.com",
    "highlight": "Pioneered ultra-fast 10-minute flagship smartphone delivery on Blinkit across major metros."
  },
  {
    "campaign_name": "Care for Chennai Flood Relief",
    "date": "December 2023",
    "category": "Customer Service / Relief",
    "url": "https://samsung.com",
    "highlight": "Rapid-response CSR and free service camp drive for flood-affected consumers in Tamil Nadu."
  },
  {
    "campaign_name": "Galaxy Z Flip5 & Z Fold5 'Flip Side'",
    "date": "November 2023",
    "category": "Smartphones / Foldables",
    "url": "https://exchange4media.com",
    "highlight": "Sensory viral dance challenge and out-of-home experiential booths across luxury malls."
  },
  {
    "campaign_name": "Affordable Tech Upgrades & Exchange Campaign",
    "date": "September 2023",
    "category": "Smartphones / Festive Retail",
    "url": "https://afaqs.com",
    "highlight": "Full-funnel festive trade-in drive reducing entry barrier for 5G device upgrades."
  },
  {
    "campaign_name": "Galaxy Watch LTE 'Go Without Your Phone'",
    "date": "June 2023",
    "category": "Wearables",
    "award": "🥉 Effie Bronze 2025",
    "url": "https://exchange4media.com",
    "highlight": "Effie-awarded liberation narrative highlighting eSIM autonomy for runners and commuters."
  },
  {
    "campaign_name": "Galaxy A14 5G 'Awesome is for Everyone'",
    "date": "June 2023",
    "category": "Smartphones",
    "url": "https://afaqs.com",
    "highlight": "Mass democratization of 5G, becoming India's #1 shipped 5G smartphone model."
  },
  {
    "campaign_name": "Solve for Tomorrow Season 2",
    "date": "April–December 2023",
    "category": "CSR / Youth Innovation",
    "url": "https://samsung.com",
    "highlight": "Pan-India youth innovation competition with IIT Delhi mentoring young problem solvers."
  }
];

document.addEventListener('DOMContentLoaded', () => {
  // 1. Render Samsung Campaign Archive Table
  const campaignList = document.getElementById('campaign-list');
  const searchInput = document.getElementById('campaign-search');
  const categoryFilter = document.getElementById('category-filter');
  const totalCountBadge = document.getElementById('total-campaigns-count');

  if (totalCountBadge) {
    totalCountBadge.textContent = `${samsungCampaigns.length}+`;
  }

  function renderCampaigns(items) {
    if (!campaignList) return;
    
    if (items.length === 0) {
      campaignList.innerHTML = `
        <div class="py-16 text-center text-slate-500 font-mono text-xs uppercase space-y-2">
          <p>No campaigns found matching your filter criteria.</p>
          <button onclick="resetFilters()" class="text-nue-accent hover:underline text-xs font-mono uppercase">Reset all filters</button>
        </div>
      `;
      return;
    }

    campaignList.innerHTML = items.map((c, i) => {
      const num = String(i + 1).padStart(2, '0');
      const awardBadge = c.award ? `
        <span class="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[10px] font-mono font-bold tracking-wide ${
          c.award.includes('Gold') || c.award.includes('Guinness') ? 'bg-amber-400/15 text-amber-300 border border-amber-400/30' :
          c.award.includes('Silver') ? 'bg-slate-300/15 text-slate-200 border border-slate-300/30' :
          c.award.includes('Bronze') ? 'bg-amber-700/20 text-amber-400 border border-amber-700/40' :
          'bg-nue-accent/20 text-nue-accent border border-nue-accent/40'
        }">
          ${c.award}
        </span>
      ` : '';

      return `
        <div class="py-5 px-4 sm:px-6 hover:bg-nue-card/70 transition-all duration-300 flex flex-col md:flex-row md:items-center justify-between gap-4 group rounded-xl border border-transparent hover:border-nue-border">
          <div class="flex items-start md:items-center gap-4 sm:gap-6 flex-1 min-w-0">
            <span class="font-mono text-xs text-slate-500 group-hover:text-nue-accent transition-colors pt-0.5 md:pt-0 shrink-0 font-bold">
              ${num}
            </span>
            <div class="space-y-1 min-w-0">
              <div class="flex flex-wrap items-center gap-2">
                <h4 class="font-display font-bold text-base sm:text-lg text-white group-hover:text-nue-accent transition-colors tracking-tight">
                  ${c.campaign_name}
                </h4>
                ${awardBadge}
              </div>
              <div class="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs font-mono text-slate-400">
                <span class="text-slate-300">${c.category}</span>
                ${c.highlight ? `<span class="hidden lg:inline text-slate-500">·</span><span class="hidden lg:inline text-slate-400 font-light truncate max-w-xl">${c.highlight}</span>` : ''}
              </div>
            </div>
          </div>

          <div class="flex items-center justify-between md:justify-end gap-6 pl-10 md:pl-0 shrink-0">
            <span class="text-xs font-mono text-slate-400 shrink-0">
              ${c.date}
            </span>
            <a href="${c.url}" target="_blank" rel="noopener" class="text-xs font-mono uppercase tracking-wider text-slate-300 hover:text-white px-3.5 py-1.5 rounded-full border border-nue-border hover:border-slate-300 hover:bg-white/5 transition-all flex items-center gap-1.5">
              <span>View Case</span>
              <span class="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform">↗</span>
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
                           c.date.toLowerCase().includes(query) ||
                           (c.award && c.award.toLowerCase().includes(query)) ||
                           (c.highlight && c.highlight.toLowerCase().includes(query));
      
      const matchesCat = (selectedCat === 'all') || 
                         (selectedCat === 'awards' && c.award) ||
                         c.category.includes(selectedCat);
      return matchesQuery && matchesCat;
    });

    renderCampaigns(filtered);
  }

  window.resetFilters = function() {
    if (searchInput) searchInput.value = '';
    if (categoryFilter) categoryFilter.value = 'all';
    renderCampaigns(samsungCampaigns);
  };

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
      navbar.classList.add('bg-nue-black/95', 'shadow-2xl', 'border-nue-border');
      navbar.classList.remove('bg-nue-black/80', 'border-nue-border/60');
    } else {
      navbar.classList.remove('bg-nue-black/95', 'shadow-2xl', 'border-nue-border');
      navbar.classList.add('bg-nue-black/80', 'border-nue-border/60');
    }
  });

  console.log(`Utkarsh Seth Portfolio loaded with ${samsungCampaigns.length} verified campaigns and Effie 2025 showcase.`);
});
