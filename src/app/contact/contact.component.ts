import { Component, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [CommonModule, FormsModule],
  template: `
<section class="contact" id="contact">
  <div class="container">
    <div class="contact-grid">
      <!-- Left: Info -->
      <div class="contact-info">
        <div class="section-tag">Contact</div>
        <h2 class="contact-title">Prêt à transformer<br><span class="gradient-text">votre gestion ?</span></h2>
        <p class="contact-desc">Contactez-nous pour une démonstration gratuite ou pour toute question sur Veltis. Nous répondons sous 24h.</p>

        <div class="contact-methods">
          @for (m of methods; track m.label) {
            <div class="method">
              <div class="method-icon">{{ m.icon }}</div>
              <div>
                <div class="method-label">{{ m.label }}</div>
                <div class="method-val">{{ m.val }}</div>
              </div>
            </div>
          }
        </div>

        <!-- Decorative mockup -->
        <div class="contact-deco">
          <div class="deco-card">
            <div class="deco-check">✓</div>
            <div>
              <div class="deco-title">Démonstration gratuite</div>
              <div class="deco-sub">Nous vous montrons tout en 30 min</div>
            </div>
          </div>
          <div class="deco-card">
            <div class="deco-check">✓</div>
            <div>
              <div class="deco-title">Installation rapide</div>
              <div class="deco-sub">Opérationnel en moins de 24h</div>
            </div>
          </div>
          <div class="deco-card">
            <div class="deco-check">✓</div>
            <div>
              <div class="deco-title">Formation incluse</div>
              <div class="deco-sub">Prise en main assurée</div>
            </div>
          </div>
        </div>
      </div>

      <!-- Right: Form -->
      <div class="contact-form-wrap">
        @if (!sent()) {
          <form class="contact-form" (ngSubmit)="submit()">
            <h3 class="form-title">Envoyer un message</h3>

            <div class="form-row">
              <div class="form-group">
                <label>Nom complet *</label>
                <input type="text" [(ngModel)]="form.nom" name="nom" placeholder="Aminata Konaté" required/>
              </div>
              <div class="form-group">
                <label>Téléphone *</label>
                <input type="tel" [(ngModel)]="form.tel" name="tel" placeholder="+226 70 00 00 00" required/>
              </div>
            </div>

            <div class="form-group">
              <label>Email</label>
              <input type="email" [(ngModel)]="form.email" name="email" placeholder="votre&#64;email.com"/>
            </div>

            <div class="form-group">
              <label>Votre activité *</label>
              <input type="text" [(ngModel)]="form.activite" name="activite" placeholder="Commerce, BTP, Import-export..." required/>
            </div>

            <div class="form-group">
              <label>Version souhaitée</label>
              <select [(ngModel)]="form.version" name="version">
                <option value="">— Sélectionner —</option>
                <option value="essentiel">Veltis Essentiel — 150 000 XOF</option>
                <option value="pro">Veltis Pro — 200 000 XOF</option>
                <option value="info">Je veux plus d'informations</option>
              </select>
            </div>

            <div class="form-group">
              <label>Message</label>
              <textarea [(ngModel)]="form.message" name="message" rows="4" placeholder="Décrivez vos besoins, posez vos questions..."></textarea>
            </div>

            <button type="submit" class="btn-submit" [disabled]="sending()">
              @if (sending()) {
                <span class="spinner"></span> Envoi...
              } @else {
                Envoyer le message
                <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
                  <path d="M3.75 9h10.5M9.75 5.25L13.5 9l-3.75 3.75" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                </svg>
              }
            </button>
          </form>
        } @else {
          <div class="success-msg">
            <div class="success-icon">🎉</div>
            <h3>Message envoyé !</h3>
            <p>Merci pour votre intérêt. Nous vous contacterons dans les 24 heures.</p>
            <button class="btn-reset" (click)="reset()">Envoyer un autre message</button>
          </div>
        }
      </div>
    </div>
  </div>
</section>
  `,
  styles: [`
    .contact { padding: 7rem 0; }
    .section-tag {
      display: inline-block; padding: 0.35rem 1rem;
      background: rgba(99,102,241,0.12); border: 1px solid rgba(99,102,241,0.25);
      border-radius: 50px; font-size: 0.78rem; font-weight: 700;
      color: #a5b4fc; text-transform: uppercase; letter-spacing: 0.1em; margin-bottom: 1rem;
    }
    .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 4rem; align-items: start; }
    .contact-title {
      font-size: clamp(1.75rem, 3.5vw, 2.5rem); font-weight: 800;
      line-height: 1.2; letter-spacing: -0.02em; color: #fff; margin-bottom: 1rem;
    }
    .contact-desc { font-size: 0.95rem; color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 2rem; }
    .contact-methods { display: flex; flex-direction: column; gap: 1rem; margin-bottom: 2rem; }
    .method {
      display: flex; align-items: center; gap: 1rem;
      padding: 1rem; background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.08); border-radius: 12px;
    }
    .method-icon { font-size: 1.5rem; flex-shrink: 0; }
    .method-label { font-size: 0.75rem; color: rgba(255,255,255,0.4); }
    .method-val { font-size: 0.9rem; font-weight: 600; color: #fff; }
    .contact-deco { display: flex; flex-direction: column; gap: 0.75rem; }
    .deco-card {
      display: flex; align-items: center; gap: 0.875rem;
      padding: 0.875rem 1rem; background: rgba(99,102,241,0.08);
      border: 1px solid rgba(99,102,241,0.2); border-radius: 12px;
    }
    .deco-check {
      width: 28px; height: 28px; border-radius: 50%;
      background: rgba(34,197,94,0.2); color: #22c55e;
      display: flex; align-items: center; justify-content: center;
      font-weight: 700; font-size: 0.8rem; flex-shrink: 0;
    }
    .deco-title { font-size: 0.875rem; font-weight: 600; color: #fff; }
    .deco-sub { font-size: 0.75rem; color: rgba(255,255,255,0.45); }
    /* Form */
    .contact-form-wrap {
      background: rgba(255,255,255,0.04);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 24px; padding: 2.5rem;
    }
    .form-title { font-size: 1.25rem; font-weight: 700; color: #fff; margin-bottom: 1.75rem; }
    .form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
    .form-group { display: flex; flex-direction: column; gap: 0.4rem; margin-bottom: 1rem; }
    .form-group label { font-size: 0.8rem; font-weight: 500; color: rgba(255,255,255,0.6); }
    .form-group input, .form-group select, .form-group textarea {
      padding: 0.75rem 1rem;
      background: rgba(255,255,255,0.06);
      border: 1px solid rgba(255,255,255,0.1);
      border-radius: 10px; color: #fff;
      font-size: 0.875rem; font-family: 'Inter', sans-serif;
      outline: none; transition: border-color 0.2s; resize: vertical;
    }
    .form-group input::placeholder, .form-group textarea::placeholder { color: rgba(255,255,255,0.2); }
    .form-group input:focus, .form-group select:focus, .form-group textarea:focus { border-color: #6366f1; background: rgba(99,102,241,0.08); }
    .form-group select option { background: #1e1e30; color: #fff; }
    .btn-submit {
      display: flex; align-items: center; justify-content: center; gap: 0.5rem;
      width: 100%; padding: 0.875rem;
      background: linear-gradient(135deg, #6366f1, #8b5cf6);
      color: #fff; border: none; border-radius: 12px;
      font-weight: 700; font-size: 1rem; font-family: 'Inter', sans-serif;
      cursor: pointer; transition: all 0.3s;
      box-shadow: 0 4px 20px rgba(99,102,241,0.3);
    }
    .btn-submit:hover:not(:disabled) { transform: translateY(-2px); box-shadow: 0 8px 32px rgba(99,102,241,0.5); }
    .btn-submit:disabled { opacity: 0.6; cursor: not-allowed; }
    .spinner {
      width: 16px; height: 16px; border: 2px solid rgba(255,255,255,0.3);
      border-top-color: #fff; border-radius: 50%;
      animation: spin 0.7s linear infinite; display: inline-block;
    }
    @keyframes spin { to { transform: rotate(360deg); } }
    .success-msg { text-align: center; padding: 3rem 1rem; }
    .success-icon { font-size: 4rem; margin-bottom: 1rem; }
    .success-msg h3 { font-size: 1.5rem; font-weight: 700; color: #fff; margin-bottom: 0.75rem; }
    .success-msg p { color: rgba(255,255,255,0.55); line-height: 1.7; margin-bottom: 2rem; }
    .btn-reset {
      padding: 0.75rem 2rem; background: none;
      border: 1px solid rgba(255,255,255,0.2); border-radius: 10px;
      color: rgba(255,255,255,0.7); cursor: pointer; font-family: 'Inter', sans-serif;
      font-size: 0.875rem; transition: all 0.2s;
    }
    .btn-reset:hover { border-color: rgba(255,255,255,0.5); color: #fff; }
    @media (max-width: 900px) {
      .contact-grid { grid-template-columns: 1fr; }
      .contact { padding: 4rem 0; }
    }
    @media (max-width: 480px) {
      .form-row { grid-template-columns: 1fr; }
    }
  `]
})
export class ContactComponent {
  sent = signal(false);
  sending = signal(false);

  form = { nom: '', tel: '', email: '', activite: '', version: '', message: '' };

  methods = [
    { icon: '📱', label: 'WhatsApp / Téléphone', val: '+226 76 99 69 00 / +226 53 44 37 12' },
    { icon: '📧', label: 'Email', val: 'yargasamuel48@gmail.com' },
    { icon: '📍', label: 'Localisation', val: 'Ouagadougou, Burkina Faso' },
  ];

  submit() {
    if (!this.form.nom || !this.form.tel || !this.form.activite) return;
    this.sending.set(true);
    // Simulate send
    setTimeout(() => { this.sending.set(false); this.sent.set(true); }, 1500);
  }

  reset() {
    this.sent.set(false);
    this.form = { nom: '', tel: '', email: '', activite: '', version: '', message: '' };
  }
}
