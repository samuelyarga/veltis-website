import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-features',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="features" id="fonctionnalites">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Fonctionnalités</div>
      <h2 class="section-title">Tout ce dont votre entreprise<br><span class="gradient-text">a besoin</span></h2>
      <p class="section-desc">11 modules intégrés pour couvrir chaque aspect de votre activité, du premier client à la dernière écriture comptable.</p>
    </div>

    <!-- Main features grid -->
    <div class="features-grid">
      @for (f of features; track f.title) {
        <div class="feature-card" [class.featured]="f.featured">
          <div class="feature-icon-wrap" [style.background]="f.iconBg">
            <span class="feature-icon">
              @if (f.icon === 'sales') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
              }
              @if (f.icon === 'box') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/></svg>
              }
              @if (f.icon === 'handshake') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
              }
              @if (f.icon === 'briefcase') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 7V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v2"/><line x1="12" y1="12" x2="12" y2="17"/><line x1="9.5" y1="14.5" x2="14.5" y2="14.5"/></svg>
              }
              @if (f.icon === 'wallet') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M20 12V6a2 2 0 0 0-2-2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-6"/><path d="M16 12h4a2 2 0 0 1 0 4h-4a2 2 0 0 1 0-4z"/></svg>
              }
              @if (f.icon === 'book') {
                <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4 19.5A2.5 2.5 0 0 1 6.5 17H20"/><path d="M6.5 2H20v20H6.5A2.5 2.5 0 0 1 4 19.5v-15A2.5 2.5 0 0 1 6.5 2z"/></svg>
              }
            </span>
          </div>
          <h3 class="feature-title">{{ f.title }}</h3>
          <p class="feature-desc">{{ f.desc }}</p>
          <ul class="feature-list">
            @for (item of f.items; track item) {
              <li>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                  <circle cx="7" cy="7" r="7" fill="rgba(99,102,241,0.2)"/>
                  <path d="M4 7l2 2 4-4" stroke="#818cf8" stroke-width="1.3" stroke-linecap="round"/>
                </svg>
                {{ item }}
              </li>
            }
          </ul>
          @if (f.featured) {
            <div class="featured-badge">
              <svg width="12" height="12" viewBox="0 0 24 24" fill="currentColor" style="flex-shrink:0"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>
              Populaire
            </div>
          }
        </div>
      }
    </div>

    <!-- Module pills -->
    <div class="modules-section">
      <p class="modules-label">Et bien plus encore…</p>
      <div class="modules-pills">
        @for (m of modules; track m) {
          <span class="module-pill">{{ m }}</span>
        }
      </div>
    </div>

    <!-- Bannière local -->
    <div class="local-banner">
      <div class="local-icon">
        <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#67e8f9">
          <path d="M1 6l5 5 5-5 5 5 5-5"/><path d="M12 12v8"/><circle cx="12" cy="22" r="1"/>
        </svg>
      </div>
      <div class="local-content">
        <div class="local-title">Fonctionne en local, sans internet</div>
        <div class="local-desc">
          Veltis s'installe sur votre propre serveur local. Vos données restent chez vous,
          et le logiciel continue de fonctionner même sans connexion internet.
          Idéal pour les zones à connectivité limitée ou les entreprises soucieuses de leur confidentialité.
        </div>
      </div>
      <div class="local-badges">
        <span class="local-badge">✓ Hors ligne</span>
        <span class="local-badge">✓ Données locales</span>
        <span class="local-badge">✓ Réseau local</span>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .features {
      padding: 7rem 0;
      position: relative;
    }
    .features::before {
      content: '';
      position: absolute;
      top: 0; left: 0; right: 0;
      height: 1px;
      background: linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent);
    }
    .section-header { text-align: center; margin-bottom: 4rem; }
    .section-tag {
      display: inline-block;
      padding: 0.35rem 1rem;
      background: rgba(99,102,241,0.12);
      border: 1px solid rgba(99,102,241,0.25);
      border-radius: 50px;
      font-size: 0.78rem; font-weight: 700;
      color: #a5b4fc;
      text-transform: uppercase; letter-spacing: 0.1em;
      margin-bottom: 1rem;
    }
    .section-title {
      font-size: clamp(2rem, 4vw, 2.75rem);
      font-weight: 800; line-height: 1.2;
      letter-spacing: -0.02em; color: #fff;
      margin-bottom: 1rem;
    }
    .section-desc {
      font-size: 1rem; color: rgba(255,255,255,0.55);
      max-width: 520px; margin: 0 auto; line-height: 1.7;
    }
    .features-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
      gap: 1.5rem;
    }
    .feature-card {
      position: relative;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px;
      padding: 2rem;
      transition: all 0.3s;
      overflow: hidden;
    }
    .feature-card::before {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, rgba(99,102,241,0.06) 0%, transparent 60%);
      opacity: 0;
      transition: opacity 0.3s;
    }
    .feature-card:hover {
      border-color: rgba(99,102,241,0.3);
      transform: translateY(-4px);
      box-shadow: 0 20px 60px rgba(0,0,0,0.3);
    }
    .feature-card:hover::before { opacity: 1; }
    .feature-card.featured {
      border-color: rgba(99,102,241,0.4);
      background: rgba(99,102,241,0.08);
      grid-row: span 1;
    }
    .feature-icon-wrap {
      width: 56px; height: 56px;
      border-radius: 14px;
      display: flex; align-items: center; justify-content: center;
      margin-bottom: 1.25rem;
    }
    .feature-icon { display: flex; align-items: center; }
    .feature-title {
      font-size: 1.125rem; font-weight: 700;
      color: #fff; margin-bottom: 0.625rem;
    }
    .feature-desc {
      font-size: 0.875rem; color: rgba(255,255,255,0.55);
      line-height: 1.65; margin-bottom: 1.25rem;
    }
    .feature-list {
      list-style: none; display: flex; flex-direction: column; gap: 0.5rem;
    }
    .feature-list li {
      display: flex; align-items: center; gap: 0.5rem;
      font-size: 0.8rem; color: rgba(255,255,255,0.65);
    }
    .featured-badge {
      position: absolute; top: 1.25rem; right: 1.25rem;
      padding: 0.25rem 0.75rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      border-radius: 50px;
      font-size: 0.72rem; font-weight: 700; color: #fff;
      display: flex; align-items: center; gap: 0.35rem;
    }
    .local-icon { flex-shrink: 0; display: flex; align-items: center; }
    .modules-label { font-size: 0.875rem; color: rgba(255,255,255,0.4); margin-bottom: 1.25rem; }
    .modules-pills { display: flex; flex-wrap: wrap; justify-content: center; gap: 0.625rem; }
    .module-pill {
      padding: 0.4rem 1rem;
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 50px;
      font-size: 0.8rem; color: rgba(255,255,255,0.6);
      transition: all 0.2s;
      cursor: default;
    }
    .module-pill:hover { border-color: rgba(99,102,241,0.4); color: #a5b4fc; }
    .local-banner {
      display: flex; align-items: center; gap: 1.5rem;
      margin-top: 3rem; padding: 2rem;
      background: rgba(6,182,212,0.06);
      border: 1px solid rgba(6,182,212,0.25);
      border-radius: 20px; flex-wrap: wrap;
    }
    .local-icon { flex-shrink: 0; display: flex; align-items: center; }
    .local-content { flex: 1; min-width: 200px; }
    .local-title { font-size: 1.125rem; font-weight: 700; color: #fff; margin-bottom: 0.5rem; }
    .local-desc { font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.7; }
    .local-badges { display: flex; flex-direction: column; gap: 0.5rem; flex-shrink: 0; }
    .local-badge {
      padding: 0.35rem 0.875rem;
      background: rgba(6,182,212,0.15); border: 1px solid rgba(6,182,212,0.3);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700; color: #67e8f9; white-space: nowrap;
    }
    @media (max-width: 768px) {
      .features { padding: 4rem 0; }
      .local-banner { flex-direction: column; text-align: center; }
      .local-badges { flex-direction: row; justify-content: center; }
    }
  `]
})
export class FeaturesComponent {
  features = [
    {
      icon: 'sales', title: 'Ventes & Caisse',
      iconBg: 'rgba(99,102,241,0.15)',
      desc: 'Gérez vos ventes au comptoir avec une caisse rapide ultra-réactive. Scanner, ticket, encaissement en quelques secondes.',
      items: ['Caisse rapide avec scanner code-barres', 'Factures clients professionnelles', 'Suivi des encaissements', 'Statistiques en temps réel'],
      featured: true
    },
    {
      icon: 'box', title: 'Stocks & Inventaires',
      iconBg: 'rgba(6,182,212,0.15)',
      desc: 'Double stock (magasin + boutique), alertes automatiques, transferts et inventaires avec validation.',
      items: ['Stock magasin et boutique séparés', 'Alertes de rupture automatiques', 'Transferts inter-sites', 'Inventaires périodiques'],
      featured: false
    },
    {
      icon: 'handshake', title: 'Clients & Fournisseurs',
      iconBg: 'rgba(34,197,94,0.15)',
      desc: 'Centralisez toutes vos relations commerciales. Historiques, relances, commandes fournisseurs.',
      items: ['Fiche client complète', 'Historique des achats', 'Commandes fournisseurs', 'Suivi des paiements'],
      featured: false
    },
    {
      icon: 'briefcase', title: 'Ressources Humaines',
      iconBg: 'rgba(245,158,11,0.15)',
      desc: 'Gérez vos employés, générez les bulletins de paie avec calcul CNSS et IUTS automatique.',
      items: ['Fiches employés complètes', 'Bulletins de paie automatiques', 'Calcul CNSS & IUTS', 'Simulation de paie'],
      featured: false
    },
    {
      icon: 'wallet', title: 'Dépenses & Budgets',
      iconBg: 'rgba(239,68,68,0.15)',
      desc: 'Suivez vos charges, créez des budgets, programmez les dépenses récurrentes.',
      items: ['Catégories de dépenses', 'Dépenses récurrentes', 'Budgets par catégorie', 'Statistiques détaillées'],
      featured: false
    },
    {
      icon: 'book', title: 'Comptabilité SYSCOHADA',
      iconBg: 'rgba(139,92,246,0.15)',
      desc: 'Plan comptable SYSCOHADA complet, écritures automatiques, bilan, compte de résultat et balance.',
      items: ['106 comptes SYSCOHADA', 'Écritures automatiques', 'Bilan & compte de résultat', 'Grand livre & balance'],
      featured: false
    }
  ];

  modules = ['Tableau de bord', 'Gestion des rôles', 'Comptes & transactions', 'Commandes fournisseurs', 'Transferts de stock', 'Factures proforma', 'Mobile responsive'];
}
