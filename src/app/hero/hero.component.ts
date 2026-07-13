import { Component, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-hero',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="hero" id="accueil">
  <!-- Orbs background -->
  <div class="orb orb-1"></div>
  <div class="orb orb-2"></div>
  <div class="orb orb-3"></div>
  <div class="grid-bg"></div>

  <div class="container hero-inner">
    <div class="hero-content">
      <div class="badge-pill">
        <span class="badge-dot"></span>
        Fonctionne en local — sans internet requis
      </div>

      <h1 class="hero-title">
        Gérez votre entreprise<br>
        <span class="gradient-text">sans complexité</span>
      </h1>

      <p class="hero-desc">
        Veltis est l'ERP conçu pour les entreprises africaines ambitieuses.
        Ventes, stocks, RH, comptabilité — tout centralisé, tout simplifié.
        Fonctionne <strong>en local sans internet</strong>, ou en réseau selon vos besoins.
      </p>

      <div class="hero-stats">
        <div class="stat">
          <span class="stat-num">100%</span>
          <span class="stat-label">Fonctionne en local</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">11+</span>
          <span class="stat-label">Modules intégrés</span>
        </div>
        <div class="stat-divider"></div>
        <div class="stat">
          <span class="stat-num">SYSCOHADA</span>
          <span class="stat-label">Comptabilité conforme</span>
        </div>
      </div>

      <div class="hero-actions">
        <a href="#tarifs" class="btn-primary-hero">
          Voir les tarifs
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path d="M3.75 9h10.5M9.75 5.25L13.5 9l-3.75 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
        </a>
        <a href="#fonctionnalites" class="btn-ghost-hero">
          <span class="play-icon">
            <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
              <path d="M3 2l10 5-10 5V2Z" fill="currentColor"/>
            </svg>
          </span>
          Voir les fonctionnalités
        </a>
      </div>
    </div>

    <div class="hero-visual">
      <div class="dashboard-mockup">
        <div class="mockup-header">
          <div class="mockup-dots">
            <span></span><span></span><span></span>
          </div>
          <div class="mockup-title">Veltis ERP — Dashboard</div>
        </div>
        <div class="mockup-body">
          <!-- KPI Cards -->
          <div class="kpi-row">
            @for (kpi of kpis; track kpi.label) {
              <div class="kpi-card" [style.--c]="kpi.color">
              <div class="kpi-icon">
                  @if (kpi.icon === 'revenue') {
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/></svg>
                  }
                  @if (kpi.icon === 'sales') {
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/><path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6"/></svg>
                  }
                  @if (kpi.icon === 'users') {
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>
                  }
                </div>
                <div class="kpi-val">{{ kpi.value }}</div>
                <div class="kpi-lab">{{ kpi.label }}</div>
                <div class="kpi-trend" [class.up]="kpi.up">{{ kpi.trend }}</div>
              </div>
            }
          </div>
          <!-- Chart bar mockup -->
          <div class="chart-mock">
            <div class="chart-title">Ventes du mois</div>
            <div class="bars">
              @for (h of chartBars; track $index) {
                <div class="bar" [style.height.%]="h" [style.animation-delay]="$index * 0.1 + 's'"></div>
              }
            </div>
          </div>
          <!-- Table mockup -->
          <div class="table-mock">
            @for (row of tableRows; track $index) {
              <div class="table-row">
                <div class="row-dot" [style.background]="row.color"></div>
                <div class="row-label">{{ row.label }}</div>
                <div class="row-val">{{ row.val }}</div>
                <div class="row-badge" [style.background]="row.badgeBg" [style.color]="row.badgeColor">{{ row.status }}</div>
              </div>
            }
          </div>
        </div>
      </div>
      <!-- Floating cards -->
      <div class="float-card float-1">
        <span class="float-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:#22c55e">
            <line x1="12" y1="1" x2="12" y2="23"/><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6"/>
          </svg>
        </span>
        <div>
          <div class="float-val">+2 350 000 XOF</div>
          <div class="float-lab">Chiffre d'affaires</div>
        </div>
      </div>
      <div class="float-card float-2">
        <span class="float-icon">
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.6" stroke-linecap="round" stroke-linejoin="round" style="color:#6366f1">
            <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/><polyline points="3.27 6.96 12 12.01 20.73 6.96"/><line x1="12" y1="22.08" x2="12" y2="12"/>
          </svg>
        </span>
        <div>
          <div class="float-val">847 articles</div>
          <div class="float-lab">En stock</div>
        </div>
      </div>
    </div>
  </div>

  <!-- Scroll indicator -->
  <div class="scroll-indicator">
    <div class="scroll-dot"></div>
  </div>
</section>
  `,
  styles: [`
    .hero {
      min-height: 100vh;
      display: flex;
      align-items: center;
      position: relative;
      overflow: hidden;
      padding: 7rem 0 4rem;
    }
    .orb {
      position: absolute; border-radius: 50%;
      filter: blur(80px); pointer-events: none;
    }
    .orb-1 { width: 600px; height: 600px; background: rgba(99,102,241,0.2); top: -200px; left: -200px; animation: float 8s ease-in-out infinite; }
    .orb-2 { width: 500px; height: 500px; background: rgba(139,92,246,0.15); bottom: -150px; right: -100px; animation: float 10s ease-in-out infinite reverse; }
    .orb-3 { width: 300px; height: 300px; background: rgba(6,182,212,0.1); top: 40%; left: 40%; animation: float 12s ease-in-out infinite; }
    .grid-bg {
      position: absolute; inset: 0;
      background-image: linear-gradient(rgba(255,255,255,0.03) 1px, transparent 1px),
                        linear-gradient(90deg, rgba(255,255,255,0.03) 1px, transparent 1px);
      background-size: 60px 60px;
      mask-image: radial-gradient(ellipse at center, rgba(0,0,0,0.5) 0%, transparent 70%);
    }
    .hero-inner {
      display: grid;
      grid-template-columns: 1fr 1fr;
      gap: 4rem;
      align-items: center;
      position: relative;
      z-index: 1;
    }
    .badge-pill {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.4rem 1rem;
      background: rgba(99,102,241,0.15);
      border: 1px solid rgba(99,102,241,0.3);
      border-radius: 50px;
      font-size: 0.8rem; font-weight: 600;
      color: #a5b4fc;
      margin-bottom: 1.5rem;
      animation: fadeInUp 0.6s ease both;
    }
    .badge-dot {
      width: 8px; height: 8px;
      background: #22c55e;
      border-radius: 50%;
      animation: pulse-glow 2s ease infinite;
    }
    .hero-title {
      font-size: clamp(2.5rem, 5vw, 3.75rem);
      font-weight: 900;
      line-height: 1.1;
      letter-spacing: -0.03em;
      color: #fff;
      margin-bottom: 1.25rem;
      animation: fadeInUp 0.6s ease 0.1s both;
    }
    .hero-desc {
      font-size: 1.05rem;
      color: rgba(255,255,255,0.65);
      line-height: 1.7;
      margin-bottom: 2rem;
      max-width: 480px;
      animation: fadeInUp 0.6s ease 0.2s both;
    }
    .hero-stats {
      display: flex; align-items: center; gap: 1.5rem;
      margin-bottom: 2.5rem;
      animation: fadeInUp 0.6s ease 0.3s both;
    }
    .stat { text-align: center; }
    .stat-num { display: block; font-size: 1.25rem; font-weight: 800; color: #fff; }
    .stat-label { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
    .stat-divider { width: 1px; height: 40px; background: rgba(255,255,255,0.1); }
    .hero-actions {
      display: flex; align-items: center; gap: 1rem; flex-wrap: wrap;
      animation: fadeInUp 0.6s ease 0.4s both;
    }
    .btn-primary-hero {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff; text-decoration: none;
      border-radius: 50px; font-weight: 700; font-size: 1rem;
      transition: all 0.3s;
      box-shadow: 0 4px 24px rgba(99,102,241,0.4);
    }
    .btn-primary-hero:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5); }
    .btn-ghost-hero {
      display: inline-flex; align-items: center; gap: 0.625rem;
      color: rgba(255,255,255,0.75); text-decoration: none;
      font-weight: 500; font-size: 0.95rem;
      transition: color 0.2s;
    }
    .btn-ghost-hero:hover { color: #fff; }
    .play-icon {
      width: 36px; height: 36px;
      background: rgba(255,255,255,0.1);
      border: 1px solid rgba(255,255,255,0.15);
      border-radius: 50%;
      display: flex; align-items: center; justify-content: center;
      transition: all 0.2s;
    }
    .btn-ghost-hero:hover .play-icon { background: rgba(255,255,255,0.15); }
    /* Mockup */
    .hero-visual { position: relative; animation: fadeInLeft 0.8s ease 0.3s both; }
    .dashboard-mockup {
      background: rgba(20,20,35,0.9);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 16px;
      overflow: hidden;
      box-shadow: 0 24px 80px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,255,255,0.05);
      animation: pulse-glow 4s ease-in-out infinite;
    }
    .mockup-header {
      display: flex; align-items: center; gap: 0.75rem;
      padding: 0.875rem 1rem;
      background: rgba(255,255,255,0.04);
      border-bottom: 1px solid rgba(255,255,255,0.06);
    }
    .mockup-dots { display: flex; gap: 6px; }
    .mockup-dots span { width: 10px; height: 10px; border-radius: 50%; }
    .mockup-dots span:nth-child(1) { background: #ef4444; }
    .mockup-dots span:nth-child(2) { background: #f59e0b; }
    .mockup-dots span:nth-child(3) { background: #22c55e; }
    .mockup-title { font-size: 0.75rem; color: rgba(255,255,255,0.4); font-weight: 500; }
    .mockup-body { padding: 1rem; }
    .kpi-row { display: grid; grid-template-columns: repeat(3, 1fr); gap: 0.625rem; margin-bottom: 1rem; }
    .kpi-card {
      background: rgba(255,255,255,0.05);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 10px; padding: 0.75rem; position: relative;
      overflow: hidden;
    }
    .kpi-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 2px;
      background: var(--c, #6366f1);
    }
    .kpi-icon { display: flex; margin-bottom: 0.25rem; }
    .kpi-val { font-size: 1rem; font-weight: 800; color: #fff; }
    .kpi-lab { font-size: 0.65rem; color: rgba(255,255,255,0.4); margin-top: 2px; }
    .kpi-trend { font-size: 0.65rem; color: #22c55e; font-weight: 600; margin-top: 2px; }
    .kpi-trend.up::before { content: '↑ '; }
    .chart-mock { background: rgba(255,255,255,0.03); border-radius: 10px; padding: 0.75rem; margin-bottom: 1rem; }
    .chart-title { font-size: 0.7rem; color: rgba(255,255,255,0.4); margin-bottom: 0.5rem; }
    .bars { display: flex; align-items: flex-end; gap: 4px; height: 60px; }
    .bar {
      flex: 1; background: linear-gradient(to top, #6366f1, #8b5cf6);
      border-radius: 3px 3px 0 0; opacity: 0.8;
      animation: barGrow 1s ease both;
    }
    @keyframes barGrow { from { transform: scaleY(0); transform-origin: bottom; } to { transform: scaleY(1); } }
    .table-mock { display: flex; flex-direction: column; gap: 0.4rem; }
    .table-row { display: flex; align-items: center; gap: 0.5rem; padding: 0.4rem 0.5rem; border-radius: 6px; background: rgba(255,255,255,0.03); }
    .row-dot { width: 8px; height: 8px; border-radius: 50%; flex-shrink: 0; }
    .row-label { flex: 1; font-size: 0.7rem; color: rgba(255,255,255,0.6); }
    .row-val { font-size: 0.7rem; font-weight: 600; color: #fff; }
    .row-badge { font-size: 0.6rem; font-weight: 700; padding: 2px 6px; border-radius: 10px; }
    /* Float cards */
    .float-card {
      position: absolute;
      display: flex; align-items: center; gap: 0.625rem;
      padding: 0.75rem 1rem;
      background: rgba(20,20,35,0.95);
      border: 1px solid rgba(255,255,255,0.12);
      border-radius: 12px;
      box-shadow: 0 8px 32px rgba(0,0,0,0.4);
      backdrop-filter: blur(10px);
    }
    .float-1 { bottom: -20px; left: -40px; animation: float 6s ease-in-out infinite; }
    .float-2 { top: 20px; right: -40px; animation: float 8s ease-in-out infinite reverse; }
    .float-icon { display: flex; align-items: center; }
    .float-val { font-size: 0.875rem; font-weight: 700; color: #fff; }
    .float-lab { font-size: 0.7rem; color: rgba(255,255,255,0.45); }
    /* Scroll */
    .scroll-indicator {
      position: absolute; bottom: 2rem; left: 50%; transform: translateX(-50%);
      width: 28px; height: 44px;
      border: 2px solid rgba(255,255,255,0.2);
      border-radius: 14px;
      display: flex; justify-content: center; padding-top: 6px;
    }
    .scroll-dot {
      width: 4px; height: 8px;
      background: rgba(255,255,255,0.5);
      border-radius: 2px;
      animation: scrollDown 2s ease-in-out infinite;
    }
    @keyframes scrollDown {
      0% { transform: translateY(0); opacity: 1; }
      100% { transform: translateY(14px); opacity: 0; }
    }
    @media (max-width: 900px) {
      .hero-inner { grid-template-columns: 1fr; }
      .hero-visual { display: none; }
      .hero { padding: 6rem 0 3rem; min-height: auto; }
    }
  `]
})
export class HeroComponent {
  kpis = [
    { icon: 'revenue', value: '2.35M', label: 'CA Mensuel', trend: '+18%', up: true, color: '#6366f1' },
    { icon: 'sales', value: '142', label: 'Ventes', trend: '+7%', up: true, color: '#22c55e' },
    { icon: 'users', value: '8', label: 'Employés', trend: '+2', up: true, color: '#f59e0b' }
  ];

  chartBars = [45, 62, 38, 80, 55, 90, 48, 72, 65, 88, 70, 95];

  tableRows = [
    { label: 'VT-20260622-0001', val: '150 000 XOF', status: 'Payée', color: '#22c55e', badgeBg: 'rgba(34,197,94,.15)', badgeColor: '#22c55e' },
    { label: 'VT-20260622-0002', val: '89 500 XOF', status: 'En cours', color: '#f59e0b', badgeBg: 'rgba(245,158,11,.15)', badgeColor: '#f59e0b' },
    { label: 'VT-20260622-0003', val: '320 000 XOF', status: 'Payée', color: '#22c55e', badgeBg: 'rgba(34,197,94,.15)', badgeColor: '#22c55e' },
  ];
}
