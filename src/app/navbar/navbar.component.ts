import { Component, HostListener, signal } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [CommonModule],
  template: `
<nav class="navbar" [class.scrolled]="scrolled()">
  <div class="container nav-inner">
    <div class="nav-brand">
      <img src="logo.png" alt="Veltis" class="brand-logo-img"/>
      <span class="brand-name">Veltis</span>
    </div>

    <ul class="nav-links" [class.open]="menuOpen()">
      <li><a href="#fonctionnalites" (click)="closeMenu()">Fonctionnalités</a></li>
      <li><a href="#comment-ca-marche" (click)="closeMenu()">Comment ça marche</a></li>
      <li><a href="#tarifs" (click)="closeMenu()">Tarifs</a></li>
      <li><a href="#faq" (click)="closeMenu()">FAQ</a></li>
      <li><a href="#contact" (click)="closeMenu()">Contact</a></li>
      <li class="nav-cta"><a href="#tarifs" class="btn-nav" (click)="closeMenu()">Commencer →</a></li>
    </ul>

    <button class="hamburger" (click)="toggleMenu()" [class.active]="menuOpen()">
      <span></span><span></span><span></span>
    </button>
  </div>
</nav>
  `,
  styles: [`
    .navbar {
      position: fixed; top: 0; left: 0; right: 0; z-index: 1000;
      padding: 1.25rem 0;
      transition: all 0.3s ease;
    }
    .navbar.scrolled {
      background: rgba(10,10,20,0.9);
      backdrop-filter: blur(20px);
      border-bottom: 1px solid rgba(255,255,255,0.08);
      padding: 0.875rem 0;
    }
    .nav-inner { display: flex; align-items: center; justify-content: space-between; }
    .nav-brand { display: flex; align-items: center; gap: 0.625rem; text-decoration: none; }
    .brand-icon { line-height: 0; }
    .brand-name { font-size: 1.25rem; font-weight: 800; color: #fff; letter-spacing: -0.02em; }
    .nav-links {
      display: flex; align-items: center; gap: 2rem;
      list-style: none;
    }
    .nav-links a {
      color: rgba(255,255,255,0.7); text-decoration: none;
      font-size: 0.9rem; font-weight: 500;
      transition: color 0.2s;
    }
    .nav-links a:hover { color: #fff; }
    .btn-nav {
      padding: 0.5rem 1.25rem !important;
      background: linear-gradient(135deg, #6366f1, #8b5cf6) !important;
      color: #fff !important;
      border-radius: 50px;
      font-weight: 600 !important;
      transition: all 0.2s !important;
      white-space: nowrap;
    }
    .brand-logo-img {
      height: 36px;
      width: auto;
      max-width: 120px;
      object-fit: contain;
      flex-shrink: 0;
    }
    .hamburger { display: none; flex-direction: column; gap: 5px; background: none; border: none; cursor: pointer; padding: 4px; }
    .hamburger span { display: block; width: 24px; height: 2px; background: #fff; border-radius: 2px; transition: all 0.3s; }
    .hamburger.active span:nth-child(1) { transform: rotate(45deg) translate(5px, 5px); }
    .hamburger.active span:nth-child(2) { opacity: 0; }
    .hamburger.active span:nth-child(3) { transform: rotate(-45deg) translate(5px, -5px); }
    @media (max-width: 768px) {
      .hamburger { display: flex; }
      .nav-links {
        position: fixed; inset: 0; top: 64px;
        background: rgba(10,10,20,0.98); backdrop-filter: blur(20px);
        flex-direction: column; justify-content: center; align-items: center;
        gap: 2rem; opacity: 0; pointer-events: none; transition: opacity 0.3s;
      }
      .nav-links.open { opacity: 1; pointer-events: all; }
      .nav-links a { font-size: 1.25rem; }
      .nav-cta { margin-top: 1rem; }
    }
  `]
})
export class NavbarComponent {
  scrolled = signal(false);
  menuOpen = signal(false);

  @HostListener('window:scroll')
  onScroll() { this.scrolled.set(window.scrollY > 50); }

  closeMenu() { this.menuOpen.set(false); }
  toggleMenu() { this.menuOpen.update(v => !v); }
}
