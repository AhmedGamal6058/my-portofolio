import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/chunk-AX3YXDTG.js");import {
  PortfolioService
} from "/chunk-ERSYBWDQ.js";

// src/app/pages/home/home.ts
import { Component as Component9 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";

// src/app/pages/home/sections/hero/hero.ts
import { Component, inject, signal } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatIconModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import { MatButtonModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import * as i0 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i1 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i2 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i3 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
import * as i4 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
var _c0 = () => ["Angular", "TypeScript", "RxJS", "NgRx", "Material"];
var _forTrack0 = ($index, $item) => $item.url;
var _forTrack1 = ($index, $item) => $item.label;
function HeroComponent_For_47_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "a", 26);
    i0.\u0275\u0275element(1, "i", 56);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r1 = ctx.$implicit;
    i0.\u0275\u0275property("href", s_r1.url, i0.\u0275\u0275sanitizeUrl);
    i0.\u0275\u0275attribute("aria-label", s_r1.name);
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngClass", s_r1.icon);
  }
}
function HeroComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "span", 41);
    i0.\u0275\u0275text(1);
    i0.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tech_r2 = ctx.$implicit;
    i0.\u0275\u0275advance();
    i0.\u0275\u0275textInterpolate(tech_r2);
  }
}
function HeroComponent_For_69_Template(rf, ctx) {
  if (rf & 1) {
    i0.\u0275\u0275elementStart(0, "div", 43);
    i0.\u0275\u0275element(1, "i", 56);
    i0.\u0275\u0275elementStart(2, "div", 57)(3, "span", 58);
    i0.\u0275\u0275text(4);
    i0.\u0275\u0275elementEnd();
    i0.\u0275\u0275elementStart(5, "span", 59);
    i0.\u0275\u0275text(6);
    i0.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const stat_r3 = ctx.$implicit;
    const ctx_r3 = i0.\u0275\u0275nextContext();
    i0.\u0275\u0275advance();
    i0.\u0275\u0275property("ngClass", stat_r3.icon);
    i0.\u0275\u0275advance(3);
    i0.\u0275\u0275textInterpolate(ctx_r3.formatValue(stat_r3.label, stat_r3.value));
    i0.\u0275\u0275advance(2);
    i0.\u0275\u0275textInterpolate(stat_r3.label);
  }
}
var HeroComponent = class _HeroComponent {
  portfolio = inject(PortfolioService);
  roles = [
    "Angular Developer",
    "Frontend Architect",
    "UI Engineer",
    "Open-Source Contributor"
  ];
  currentRole = signal("", ...ngDevMode ? [{ debugName: "currentRole" }] : (
    /* istanbul ignore next */
    []
  ));
  roleInterval = null;
  counters = signal({}, ...ngDevMode ? [{ debugName: "counters" }] : (
    /* istanbul ignore next */
    []
  ));
  ngOnInit() {
    this.startTypewriter();
    this.startCounters();
  }
  ngOnDestroy() {
    if (this.roleInterval)
      clearInterval(this.roleInterval);
  }
  startTypewriter() {
    let i = 0;
    let charIndex = 0;
    let deleting = false;
    const tick = () => {
      const word = this.roles[i];
      if (!deleting) {
        this.currentRole.set(word.substring(0, charIndex + 1));
        charIndex++;
        if (charIndex === word.length) {
          deleting = true;
          setTimeout(tick, 1800);
          return;
        }
      } else {
        this.currentRole.set(word.substring(0, charIndex - 1));
        charIndex--;
        if (charIndex === 0) {
          deleting = false;
          i = (i + 1) % this.roles.length;
        }
      }
      this.roleInterval = setTimeout(tick, deleting ? 40 : 90);
    };
    tick();
  }
  startCounters() {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          this.animateCounters();
          observer.disconnect();
        }
      });
    });
    setTimeout(() => {
      const el = document.querySelector(".hero-stats");
      if (el)
        observer.observe(el);
    }, 100);
  }
  animateCounters() {
    const duration = 1500;
    const start = performance.now();
    const targets = this.portfolio.stats.map((s) => ({
      label: s.label,
      target: parseInt(s.value.replace(/\D/g, ""), 10) || 0
    }));
    const step = (now) => {
      const progress = Math.min((now - start) / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const result = {};
      targets.forEach((t) => result[t.label] = Math.floor(t.target * eased));
      this.counters.set(result);
      if (progress < 1)
        requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }
  formatValue(label, original) {
    const num = this.counters()[label] ?? 0;
    const suffix = original.replace(/[0-9]/g, "");
    return `${num}${suffix}`;
  }
  static \u0275fac = function HeroComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HeroComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i0.\u0275\u0275defineComponent({ type: _HeroComponent, selectors: [["app-hero"]], decls: 83, vars: 9, consts: [["id", "home", 1, "hero"], [1, "container-x"], [1, "row", "align-items-center", "g-5", "hero-row"], [1, "col-lg-7"], [1, "hero-content", "reveal"], [1, "eyebrow"], [1, "wave"], [1, "hero-title"], [1, "gradient-text"], [1, "role-line"], [1, "typed"], [1, "cursor"], [1, "hero-subtitle"], [1, "hero-info"], [1, "info-item"], [1, "bi", "bi-geo-alt"], [1, "bi", "bi-briefcase"], [1, "hero-cta"], ["href", "#projects", 1, "btn", "btn-primary"], [1, "bi", "bi-rocket-takeoff"], ["href", "#contact", 1, "btn", "btn-outline-light"], [1, "bi", "bi-envelope"], ["mat-stroked-button", "", 1, "btn", "btn-ghost", 3, "href"], [1, "hero-socials"], [1, "socials-label"], [1, "social-icons"], ["target", "_blank", "rel", "noopener", 1, "social-icon", 3, "href"], [1, "col-lg-5"], [1, "hero-visual", "reveal"], [1, "visual-card"], [1, "card-glow"], [1, "card-content"], [1, "avatar-wrapper"], [1, "avatar-ring"], [1, "avatar"], [1, "avatar-initials"], ["title", "Available", 1, "status-indicator"], [1, "dev-info"], [1, "dev-name"], [1, "dev-role"], [1, "tech-stack"], [1, "tech-pill"], [1, "hero-stats"], [1, "stat"], [1, "floating-icon", "icon-1"], [1, "bi", "bi-filetype-tsx"], [1, "floating-icon", "icon-2"], [1, "bi", "bi-filetype-html"], [1, "floating-icon", "icon-3"], [1, "bi", "bi-filetype-scss"], [1, "floating-icon", "icon-4"], [1, "bi", "bi-github"], ["href", "#about", "aria-label", "Scroll to about", 1, "scroll-cue"], [1, "mouse"], [1, "wheel"], [1, "cue-text"], [1, "bi", 3, "ngClass"], [1, "stat-info"], [1, "stat-value", "gradient-text"], [1, "stat-label"]], template: function HeroComponent_Template(rf, ctx) {
    if (rf & 1) {
      i0.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "div", 3)(4, "div", 4)(5, "span", 5)(6, "span", 6);
      i0.\u0275\u0275text(7, "\u{1F44B}");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275text(8, " Welcome to my portfolio ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(9, "h1", 7);
      i0.\u0275\u0275text(10, " Hi, I'm ");
      i0.\u0275\u0275elementStart(11, "span", 8);
      i0.\u0275\u0275text(12);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275element(13, "br");
      i0.\u0275\u0275elementStart(14, "span", 9);
      i0.\u0275\u0275text(15, " a ");
      i0.\u0275\u0275elementStart(16, "span", 10);
      i0.\u0275\u0275text(17);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(18, "span", 11);
      i0.\u0275\u0275text(19, "|");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(20, "p", 12);
      i0.\u0275\u0275text(21);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(22, "div", 13)(23, "div", 14);
      i0.\u0275\u0275element(24, "i", 15);
      i0.\u0275\u0275elementStart(25, "span");
      i0.\u0275\u0275text(26);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(27, "div", 14);
      i0.\u0275\u0275element(28, "i", 16);
      i0.\u0275\u0275elementStart(29, "span");
      i0.\u0275\u0275text(30, "3+ years building production Angular apps");
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(31, "div", 17)(32, "a", 18);
      i0.\u0275\u0275element(33, "i", 19);
      i0.\u0275\u0275text(34, " View My Work ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(35, "a", 20);
      i0.\u0275\u0275element(36, "i", 21);
      i0.\u0275\u0275text(37, " Get in Touch ");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(38, "a", 22)(39, "mat-icon");
      i0.\u0275\u0275text(40, "download");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275text(41, " Download CV ");
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(42, "div", 23)(43, "span", 24);
      i0.\u0275\u0275text(44, "Follow me");
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(45, "div", 25);
      i0.\u0275\u0275repeaterCreate(46, HeroComponent_For_47_Template, 2, 3, "a", 26, _forTrack0);
      i0.\u0275\u0275elementEnd()()()();
      i0.\u0275\u0275elementStart(48, "div", 27)(49, "div", 28)(50, "div", 29);
      i0.\u0275\u0275element(51, "div", 30);
      i0.\u0275\u0275elementStart(52, "div", 31)(53, "div", 32);
      i0.\u0275\u0275element(54, "div", 33);
      i0.\u0275\u0275elementStart(55, "div", 34)(56, "span", 35);
      i0.\u0275\u0275text(57);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275element(58, "div", 36);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(59, "div", 37)(60, "h3", 38);
      i0.\u0275\u0275text(61);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(62, "p", 39);
      i0.\u0275\u0275text(63);
      i0.\u0275\u0275elementEnd()();
      i0.\u0275\u0275elementStart(64, "div", 40);
      i0.\u0275\u0275repeaterCreate(65, HeroComponent_For_66_Template, 2, 1, "span", 41, i0.\u0275\u0275repeaterTrackByIdentity);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(67, "div", 42);
      i0.\u0275\u0275repeaterCreate(68, HeroComponent_For_69_Template, 7, 3, "div", 43, _forTrack1);
      i0.\u0275\u0275elementEnd()()();
      i0.\u0275\u0275elementStart(70, "div", 44);
      i0.\u0275\u0275element(71, "i", 45);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(72, "div", 46);
      i0.\u0275\u0275element(73, "i", 47);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(74, "div", 48);
      i0.\u0275\u0275element(75, "i", 49);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(76, "div", 50);
      i0.\u0275\u0275element(77, "i", 51);
      i0.\u0275\u0275elementEnd()()()()();
      i0.\u0275\u0275elementStart(78, "a", 52)(79, "span", 53);
      i0.\u0275\u0275element(80, "span", 54);
      i0.\u0275\u0275elementEnd();
      i0.\u0275\u0275elementStart(81, "span", 55);
      i0.\u0275\u0275text(82, "Scroll");
      i0.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i0.\u0275\u0275advance(12);
      i0.\u0275\u0275textInterpolate(ctx.portfolio.name);
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275textInterpolate(ctx.currentRole());
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275textInterpolate1(" ", ctx.portfolio.tagline, " ");
      i0.\u0275\u0275advance(5);
      i0.\u0275\u0275textInterpolate(ctx.portfolio.location);
      i0.\u0275\u0275advance(12);
      i0.\u0275\u0275property("href", "mailto:" + ctx.portfolio.email, i0.\u0275\u0275sanitizeUrl);
      i0.\u0275\u0275advance(8);
      i0.\u0275\u0275repeater(ctx.portfolio.socials.slice(0, 4));
      i0.\u0275\u0275advance(11);
      i0.\u0275\u0275textInterpolate(ctx.portfolio.avatarInitials);
      i0.\u0275\u0275advance(4);
      i0.\u0275\u0275textInterpolate(ctx.portfolio.name);
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275textInterpolate(ctx.portfolio.role);
      i0.\u0275\u0275advance(2);
      i0.\u0275\u0275repeater(i0.\u0275\u0275pureFunction0(8, _c0));
      i0.\u0275\u0275advance(3);
      i0.\u0275\u0275repeater(ctx.portfolio.stats);
    }
  }, dependencies: [CommonModule, i1.NgClass, i1.NgComponentOutlet, i1.NgForOf, i1.NgIf, i1.NgTemplateOutlet, i1.NgStyle, i1.NgSwitch, i1.NgSwitchCase, i1.NgSwitchDefault, i1.NgPlural, i1.NgPluralCase, MatIconModule, i2.MatIcon, i3.Dir, MatButtonModule, i4.MatButton, i4.MatMiniFabButton, i4.MatIconButton, i4.MatFabButton, i1.AsyncPipe, i1.UpperCasePipe, i1.LowerCasePipe, i1.JsonPipe, i1.SlicePipe, i1.DecimalPipe, i1.PercentPipe, i1.TitleCasePipe, i1.CurrencyPipe, i1.DatePipe, i1.I18nPluralPipe, i1.I18nSelectPipe, i1.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.hero[_ngcontent-%COMP%] {\n  min-height: calc(100vh - 80px);\n  padding: 4rem 0 6rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.hero-row[_ngcontent-%COMP%] {\n  align-items: center;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.wave[_ngcontent-%COMP%] {\n  display: inline-block;\n  animation: _ngcontent-%COMP%_wave 2.2s ease-in-out infinite;\n  transform-origin: 70% 70%;\n}\n@keyframes _ngcontent-%COMP%_wave {\n  0%, 60%, 100% {\n    transform: rotate(0);\n  }\n  10%, 30% {\n    transform: rotate(14deg);\n  }\n  20% {\n    transform: rotate(-8deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n}\n.hero-title[_ngcontent-%COMP%] {\n  font-size: clamp(2.4rem, 5.5vw, 4rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -1.5px;\n  margin: 0 0 1.25rem;\n}\n.hero-title[_ngcontent-%COMP%]   .role-line[_ngcontent-%COMP%] {\n  display: inline-block;\n  font-weight: 600;\n}\n.hero-title[_ngcontent-%COMP%]   .typed[_ngcontent-%COMP%] {\n  background: var(--gradient-text);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n}\n.hero-title[_ngcontent-%COMP%]   .cursor[_ngcontent-%COMP%] {\n  display: inline-block;\n  color: var(--primary-light);\n  margin-left: 2px;\n  animation: _ngcontent-%COMP%_blink 1s step-end infinite;\n  font-weight: 300;\n}\n@keyframes _ngcontent-%COMP%_blink {\n  50% {\n    opacity: 0;\n  }\n}\n.hero-subtitle[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  max-width: 560px;\n  margin: 0 0 1.5rem;\n  line-height: 1.7;\n}\n.hero-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.hero-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n  font-size: 0.92rem;\n}\n.hero-info[_ngcontent-%COMP%]   .info-item[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 1rem;\n}\n.hero-cta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n  margin-bottom: 2.5rem;\n}\n.hero-cta[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n}\n.hero-cta[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  margin-right: 0.5rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-ghost[_ngcontent-%COMP%] {\n  border: 1px solid var(--border-strong);\n  color: var(--text) !important;\n  background: transparent;\n  border-radius: 999px;\n  padding: 0.65rem 1.5rem;\n  font-weight: 600;\n  transition: all 0.25s var(--ease);\n}\n.btn-ghost[_ngcontent-%COMP%]:hover {\n  background: var(--bg-elevated);\n  color: var(--text-strong) !important;\n  transform: translateY(-3px);\n  border-color: var(--primary);\n}\n.hero-socials[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.hero-socials[_ngcontent-%COMP%]   .socials-label[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.hero-socials[_ngcontent-%COMP%]   .social-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.65rem;\n}\n.hero-socials[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%] {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  text-decoration: none;\n  transition: all 0.3s var(--ease);\n  font-size: 1.05rem;\n}\n.hero-socials[_ngcontent-%COMP%]   .social-icon[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: translateY(-3px) rotate(-5deg);\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.hero-visual[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.visual-card[_ngcontent-%COMP%] {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      var(--bg-elevated),\n      var(--bg-soft));\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  transform: rotate(-1deg);\n  transition: transform 0.4s var(--ease);\n}\n.visual-card[_ngcontent-%COMP%]:hover {\n  transform: rotate(0);\n}\n.visual-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 0%,\n      rgba(99, 102, 241, 0.18),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 100%,\n      rgba(6, 182, 212, 0.15),\n      transparent 50%);\n  pointer-events: none;\n}\n.card-glow[_ngcontent-%COMP%] {\n  position: absolute;\n  top: -50%;\n  left: -10%;\n  width: 120%;\n  height: 60%;\n  background: var(--gradient-primary);\n  filter: blur(80px);\n  opacity: 0.18;\n  pointer-events: none;\n}\n.card-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.avatar-wrapper[_ngcontent-%COMP%] {\n  position: relative;\n  width: 130px;\n  height: 130px;\n  margin: 0 auto 1.25rem;\n}\n.avatar-ring[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      from 0deg,\n      #6366f1,\n      #06b6d4,\n      #ec4899,\n      #6366f1);\n  animation: _ngcontent-%COMP%_spin 6s linear infinite;\n}\n.avatar-ring[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  inset: 4px;\n  background: var(--bg-elevated);\n  border-radius: 50%;\n}\n@keyframes _ngcontent-%COMP%_spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.avatar[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  overflow: hidden;\n}\n.avatar-initials[_ngcontent-%COMP%] {\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.status-indicator[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 6px;\n  right: 6px;\n  width: 22px;\n  height: 22px;\n  background: #22c55e;\n  border: 4px solid var(--bg-elevated);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  animation: _ngcontent-%COMP%_pulse 2s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);\n  }\n}\n.dev-info[_ngcontent-%COMP%] {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.dev-info[_ngcontent-%COMP%]   .dev-name[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.dev-info[_ngcontent-%COMP%]   .dev-role[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.tech-stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  justify-content: center;\n  margin-bottom: 1.75rem;\n}\n.tech-pill[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.75rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.hero-stats[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid var(--border);\n}\n.stat[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.65rem 0.75rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  transition: transform 0.25s var(--ease);\n}\n.stat[_ngcontent-%COMP%]:hover {\n  transform: translateY(-3px);\n}\n.stat[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.1rem;\n  color: var(--primary-light);\n}\n.stat[_ngcontent-%COMP%]   .stat-info[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.stat[_ngcontent-%COMP%]   .stat-value[_ngcontent-%COMP%] {\n  font-weight: 700;\n  font-size: 1.05rem;\n}\n.stat[_ngcontent-%COMP%]   .stat-label[_ngcontent-%COMP%] {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.floating-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  font-size: 1.5rem;\n  color: var(--primary-light);\n  box-shadow: var(--shadow-md);\n  z-index: 3;\n  animation: _ngcontent-%COMP%_floatY 4s ease-in-out infinite;\n}\n.floating-icon[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 1.4rem;\n}\n.icon-1[_ngcontent-%COMP%] {\n  top: -15px;\n  left: -10px;\n  animation-delay: 0s;\n}\n.icon-2[_ngcontent-%COMP%] {\n  top: 35%;\n  right: -20px;\n  animation-delay: -1.2s;\n  color: #06b6d4;\n}\n.icon-3[_ngcontent-%COMP%] {\n  bottom: 10%;\n  left: -25px;\n  animation-delay: -2.4s;\n  color: #ec4899;\n}\n.icon-4[_ngcontent-%COMP%] {\n  bottom: -10px;\n  right: 20%;\n  animation-delay: -3.6s;\n}\n@keyframes _ngcontent-%COMP%_floatY {\n  0%, 100% {\n    transform: translateY(0) rotate(0);\n  }\n  50% {\n    transform: translateY(-15px) rotate(8deg);\n  }\n}\n.scroll-cue[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: 500;\n  transition: color 0.25s var(--ease);\n}\n.scroll-cue[_ngcontent-%COMP%]:hover {\n  color: var(--primary-light);\n}\n.scroll-cue[_ngcontent-%COMP%]   .mouse[_ngcontent-%COMP%] {\n  width: 26px;\n  height: 42px;\n  border: 2px solid currentColor;\n  border-radius: 14px;\n  display: grid;\n  place-items: start center;\n  padding-top: 8px;\n}\n.scroll-cue[_ngcontent-%COMP%]   .wheel[_ngcontent-%COMP%] {\n  width: 3px;\n  height: 8px;\n  background: currentColor;\n  border-radius: 2px;\n  animation: _ngcontent-%COMP%_scroll 1.6s ease-in-out infinite;\n}\n@keyframes _ngcontent-%COMP%_scroll {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(14px);\n    opacity: 0;\n  }\n}\n@media (max-width: 992px) {\n  .visual-card[_ngcontent-%COMP%] {\n    transform: none;\n    max-width: 420px;\n    margin: 0 auto;\n  }\n  .floating-icon[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .hero[_ngcontent-%COMP%] {\n    padding-top: 2rem;\n    min-height: auto;\n  }\n  .scroll-cue[_ngcontent-%COMP%] {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .hero-cta[_ngcontent-%COMP%]   .btn[_ngcontent-%COMP%] {\n    font-size: 0.85rem;\n    padding: 0.6rem 1.1rem;\n  }\n  .hero-socials[_ngcontent-%COMP%] {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=hero.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassMetadata(HeroComponent, [{
    type: Component,
    args: [{ selector: "app-hero", imports: [CommonModule, MatIconModule, MatButtonModule], template: `<section id="home" class="hero">
  <div class="container-x">
    <div class="row align-items-center g-5 hero-row">
      <div class="col-lg-7">
        <div class="hero-content reveal">
          <span class="eyebrow">
            <span class="wave">\u{1F44B}</span> Welcome to my portfolio
          </span>

          <h1 class="hero-title">
            Hi, I'm <span class="gradient-text">{{ portfolio.name }}</span>
            <br />
            <span class="role-line">
              a <span class="typed">{{ currentRole() }}</span><span class="cursor">|</span>
            </span>
          </h1>

          <p class="hero-subtitle">
            {{ portfolio.tagline }}
          </p>

          <div class="hero-info">
            <div class="info-item">
              <i class="bi bi-geo-alt"></i>
              <span>{{ portfolio.location }}</span>
            </div>
            <div class="info-item">
              <i class="bi bi-briefcase"></i>
              <span>3+ years building production Angular apps</span>
            </div>
          </div>

          <div class="hero-cta">
            <a href="#projects" class="btn btn-primary">
              <i class="bi bi-rocket-takeoff"></i>
              View My Work
            </a>
            <a href="#contact" class="btn btn-outline-light">
              <i class="bi bi-envelope"></i>
              Get in Touch
            </a>
            <a [href]="'mailto:' + portfolio.email" class="btn btn-ghost" mat-stroked-button>
              <mat-icon>download</mat-icon>
              Download CV
            </a>
          </div>

          <div class="hero-socials">
            <span class="socials-label">Follow me</span>
            <div class="social-icons">
              @for (s of portfolio.socials.slice(0, 4); track s.url) {
                <a [href]="s.url" target="_blank" rel="noopener" [attr.aria-label]="s.name" class="social-icon">
                  <i class="bi" [ngClass]="s.icon"></i>
                </a>
              }
            </div>
          </div>
        </div>
      </div>

      <div class="col-lg-5">
        <div class="hero-visual reveal">
          <div class="visual-card">
            <div class="card-glow"></div>
            <div class="card-content">
              <div class="avatar-wrapper">
                <div class="avatar-ring"></div>
                <div class="avatar">
                  <span class="avatar-initials">{{ portfolio.avatarInitials }}</span>
                </div>
                <div class="status-indicator" title="Available"></div>
              </div>

              <div class="dev-info">
                <h3 class="dev-name">{{ portfolio.name }}</h3>
                <p class="dev-role">{{ portfolio.role }}</p>
              </div>

              <div class="tech-stack">
                @for (tech of ['Angular', 'TypeScript', 'RxJS', 'NgRx', 'Material']; track tech) {
                  <span class="tech-pill">{{ tech }}</span>
                }
              </div>

              <div class="hero-stats">
                @for (stat of portfolio.stats; track stat.label) {
                  <div class="stat">
                    <i class="bi" [ngClass]="stat.icon"></i>
                    <div class="stat-info">
                      <span class="stat-value gradient-text">{{ formatValue(stat.label, stat.value) }}</span>
                      <span class="stat-label">{{ stat.label }}</span>
                    </div>
                  </div>
                }
              </div>
            </div>
          </div>

          <div class="floating-icon icon-1"><i class="bi bi-filetype-tsx"></i></div>
          <div class="floating-icon icon-2"><i class="bi bi-filetype-html"></i></div>
          <div class="floating-icon icon-3"><i class="bi bi-filetype-scss"></i></div>
          <div class="floating-icon icon-4"><i class="bi bi-github"></i></div>
        </div>
      </div>
    </div>
  </div>

  <a href="#about" class="scroll-cue" aria-label="Scroll to about">
    <span class="mouse">
      <span class="wheel"></span>
    </span>
    <span class="cue-text">Scroll</span>
  </a>
</section>
`, styles: ['/* src/app/pages/home/sections/hero/hero.scss */\n:host {\n  display: block;\n}\n.hero {\n  min-height: calc(100vh - 80px);\n  padding: 4rem 0 6rem;\n  display: flex;\n  align-items: center;\n  position: relative;\n  overflow: hidden;\n}\n.hero-row {\n  align-items: center;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n}\n.wave {\n  display: inline-block;\n  animation: wave 2.2s ease-in-out infinite;\n  transform-origin: 70% 70%;\n}\n@keyframes wave {\n  0%, 60%, 100% {\n    transform: rotate(0);\n  }\n  10%, 30% {\n    transform: rotate(14deg);\n  }\n  20% {\n    transform: rotate(-8deg);\n  }\n  40% {\n    transform: rotate(-4deg);\n  }\n  50% {\n    transform: rotate(10deg);\n  }\n}\n.hero-title {\n  font-size: clamp(2.4rem, 5.5vw, 4rem);\n  font-weight: 800;\n  line-height: 1.1;\n  letter-spacing: -1.5px;\n  margin: 0 0 1.25rem;\n}\n.hero-title .role-line {\n  display: inline-block;\n  font-weight: 600;\n}\n.hero-title .typed {\n  background: var(--gradient-text);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n}\n.hero-title .cursor {\n  display: inline-block;\n  color: var(--primary-light);\n  margin-left: 2px;\n  animation: blink 1s step-end infinite;\n  font-weight: 300;\n}\n@keyframes blink {\n  50% {\n    opacity: 0;\n  }\n}\n.hero-subtitle {\n  color: var(--text-muted);\n  font-size: 1.1rem;\n  max-width: 560px;\n  margin: 0 0 1.5rem;\n  line-height: 1.7;\n}\n.hero-info {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 1.25rem;\n  margin-bottom: 2rem;\n}\n.hero-info .info-item {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  color: var(--text-muted);\n  font-size: 0.92rem;\n}\n.hero-info .info-item i {\n  color: var(--primary-light);\n  font-size: 1rem;\n}\n.hero-cta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.85rem;\n  margin-bottom: 2.5rem;\n}\n.hero-cta i {\n  margin-right: 0.5rem;\n}\n.hero-cta mat-icon {\n  margin-right: 0.5rem;\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.btn-ghost {\n  border: 1px solid var(--border-strong);\n  color: var(--text) !important;\n  background: transparent;\n  border-radius: 999px;\n  padding: 0.65rem 1.5rem;\n  font-weight: 600;\n  transition: all 0.25s var(--ease);\n}\n.btn-ghost:hover {\n  background: var(--bg-elevated);\n  color: var(--text-strong) !important;\n  transform: translateY(-3px);\n  border-color: var(--primary);\n}\n.hero-socials {\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n}\n.hero-socials .socials-label {\n  color: var(--text-muted);\n  font-size: 0.85rem;\n  text-transform: uppercase;\n  letter-spacing: 1px;\n}\n.hero-socials .social-icons {\n  display: flex;\n  gap: 0.65rem;\n}\n.hero-socials .social-icon {\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  border-radius: 12px;\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n  border: 1px solid var(--border);\n  text-decoration: none;\n  transition: all 0.3s var(--ease);\n  font-size: 1.05rem;\n}\n.hero-socials .social-icon:hover {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: translateY(-3px) rotate(-5deg);\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.hero-visual {\n  position: relative;\n  z-index: 2;\n}\n.visual-card {\n  position: relative;\n  background:\n    linear-gradient(\n      145deg,\n      var(--bg-elevated),\n      var(--bg-soft));\n  border: 1px solid var(--border);\n  border-radius: var(--radius-lg);\n  padding: 2rem;\n  box-shadow: var(--shadow-lg);\n  overflow: hidden;\n  transform: rotate(-1deg);\n  transition: transform 0.4s var(--ease);\n}\n.visual-card:hover {\n  transform: rotate(0);\n}\n.visual-card::before {\n  content: "";\n  position: absolute;\n  inset: 0;\n  background:\n    radial-gradient(\n      circle at 20% 0%,\n      rgba(99, 102, 241, 0.18),\n      transparent 50%),\n    radial-gradient(\n      circle at 80% 100%,\n      rgba(6, 182, 212, 0.15),\n      transparent 50%);\n  pointer-events: none;\n}\n.card-glow {\n  position: absolute;\n  top: -50%;\n  left: -10%;\n  width: 120%;\n  height: 60%;\n  background: var(--gradient-primary);\n  filter: blur(80px);\n  opacity: 0.18;\n  pointer-events: none;\n}\n.card-content {\n  position: relative;\n  z-index: 2;\n}\n.avatar-wrapper {\n  position: relative;\n  width: 130px;\n  height: 130px;\n  margin: 0 auto 1.25rem;\n}\n.avatar-ring {\n  position: absolute;\n  inset: -6px;\n  border-radius: 50%;\n  background:\n    conic-gradient(\n      from 0deg,\n      #6366f1,\n      #06b6d4,\n      #ec4899,\n      #6366f1);\n  animation: spin 6s linear infinite;\n}\n.avatar-ring::before {\n  content: "";\n  position: absolute;\n  inset: 4px;\n  background: var(--bg-elevated);\n  border-radius: 50%;\n}\n@keyframes spin {\n  to {\n    transform: rotate(360deg);\n  }\n}\n.avatar {\n  position: absolute;\n  inset: 0;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  overflow: hidden;\n}\n.avatar-initials {\n  font-size: 2.8rem;\n  font-weight: 800;\n  color: #fff;\n  letter-spacing: -1px;\n}\n.status-indicator {\n  position: absolute;\n  bottom: 6px;\n  right: 6px;\n  width: 22px;\n  height: 22px;\n  background: #22c55e;\n  border: 4px solid var(--bg-elevated);\n  border-radius: 50%;\n  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.4);\n  animation: pulse 2s ease-in-out infinite;\n}\n@keyframes pulse {\n  0%, 100% {\n    box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);\n  }\n  50% {\n    box-shadow: 0 0 0 8px rgba(34, 197, 94, 0);\n  }\n}\n.dev-info {\n  text-align: center;\n  margin-bottom: 1.25rem;\n}\n.dev-info .dev-name {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.dev-info .dev-role {\n  color: var(--text-muted);\n  font-size: 0.9rem;\n  margin: 0;\n}\n.tech-stack {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  justify-content: center;\n  margin-bottom: 1.75rem;\n}\n.tech-pill {\n  padding: 0.3rem 0.75rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.hero-stats {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.85rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid var(--border);\n}\n.stat {\n  display: flex;\n  align-items: center;\n  gap: 0.7rem;\n  padding: 0.65rem 0.75rem;\n  background: rgba(255, 255, 255, 0.03);\n  border: 1px solid var(--border);\n  border-radius: 12px;\n  transition: transform 0.25s var(--ease);\n}\n.stat:hover {\n  transform: translateY(-3px);\n}\n.stat i {\n  font-size: 1.1rem;\n  color: var(--primary-light);\n}\n.stat .stat-info {\n  display: flex;\n  flex-direction: column;\n  line-height: 1.1;\n}\n.stat .stat-value {\n  font-weight: 700;\n  font-size: 1.05rem;\n}\n.stat .stat-label {\n  font-size: 0.7rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.floating-icon {\n  position: absolute;\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  font-size: 1.5rem;\n  color: var(--primary-light);\n  box-shadow: var(--shadow-md);\n  z-index: 3;\n  animation: floatY 4s ease-in-out infinite;\n}\n.floating-icon i {\n  font-size: 1.4rem;\n}\n.icon-1 {\n  top: -15px;\n  left: -10px;\n  animation-delay: 0s;\n}\n.icon-2 {\n  top: 35%;\n  right: -20px;\n  animation-delay: -1.2s;\n  color: #06b6d4;\n}\n.icon-3 {\n  bottom: 10%;\n  left: -25px;\n  animation-delay: -2.4s;\n  color: #ec4899;\n}\n.icon-4 {\n  bottom: -10px;\n  right: 20%;\n  animation-delay: -3.6s;\n}\n@keyframes floatY {\n  0%, 100% {\n    transform: translateY(0) rotate(0);\n  }\n  50% {\n    transform: translateY(-15px) rotate(8deg);\n  }\n}\n.scroll-cue {\n  position: absolute;\n  bottom: 1.5rem;\n  left: 50%;\n  transform: translateX(-50%);\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  gap: 0.5rem;\n  text-decoration: none;\n  color: var(--text-muted);\n  font-size: 0.75rem;\n  text-transform: uppercase;\n  letter-spacing: 1.5px;\n  font-weight: 500;\n  transition: color 0.25s var(--ease);\n}\n.scroll-cue:hover {\n  color: var(--primary-light);\n}\n.scroll-cue .mouse {\n  width: 26px;\n  height: 42px;\n  border: 2px solid currentColor;\n  border-radius: 14px;\n  display: grid;\n  place-items: start center;\n  padding-top: 8px;\n}\n.scroll-cue .wheel {\n  width: 3px;\n  height: 8px;\n  background: currentColor;\n  border-radius: 2px;\n  animation: scroll 1.6s ease-in-out infinite;\n}\n@keyframes scroll {\n  0% {\n    transform: translateY(0);\n    opacity: 1;\n  }\n  100% {\n    transform: translateY(14px);\n    opacity: 0;\n  }\n}\n@media (max-width: 992px) {\n  .visual-card {\n    transform: none;\n    max-width: 420px;\n    margin: 0 auto;\n  }\n  .floating-icon {\n    display: none;\n  }\n  .hero {\n    padding-top: 2rem;\n    min-height: auto;\n  }\n  .scroll-cue {\n    display: none;\n  }\n}\n@media (max-width: 576px) {\n  .hero-cta .btn {\n    font-size: 0.85rem;\n    padding: 0.6rem 1.1rem;\n  }\n  .hero-socials {\n    flex-direction: column;\n    align-items: flex-start;\n  }\n}\n/*# sourceMappingURL=hero.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i0.\u0275setClassDebugInfo(HeroComponent, { className: "HeroComponent", filePath: "src/app/pages/home/sections/hero/hero.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fhero%2Fhero.ts%40HeroComponent";
  function HeroComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i0.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i0.\u0275\u0275replaceMetadata(HeroComponent, m.default, [i0, i1, i2, i3, i4], [CommonModule, MatIconModule, MatButtonModule, Component], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HeroComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HeroComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/about/about.ts
import { Component as Component2, inject as inject2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i02 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i12 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i22 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i32 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
var _forTrack02 = ($index, $item) => $item.title;
function AboutComponent_For_95_Template(rf, ctx) {
  if (rf & 1) {
    i02.\u0275\u0275elementStart(0, "div", 32)(1, "div", 33);
    i02.\u0275\u0275element(2, "i", 34);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(3, "div", 35)(4, "h4", 36);
    i02.\u0275\u0275text(5);
    i02.\u0275\u0275elementEnd();
    i02.\u0275\u0275elementStart(6, "p", 37);
    i02.\u0275\u0275text(7);
    i02.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const h_r1 = ctx.$implicit;
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275property("ngClass", h_r1.icon);
    i02.\u0275\u0275advance(3);
    i02.\u0275\u0275textInterpolate(h_r1.title);
    i02.\u0275\u0275advance(2);
    i02.\u0275\u0275textInterpolate(h_r1.text);
  }
}
var AboutComponent = class _AboutComponent {
  portfolio = inject2(PortfolioService);
  highlights = [
    {
      icon: "bi-lightning-charge-fill",
      title: "Performance First",
      text: "I obsess over Core Web Vitals, lazy loading, and bundle size to deliver lightning-fast experiences."
    },
    {
      icon: "bi-diagram-3-fill",
      title: "Scalable Architecture",
      text: "Building modular, testable codebases with feature modules, smart/dumb components, and clean state management."
    },
    {
      icon: "bi-universal-access",
      title: "Accessible by Default",
      text: "WCAG-compliant UI, full keyboard navigation, screen-reader friendly markup and RTL support."
    },
    {
      icon: "bi-people-fill",
      title: "Team Player & Mentor",
      text: "Code reviews, pair-programming and mentoring \u2014 I lift the team around me as I grow."
    }
  ];
  static \u0275fac = function AboutComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _AboutComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i02.\u0275\u0275defineComponent({ type: _AboutComponent, selectors: [["app-about"]], decls: 96, vars: 4, consts: [["id", "about", 1, "section", "about"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-person-badge"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "row", "g-5", "align-items-center"], [1, "col-lg-5", "reveal"], [1, "about-visual"], [1, "code-window"], [1, "window-bar"], [1, "dot", "red"], [1, "dot", "yellow"], [1, "dot", "green"], [1, "file-name"], [1, "code"], [1, "c-keyword"], [1, "c-var"], [1, "c-prop"], [1, "c-string"], [1, "c-number"], [1, "c-bool"], [1, "floating-badge", "badge-1"], [1, "floating-badge", "badge-2"], [1, "bi", "bi-stars"], [1, "col-lg-7", "reveal"], [1, "about-content"], [1, "about-heading"], [1, "about-text"], [1, "highlights-grid"], [1, "highlight"], [1, "h-icon"], [1, "bi", 3, "ngClass"], [1, "h-body"], [1, "h-title"], [1, "h-text"]], template: function AboutComponent_Template(rf, ctx) {
    if (rf & 1) {
      i02.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i02.\u0275\u0275element(4, "i", 4);
      i02.\u0275\u0275text(5, " About me");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(6, "h2", 5);
      i02.\u0275\u0275text(7, "Crafting ");
      i02.\u0275\u0275elementStart(8, "span", 6);
      i02.\u0275\u0275text(9, "delightful");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(10, " digital experiences");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(11, "p", 7);
      i02.\u0275\u0275text(12, " A passionate frontend developer who treats every component like a small product. ");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(13, "div", 8)(14, "div", 9)(15, "div", 10)(16, "div", 11)(17, "div", 12);
      i02.\u0275\u0275element(18, "span", 13)(19, "span", 14)(20, "span", 15);
      i02.\u0275\u0275elementStart(21, "span", 16);
      i02.\u0275\u0275text(22, "developer.ts");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(23, "pre", 17)(24, "code")(25, "span", 18);
      i02.\u0275\u0275text(26, "const");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(27, " ");
      i02.\u0275\u0275elementStart(28, "span", 19);
      i02.\u0275\u0275text(29, "ahmed");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(30);
      i02.\u0275\u0275elementStart(31, "span", 20);
      i02.\u0275\u0275text(32, "role");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(33, ": ");
      i02.\u0275\u0275elementStart(34, "span", 21);
      i02.\u0275\u0275text(35, "'Senior Angular Developer'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(36, ",\n  ");
      i02.\u0275\u0275elementStart(37, "span", 20);
      i02.\u0275\u0275text(38, "experience");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(39, ": ");
      i02.\u0275\u0275elementStart(40, "span", 22);
      i02.\u0275\u0275text(41, "3+");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(42, " ");
      i02.\u0275\u0275elementStart(43, "span", 21);
      i02.\u0275\u0275text(44, "'years'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(45, ",\n  ");
      i02.\u0275\u0275elementStart(46, "span", 20);
      i02.\u0275\u0275text(47, "focus");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(48, ": [\n    ");
      i02.\u0275\u0275elementStart(49, "span", 21);
      i02.\u0275\u0275text(50, "'Angular 17'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(51, ",\n    ");
      i02.\u0275\u0275elementStart(52, "span", 21);
      i02.\u0275\u0275text(53, "'NgRx & Signals'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(54, ",\n    ");
      i02.\u0275\u0275elementStart(55, "span", 21);
      i02.\u0275\u0275text(56, "'Material & Bootstrap'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(57, ",\n    ");
      i02.\u0275\u0275elementStart(58, "span", 21);
      i02.\u0275\u0275text(59, "'Performance & A11y'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(60, ",\n  ],\n  ");
      i02.\u0275\u0275elementStart(61, "span", 20);
      i02.\u0275\u0275text(62, "available");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(63, ": ");
      i02.\u0275\u0275elementStart(64, "span", 23);
      i02.\u0275\u0275text(65, "true");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(66, ",\n  ");
      i02.\u0275\u0275elementStart(67, "span", 20);
      i02.\u0275\u0275text(68, "loves");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(69, ": ");
      i02.\u0275\u0275elementStart(70, "span", 21);
      i02.\u0275\u0275text(71, "'clean code & great UX'");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(72);
      i02.\u0275\u0275elementEnd()()();
      i02.\u0275\u0275elementStart(73, "div", 24)(74, "mat-icon");
      i02.\u0275\u0275text(75, "workspace_premium");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(76, "span");
      i02.\u0275\u0275text(77, "3+ Years Exp.");
      i02.\u0275\u0275elementEnd()();
      i02.\u0275\u0275elementStart(78, "div", 25);
      i02.\u0275\u0275element(79, "i", 26);
      i02.\u0275\u0275elementStart(80, "span");
      i02.\u0275\u0275text(81, "Top Rated");
      i02.\u0275\u0275elementEnd()()()();
      i02.\u0275\u0275elementStart(82, "div", 27)(83, "div", 28)(84, "h3", 29);
      i02.\u0275\u0275text(85);
      i02.\u0275\u0275elementStart(86, "span", 6);
      i02.\u0275\u0275text(87, "elegant solutions");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275text(88, ". ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(89, "p", 30);
      i02.\u0275\u0275text(90);
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(91, "p", 30);
      i02.\u0275\u0275text(92, " My work spans enterprise SaaS dashboards, fintech apps, e-commerce platforms and PWAs. I love owning the full frontend lifecycle \u2014 from architecture and design tokens to unit-testing, CI/CD and production monitoring. ");
      i02.\u0275\u0275elementEnd();
      i02.\u0275\u0275elementStart(93, "div", 31);
      i02.\u0275\u0275repeaterCreate(94, AboutComponent_For_95_Template, 8, 3, "div", 32, _forTrack02);
      i02.\u0275\u0275elementEnd()()()()()();
    }
    if (rf & 2) {
      i02.\u0275\u0275advance(30);
      i02.\u0275\u0275textInterpolate1(" = ", "{", "\n  ");
      i02.\u0275\u0275advance(42);
      i02.\u0275\u0275textInterpolate1(",\n", "}", ";");
      i02.\u0275\u0275advance(13);
      i02.\u0275\u0275textInterpolate1(" I'm ", ctx.portfolio.name, ", an Angular developer who turns complex problems into ");
      i02.\u0275\u0275advance(5);
      i02.\u0275\u0275textInterpolate1(" ", ctx.portfolio.bio, " ");
      i02.\u0275\u0275advance(4);
      i02.\u0275\u0275repeater(ctx.highlights);
    }
  }, dependencies: [CommonModule2, i12.NgClass, i12.NgComponentOutlet, i12.NgForOf, i12.NgIf, i12.NgTemplateOutlet, i12.NgStyle, i12.NgSwitch, i12.NgSwitchCase, i12.NgSwitchDefault, i12.NgPlural, i12.NgPluralCase, MatIconModule2, i22.MatIcon, i32.Dir, i12.AsyncPipe, i12.UpperCasePipe, i12.LowerCasePipe, i12.JsonPipe, i12.SlicePipe, i12.DecimalPipe, i12.PercentPipe, i12.TitleCasePipe, i12.CurrencyPipe, i12.DatePipe, i12.I18nPluralPipe, i12.I18nSelectPipe, i12.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.about-visual[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.code-window[_ngcontent-%COMP%] {\n  background: #0d1117;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  transform: rotate(-1.5deg);\n  transition: transform 0.4s var(--ease);\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.85rem;\n  line-height: 1.7;\n}\n.code-window[_ngcontent-%COMP%]:hover {\n  transform: rotate(0);\n}\n.window-bar[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #161b22;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.window-bar[_ngcontent-%COMP%]   .dot[_ngcontent-%COMP%] {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.window-bar[_ngcontent-%COMP%]   .red[_ngcontent-%COMP%] {\n  background: #ff5f57;\n}\n.window-bar[_ngcontent-%COMP%]   .yellow[_ngcontent-%COMP%] {\n  background: #febc2e;\n}\n.window-bar[_ngcontent-%COMP%]   .green[_ngcontent-%COMP%] {\n  background: #28c840;\n}\n.window-bar[_ngcontent-%COMP%]   .file-name[_ngcontent-%COMP%] {\n  margin-left: 0.5rem;\n  color: #8b949e;\n  font-size: 0.8rem;\n}\n.code[_ngcontent-%COMP%] {\n  margin: 0;\n  padding: 1.25rem 1.5rem;\n  color: #c9d1d9;\n  white-space: pre-wrap;\n  overflow-x: auto;\n}\n.code[_ngcontent-%COMP%]   .c-keyword[_ngcontent-%COMP%] {\n  color: #ff7b72;\n}\n.code[_ngcontent-%COMP%]   .c-var[_ngcontent-%COMP%] {\n  color: #79c0ff;\n}\n.code[_ngcontent-%COMP%]   .c-prop[_ngcontent-%COMP%] {\n  color: #d2a8ff;\n}\n.code[_ngcontent-%COMP%]   .c-string[_ngcontent-%COMP%] {\n  color: #a5d6ff;\n}\n.code[_ngcontent-%COMP%]   .c-number[_ngcontent-%COMP%] {\n  color: #79c0ff;\n}\n.code[_ngcontent-%COMP%]   .c-bool[_ngcontent-%COMP%] {\n  color: #ffa657;\n}\n.floating-badge[_ngcontent-%COMP%] {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1rem;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text);\n  box-shadow: var(--shadow-md);\n  z-index: 3;\n  animation: _ngcontent-%COMP%_floatY 5s ease-in-out infinite;\n}\n.floating-badge[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.floating-badge[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 1rem;\n}\n.badge-1[_ngcontent-%COMP%] {\n  top: -10px;\n  right: -25px;\n  animation-delay: 0s;\n}\n.badge-2[_ngcontent-%COMP%] {\n  bottom: 30px;\n  left: -30px;\n  animation-delay: -2.5s;\n}\n@keyframes _ngcontent-%COMP%_floatY {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n.about-content[_ngcontent-%COMP%] {\n  padding-left: 1rem;\n}\n.about-heading[_ngcontent-%COMP%] {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin: 0 0 1.25rem;\n}\n.about-text[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.85;\n  margin-bottom: 1rem;\n}\n.highlights-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-top: 2rem;\n}\n.highlight[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n}\n.highlight[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-glow);\n}\n.highlight[_ngcontent-%COMP%]   .h-icon[_ngcontent-%COMP%] {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border-radius: 10px;\n  font-size: 1.2rem;\n}\n.highlight[_ngcontent-%COMP%]   .h-title[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.highlight[_ngcontent-%COMP%]   .h-text[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.55;\n}\n@media (max-width: 992px) {\n  .code-window[_ngcontent-%COMP%] {\n    transform: none;\n  }\n  .floating-badge[_ngcontent-%COMP%] {\n    display: none;\n  }\n  .about-content[_ngcontent-%COMP%] {\n    padding-left: 0;\n  }\n}\n@media (max-width: 576px) {\n  .highlights-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .about-heading[_ngcontent-%COMP%] {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=about.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassMetadata(AboutComponent, [{
    type: Component2,
    args: [{ selector: "app-about", imports: [CommonModule2, MatIconModule2], template: `<section id="about" class="section about">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-person-badge"></i> About me</span>
      <h2 class="section-title">Crafting <span class="gradient-text">delightful</span> digital experiences</h2>
      <p class="section-subtitle">
        A passionate frontend developer who treats every component like a small product.
      </p>
    </div>

    <div class="row g-5 align-items-center">
      <div class="col-lg-5 reveal">
        <div class="about-visual">
          <div class="code-window">
            <div class="window-bar">
              <span class="dot red"></span>
              <span class="dot yellow"></span>
              <span class="dot green"></span>
              <span class="file-name">developer.ts</span>
            </div>
            <pre class="code"><code><span class="c-keyword">const</span> <span class="c-var">ahmed</span> = {{ '{' }}
  <span class="c-prop">role</span>: <span class="c-string">'Senior Angular Developer'</span>,
  <span class="c-prop">experience</span>: <span class="c-number">3+</span> <span class="c-string">'years'</span>,
  <span class="c-prop">focus</span>: [
    <span class="c-string">'Angular 17'</span>,
    <span class="c-string">'NgRx & Signals'</span>,
    <span class="c-string">'Material & Bootstrap'</span>,
    <span class="c-string">'Performance & A11y'</span>,
  ],
  <span class="c-prop">available</span>: <span class="c-bool">true</span>,
  <span class="c-prop">loves</span>: <span class="c-string">'clean code & great UX'</span>,
{{ '}' }};</code></pre>
          </div>

          <div class="floating-badge badge-1">
            <mat-icon>workspace_premium</mat-icon>
            <span>3+ Years Exp.</span>
          </div>
          <div class="floating-badge badge-2">
            <i class="bi bi-stars"></i>
            <span>Top Rated</span>
          </div>
        </div>
      </div>

      <div class="col-lg-7 reveal">
        <div class="about-content">
          <h3 class="about-heading">
            I'm {{ portfolio.name }}, an Angular developer who turns complex problems
            into <span class="gradient-text">elegant solutions</span>.
          </h3>
          <p class="about-text">
            {{ portfolio.bio }}
          </p>
          <p class="about-text">
            My work spans enterprise SaaS dashboards, fintech apps, e-commerce platforms and PWAs.
            I love owning the full frontend lifecycle \u2014 from architecture and design tokens to
            unit-testing, CI/CD and production monitoring.
          </p>

          <div class="highlights-grid">
            @for (h of highlights; track h.title) {
              <div class="highlight">
                <div class="h-icon">
                  <i class="bi" [ngClass]="h.icon"></i>
                </div>
                <div class="h-body">
                  <h4 class="h-title">{{ h.title }}</h4>
                  <p class="h-text">{{ h.text }}</p>
                </div>
              </div>
            }
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
`, styles: ['/* src/app/pages/home/sections/about/about.scss */\n:host {\n  display: block;\n}\n.about-visual {\n  position: relative;\n  max-width: 480px;\n  margin: 0 auto;\n}\n.code-window {\n  background: #0d1117;\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  box-shadow: var(--shadow-lg);\n  transform: rotate(-1.5deg);\n  transition: transform 0.4s var(--ease);\n  font-family: "JetBrains Mono", monospace;\n  font-size: 0.85rem;\n  line-height: 1.7;\n}\n.code-window:hover {\n  transform: rotate(0);\n}\n.window-bar {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.75rem 1rem;\n  background: #161b22;\n  border-bottom: 1px solid rgba(255, 255, 255, 0.05);\n}\n.window-bar .dot {\n  width: 12px;\n  height: 12px;\n  border-radius: 50%;\n}\n.window-bar .red {\n  background: #ff5f57;\n}\n.window-bar .yellow {\n  background: #febc2e;\n}\n.window-bar .green {\n  background: #28c840;\n}\n.window-bar .file-name {\n  margin-left: 0.5rem;\n  color: #8b949e;\n  font-size: 0.8rem;\n}\n.code {\n  margin: 0;\n  padding: 1.25rem 1.5rem;\n  color: #c9d1d9;\n  white-space: pre-wrap;\n  overflow-x: auto;\n}\n.code .c-keyword {\n  color: #ff7b72;\n}\n.code .c-var {\n  color: #79c0ff;\n}\n.code .c-prop {\n  color: #d2a8ff;\n}\n.code .c-string {\n  color: #a5d6ff;\n}\n.code .c-number {\n  color: #79c0ff;\n}\n.code .c-bool {\n  color: #ffa657;\n}\n.floating-badge {\n  position: absolute;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.7rem 1rem;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  border-radius: 14px;\n  font-size: 0.85rem;\n  font-weight: 600;\n  color: var(--text);\n  box-shadow: var(--shadow-md);\n  z-index: 3;\n  animation: floatY 5s ease-in-out infinite;\n}\n.floating-badge mat-icon {\n  color: var(--primary-light);\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.floating-badge i {\n  color: #fbbf24;\n  font-size: 1rem;\n}\n.badge-1 {\n  top: -10px;\n  right: -25px;\n  animation-delay: 0s;\n}\n.badge-2 {\n  bottom: 30px;\n  left: -30px;\n  animation-delay: -2.5s;\n}\n@keyframes floatY {\n  0%, 100% {\n    transform: translateY(0);\n  }\n  50% {\n    transform: translateY(-12px);\n  }\n}\n.about-content {\n  padding-left: 1rem;\n}\n.about-heading {\n  font-size: 1.75rem;\n  font-weight: 700;\n  line-height: 1.3;\n  margin: 0 0 1.25rem;\n}\n.about-text {\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.85;\n  margin-bottom: 1rem;\n}\n.highlights-grid {\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 1.25rem;\n  margin-top: 2rem;\n}\n.highlight {\n  display: flex;\n  gap: 1rem;\n  padding: 1.25rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n}\n.highlight:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-glow);\n}\n.highlight .h-icon {\n  flex-shrink: 0;\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border-radius: 10px;\n  font-size: 1.2rem;\n}\n.highlight .h-title {\n  font-size: 0.98rem;\n  font-weight: 700;\n  margin: 0 0 0.25rem;\n}\n.highlight .h-text {\n  font-size: 0.85rem;\n  color: var(--text-muted);\n  margin: 0;\n  line-height: 1.55;\n}\n@media (max-width: 992px) {\n  .code-window {\n    transform: none;\n  }\n  .floating-badge {\n    display: none;\n  }\n  .about-content {\n    padding-left: 0;\n  }\n}\n@media (max-width: 576px) {\n  .highlights-grid {\n    grid-template-columns: 1fr;\n  }\n  .about-heading {\n    font-size: 1.4rem;\n  }\n}\n/*# sourceMappingURL=about.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i02.\u0275setClassDebugInfo(AboutComponent, { className: "AboutComponent", filePath: "src/app/pages/home/sections/about/about.ts", lineNumber: 18 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fabout%2Fabout.ts%40AboutComponent";
  function AboutComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i02.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i02.\u0275\u0275replaceMetadata(AboutComponent, m.default, [i02, i12, i22, i32], [CommonModule2, MatIconModule2, Component2], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && AboutComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && AboutComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/skills/skills.ts
import { Component as Component3, inject as inject3, signal as signal2, computed } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatTabsModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_tabs.js?v=1ba7cd2d";
import { MatChipsModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_chips.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";

// src/app/core/models/skill.model.ts
var SKILL_LEVEL_PERCENT = {
  beginner: 35,
  intermediate: 60,
  advanced: 80,
  expert: 95
};

// src/app/pages/home/sections/skills/skills.ts
import * as i03 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i13 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i23 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
import * as i33 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_tabs.js?v=1ba7cd2d";
import * as i42 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_chips.js?v=1ba7cd2d";
import * as i5 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
var _forTrack03 = ($index, $item) => $item.id;
function SkillsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i03.\u0275\u0275getCurrentView();
    i03.\u0275\u0275elementStart(0, "button", 12);
    i03.\u0275\u0275listener("click", function SkillsComponent_For_14_Template_button_click_0_listener() {
      const cat_r2 = i03.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i03.\u0275\u0275nextContext();
      return i03.\u0275\u0275resetView(ctx_r2.setCategory(cat_r2.id));
    });
    i03.\u0275\u0275elementStart(1, "mat-icon");
    i03.\u0275\u0275text(2);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(3, "span");
    i03.\u0275\u0275text(4);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(5, "span", 13);
    i03.\u0275\u0275text(6);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const cat_r2 = ctx.$implicit;
    const ctx_r2 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275classProp("active", ctx_r2.activeCategory() === cat_r2.id);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(cat_r2.icon);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(cat_r2.label);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate(ctx_r2.countFor(cat_r2.id));
  }
}
function SkillsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    i03.\u0275\u0275elementStart(0, "div", 14)(1, "div", 15)(2, "div", 16);
    i03.\u0275\u0275element(3, "i", 17);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(4, "div", 18)(5, "h4", 19);
    i03.\u0275\u0275text(6);
    i03.\u0275\u0275elementEnd();
    i03.\u0275\u0275elementStart(7, "span", 20);
    i03.\u0275\u0275text(8);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275elementStart(9, "span", 21);
    i03.\u0275\u0275text(10);
    i03.\u0275\u0275elementEnd()();
    i03.\u0275\u0275elementStart(11, "div", 22);
    i03.\u0275\u0275element(12, "span", 23);
    i03.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const skill_r4 = ctx.$implicit;
    const \u0275$index_37_r5 = ctx.$index;
    const ctx_r2 = i03.\u0275\u0275nextContext();
    i03.\u0275\u0275styleProp("animation-delay", \u0275$index_37_r5 * 60, "ms");
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275property("ngClass", skill_r4.icon);
    i03.\u0275\u0275advance(3);
    i03.\u0275\u0275textInterpolate(skill_r4.name);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275textInterpolate2("", skill_r4.years, "+ year", skill_r4.years > 1 ? "s" : "");
    i03.\u0275\u0275advance();
    i03.\u0275\u0275classMap("lvl-" + skill_r4.level);
    i03.\u0275\u0275advance();
    i03.\u0275\u0275textInterpolate(skill_r4.level);
    i03.\u0275\u0275advance(2);
    i03.\u0275\u0275styleProp("width", ctx_r2.percentMap[skill_r4.level], "%");
  }
}
var SkillsComponent = class _SkillsComponent {
  portfolio = inject3(PortfolioService);
  activeCategory = signal2("all", ...ngDevMode ? [{ debugName: "activeCategory" }] : (
    /* istanbul ignore next */
    []
  ));
  percentMap = SKILL_LEVEL_PERCENT;
  categories = [
    { id: "all", label: "All Skills", icon: "grid_view" },
    { id: "frontend", label: "Frontend", icon: "code" },
    { id: "ui", label: "UI & Design", icon: "palette" },
    { id: "state", label: "State", icon: "hub" },
    { id: "tooling", label: "Tooling", icon: "build" },
    { id: "testing", label: "Testing", icon: "bug_report" },
    { id: "soft", label: "Soft Skills", icon: "groups" }
  ];
  filteredSkills = computed(() => {
    const cat = this.activeCategory();
    return cat === "all" ? this.portfolio.skills : this.portfolio.skills.filter((s) => s.category === cat);
  }, ...ngDevMode ? [{ debugName: "filteredSkills" }] : (
    /* istanbul ignore next */
    []
  ));
  setCategory(cat) {
    this.activeCategory.set(cat);
  }
  countFor(cat) {
    if (cat === "all")
      return this.portfolio.skills.length;
    return this.portfolio.skills.filter((s) => s.category === cat).length;
  }
  trackByName(_, item) {
    return item.name;
  }
  static \u0275fac = function SkillsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _SkillsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i03.\u0275\u0275defineComponent({ type: _SkillsComponent, selectors: [["app-skills"]], decls: 18, vars: 0, consts: [["id", "skills", 1, "section", "skills"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-mortarboard"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "category-tabs", "reveal"], ["type", "button", 1, "cat-tab", 3, "active"], [1, "skills-grid"], [1, "skill-card", "reveal", 3, "animation-delay"], ["type", "button", 1, "cat-tab", 3, "click"], [1, "count"], [1, "skill-card", "reveal"], [1, "skill-header"], [1, "skill-icon"], [1, "bi", 3, "ngClass"], [1, "skill-info"], [1, "skill-name"], [1, "skill-meta"], [1, "skill-level"], [1, "skill-bar"], [1, "bar-fill"]], template: function SkillsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i03.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i03.\u0275\u0275element(4, "i", 4);
      i03.\u0275\u0275text(5, " Skills & Expertise");
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(6, "h2", 5);
      i03.\u0275\u0275text(7, "A toolbox built for ");
      i03.\u0275\u0275elementStart(8, "span", 6);
      i03.\u0275\u0275text(9, "modern Angular");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(10, "p", 7);
      i03.\u0275\u0275text(11, " 3+ years of hands-on production experience across the entire frontend stack. ");
      i03.\u0275\u0275elementEnd()();
      i03.\u0275\u0275elementStart(12, "div", 8);
      i03.\u0275\u0275repeaterCreate(13, SkillsComponent_For_14_Template, 7, 5, "button", 9, _forTrack03);
      i03.\u0275\u0275elementEnd();
      i03.\u0275\u0275elementStart(15, "div", 10);
      i03.\u0275\u0275repeaterCreate(16, SkillsComponent_For_17_Template, 13, 11, "div", 11, ctx.trackByName, true);
      i03.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i03.\u0275\u0275advance(13);
      i03.\u0275\u0275repeater(ctx.categories);
      i03.\u0275\u0275advance(3);
      i03.\u0275\u0275repeater(ctx.filteredSkills());
    }
  }, dependencies: [CommonModule3, i13.NgClass, i13.NgComponentOutlet, i13.NgForOf, i13.NgIf, i13.NgTemplateOutlet, i13.NgStyle, i13.NgSwitch, i13.NgSwitchCase, i13.NgSwitchDefault, i13.NgPlural, i13.NgPluralCase, MatTabsModule, i23.Dir, i33.MatTabContent, i33.MatTabLabel, i33.MatTab, i33.MatTabGroup, i33.MatTabNav, i33.MatTabNavPanel, i33.MatTabLink, MatChipsModule, i42.MatChip, i42.MatChipAvatar, i42.MatChipEdit, i42.MatChipEditInput, i42.MatChipGrid, i42.MatChipInput, i42.MatChipListbox, i42.MatChipOption, i42.MatChipRemove, i42.MatChipRow, i42.MatChipSet, i42.MatChipTrailingIcon, MatIconModule3, i5.MatIcon, i13.AsyncPipe, i13.UpperCasePipe, i13.LowerCasePipe, i13.JsonPipe, i13.SlicePipe, i13.DecimalPipe, i13.PercentPipe, i13.TitleCasePipe, i13.CurrencyPipe, i13.DatePipe, i13.I18nPluralPipe, i13.I18nSelectPipe, i13.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.category-tabs[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.6rem;\n  margin-bottom: 3rem;\n}\n.cat-tab[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.1rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n}\n.cat-tab[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cat-tab[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  padding: 0.1rem 0.5rem;\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.cat-tab[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.cat-tab.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.cat-tab.active[_ngcontent-%COMP%]   .count[_ngcontent-%COMP%] {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.skills-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.skill-card[_ngcontent-%COMP%] {\n  padding: 1.25rem 1.4rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.skill-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 0;\n  background: var(--gradient-primary);\n  border-radius: 4px;\n  transition: height 0.4s var(--ease);\n}\n.skill-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.skill-card[_ngcontent-%COMP%]:hover::before {\n  height: 100%;\n}\n.skill-header[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n}\n.skill-icon[_ngcontent-%COMP%] {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border-radius: 10px;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n  transition: all 0.3s var(--ease);\n}\n.skill-card[_ngcontent-%COMP%]:hover   .skill-icon[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: rotate(-8deg);\n}\n.skill-info[_ngcontent-%COMP%] {\n  flex: 1;\n  min-width: 0;\n}\n.skill-name[_ngcontent-%COMP%] {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.skill-meta[_ngcontent-%COMP%] {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.skill-level[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.skill-level.lvl-expert[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.skill-level.lvl-advanced[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n}\n.skill-level.lvl-intermediate[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.skill-level.lvl-beginner[_ngcontent-%COMP%] {\n  background: rgba(148, 163, 184, 0.15);\n  color: var(--text-muted);\n}\n.skill-bar[_ngcontent-%COMP%] {\n  position: relative;\n  width: 100%;\n  height: 6px;\n  background: var(--bg-elevated);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.bar-fill[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background: var(--gradient-primary);\n  border-radius: 3px;\n  width: 0;\n  transform-origin: left;\n  animation: _ngcontent-%COMP%_barFill 1.4s var(--ease) forwards;\n}\n@keyframes _ngcontent-%COMP%_barFill {\n  from {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=skills.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassMetadata(SkillsComponent, [{
    type: Component3,
    args: [{ selector: "app-skills", imports: [CommonModule3, MatTabsModule, MatChipsModule, MatIconModule3], template: `<section id="skills" class="section skills">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-mortarboard"></i> Skills & Expertise</span>
      <h2 class="section-title">A toolbox built for <span class="gradient-text">modern Angular</span></h2>
      <p class="section-subtitle">
        3+ years of hands-on production experience across the entire frontend stack.
      </p>
    </div>

    <div class="category-tabs reveal">
      @for (cat of categories; track cat.id) {
        <button
          type="button"
          class="cat-tab"
          [class.active]="activeCategory() === cat.id"
          (click)="setCategory(cat.id)">
          <mat-icon>{{ cat.icon }}</mat-icon>
          <span>{{ cat.label }}</span>
          <span class="count">{{ countFor(cat.id) }}</span>
        </button>
      }
    </div>

    <div class="skills-grid">
      @for (skill of filteredSkills(); track trackByName($index, skill); let i = $index) {
        <div class="skill-card reveal" [style.animation-delay.ms]="i * 60">
          <div class="skill-header">
            <div class="skill-icon">
              <i class="bi" [ngClass]="skill.icon"></i>
            </div>
            <div class="skill-info">
              <h4 class="skill-name">{{ skill.name }}</h4>
              <span class="skill-meta">{{ skill.years }}+ year{{ skill.years > 1 ? 's' : '' }}</span>
            </div>
            <span class="skill-level" [class]="'lvl-' + skill.level">{{ skill.level }}</span>
          </div>

          <div class="skill-bar">
            <span class="bar-fill" [style.width.%]="percentMap[skill.level]"></span>
          </div>
        </div>
      }
    </div>
  </div>
</section>
`, styles: ['/* src/app/pages/home/sections/skills/skills.scss */\n:host {\n  display: block;\n}\n.category-tabs {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.6rem;\n  margin-bottom: 3rem;\n}\n.cat-tab {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.5rem;\n  padding: 0.6rem 1.1rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n}\n.cat-tab mat-icon {\n  font-size: 18px;\n  width: 18px;\n  height: 18px;\n}\n.cat-tab .count {\n  padding: 0.1rem 0.5rem;\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n}\n.cat-tab:hover {\n  color: var(--text-strong);\n  border-color: var(--primary);\n  transform: translateY(-2px);\n}\n.cat-tab.active {\n  background: var(--gradient-primary);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.cat-tab.active .count {\n  background: rgba(255, 255, 255, 0.25);\n  color: #fff;\n}\n.skills-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(280px, 1fr));\n  gap: 1.25rem;\n}\n.skill-card {\n  padding: 1.25rem 1.4rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n  position: relative;\n  overflow: hidden;\n}\n.skill-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  width: 4px;\n  height: 0;\n  background: var(--gradient-primary);\n  border-radius: 4px;\n  transition: height 0.4s var(--ease);\n}\n.skill-card:hover {\n  transform: translateY(-6px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.skill-card:hover::before {\n  height: 100%;\n}\n.skill-header {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  margin-bottom: 1rem;\n}\n.skill-icon {\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border-radius: 10px;\n  font-size: 1.3rem;\n  flex-shrink: 0;\n  transition: all 0.3s var(--ease);\n}\n.skill-card:hover .skill-icon {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: rotate(-8deg);\n}\n.skill-info {\n  flex: 1;\n  min-width: 0;\n}\n.skill-name {\n  font-size: 1rem;\n  font-weight: 700;\n  margin: 0 0 0.15rem;\n  white-space: nowrap;\n  overflow: hidden;\n  text-overflow: ellipsis;\n}\n.skill-meta {\n  font-size: 0.78rem;\n  color: var(--text-muted);\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.skill-level {\n  padding: 0.25rem 0.6rem;\n  border-radius: 999px;\n  font-size: 0.7rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.skill-level.lvl-expert {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.skill-level.lvl-advanced {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n}\n.skill-level.lvl-intermediate {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.skill-level.lvl-beginner {\n  background: rgba(148, 163, 184, 0.15);\n  color: var(--text-muted);\n}\n.skill-bar {\n  position: relative;\n  width: 100%;\n  height: 6px;\n  background: var(--bg-elevated);\n  border-radius: 3px;\n  overflow: hidden;\n}\n.bar-fill {\n  position: absolute;\n  inset: 0;\n  background: var(--gradient-primary);\n  border-radius: 3px;\n  width: 0;\n  transform-origin: left;\n  animation: barFill 1.4s var(--ease) forwards;\n}\n@keyframes barFill {\n  from {\n    width: 0;\n  }\n}\n/*# sourceMappingURL=skills.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i03.\u0275setClassDebugInfo(SkillsComponent, { className: "SkillsComponent", filePath: "src/app/pages/home/sections/skills/skills.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fskills%2Fskills.ts%40SkillsComponent";
  function SkillsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i03.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i03.\u0275\u0275replaceMetadata(SkillsComponent, m.default, [i03, i13, i23, i33, i42, i5], [CommonModule3, MatTabsModule, MatChipsModule, MatIconModule3, Component3], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && SkillsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && SkillsComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/projects/projects.ts
import { Component as Component5, inject as inject5, signal as signal3, computed as computed2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule5 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatDialog, MatDialogModule as MatDialogModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule5 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import { MatButtonModule as MatButtonModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import { MatSnackBar, MatSnackBarModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=1ba7cd2d";

// src/app/pages/home/sections/projects/project-dialog/project-dialog.ts
import { Component as Component4, Inject, inject as inject4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=1ba7cd2d";
import { MatButtonModule as MatButtonModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i04 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i14 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i24 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
import * as i34 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=1ba7cd2d";
import * as i43 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import * as i52 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
function ProjectDialogComponent_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span", 6);
    i04.\u0275\u0275element(1, "i", 21);
    i04.\u0275\u0275text(2);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275advance(2);
    i04.\u0275\u0275textInterpolate1(" ", ctx_r0.project.client, " ");
  }
}
function ProjectDialogComponent_For_26_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "li");
    i04.\u0275\u0275element(1, "i", 22);
    i04.\u0275\u0275elementStart(2, "span");
    i04.\u0275\u0275text(3);
    i04.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    i04.\u0275\u0275advance(3);
    i04.\u0275\u0275textInterpolate(f_r2);
  }
}
function ProjectDialogComponent_For_33_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "span", 15);
    i04.\u0275\u0275text(1);
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const t_r3 = ctx.$implicit;
    i04.\u0275\u0275advance();
    i04.\u0275\u0275textInterpolate(t_r3);
  }
}
function ProjectDialogComponent_Conditional_35_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "a", 17);
    i04.\u0275\u0275element(1, "i", 23);
    i04.\u0275\u0275text(2, " Live Demo ");
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275property("href", ctx_r0.project.demoUrl, i04.\u0275\u0275sanitizeUrl);
  }
}
function ProjectDialogComponent_Conditional_36_Template(rf, ctx) {
  if (rf & 1) {
    i04.\u0275\u0275elementStart(0, "a", 18);
    i04.\u0275\u0275element(1, "i", 24);
    i04.\u0275\u0275text(2, " Source Code ");
    i04.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const ctx_r0 = i04.\u0275\u0275nextContext();
    i04.\u0275\u0275property("href", ctx_r0.project.repoUrl, i04.\u0275\u0275sanitizeUrl);
  }
}
var ProjectDialogComponent = class _ProjectDialogComponent {
  project;
  dialogRef = inject4(MatDialogRef);
  constructor(project) {
    this.project = project;
  }
  gradientFor(image) {
    const map = {
      "gradient-1": "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
      "gradient-2": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      "gradient-3": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      "gradient-4": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      "gradient-5": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      "gradient-6": "linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)"
    };
    return map[image] ?? "var(--gradient-primary)";
  }
  close() {
    this.dialogRef.close();
  }
  static \u0275fac = function ProjectDialogComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectDialogComponent)(i04.\u0275\u0275directiveInject(MAT_DIALOG_DATA));
  };
  static \u0275cmp = /* @__PURE__ */ i04.\u0275\u0275defineComponent({ type: _ProjectDialogComponent, selectors: [["app-project-dialog"]], decls: 40, vars: 9, consts: [[1, "dialog-container"], ["aria-label", "Close", 1, "close-btn", 3, "click"], [1, "dialog-hero"], [1, "hero-pattern"], [1, "hero-content"], [1, "hero-meta"], [1, "meta-pill"], [1, "bi", "bi-calendar3"], [1, "bi", "bi-tag-fill"], [1, "dialog-title"], [1, "dialog-body"], [1, "dialog-description"], [1, "section-label"], [1, "features-list"], [1, "tags-grid"], [1, "tech-tag"], [1, "dialog-actions"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-primary", 3, "href"], ["target", "_blank", "rel", "noopener", 1, "btn", "btn-outline-light", 3, "href"], [1, "btn", "btn-ghost", 3, "click"], [1, "bi", "bi-x-lg"], [1, "bi", "bi-building"], [1, "bi", "bi-check2-circle"], [1, "bi", "bi-box-arrow-up-right"], [1, "bi", "bi-github"]], template: function ProjectDialogComponent_Template(rf, ctx) {
    if (rf & 1) {
      i04.\u0275\u0275elementStart(0, "div", 0)(1, "button", 1);
      i04.\u0275\u0275listener("click", function ProjectDialogComponent_Template_button_click_1_listener() {
        return ctx.close();
      });
      i04.\u0275\u0275elementStart(2, "mat-icon");
      i04.\u0275\u0275text(3, "close");
      i04.\u0275\u0275elementEnd()();
      i04.\u0275\u0275elementStart(4, "div", 2);
      i04.\u0275\u0275element(5, "div", 3);
      i04.\u0275\u0275elementStart(6, "div", 4)(7, "div", 5)(8, "span", 6);
      i04.\u0275\u0275element(9, "i", 7);
      i04.\u0275\u0275text(10);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(11, "span", 6);
      i04.\u0275\u0275element(12, "i", 8);
      i04.\u0275\u0275text(13);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275conditionalCreate(14, ProjectDialogComponent_Conditional_14_Template, 3, 1, "span", 6);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(15, "h2", 9);
      i04.\u0275\u0275text(16);
      i04.\u0275\u0275elementEnd()()();
      i04.\u0275\u0275elementStart(17, "div", 10)(18, "p", 11);
      i04.\u0275\u0275text(19);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(20, "h4", 12)(21, "mat-icon");
      i04.\u0275\u0275text(22, "auto_awesome");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275text(23, " Key Features ");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(24, "ul", 13);
      i04.\u0275\u0275repeaterCreate(25, ProjectDialogComponent_For_26_Template, 4, 1, "li", null, i04.\u0275\u0275repeaterTrackByIdentity);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(27, "h4", 12)(28, "mat-icon");
      i04.\u0275\u0275text(29, "layers");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275text(30, " Tech Stack ");
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(31, "div", 14);
      i04.\u0275\u0275repeaterCreate(32, ProjectDialogComponent_For_33_Template, 2, 1, "span", 15, i04.\u0275\u0275repeaterTrackByIdentity);
      i04.\u0275\u0275elementEnd();
      i04.\u0275\u0275elementStart(34, "div", 16);
      i04.\u0275\u0275conditionalCreate(35, ProjectDialogComponent_Conditional_35_Template, 3, 1, "a", 17);
      i04.\u0275\u0275conditionalCreate(36, ProjectDialogComponent_Conditional_36_Template, 3, 1, "a", 18);
      i04.\u0275\u0275elementStart(37, "button", 19);
      i04.\u0275\u0275listener("click", function ProjectDialogComponent_Template_button_click_37_listener() {
        return ctx.close();
      });
      i04.\u0275\u0275element(38, "i", 20);
      i04.\u0275\u0275text(39, " Close ");
      i04.\u0275\u0275elementEnd()()()();
    }
    if (rf & 2) {
      i04.\u0275\u0275advance(4);
      i04.\u0275\u0275styleProp("background", ctx.gradientFor(ctx.project.image));
      i04.\u0275\u0275advance(6);
      i04.\u0275\u0275textInterpolate1(" ", ctx.project.year, " ");
      i04.\u0275\u0275advance(3);
      i04.\u0275\u0275textInterpolate1(" ", ctx.project.category, " ");
      i04.\u0275\u0275advance();
      i04.\u0275\u0275conditional(ctx.project.client ? 14 : -1);
      i04.\u0275\u0275advance(2);
      i04.\u0275\u0275textInterpolate(ctx.project.title);
      i04.\u0275\u0275advance(3);
      i04.\u0275\u0275textInterpolate(ctx.project.description);
      i04.\u0275\u0275advance(6);
      i04.\u0275\u0275repeater(ctx.project.features);
      i04.\u0275\u0275advance(7);
      i04.\u0275\u0275repeater(ctx.project.tags);
      i04.\u0275\u0275advance(3);
      i04.\u0275\u0275conditional(ctx.project.demoUrl ? 35 : -1);
      i04.\u0275\u0275advance();
      i04.\u0275\u0275conditional(ctx.project.repoUrl ? 36 : -1);
    }
  }, dependencies: [CommonModule4, i14.NgClass, i14.NgComponentOutlet, i14.NgForOf, i14.NgIf, i14.NgTemplateOutlet, i14.NgStyle, i14.NgSwitch, i14.NgSwitchCase, i14.NgSwitchDefault, i14.NgPlural, i14.NgPluralCase, MatDialogModule, i24.Dir, i34.MatDialogContainer, i34.MatDialogClose, i34.MatDialogTitle, i34.MatDialogActions, i34.MatDialogContent, MatButtonModule2, i43.MatButton, i43.MatMiniFabButton, i43.MatIconButton, i43.MatFabButton, MatIconModule4, i52.MatIcon, i14.AsyncPipe, i14.UpperCasePipe, i14.LowerCasePipe, i14.JsonPipe, i14.SlicePipe, i14.DecimalPipe, i14.PercentPipe, i14.TitleCasePipe, i14.CurrencyPipe, i14.DatePipe, i14.I18nPluralPipe, i14.I18nSelectPipe, i14.KeyValuePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.dialog-container[_ngcontent-%COMP%] {\n  position: relative;\n  background: var(--bg-elevated);\n  color: var(--text);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.close-btn[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: #fff;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.25s var(--ease);\n}\n.close-btn[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: rotate(90deg);\n}\n.dialog-hero[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 3rem 2rem 2rem;\n  overflow: hidden;\n  min-height: 180px;\n}\n.hero-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 25% 30%,\n      rgba(255, 255, 255, 0.18) 1px,\n      transparent 2px),\n    radial-gradient(\n      circle at 75% 70%,\n      rgba(255, 255, 255, 0.12) 1px,\n      transparent 2px);\n  background-size: 30px 30px;\n}\n.hero-content[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n}\n.hero-meta[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.meta-pill[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.8rem;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 999px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.dialog-title[_ngcontent-%COMP%] {\n  color: #fff;\n  font-size: 2rem;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.2;\n}\n.dialog-body[_ngcontent-%COMP%] {\n  padding: 2rem;\n}\n.dialog-description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.8;\n  margin: 0 0 2rem;\n}\n.section-label[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 1rem;\n  color: var(--text-strong);\n}\n.section-label[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.features-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  color: var(--text);\n  font-size: 0.92rem;\n  line-height: 1.5;\n}\n.features-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #22c55e;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.tags-grid[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.tech-tag[_ngcontent-%COMP%] {\n  padding: 0.4rem 0.85rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.dialog-actions[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border);\n}\n@media (max-width: 576px) {\n  .features-list[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .dialog-hero[_ngcontent-%COMP%] {\n    padding: 2.5rem 1.5rem 1.5rem;\n  }\n  .dialog-body[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n  .dialog-title[_ngcontent-%COMP%] {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=project-dialog.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassMetadata(ProjectDialogComponent, [{
    type: Component4,
    args: [{ selector: "app-project-dialog", imports: [CommonModule4, MatDialogModule, MatButtonModule2, MatIconModule4], template: '<div class="dialog-container">\n  <button class="close-btn" (click)="close()" aria-label="Close">\n    <mat-icon>close</mat-icon>\n  </button>\n\n  <div class="dialog-hero" [style.background]="gradientFor(project.image)">\n    <div class="hero-pattern"></div>\n    <div class="hero-content">\n      <div class="hero-meta">\n        <span class="meta-pill">\n          <i class="bi bi-calendar3"></i> {{ project.year }}\n        </span>\n        <span class="meta-pill">\n          <i class="bi bi-tag-fill"></i> {{ project.category }}\n        </span>\n        @if (project.client) {\n          <span class="meta-pill">\n            <i class="bi bi-building"></i> {{ project.client }}\n          </span>\n        }\n      </div>\n      <h2 class="dialog-title">{{ project.title }}</h2>\n    </div>\n  </div>\n\n  <div class="dialog-body">\n    <p class="dialog-description">{{ project.description }}</p>\n\n    <h4 class="section-label">\n      <mat-icon>auto_awesome</mat-icon> Key Features\n    </h4>\n    <ul class="features-list">\n      @for (f of project.features; track f) {\n        <li>\n          <i class="bi bi-check2-circle"></i>\n          <span>{{ f }}</span>\n        </li>\n      }\n    </ul>\n\n    <h4 class="section-label">\n      <mat-icon>layers</mat-icon> Tech Stack\n    </h4>\n    <div class="tags-grid">\n      @for (t of project.tags; track t) {\n        <span class="tech-tag">{{ t }}</span>\n      }\n    </div>\n\n    <div class="dialog-actions">\n      @if (project.demoUrl) {\n        <a [href]="project.demoUrl" target="_blank" rel="noopener" class="btn btn-primary">\n          <i class="bi bi-box-arrow-up-right"></i> Live Demo\n        </a>\n      }\n      @if (project.repoUrl) {\n        <a [href]="project.repoUrl" target="_blank" rel="noopener" class="btn btn-outline-light">\n          <i class="bi bi-github"></i> Source Code\n        </a>\n      }\n      <button class="btn btn-ghost" (click)="close()">\n        <i class="bi bi-x-lg"></i> Close\n      </button>\n    </div>\n  </div>\n</div>\n', styles: ["/* src/app/pages/home/sections/projects/project-dialog/project-dialog.scss */\n:host {\n  display: block;\n}\n.dialog-container {\n  position: relative;\n  background: var(--bg-elevated);\n  color: var(--text);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  max-height: 90vh;\n  overflow-y: auto;\n}\n.close-btn {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  width: 40px;\n  height: 40px;\n  display: grid;\n  place-items: center;\n  background: rgba(0, 0, 0, 0.4);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  color: #fff;\n  cursor: pointer;\n  z-index: 10;\n  transition: all 0.25s var(--ease);\n}\n.close-btn:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: rotate(90deg);\n}\n.dialog-hero {\n  position: relative;\n  padding: 3rem 2rem 2rem;\n  overflow: hidden;\n  min-height: 180px;\n}\n.hero-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 25% 30%,\n      rgba(255, 255, 255, 0.18) 1px,\n      transparent 2px),\n    radial-gradient(\n      circle at 75% 70%,\n      rgba(255, 255, 255, 0.12) 1px,\n      transparent 2px);\n  background-size: 30px 30px;\n}\n.hero-content {\n  position: relative;\n  z-index: 2;\n}\n.hero-meta {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 1rem;\n}\n.meta-pill {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  padding: 0.35rem 0.8rem;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border-radius: 999px;\n  color: #fff;\n  font-size: 0.78rem;\n  font-weight: 600;\n  text-transform: capitalize;\n}\n.dialog-title {\n  color: #fff;\n  font-size: 2rem;\n  font-weight: 800;\n  margin: 0;\n  line-height: 1.2;\n}\n.dialog-body {\n  padding: 2rem;\n}\n.dialog-description {\n  color: var(--text-muted);\n  font-size: 1rem;\n  line-height: 1.8;\n  margin: 0 0 2rem;\n}\n.section-label {\n  display: flex;\n  align-items: center;\n  gap: 0.5rem;\n  font-size: 1.05rem;\n  font-weight: 700;\n  margin: 0 0 1rem;\n  color: var(--text-strong);\n}\n.section-label mat-icon {\n  color: var(--primary-light);\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.features-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 2rem;\n  display: grid;\n  grid-template-columns: 1fr 1fr;\n  gap: 0.75rem;\n}\n.features-list li {\n  display: flex;\n  align-items: flex-start;\n  gap: 0.6rem;\n  color: var(--text);\n  font-size: 0.92rem;\n  line-height: 1.5;\n}\n.features-list li i {\n  color: #22c55e;\n  font-size: 1.1rem;\n  flex-shrink: 0;\n  margin-top: 2px;\n}\n.tags-grid {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 2rem;\n}\n.tech-tag {\n  padding: 0.4rem 0.85rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 8px;\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.dialog-actions {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.75rem;\n  padding-top: 1.5rem;\n  border-top: 1px solid var(--border);\n}\n@media (max-width: 576px) {\n  .features-list {\n    grid-template-columns: 1fr;\n  }\n  .dialog-hero {\n    padding: 2.5rem 1.5rem 1.5rem;\n  }\n  .dialog-body {\n    padding: 1.5rem;\n  }\n  .dialog-title {\n    font-size: 1.5rem;\n  }\n}\n/*# sourceMappingURL=project-dialog.css.map */\n"] }]
  }], () => [{ type: void 0, decorators: [{
    type: Inject,
    args: [MAT_DIALOG_DATA]
  }] }], null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i04.\u0275setClassDebugInfo(ProjectDialogComponent, { className: "ProjectDialogComponent", filePath: "src/app/pages/home/sections/projects/project-dialog/project-dialog.ts", lineNumber: 14 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fprojects%2Fproject-dialog%2Fproject-dialog.ts%40ProjectDialogComponent";
  function ProjectDialogComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i04.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i04.\u0275\u0275replaceMetadata(ProjectDialogComponent, m.default, [i04, i14, i24, i34, i43, i52], [CommonModule4, MatDialogModule, MatButtonModule2, MatIconModule4, MAT_DIALOG_DATA, Component4, Inject], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ProjectDialogComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ProjectDialogComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/projects/projects.ts
import * as i05 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i15 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i25 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
import * as i35 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=1ba7cd2d";
import * as i44 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i53 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import * as i6 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=1ba7cd2d";
var _c02 = (a0, a1, a2, a3, a4) => ({ "bi-graph-up": a0, "bi-bag-check": a1, "bi-bar-chart": a2, "bi-globe": a3, "bi-phone": a4 });
var _forTrack04 = ($index, $item) => $item.id;
function ProjectsComponent_For_14_Template(rf, ctx) {
  if (rf & 1) {
    const _r1 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "button", 12);
    i05.\u0275\u0275listener("click", function ProjectsComponent_For_14_Template_button_click_0_listener() {
      const f_r2 = i05.\u0275\u0275restoreView(_r1).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.setFilter(f_r2.id));
    });
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const f_r2 = ctx.$implicit;
    const ctx_r2 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275classProp("active", ctx_r2.activeFilter() === f_r2.id);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1(" ", f_r2.label, " ");
  }
}
function ProjectsComponent_For_17_Conditional_7_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "span", 19);
    i05.\u0275\u0275element(1, "i", 36);
    i05.\u0275\u0275text(2, " Featured ");
    i05.\u0275\u0275elementEnd();
  }
}
function ProjectsComponent_For_17_Conditional_13_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "a", 25);
    i05.\u0275\u0275element(1, "i", 37);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = i05.\u0275\u0275nextContext().$implicit;
    i05.\u0275\u0275property("href", p_r5.demoUrl, i05.\u0275\u0275sanitizeUrl);
  }
}
function ProjectsComponent_For_17_Conditional_14_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "a", 26);
    i05.\u0275\u0275element(1, "i", 38);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = i05.\u0275\u0275nextContext().$implicit;
    i05.\u0275\u0275property("href", p_r5.repoUrl, i05.\u0275\u0275sanitizeUrl);
  }
}
function ProjectsComponent_For_17_For_18_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "span", 29);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const tag_r6 = ctx.$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate(tag_r6);
  }
}
function ProjectsComponent_For_17_Conditional_19_Template(rf, ctx) {
  if (rf & 1) {
    i05.\u0275\u0275elementStart(0, "span", 30);
    i05.\u0275\u0275text(1);
    i05.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const p_r5 = i05.\u0275\u0275nextContext().$implicit;
    i05.\u0275\u0275advance();
    i05.\u0275\u0275textInterpolate1("+", p_r5.tags.length - 3);
  }
}
function ProjectsComponent_For_17_Template(rf, ctx) {
  if (rf & 1) {
    const _r4 = i05.\u0275\u0275getCurrentView();
    i05.\u0275\u0275elementStart(0, "article", 13)(1, "div", 14);
    i05.\u0275\u0275element(2, "div", 15)(3, "div", 16);
    i05.\u0275\u0275elementStart(4, "div", 17)(5, "span", 18);
    i05.\u0275\u0275text(6);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275conditionalCreate(7, ProjectsComponent_For_17_Conditional_7_Template, 3, 0, "span", 19);
    i05.\u0275\u0275elementStart(8, "div", 20);
    i05.\u0275\u0275element(9, "i", 21);
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(10, "div", 22)(11, "button", 23);
    i05.\u0275\u0275listener("click", function ProjectsComponent_For_17_Template_button_click_11_listener($event) {
      const p_r5 = i05.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.openProject(p_r5, $event));
    });
    i05.\u0275\u0275element(12, "i", 24);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275conditionalCreate(13, ProjectsComponent_For_17_Conditional_13_Template, 2, 1, "a", 25);
    i05.\u0275\u0275conditionalCreate(14, ProjectsComponent_For_17_Conditional_14_Template, 2, 1, "a", 26);
    i05.\u0275\u0275elementEnd()();
    i05.\u0275\u0275elementStart(15, "div", 27)(16, "div", 28);
    i05.\u0275\u0275repeaterCreate(17, ProjectsComponent_For_17_For_18_Template, 2, 1, "span", 29, i05.\u0275\u0275repeaterTrackByIdentity);
    i05.\u0275\u0275conditionalCreate(19, ProjectsComponent_For_17_Conditional_19_Template, 2, 1, "span", 30);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(20, "h3", 31);
    i05.\u0275\u0275text(21);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(22, "p", 32);
    i05.\u0275\u0275text(23);
    i05.\u0275\u0275elementEnd();
    i05.\u0275\u0275elementStart(24, "div", 33)(25, "button", 34);
    i05.\u0275\u0275listener("click", function ProjectsComponent_For_17_Template_button_click_25_listener($event) {
      const p_r5 = i05.\u0275\u0275restoreView(_r4).$implicit;
      const ctx_r2 = i05.\u0275\u0275nextContext();
      return i05.\u0275\u0275resetView(ctx_r2.openProject(p_r5, $event));
    });
    i05.\u0275\u0275text(26, " View case study ");
    i05.\u0275\u0275element(27, "i", 35);
    i05.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const p_r5 = ctx.$implicit;
    const \u0275$index_29_r7 = ctx.$index;
    const ctx_r2 = i05.\u0275\u0275nextContext();
    i05.\u0275\u0275styleProp("animation-delay", \u0275$index_29_r7 * 80, "ms");
    i05.\u0275\u0275advance();
    i05.\u0275\u0275styleProp("background", ctx_r2.gradientFor(p_r5.image));
    i05.\u0275\u0275advance(5);
    i05.\u0275\u0275textInterpolate(p_r5.year);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275conditional(p_r5.featured ? 7 : -1);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275property("ngClass", i05.\u0275\u0275pureFunction5(12, _c02, p_r5.category === "saas", p_r5.category === "ecommerce", p_r5.category === "dashboard", p_r5.category === "web", p_r5.category === "pwa"));
    i05.\u0275\u0275advance(4);
    i05.\u0275\u0275conditional(p_r5.demoUrl ? 13 : -1);
    i05.\u0275\u0275advance();
    i05.\u0275\u0275conditional(p_r5.repoUrl ? 14 : -1);
    i05.\u0275\u0275advance(3);
    i05.\u0275\u0275repeater(p_r5.tags.slice(0, 3));
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275conditional(p_r5.tags.length > 3 ? 19 : -1);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(p_r5.title);
    i05.\u0275\u0275advance(2);
    i05.\u0275\u0275textInterpolate(p_r5.shortDescription);
  }
}
var ProjectsComponent = class _ProjectsComponent {
  portfolio = inject5(PortfolioService);
  dialog = inject5(MatDialog);
  snack = inject5(MatSnackBar);
  activeFilter = signal3("all", ...ngDevMode ? [{ debugName: "activeFilter" }] : (
    /* istanbul ignore next */
    []
  ));
  filters = [
    { id: "all", label: "All" },
    { id: "featured", label: "Featured" },
    { id: "saas", label: "SaaS" },
    { id: "dashboard", label: "Dashboards" },
    { id: "ecommerce", label: "E-commerce" },
    { id: "pwa", label: "PWA" },
    { id: "web", label: "Web Apps" }
  ];
  filtered = computed2(() => {
    const f = this.activeFilter();
    if (f === "all")
      return this.portfolio.projects;
    if (f === "featured")
      return this.portfolio.projects.filter((p) => p.featured);
    return this.portfolio.projects.filter((p) => p.category === f);
  }, ...ngDevMode ? [{ debugName: "filtered" }] : (
    /* istanbul ignore next */
    []
  ));
  gradientFor(image) {
    const map = {
      "gradient-1": "linear-gradient(135deg, #6366f1 0%, #ec4899 100%)",
      "gradient-2": "linear-gradient(135deg, #f59e0b 0%, #ef4444 100%)",
      "gradient-3": "linear-gradient(135deg, #06b6d4 0%, #3b82f6 100%)",
      "gradient-4": "linear-gradient(135deg, #10b981 0%, #06b6d4 100%)",
      "gradient-5": "linear-gradient(135deg, #8b5cf6 0%, #ec4899 100%)",
      "gradient-6": "linear-gradient(135deg, #f43f5e 0%, #f59e0b 100%)"
    };
    return map[image] ?? "var(--gradient-primary)";
  }
  setFilter(id) {
    this.activeFilter.set(id);
  }
  openProject(p, event) {
    event.preventDefault();
    this.dialog.open(ProjectDialogComponent, {
      data: p,
      maxWidth: "900px",
      width: "95vw",
      panelClass: "project-dialog-panel",
      autoFocus: false
    });
  }
  copyEmail(event) {
    event.preventDefault();
    navigator.clipboard?.writeText(this.portfolio.email);
    this.snack.open("Email copied to clipboard!", "\u2713", { duration: 2500 });
  }
  static \u0275fac = function ProjectsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ProjectsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i05.\u0275\u0275defineComponent({ type: _ProjectsComponent, selectors: [["app-projects"]], decls: 18, vars: 0, consts: [["id", "projects", 1, "section", "projects"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-briefcase"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "filter-bar", "reveal"], ["type", "button", 1, "filter-btn", 3, "active"], [1, "projects-grid"], [1, "project-card", "reveal", 3, "animation-delay"], ["type", "button", 1, "filter-btn", 3, "click"], [1, "project-card", "reveal"], [1, "project-image"], [1, "image-overlay"], [1, "image-pattern"], [1, "image-content"], [1, "project-year"], [1, "featured-tag"], [1, "project-icon-big"], [1, "bi", 3, "ngClass"], [1, "card-actions"], ["type", "button", "aria-label", "View details", 1, "action-btn", 3, "click"], [1, "bi", "bi-arrows-angle-expand"], ["target", "_blank", "rel", "noopener", "aria-label", "Live demo", 1, "action-btn", 3, "href"], ["target", "_blank", "rel", "noopener", "aria-label", "Source code", 1, "action-btn", 3, "href"], [1, "project-body"], [1, "project-tags"], [1, "tag"], [1, "tag", "more"], [1, "project-title"], [1, "project-desc"], [1, "project-footer"], [1, "more-link", 3, "click"], [1, "bi", "bi-arrow-right"], [1, "bi", "bi-star-fill"], [1, "bi", "bi-box-arrow-up-right"], [1, "bi", "bi-github"]], template: function ProjectsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i05.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i05.\u0275\u0275element(4, "i", 4);
      i05.\u0275\u0275text(5, " Featured Work");
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(6, "h2", 5);
      i05.\u0275\u0275text(7, "Projects that ");
      i05.\u0275\u0275elementStart(8, "span", 6);
      i05.\u0275\u0275text(9, "made an impact");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(10, "p", 7);
      i05.\u0275\u0275text(11, " A selection of projects I've designed, built and shipped to production. ");
      i05.\u0275\u0275elementEnd()();
      i05.\u0275\u0275elementStart(12, "div", 8);
      i05.\u0275\u0275repeaterCreate(13, ProjectsComponent_For_14_Template, 2, 3, "button", 9, _forTrack04);
      i05.\u0275\u0275elementEnd();
      i05.\u0275\u0275elementStart(15, "div", 10);
      i05.\u0275\u0275repeaterCreate(16, ProjectsComponent_For_17_Template, 28, 18, "article", 11, _forTrack04);
      i05.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i05.\u0275\u0275advance(13);
      i05.\u0275\u0275repeater(ctx.filters);
      i05.\u0275\u0275advance(3);
      i05.\u0275\u0275repeater(ctx.filtered());
    }
  }, dependencies: [CommonModule5, i15.NgClass, i15.NgComponentOutlet, i15.NgForOf, i15.NgIf, i15.NgTemplateOutlet, i15.NgStyle, i15.NgSwitch, i15.NgSwitchCase, i15.NgSwitchDefault, i15.NgPlural, i15.NgPluralCase, MatDialogModule2, i25.Dir, i35.MatDialogContainer, i35.MatDialogClose, i35.MatDialogTitle, i35.MatDialogActions, i35.MatDialogContent, MatIconModule5, i44.MatIcon, MatButtonModule3, i53.MatButton, i53.MatMiniFabButton, i53.MatIconButton, i53.MatFabButton, MatSnackBarModule, i6.MatSnackBarContainer, i6.MatSnackBarLabel, i6.MatSnackBarActions, i6.MatSnackBarAction, i15.AsyncPipe, i15.UpperCasePipe, i15.LowerCasePipe, i15.JsonPipe, i15.SlicePipe, i15.DecimalPipe, i15.PercentPipe, i15.TitleCasePipe, i15.CurrencyPipe, i15.DatePipe, i15.I18nPluralPipe, i15.I18nSelectPipe, i15.KeyValuePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.filter-bar[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 3rem;\n}\n.filter-btn[_ngcontent-%COMP%] {\n  padding: 0.55rem 1.25rem;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n}\n.filter-btn[_ngcontent-%COMP%]:hover {\n  color: var(--text-strong);\n  border-color: var(--primary);\n}\n.filter-btn.active[_ngcontent-%COMP%] {\n  background: var(--gradient-primary);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.projects-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.75rem;\n}\n.project-card[_ngcontent-%COMP%] {\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.4s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.project-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-8px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-lg);\n}\n.project-card[_ngcontent-%COMP%]:hover   .image-overlay[_ngcontent-%COMP%] {\n  opacity: 0.6;\n}\n.project-card[_ngcontent-%COMP%]:hover   .card-actions[_ngcontent-%COMP%] {\n  opacity: 1;\n  transform: translateY(0);\n}\n.project-card[_ngcontent-%COMP%]:hover   .project-icon-big[_ngcontent-%COMP%] {\n  transform: scale(1.1) rotate(-8deg);\n}\n.project-image[_ngcontent-%COMP%] {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n}\n.image-overlay[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 30%,\n      rgba(0, 0, 0, 0.7) 100%);\n  opacity: 0.4;\n  transition: opacity 0.4s var(--ease);\n}\n.image-pattern[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 25% 30%,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 2px),\n    radial-gradient(\n      circle at 75% 70%,\n      rgba(255, 255, 255, 0.1) 1px,\n      transparent 2px);\n  background-size: 30px 30px;\n}\n.image-content[_ngcontent-%COMP%] {\n  position: absolute;\n  inset: 0;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.project-year[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  padding: 0.3rem 0.7rem;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  color: #fff;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.featured-tag[_ngcontent-%COMP%] {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.7rem;\n  background: rgba(255, 215, 0, 0.95);\n  color: #1a1a1a;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 0.5rem;\n}\n.project-icon-big[_ngcontent-%COMP%] {\n  position: absolute;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  width: 80px;\n  height: 80px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 20px;\n  font-size: 2.2rem;\n  color: #fff;\n  transition: transform 0.4s var(--ease);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.card-actions[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: all 0.3s var(--ease);\n  z-index: 2;\n}\n.action-btn[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  color: #1a1a1a;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: all 0.25s var(--ease);\n  border: none;\n  cursor: pointer;\n}\n.action-btn[_ngcontent-%COMP%]:hover {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: scale(1.1);\n}\n.project-body[_ngcontent-%COMP%] {\n  padding: 1.5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.project-tags[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.85rem;\n}\n.tag[_ngcontent-%COMP%] {\n  padding: 0.25rem 0.65rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.tag.more[_ngcontent-%COMP%] {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.project-title[_ngcontent-%COMP%] {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem;\n  line-height: 1.3;\n}\n.project-desc[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  margin: 0 0 1.25rem;\n  flex: 1;\n}\n.project-footer[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n.more-link[_ngcontent-%COMP%] {\n  background: none;\n  border: none;\n  color: var(--primary-light);\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  cursor: pointer;\n  transition: gap 0.25s var(--ease);\n  padding: 0;\n}\n.more-link[_ngcontent-%COMP%]:hover {\n  gap: 0.75rem;\n  color: var(--accent-light);\n}\n@media (max-width: 768px) {\n  .projects-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n  .card-actions[_ngcontent-%COMP%] {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=projects.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassMetadata(ProjectsComponent, [{
    type: Component5,
    args: [{ selector: "app-projects", imports: [CommonModule5, MatDialogModule2, MatIconModule5, MatButtonModule3, MatSnackBarModule], template: `<section id="projects" class="section projects">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-briefcase"></i> Featured Work</span>
      <h2 class="section-title">Projects that <span class="gradient-text">made an impact</span></h2>
      <p class="section-subtitle">
        A selection of projects I've designed, built and shipped to production.
      </p>
    </div>

    <div class="filter-bar reveal">
      @for (f of filters; track f.id) {
        <button
          type="button"
          class="filter-btn"
          [class.active]="activeFilter() === f.id"
          (click)="setFilter(f.id)">
          {{ f.label }}
        </button>
      }
    </div>

    <div class="projects-grid">
      @for (p of filtered(); track p.id; let i = $index) {
        <article class="project-card reveal" [style.animation-delay.ms]="i * 80">
          <div class="project-image" [style.background]="gradientFor(p.image)">
            <div class="image-overlay"></div>
            <div class="image-pattern"></div>

            <div class="image-content">
              <span class="project-year">{{ p.year }}</span>
              @if (p.featured) {
                <span class="featured-tag">
                  <i class="bi bi-star-fill"></i> Featured
                </span>
              }
              <div class="project-icon-big">
                <i class="bi" [ngClass]="{
                  'bi-graph-up': p.category === 'saas',
                  'bi-bag-check': p.category === 'ecommerce',
                  'bi-bar-chart': p.category === 'dashboard',
                  'bi-globe': p.category === 'web',
                  'bi-phone': p.category === 'pwa'
                }"></i>
              </div>
            </div>

            <div class="card-actions">
              <button
                type="button"
                class="action-btn"
                (click)="openProject(p, $event)"
                aria-label="View details">
                <i class="bi bi-arrows-angle-expand"></i>
              </button>
              @if (p.demoUrl) {
                <a [href]="p.demoUrl" target="_blank" rel="noopener" class="action-btn" aria-label="Live demo">
                  <i class="bi bi-box-arrow-up-right"></i>
                </a>
              }
              @if (p.repoUrl) {
                <a [href]="p.repoUrl" target="_blank" rel="noopener" class="action-btn" aria-label="Source code">
                  <i class="bi bi-github"></i>
                </a>
              }
            </div>
          </div>

          <div class="project-body">
            <div class="project-tags">
              @for (tag of p.tags.slice(0, 3); track tag) {
                <span class="tag">{{ tag }}</span>
              }
              @if (p.tags.length > 3) {
                <span class="tag more">+{{ p.tags.length - 3 }}</span>
              }
            </div>
            <h3 class="project-title">{{ p.title }}</h3>
            <p class="project-desc">{{ p.shortDescription }}</p>
            <div class="project-footer">
              <button class="more-link" (click)="openProject(p, $event)">
                View case study
                <i class="bi bi-arrow-right"></i>
              </button>
            </div>
          </div>
        </article>
      }
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/projects/projects.scss */\n:host {\n  display: block;\n}\n.filter-bar {\n  display: flex;\n  flex-wrap: wrap;\n  justify-content: center;\n  gap: 0.5rem;\n  margin-bottom: 3rem;\n}\n.filter-btn {\n  padding: 0.55rem 1.25rem;\n  background: transparent;\n  border: 1px solid var(--border);\n  border-radius: 999px;\n  color: var(--text-muted);\n  font-weight: 500;\n  font-size: 0.9rem;\n  cursor: pointer;\n  transition: all 0.25s var(--ease);\n}\n.filter-btn:hover {\n  color: var(--text-strong);\n  border-color: var(--primary);\n}\n.filter-btn.active {\n  background: var(--gradient-primary);\n  color: #fff;\n  border-color: transparent;\n  box-shadow: var(--shadow-glow);\n}\n.projects-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(360px, 1fr));\n  gap: 1.75rem;\n}\n.project-card {\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  overflow: hidden;\n  transition: all 0.4s var(--ease);\n  display: flex;\n  flex-direction: column;\n}\n.project-card:hover {\n  transform: translateY(-8px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-lg);\n}\n.project-card:hover .image-overlay {\n  opacity: 0.6;\n}\n.project-card:hover .card-actions {\n  opacity: 1;\n  transform: translateY(0);\n}\n.project-card:hover .project-icon-big {\n  transform: scale(1.1) rotate(-8deg);\n}\n.project-image {\n  position: relative;\n  height: 220px;\n  overflow: hidden;\n}\n.image-overlay {\n  position: absolute;\n  inset: 0;\n  background:\n    linear-gradient(\n      180deg,\n      transparent 30%,\n      rgba(0, 0, 0, 0.7) 100%);\n  opacity: 0.4;\n  transition: opacity 0.4s var(--ease);\n}\n.image-pattern {\n  position: absolute;\n  inset: 0;\n  background-image:\n    radial-gradient(\n      circle at 25% 30%,\n      rgba(255, 255, 255, 0.15) 1px,\n      transparent 2px),\n    radial-gradient(\n      circle at 75% 70%,\n      rgba(255, 255, 255, 0.1) 1px,\n      transparent 2px);\n  background-size: 30px 30px;\n}\n.image-content {\n  position: absolute;\n  inset: 0;\n  padding: 1.25rem;\n  display: flex;\n  flex-direction: column;\n  justify-content: space-between;\n}\n.project-year {\n  align-self: flex-start;\n  padding: 0.3rem 0.7rem;\n  background: rgba(0, 0, 0, 0.3);\n  backdrop-filter: blur(8px);\n  -webkit-backdrop-filter: blur(8px);\n  color: #fff;\n  border-radius: 999px;\n  font-size: 0.75rem;\n  font-weight: 600;\n}\n.featured-tag {\n  align-self: flex-start;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.35rem;\n  padding: 0.3rem 0.7rem;\n  background: rgba(255, 215, 0, 0.95);\n  color: #1a1a1a;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin-top: 0.5rem;\n}\n.project-icon-big {\n  position: absolute;\n  bottom: 1.5rem;\n  right: 1.5rem;\n  width: 80px;\n  height: 80px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.15);\n  backdrop-filter: blur(20px);\n  -webkit-backdrop-filter: blur(20px);\n  border-radius: 20px;\n  font-size: 2.2rem;\n  color: #fff;\n  transition: transform 0.4s var(--ease);\n  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.2);\n}\n.card-actions {\n  position: absolute;\n  top: 1.25rem;\n  right: 1.25rem;\n  display: flex;\n  gap: 0.5rem;\n  opacity: 0;\n  transform: translateY(-10px);\n  transition: all 0.3s var(--ease);\n  z-index: 2;\n}\n.action-btn {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.95);\n  color: #1a1a1a;\n  border-radius: 10px;\n  text-decoration: none;\n  font-size: 0.95rem;\n  transition: all 0.25s var(--ease);\n  border: none;\n  cursor: pointer;\n}\n.action-btn:hover {\n  background: var(--gradient-primary);\n  color: #fff;\n  transform: scale(1.1);\n}\n.project-body {\n  padding: 1.5rem;\n  flex: 1;\n  display: flex;\n  flex-direction: column;\n}\n.project-tags {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.35rem;\n  margin-bottom: 0.85rem;\n}\n.tag {\n  padding: 0.25rem 0.65rem;\n  background: rgba(99, 102, 241, 0.12);\n  color: var(--primary-light);\n  border: 1px solid rgba(99, 102, 241, 0.25);\n  border-radius: 6px;\n  font-size: 0.72rem;\n  font-weight: 600;\n}\n.tag.more {\n  background: var(--bg-elevated);\n  color: var(--text-muted);\n}\n.project-title {\n  font-size: 1.25rem;\n  font-weight: 700;\n  margin: 0 0 0.5rem;\n  line-height: 1.3;\n}\n.project-desc {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.65;\n  margin: 0 0 1.25rem;\n  flex: 1;\n}\n.project-footer {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n.more-link {\n  background: none;\n  border: none;\n  color: var(--primary-light);\n  font-weight: 600;\n  font-size: 0.9rem;\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  cursor: pointer;\n  transition: gap 0.25s var(--ease);\n  padding: 0;\n}\n.more-link:hover {\n  gap: 0.75rem;\n  color: var(--accent-light);\n}\n@media (max-width: 768px) {\n  .projects-grid {\n    grid-template-columns: 1fr;\n  }\n  .card-actions {\n    opacity: 1;\n    transform: translateY(0);\n  }\n}\n/*# sourceMappingURL=projects.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i05.\u0275setClassDebugInfo(ProjectsComponent, { className: "ProjectsComponent", filePath: "src/app/pages/home/sections/projects/projects.ts", lineNumber: 17 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fprojects%2Fprojects.ts%40ProjectsComponent";
  function ProjectsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i05.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i05.\u0275\u0275replaceMetadata(ProjectsComponent, m.default, [i05, i15, i25, i35, i44, i53, i6], [CommonModule5, MatDialogModule2, MatIconModule5, MatButtonModule3, MatSnackBarModule, Component5], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ProjectsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ProjectsComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/experience/experience.ts
import { Component as Component6, inject as inject6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i06 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i16 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i26 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i36 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
var _forTrack05 = ($index, $item) => $item.id;
function ExperienceComponent_For_15_For_28_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "li");
    i06.\u0275\u0275element(1, "i", 28);
    i06.\u0275\u0275elementStart(2, "span");
    i06.\u0275\u0275text(3);
    i06.\u0275\u0275elementEnd()();
  }
  if (rf & 2) {
    const a_r1 = ctx.$implicit;
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275textInterpolate(a_r1);
  }
}
function ExperienceComponent_For_15_For_31_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "span", 27);
    i06.\u0275\u0275text(1);
    i06.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate(s_r2);
  }
}
function ExperienceComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    i06.\u0275\u0275elementStart(0, "div", 11)(1, "div", 12)(2, "mat-icon");
    i06.\u0275\u0275text(3, "work");
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(4, "div", 13)(5, "div", 14)(6, "span", 15);
    i06.\u0275\u0275element(7, "i", 16);
    i06.\u0275\u0275text(8);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(9, "span", 17);
    i06.\u0275\u0275text(10);
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(11, "h3", 18);
    i06.\u0275\u0275text(12);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(13, "div", 19);
    i06.\u0275\u0275element(14, "i", 20);
    i06.\u0275\u0275elementStart(15, "span");
    i06.\u0275\u0275text(16);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(17, "span", 21);
    i06.\u0275\u0275text(18, "\xB7");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275element(19, "i", 22);
    i06.\u0275\u0275elementStart(20, "span");
    i06.\u0275\u0275text(21);
    i06.\u0275\u0275elementEnd()();
    i06.\u0275\u0275elementStart(22, "p", 23);
    i06.\u0275\u0275text(23);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(24, "h4", 24);
    i06.\u0275\u0275text(25, "Key Achievements");
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(26, "ul", 25);
    i06.\u0275\u0275repeaterCreate(27, ExperienceComponent_For_15_For_28_Template, 4, 1, "li", null, i06.\u0275\u0275repeaterTrackByIdentity);
    i06.\u0275\u0275elementEnd();
    i06.\u0275\u0275elementStart(29, "div", 26);
    i06.\u0275\u0275repeaterCreate(30, ExperienceComponent_For_15_For_31_Template, 2, 1, "span", 27, i06.\u0275\u0275repeaterTrackByIdentity);
    i06.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const exp_r3 = ctx.$implicit;
    const \u0275$index_25_r4 = ctx.$index;
    const ctx_r4 = i06.\u0275\u0275nextContext();
    i06.\u0275\u0275classProp("right", \u0275$index_25_r4 % 2 === 1);
    i06.\u0275\u0275advance(8);
    i06.\u0275\u0275textInterpolate1(" ", exp_r3.period, " ");
    i06.\u0275\u0275advance();
    i06.\u0275\u0275classMap("type-" + exp_r3.type);
    i06.\u0275\u0275advance();
    i06.\u0275\u0275textInterpolate1(" ", ctx_r4.typeLabel(exp_r3.type), " ");
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(exp_r3.role);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275textInterpolate(exp_r3.company);
    i06.\u0275\u0275advance(5);
    i06.\u0275\u0275textInterpolate(exp_r3.location);
    i06.\u0275\u0275advance(2);
    i06.\u0275\u0275textInterpolate(exp_r3.description);
    i06.\u0275\u0275advance(4);
    i06.\u0275\u0275repeater(exp_r3.achievements);
    i06.\u0275\u0275advance(3);
    i06.\u0275\u0275repeater(exp_r3.stack);
  }
}
var ExperienceComponent = class _ExperienceComponent {
  portfolio = inject6(PortfolioService);
  typeLabel(t) {
    const map = {
      "full-time": "Full-time",
      "part-time": "Part-time",
      contract: "Contract",
      freelance: "Freelance"
    };
    return map[t] ?? t;
  }
  static \u0275fac = function ExperienceComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ExperienceComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i06.\u0275\u0275defineComponent({ type: _ExperienceComponent, selectors: [["app-experience"]], decls: 16, vars: 0, consts: [["id", "experience", 1, "section", "experience"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-briefcase"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "timeline"], [1, "timeline-line"], [1, "timeline-item", "reveal", 3, "right"], [1, "timeline-item", "reveal"], [1, "timeline-dot"], [1, "timeline-card"], [1, "card-top"], [1, "period"], [1, "bi", "bi-calendar3"], [1, "type-pill"], [1, "role"], [1, "company"], [1, "bi", "bi-building"], [1, "dot-sep"], [1, "bi", "bi-geo-alt"], [1, "description"], [1, "achieve-title"], [1, "achieve-list"], [1, "stack"], [1, "stack-pill"], [1, "bi", "bi-trophy"]], template: function ExperienceComponent_Template(rf, ctx) {
    if (rf & 1) {
      i06.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i06.\u0275\u0275element(4, "i", 4);
      i06.\u0275\u0275text(5, " Experience");
      i06.\u0275\u0275elementEnd();
      i06.\u0275\u0275elementStart(6, "h2", 5);
      i06.\u0275\u0275text(7, "A journey of ");
      i06.\u0275\u0275elementStart(8, "span", 6);
      i06.\u0275\u0275text(9, "growth & impact");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(10, "p", 7);
      i06.\u0275\u0275text(11, " 3+ years across product companies, agencies and freelance \u2014 building real-world apps. ");
      i06.\u0275\u0275elementEnd()();
      i06.\u0275\u0275elementStart(12, "div", 8);
      i06.\u0275\u0275element(13, "div", 9);
      i06.\u0275\u0275repeaterCreate(14, ExperienceComponent_For_15_Template, 32, 10, "div", 10, _forTrack05);
      i06.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i06.\u0275\u0275advance(14);
      i06.\u0275\u0275repeater(ctx.portfolio.experiences);
    }
  }, dependencies: [CommonModule6, i16.NgClass, i16.NgComponentOutlet, i16.NgForOf, i16.NgIf, i16.NgTemplateOutlet, i16.NgStyle, i16.NgSwitch, i16.NgSwitchCase, i16.NgSwitchDefault, i16.NgPlural, i16.NgPluralCase, MatIconModule6, i26.MatIcon, i36.Dir, i16.AsyncPipe, i16.UpperCasePipe, i16.LowerCasePipe, i16.JsonPipe, i16.SlicePipe, i16.DecimalPipe, i16.PercentPipe, i16.TitleCasePipe, i16.CurrencyPipe, i16.DatePipe, i16.I18nPluralPipe, i16.I18nSelectPipe, i16.KeyValuePipe], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n.timeline[_ngcontent-%COMP%] {\n  position: relative;\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 2rem 0;\n}\n.timeline-line[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--primary) 10%,\n      var(--primary) 90%,\n      transparent);\n  transform: translateX(-50%);\n}\n.timeline-item[_ngcontent-%COMP%] {\n  position: relative;\n  width: 50%;\n  padding: 1rem 2.5rem 2.5rem 0;\n}\n.timeline-item.right[_ngcontent-%COMP%] {\n  margin-left: 50%;\n  padding: 1rem 0 2.5rem 2.5rem;\n}\n.timeline-dot[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1.5rem;\n  right: -22px;\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: var(--shadow-glow);\n  z-index: 2;\n  border: 4px solid var(--bg);\n}\n.timeline-dot[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.timeline-item.right[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n  right: auto;\n  left: -22px;\n}\n.timeline-card[_ngcontent-%COMP%] {\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 1.5rem 1.75rem;\n  transition: all 0.3s var(--ease);\n  position: relative;\n}\n.timeline-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.card-top[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 0.85rem;\n}\n.period[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--primary-light);\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.period[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  font-size: 0.9rem;\n}\n.type-pill[_ngcontent-%COMP%] {\n  padding: 0.2rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.type-pill.type-full-time[_ngcontent-%COMP%] {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.type-pill.type-part-time[_ngcontent-%COMP%] {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n}\n.type-pill.type-contract[_ngcontent-%COMP%] {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.type-pill.type-freelance[_ngcontent-%COMP%] {\n  background: rgba(236, 72, 153, 0.15);\n  color: #ec4899;\n}\n.role[_ngcontent-%COMP%] {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem;\n  color: var(--text-strong);\n}\n.company[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  margin-bottom: 0.85rem;\n  flex-wrap: wrap;\n}\n.company[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n.company[_ngcontent-%COMP%]   .dot-sep[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n}\n.description[_ngcontent-%COMP%] {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.7;\n  margin: 0 0 1rem;\n}\n.achieve-title[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 0.65rem;\n  color: var(--text-strong);\n}\n.achieve-list[_ngcontent-%COMP%] {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.achieve-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.6rem;\n  align-items: flex-start;\n  color: var(--text);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n.achieve-list[_ngcontent-%COMP%]   li[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n.stack[_ngcontent-%COMP%] {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n.stack-pill[_ngcontent-%COMP%] {\n  padding: 0.3rem 0.7rem;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .timeline-line[_ngcontent-%COMP%] {\n    left: 22px;\n  }\n  .timeline-item[_ngcontent-%COMP%], \n   .timeline-item.right[_ngcontent-%COMP%] {\n    width: 100%;\n    margin-left: 0;\n    padding: 1rem 0 1.5rem 3rem;\n  }\n  .timeline-dot[_ngcontent-%COMP%], \n   .timeline-item.right[_ngcontent-%COMP%]   .timeline-dot[_ngcontent-%COMP%] {\n    left: 0;\n    right: auto;\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=experience.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassMetadata(ExperienceComponent, [{
    type: Component6,
    args: [{ selector: "app-experience", imports: [CommonModule6, MatIconModule6], template: `<section id="experience" class="section experience">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-briefcase"></i> Experience</span>
      <h2 class="section-title">A journey of <span class="gradient-text">growth & impact</span></h2>
      <p class="section-subtitle">
        3+ years across product companies, agencies and freelance \u2014 building real-world apps.
      </p>
    </div>

    <div class="timeline">
      <div class="timeline-line"></div>
      @for (exp of portfolio.experiences; track exp.id; let i = $index) {
        <div class="timeline-item reveal" [class.right]="i % 2 === 1">
          <div class="timeline-dot">
            <mat-icon>work</mat-icon>
          </div>
          <div class="timeline-card">
            <div class="card-top">
              <span class="period">
                <i class="bi bi-calendar3"></i> {{ exp.period }}
              </span>
              <span class="type-pill" [class]="'type-' + exp.type">
                {{ typeLabel(exp.type) }}
              </span>
            </div>

            <h3 class="role">{{ exp.role }}</h3>
            <div class="company">
              <i class="bi bi-building"></i>
              <span>{{ exp.company }}</span>
              <span class="dot-sep">\xB7</span>
              <i class="bi bi-geo-alt"></i>
              <span>{{ exp.location }}</span>
            </div>

            <p class="description">{{ exp.description }}</p>

            <h4 class="achieve-title">Key Achievements</h4>
            <ul class="achieve-list">
              @for (a of exp.achievements; track a) {
                <li>
                  <i class="bi bi-trophy"></i>
                  <span>{{ a }}</span>
                </li>
              }
            </ul>

            <div class="stack">
              @for (s of exp.stack; track s) {
                <span class="stack-pill">{{ s }}</span>
              }
            </div>
          </div>
        </div>
      }
    </div>
  </div>
</section>
`, styles: ["/* src/app/pages/home/sections/experience/experience.scss */\n:host {\n  display: block;\n}\n.timeline {\n  position: relative;\n  max-width: 980px;\n  margin: 0 auto;\n  padding: 2rem 0;\n}\n.timeline-line {\n  position: absolute;\n  top: 0;\n  bottom: 0;\n  left: 50%;\n  width: 2px;\n  background:\n    linear-gradient(\n      to bottom,\n      transparent,\n      var(--primary) 10%,\n      var(--primary) 90%,\n      transparent);\n  transform: translateX(-50%);\n}\n.timeline-item {\n  position: relative;\n  width: 50%;\n  padding: 1rem 2.5rem 2.5rem 0;\n}\n.timeline-item.right {\n  margin-left: 50%;\n  padding: 1rem 0 2.5rem 2.5rem;\n}\n.timeline-dot {\n  position: absolute;\n  top: 1.5rem;\n  right: -22px;\n  width: 44px;\n  height: 44px;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  border-radius: 50%;\n  color: #fff;\n  box-shadow: var(--shadow-glow);\n  z-index: 2;\n  border: 4px solid var(--bg);\n}\n.timeline-dot mat-icon {\n  font-size: 20px;\n  width: 20px;\n  height: 20px;\n}\n.timeline-item.right .timeline-dot {\n  right: auto;\n  left: -22px;\n}\n.timeline-card {\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  padding: 1.5rem 1.75rem;\n  transition: all 0.3s var(--ease);\n  position: relative;\n}\n.timeline-card:hover {\n  transform: translateY(-4px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.card-top {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 0.5rem;\n  margin-bottom: 0.85rem;\n}\n.period {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--primary-light);\n  font-size: 0.82rem;\n  font-weight: 600;\n}\n.period i {\n  font-size: 0.9rem;\n}\n.type-pill {\n  padding: 0.2rem 0.65rem;\n  border-radius: 999px;\n  font-size: 0.72rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.type-pill.type-full-time {\n  background: rgba(34, 197, 94, 0.15);\n  color: #22c55e;\n}\n.type-pill.type-part-time {\n  background: rgba(99, 102, 241, 0.15);\n  color: var(--primary-light);\n}\n.type-pill.type-contract {\n  background: rgba(245, 158, 11, 0.15);\n  color: #f59e0b;\n}\n.type-pill.type-freelance {\n  background: rgba(236, 72, 153, 0.15);\n  color: #ec4899;\n}\n.role {\n  font-size: 1.3rem;\n  font-weight: 700;\n  margin: 0 0 0.35rem;\n  color: var(--text-strong);\n}\n.company {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  margin-bottom: 0.85rem;\n  flex-wrap: wrap;\n}\n.company i {\n  color: var(--primary-light);\n}\n.company .dot-sep {\n  color: var(--text-muted);\n}\n.description {\n  color: var(--text-muted);\n  font-size: 0.92rem;\n  line-height: 1.7;\n  margin: 0 0 1rem;\n}\n.achieve-title {\n  font-size: 0.85rem;\n  font-weight: 700;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n  margin: 0 0 0.65rem;\n  color: var(--text-strong);\n}\n.achieve-list {\n  list-style: none;\n  padding: 0;\n  margin: 0 0 1.25rem;\n  display: flex;\n  flex-direction: column;\n  gap: 0.5rem;\n}\n.achieve-list li {\n  display: flex;\n  gap: 0.6rem;\n  align-items: flex-start;\n  color: var(--text);\n  font-size: 0.9rem;\n  line-height: 1.55;\n}\n.achieve-list li i {\n  color: #fbbf24;\n  font-size: 0.9rem;\n  flex-shrink: 0;\n  margin-top: 3px;\n}\n.stack {\n  display: flex;\n  flex-wrap: wrap;\n  gap: 0.4rem;\n  padding-top: 1rem;\n  border-top: 1px solid var(--border);\n}\n.stack-pill {\n  padding: 0.3rem 0.7rem;\n  background: var(--bg-elevated);\n  border: 1px solid var(--border);\n  color: var(--text);\n  border-radius: 6px;\n  font-size: 0.78rem;\n  font-weight: 500;\n}\n@media (max-width: 768px) {\n  .timeline-line {\n    left: 22px;\n  }\n  .timeline-item,\n  .timeline-item.right {\n    width: 100%;\n    margin-left: 0;\n    padding: 1rem 0 1.5rem 3rem;\n  }\n  .timeline-dot,\n  .timeline-item.right .timeline-dot {\n    left: 0;\n    right: auto;\n    width: 40px;\n    height: 40px;\n  }\n}\n/*# sourceMappingURL=experience.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i06.\u0275setClassDebugInfo(ExperienceComponent, { className: "ExperienceComponent", filePath: "src/app/pages/home/sections/experience/experience.ts", lineNumber: 12 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fexperience%2Fexperience.ts%40ExperienceComponent";
  function ExperienceComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i06.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i06.\u0275\u0275replaceMetadata(ExperienceComponent, m.default, [i06, i16, i26, i36], [CommonModule6, MatIconModule6, Component6], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ExperienceComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ExperienceComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/testimonials/testimonials.ts
import { Component as Component7, inject as inject7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i07 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i17 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i27 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i37 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
var _forTrack06 = ($index, $item) => $item.id;
function TestimonialsComponent_For_15_For_6_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275element(0, "i", 13);
  }
}
function TestimonialsComponent_For_15_Template(rf, ctx) {
  if (rf & 1) {
    i07.\u0275\u0275elementStart(0, "article", 10)(1, "div", 11)(2, "mat-icon");
    i07.\u0275\u0275text(3, "format_quote");
    i07.\u0275\u0275elementEnd()();
    i07.\u0275\u0275elementStart(4, "div", 12);
    i07.\u0275\u0275repeaterCreate(5, TestimonialsComponent_For_15_For_6_Template, 1, 0, "i", 13, i07.\u0275\u0275repeaterTrackByIndex);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(7, "p", 14);
    i07.\u0275\u0275text(8);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(9, "div", 15)(10, "div", 16);
    i07.\u0275\u0275text(11);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(12, "div", 17)(13, "h4", 18);
    i07.\u0275\u0275text(14);
    i07.\u0275\u0275elementEnd();
    i07.\u0275\u0275elementStart(15, "p", 19);
    i07.\u0275\u0275text(16);
    i07.\u0275\u0275elementEnd()()()();
  }
  if (rf & 2) {
    const t_r1 = ctx.$implicit;
    const \u0275$index_24_r2 = ctx.$index;
    const ctx_r2 = i07.\u0275\u0275nextContext();
    i07.\u0275\u0275styleProp("animation-delay", \u0275$index_24_r2 * 100, "ms");
    i07.\u0275\u0275advance(5);
    i07.\u0275\u0275repeater(ctx_r2.starsArray(t_r1.rating));
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275textInterpolate1('"', t_r1.message, '"');
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275textInterpolate(t_r1.avatar);
    i07.\u0275\u0275advance(3);
    i07.\u0275\u0275textInterpolate(t_r1.name);
    i07.\u0275\u0275advance(2);
    i07.\u0275\u0275textInterpolate2("", t_r1.role, " \xB7 ", t_r1.company);
  }
}
var TestimonialsComponent = class _TestimonialsComponent {
  portfolio = inject7(PortfolioService);
  starsArray(n) {
    return Array.from({ length: n }, (_, i) => i);
  }
  trackById(_, t) {
    return t.id;
  }
  static \u0275fac = function TestimonialsComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _TestimonialsComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i07.\u0275\u0275defineComponent({ type: _TestimonialsComponent, selectors: [["app-testimonials"]], decls: 16, vars: 0, consts: [["id", "testimonials", 1, "section", "testimonials"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-chat-quote"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "testimonials-grid"], [1, "testimonial-card", "reveal", 3, "animation-delay"], [1, "testimonial-card", "reveal"], [1, "quote-icon"], [1, "rating"], [1, "bi", "bi-star-fill"], [1, "message"], [1, "author"], [1, "avatar"], [1, "author-info"], [1, "name"], [1, "role"]], template: function TestimonialsComponent_Template(rf, ctx) {
    if (rf & 1) {
      i07.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i07.\u0275\u0275element(4, "i", 4);
      i07.\u0275\u0275text(5, " Testimonials");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(6, "h2", 5);
      i07.\u0275\u0275text(7, "What ");
      i07.\u0275\u0275elementStart(8, "span", 6);
      i07.\u0275\u0275text(9, "clients & teams");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275text(10, " say");
      i07.\u0275\u0275elementEnd();
      i07.\u0275\u0275elementStart(11, "p", 7);
      i07.\u0275\u0275text(12, " Honest feedback from people I've had the pleasure to work with. ");
      i07.\u0275\u0275elementEnd()();
      i07.\u0275\u0275elementStart(13, "div", 8);
      i07.\u0275\u0275repeaterCreate(14, TestimonialsComponent_For_15_Template, 17, 7, "article", 9, _forTrack06);
      i07.\u0275\u0275elementEnd()()();
    }
    if (rf & 2) {
      i07.\u0275\u0275advance(14);
      i07.\u0275\u0275repeater(ctx.portfolio.testimonials);
    }
  }, dependencies: [CommonModule7, i17.NgClass, i17.NgComponentOutlet, i17.NgForOf, i17.NgIf, i17.NgTemplateOutlet, i17.NgStyle, i17.NgSwitch, i17.NgSwitchCase, i17.NgSwitchDefault, i17.NgPlural, i17.NgPluralCase, MatIconModule7, i27.MatIcon, i37.Dir, i17.AsyncPipe, i17.UpperCasePipe, i17.LowerCasePipe, i17.JsonPipe, i17.SlicePipe, i17.DecimalPipe, i17.PercentPipe, i17.TitleCasePipe, i17.CurrencyPipe, i17.DatePipe, i17.I18nPluralPipe, i17.I18nSelectPipe, i17.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.testimonials-grid[_ngcontent-%COMP%] {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.testimonial-card[_ngcontent-%COMP%] {\n  position: relative;\n  padding: 2rem 1.75rem 1.75rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n  overflow: hidden;\n}\n.testimonial-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--gradient-primary);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s var(--ease);\n}\n.testimonial-card[_ngcontent-%COMP%]:hover {\n  transform: translateY(-6px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.testimonial-card[_ngcontent-%COMP%]:hover::before {\n  transform: scaleX(1);\n}\n.quote-icon[_ngcontent-%COMP%] {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 4rem;\n  line-height: 1;\n  color: var(--primary);\n  opacity: 0.12;\n}\n.quote-icon[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n}\n.rating[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.15rem;\n  margin-bottom: 1rem;\n}\n.rating[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: #fbbf24;\n  font-size: 1rem;\n}\n.message[_ngcontent-%COMP%] {\n  color: var(--text);\n  font-size: 0.95rem;\n  line-height: 1.75;\n  margin: 0 0 1.5rem;\n  position: relative;\n  z-index: 2;\n  font-style: italic;\n}\n.author[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid var(--border);\n}\n.author[_ngcontent-%COMP%]   .avatar[_ngcontent-%COMP%] {\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.author[_ngcontent-%COMP%]   .author-info[_ngcontent-%COMP%] {\n  line-height: 1.3;\n}\n.author[_ngcontent-%COMP%]   .name[_ngcontent-%COMP%] {\n  font-size: 0.98rem;\n  font-weight: 700;\n  margin: 0;\n}\n.author[_ngcontent-%COMP%]   .role[_ngcontent-%COMP%] {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@media (max-width: 576px) {\n  .testimonials-grid[_ngcontent-%COMP%] {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassMetadata(TestimonialsComponent, [{
    type: Component7,
    args: [{ selector: "app-testimonials", imports: [CommonModule7, MatIconModule7], template: `<section id="testimonials" class="section testimonials">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-chat-quote"></i> Testimonials</span>
      <h2 class="section-title">What <span class="gradient-text">clients & teams</span> say</h2>
      <p class="section-subtitle">
        Honest feedback from people I've had the pleasure to work with.
      </p>
    </div>

    <div class="testimonials-grid">
      @for (t of portfolio.testimonials; track t.id; let i = $index) {
        <article class="testimonial-card reveal" [style.animation-delay.ms]="i * 100">
          <div class="quote-icon">
            <mat-icon>format_quote</mat-icon>
          </div>

          <div class="rating">
            @for (s of starsArray(t.rating); track $index) {
              <i class="bi bi-star-fill"></i>
            }
          </div>

          <p class="message">"{{ t.message }}"</p>

          <div class="author">
            <div class="avatar">{{ t.avatar }}</div>
            <div class="author-info">
              <h4 class="name">{{ t.name }}</h4>
              <p class="role">{{ t.role }} \xB7 {{ t.company }}</p>
            </div>
          </div>
        </article>
      }
    </div>
  </div>
</section>
`, styles: ['/* src/app/pages/home/sections/testimonials/testimonials.scss */\n:host {\n  display: block;\n}\n.testimonials-grid {\n  display: grid;\n  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));\n  gap: 1.5rem;\n}\n.testimonial-card {\n  position: relative;\n  padding: 2rem 1.75rem 1.75rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  transition: all 0.3s var(--ease);\n  overflow: hidden;\n}\n.testimonial-card::before {\n  content: "";\n  position: absolute;\n  top: 0;\n  left: 0;\n  right: 0;\n  height: 3px;\n  background: var(--gradient-primary);\n  transform: scaleX(0);\n  transform-origin: left;\n  transition: transform 0.4s var(--ease);\n}\n.testimonial-card:hover {\n  transform: translateY(-6px);\n  border-color: var(--primary);\n  box-shadow: var(--shadow-md);\n}\n.testimonial-card:hover::before {\n  transform: scaleX(1);\n}\n.quote-icon {\n  position: absolute;\n  top: 1rem;\n  right: 1rem;\n  font-size: 4rem;\n  line-height: 1;\n  color: var(--primary);\n  opacity: 0.12;\n}\n.quote-icon mat-icon {\n  font-size: 4rem;\n  width: 4rem;\n  height: 4rem;\n}\n.rating {\n  display: flex;\n  gap: 0.15rem;\n  margin-bottom: 1rem;\n}\n.rating i {\n  color: #fbbf24;\n  font-size: 1rem;\n}\n.message {\n  color: var(--text);\n  font-size: 0.95rem;\n  line-height: 1.75;\n  margin: 0 0 1.5rem;\n  position: relative;\n  z-index: 2;\n  font-style: italic;\n}\n.author {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding-top: 1.25rem;\n  border-top: 1px solid var(--border);\n}\n.author .avatar {\n  width: 50px;\n  height: 50px;\n  display: grid;\n  place-items: center;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: 50%;\n  font-weight: 700;\n  font-size: 1rem;\n  flex-shrink: 0;\n}\n.author .author-info {\n  line-height: 1.3;\n}\n.author .name {\n  font-size: 0.98rem;\n  font-weight: 700;\n  margin: 0;\n}\n.author .role {\n  font-size: 0.8rem;\n  color: var(--text-muted);\n  margin: 0;\n}\n@media (max-width: 576px) {\n  .testimonials-grid {\n    grid-template-columns: 1fr;\n  }\n}\n/*# sourceMappingURL=testimonials.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i07.\u0275setClassDebugInfo(TestimonialsComponent, { className: "TestimonialsComponent", filePath: "src/app/pages/home/sections/testimonials/testimonials.ts", lineNumber: 13 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Ftestimonials%2Ftestimonials.ts%40TestimonialsComponent";
  function TestimonialsComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i07.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i07.\u0275\u0275replaceMetadata(TestimonialsComponent, m.default, [i07, i17, i27, i37], [CommonModule7, MatIconModule7, Component7], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && TestimonialsComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && TestimonialsComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/sections/contact/contact.ts
import { Component as Component8, inject as inject8, signal as signal4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import { CommonModule as CommonModule8 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import { FormBuilder, ReactiveFormsModule, Validators } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_forms.js?v=1ba7cd2d";
import { MatFormFieldModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_form-field.js?v=1ba7cd2d";
import { MatInputModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_input.js?v=1ba7cd2d";
import { MatButtonModule as MatButtonModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import { MatIconModule as MatIconModule8 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import { MatProgressSpinnerModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_progress-spinner.js?v=1ba7cd2d";
import { MatSelectModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_select.js?v=1ba7cd2d";
import { MatSnackBar as MatSnackBar2, MatSnackBarModule as MatSnackBarModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=1ba7cd2d";
import * as i08 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
import * as i18 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=1ba7cd2d";
import * as i28 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_forms.js?v=1ba7cd2d";
import * as i38 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_form-field.js?v=1ba7cd2d";
import * as i45 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=1ba7cd2d";
import * as i54 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_input.js?v=1ba7cd2d";
import * as i62 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_text-field.js?v=1ba7cd2d";
import * as i7 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=1ba7cd2d";
import * as i8 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=1ba7cd2d";
import * as i9 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_progress-spinner.js?v=1ba7cd2d";
import * as i10 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_scrolling.js?v=1ba7cd2d";
import * as i11 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_select.js?v=1ba7cd2d";
import * as i122 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=1ba7cd2d";
var _forTrack07 = ($index, $item) => $item.label;
var _forTrack12 = ($index, $item) => $item.url;
var _forTrack2 = ($index, $item) => $item.value;
function ContactComponent_For_24_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "a", 15)(1, "div", 37);
    i08.\u0275\u0275element(2, "i", 38);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(3, "div")(4, "span", 39);
    i08.\u0275\u0275text(5);
    i08.\u0275\u0275elementEnd();
    i08.\u0275\u0275elementStart(6, "span", 40);
    i08.\u0275\u0275text(7);
    i08.\u0275\u0275elementEnd()()();
  }
  if (rf & 2) {
    const item_r1 = ctx.$implicit;
    i08.\u0275\u0275property("href", item_r1.href, i08.\u0275\u0275sanitizeUrl);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275property("ngClass", item_r1.icon);
    i08.\u0275\u0275advance(3);
    i08.\u0275\u0275textInterpolate(item_r1.label);
    i08.\u0275\u0275advance(2);
    i08.\u0275\u0275textInterpolate(item_r1.value);
  }
}
function ContactComponent_For_30_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "a", 19);
    i08.\u0275\u0275element(1, "i", 38);
    i08.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const s_r2 = ctx.$implicit;
    i08.\u0275\u0275property("href", s_r2.url, i08.\u0275\u0275sanitizeUrl);
    i08.\u0275\u0275attribute("aria-label", s_r2.name);
    i08.\u0275\u0275advance();
    i08.\u0275\u0275property("ngClass", s_r2.icon);
  }
}
function ContactComponent_Conditional_41_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "Name is required");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_49_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "Email is required");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_50_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "Please enter a valid email");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_59_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "Subject is required");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_For_66_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-option", 31);
    i08.\u0275\u0275text(1);
    i08.\u0275\u0275elementEnd();
  }
  if (rf & 2) {
    const opt_r3 = ctx.$implicit;
    i08.\u0275\u0275property("value", opt_r3.value);
    i08.\u0275\u0275advance();
    i08.\u0275\u0275textInterpolate(opt_r3.label);
  }
}
function ContactComponent_Conditional_75_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "Message is required");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_76_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275elementStart(0, "mat-error");
    i08.\u0275\u0275text(1, "At least 10 characters");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_79_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275element(0, "mat-spinner", 41);
    i08.\u0275\u0275elementStart(1, "span", 42);
    i08.\u0275\u0275text(2, "Sending\u2026");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_80_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275element(0, "i", 43);
    i08.\u0275\u0275elementStart(1, "span", 42);
    i08.\u0275\u0275text(2, "Sent!");
    i08.\u0275\u0275elementEnd();
  }
}
function ContactComponent_Conditional_81_Template(rf, ctx) {
  if (rf & 1) {
    i08.\u0275\u0275element(0, "i", 4);
    i08.\u0275\u0275elementStart(1, "span", 42);
    i08.\u0275\u0275text(2, "Send Message");
    i08.\u0275\u0275elementEnd();
  }
}
var ContactComponent = class _ContactComponent {
  portfolio = inject8(PortfolioService);
  fb = inject8(FormBuilder);
  snack = inject8(MatSnackBar2);
  loading = signal4(false, ...ngDevMode ? [{ debugName: "loading" }] : (
    /* istanbul ignore next */
    []
  ));
  submitted = signal4(false, ...ngDevMode ? [{ debugName: "submitted" }] : (
    /* istanbul ignore next */
    []
  ));
  form = this.fb.nonNullable.group({
    name: ["", [Validators.required, Validators.minLength(2)]],
    email: ["", [Validators.required, Validators.email]],
    subject: ["", [Validators.required, Validators.minLength(4)]],
    message: ["", [Validators.required, Validators.minLength(10)]],
    budget: ["not-sure"]
  });
  budgetOptions = [
    { value: "not-sure", label: "Not sure yet" },
    { value: "<1k", label: "< $1,000" },
    { value: "1k-5k", label: "$1k \u2014 $5k" },
    { value: "5k-15k", label: "$5k \u2014 $15k" },
    { value: "15k+", label: "$15k+" }
  ];
  contactInfo = [
    {
      icon: "bi-envelope-at",
      label: "Email",
      value: "ahmed.hassan.dev@example.com",
      href: "mailto:ahmed.hassan.dev@example.com"
    },
    {
      icon: "bi-telephone",
      label: "Phone",
      value: "+20 100 123 4567",
      href: "tel:+201001234567"
    },
    {
      icon: "bi-geo-alt",
      label: "Location",
      value: "Cairo, Egypt \xB7 Remote OK",
      href: "#"
    },
    {
      icon: "bi-clock",
      label: "Working hours",
      value: "Sun \u2014 Thu \xB7 9 AM \u2014 6 PM (GMT+2)",
      href: "#"
    }
  ];
  submit() {
    if (this.form.invalid) {
      this.form.markAllAsTouched();
      this.snack.open("Please fill in all required fields correctly.", "Got it", { duration: 3500 });
      return;
    }
    this.loading.set(true);
    setTimeout(() => {
      this.loading.set(false);
      this.submitted.set(true);
      this.snack.open("\u{1F389} Message sent! I will get back to you within 24 hours.", "OK", {
        duration: 5e3
      });
      this.form.reset({ name: "", email: "", subject: "", message: "", budget: "not-sure" });
      setTimeout(() => this.submitted.set(false), 6e3);
    }, 1500);
  }
  static \u0275fac = function ContactComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _ContactComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i08.\u0275\u0275defineComponent({ type: _ContactComponent, selectors: [["app-contact"]], decls: 85, vars: 11, consts: [["id", "contact", 1, "section", "contact"], [1, "container-x"], [1, "text-center", "reveal"], [1, "eyebrow"], [1, "bi", "bi-send"], [1, "section-title"], [1, "gradient-text"], [1, "section-subtitle"], [1, "row", "g-4", "contact-row"], [1, "col-lg-5", "reveal"], [1, "info-card"], [1, "info-title"], [1, "info-sub"], [1, "info-text"], [1, "info-list"], [1, "info-item", 3, "href"], [1, "social-strip"], [1, "strip-label"], [1, "strip-icons"], ["target", "_blank", "rel", "noopener", 1, "strip-icon", 3, "href"], [1, "col-lg-7", "reveal"], ["novalidate", "", 1, "contact-form", 3, "ngSubmit", "formGroup"], [1, "row", "g-3"], [1, "col-md-6"], ["matInput", "", "formControlName", "name", "placeholder", "John Doe", "autocomplete", "name"], ["matPrefix", ""], ["matInput", "", "type", "email", "formControlName", "email", "placeholder", "you@example.com", "autocomplete", "email"], [1, "col-md-8"], ["matInput", "", "formControlName", "subject", "placeholder", "Project collaboration"], [1, "col-md-4"], ["formControlName", "budget"], [3, "value"], ["matInput", "", "formControlName", "message", "rows", "5", "placeholder", "Tell me about your project..."], [1, "form-actions"], ["type", "submit", 1, "btn", "btn-primary", "submit-btn", 3, "disabled"], [1, "response-time"], [1, "bi", "bi-lightning-charge"], [1, "info-icon"], [1, "bi", 3, "ngClass"], [1, "info-label"], [1, "info-value"], ["diameter", "18", "mode", "indeterminate"], [1, "ms-2"], [1, "bi", "bi-check2-circle"]], template: function ContactComponent_Template(rf, ctx) {
    if (rf & 1) {
      i08.\u0275\u0275elementStart(0, "section", 0)(1, "div", 1)(2, "div", 2)(3, "span", 3);
      i08.\u0275\u0275element(4, "i", 4);
      i08.\u0275\u0275text(5, " Get in touch");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(6, "h2", 5);
      i08.\u0275\u0275text(7, "Let's build something ");
      i08.\u0275\u0275elementStart(8, "span", 6);
      i08.\u0275\u0275text(9, "amazing together");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(10, "p", 7);
      i08.\u0275\u0275text(11, " Have a project in mind, a job opportunity, or just want to say hi? Drop me a message. ");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(12, "div", 8)(13, "div", 9)(14, "div", 10)(15, "h3", 11)(16, "span", 6);
      i08.\u0275\u0275text(17);
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(18, "p", 12);
      i08.\u0275\u0275text(19);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(20, "p", 13);
      i08.\u0275\u0275text(21, " I'm always open to discussing product design, development work, or partnership opportunities. Let's chat! ");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(22, "div", 14);
      i08.\u0275\u0275repeaterCreate(23, ContactComponent_For_24_Template, 8, 4, "a", 15, _forTrack07);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(25, "div", 16)(26, "span", 17);
      i08.\u0275\u0275text(27, "Find me on");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(28, "div", 18);
      i08.\u0275\u0275repeaterCreate(29, ContactComponent_For_30_Template, 2, 3, "a", 19, _forTrack12);
      i08.\u0275\u0275elementEnd()()()();
      i08.\u0275\u0275elementStart(31, "div", 20)(32, "form", 21);
      i08.\u0275\u0275listener("ngSubmit", function ContactComponent_Template_form_ngSubmit_32_listener() {
        return ctx.submit();
      });
      i08.\u0275\u0275elementStart(33, "div", 22)(34, "div", 23)(35, "mat-form-field")(36, "mat-label");
      i08.\u0275\u0275text(37, "Your name *");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275element(38, "input", 24);
      i08.\u0275\u0275elementStart(39, "mat-icon", 25);
      i08.\u0275\u0275text(40, "person");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275conditionalCreate(41, ContactComponent_Conditional_41_Template, 2, 0, "mat-error");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(42, "div", 23)(43, "mat-form-field")(44, "mat-label");
      i08.\u0275\u0275text(45, "Email *");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275element(46, "input", 26);
      i08.\u0275\u0275elementStart(47, "mat-icon", 25);
      i08.\u0275\u0275text(48, "email");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275conditionalCreate(49, ContactComponent_Conditional_49_Template, 2, 0, "mat-error");
      i08.\u0275\u0275conditionalCreate(50, ContactComponent_Conditional_50_Template, 2, 0, "mat-error");
      i08.\u0275\u0275elementEnd()()();
      i08.\u0275\u0275elementStart(51, "div", 22)(52, "div", 27)(53, "mat-form-field")(54, "mat-label");
      i08.\u0275\u0275text(55, "Subject *");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275element(56, "input", 28);
      i08.\u0275\u0275elementStart(57, "mat-icon", 25);
      i08.\u0275\u0275text(58, "subject");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275conditionalCreate(59, ContactComponent_Conditional_59_Template, 2, 0, "mat-error");
      i08.\u0275\u0275elementEnd()();
      i08.\u0275\u0275elementStart(60, "div", 29)(61, "mat-form-field")(62, "mat-label");
      i08.\u0275\u0275text(63, "Budget");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(64, "mat-select", 30);
      i08.\u0275\u0275repeaterCreate(65, ContactComponent_For_66_Template, 2, 2, "mat-option", 31, _forTrack2);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(67, "mat-icon", 25);
      i08.\u0275\u0275text(68, "payments");
      i08.\u0275\u0275elementEnd()()()();
      i08.\u0275\u0275elementStart(69, "mat-form-field")(70, "mat-label");
      i08.\u0275\u0275text(71, "Your message *");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275element(72, "textarea", 32);
      i08.\u0275\u0275elementStart(73, "mat-icon", 25);
      i08.\u0275\u0275text(74, "chat");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275conditionalCreate(75, ContactComponent_Conditional_75_Template, 2, 0, "mat-error");
      i08.\u0275\u0275conditionalCreate(76, ContactComponent_Conditional_76_Template, 2, 0, "mat-error");
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(77, "div", 33)(78, "button", 34);
      i08.\u0275\u0275conditionalCreate(79, ContactComponent_Conditional_79_Template, 3, 0)(80, ContactComponent_Conditional_80_Template, 3, 0)(81, ContactComponent_Conditional_81_Template, 3, 0);
      i08.\u0275\u0275elementEnd();
      i08.\u0275\u0275elementStart(82, "span", 35);
      i08.\u0275\u0275element(83, "i", 36);
      i08.\u0275\u0275text(84, " Usually responds within 24h ");
      i08.\u0275\u0275elementEnd()()()()()()();
    }
    if (rf & 2) {
      let tmp_5_0;
      let tmp_6_0;
      let tmp_7_0;
      let tmp_8_0;
      let tmp_10_0;
      let tmp_11_0;
      i08.\u0275\u0275advance(17);
      i08.\u0275\u0275textInterpolate(ctx.portfolio.name);
      i08.\u0275\u0275advance(2);
      i08.\u0275\u0275textInterpolate(ctx.portfolio.role);
      i08.\u0275\u0275advance(4);
      i08.\u0275\u0275repeater(ctx.contactInfo);
      i08.\u0275\u0275advance(6);
      i08.\u0275\u0275repeater(ctx.portfolio.socials);
      i08.\u0275\u0275advance(3);
      i08.\u0275\u0275property("formGroup", ctx.form);
      i08.\u0275\u0275advance(9);
      i08.\u0275\u0275conditional(((tmp_5_0 = ctx.form.get("name")) == null ? null : tmp_5_0.hasError("required")) && ((tmp_5_0 = ctx.form.get("name")) == null ? null : tmp_5_0.touched) ? 41 : -1);
      i08.\u0275\u0275advance(8);
      i08.\u0275\u0275conditional(((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.hasError("required")) && ((tmp_6_0 = ctx.form.get("email")) == null ? null : tmp_6_0.touched) ? 49 : -1);
      i08.\u0275\u0275advance();
      i08.\u0275\u0275conditional(((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.hasError("email")) && ((tmp_7_0 = ctx.form.get("email")) == null ? null : tmp_7_0.touched) ? 50 : -1);
      i08.\u0275\u0275advance(9);
      i08.\u0275\u0275conditional(((tmp_8_0 = ctx.form.get("subject")) == null ? null : tmp_8_0.hasError("required")) && ((tmp_8_0 = ctx.form.get("subject")) == null ? null : tmp_8_0.touched) ? 59 : -1);
      i08.\u0275\u0275advance(6);
      i08.\u0275\u0275repeater(ctx.budgetOptions);
      i08.\u0275\u0275advance(10);
      i08.\u0275\u0275conditional(((tmp_10_0 = ctx.form.get("message")) == null ? null : tmp_10_0.hasError("required")) && ((tmp_10_0 = ctx.form.get("message")) == null ? null : tmp_10_0.touched) ? 75 : -1);
      i08.\u0275\u0275advance();
      i08.\u0275\u0275conditional(((tmp_11_0 = ctx.form.get("message")) == null ? null : tmp_11_0.hasError("minlength")) && ((tmp_11_0 = ctx.form.get("message")) == null ? null : tmp_11_0.touched) ? 76 : -1);
      i08.\u0275\u0275advance(2);
      i08.\u0275\u0275property("disabled", ctx.loading());
      i08.\u0275\u0275advance();
      i08.\u0275\u0275conditional(ctx.loading() ? 79 : ctx.submitted() ? 80 : 81);
    }
  }, dependencies: [CommonModule8, i18.NgClass, i18.NgComponentOutlet, i18.NgForOf, i18.NgIf, i18.NgTemplateOutlet, i18.NgStyle, i18.NgSwitch, i18.NgSwitchCase, i18.NgSwitchDefault, i18.NgPlural, i18.NgPluralCase, ReactiveFormsModule, i28.\u0275NgNoValidate, i28.NgSelectOption, i28.\u0275NgSelectMultipleOption, i28.DefaultValueAccessor, i28.NumberValueAccessor, i28.RangeValueAccessor, i28.CheckboxControlValueAccessor, i28.SelectControlValueAccessor, i28.SelectMultipleControlValueAccessor, i28.RadioControlValueAccessor, i28.NgControlStatus, i28.NgControlStatusGroup, i28.RequiredValidator, i28.MinLengthValidator, i28.MaxLengthValidator, i28.PatternValidator, i28.CheckboxRequiredValidator, i28.EmailValidator, i28.MinValidator, i28.MaxValidator, i28.FormControlDirective, i28.FormGroupDirective, i28.FormArrayDirective, i28.FormControlName, i28.FormGroupName, i28.FormArrayName, MatFormFieldModule, i38.MatFormField, i38.MatLabel, i38.MatHint, i38.MatError, i38.MatPrefix, i38.MatSuffix, i45.Dir, MatInputModule, i54.MatInput, i62.CdkAutofill, i62.CdkTextareaAutosize, MatButtonModule4, i7.MatButton, i7.MatMiniFabButton, i7.MatIconButton, i7.MatFabButton, MatIconModule8, i8.MatIcon, MatProgressSpinnerModule, i9.MatProgressSpinner, MatSelectModule, i10.CdkScrollable, i11.MatSelect, i11.MatSelectTrigger, i11.MatOption, i11.MatOptgroup, MatSnackBarModule2, i122.MatSnackBarContainer, i122.MatSnackBarLabel, i122.MatSnackBarActions, i122.MatSnackBarAction, i18.AsyncPipe, i18.UpperCasePipe, i18.LowerCasePipe, i18.JsonPipe, i18.SlicePipe, i18.DecimalPipe, i18.PercentPipe, i18.TitleCasePipe, i18.CurrencyPipe, i18.DatePipe, i18.I18nPluralPipe, i18.I18nSelectPipe, i18.KeyValuePipe], styles: ['\n[_nghost-%COMP%] {\n  display: block;\n}\n.contact-row[_ngcontent-%COMP%] {\n  align-items: stretch;\n}\n.info-card[_ngcontent-%COMP%] {\n  height: 100%;\n  padding: 2rem;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: var(--radius-md);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.info-card[_ngcontent-%COMP%]::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 350px;\n  height: 350px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.18),\n      transparent 60%);\n  border-radius: 50%;\n}\n.info-card[_ngcontent-%COMP%]::after {\n  content: "";\n  position: absolute;\n  bottom: -30%;\n  left: -20%;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  border-radius: 50%;\n}\n.info-title[_ngcontent-%COMP%] {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0 0 0.25rem;\n  position: relative;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #a5d6ff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n}\n.info-sub[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  margin: 0 0 1rem;\n  position: relative;\n  z-index: 2;\n}\n.info-text[_ngcontent-%COMP%] {\n  font-size: 0.92rem;\n  line-height: 1.7;\n  opacity: 0.92;\n  margin: 0 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n.info-list[_ngcontent-%COMP%] {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n  z-index: 2;\n  flex: 1;\n}\n.info-item[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  text-decoration: none;\n  color: #fff;\n  transition: all 0.25s var(--ease);\n}\n.info-item[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateX(4px);\n  color: #fff;\n}\n.info-item[_ngcontent-%COMP%]   .info-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  font-size: 1.05rem;\n  flex-shrink: 0;\n}\n.info-item[_ngcontent-%COMP%]   .info-label[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.72rem;\n  opacity: 0.85;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item[_ngcontent-%COMP%]   .info-value[_ngcontent-%COMP%] {\n  display: block;\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n.social-strip[_ngcontent-%COMP%] {\n  position: relative;\n  z-index: 2;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.social-strip[_ngcontent-%COMP%]   .strip-label[_ngcontent-%COMP%] {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.social-strip[_ngcontent-%COMP%]   .strip-icons[_ngcontent-%COMP%] {\n  display: flex;\n  gap: 0.4rem;\n}\n.social-strip[_ngcontent-%COMP%]   .strip-icon[_ngcontent-%COMP%] {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: all 0.25s var(--ease);\n}\n.social-strip[_ngcontent-%COMP%]   .strip-icon[_ngcontent-%COMP%]:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-3px);\n  color: #fff;\n}\n.contact-form[_ngcontent-%COMP%] {\n  padding: 2rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.contact-form[_ngcontent-%COMP%]     .mat-mdc-form-field {\n  width: 100%;\n}\n.contact-form[_ngcontent-%COMP%]     .mat-mdc-text-field-wrapper {\n  background: var(--bg-elevated) !important;\n}\n.form-actions[_ngcontent-%COMP%] {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.submit-btn[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n}\n.submit-btn[_ngcontent-%COMP%]   i[_ngcontent-%COMP%], \n.submit-btn[_ngcontent-%COMP%]   mat-icon[_ngcontent-%COMP%] {\n  font-size: 0.95rem;\n}\n.submit-btn[_ngcontent-%COMP%]   mat-spinner[_ngcontent-%COMP%]     circle {\n  stroke: #fff;\n}\n.response-time[_ngcontent-%COMP%] {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.response-time[_ngcontent-%COMP%]   i[_ngcontent-%COMP%] {\n  color: var(--primary-light);\n}\n@media (max-width: 992px) {\n  .info-card[_ngcontent-%COMP%], \n   .contact-form[_ngcontent-%COMP%] {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=contact.css.map */'] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassMetadata(ContactComponent, [{
    type: Component8,
    args: [{ selector: "app-contact", imports: [
      CommonModule8,
      ReactiveFormsModule,
      MatFormFieldModule,
      MatInputModule,
      MatButtonModule4,
      MatIconModule8,
      MatProgressSpinnerModule,
      MatSelectModule,
      MatSnackBarModule2
    ], template: `<section id="contact" class="section contact">
  <div class="container-x">
    <div class="text-center reveal">
      <span class="eyebrow"><i class="bi bi-send"></i> Get in touch</span>
      <h2 class="section-title">Let's build something <span class="gradient-text">amazing together</span></h2>
      <p class="section-subtitle">
        Have a project in mind, a job opportunity, or just want to say hi? Drop me a message.
      </p>
    </div>

    <div class="row g-4 contact-row">
      <!-- Contact info -->
      <div class="col-lg-5 reveal">
        <div class="info-card">
          <h3 class="info-title">
            <span class="gradient-text">{{ portfolio.name }}</span>
          </h3>
          <p class="info-sub">{{ portfolio.role }}</p>
          <p class="info-text">
            I'm always open to discussing product design, development work, or
            partnership opportunities. Let's chat!
          </p>

          <div class="info-list">
            @for (item of contactInfo; track item.label) {
              <a [href]="item.href" class="info-item">
                <div class="info-icon">
                  <i class="bi" [ngClass]="item.icon"></i>
                </div>
                <div>
                  <span class="info-label">{{ item.label }}</span>
                  <span class="info-value">{{ item.value }}</span>
                </div>
              </a>
            }
          </div>

          <div class="social-strip">
            <span class="strip-label">Find me on</span>
            <div class="strip-icons">
              @for (s of portfolio.socials; track s.url) {
                <a [href]="s.url" target="_blank" rel="noopener" class="strip-icon" [attr.aria-label]="s.name">
                  <i class="bi" [ngClass]="s.icon"></i>
                </a>
              }
            </div>
          </div>
        </div>
      </div>

      <!-- Form -->
      <div class="col-lg-7 reveal">
        <form class="contact-form" [formGroup]="form" (ngSubmit)="submit()" novalidate>
          <div class="row g-3">
            <div class="col-md-6">
              <mat-form-field>
                <mat-label>Your name *</mat-label>
                <input matInput formControlName="name" placeholder="John Doe" autocomplete="name" />
                <mat-icon matPrefix>person</mat-icon>
                @if (form.get('name')?.hasError('required') && form.get('name')?.touched) {
                  <mat-error>Name is required</mat-error>
                }
              </mat-form-field>
            </div>
            <div class="col-md-6">
              <mat-form-field>
                <mat-label>Email *</mat-label>
                <input matInput type="email" formControlName="email" placeholder="you@example.com" autocomplete="email" />
                <mat-icon matPrefix>email</mat-icon>
                @if (form.get('email')?.hasError('required') && form.get('email')?.touched) {
                  <mat-error>Email is required</mat-error>
                }
                @if (form.get('email')?.hasError('email') && form.get('email')?.touched) {
                  <mat-error>Please enter a valid email</mat-error>
                }
              </mat-form-field>
            </div>
          </div>

          <div class="row g-3">
            <div class="col-md-8">
              <mat-form-field>
                <mat-label>Subject *</mat-label>
                <input matInput formControlName="subject" placeholder="Project collaboration" />
                <mat-icon matPrefix>subject</mat-icon>
                @if (form.get('subject')?.hasError('required') && form.get('subject')?.touched) {
                  <mat-error>Subject is required</mat-error>
                }
              </mat-form-field>
            </div>
            <div class="col-md-4">
              <mat-form-field>
                <mat-label>Budget</mat-label>
                <mat-select formControlName="budget">
                  @for (opt of budgetOptions; track opt.value) {
                    <mat-option [value]="opt.value">{{ opt.label }}</mat-option>
                  }
                </mat-select>
                <mat-icon matPrefix>payments</mat-icon>
              </mat-form-field>
            </div>
          </div>

          <mat-form-field>
            <mat-label>Your message *</mat-label>
            <textarea matInput formControlName="message" rows="5" placeholder="Tell me about your project..."></textarea>
            <mat-icon matPrefix>chat</mat-icon>
            @if (form.get('message')?.hasError('required') && form.get('message')?.touched) {
              <mat-error>Message is required</mat-error>
            }
            @if (form.get('message')?.hasError('minlength') && form.get('message')?.touched) {
              <mat-error>At least 10 characters</mat-error>
            }
          </mat-form-field>

          <div class="form-actions">
            <button
              type="submit"
              class="btn btn-primary submit-btn"
              [disabled]="loading()">
              @if (loading()) {
                <mat-spinner diameter="18" mode="indeterminate"></mat-spinner>
                <span class="ms-2">Sending\u2026</span>
              } @else if (submitted()) {
                <i class="bi bi-check2-circle"></i>
                <span class="ms-2">Sent!</span>
              } @else {
                <i class="bi bi-send"></i>
                <span class="ms-2">Send Message</span>
              }
            </button>

            <span class="response-time">
              <i class="bi bi-lightning-charge"></i>
              Usually responds within 24h
            </span>
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
`, styles: ['/* src/app/pages/home/sections/contact/contact.scss */\n:host {\n  display: block;\n}\n.contact-row {\n  align-items: stretch;\n}\n.info-card {\n  height: 100%;\n  padding: 2rem;\n  background: var(--gradient-primary);\n  color: #fff;\n  border-radius: var(--radius-md);\n  position: relative;\n  overflow: hidden;\n  display: flex;\n  flex-direction: column;\n}\n.info-card::before {\n  content: "";\n  position: absolute;\n  top: -50%;\n  right: -20%;\n  width: 350px;\n  height: 350px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.18),\n      transparent 60%);\n  border-radius: 50%;\n}\n.info-card::after {\n  content: "";\n  position: absolute;\n  bottom: -30%;\n  left: -20%;\n  width: 280px;\n  height: 280px;\n  background:\n    radial-gradient(\n      circle,\n      rgba(255, 255, 255, 0.12),\n      transparent 60%);\n  border-radius: 50%;\n}\n.info-title {\n  font-size: 1.5rem;\n  font-weight: 800;\n  margin: 0 0 0.25rem;\n  position: relative;\n  z-index: 2;\n  background:\n    linear-gradient(\n      135deg,\n      #fff 0%,\n      #a5d6ff 100%);\n  -webkit-background-clip: text;\n  background-clip: text;\n  -webkit-text-fill-color: transparent;\n  color: transparent;\n}\n.info-sub {\n  font-size: 0.95rem;\n  opacity: 0.9;\n  margin: 0 0 1rem;\n  position: relative;\n  z-index: 2;\n}\n.info-text {\n  font-size: 0.92rem;\n  line-height: 1.7;\n  opacity: 0.92;\n  margin: 0 0 2rem;\n  position: relative;\n  z-index: 2;\n}\n.info-list {\n  display: flex;\n  flex-direction: column;\n  gap: 0.85rem;\n  margin-bottom: 1.5rem;\n  position: relative;\n  z-index: 2;\n  flex: 1;\n}\n.info-item {\n  display: flex;\n  align-items: center;\n  gap: 0.85rem;\n  padding: 0.75rem 0.85rem;\n  background: rgba(255, 255, 255, 0.1);\n  backdrop-filter: blur(10px);\n  -webkit-backdrop-filter: blur(10px);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 12px;\n  text-decoration: none;\n  color: #fff;\n  transition: all 0.25s var(--ease);\n}\n.info-item:hover {\n  background: rgba(255, 255, 255, 0.2);\n  transform: translateX(4px);\n  color: #fff;\n}\n.info-item .info-icon {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.2);\n  border-radius: 10px;\n  font-size: 1.05rem;\n  flex-shrink: 0;\n}\n.info-item .info-label {\n  display: block;\n  font-size: 0.72rem;\n  opacity: 0.85;\n  text-transform: uppercase;\n  letter-spacing: 0.5px;\n}\n.info-item .info-value {\n  display: block;\n  font-size: 0.92rem;\n  font-weight: 600;\n}\n.social-strip {\n  position: relative;\n  z-index: 2;\n  padding-top: 1.25rem;\n  border-top: 1px solid rgba(255, 255, 255, 0.2);\n  display: flex;\n  align-items: center;\n  gap: 1rem;\n  flex-wrap: wrap;\n}\n.social-strip .strip-label {\n  font-size: 0.85rem;\n  opacity: 0.9;\n}\n.social-strip .strip-icons {\n  display: flex;\n  gap: 0.4rem;\n}\n.social-strip .strip-icon {\n  width: 38px;\n  height: 38px;\n  display: grid;\n  place-items: center;\n  background: rgba(255, 255, 255, 0.1);\n  border: 1px solid rgba(255, 255, 255, 0.18);\n  border-radius: 10px;\n  color: #fff;\n  text-decoration: none;\n  font-size: 1rem;\n  transition: all 0.25s var(--ease);\n}\n.social-strip .strip-icon:hover {\n  background: rgba(255, 255, 255, 0.25);\n  transform: translateY(-3px);\n  color: #fff;\n}\n.contact-form {\n  padding: 2rem;\n  background: var(--bg-soft);\n  border: 1px solid var(--border);\n  border-radius: var(--radius-md);\n  height: 100%;\n  display: flex;\n  flex-direction: column;\n}\n.contact-form ::ng-deep .mat-mdc-form-field {\n  width: 100%;\n}\n.contact-form ::ng-deep .mat-mdc-text-field-wrapper {\n  background: var(--bg-elevated) !important;\n}\n.form-actions {\n  display: flex;\n  align-items: center;\n  justify-content: space-between;\n  flex-wrap: wrap;\n  gap: 1rem;\n  margin-top: 0.5rem;\n}\n.submit-btn {\n  display: inline-flex;\n  align-items: center;\n}\n.submit-btn i,\n.submit-btn mat-icon {\n  font-size: 0.95rem;\n}\n.submit-btn mat-spinner ::ng-deep circle {\n  stroke: #fff;\n}\n.response-time {\n  display: inline-flex;\n  align-items: center;\n  gap: 0.4rem;\n  color: var(--text-muted);\n  font-size: 0.85rem;\n}\n.response-time i {\n  color: var(--primary-light);\n}\n@media (max-width: 992px) {\n  .info-card,\n  .contact-form {\n    padding: 1.5rem;\n  }\n}\n/*# sourceMappingURL=contact.css.map */\n'] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i08.\u0275setClassDebugInfo(ContactComponent, { className: "ContactComponent", filePath: "src/app/pages/home/sections/contact/contact.ts", lineNumber: 29 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fsections%2Fcontact%2Fcontact.ts%40ContactComponent";
  function ContactComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i08.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i08.\u0275\u0275replaceMetadata(ContactComponent, m.default, [i08, i18, i28, i38, i45, i54, i62, i7, i8, i9, i10, i11, i122], [CommonModule8, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatButtonModule4, MatIconModule8, MatProgressSpinnerModule, MatSelectModule, MatSnackBarModule2, Component8], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && ContactComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && ContactComponent_HmrLoad(d.timestamp)));
})();

// src/app/pages/home/home.ts
import * as i09 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=1ba7cd2d";
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i09.\u0275\u0275element(0, "app-hero")(1, "app-about")(2, "app-skills")(3, "app-projects")(4, "app-experience")(5, "app-testimonials")(6, "app-contact");
    }
  }, dependencies: [
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    TestimonialsComponent,
    ContactComponent
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(HomeComponent, [{
    type: Component9,
    args: [{ selector: "app-home", imports: [
      HeroComponent,
      AboutComponent,
      SkillsComponent,
      ProjectsComponent,
      ExperienceComponent,
      TestimonialsComponent,
      ContactComponent
    ], template: "<app-hero />\n<app-about />\n<app-skills />\n<app-projects />\n<app-experience />\n<app-testimonials />\n<app-contact />\n", styles: ["/* src/app/pages/home/home.scss */\n:host {\n  display: block;\n}\n/*# sourceMappingURL=home.css.map */\n"] }]
  }], null, null);
})();
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.ts", lineNumber: 25 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fhome.ts%40HomeComponent";
  function HomeComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i09.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i09.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i09], [HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, TestimonialsComponent, ContactComponent, Component9], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
})();
export {
  HomeComponent
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9oZXJvL2hlcm8udHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvaGVyby9oZXJvLmh0bWwiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvYWJvdXQvYWJvdXQudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvYWJvdXQvYWJvdXQuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9za2lsbHMvc2tpbGxzLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL3NraWxscy9za2lsbHMuaHRtbCIsInNyYy9hcHAvY29yZS9tb2RlbHMvc2tpbGwubW9kZWwudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9wcm9qZWN0cy9wcm9qZWN0LWRpYWxvZy9wcm9qZWN0LWRpYWxvZy50cyIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9wcm9qZWN0cy9wcm9qZWN0LWRpYWxvZy9wcm9qZWN0LWRpYWxvZy5odG1sIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS50cyIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9leHBlcmllbmNlL2V4cGVyaWVuY2UuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvY29udGFjdC9jb250YWN0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZXJvQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9ucy9oZXJvL2hlcm8nO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb25zL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvc2tpbGxzL3NraWxscyc7XG5pbXBvcnQgeyBQcm9qZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMnO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvZXhwZXJpZW5jZS9leHBlcmllbmNlJztcbmltcG9ydCB7IFRlc3RpbW9uaWFsc0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscyc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIGltcG9ydHM6IFtcbiAgICBIZXJvQ29tcG9uZW50LFxuICAgIEFib3V0Q29tcG9uZW50LFxuICAgIFNraWxsc0NvbXBvbmVudCxcbiAgICBQcm9qZWN0c0NvbXBvbmVudCxcbiAgICBFeHBlcmllbmNlQ29tcG9uZW50LFxuICAgIFRlc3RpbW9uaWFsc0NvbXBvbmVudCxcbiAgICBDb250YWN0Q29tcG9uZW50LFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vaG9tZS5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2hvbWUuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEhvbWVDb21wb25lbnQge31cbiIsIjxhcHAtaGVybyAvPlxuPGFwcC1hYm91dCAvPlxuPGFwcC1za2lsbHMgLz5cbjxhcHAtcHJvamVjdHMgLz5cbjxhcHAtZXhwZXJpZW5jZSAvPlxuPGFwcC10ZXN0aW1vbmlhbHMgLz5cbjxhcHAtY29udGFjdCAvPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIHNpZ25hbCwgT25Jbml0LCBPbkRlc3Ryb3kgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2VydmljZXMvcG9ydGZvbGlvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaGVybycsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGUsIE1hdEJ1dHRvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9oZXJvLmh0bWwnLFxuICBzdHlsZVVybDogJy4vaGVyby5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgSGVyb0NvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCwgT25EZXN0cm95IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBvcnRmb2xpbyA9IGluamVjdChQb3J0Zm9saW9TZXJ2aWNlKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcm9sZXMgPSBbXG4gICAgJ0FuZ3VsYXIgRGV2ZWxvcGVyJyxcbiAgICAnRnJvbnRlbmQgQXJjaGl0ZWN0JyxcbiAgICAnVUkgRW5naW5lZXInLFxuICAgICdPcGVuLVNvdXJjZSBDb250cmlidXRvcicsXG4gIF07XG4gIHByb3RlY3RlZCByZWFkb25seSBjdXJyZW50Um9sZSA9IHNpZ25hbCgnJyk7XG4gIHByaXZhdGUgcm9sZUludGVydmFsOiBSZXR1cm5UeXBlPHR5cGVvZiBzZXRJbnRlcnZhbD4gfCBudWxsID0gbnVsbDtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvdW50ZXJzID0gc2lnbmFsPFJlY29yZDxzdHJpbmcsIG51bWJlcj4+KHt9KTtcblxuICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICB0aGlzLnN0YXJ0VHlwZXdyaXRlcigpO1xuICAgIHRoaXMuc3RhcnRDb3VudGVycygpO1xuICB9XG5cbiAgbmdPbkRlc3Ryb3koKTogdm9pZCB7XG4gICAgaWYgKHRoaXMucm9sZUludGVydmFsKSBjbGVhckludGVydmFsKHRoaXMucm9sZUludGVydmFsKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRUeXBld3JpdGVyKCk6IHZvaWQge1xuICAgIGxldCBpID0gMDtcbiAgICBsZXQgY2hhckluZGV4ID0gMDtcbiAgICBsZXQgZGVsZXRpbmcgPSBmYWxzZTtcbiAgICBjb25zdCB0aWNrID0gKCkgPT4ge1xuICAgICAgY29uc3Qgd29yZCA9IHRoaXMucm9sZXNbaV07XG4gICAgICBpZiAoIWRlbGV0aW5nKSB7XG4gICAgICAgIHRoaXMuY3VycmVudFJvbGUuc2V0KHdvcmQuc3Vic3RyaW5nKDAsIGNoYXJJbmRleCArIDEpKTtcbiAgICAgICAgY2hhckluZGV4Kys7XG4gICAgICAgIGlmIChjaGFySW5kZXggPT09IHdvcmQubGVuZ3RoKSB7XG4gICAgICAgICAgZGVsZXRpbmcgPSB0cnVlO1xuICAgICAgICAgIHNldFRpbWVvdXQodGljaywgMTgwMCk7XG4gICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG4gICAgICB9IGVsc2Uge1xuICAgICAgICB0aGlzLmN1cnJlbnRSb2xlLnNldCh3b3JkLnN1YnN0cmluZygwLCBjaGFySW5kZXggLSAxKSk7XG4gICAgICAgIGNoYXJJbmRleC0tO1xuICAgICAgICBpZiAoY2hhckluZGV4ID09PSAwKSB7XG4gICAgICAgICAgZGVsZXRpbmcgPSBmYWxzZTtcbiAgICAgICAgICBpID0gKGkgKyAxKSAlIHRoaXMucm9sZXMubGVuZ3RoO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgICB0aGlzLnJvbGVJbnRlcnZhbCA9IHNldFRpbWVvdXQodGljaywgZGVsZXRpbmcgPyA0MCA6IDkwKTtcbiAgICB9O1xuICAgIHRpY2soKTtcbiAgfVxuXG4gIHByaXZhdGUgc3RhcnRDb3VudGVycygpOiB2b2lkIHtcbiAgICBjb25zdCBvYnNlcnZlciA9IG5ldyBJbnRlcnNlY3Rpb25PYnNlcnZlcigoZW50cmllcykgPT4ge1xuICAgICAgZW50cmllcy5mb3JFYWNoKChlKSA9PiB7XG4gICAgICAgIGlmIChlLmlzSW50ZXJzZWN0aW5nKSB7XG4gICAgICAgICAgdGhpcy5hbmltYXRlQ291bnRlcnMoKTtcbiAgICAgICAgICBvYnNlcnZlci5kaXNjb25uZWN0KCk7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuICAgIH0pO1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgY29uc3QgZWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuaGVyby1zdGF0cycpO1xuICAgICAgaWYgKGVsKSBvYnNlcnZlci5vYnNlcnZlKGVsKTtcbiAgICB9LCAxMDApO1xuICB9XG5cbiAgcHJpdmF0ZSBhbmltYXRlQ291bnRlcnMoKTogdm9pZCB7XG4gICAgY29uc3QgZHVyYXRpb24gPSAxNTAwO1xuICAgIGNvbnN0IHN0YXJ0ID0gcGVyZm9ybWFuY2Uubm93KCk7XG4gICAgY29uc3QgdGFyZ2V0cyA9IHRoaXMucG9ydGZvbGlvLnN0YXRzLm1hcCgocykgPT4gKHtcbiAgICAgIGxhYmVsOiBzLmxhYmVsLFxuICAgICAgdGFyZ2V0OiBwYXJzZUludChzLnZhbHVlLnJlcGxhY2UoL1xcRC9nLCAnJyksIDEwKSB8fCAwLFxuICAgIH0pKTtcblxuICAgIGNvbnN0IHN0ZXAgPSAobm93OiBudW1iZXIpID0+IHtcbiAgICAgIGNvbnN0IHByb2dyZXNzID0gTWF0aC5taW4oKG5vdyAtIHN0YXJ0KSAvIGR1cmF0aW9uLCAxKTtcbiAgICAgIGNvbnN0IGVhc2VkID0gMSAtIE1hdGgucG93KDEgLSBwcm9ncmVzcywgMyk7XG4gICAgICBjb25zdCByZXN1bHQ6IFJlY29yZDxzdHJpbmcsIG51bWJlcj4gPSB7fTtcbiAgICAgIHRhcmdldHMuZm9yRWFjaCgodCkgPT4gKHJlc3VsdFt0LmxhYmVsXSA9IE1hdGguZmxvb3IodC50YXJnZXQgKiBlYXNlZCkpKTtcbiAgICAgIHRoaXMuY291bnRlcnMuc2V0KHJlc3VsdCk7XG4gICAgICBpZiAocHJvZ3Jlc3MgPCAxKSByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gICAgfTtcbiAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoc3RlcCk7XG4gIH1cblxuICBmb3JtYXRWYWx1ZShsYWJlbDogc3RyaW5nLCBvcmlnaW5hbDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBudW0gPSB0aGlzLmNvdW50ZXJzKClbbGFiZWxdID8/IDA7XG4gICAgY29uc3Qgc3VmZml4ID0gb3JpZ2luYWwucmVwbGFjZSgvWzAtOV0vZywgJycpO1xuICAgIHJldHVybiBgJHtudW19JHtzdWZmaXh9YDtcbiAgfVxufVxuIiwiPHNlY3Rpb24gaWQ9XCJob21lXCIgY2xhc3M9XCJoZXJvXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJyb3cgYWxpZ24taXRlbXMtY2VudGVyIGctNSBoZXJvLXJvd1wiPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy03XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWNvbnRlbnQgcmV2ZWFsXCI+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cIndhdmVcIj7wn5GLPC9zcGFuPiBXZWxjb21lIHRvIG15IHBvcnRmb2xpb1xuICAgICAgICAgIDwvc3Bhbj5cblxuICAgICAgICAgIDxoMSBjbGFzcz1cImhlcm8tdGl0bGVcIj5cbiAgICAgICAgICAgIEhpLCBJJ20gPHNwYW4gY2xhc3M9XCJncmFkaWVudC10ZXh0XCI+e3sgcG9ydGZvbGlvLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicm9sZS1saW5lXCI+XG4gICAgICAgICAgICAgIGEgPHNwYW4gY2xhc3M9XCJ0eXBlZFwiPnt7IGN1cnJlbnRSb2xlKCkgfX08L3NwYW4+PHNwYW4gY2xhc3M9XCJjdXJzb3JcIj58PC9zcGFuPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgIDwvaDE+XG5cbiAgICAgICAgICA8cCBjbGFzcz1cImhlcm8tc3VidGl0bGVcIj5cbiAgICAgICAgICAgIHt7IHBvcnRmb2xpby50YWdsaW5lIH19XG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8taW5mb1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWdlby1hbHRcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IHBvcnRmb2xpby5sb2NhdGlvbiB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taXRlbVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWJyaWVmY2FzZVwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+MysgeWVhcnMgYnVpbGRpbmcgcHJvZHVjdGlvbiBBbmd1bGFyIGFwcHM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWN0YVwiPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNwcm9qZWN0c1wiIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktcm9ja2V0LXRha2VvZmZcIj48L2k+XG4gICAgICAgICAgICAgIFZpZXcgTXkgV29ya1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgaHJlZj1cIiNjb250YWN0XCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1lbnZlbG9wZVwiPjwvaT5cbiAgICAgICAgICAgICAgR2V0IGluIFRvdWNoXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8YSBbaHJlZl09XCInbWFpbHRvOicgKyBwb3J0Zm9saW8uZW1haWxcIiBjbGFzcz1cImJ0biBidG4tZ2hvc3RcIiBtYXQtc3Ryb2tlZC1idXR0b24+XG4gICAgICAgICAgICAgIDxtYXQtaWNvbj5kb3dubG9hZDwvbWF0LWljb24+XG4gICAgICAgICAgICAgIERvd25sb2FkIENWXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1zb2NpYWxzXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNvY2lhbHMtbGFiZWxcIj5Gb2xsb3cgbWU8L3NwYW4+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLWljb25zXCI+XG4gICAgICAgICAgICAgIEBmb3IgKHMgb2YgcG9ydGZvbGlvLnNvY2lhbHMuc2xpY2UoMCwgNCk7IHRyYWNrIHMudXJsKSB7XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwicy51cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIFthdHRyLmFyaWEtbGFiZWxdPVwicy5uYW1lXCIgY2xhc3M9XCJzb2NpYWwtaWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cInMuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTVcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tdmlzdWFsIHJldmVhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ2aXN1YWwtY2FyZFwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtZ2xvd1wiPjwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtY29udGVudFwiPlxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXdyYXBwZXJcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyLXJpbmdcIj48L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXZhdGFyXCI+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImF2YXRhci1pbml0aWFsc1wiPnt7IHBvcnRmb2xpby5hdmF0YXJJbml0aWFscyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdHVzLWluZGljYXRvclwiIHRpdGxlPVwiQXZhaWxhYmxlXCI+PC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXYtaW5mb1wiPlxuICAgICAgICAgICAgICAgIDxoMyBjbGFzcz1cImRldi1uYW1lXCI+e3sgcG9ydGZvbGlvLm5hbWUgfX08L2gzPlxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV2LXJvbGVcIj57eyBwb3J0Zm9saW8ucm9sZSB9fTwvcD5cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInRlY2gtc3RhY2tcIj5cbiAgICAgICAgICAgICAgICBAZm9yICh0ZWNoIG9mIFsnQW5ndWxhcicsICdUeXBlU2NyaXB0JywgJ1J4SlMnLCAnTmdSeCcsICdNYXRlcmlhbCddOyB0cmFjayB0ZWNoKSB7XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRlY2gtcGlsbFwiPnt7IHRlY2ggfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1zdGF0c1wiPlxuICAgICAgICAgICAgICAgIEBmb3IgKHN0YXQgb2YgcG9ydGZvbGlvLnN0YXRzOyB0cmFjayBzdGF0LmxhYmVsKSB7XG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdFwiPlxuICAgICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpXCIgW25nQ2xhc3NdPVwic3RhdC5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhdC1pbmZvXCI+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LXZhbHVlIGdyYWRpZW50LXRleHRcIj57eyBmb3JtYXRWYWx1ZShzdGF0LmxhYmVsLCBzdGF0LnZhbHVlKSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YXQtbGFiZWxcIj57eyBzdGF0LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1pY29uIGljb24tMVwiPjxpIGNsYXNzPVwiYmkgYmktZmlsZXR5cGUtdHN4XCI+PC9pPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1pY29uIGljb24tMlwiPjxpIGNsYXNzPVwiYmkgYmktZmlsZXR5cGUtaHRtbFwiPjwvaT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXRpbmctaWNvbiBpY29uLTNcIj48aSBjbGFzcz1cImJpIGJpLWZpbGV0eXBlLXNjc3NcIj48L2k+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWljb24gaWNvbi00XCI+PGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2k+PC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxhIGhyZWY9XCIjYWJvdXRcIiBjbGFzcz1cInNjcm9sbC1jdWVcIiBhcmlhLWxhYmVsPVwiU2Nyb2xsIHRvIGFib3V0XCI+XG4gICAgPHNwYW4gY2xhc3M9XCJtb3VzZVwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJ3aGVlbFwiPjwvc3Bhbj5cbiAgICA8L3NwYW4+XG4gICAgPHNwYW4gY2xhc3M9XCJjdWUtdGV4dFwiPlNjcm9sbDwvc3Bhbj5cbiAgPC9hPlxuPC9zZWN0aW9uPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5cbmludGVyZmFjZSBIaWdobGlnaHQge1xuICBpY29uOiBzdHJpbmc7XG4gIHRpdGxlOiBzdHJpbmc7XG4gIHRleHQ6IHN0cmluZztcbn1cblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWFib3V0JyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9hYm91dC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2Fib3V0LnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBBYm91dENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb3J0Zm9saW8gPSBpbmplY3QoUG9ydGZvbGlvU2VydmljZSk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGhpZ2hsaWdodHM6IEhpZ2hsaWdodFtdID0gW1xuICAgIHtcbiAgICAgIGljb246ICdiaS1saWdodG5pbmctY2hhcmdlLWZpbGwnLFxuICAgICAgdGl0bGU6ICdQZXJmb3JtYW5jZSBGaXJzdCcsXG4gICAgICB0ZXh0OiAnSSBvYnNlc3Mgb3ZlciBDb3JlIFdlYiBWaXRhbHMsIGxhenkgbG9hZGluZywgYW5kIGJ1bmRsZSBzaXplIHRvIGRlbGl2ZXIgbGlnaHRuaW5nLWZhc3QgZXhwZXJpZW5jZXMuJyxcbiAgICB9LFxuICAgIHtcbiAgICAgIGljb246ICdiaS1kaWFncmFtLTMtZmlsbCcsXG4gICAgICB0aXRsZTogJ1NjYWxhYmxlIEFyY2hpdGVjdHVyZScsXG4gICAgICB0ZXh0OiAnQnVpbGRpbmcgbW9kdWxhciwgdGVzdGFibGUgY29kZWJhc2VzIHdpdGggZmVhdHVyZSBtb2R1bGVzLCBzbWFydC9kdW1iIGNvbXBvbmVudHMsIGFuZCBjbGVhbiBzdGF0ZSBtYW5hZ2VtZW50LicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktdW5pdmVyc2FsLWFjY2VzcycsXG4gICAgICB0aXRsZTogJ0FjY2Vzc2libGUgYnkgRGVmYXVsdCcsXG4gICAgICB0ZXh0OiAnV0NBRy1jb21wbGlhbnQgVUksIGZ1bGwga2V5Ym9hcmQgbmF2aWdhdGlvbiwgc2NyZWVuLXJlYWRlciBmcmllbmRseSBtYXJrdXAgYW5kIFJUTCBzdXBwb3J0LicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktcGVvcGxlLWZpbGwnLFxuICAgICAgdGl0bGU6ICdUZWFtIFBsYXllciAmIE1lbnRvcicsXG4gICAgICB0ZXh0OiAnQ29kZSByZXZpZXdzLCBwYWlyLXByb2dyYW1taW5nIGFuZCBtZW50b3Jpbmcg4oCUIEkgbGlmdCB0aGUgdGVhbSBhcm91bmQgbWUgYXMgSSBncm93LicsXG4gICAgfSxcbiAgXTtcbn1cbiIsIjxzZWN0aW9uIGlkPVwiYWJvdXRcIiBjbGFzcz1cInNlY3Rpb24gYWJvdXRcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14XCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJldmVhbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+PGkgY2xhc3M9XCJiaSBiaS1wZXJzb24tYmFkZ2VcIj48L2k+IEFib3V0IG1lPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkNyYWZ0aW5nIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPmRlbGlnaHRmdWw8L3NwYW4+IGRpZ2l0YWwgZXhwZXJpZW5jZXM8L2gyPlxuICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgIEEgcGFzc2lvbmF0ZSBmcm9udGVuZCBkZXZlbG9wZXIgd2hvIHRyZWF0cyBldmVyeSBjb21wb25lbnQgbGlrZSBhIHNtYWxsIHByb2R1Y3QuXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGctNSBhbGlnbi1pdGVtcy1jZW50ZXJcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSByZXZlYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LXZpc3VhbFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2RlLXdpbmRvd1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIndpbmRvdy1iYXJcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3QgcmVkXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvdCB5ZWxsb3dcIj48L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG90IGdyZWVuXCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZpbGUtbmFtZVwiPmRldmVsb3Blci50czwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHByZSBjbGFzcz1cImNvZGVcIj48Y29kZT48c3BhbiBjbGFzcz1cImMta2V5d29yZFwiPmNvbnN0PC9zcGFuPiA8c3BhbiBjbGFzcz1cImMtdmFyXCI+YWhtZWQ8L3NwYW4+ID0ge3sgJ3snIH19XG4gIDxzcGFuIGNsYXNzPVwiYy1wcm9wXCI+cm9sZTwvc3Bhbj46IDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4nU2VuaW9yIEFuZ3VsYXIgRGV2ZWxvcGVyJzwvc3Bhbj4sXG4gIDxzcGFuIGNsYXNzPVwiYy1wcm9wXCI+ZXhwZXJpZW5jZTwvc3Bhbj46IDxzcGFuIGNsYXNzPVwiYy1udW1iZXJcIj4zKzwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjLXN0cmluZ1wiPid5ZWFycyc8L3NwYW4+LFxuICA8c3BhbiBjbGFzcz1cImMtcHJvcFwiPmZvY3VzPC9zcGFuPjogW1xuICAgIDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4nQW5ndWxhciAxNyc8L3NwYW4+LFxuICAgIDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4nTmdSeCAmIFNpZ25hbHMnPC9zcGFuPixcbiAgICA8c3BhbiBjbGFzcz1cImMtc3RyaW5nXCI+J01hdGVyaWFsICYgQm9vdHN0cmFwJzwvc3Bhbj4sXG4gICAgPHNwYW4gY2xhc3M9XCJjLXN0cmluZ1wiPidQZXJmb3JtYW5jZSAmIEExMXknPC9zcGFuPixcbiAgXSxcbiAgPHNwYW4gY2xhc3M9XCJjLXByb3BcIj5hdmFpbGFibGU8L3NwYW4+OiA8c3BhbiBjbGFzcz1cImMtYm9vbFwiPnRydWU8L3NwYW4+LFxuICA8c3BhbiBjbGFzcz1cImMtcHJvcFwiPmxvdmVzPC9zcGFuPjogPHNwYW4gY2xhc3M9XCJjLXN0cmluZ1wiPidjbGVhbiBjb2RlICYgZ3JlYXQgVVgnPC9zcGFuPixcbnt7ICd9JyB9fTs8L2NvZGU+PC9wcmU+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXRpbmctYmFkZ2UgYmFkZ2UtMVwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPndvcmtzcGFjZV9wcmVtaXVtPC9tYXQtaWNvbj5cbiAgICAgICAgICAgIDxzcGFuPjMrIFllYXJzIEV4cC48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWJhZGdlIGJhZGdlLTJcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc3RhcnNcIj48L2k+XG4gICAgICAgICAgICA8c3Bhbj5Ub3AgUmF0ZWQ8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNyByZXZlYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImFib3V0LWNvbnRlbnRcIj5cbiAgICAgICAgICA8aDMgY2xhc3M9XCJhYm91dC1oZWFkaW5nXCI+XG4gICAgICAgICAgICBJJ20ge3sgcG9ydGZvbGlvLm5hbWUgfX0sIGFuIEFuZ3VsYXIgZGV2ZWxvcGVyIHdobyB0dXJucyBjb21wbGV4IHByb2JsZW1zXG4gICAgICAgICAgICBpbnRvIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPmVsZWdhbnQgc29sdXRpb25zPC9zcGFuPi5cbiAgICAgICAgICA8L2gzPlxuICAgICAgICAgIDxwIGNsYXNzPVwiYWJvdXQtdGV4dFwiPlxuICAgICAgICAgICAge3sgcG9ydGZvbGlvLmJpbyB9fVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzcz1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgIE15IHdvcmsgc3BhbnMgZW50ZXJwcmlzZSBTYWFTIGRhc2hib2FyZHMsIGZpbnRlY2ggYXBwcywgZS1jb21tZXJjZSBwbGF0Zm9ybXMgYW5kIFBXQXMuXG4gICAgICAgICAgICBJIGxvdmUgb3duaW5nIHRoZSBmdWxsIGZyb250ZW5kIGxpZmVjeWNsZSDigJQgZnJvbSBhcmNoaXRlY3R1cmUgYW5kIGRlc2lnbiB0b2tlbnMgdG9cbiAgICAgICAgICAgIHVuaXQtdGVzdGluZywgQ0kvQ0QgYW5kIHByb2R1Y3Rpb24gbW9uaXRvcmluZy5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGlnaGxpZ2h0cy1ncmlkXCI+XG4gICAgICAgICAgICBAZm9yIChoIG9mIGhpZ2hsaWdodHM7IHRyYWNrIGgudGl0bGUpIHtcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhpZ2hsaWdodFwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmlcIiBbbmdDbGFzc109XCJoLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImgtYm9keVwiPlxuICAgICAgICAgICAgICAgICAgPGg0IGNsYXNzPVwiaC10aXRsZVwiPnt7IGgudGl0bGUgfX08L2g0PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJoLXRleHRcIj57eyBoLnRleHQgfX08L3A+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBzaWduYWwsIGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0VGFic01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3RhYnMnO1xuaW1wb3J0IHsgTWF0Q2hpcHNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9jaGlwcyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5pbXBvcnQgeyBTa2lsbCwgU0tJTExfTEVWRUxfUEVSQ0VOVCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbW9kZWxzL3NraWxsLm1vZGVsJztcblxudHlwZSBDYXRlZ29yeSA9ICdhbGwnIHwgJ2Zyb250ZW5kJyB8ICd1aScgfCAnc3RhdGUnIHwgJ3Rvb2xpbmcnIHwgJ3Rlc3RpbmcnIHwgJ3NvZnQnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtc2tpbGxzJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0VGFic01vZHVsZSwgTWF0Q2hpcHNNb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vc2tpbGxzLmh0bWwnLFxuICBzdHlsZVVybDogJy4vc2tpbGxzLnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBTa2lsbHNDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9ydGZvbGlvID0gaW5qZWN0KFBvcnRmb2xpb1NlcnZpY2UpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgYWN0aXZlQ2F0ZWdvcnkgPSBzaWduYWw8Q2F0ZWdvcnk+KCdhbGwnKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBlcmNlbnRNYXAgPSBTS0lMTF9MRVZFTF9QRVJDRU5UO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBjYXRlZ29yaWVzOiB7IGlkOiBDYXRlZ29yeTsgbGFiZWw6IHN0cmluZzsgaWNvbjogc3RyaW5nIH1bXSA9IFtcbiAgICB7IGlkOiAnYWxsJywgbGFiZWw6ICdBbGwgU2tpbGxzJywgaWNvbjogJ2dyaWRfdmlldycgfSxcbiAgICB7IGlkOiAnZnJvbnRlbmQnLCBsYWJlbDogJ0Zyb250ZW5kJywgaWNvbjogJ2NvZGUnIH0sXG4gICAgeyBpZDogJ3VpJywgbGFiZWw6ICdVSSAmIERlc2lnbicsIGljb246ICdwYWxldHRlJyB9LFxuICAgIHsgaWQ6ICdzdGF0ZScsIGxhYmVsOiAnU3RhdGUnLCBpY29uOiAnaHViJyB9LFxuICAgIHsgaWQ6ICd0b29saW5nJywgbGFiZWw6ICdUb29saW5nJywgaWNvbjogJ2J1aWxkJyB9LFxuICAgIHsgaWQ6ICd0ZXN0aW5nJywgbGFiZWw6ICdUZXN0aW5nJywgaWNvbjogJ2J1Z19yZXBvcnQnIH0sXG4gICAgeyBpZDogJ3NvZnQnLCBsYWJlbDogJ1NvZnQgU2tpbGxzJywgaWNvbjogJ2dyb3VwcycgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmlsdGVyZWRTa2lsbHMgPSBjb21wdXRlZDxTa2lsbFtdPigoKSA9PiB7XG4gICAgY29uc3QgY2F0ID0gdGhpcy5hY3RpdmVDYXRlZ29yeSgpO1xuICAgIHJldHVybiBjYXQgPT09ICdhbGwnXG4gICAgICA/IHRoaXMucG9ydGZvbGlvLnNraWxsc1xuICAgICAgOiB0aGlzLnBvcnRmb2xpby5za2lsbHMuZmlsdGVyKChzKSA9PiBzLmNhdGVnb3J5ID09PSBjYXQpO1xuICB9KTtcblxuICBzZXRDYXRlZ29yeShjYXQ6IENhdGVnb3J5KTogdm9pZCB7XG4gICAgdGhpcy5hY3RpdmVDYXRlZ29yeS5zZXQoY2F0KTtcbiAgfVxuXG4gIGNvdW50Rm9yKGNhdDogQ2F0ZWdvcnkpOiBudW1iZXIge1xuICAgIGlmIChjYXQgPT09ICdhbGwnKSByZXR1cm4gdGhpcy5wb3J0Zm9saW8uc2tpbGxzLmxlbmd0aDtcbiAgICByZXR1cm4gdGhpcy5wb3J0Zm9saW8uc2tpbGxzLmZpbHRlcigocykgPT4gcy5jYXRlZ29yeSA9PT0gY2F0KS5sZW5ndGg7XG4gIH1cblxuICB0cmFja0J5TmFtZShfOiBudW1iZXIsIGl0ZW06IFNraWxsKTogc3RyaW5nIHtcbiAgICByZXR1cm4gaXRlbS5uYW1lO1xuICB9XG59XG4iLCI8c2VjdGlvbiBpZD1cInNraWxsc1wiIGNsYXNzPVwic2VjdGlvbiBza2lsbHNcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14XCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJldmVhbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+PGkgY2xhc3M9XCJiaSBiaS1tb3J0YXJib2FyZFwiPjwvaT4gU2tpbGxzICYgRXhwZXJ0aXNlPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkEgdG9vbGJveCBidWlsdCBmb3IgPHNwYW4gY2xhc3M9XCJncmFkaWVudC10ZXh0XCI+bW9kZXJuIEFuZ3VsYXI8L3NwYW4+PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAzKyB5ZWFycyBvZiBoYW5kcy1vbiBwcm9kdWN0aW9uIGV4cGVyaWVuY2UgYWNyb3NzIHRoZSBlbnRpcmUgZnJvbnRlbmQgc3RhY2suXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiY2F0ZWdvcnktdGFicyByZXZlYWxcIj5cbiAgICAgIEBmb3IgKGNhdCBvZiBjYXRlZ29yaWVzOyB0cmFjayBjYXQuaWQpIHtcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiY2F0LXRhYlwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVDYXRlZ29yeSgpID09PSBjYXQuaWRcIlxuICAgICAgICAgIChjbGljayk9XCJzZXRDYXRlZ29yeShjYXQuaWQpXCI+XG4gICAgICAgICAgPG1hdC1pY29uPnt7IGNhdC5pY29uIH19PC9tYXQtaWNvbj5cbiAgICAgICAgICA8c3Bhbj57eyBjYXQubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJjb3VudFwiPnt7IGNvdW50Rm9yKGNhdC5pZCkgfX08L3NwYW4+XG4gICAgICAgIDwvYnV0dG9uPlxuICAgICAgfVxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInNraWxscy1ncmlkXCI+XG4gICAgICBAZm9yIChza2lsbCBvZiBmaWx0ZXJlZFNraWxscygpOyB0cmFjayB0cmFja0J5TmFtZSgkaW5kZXgsIHNraWxsKTsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWNhcmQgcmV2ZWFsXCIgW3N0eWxlLmFuaW1hdGlvbi1kZWxheS5tc109XCJpICogNjBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtaGVhZGVyXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtaWNvblwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpXCIgW25nQ2xhc3NdPVwic2tpbGwuaWNvblwiPjwvaT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWluZm9cIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwic2tpbGwtbmFtZVwiPnt7IHNraWxsLm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNraWxsLW1ldGFcIj57eyBza2lsbC55ZWFycyB9fSsgeWVhcnt7IHNraWxsLnllYXJzID4gMSA/ICdzJyA6ICcnIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInNraWxsLWxldmVsXCIgW2NsYXNzXT1cIidsdmwtJyArIHNraWxsLmxldmVsXCI+e3sgc2tpbGwubGV2ZWwgfX08L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2tpbGwtYmFyXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhci1maWxsXCIgW3N0eWxlLndpZHRoLiVdPVwicGVyY2VudE1hcFtza2lsbC5sZXZlbF1cIj48L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsImV4cG9ydCB0eXBlIFNraWxsTGV2ZWwgPSAnYmVnaW5uZXInIHwgJ2ludGVybWVkaWF0ZScgfCAnYWR2YW5jZWQnIHwgJ2V4cGVydCc7XG5cbmV4cG9ydCBpbnRlcmZhY2UgU2tpbGwge1xuICBuYW1lOiBzdHJpbmc7XG4gIGljb246IHN0cmluZzsgLy8gYm9vdHN0cmFwLWljb25zIGNsYXNzIGUuZy4gJ2JpLWZpbGV0eXBlLXRzeCdcbiAgbGV2ZWw6IFNraWxsTGV2ZWw7XG4gIHllYXJzOiBudW1iZXI7XG4gIGNhdGVnb3J5OiAnZnJvbnRlbmQnIHwgJ3N0YXRlJyB8ICd1aScgfCAndG9vbGluZycgfCAndGVzdGluZycgfCAnc29mdCc7XG59XG5cbmV4cG9ydCBjb25zdCBTS0lMTF9MRVZFTF9QRVJDRU5UOiBSZWNvcmQ8U2tpbGxMZXZlbCwgbnVtYmVyPiA9IHtcbiAgYmVnaW5uZXI6IDM1LFxuICBpbnRlcm1lZGlhdGU6IDYwLFxuICBhZHZhbmNlZDogODAsXG4gIGV4cGVydDogOTUsXG59O1xuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QsIHNpZ25hbCwgY29tcHV0ZWQgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXREaWFsb2csIE1hdERpYWxvZ01vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2RpYWxvZyc7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFBvcnRmb2xpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3BvcnRmb2xpby5zZXJ2aWNlJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVscy9wcm9qZWN0Lm1vZGVsJztcbmltcG9ydCB7IFByb2plY3REaWFsb2dDb21wb25lbnQgfSBmcm9tICcuL3Byb2plY3QtZGlhbG9nL3Byb2plY3QtZGlhbG9nJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2plY3RzJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdFNuYWNrQmFyTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2plY3RzLmh0bWwnLFxuICBzdHlsZVVybDogJy4vcHJvamVjdHMuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3RzQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBvcnRmb2xpbyA9IGluamVjdChQb3J0Zm9saW9TZXJ2aWNlKTtcbiAgcHJpdmF0ZSByZWFkb25seSBkaWFsb2cgPSBpbmplY3QoTWF0RGlhbG9nKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzbmFjayA9IGluamVjdChNYXRTbmFja0Jhcik7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjdGl2ZUZpbHRlciA9IHNpZ25hbDxzdHJpbmc+KCdhbGwnKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZpbHRlcnMgPSBbXG4gICAgeyBpZDogJ2FsbCcsIGxhYmVsOiAnQWxsJyB9LFxuICAgIHsgaWQ6ICdmZWF0dXJlZCcsIGxhYmVsOiAnRmVhdHVyZWQnIH0sXG4gICAgeyBpZDogJ3NhYXMnLCBsYWJlbDogJ1NhYVMnIH0sXG4gICAgeyBpZDogJ2Rhc2hib2FyZCcsIGxhYmVsOiAnRGFzaGJvYXJkcycgfSxcbiAgICB7IGlkOiAnZWNvbW1lcmNlJywgbGFiZWw6ICdFLWNvbW1lcmNlJyB9LFxuICAgIHsgaWQ6ICdwd2EnLCBsYWJlbDogJ1BXQScgfSxcbiAgICB7IGlkOiAnd2ViJywgbGFiZWw6ICdXZWIgQXBwcycgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZmlsdGVyZWQgPSBjb21wdXRlZDxQcm9qZWN0W10+KCgpID0+IHtcbiAgICBjb25zdCBmID0gdGhpcy5hY3RpdmVGaWx0ZXIoKTtcbiAgICBpZiAoZiA9PT0gJ2FsbCcpIHJldHVybiB0aGlzLnBvcnRmb2xpby5wcm9qZWN0cztcbiAgICBpZiAoZiA9PT0gJ2ZlYXR1cmVkJykgcmV0dXJuIHRoaXMucG9ydGZvbGlvLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5mZWF0dXJlZCk7XG4gICAgcmV0dXJuIHRoaXMucG9ydGZvbGlvLnByb2plY3RzLmZpbHRlcigocCkgPT4gcC5jYXRlZ29yeSA9PT0gZik7XG4gIH0pO1xuXG4gIGdyYWRpZW50Rm9yKGltYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgICdncmFkaWVudC0xJzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEgMCUsICNlYzQ4OTkgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTInOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiAwJSwgI2VmNDQ0NCAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtMyc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDZiNmQ0IDAlLCAjM2I4MmY2IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC00JzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEgMCUsICMwNmI2ZDQgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTUnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiAwJSwgI2VjNDg5OSAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtNic6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjQzZjVlIDAlLCAjZjU5ZTBiIDEwMCUpJyxcbiAgICB9O1xuICAgIHJldHVybiBtYXBbaW1hZ2VdID8/ICd2YXIoLS1ncmFkaWVudC1wcmltYXJ5KSc7XG4gIH1cblxuICBzZXRGaWx0ZXIoaWQ6IHN0cmluZyk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlRmlsdGVyLnNldChpZCk7XG4gIH1cblxuICBvcGVuUHJvamVjdChwOiBQcm9qZWN0LCBldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIHRoaXMuZGlhbG9nLm9wZW4oUHJvamVjdERpYWxvZ0NvbXBvbmVudCwge1xuICAgICAgZGF0YTogcCxcbiAgICAgIG1heFdpZHRoOiAnOTAwcHgnLFxuICAgICAgd2lkdGg6ICc5NXZ3JyxcbiAgICAgIHBhbmVsQ2xhc3M6ICdwcm9qZWN0LWRpYWxvZy1wYW5lbCcsXG4gICAgICBhdXRvRm9jdXM6IGZhbHNlLFxuICAgIH0pO1xuICB9XG5cbiAgY29weUVtYWlsKGV2ZW50OiBFdmVudCk6IHZvaWQge1xuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XG4gICAgbmF2aWdhdG9yLmNsaXBib2FyZD8ud3JpdGVUZXh0KHRoaXMucG9ydGZvbGlvLmVtYWlsKTtcbiAgICB0aGlzLnNuYWNrLm9wZW4oJ0VtYWlsIGNvcGllZCB0byBjbGlwYm9hcmQhJywgJ+KckycsIHsgZHVyYXRpb246IDI1MDAgfSk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGlkPVwicHJvamVjdHNcIiBjbGFzcz1cInNlY3Rpb24gcHJvamVjdHNcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14XCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJldmVhbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+PGkgY2xhc3M9XCJiaSBiaS1icmllZmNhc2VcIj48L2k+IEZlYXR1cmVkIFdvcms8L3NwYW4+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+UHJvamVjdHMgdGhhdCA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5tYWRlIGFuIGltcGFjdDwvc3Bhbj48L2gyPlxuICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgIEEgc2VsZWN0aW9uIG9mIHByb2plY3RzIEkndmUgZGVzaWduZWQsIGJ1aWx0IGFuZCBzaGlwcGVkIHRvIHByb2R1Y3Rpb24uXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZmlsdGVyLWJhciByZXZlYWxcIj5cbiAgICAgIEBmb3IgKGYgb2YgZmlsdGVyczsgdHJhY2sgZi5pZCkge1xuICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgY2xhc3M9XCJmaWx0ZXItYnRuXCJcbiAgICAgICAgICBbY2xhc3MuYWN0aXZlXT1cImFjdGl2ZUZpbHRlcigpID09PSBmLmlkXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0RmlsdGVyKGYuaWQpXCI+XG4gICAgICAgICAge3sgZi5sYWJlbCB9fVxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0cy1ncmlkXCI+XG4gICAgICBAZm9yIChwIG9mIGZpbHRlcmVkKCk7IHRyYWNrIHAuaWQ7IGxldCBpID0gJGluZGV4KSB7XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwicHJvamVjdC1jYXJkIHJldmVhbFwiIFtzdHlsZS5hbmltYXRpb24tZGVsYXkubXNdPVwiaSAqIDgwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtaW1hZ2VcIiBbc3R5bGUuYmFja2dyb3VuZF09XCJncmFkaWVudEZvcihwLmltYWdlKVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImltYWdlLW92ZXJsYXlcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1wYXR0ZXJuXCI+PC9kaXY+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1jb250ZW50XCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwicHJvamVjdC15ZWFyXCI+e3sgcC55ZWFyIH19PC9zcGFuPlxuICAgICAgICAgICAgICBAaWYgKHAuZmVhdHVyZWQpIHtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImZlYXR1cmVkLXRhZ1wiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1zdGFyLWZpbGxcIj48L2k+IEZlYXR1cmVkXG4gICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWljb24tYmlnXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cIntcbiAgICAgICAgICAgICAgICAgICdiaS1ncmFwaC11cCc6IHAuY2F0ZWdvcnkgPT09ICdzYWFzJyxcbiAgICAgICAgICAgICAgICAgICdiaS1iYWctY2hlY2snOiBwLmNhdGVnb3J5ID09PSAnZWNvbW1lcmNlJyxcbiAgICAgICAgICAgICAgICAgICdiaS1iYXItY2hhcnQnOiBwLmNhdGVnb3J5ID09PSAnZGFzaGJvYXJkJyxcbiAgICAgICAgICAgICAgICAgICdiaS1nbG9iZSc6IHAuY2F0ZWdvcnkgPT09ICd3ZWInLFxuICAgICAgICAgICAgICAgICAgJ2JpLXBob25lJzogcC5jYXRlZ29yeSA9PT0gJ3B3YSdcbiAgICAgICAgICAgICAgICB9XCI+PC9pPlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC1hY3Rpb25zXCI+XG4gICAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICAgICAgICBjbGFzcz1cImFjdGlvbi1idG5cIlxuICAgICAgICAgICAgICAgIChjbGljayk9XCJvcGVuUHJvamVjdChwLCAkZXZlbnQpXCJcbiAgICAgICAgICAgICAgICBhcmlhLWxhYmVsPVwiVmlldyBkZXRhaWxzXCI+XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1hcnJvd3MtYW5nbGUtZXhwYW5kXCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgICAgQGlmIChwLmRlbW9VcmwpIHtcbiAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJwLmRlbW9VcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzPVwiYWN0aW9uLWJ0blwiIGFyaWEtbGFiZWw9XCJMaXZlIGRlbW9cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktYm94LWFycm93LXVwLXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAaWYgKHAucmVwb1VybCkge1xuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cInAucmVwb1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgY2xhc3M9XCJhY3Rpb24tYnRuXCIgYXJpYS1sYWJlbD1cIlNvdXJjZSBjb2RlXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtYm9keVwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInByb2plY3QtdGFnc1wiPlxuICAgICAgICAgICAgICBAZm9yICh0YWcgb2YgcC50YWdzLnNsaWNlKDAsIDMpOyB0cmFjayB0YWcpIHtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRhZ1wiPnt7IHRhZyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICBAaWYgKHAudGFncy5sZW5ndGggPiAzKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWcgbW9yZVwiPit7eyBwLnRhZ3MubGVuZ3RoIC0gMyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8aDMgY2xhc3M9XCJwcm9qZWN0LXRpdGxlXCI+e3sgcC50aXRsZSB9fTwvaDM+XG4gICAgICAgICAgICA8cCBjbGFzcz1cInByb2plY3QtZGVzY1wiPnt7IHAuc2hvcnREZXNjcmlwdGlvbiB9fTwvcD5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWZvb3RlclwiPlxuICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW9yZS1saW5rXCIgKGNsaWNrKT1cIm9wZW5Qcm9qZWN0KHAsICRldmVudClcIj5cbiAgICAgICAgICAgICAgICBWaWV3IGNhc2Ugc3R1ZHlcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWFycm93LXJpZ2h0XCI+PC9pPlxuICAgICAgICAgICAgICA8L2J1dHRvbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2FydGljbGU+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBJbmplY3QsIGluamVjdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1BVF9ESUFMT0dfREFUQSwgTWF0RGlhbG9nTW9kdWxlLCBNYXREaWFsb2dSZWYgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IFByb2plY3QgfSBmcm9tICcuLi8uLi8uLi8uLi8uLi9jb3JlL21vZGVscy9wcm9qZWN0Lm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXByb2plY3QtZGlhbG9nJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0RGlhbG9nTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vcHJvamVjdC1kaWFsb2cuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9wcm9qZWN0LWRpYWxvZy5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgUHJvamVjdERpYWxvZ0NvbXBvbmVudCB7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nUmVmID0gaW5qZWN0KE1hdERpYWxvZ1JlZjxQcm9qZWN0RGlhbG9nQ29tcG9uZW50Pik7XG5cbiAgY29uc3RydWN0b3IoQEluamVjdChNQVRfRElBTE9HX0RBVEEpIHB1YmxpYyBwcm9qZWN0OiBQcm9qZWN0KSB7fVxuXG4gIGdyYWRpZW50Rm9yKGltYWdlOiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgICdncmFkaWVudC0xJzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM2MzY2ZjEgMCUsICNlYzQ4OTkgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTInOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y1OWUwYiAwJSwgI2VmNDQ0NCAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtMyc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMDZiNmQ0IDAlLCAjM2I4MmY2IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC00JzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICMxMGI5ODEgMCUsICMwNmI2ZDQgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTUnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzhiNWNmNiAwJSwgI2VjNDg5OSAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtNic6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjZjQzZjVlIDAlLCAjZjU5ZTBiIDEwMCUpJyxcbiAgICB9O1xuICAgIHJldHVybiBtYXBbaW1hZ2VdID8/ICd2YXIoLS1ncmFkaWVudC1wcmltYXJ5KSc7XG4gIH1cblxuICBjbG9zZSgpOiB2b2lkIHtcbiAgICB0aGlzLmRpYWxvZ1JlZi5jbG9zZSgpO1xuICB9XG59XG4iLCI8ZGl2IGNsYXNzPVwiZGlhbG9nLWNvbnRhaW5lclwiPlxuICA8YnV0dG9uIGNsYXNzPVwiY2xvc2UtYnRuXCIgKGNsaWNrKT1cImNsb3NlKClcIiBhcmlhLWxhYmVsPVwiQ2xvc2VcIj5cbiAgICA8bWF0LWljb24+Y2xvc2U8L21hdC1pY29uPlxuICA8L2J1dHRvbj5cblxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWhlcm9cIiBbc3R5bGUuYmFja2dyb3VuZF09XCJncmFkaWVudEZvcihwcm9qZWN0LmltYWdlKVwiPlxuICAgIDxkaXYgY2xhc3M9XCJoZXJvLXBhdHRlcm5cIj48L2Rpdj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVyby1jb250ZW50XCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiaGVyby1tZXRhXCI+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YS1waWxsXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jYWxlbmRhcjNcIj48L2k+IHt7IHByb2plY3QueWVhciB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIDxzcGFuIGNsYXNzPVwibWV0YS1waWxsXCI+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS10YWctZmlsbFwiPjwvaT4ge3sgcHJvamVjdC5jYXRlZ29yeSB9fVxuICAgICAgICA8L3NwYW4+XG4gICAgICAgIEBpZiAocHJvamVjdC5jbGllbnQpIHtcbiAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGEtcGlsbFwiPlxuICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1idWlsZGluZ1wiPjwvaT4ge3sgcHJvamVjdC5jbGllbnQgfX1cbiAgICAgICAgICA8L3NwYW4+XG4gICAgICAgIH1cbiAgICAgIDwvZGl2PlxuICAgICAgPGgyIGNsYXNzPVwiZGlhbG9nLXRpdGxlXCI+e3sgcHJvamVjdC50aXRsZSB9fTwvaDI+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuXG4gIDxkaXYgY2xhc3M9XCJkaWFsb2ctYm9keVwiPlxuICAgIDxwIGNsYXNzPVwiZGlhbG9nLWRlc2NyaXB0aW9uXCI+e3sgcHJvamVjdC5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgIDxoNCBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj5cbiAgICAgIDxtYXQtaWNvbj5hdXRvX2F3ZXNvbWU8L21hdC1pY29uPiBLZXkgRmVhdHVyZXNcbiAgICA8L2g0PlxuICAgIDx1bCBjbGFzcz1cImZlYXR1cmVzLWxpc3RcIj5cbiAgICAgIEBmb3IgKGYgb2YgcHJvamVjdC5mZWF0dXJlczsgdHJhY2sgZikge1xuICAgICAgICA8bGk+XG4gICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jaGVjazItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgIDxzcGFuPnt7IGYgfX08L3NwYW4+XG4gICAgICAgIDwvbGk+XG4gICAgICB9XG4gICAgPC91bD5cblxuICAgIDxoNCBjbGFzcz1cInNlY3Rpb24tbGFiZWxcIj5cbiAgICAgIDxtYXQtaWNvbj5sYXllcnM8L21hdC1pY29uPiBUZWNoIFN0YWNrXG4gICAgPC9oND5cbiAgICA8ZGl2IGNsYXNzPVwidGFncy1ncmlkXCI+XG4gICAgICBAZm9yICh0IG9mIHByb2plY3QudGFnczsgdHJhY2sgdCkge1xuICAgICAgICA8c3BhbiBjbGFzcz1cInRlY2gtdGFnXCI+e3sgdCB9fTwvc3Bhbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJkaWFsb2ctYWN0aW9uc1wiPlxuICAgICAgQGlmIChwcm9qZWN0LmRlbW9VcmwpIHtcbiAgICAgICAgPGEgW2hyZWZdPVwicHJvamVjdC5kZW1vVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktYm94LWFycm93LXVwLXJpZ2h0XCI+PC9pPiBMaXZlIERlbW9cbiAgICAgICAgPC9hPlxuICAgICAgfVxuICAgICAgQGlmIChwcm9qZWN0LnJlcG9VcmwpIHtcbiAgICAgICAgPGEgW2hyZWZdPVwicHJvamVjdC5yZXBvVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzcz1cImJ0biBidG4tb3V0bGluZS1saWdodFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZ2l0aHViXCI+PC9pPiBTb3VyY2UgQ29kZVxuICAgICAgICA8L2E+XG4gICAgICB9XG4gICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi1naG9zdFwiIChjbGljayk9XCJjbG9zZSgpXCI+XG4gICAgICAgIDxpIGNsYXNzPVwiYmkgYmkteC1sZ1wiPjwvaT4gQ2xvc2VcbiAgICAgIDwvYnV0dG9uPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvZGl2PlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1leHBlcmllbmNlJyxcbiAgaW1wb3J0czogW0NvbW1vbk1vZHVsZSwgTWF0SWNvbk1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9leHBlcmllbmNlLmh0bWwnLFxuICBzdHlsZVVybDogJy4vZXhwZXJpZW5jZS5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgRXhwZXJpZW5jZUNvbXBvbmVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb3J0Zm9saW8gPSBpbmplY3QoUG9ydGZvbGlvU2VydmljZSk7XG5cbiAgcHJvdGVjdGVkIHR5cGVMYWJlbCh0OiBzdHJpbmcpOiBzdHJpbmcge1xuICAgIGNvbnN0IG1hcDogUmVjb3JkPHN0cmluZywgc3RyaW5nPiA9IHtcbiAgICAgICdmdWxsLXRpbWUnOiAnRnVsbC10aW1lJyxcbiAgICAgICdwYXJ0LXRpbWUnOiAnUGFydC10aW1lJyxcbiAgICAgIGNvbnRyYWN0OiAnQ29udHJhY3QnLFxuICAgICAgZnJlZWxhbmNlOiAnRnJlZWxhbmNlJyxcbiAgICB9O1xuICAgIHJldHVybiBtYXBbdF0gPz8gdDtcbiAgfVxufVxuIiwiPHNlY3Rpb24gaWQ9XCJleHBlcmllbmNlXCIgY2xhc3M9XCJzZWN0aW9uIGV4cGVyaWVuY2VcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14XCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJldmVhbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+PGkgY2xhc3M9XCJiaSBiaS1icmllZmNhc2VcIj48L2k+IEV4cGVyaWVuY2U8L3NwYW4+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+QSBqb3VybmV5IG9mIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPmdyb3d0aCAmIGltcGFjdDwvc3Bhbj48L2gyPlxuICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgIDMrIHllYXJzIGFjcm9zcyBwcm9kdWN0IGNvbXBhbmllcywgYWdlbmNpZXMgYW5kIGZyZWVsYW5jZSDigJQgYnVpbGRpbmcgcmVhbC13b3JsZCBhcHBzLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtbGluZVwiPjwvZGl2PlxuICAgICAgQGZvciAoZXhwIG9mIHBvcnRmb2xpby5leHBlcmllbmNlczsgdHJhY2sgZXhwLmlkOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtaXRlbSByZXZlYWxcIiBbY2xhc3MucmlnaHRdPVwiaSAlIDIgPT09IDFcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidGltZWxpbmUtZG90XCI+XG4gICAgICAgICAgICA8bWF0LWljb24+d29yazwvbWF0LWljb24+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLXRvcFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInBlcmlvZFwiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2FsZW5kYXIzXCI+PC9pPiB7eyBleHAucGVyaW9kIH19XG4gICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0eXBlLXBpbGxcIiBbY2xhc3NdPVwiJ3R5cGUtJyArIGV4cC50eXBlXCI+XG4gICAgICAgICAgICAgICAge3sgdHlwZUxhYmVsKGV4cC50eXBlKSB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicm9sZVwiPnt7IGV4cC5yb2xlIH19PC9oMz5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb21wYW55XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktYnVpbGRpbmdcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPnt7IGV4cC5jb21wYW55IH19PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvdC1zZXBcIj7Ctzwvc3Bhbj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1nZW8tYWx0XCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBleHAubG9jYXRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXNjcmlwdGlvblwiPnt7IGV4cC5kZXNjcmlwdGlvbiB9fTwvcD5cblxuICAgICAgICAgICAgPGg0IGNsYXNzPVwiYWNoaWV2ZS10aXRsZVwiPktleSBBY2hpZXZlbWVudHM8L2g0PlxuICAgICAgICAgICAgPHVsIGNsYXNzPVwiYWNoaWV2ZS1saXN0XCI+XG4gICAgICAgICAgICAgIEBmb3IgKGEgb2YgZXhwLmFjaGlldmVtZW50czsgdHJhY2sgYSkge1xuICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdHJvcGh5XCI+PC9pPlxuICAgICAgICAgICAgICAgICAgPHNwYW4+e3sgYSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L3VsPlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic3RhY2tcIj5cbiAgICAgICAgICAgICAgQGZvciAocyBvZiBleHAuc3RhY2s7IHRyYWNrIHMpIHtcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0YWNrLXBpbGxcIj57eyBzIH19PC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICB9XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIiwiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5pbXBvcnQgeyBUZXN0aW1vbmlhbCB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvbW9kZWxzL3Rlc3RpbW9uaWFsLm1vZGVsJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXRlc3RpbW9uaWFscycsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vdGVzdGltb25pYWxzLmh0bWwnLFxuICBzdHlsZVVybDogJy4vdGVzdGltb25pYWxzLnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBUZXN0aW1vbmlhbHNDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9ydGZvbGlvID0gaW5qZWN0KFBvcnRmb2xpb1NlcnZpY2UpO1xuXG4gIHByb3RlY3RlZCBzdGFyc0FycmF5KG46IG51bWJlcik6IG51bWJlcltdIHtcbiAgICByZXR1cm4gQXJyYXkuZnJvbSh7IGxlbmd0aDogbiB9LCAoXywgaSkgPT4gaSk7XG4gIH1cblxuICB0cmFja0J5SWQoXzogbnVtYmVyLCB0OiBUZXN0aW1vbmlhbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIHQuaWQ7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGlkPVwidGVzdGltb25pYWxzXCIgY2xhc3M9XCJzZWN0aW9uIHRlc3RpbW9uaWFsc1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcmV2ZWFsXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImV5ZWJyb3dcIj48aSBjbGFzcz1cImJpIGJpLWNoYXQtcXVvdGVcIj48L2k+IFRlc3RpbW9uaWFsczwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5XaGF0IDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPmNsaWVudHMgJiB0ZWFtczwvc3Bhbj4gc2F5PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICBIb25lc3QgZmVlZGJhY2sgZnJvbSBwZW9wbGUgSSd2ZSBoYWQgdGhlIHBsZWFzdXJlIHRvIHdvcmsgd2l0aC5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0ZXN0aW1vbmlhbHMtZ3JpZFwiPlxuICAgICAgQGZvciAodCBvZiBwb3J0Zm9saW8udGVzdGltb25pYWxzOyB0cmFjayB0LmlkOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInRlc3RpbW9uaWFsLWNhcmQgcmV2ZWFsXCIgW3N0eWxlLmFuaW1hdGlvbi1kZWxheS5tc109XCJpICogMTAwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInF1b3RlLWljb25cIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj5mb3JtYXRfcXVvdGU8L21hdC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInJhdGluZ1wiPlxuICAgICAgICAgICAgQGZvciAocyBvZiBzdGFyc0FycmF5KHQucmF0aW5nKTsgdHJhY2sgJGluZGV4KSB7XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc3Rhci1maWxsXCI+PC9pPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJtZXNzYWdlXCI+XCJ7eyB0Lm1lc3NhZ2UgfX1cIjwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdXRob3JcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJhdmF0YXJcIj57eyB0LmF2YXRhciB9fTwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvci1pbmZvXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cIm5hbWVcIj57eyB0Lm5hbWUgfX08L2g0PlxuICAgICAgICAgICAgICA8cCBjbGFzcz1cInJvbGVcIj57eyB0LnJvbGUgfX0gwrcge3sgdC5jb21wYW55IH19PC9wPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvYXJ0aWNsZT5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgc2lnbmFsIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgRm9ybUJ1aWxkZXIsIFJlYWN0aXZlRm9ybXNNb2R1bGUsIFZhbGlkYXRvcnMgfSBmcm9tICdAYW5ndWxhci9mb3Jtcyc7XG5pbXBvcnQgeyBNYXRGb3JtRmllbGRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9mb3JtLWZpZWxkJztcbmltcG9ydCB7IE1hdElucHV0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaW5wdXQnO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdEljb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pY29uJztcbmltcG9ydCB7IE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3Byb2dyZXNzLXNwaW5uZXInO1xuaW1wb3J0IHsgTWF0U2VsZWN0TW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc2VsZWN0JztcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1jb250YWN0JyxcbiAgaW1wb3J0czogW1xuICAgIENvbW1vbk1vZHVsZSxcbiAgICBSZWFjdGl2ZUZvcm1zTW9kdWxlLFxuICAgIE1hdEZvcm1GaWVsZE1vZHVsZSxcbiAgICBNYXRJbnB1dE1vZHVsZSxcbiAgICBNYXRCdXR0b25Nb2R1bGUsXG4gICAgTWF0SWNvbk1vZHVsZSxcbiAgICBNYXRQcm9ncmVzc1NwaW5uZXJNb2R1bGUsXG4gICAgTWF0U2VsZWN0TW9kdWxlLFxuICAgIE1hdFNuYWNrQmFyTW9kdWxlLFxuICBdLFxuICB0ZW1wbGF0ZVVybDogJy4vY29udGFjdC5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2NvbnRhY3Quc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIENvbnRhY3RDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9ydGZvbGlvID0gaW5qZWN0KFBvcnRmb2xpb1NlcnZpY2UpO1xuICBwcml2YXRlIHJlYWRvbmx5IGZiID0gaW5qZWN0KEZvcm1CdWlsZGVyKTtcbiAgcHJpdmF0ZSByZWFkb25seSBzbmFjayA9IGluamVjdChNYXRTbmFja0Jhcik7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGxvYWRpbmcgPSBzaWduYWwoZmFsc2UpO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgc3VibWl0dGVkID0gc2lnbmFsKGZhbHNlKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgZm9ybSA9IHRoaXMuZmIubm9uTnVsbGFibGUuZ3JvdXAoe1xuICAgIG5hbWU6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDIpXV0sXG4gICAgZW1haWw6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMuZW1haWxdXSxcbiAgICBzdWJqZWN0OiBbJycsIFtWYWxpZGF0b3JzLnJlcXVpcmVkLCBWYWxpZGF0b3JzLm1pbkxlbmd0aCg0KV1dLFxuICAgIG1lc3NhZ2U6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDEwKV1dLFxuICAgIGJ1ZGdldDogWydub3Qtc3VyZSddLFxuICB9KTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgYnVkZ2V0T3B0aW9ucyA9IFtcbiAgICB7IHZhbHVlOiAnbm90LXN1cmUnLCBsYWJlbDogJ05vdCBzdXJlIHlldCcgfSxcbiAgICB7IHZhbHVlOiAnPDFrJywgbGFiZWw6ICc8ICQxLDAwMCcgfSxcbiAgICB7IHZhbHVlOiAnMWstNWsnLCBsYWJlbDogJyQxayDigJQgJDVrJyB9LFxuICAgIHsgdmFsdWU6ICc1ay0xNWsnLCBsYWJlbDogJyQ1ayDigJQgJDE1aycgfSxcbiAgICB7IHZhbHVlOiAnMTVrKycsIGxhYmVsOiAnJDE1aysnIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGNvbnRhY3RJbmZvID0gW1xuICAgIHtcbiAgICAgIGljb246ICdiaS1lbnZlbG9wZS1hdCcsXG4gICAgICBsYWJlbDogJ0VtYWlsJyxcbiAgICAgIHZhbHVlOiAnYWhtZWQuaGFzc2FuLmRldkBleGFtcGxlLmNvbScsXG4gICAgICBocmVmOiAnbWFpbHRvOmFobWVkLmhhc3Nhbi5kZXZAZXhhbXBsZS5jb20nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2JpLXRlbGVwaG9uZScsXG4gICAgICBsYWJlbDogJ1Bob25lJyxcbiAgICAgIHZhbHVlOiAnKzIwIDEwMCAxMjMgNDU2NycsXG4gICAgICBocmVmOiAndGVsOisyMDEwMDEyMzQ1NjcnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2JpLWdlby1hbHQnLFxuICAgICAgbGFiZWw6ICdMb2NhdGlvbicsXG4gICAgICB2YWx1ZTogJ0NhaXJvLCBFZ3lwdCDCtyBSZW1vdGUgT0snLFxuICAgICAgaHJlZjogJyMnLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2JpLWNsb2NrJyxcbiAgICAgIGxhYmVsOiAnV29ya2luZyBob3VycycsXG4gICAgICB2YWx1ZTogJ1N1biDigJQgVGh1IMK3IDkgQU0g4oCUIDYgUE0gKEdNVCsyKScsXG4gICAgICBocmVmOiAnIycsXG4gICAgfSxcbiAgXTtcblxuICBzdWJtaXQoKTogdm9pZCB7XG4gICAgaWYgKHRoaXMuZm9ybS5pbnZhbGlkKSB7XG4gICAgICB0aGlzLmZvcm0ubWFya0FsbEFzVG91Y2hlZCgpO1xuICAgICAgdGhpcy5zbmFjay5vcGVuKCdQbGVhc2UgZmlsbCBpbiBhbGwgcmVxdWlyZWQgZmllbGRzIGNvcnJlY3RseS4nLCAnR290IGl0JywgeyBkdXJhdGlvbjogMzUwMCB9KTtcbiAgICAgIHJldHVybjtcbiAgICB9XG5cbiAgICB0aGlzLmxvYWRpbmcuc2V0KHRydWUpO1xuICAgIC8vIFNpbXVsYXRlIHNlbmRpbmdcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHRoaXMubG9hZGluZy5zZXQoZmFsc2UpO1xuICAgICAgdGhpcy5zdWJtaXR0ZWQuc2V0KHRydWUpO1xuICAgICAgdGhpcy5zbmFjay5vcGVuKCfwn46JIE1lc3NhZ2Ugc2VudCEgSSB3aWxsIGdldCBiYWNrIHRvIHlvdSB3aXRoaW4gMjQgaG91cnMuJywgJ09LJywge1xuICAgICAgICBkdXJhdGlvbjogNTAwMCxcbiAgICAgIH0pO1xuICAgICAgdGhpcy5mb3JtLnJlc2V0KHsgbmFtZTogJycsIGVtYWlsOiAnJywgc3ViamVjdDogJycsIG1lc3NhZ2U6ICcnLCBidWRnZXQ6ICdub3Qtc3VyZScgfSk7XG4gICAgICBzZXRUaW1lb3V0KCgpID0+IHRoaXMuc3VibWl0dGVkLnNldChmYWxzZSksIDYwMDApO1xuICAgIH0sIDE1MDApO1xuICB9XG59XG4iLCI8c2VjdGlvbiBpZD1cImNvbnRhY3RcIiBjbGFzcz1cInNlY3Rpb24gY29udGFjdFwiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwidGV4dC1jZW50ZXIgcmV2ZWFsXCI+XG4gICAgICA8c3BhbiBjbGFzcz1cImV5ZWJyb3dcIj48aSBjbGFzcz1cImJpIGJpLXNlbmRcIj48L2k+IEdldCBpbiB0b3VjaDwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5MZXQncyBidWlsZCBzb21ldGhpbmcgPHNwYW4gY2xhc3M9XCJncmFkaWVudC10ZXh0XCI+YW1hemluZyB0b2dldGhlcjwvc3Bhbj48L2gyPlxuICAgICAgPHAgY2xhc3M9XCJzZWN0aW9uLXN1YnRpdGxlXCI+XG4gICAgICAgIEhhdmUgYSBwcm9qZWN0IGluIG1pbmQsIGEgam9iIG9wcG9ydHVuaXR5LCBvciBqdXN0IHdhbnQgdG8gc2F5IGhpPyBEcm9wIG1lIGEgbWVzc2FnZS5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJyb3cgZy00IGNvbnRhY3Qtcm93XCI+XG4gICAgICA8IS0tIENvbnRhY3QgaW5mbyAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNSByZXZlYWxcIj5cbiAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tY2FyZFwiPlxuICAgICAgICAgIDxoMyBjbGFzcz1cImluZm8tdGl0bGVcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPnt7IHBvcnRmb2xpby5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgIDwvaDM+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLXN1YlwiPnt7IHBvcnRmb2xpby5yb2xlIH19PC9wPlxuICAgICAgICAgIDxwIGNsYXNzPVwiaW5mby10ZXh0XCI+XG4gICAgICAgICAgICBJJ20gYWx3YXlzIG9wZW4gdG8gZGlzY3Vzc2luZyBwcm9kdWN0IGRlc2lnbiwgZGV2ZWxvcG1lbnQgd29yaywgb3JcbiAgICAgICAgICAgIHBhcnRuZXJzaGlwIG9wcG9ydHVuaXRpZXMuIExldCdzIGNoYXQhXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8tbGlzdFwiPlxuICAgICAgICAgICAgQGZvciAoaXRlbSBvZiBjb250YWN0SW5mbzsgdHJhY2sgaXRlbS5sYWJlbCkge1xuICAgICAgICAgICAgICA8YSBbaHJlZl09XCJpdGVtLmhyZWZcIiBjbGFzcz1cImluZm8taXRlbVwiPlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmlcIiBbbmdDbGFzc109XCJpdGVtLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby1sYWJlbFwiPnt7IGl0ZW0ubGFiZWwgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImluZm8tdmFsdWVcIj57eyBpdGVtLnZhbHVlIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic29jaWFsLXN0cmlwXCI+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInN0cmlwLWxhYmVsXCI+RmluZCBtZSBvbjwvc3Bhbj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzdHJpcC1pY29uc1wiPlxuICAgICAgICAgICAgICBAZm9yIChzIG9mIHBvcnRmb2xpby5zb2NpYWxzOyB0cmFjayBzLnVybCkge1xuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cInMudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzcz1cInN0cmlwLWljb25cIiBbYXR0ci5hcmlhLWxhYmVsXT1cInMubmFtZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cInMuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8IS0tIEZvcm0gLS0+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTcgcmV2ZWFsXCI+XG4gICAgICAgIDxmb3JtIGNsYXNzPVwiY29udGFjdC1mb3JtXCIgW2Zvcm1Hcm91cF09XCJmb3JtXCIgKG5nU3VibWl0KT1cInN1Ym1pdCgpXCIgbm92YWxpZGF0ZT5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC02XCI+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPllvdXIgbmFtZSAqPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIm5hbWVcIiBwbGFjZWhvbGRlcj1cIkpvaG4gRG9lXCIgYXV0b2NvbXBsZXRlPVwibmFtZVwiIC8+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5wZXJzb248L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIEBpZiAoZm9ybS5nZXQoJ25hbWUnKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgZm9ybS5nZXQoJ25hbWUnKT8udG91Y2hlZCkge1xuICAgICAgICAgICAgICAgICAgPG1hdC1lcnJvcj5OYW1lIGlzIHJlcXVpcmVkPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+RW1haWwgKjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCB0eXBlPVwiZW1haWxcIiBmb3JtQ29udHJvbE5hbWU9XCJlbWFpbFwiIHBsYWNlaG9sZGVyPVwieW91QGV4YW1wbGUuY29tXCIgYXV0b2NvbXBsZXRlPVwiZW1haWxcIiAvPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXg+ZW1haWw8L21hdC1pY29uPlxuICAgICAgICAgICAgICAgIEBpZiAoZm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIGZvcm0uZ2V0KCdlbWFpbCcpPy50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICA8bWF0LWVycm9yPkVtYWlsIGlzIHJlcXVpcmVkPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIEBpZiAoZm9ybS5nZXQoJ2VtYWlsJyk/Lmhhc0Vycm9yKCdlbWFpbCcpICYmIGZvcm0uZ2V0KCdlbWFpbCcpPy50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICA8bWF0LWVycm9yPlBsZWFzZSBlbnRlciBhIHZhbGlkIGVtYWlsPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8L21hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicm93IGctM1wiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC04XCI+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPlN1YmplY3QgKjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxpbnB1dCBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJzdWJqZWN0XCIgcGxhY2Vob2xkZXI9XCJQcm9qZWN0IGNvbGxhYm9yYXRpb25cIiAvPlxuICAgICAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXg+c3ViamVjdDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgQGlmIChmb3JtLmdldCgnc3ViamVjdCcpPy5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBmb3JtLmdldCgnc3ViamVjdCcpPy50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICA8bWF0LWVycm9yPlN1YmplY3QgaXMgcmVxdWlyZWQ8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNFwiPlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5CdWRnZXQ8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8bWF0LXNlbGVjdCBmb3JtQ29udHJvbE5hbWU9XCJidWRnZXRcIj5cbiAgICAgICAgICAgICAgICAgIEBmb3IgKG9wdCBvZiBidWRnZXRPcHRpb25zOyB0cmFjayBvcHQudmFsdWUpIHtcbiAgICAgICAgICAgICAgICAgICAgPG1hdC1vcHRpb24gW3ZhbHVlXT1cIm9wdC52YWx1ZVwiPnt7IG9wdC5sYWJlbCB9fTwvbWF0LW9wdGlvbj5cbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA8L21hdC1zZWxlY3Q+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5wYXltZW50czwvbWF0LWljb24+XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDxtYXQtbGFiZWw+WW91ciBtZXNzYWdlICo8L21hdC1sYWJlbD5cbiAgICAgICAgICAgIDx0ZXh0YXJlYSBtYXRJbnB1dCBmb3JtQ29udHJvbE5hbWU9XCJtZXNzYWdlXCIgcm93cz1cIjVcIiBwbGFjZWhvbGRlcj1cIlRlbGwgbWUgYWJvdXQgeW91ciBwcm9qZWN0Li4uXCI+PC90ZXh0YXJlYT5cbiAgICAgICAgICAgIDxtYXQtaWNvbiBtYXRQcmVmaXg+Y2hhdDwvbWF0LWljb24+XG4gICAgICAgICAgICBAaWYgKGZvcm0uZ2V0KCdtZXNzYWdlJyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIGZvcm0uZ2V0KCdtZXNzYWdlJyk/LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgPG1hdC1lcnJvcj5NZXNzYWdlIGlzIHJlcXVpcmVkPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBAaWYgKGZvcm0uZ2V0KCdtZXNzYWdlJyk/Lmhhc0Vycm9yKCdtaW5sZW5ndGgnKSAmJiBmb3JtLmdldCgnbWVzc2FnZScpPy50b3VjaGVkKSB7XG4gICAgICAgICAgICAgIDxtYXQtZXJyb3I+QXQgbGVhc3QgMTAgY2hhcmFjdGVyczwvbWF0LWVycm9yPlxuICAgICAgICAgICAgfVxuICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZm9ybS1hY3Rpb25zXCI+XG4gICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgIHR5cGU9XCJzdWJtaXRcIlxuICAgICAgICAgICAgICBjbGFzcz1cImJ0biBidG4tcHJpbWFyeSBzdWJtaXQtYnRuXCJcbiAgICAgICAgICAgICAgW2Rpc2FibGVkXT1cImxvYWRpbmcoKVwiPlxuICAgICAgICAgICAgICBAaWYgKGxvYWRpbmcoKSkge1xuICAgICAgICAgICAgICAgIDxtYXQtc3Bpbm5lciBkaWFtZXRlcj1cIjE4XCIgbW9kZT1cImluZGV0ZXJtaW5hdGVcIj48L21hdC1zcGlubmVyPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXMtMlwiPlNlbmRpbmfigKY8L3NwYW4+XG4gICAgICAgICAgICAgIH0gQGVsc2UgaWYgKHN1Ym1pdHRlZCgpKSB7XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1jaGVjazItY2lyY2xlXCI+PC9pPlxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXMtMlwiPlNlbnQhPC9zcGFuPlxuICAgICAgICAgICAgICB9IEBlbHNlIHtcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXNlbmRcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0yXCI+U2VuZCBNZXNzYWdlPC9zcGFuPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2J1dHRvbj5cblxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJyZXNwb25zZS10aW1lXCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktbGlnaHRuaW5nLWNoYXJnZVwiPjwvaT5cbiAgICAgICAgICAgICAgVXN1YWxseSByZXNwb25kcyB3aXRoaW4gMjRoXG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZm9ybT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiJdLCJtYXBwaW5ncyI6Ijs7Ozs7QUFBQSxTQUFTLGFBQUFBLGtCQUF5Qjs7O0FFQWxDLFNBQVMsV0FBVyxRQUFRLGNBQWlDO0FBQzdELFNBQVMsb0JBQW9CO0FBQzdCLFNBQVMscUJBQXFCO0FBQzlCLFNBQVMsdUJBQXVCOzs7Ozs7aUJDNEVmLFdBQVcsY0FB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V0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsR0FBQSxPQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxZQUFBLEdBQUEsT0FBQSxtQkFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLGFBQUEsR0FBQSxDQUFBLHNCQUFBLElBQUEsR0FBQSxPQUFBLGFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxVQUFBLFVBQUEsT0FBQSxZQUFBLEdBQUEsZUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxTQUFBLGFBQUEsR0FBQSxrQkFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxpQkFBQSxHQUFBLENBQUEsR0FBQSxpQkFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsaUJBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLGtCQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxXQUFBLEdBQUEsQ0FBQSxRQUFBLFVBQUEsY0FBQSxtQkFBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxjQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHVCQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDWjFCLE1BQUEsNEJBQUEsR0FBQSxXQUFBLENBQUEsRUFBZ0MsR0FBQSxPQUFBLENBQUEsRUFDTCxHQUFBLE9BQUEsQ0FBQSxFQUMwQixHQUFBLE9BQUEsQ0FBQSxFQUN6QixHQUFBLE9BQUEsQ0FBQSxFQUNhLEdBQUEsUUFBQSxDQUFBLEVBQ1QsR0FBQSxRQUFBLENBQUE7QUFDRCxNQUFBLG9CQUFBLEdBQUEsV0FBQTtBQUFFLE1BQUEsMEJBQUE7QUFBUSxNQUFBLG9CQUFBLEdBQUEsMkJBQUE7QUFDL0IsTUFBQSwwQkFBQTtBQUVBLE1BQUEsNEJBQUEsR0FBQSxNQUFBLENBQUE7QUFDRSxNQUFBLG9CQUFBLElBQUEsV0FBQTtBQUFRLE1BQUEsNEJBQUEsSUFBQSxRQUFBLENBQUE7QUFBNEIsTUFBQSxvQkFBQSxFQUFBO0FBQW9CLE1BQUEsMEJBQUE7QUFDeEQsTUFBQSx1QkFBQSxJQUFBLElBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsUUFBQSxDQUFBO0FBQ0UsTUFBQSxvQkFBQSxJQUFBLEtBQUE7QUFBRSxNQUFBLDRCQUFBLElBQUEsUUFBQSxFQUFBO0FBQW9CLE1BQUEsb0JBQUEsRUFBQTtBQUFtQixNQUFBLDBCQUFBO0FBQU8sTUFBQSw0QkFBQSxJQUFBLFFBQUEsRUFBQTtBQUFxQixNQUFBLG9CQUFBLElBQUEsR0FBQTtBQUFDLE1BQUEsMEJBQUEsRUFBTyxFQUN4RTtBQUdULE1BQUEsNEJBQUEsSUFBQSxLQUFBLEVBQUE7QUFDRSxNQUFBLG9CQUFBLEVBQUE7QUFDRixNQUFBLDBCQUFBO0FBRUEsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUF1QixJQUFBLE9BQUEsRUFBQTtBQUVuQixNQUFBLHVCQUFBLElBQUEsS0FBQSxFQUFBO0FBQ0EsTUFBQSw0QkFBQSxJQUFBLE1BQUE7QUFBTSxNQUFBLG9CQUFBLEVBQUE7QUFBd0IsTUFBQSwwQkFBQSxFQUFPO0FBRXZDLE1BQUEsNEJBQUEsSUFBQSxPQUFBLEVBQUE7QUFDRSxNQUFBLHVCQUFBLElBQUEsS0FBQSxFQUFBO0FBQ0EsTUFBQSw0QkFBQSxJQUFBLE1BQUE7QUFBTSxNQUFBLG9CQUFBLElBQUEsMkNBQUE7QUFBeUMsTUFBQSwwQkFBQSxFQUFPLEVBQ2xEO0FBR1IsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUFzQixJQUFBLEtBQUEsRUFBQTtBQUVsQixNQUFBLHVCQUFBLElBQUEsS0FBQSxFQUFBO0FBQ0EsTUFBQSxvQkFBQSxJQUFBLGdCQUFBO0FBQ0YsTUFBQSwwQkFBQTtBQUNBLE1BQUEsNEJBQUEsSUFBQSxLQUFBLEVBQUE7QUFDRSxNQUFBLHVCQUFBLElBQUEsS0FBQSxFQUFBO0FBQ0EsTUFBQSxvQkFBQSxJQUFBLGdCQUFBO0FBQ0YsTUFBQSwwQkFBQTtBQUNBLE1BQUEsNEJBQUEsSUFBQSxLQUFBLEVBQUEsRUFBaUYsSUFBQSxVQUFBO0FBQ3JFLE1BQUEsb0JBQUEsSUFBQSxVQUFBO0FBQVEsTUFBQSwwQkFBQTtBQUNsQixNQUFBLG9CQUFBLElBQUEsZUFBQTtBQUNGLE1BQUEsMEJBQUEsRUFBSTtBQUdOLE1BQUEsNEJBQUEsSUFBQSxPQUFBLEVBQUEsRUFBMEIsSUFBQSxRQUFBLEVBQUE7QUFDSSxNQUFBLG9CQUFBLElBQUEsV0FBQTtBQUFTLE1BQUEsMEJBQUE7QUFDckMsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUNFLE1BQUEsOEJBQUEsSUFBQSwrQkFBQSxHQUFBLEdBQUEsS0FBQSxJQUFBLFVBQUE7QUFLRixNQUFBLDBCQUFBLEVBQU0sRUFDRixFQUNGO0FBR1IsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQSxFQUFzQixJQUFBLE9BQUEsRUFBQSxFQUNZLElBQUEsT0FBQSxFQUFBO0FBRTVCLE1BQUEsdUJBQUEsSUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBLEVBQTBCLElBQUEsT0FBQSxFQUFBO0FBRXRCLE1BQUEsdUJBQUEsSUFBQSxPQUFBLEVBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBLEVBQW9CLElBQUEsUUFBQSxFQUFBO0FBQ1ksTUFBQSxvQkFBQSxFQUFBO0FBQThCLE1BQUEsMEJBQUEsRUFBTztBQUVyRSxNQUFBLHVCQUFBLElBQUEsT0FBQSxFQUFBO0FBQ0YsTUFBQSwwQkFBQTtBQUVBLE1BQUEsNEJBQUEsSUFBQSxPQUFBLEVBQUEsRUFBc0IsSUFBQSxNQUFBLEVBQUE7QUFDQyxNQUFBLG9CQUFBLEVBQUE7QUFBb0IsTUFBQSwwQkFBQTtBQUN6QyxNQUFBLDRCQUFBLElBQUEsS0FBQSxFQUFBO0FBQW9CLE1BQUEsb0JBQUEsRUFBQTtBQUFvQixNQUFBLDBCQUFBLEVBQUk7QUFHOUMsTUFBQSw0QkFBQSxJQUFBLE9BQUEsRUFBQTtBQUNFLE1BQUEsOEJBQUEsSUFBQSwrQkFBQSxHQUFBLEdBQUEsUUFBQSxJQUFBLHNDQUFBO0FBR0YsTUFBQSwwQkFBQTtBQUVBLE1BQUEsNEJBQUEsSUFBQSxPQUFBLEVBQUE7QUFDRSxNQUFBLDhCQUFBLElBQUEsK0JBQUEsR0FBQSxHQUFBLE9BQUEsSUFBQSxVQUFBO0FBU0YsTUFBQSwwQkFBQSxFQUFNLEVBQ0Y7QUFHUixNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBQWtDLE1BQUEsdUJBQUEsSUFBQSxLQUFBLEVBQUE7QUFBa0MsTUFBQSwwQkFBQTtBQUNwRSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBQWtDLE1BQUEsdUJBQUEsSUFBQSxLQUFBLEVBQUE7QUFBbUMsTUFBQSwwQkFBQTtBQUNyRSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBQWtDLE1BQUEsdUJBQUEsSUFBQSxLQUFBLEVBQUE7QUFBbUMsTUFBQSwwQkFBQTtBQUNyRSxNQUFBLDRCQUFBLElBQUEsT0FBQSxFQUFBO0FBQWtDLE1BQUEsdUJBQUEsSUFBQSxLQUFBLEVBQUE7QUFBNEIsTUFBQSwwQkFBQSxFQUFNLEVBQ2hFLEVBQ0YsRUFDRjtBQUdSLE1BQUEsNEJBQUEsSUFBQSxLQUFBLEVBQUEsRUFBaUUsSUFBQSxRQUFBLEVBQUE7QUFFN0QsTUFBQSx1QkFBQSxJQUFBLFFBQUEsRUFBQTtBQUNGLE1BQUEsMEJBQUE7QUFDQSxNQUFBLDRCQUFBLElBQUEsUUFBQSxFQUFBO0FBQXVCLE1BQUEsb0JBQUEsSUFBQSxRQUFBO0FBQU0sTUFBQSwwQkFBQSxFQUFPLEVBQ2xDOzs7QUF0RzBDLE1BQUEsdUJBQUEsRUFBQTtBQUFBLE1BQUEsK0JBQUEsSUFBQSxVQUFBLElBQUE7QUFHWixNQUFBLHVCQUFBLENBQUE7QUFBQSxNQUFBLCtCQUFBLElBQUEsWUFBQSxDQUFBO0FBS3hCLE1BQUEsdUJBQUEsQ0FBQTtBQUFBLE1BQUEsZ0NBQUEsS0FBQSxJQUFBLFVBQUEsU0FBQSxHQUFBO0FBTVEsTUFBQSx1QkFBQSxDQUFBO0FBQUEsTUFBQSwrQkFBQSxJQUFBLFVBQUEsUUFBQTtBQWlCTCxNQUFBLHVCQUFBLEVBQUE7QUFBQSxNQUFBLHdCQUFBLFFBQUEsWUFBQSxJQUFBLFVBQUEsT0FBQSwwQkFBQTtBQVNELE1BQUEsdUJBQUEsQ0FBQTtBQUFBLE1BQUEsd0JBQUEsSUFBQSxVQUFBLFFBQUEsTUFBd0IsR0FBRyxDQUFDLENBQUM7QUFrQkssTUFBQSx1QkFBQSxFQUFBO0FBQUEsTUFBQSwrQkFBQSxJQUFBLFVBQUEsY0FBQTtBQU1YLE1BQUEsdUJBQUEsQ0FBQTtBQUFBLE1BQUEsK0JBQUEsSUFBQSxVQUFBLElBQUE7QUFDRCxNQUFBLHVCQUFBLENBQUE7QUFBQSxNQUFBLCtCQUFBLElBQUEsVUFBQSxJQUFBO0FBSXBCLE1BQUEsdUJBQUEsQ0FBQTtBQUFBLE1BQUEsd0JBQUEsNkJBQUEsR0FBQSxHQUFBLENBQUE7QUFNQSxNQUFBLHVCQUFBLENBQUE7QUFBQSxNQUFBLHdCQUFBLElBQUEsVUFBQSxLQUFBOztvQkQ3RUosY0FBWSxZQUFBLHNCQUFBLFlBQUEsU0FBQSxxQkFBQSxZQUFBLGFBQUEsaUJBQUEsb0JBQUEsYUFBQSxpQkFBRSxlQUFhLFlBQUEsUUFBRSxpQkFBZSxjQUFBLHFCQUFBLGtCQUFBLGlCQUFBLGNBQUEsa0JBQUEsa0JBQUEsYUFBQSxjQUFBLGdCQUFBLGdCQUFBLGtCQUFBLGlCQUFBLGFBQUEsbUJBQUEsbUJBQUEsZUFBQSxHQUFBLFFBQUEsQ0FBQSwrNFZBQUEsRUFBQSxDQUFBOzs7K0VBSTNDLGVBQWEsQ0FBQTtVQU56Qjt1QkFDVyxZQUFVLFNBQ1gsQ0FBQyxjQUFjLGVBQWUsZUFBZSxHQUFDLFVBQUE7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztHQUFBLFFBQUEsQ0FBQSxzblNBQUEsRUFBQSxDQUFBOzs7O2dGQUk1QyxlQUFhLEVBQUEsV0FBQSxpQkFBQSxVQUFBLDRDQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7Ozs4REFBYixlQUFhLEVBQUEsU0FBQSxDQUFBLElBQUEsSUFBQSxJQUFBLElBQUEsRUFBQSxHQUFBLENBQUEsY0FBQSxlQUFBLGlCQUFBLFNBQUEsR0FBQSxhQUFBLEVBQUEsQ0FBQTtFQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxjQUFBLHNCQUFBLEtBQUEsSUFBQSxDQUFBO0FBQUEsR0FBQSxPQUFBLGNBQUEsZUFBQSxlQUFBLFlBQUEsT0FBQSxZQUFBLElBQUEsR0FBQSw0QkFBQSxPQUFBLEVBQUEsT0FBQSxNQUFBLHNCQUFBLEVBQUEsU0FBQSxDQUFBO0FBQUEsR0FBQTs7O0FFWjFCLFNBQVMsYUFBQUMsWUFBVyxVQUFBQyxlQUFjO0FBQ2xDLFNBQVMsZ0JBQUFDLHFCQUFvQjtBQUM3QixTQUFTLGlCQUFBQyxzQkFBcUI7Ozs7Ozs7O0FDNERoQixJQUFBLDZCQUFBLEdBQUEsT0FBQSxFQUFBLEVBQXVCLEdBQUEsT0FBQSxFQUFBO0FBRW5CLElBQUEsd0JBQUEsR0FBQSxLQUFBLEVBQUE7QUFDRixJQUFBLDJCQUFBO0FBQ0EsSUFBQSw2QkFBQSxHQUFBLE9BQUEsRUFBQSxFQUFvQixHQUFBLE1BQUEsRUFBQTtBQUNFLElBQUEscUJBQUEsQ0FBQTtBQUFhLElBQUEsMkJBQUE7QUFDakMsSUFBQSw2QkFBQSxHQUFBLEtBQUEsRUFBQTtBQUFrQixJQUFBLHFCQUFBLENBQUE7QUFBWSxJQUFBLDJCQUFBLEVBQUksRUFDOUI7Ozs7QUFMVSxJQUFBLHdCQUFBLENBQUE7QUFBQSxJQUFBLHlCQUFBLFdBQUEsS0FBQSxJQUFBO0FBR00sSUFBQSx3QkFBQSxDQUFBO0FBQUEsSUFBQSxnQ0FBQSxLQUFBLEtBQUE7QUFDRixJQUFBLHdCQUFBLENBQUE7QUFBQSxJQUFBLGdDQUFBLEtBQUEsSUFBQTs7O0FEbkQ5QixJQUFPLGlCQUFQLE1BQU8sZ0JBQWM7RUFDTixZQUFZQyxRQUFPLGdCQUFnQjtFQUVuQyxhQUEwQjtJQUMzQztNQUNFLE1BQU07TUFDTixPQUFPO01BQ1AsTUFBTTs7SUFFUjtNQUNFLE1BQU07TUFDTixPQUFPO01BQ1AsTUFBTTs7SUFFUjtNQUNFLE1BQU07TUFDTixPQUFPO01BQ1AsTUFBTTs7SUFFUjtNQUNFLE1BQU07TUFDTixPQUFPO01BQ1AsTUFBTTs7OztxQ0F0QkMsaUJBQWM7RUFBQTs2RUFBZCxpQkFBYyxXQUFBLENBQUEsQ0FBQSxXQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsaUJBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsT0FBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLEdBQUEsVUFBQSxTQUFBLHdCQUFBLElBQUEsS0FBQTtBQUFBLFFBQUEsS0FBQSxHQUFBO0FDakIzQixNQUFB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QUEsY0FBQSxDQUFBLEdBQUEsT0FBQSxJQUFBLE1BQUEsR0FBQSxRQUFBLENBQUEsQ0FBQSxNQUFBLFlBQUEsR0FBQSxXQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsUUFBQSxHQUFBLENBQUEsUUFBQSxVQUFBLEdBQUEsY0FBQSxHQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxnQkFBQSxVQUFBLEdBQUEsaUJBQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxHQUFBLGNBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLGdCQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsUUFBQSxVQUFBLGNBQUEsZ0JBQUEsR0FBQSxjQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLHdCQUFBLEdBQUEsQ0FBQSxVQUFBLFVBQUEsT0FBQSxZQUFBLGNBQUEsYUFBQSxHQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxVQUFBLFVBQUEsT0FBQSxZQUFBLGNBQUEsZUFBQSxHQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsTUFBQSxHQUFBLENBQUEs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LFlBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLFVBQUEsVUFBQSxPQUFBLFlBQUEsR0FBQSxjQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLFFBQUEsR0FBQSxDQUFBLGNBQUEsSUFBQSxHQUFBLGdCQUFBLEdBQUEsWUFBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsS0FBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsbUJBQUEsUUFBQSxlQUFBLFlBQUEsZ0JBQUEsTUFBQSxHQUFBLENBQUEsYUFBQSxFQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsUUFBQSxTQUFBLG1CQUFBLFNBQUEsZUFBQSxtQkFBQSxnQkFBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxtQkFBQSxXQUFBLGVBQUEsdUJBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsbUJBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxZQUFBLElBQUEsbUJBQUEsV0FBQSxRQUFBLEtBQUEsZUFBQSwrQkFBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxRQUFBLFVBQUEsR0FBQSxPQUFBLGVBQUEsY0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLHFCQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxZQUFBLE1BQUEsUUFBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdB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QSxzQkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxzQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tcG9uZW50IiwiaW5qZWN0IiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsImluamVjdCIsIl9mb3JUcmFjazAiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiaTMiLCJDb21wb25lbnQiLCJpbmplY3QiLCJzaWduYWwiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiaW5qZWN0Iiwic2lnbmFsIiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiQ29tcG9uZW50IiwiaW5qZWN0Iiwic2lnbmFsIiwiY29tcHV0ZWQiLCJDb21tb25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaW5qZWN0IiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsImkwIiwiaTEiLCJpMiIsImkzIiwiaTQiLCJpNSIsIl9jMCIsImluamVjdCIsInNpZ25hbCIsImNvbXB1dGVkIiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdERpYWxvZ01vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJDb21wb25lbnQiLCJpbmplY3QiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiaW5qZWN0IiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsIkNvbXBvbmVudCIsImluamVjdCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJpbmplY3QiLCJfZm9yVHJhY2swIiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiLCJpMiIsImkzIiwiQ29tcG9uZW50IiwiaW5qZWN0Iiwic2lnbmFsIiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdFNuYWNrQmFyIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJpbmplY3QiLCJNYXRTbmFja0JhciIsInNpZ25hbCIsIl9mb3JUcmFjazAiLCJfZm9yVHJhY2sxIiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsIk1hdFNuYWNrQmFyTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiaTMiLCJpNCIsImk1IiwiaTYiLCJpMTIiLCJDb21wb25lbnQiLCJpMCJdfQ==