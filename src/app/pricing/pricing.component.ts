import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-pricing',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="pricing" id="tarifs">
  <div class="orb-pricing"></div>
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Tarifs</div>
      <h2 class="section-title">Un prix clair,<br><span class="gradient-text">sans surprise</span></h2>
      <p class="section-desc">Paiement unique — pas d'abonnement mensuel. Votre logiciel vous appartient.</p>
    </div>

    <div class="pricing-grid">
      <!-- Plan Essentiel -->
      <div class="plan-card">
        <div class="plan-header">
          <div class="plan-icon">🚀</div>
          <div class="plan-name">Veltis Essentiel</div>
          <div class="plan-tagline">Pour démarrer et gérer efficacement</div>
        </div>
        <div class="plan-price">
          <span class="currency">XOF</span>
          <span class="amount">150 000</span>
          <span class="period">paiement unique</span>
        </div>
        <ul class="plan-features">
          @for (f of planEssentiel; track f) {
            <li [class.included]="f.included" [class.excluded]="!f.included">
              @if (f.included) {
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="rgba(34,197,94,0.2)"/><path d="M5 8l2 2 4-4" stroke="#22c55e" stroke-width="1.5" stroke-linecap="round"/></svg>
              } @else {
                <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="rgba(100,100,100,0.15)"/><path d="M5 5l6 6M11 5L5 11" stroke="rgba(255,255,255,0.25)" stroke-width="1.5" stroke-linecap="round"/></svg>
              }
              <span>{{ f.label }}</span>
            </li>
          }
        </ul>
        <a href="#contact" class="btn-plan outline">Choisir Essentiel</a>
      </div>

      <!-- Plan Pro -->
      <div class="plan-card plan-popular">
        <div class="popular-badge">✨ Recommandé</div>
        <div class="plan-header">
          <div class="plan-icon">💎</div>
          <div class="plan-name">Veltis Pro</div>
          <div class="plan-tagline">La solution complète avec comptabilité</div>
        </div>
        <div class="plan-price">
          <span class="currency">XOF</span>
          <span class="amount">200 000</span>
          <span class="period">paiement unique</span>
        </div>
        <ul class="plan-features">
          @for (f of planPro; track f) {
            <li class="included">
              <svg width="16" height="16" viewBox="0 0 16 16" fill="none"><circle cx="8" cy="8" r="8" fill="rgba(99,102,241,0.3)"/><path d="M5 8l2 2 4-4" stroke="#a5b4fc" stroke-width="1.5" stroke-linecap="round"/></svg>
              <span>{{ f }}</span>
            </li>
          }
        </ul>
        <a href="#contact" class="btn-plan primary">Choisir Pro</a>
      </div>
    </div>

    <!-- Garanties -->
    <div class="garanties">
      @for (g of garanties; track g.label) {
        <div class="garantie">
          <span class="garantie-icon">{{ g.icon }}</span>
          <div>
            <div class="garantie-title">{{ g.label }}</div>
            <div class="garantie-desc">{{ g.desc }}</div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
  `,
  styles: [`
    .pricing {
      padding: 7rem 0;
      position: relative;
      overflow: hidden;
    }
    .orb-pricing {
      position: absolute;
      width: 600px; height: 600px;
      background: radial-gradient(circle, rgba(99,102,241,0.12) 0%, transparent 70%);
      top: 50%; left: 50%; transform: translate(-50%, -50%);
      pointer-events: none;
    }
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
    .pricing-grid {
      display: grid; grid-template-columns: 1fr 1fr;
      gap: 1.5rem; max-width: 860px; margin: 0 auto 3rem;
    }
    .plan-card {
      position: relative;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px; padding: 2.5rem;
      transition: all 0.3s;
    }
    .plan-card:hover { transform: translateY(-4px); box-shadow: 0 20px 60px rgba(0,0,0,0.3); }
    .plan-popular {
      background: rgba(99,102,241,0.1);
      border-color: rgba(99,102,241,0.4);
      box-shadow: 0 0 0 1px rgba(99,102,241,0.2), 0 20px 60px rgba(99,102,241,0.15);
    }
    .popular-badge {
      position: absolute; top: -14px; left: 50%; transform: translateX(-50%);
      padding: 0.35rem 1.25rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700; color: #fff;
      white-space: nowrap;
    }
    .plan-header { margin-bottom: 1.5rem; }
    .plan-icon { font-size: 2rem; margin-bottom: 0.75rem; }
    .plan-name { font-size: 1.375rem; font-weight: 800; color: #fff; margin-bottom: 0.25rem; }
    .plan-tagline { font-size: 0.85rem; color: rgba(255,255,255,0.5); }
    .plan-price {
      display: flex; align-items: baseline; gap: 0.25rem;
      padding: 1.25rem 0; border-top: 1px solid rgba(255,255,255,0.08);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      margin-bottom: 1.5rem; flex-wrap: wrap;
    }
    .currency { font-size: 0.875rem; font-weight: 600; color: rgba(255,255,255,0.5); align-self: flex-start; margin-top: 8px; }
    .amount { font-size: 2.75rem; font-weight: 900; color: #fff; line-height: 1; letter-spacing: -0.03em; }
    .plan-popular .amount { background: var(--gradient-text); -webkit-background-clip: text; -webkit-text-fill-color: transparent; background-clip: text; }
    .period { font-size: 0.78rem; color: rgba(255,255,255,0.35); align-self: flex-end; margin-bottom: 4px; width: 100%; }
    .plan-features { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; margin-bottom: 2rem; }
    .plan-features li { display: flex; align-items: center; gap: 0.625rem; font-size: 0.875rem; }
    .plan-features li.included { color: rgba(255,255,255,0.85); }
    .plan-features li.excluded { color: rgba(255,255,255,0.25); }
    .btn-plan {
      display: block; width: 100%; padding: 0.875rem;
      border-radius: 12px; font-weight: 700; font-size: 0.95rem;
      text-align: center; text-decoration: none; transition: all 0.3s;
      cursor: pointer;
    }
    .btn-plan.outline {
      background: none; border: 1.5px solid rgba(255,255,255,0.2); color: rgba(255,255,255,0.8);
    }
    .btn-plan.outline:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
    .btn-plan.primary {
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border: none; color: #fff;
      box-shadow: 0 4px 20px rgba(99,102,241,0.4);
    }
    .btn-plan.primary:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5); }
    .garanties {
      display: grid; grid-template-columns: repeat(4, 1fr);
      gap: 1.5rem; max-width: 860px; margin: 0 auto;
    }
    .garantie {
      display: flex; align-items: flex-start; gap: 0.75rem;
      padding: 1.25rem; background: rgba(255,255,255,0.03);
      border: 1px solid rgba(255,255,255,0.07); border-radius: 14px;
    }
    .garantie-icon { font-size: 1.5rem; flex-shrink: 0; }
    .garantie-title { font-size: 0.875rem; font-weight: 600; color: #fff; margin-bottom: 0.2rem; }
    .garantie-desc { font-size: 0.75rem; color: rgba(255,255,255,0.4); line-height: 1.5; }
    @media (max-width: 768px) {
      .pricing-grid { grid-template-columns: 1fr; }
      .garanties { grid-template-columns: 1fr 1fr; }
      .pricing { padding: 4rem 0; }
    }
    @media (max-width: 480px) {
      .garanties { grid-template-columns: 1fr; }
    }
  `]
})
export class PricingComponent {
  planEssentiel = [
    { label: 'Ventes & Caisse rapide', included: true },
    { label: 'Gestion des stocks (magasin + boutique)', included: true },
    { label: 'Clients & Fournisseurs', included: true },
    { label: 'Commandes fournisseurs', included: true },
    { label: 'Ressources Humaines & Paie', included: true },
    { label: 'Dépenses & Budgets', included: true },
    { label: 'Tableau de bord & Statistiques', included: true },
    { label: 'Gestion des rôles et permissions', included: true },
    { label: 'Fonctionne en local sans internet', included: true },
    { label: '12 mois de maintenance & support inclus', included: true },
    { label: 'Module Comptabilité SYSCOHADA', included: false },
    { label: 'Grand livre, Bilan & Compte de résultat', included: false },
  ];

  planPro = [
    'Tout le plan Essentiel',
    'Module Comptabilité SYSCOHADA complet',
    'Plan comptable 106 comptes (classes 1-8)',
    'Écritures automatiques depuis les ventes',
    'Grand livre & Balance générale',
    'Bilan & Compte de résultat',
    'Flux de trésorerie',
    '12 mois de maintenance & support inclus',
  ];

  garanties = [
    { icon: '🔒', label: 'Paiement unique', desc: 'Aucun abonnement. Le logiciel vous appartient.' },
    { icon: '📡', label: 'Fonctionne hors ligne', desc: 'Installable en local, sans besoin d\'internet.' },
    { icon: '🛠️', label: '12 mois de support', desc: 'Maintenance et support gratuits la 1ère année.' },
    { icon: '🌍', label: 'Adapté Afrique', desc: 'SYSCOHADA, FCFA, réalités locales.' },
  ];
}
