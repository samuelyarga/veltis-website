import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule],
  template: `
<footer class="footer">
  <div class="footer-glow"></div>
  <div class="container">
    <div class="footer-top">
      <div class="footer-brand">
        <div class="brand-row">
          <img src="logo.png" alt="Veltis" class="footer-logo-img"/>
          <span class="brand-name">Veltis</span>
        </div>
        <p class="brand-desc">L'ERP conçu pour les entreprises africaines. Simple, puissant, local.</p>
        <div class="social-links">
          <a href="#" class="social-btn" title="WhatsApp">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/></svg>
          </a>
          <a href="#" class="social-btn" title="Facebook">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/></svg>
          </a>
          <a href="#" class="social-btn" title="LinkedIn">
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
          </a>
        </div>
      </div>

      <div class="footer-links-grid">
        @for (col of footerCols; track col.title) {
          <div class="footer-col">
            <h4 class="col-title">{{ col.title }}</h4>
            <ul>
              @for (link of col.links; track link.label) {
                <li><a href="{{ link.href }}">{{ link.label }}</a></li>
              }
            </ul>
          </div>
        }
      </div>
    </div>

    <div class="footer-bottom">
      <p>© 2026 Veltis. Tous droits réservés.</p>
      <p class="footer-love">Fait avec ❤️ pour les entreprises africaines</p>
    </div>
  </div>
</footer>
  `,
  styles: [`
    .footer {
      background: #080810;
      border-top: 1px solid rgba(255,255,255,0.06);
      padding: 5rem 0 2rem;
      position: relative;
      overflow: hidden;
    }
    .footer-glow {
      position: absolute; bottom: 0; left: 50%; transform: translateX(-50%);
      width: 600px; height: 200px;
      background: radial-gradient(ellipse, rgba(99,102,241,0.08) 0%, transparent 70%);
      pointer-events: none;
    }
    .footer-top {
      display: grid; grid-template-columns: 1.5fr 2fr;
      gap: 4rem; margin-bottom: 4rem;
    }
    .brand-row { display: flex; align-items: center; gap: 0.625rem; margin-bottom: 1rem; }
    .footer-logo-img {
      height: 40px;
      width: auto;
      max-width: 140px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .brand-icon { line-height: 0; }
    .brand-name { font-size: 1.375rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .brand-desc { font-size: 0.875rem; color: rgba(255,255,255,0.45); line-height: 1.7; margin-bottom: 1.5rem; max-width: 260px; }
    .social-links { display: flex; gap: 0.75rem; }
    .social-btn {
      width: 38px; height: 38px;
      display: flex; align-items: center; justify-content: center;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px; color: rgba(255,255,255,0.5);
      text-decoration: none; transition: all 0.2s;
    }
    .social-btn:hover { background: rgba(99,102,241,0.2); border-color: rgba(99,102,241,0.4); color: #a5b4fc; }
    .footer-links-grid { display: grid; grid-template-columns: repeat(3, 1fr); gap: 2rem; }
    .col-title { font-size: 0.8rem; font-weight: 700; color: #fff; text-transform: uppercase; letter-spacing: 0.08em; margin-bottom: 1.25rem; }
    .footer-col ul { list-style: none; display: flex; flex-direction: column; gap: 0.75rem; }
    .footer-col a { font-size: 0.875rem; color: rgba(255,255,255,0.45); text-decoration: none; transition: color 0.2s; }
    .footer-col a:hover { color: rgba(255,255,255,0.8); }
    .footer-bottom {
      display: flex; justify-content: space-between; align-items: center;
      padding-top: 2rem; border-top: 1px solid rgba(255,255,255,0.06);
      font-size: 0.8rem; color: rgba(255,255,255,0.3);
    }
    .footer-love { color: rgba(255,255,255,0.25); }
    @media (max-width: 900px) {
      .footer-top { grid-template-columns: 1fr; gap: 2.5rem; }
      .footer-links-grid { grid-template-columns: 1fr 1fr; }
    }
    @media (max-width: 480px) {
      .footer-links-grid { grid-template-columns: 1fr; }
      .footer-bottom { flex-direction: column; gap: 0.5rem; text-align: center; }
    }
  `]
})
export class FooterComponent {
  footerCols = [
    {
      title: 'Produit',
      links: [
        { label: 'Fonctionnalités', href: '#fonctionnalites' },
        { label: 'Comment ça marche', href: '#comment-ca-marche' },
        { label: 'Tarifs', href: '#tarifs' },
        { label: 'FAQ', href: '#faq' },
      ]
    },
    {
      title: 'Modules',
      links: [
        { label: 'Ventes & Caisse', href: '#fonctionnalites' },
        { label: 'Stocks', href: '#fonctionnalites' },
        { label: 'RH & Paie', href: '#fonctionnalites' },
        { label: 'Comptabilité', href: '#fonctionnalites' },
      ]
    },
    {
      title: 'Contact',
      links: [
        { label: '76 99 69 00', href: 'tel:+22676996900' },
        { label: '53 44 37 12', href: 'tel:+22653443712' },
        { label: 'yargasamuel48@gmail.com', href: 'mailto:yargasamuel48@gmail.com' },
        { label: 'Démonstration gratuite', href: '#contact' },
      ]
    }
  ];
}
