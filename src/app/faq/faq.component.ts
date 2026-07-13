import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-faq',
  standalone: true,
  imports: [CommonModule],
  template: `
<section class="faq" id="faq">
  <div class="container">
    <div class="section-header">
      <div class="section-tag">FAQ</div>
      <h2 class="section-title">Questions <span class="gradient-text">fréquentes</span></h2>
      <p class="section-desc">Tout ce que vous devez savoir avant de prendre votre décision.</p>
    </div>

    <div class="faq-grid">
      <div class="faq-list">
        @for (item of faqs; track item.q; let i = $index) {
          <div class="faq-item" [class.open]="openIndex() === i">
            <button class="faq-question" (click)="toggle(i)">
              <span>{{ item.q }}</span>
              <div class="faq-chevron" [class.rotated]="openIndex() === i">
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M4.5 7l4.5 4.5 4.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
                </svg>
              </div>
            </button>
            @if (openIndex() === i) {
              <div class="faq-answer">
                <p>{{ item.a }}</p>
              </div>
            }
          </div>
        }
      </div>

      <!-- Bloc contact rapide -->
      <div class="faq-contact">
        <div class="faq-contact-icon">
          <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round" style="color:#a5b4fc"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"/></svg>
        </div>
        <h3>Vous avez d'autres questions ?</h3>
        <p>Notre équipe répond sous 24h. N'hésitez pas à nous contacter directement.</p>
        <div class="faq-contact-btns">
          <a href="https://wa.me/22676996900" target="_blank" class="btn-wa">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            WhatsApp
          </a>
          <a href="mailto:yargasamuel48@gmail.com" class="btn-email">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
              <rect x="1.5" y="3.75" width="15" height="10.5" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <path d="M1.5 6.75l7.5 4.5 7.5-4.5" stroke="currentColor" stroke-width="1.5" stroke-linejoin="round"/>
            </svg>
            Email
          </a>
        </div>
        <div class="faq-contact-info">
          <span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            76 99 69 00
          </span>
          <span>
            <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" style="display:inline-block;vertical-align:middle;margin-right:4px"><rect x="5" y="2" width="14" height="20" rx="2"/><line x1="12" y1="18" x2="12.01" y2="18"/></svg>
            53 44 37 12
          </span>
        </div>
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .faq { padding: 7rem 0; }
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
    .faq-grid { display: grid; grid-template-columns: 1fr 320px; gap: 3rem; align-items: start; }
    .faq-list { display: flex; flex-direction: column; gap: 0; }
    .faq-item {
      border-bottom: 1px solid rgba(255,255,255,0.07);
      transition: background 0.2s;
    }
    .faq-item:first-child { border-top: 1px solid rgba(255,255,255,0.07); }
    .faq-item.open { background: rgba(99,102,241,0.05); }
    .faq-question {
      display: flex; justify-content: space-between; align-items: center;
      width: 100%; padding: 1.25rem 1rem;
      background: none; border: none; cursor: pointer;
      font-family: 'Inter', sans-serif;
      text-align: left; gap: 1rem;
    }
    .faq-question span {
      font-size: 0.95rem; font-weight: 600; color: rgba(255,255,255,0.85);
      line-height: 1.5;
    }
    .faq-chevron { flex-shrink: 0; color: rgba(255,255,255,0.4); transition: transform 0.3s; }
    .faq-chevron.rotated { transform: rotate(180deg); color: #6366f1; }
    .faq-answer {
      padding: 0 1rem 1.25rem;
      animation: fadeIn 0.25s ease;
    }
    .faq-answer p {
      font-size: 0.875rem; color: rgba(255,255,255,0.55); line-height: 1.75; margin: 0;
    }
    @keyframes fadeIn { from { opacity: 0; transform: translateY(-6px); } to { opacity: 1; transform: translateY(0); } }
    /* Contact block */
    .faq-contact {
      background: rgba(99,102,241,0.08);
      border: 1px solid rgba(99,102,241,0.2);
      border-radius: 20px; padding: 2rem;
      text-align: center; position: sticky; top: 5rem;
    }
    .faq-contact-icon { display: flex; justify-content: center; margin-bottom: 1rem; }
    .faq-contact h3 { font-size: 1rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
    .faq-contact p { font-size: 0.8rem; color: rgba(255,255,255,0.5); line-height: 1.65; margin-bottom: 1.5rem; }
    .faq-contact-btns { display: flex; gap: 0.75rem; justify-content: center; margin-bottom: 1.25rem; }
    .btn-wa, .btn-email {
      display: inline-flex; align-items: center; gap: 0.4rem;
      padding: 0.6rem 1.125rem; border-radius: 10px;
      font-size: 0.85rem; font-weight: 600; text-decoration: none; transition: all 0.2s;
    }
    .btn-wa { background: #22c55e; color: #fff; }
    .btn-wa:hover { background: #16a34a; }
    .btn-email { background: rgba(255,255,255,0.08); color: rgba(255,255,255,0.8); border: 1px solid rgba(255,255,255,0.15); }
    .btn-email:hover { background: rgba(255,255,255,0.14); color: #fff; }
    .faq-contact-info { display: flex; flex-direction: column; gap: 0.4rem; }
    .faq-contact-info span { font-size: 0.8rem; color: rgba(255,255,255,0.45); }
    @media (max-width: 900px) {
      .faq-grid { grid-template-columns: 1fr; }
      .faq-contact { position: static; }
      .faq { padding: 4rem 0; }
    }
  `]
})
export class FaqComponent {
  openIndex = signal<number | null>(0);

  toggle(i: number) {
    this.openIndex.update(v => v === i ? null : i);
  }

  faqs = [
    {
      q: 'Est-ce que Veltis fonctionne sans connexion internet ?',
      a: 'Oui, complètement. Veltis s\'installe sur votre serveur ou ordinateur local. Toutes vos données restent chez vous et le logiciel fonctionne même en cas de coupure internet. Idéal pour les zones à connectivité limitée au Burkina Faso et en Afrique de l\'Ouest.'
    },
    {
      q: 'Quelle est la différence entre Veltis Essentiel et Veltis Pro ?',
      a: 'Veltis Essentiel (150 000 XOF) couvre la gestion complète : ventes, stocks, RH, dépenses, clients et fournisseurs. Veltis Pro (200 000 XOF) inclut en plus le module Comptabilité SYSCOHADA complet avec plan comptable, écritures automatiques, bilan, compte de résultat et grand livre.'
    },
    {
      q: 'Combien d\'utilisateurs peuvent utiliser le logiciel simultanément ?',
      a: 'Autant que nécessaire. Veltis est multi-utilisateurs avec un système de rôles et de permissions. Vous pouvez créer des profils Caissier, Vendeur, Magasinier, Comptable, etc., chacun avec ses propres droits d\'accès.'
    },
    {
      q: 'Que se passe-t-il après le paiement ?',
      a: 'Nous prenons contact avec vous dans les 24 heures pour organiser l\'installation. Nous venons installer le logiciel sur place (ou à distance selon votre situation), configurons les données de base et formons votre équipe. Tout est compris dans le prix.'
    },
    {
      q: 'Le logiciel est-il adapté à ma comptabilité OHADA ?',
      a: 'Oui, la version Pro intègre le plan comptable SYSCOHADA complet avec 106 comptes répartis en 8 classes. Les écritures sont générées automatiquement depuis vos ventes, achats et paie. Le bilan et le compte de résultat sont conformes aux normes OHADA.'
    },
    {
      q: 'Est-ce qu\'on peut importer nos données existantes ?',
      a: 'Oui. Nous pouvons importer vos produits, clients, fournisseurs et stocks depuis Excel lors de l\'installation. Cela vous permet de démarrer avec vos vraies données sans ressaisir manuellement.'
    },
    {
      q: 'Y a-t-il un abonnement mensuel ou annuel ?',
      a: 'Non. Veltis est vendu en paiement unique. Vous payez une fois et le logiciel vous appartient. La maintenance et le support technique sont inclus gratuitement pendant 12 mois. Au-delà, un contrat de maintenance optionnel vous permet de continuer à bénéficier des mises à jour et du support prioritaire à un tarif très abordable.'
    },
    {
      q: 'Sur quel matériel fonctionne Veltis ?',
      a: 'Veltis fonctionne sur n\'importe quel ordinateur sous Windows avec au moins 4 Go de RAM. Il peut être installé sur un seul PC ou sur un serveur local pour permettre à plusieurs postes du réseau de l\'utiliser simultanément.'
    }
  ];
}
