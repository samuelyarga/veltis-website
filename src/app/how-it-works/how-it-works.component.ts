import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-how-it-works',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="how" id="comment-ca-marche">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">Processus</div>
      <h2 class="section-title">Comment ça <span class="gradient-text">marche ?</span></h2>
      <p class="section-desc">De la première prise de contact à la mise en production, nous vous accompagnons à chaque étape.</p>
    </div>

    <div class="steps-row">
      @for (step of steps; track step.num; let last = $last) {
        <div class="step-wrap">
          <div class="step-card">
            <div class="step-num-wrap">
              <div class="step-num">{{ step.num }}</div>
              <div class="step-icon">
                @if (step.icon === 'phone') {
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12 19.79 19.79 0 0 1 1.61 3.36 2 2 0 0 1 3.6 1.18h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 21.18 16.92z"/></svg>
                }
                @if (step.icon === 'settings') {
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-4 0v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1 0-4h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 2.83-2.83l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>
                }
                @if (step.icon === 'graduation') {
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M22 10v6M2 10l10-5 10 5-10 5z"/><path d="M6 12v5c3 3 9 3 12 0v-5"/></svg>
                }
                @if (step.icon === 'rocket') {
                  <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.7" stroke-linecap="round" stroke-linejoin="round"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"/><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"/><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"/><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"/></svg>
                }
              </div>
            </div>
            <h3 class="step-title">{{ step.title }}</h3>
            <p class="step-desc">{{ step.desc }}</p>
            <ul class="step-details">
              @for (d of step.details; track d) {
                <li>{{ d }}</li>
              }
            </ul>
            <div class="step-duration">
              <svg width="13" height="13" viewBox="0 0 14 14" fill="none">
                <circle cx="7" cy="7" r="6" stroke="currentColor" stroke-width="1.3"/>
                <path d="M7 4v3.5l2 1.5" stroke="currentColor" stroke-width="1.3" stroke-linecap="round"/>
              </svg>
              {{ step.duration }}
            </div>
          </div>
          @if (!last) {
            <div class="step-arrow">
              <svg width="32" height="32" viewBox="0 0 32 32" fill="none">
                <path d="M6 16h20M20 10l6 6-6 6" stroke="url(#arr)" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <defs>
                  <linearGradient id="arr" x1="6" y1="16" x2="26" y2="16">
                    <stop offset="0%" stop-color="#6366f1"/>
                    <stop offset="100%" stop-color="#8b5cf6"/>
                  </linearGradient>
                </defs>
              </svg>
            </div>
          }
        </div>
      }
    </div>

    <!-- CTA bas -->
    <div class="how-cta">
      <p>Prêt à commencer ? C'est plus simple que vous ne le pensez.</p>
      <a href="#contact" class="btn-cta">
        Demander une démonstration gratuite
        <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
          <path d="M3.75 9h10.5M9.75 5.25L13.5 9l-3.75 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
      </a>
    </div>
  </div>
</section>
  `,
  styles: [`
    .how { padding: 7rem 0; position: relative; }
    .how::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 1px;
      background: linear-gradient(90deg, transparent, rgba(99,102,241,0.5), transparent);
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
    .section-desc { font-size: 1rem; color: rgba(255,255,255,0.55); max-width: 480px; margin: 0 auto; }
    .steps-row {
      display: flex; align-items: flex-start; justify-content: center;
      gap: 0; flex-wrap: wrap; margin-bottom: 4rem;
    }
    .step-wrap { display: flex; align-items: center; gap: 0; }
    .step-card {
      width: 240px; padding: 2rem 1.5rem;
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08);
      border-radius: 20px; transition: all 0.3s;
      position: relative; overflow: hidden;
    }
    .step-card::before {
      content: ''; position: absolute; top: 0; left: 0; right: 0; height: 3px;
      background: linear-gradient(90deg, #6366f1, #8b5cf6);
      transform: scaleX(0); transform-origin: left;
      transition: transform 0.4s ease;
    }
    .step-card:hover { border-color: rgba(99,102,241,0.3); transform: translateY(-4px); }
    .step-card:hover::before { transform: scaleX(1); }
    .step-num-wrap { display: flex; align-items: center; gap: 0.75rem; margin-bottom: 1.25rem; }
    .step-num {
      width: 36px; height: 36px; border-radius: 50%;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      display: flex; align-items: center; justify-content: center;
      font-size: 0.9rem; font-weight: 800; color: #fff; flex-shrink: 0;
    }
    .step-icon { display: flex; align-items: center; color: rgba(255,255,255,0.7); }
    .step-title { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.625rem; }
    .step-desc { font-size: 0.8rem; color: rgba(255,255,255,0.5); line-height: 1.6; margin-bottom: 1rem; }
    .step-details { list-style: none; display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
    .step-details li {
      font-size: 0.75rem; color: rgba(255,255,255,0.6);
      padding-left: 1rem; position: relative;
    }
    .step-details li::before { content: '→'; position: absolute; left: 0; color: #6366f1; font-size: 0.7rem; }
    .step-duration {
      display: inline-flex; align-items: center; gap: 0.35rem;
      padding: 0.25rem 0.625rem;
      background: rgba(99,102,241,0.1); border-radius: 20px;
      font-size: 0.7rem; font-weight: 600; color: #a5b4fc;
    }
    .step-arrow {
      padding: 0 0.75rem; flex-shrink: 0;
      opacity: 0.6;
    }
    .how-cta { text-align: center; }
    .how-cta p { color: rgba(255,255,255,0.5); font-size: 1rem; margin-bottom: 1.5rem; }
    .btn-cta {
      display: inline-flex; align-items: center; gap: 0.5rem;
      padding: 0.875rem 2rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff; text-decoration: none; border-radius: 50px;
      font-weight: 700; font-size: 1rem;
      box-shadow: 0 4px 24px rgba(99,102,241,0.4);
      transition: all 0.3s;
    }
    .btn-cta:hover { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5); }
    @media (max-width: 900px) {
      .steps-row { flex-direction: column; align-items: center; }
      .step-arrow { transform: rotate(90deg); }
      .how { padding: 4rem 0; }
    }
  `]
})
export class HowItWorksComponent {
  steps = [
    {
      num: '01', icon: 'phone',
      title: 'Contact & Démo',
      desc: 'Vous nous contactez par WhatsApp ou email. On vous fait une démonstration gratuite du logiciel.',
      details: ['Démonstration en temps réel', 'Réponse sous 24h', 'Aucun engagement'],
      duration: 'Jour 1'
    },
    {
      num: '02', icon: 'settings',
      title: 'Installation',
      desc: 'Nous installons Veltis sur votre ordinateur ou serveur local. Configuration initiale incluse.',
      details: ['Installation sur site', 'Configuration de base', 'Test de fonctionnement'],
      duration: 'Jour 1-2'
    },
    {
      num: '03', icon: 'graduation',
      title: 'Formation',
      desc: 'Nous formons votre équipe à l\'utilisation du logiciel selon vos modules et votre activité.',
      details: ['Formation sur mesure', 'Manuel d\'utilisation', 'Exercices pratiques'],
      duration: 'Jour 2-3'
    },
    {
      num: '04', icon: 'rocket',
      title: 'Mise en production',
      desc: 'Vous démarrez avec vos vraies données. Nous restons disponibles pour le suivi.',
      details: ['Import des données', 'Suivi du démarrage', 'Support continu'],
      duration: 'Jour 3+'
    }
  ];
}
