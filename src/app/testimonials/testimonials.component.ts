import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-testimonials',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="testimonials" id="temoignages">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Témoignages</div>
      <h2 class="section-title">Ils ont choisi <span class="gradient-text">Veltis</span></h2>
      <p class="section-desc">Des entrepreneurs qui ont transformé leur gestion quotidienne.</p>
    </div>

    <div class="testimonials-grid">
      @for (t of testimonials; track t.name) {
        <div class="testimonial-card">
          <div class="quote-icon">"</div>
          <p class="testimonial-text">{{ t.text }}</p>
          <div class="testimonial-author">
            <div class="author-avatar" [style.background]="t.avatarBg">
              {{ t.initials }}
            </div>
            <div>
              <div class="author-name">{{ t.name }}</div>
              <div class="author-role">{{ t.role }}</div>
            </div>
            <div class="stars">
              @for (s of [1,2,3,4,5]; track s) { <span>★</span> }
            </div>
          </div>
        </div>
      }
    </div>

    <!-- Stats bar -->
    <div class="stats-bar">
      @for (s of stats; track s.label) {
        <div class="stat-item">
          <div class="stat-num gradient-text">{{ s.num }}</div>
          <div class="stat-label">{{ s.label }}</div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  styles: [`
    .testimonials { padding: 7rem 0; }
    .section-header { text-align: center; margin-bottom: 4rem; }
    .section-tag {
      display: inline-block; padding: 0.35rem 1rem;
      background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700;
      color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 2.75rem); font-weight: 800; line-height: 1.2;
      letter-spacing: -0.02em; color: #fff; margin-bottom: 1rem;
    }
    .section-desc { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 440px; margin: 0 auto; }
    .testimonials-grid {
      display: grid; grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem; margin-bottom: 4rem;
    }
    .testimonial-card {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; padding: 2rem;
      transition: all 0.3s; position: relative;
    }
    .testimonial-card:hover {
      border-color: rgba(99,102,241,0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .quote-icon {
      font-size: 4rem; line-height: 1; color: rgba(99,102,241,0.3);
      font-family: Georgia, serif; margin-bottom: 0.5rem;
    }
    .testimonial-text {
      font-size: 0.9rem; color: rgba(255,255,255,0.7);
      line-height: 1.75; margin-bottom: 1.5rem; font-style: italic;
    }
    .testimonial-author { display: flex; align-items: center; gap: 0.75rem; }
    .author-avatar {
      width: 44px; height: 44px; border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.875rem; color: #fff; flex-shrink: 0;
    }
    .author-name { font-size: 0.875rem; font-weight: 700; color: #fff; }
    .author-role { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
    .stars { margin-left: auto; color: #f59e0b; font-size: 0.875rem; }
    .stats-bar {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1rem; padding: 2.5rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
    }
    .stat-item { text-align: center; }
    .stat-num { font-size: 2.25rem; font-weight: 900; letter-spacing: -0.02em; }
    .stat-label { font-size: 0.8rem; color: rgba(255,255,255,0.45); margin-top: 0.25rem; }
    @media (max-width: 768px) {
      .stats-bar { grid-template-columns: 1fr 1fr; }
      .testimonials { padding: 4rem 0; }
    }
    @media (max-width: 480px) {
      .stats-bar { grid-template-columns: 1fr; }
    }
  `]
})
export class TestimonialsComponent {
  testimonials = [
    {
      text: "Avant Veltis, je gérais tout sur des cahiers. Aujourd'hui je vois mes ventes en temps réel, mes stocks ne font plus défaut et mes employés sont payés dans les règles. C'est une révolution pour ma boutique.",
      name: 'Aminata Konaté', role: 'Gérante, Boutique Mode Ouaga',
      initials: 'AK', avatarBg: 'linear-gradient(135deg, #6366f1, #8b5cf6)'
    },
    {
      text: "La gestion de la paie avec le calcul automatique du CNSS et de l'IUTS nous a fait gagner des heures chaque mois. Le module RH est vraiment bien pensé pour nos réalités.",
      name: 'Ibrahim Sawadogo', role: 'DRH, Entreprise BTP Bobo',
      initials: 'IS', avatarBg: 'linear-gradient(135deg, #06b6d4, #0891b2)'
    },
    {
      text: "La version Pro avec la comptabilité SYSCOHADA nous permet d'avoir notre bilan directement depuis le logiciel. Fini les fichiers Excel désordonnés. Notre comptable est fan.",
      name: 'Mariam Traoré', role: 'Directrice, Import-Export Lomé',
      initials: 'MT', avatarBg: 'linear-gradient(135deg, #22c55e, #16a34a)'
    }
  ];

  stats = [
    { num: '50+', label: 'Entreprises équipées' },
    { num: '11', label: 'Modules intégrés' },
    { num: '99%', label: 'Taux de satisfaction' },
    { num: '24h', label: 'Délai de déploiement' },
  ];
}
