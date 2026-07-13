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
          <div class="plan-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:#6366f1"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
          </div>
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
        <div class="popular-badge">
          <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
          Recommandé
        </div>
        <div class="plan-header">
          <div class="plan-icon">
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:#a5b4fc"><polygon points="6 3 18 3 22 9 12 22 2 9"/><line x1="12" y1="22" x2="12" y2="9"/><polyline points="2 9 6 3 12 9 18 3 22 9"/></svg>
          </div>
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
          <span class="garantie-icon">
            @if (g.icon === 'lock') {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="color:#a5b4fc"><rect x="3" y="11" width="18" height="11" rx="2"/><path d="M7 11V7a5 5 0 0 1 10 0v4"/></svg>
            }
            @if (g.icon === 'wifi-off') {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="color:#67e8f9"><line x1="1" y1="1" x2="23" y2="23"/><path d="M16.72 11.06A10.94 10.94 0 0 1 19 12.55"/><path d="M5 12.55a10.94 10.94 0 0 1 5.17-2.39"/><path d="M10.71 5.05A16 16 0 0 1 22.56 9"/><path d="M1.42 9a15.91 15.91 0 0 1 4.7-2.88"/><path d="M8.53 16.11a6 6 0 0 1 6.95 0"/><line x1="12" y1="20" x2="12.01" y2="20"/></svg>
            }
            @if (g.icon === 'tool') {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="color:#f59e0b"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
            }
            @if (g.icon === 'globe') {
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round" style="color:#22c55e"><circle cx="12" cy="12" r="10"/><line x1="2" y1="12" x2="22" y2="12"/><path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"/></svg>
            }
          </span>
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
      white-space: nowrap; display: inline-flex; align-items: center; gap: 0.35rem;
    }
    .plan-header { margin-bottom: 1.5rem; }
    .plan-icon { margin-bottom: 0.75rem; display: flex; }
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
    .garantie-icon { flex-shrink: 0; display: flex; align-items: center; }
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
    { icon: 'lock', label: 'Paiement unique', desc: 'Aucun abonnement. Le logiciel vous appartient.' },
    { icon: 'wifi-off', label: 'Fonctionne hors ligne', desc: 'Installable en local, sans besoin d\'internet.' },
    { icon: 'tool', label: '12 mois de support', desc: 'Maintenance et support gratuits la 1ère année.' },
    { icon: 'globe', label: 'Adapté Afrique', desc: 'SYSCOHADA, FCFA, réalités locales.' },
  ];
}
