import { injectQuery as __vite__injectQuery } from "/@vite/client";import { createHotContext as __vite__createHotContext } from "/@vite/client";import.meta.hot = __vite__createHotContext("/chunk-RDOSDDQP.js");import {
  PortfolioService
} from "/chunk-ERSYBWDQ.js";

// src/app/pages/home/home.ts
import { Component as Component9 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule9 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";

// src/app/pages/home/sections/hero/hero.ts
import { Component, inject, signal } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatIconModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import { MatButtonModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import * as i0 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i1 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i2 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i3 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
import * as i4 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
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
import { Component as Component2, inject as inject2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatIconModule as MatIconModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i02 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i12 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i22 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i32 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
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
import { Component as Component3, inject as inject3, signal as signal2, computed } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatTabsModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_tabs.js?v=83c32eab";
import { MatChipsModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_chips.js?v=83c32eab";
import { MatIconModule as MatIconModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";

// src/app/core/models/skill.model.ts
var SKILL_LEVEL_PERCENT = {
  beginner: 35,
  intermediate: 60,
  advanced: 80,
  expert: 95
};

// src/app/pages/home/sections/skills/skills.ts
import * as i03 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i13 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i23 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
import * as i33 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_tabs.js?v=83c32eab";
import * as i42 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_chips.js?v=83c32eab";
import * as i5 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
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
import { Component as Component5, inject as inject5, signal as signal3, computed as computed2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule5 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatDialog, MatDialogModule as MatDialogModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=83c32eab";
import { MatIconModule as MatIconModule5 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import { MatButtonModule as MatButtonModule3 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import { MatSnackBar, MatSnackBarModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=83c32eab";

// src/app/pages/home/sections/projects/project-dialog/project-dialog.ts
import { Component as Component4, Inject, inject as inject4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MAT_DIALOG_DATA, MatDialogModule, MatDialogRef } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=83c32eab";
import { MatButtonModule as MatButtonModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import { MatIconModule as MatIconModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i04 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i14 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i24 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
import * as i34 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=83c32eab";
import * as i43 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import * as i52 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
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
import * as i05 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i15 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i25 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
import * as i35 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_dialog.js?v=83c32eab";
import * as i44 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i53 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import * as i6 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=83c32eab";
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
import { Component as Component6, inject as inject6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatIconModule as MatIconModule6 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i06 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i16 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i26 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i36 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
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
import { Component as Component7, inject as inject7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { MatIconModule as MatIconModule7 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i07 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i17 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i27 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i37 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
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
      i07.\u0275\u0275repeaterCreate(14, TestimonialsComponent_For_15_Template, 17, 7, "article", 9, ctx.trackById, true);
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
      @for (t of portfolio.testimonials; track trackById($index, t); let i = $index) {
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
import { Component as Component8, inject as inject8, signal as signal4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import { CommonModule as CommonModule8 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import { FormBuilder, ReactiveFormsModule, Validators } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_forms.js?v=83c32eab";
import { MatFormFieldModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_form-field.js?v=83c32eab";
import { MatInputModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_input.js?v=83c32eab";
import { MatButtonModule as MatButtonModule4 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import { MatIconModule as MatIconModule8 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import { MatProgressSpinnerModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_progress-spinner.js?v=83c32eab";
import { MatSelectModule } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_select.js?v=83c32eab";
import { MatSnackBar as MatSnackBar2, MatSnackBarModule as MatSnackBarModule2 } from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=83c32eab";
import * as i08 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i18 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
import * as i28 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_forms.js?v=83c32eab";
import * as i38 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_form-field.js?v=83c32eab";
import * as i45 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_bidi.js?v=83c32eab";
import * as i54 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_input.js?v=83c32eab";
import * as i62 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_text-field.js?v=83c32eab";
import * as i7 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_button.js?v=83c32eab";
import * as i8 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_icon.js?v=83c32eab";
import * as i9 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_progress-spinner.js?v=83c32eab";
import * as i10 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_cdk_scrolling.js?v=83c32eab";
import * as i11 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_select.js?v=83c32eab";
import * as i122 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_material_snack-bar.js?v=83c32eab";
var _forTrack06 = ($index, $item) => $item.label;
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
      i08.\u0275\u0275repeaterCreate(23, ContactComponent_For_24_Template, 8, 4, "a", 15, _forTrack06);
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
import * as i09 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_core.js?v=83c32eab";
import * as i19 from "/@fs/C:/Users/ahmed/Downloads/portofolio 2/portfolio/.angular/cache/21.2.14/portfolio/vite/deps/@angular_common.js?v=83c32eab";
var HomeComponent = class _HomeComponent {
  static \u0275fac = function HomeComponent_Factory(__ngFactoryType__) {
    return new (__ngFactoryType__ || _HomeComponent)();
  };
  static \u0275cmp = /* @__PURE__ */ i09.\u0275\u0275defineComponent({ type: _HomeComponent, selectors: [["app-home"]], decls: 7, vars: 0, template: function HomeComponent_Template(rf, ctx) {
    if (rf & 1) {
      i09.\u0275\u0275element(0, "app-hero")(1, "app-about")(2, "app-skills")(3, "app-projects")(4, "app-experience")(5, "app-testimonials")(6, "app-contact");
    }
  }, dependencies: [
    CommonModule9,
    i19.NgClass,
    i19.NgComponentOutlet,
    i19.NgForOf,
    i19.NgIf,
    i19.NgTemplateOutlet,
    i19.NgStyle,
    i19.NgSwitch,
    i19.NgSwitchCase,
    i19.NgSwitchDefault,
    i19.NgPlural,
    i19.NgPluralCase,
    HeroComponent,
    AboutComponent,
    SkillsComponent,
    ProjectsComponent,
    ExperienceComponent,
    TestimonialsComponent,
    ContactComponent,
    i19.AsyncPipe,
    i19.UpperCasePipe,
    i19.LowerCasePipe,
    i19.JsonPipe,
    i19.SlicePipe,
    i19.DecimalPipe,
    i19.PercentPipe,
    i19.TitleCasePipe,
    i19.CurrencyPipe,
    i19.DatePipe,
    i19.I18nPluralPipe,
    i19.I18nSelectPipe,
    i19.KeyValuePipe
  ], styles: ["\n[_nghost-%COMP%] {\n  display: block;\n}\n/*# sourceMappingURL=home.css.map */"] });
};
(() => {
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassMetadata(HomeComponent, [{
    type: Component9,
    args: [{ selector: "app-home", imports: [
      CommonModule9,
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
  (typeof ngDevMode === "undefined" || ngDevMode) && i09.\u0275setClassDebugInfo(HomeComponent, { className: "HomeComponent", filePath: "src/app/pages/home/home.ts", lineNumber: 26 });
})();
(() => {
  const id = "src%2Fapp%2Fpages%2Fhome%2Fhome.ts%40HomeComponent";
  function HomeComponent_HmrLoad(t) {
    import(
      /* @vite-ignore */
      __vite__injectQuery(i09.\u0275\u0275getReplaceMetadataURL(id, t, import.meta.url), 'import')
    ).then((m) => m.default && i09.\u0275\u0275replaceMetadata(HomeComponent, m.default, [i09, i19], [CommonModule9, HeroComponent, AboutComponent, SkillsComponent, ProjectsComponent, ExperienceComponent, TestimonialsComponent, ContactComponent, Component9], import.meta, id));
  }
  (typeof ngDevMode === "undefined" || ngDevMode) && HomeComponent_HmrLoad(Date.now());
  (typeof ngDevMode === "undefined" || ngDevMode) && (import.meta.hot && import.meta.hot.on("angular:component-update", (d) => d.id === id && HomeComponent_HmrLoad(d.timestamp)));
})();
export {
  HomeComponent
};


//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInNyYy9hcHAvcGFnZXMvaG9tZS9ob21lLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL2hvbWUuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9oZXJvL2hlcm8udHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvaGVyby9oZXJvLmh0bWwiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvYWJvdXQvYWJvdXQudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvYWJvdXQvYWJvdXQuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9za2lsbHMvc2tpbGxzLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL3NraWxscy9za2lsbHMuaHRtbCIsInNyYy9hcHAvY29yZS9tb2RlbHMvc2tpbGwubW9kZWwudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9wcm9qZWN0cy9wcm9qZWN0LWRpYWxvZy9wcm9qZWN0LWRpYWxvZy50cyIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9wcm9qZWN0cy9wcm9qZWN0LWRpYWxvZy9wcm9qZWN0LWRpYWxvZy5odG1sIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL2V4cGVyaWVuY2UvZXhwZXJpZW5jZS50cyIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9leHBlcmllbmNlL2V4cGVyaWVuY2UuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy90ZXN0aW1vbmlhbHMvdGVzdGltb25pYWxzLnRzIiwic3JjL2FwcC9wYWdlcy9ob21lL3NlY3Rpb25zL3Rlc3RpbW9uaWFscy90ZXN0aW1vbmlhbHMuaHRtbCIsInNyYy9hcHAvcGFnZXMvaG9tZS9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QudHMiLCJzcmMvYXBwL3BhZ2VzL2hvbWUvc2VjdGlvbnMvY29udGFjdC9jb250YWN0Lmh0bWwiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBIZXJvQ29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9ucy9oZXJvL2hlcm8nO1xuaW1wb3J0IHsgQWJvdXRDb21wb25lbnQgfSBmcm9tICcuL3NlY3Rpb25zL2Fib3V0L2Fib3V0JztcbmltcG9ydCB7IFNraWxsc0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvc2tpbGxzL3NraWxscyc7XG5pbXBvcnQgeyBQcm9qZWN0c0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvcHJvamVjdHMvcHJvamVjdHMnO1xuaW1wb3J0IHsgRXhwZXJpZW5jZUNvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvZXhwZXJpZW5jZS9leHBlcmllbmNlJztcbmltcG9ydCB7IFRlc3RpbW9uaWFsc0NvbXBvbmVudCB9IGZyb20gJy4vc2VjdGlvbnMvdGVzdGltb25pYWxzL3Rlc3RpbW9uaWFscyc7XG5pbXBvcnQgeyBDb250YWN0Q29tcG9uZW50IH0gZnJvbSAnLi9zZWN0aW9ucy9jb250YWN0L2NvbnRhY3QnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtaG9tZScsXG4gIGltcG9ydHM6IFtcbiAgICBDb21tb25Nb2R1bGUsXG4gICAgSGVyb0NvbXBvbmVudCxcbiAgICBBYm91dENvbXBvbmVudCxcbiAgICBTa2lsbHNDb21wb25lbnQsXG4gICAgUHJvamVjdHNDb21wb25lbnQsXG4gICAgRXhwZXJpZW5jZUNvbXBvbmVudCxcbiAgICBUZXN0aW1vbmlhbHNDb21wb25lbnQsXG4gICAgQ29udGFjdENvbXBvbmVudCxcbiAgXSxcbiAgdGVtcGxhdGVVcmw6ICcuL2hvbWUuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9ob21lLnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBIb21lQ29tcG9uZW50IHt9XG4iLCI8YXBwLWhlcm8gLz5cbjxhcHAtYWJvdXQgLz5cbjxhcHAtc2tpbGxzIC8+XG48YXBwLXByb2plY3RzIC8+XG48YXBwLWV4cGVyaWVuY2UgLz5cbjxhcHAtdGVzdGltb25pYWxzIC8+XG48YXBwLWNvbnRhY3QgLz5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBzaWduYWwsIE9uSW5pdCwgT25EZXN0cm95IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IFBvcnRmb2xpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3BvcnRmb2xpby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWhlcm8nLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlLCBNYXRCdXR0b25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vaGVyby5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2hlcm8uc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEhlcm9Db21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQsIE9uRGVzdHJveSB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb3J0Zm9saW8gPSBpbmplY3QoUG9ydGZvbGlvU2VydmljZSk7XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHJvbGVzID0gW1xuICAgICdBbmd1bGFyIERldmVsb3BlcicsXG4gICAgJ0Zyb250ZW5kIEFyY2hpdGVjdCcsXG4gICAgJ1VJIEVuZ2luZWVyJyxcbiAgICAnT3Blbi1Tb3VyY2UgQ29udHJpYnV0b3InLFxuICBdO1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY3VycmVudFJvbGUgPSBzaWduYWwoJycpO1xuICBwcml2YXRlIHJvbGVJbnRlcnZhbDogUmV0dXJuVHlwZTx0eXBlb2Ygc2V0SW50ZXJ2YWw+IHwgbnVsbCA9IG51bGw7XG4gIHByb3RlY3RlZCByZWFkb25seSBjb3VudGVycyA9IHNpZ25hbDxSZWNvcmQ8c3RyaW5nLCBudW1iZXI+Pih7fSk7XG5cbiAgbmdPbkluaXQoKTogdm9pZCB7XG4gICAgdGhpcy5zdGFydFR5cGV3cml0ZXIoKTtcbiAgICB0aGlzLnN0YXJ0Q291bnRlcnMoKTtcbiAgfVxuXG4gIG5nT25EZXN0cm95KCk6IHZvaWQge1xuICAgIGlmICh0aGlzLnJvbGVJbnRlcnZhbCkgY2xlYXJJbnRlcnZhbCh0aGlzLnJvbGVJbnRlcnZhbCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0VHlwZXdyaXRlcigpOiB2b2lkIHtcbiAgICBsZXQgaSA9IDA7XG4gICAgbGV0IGNoYXJJbmRleCA9IDA7XG4gICAgbGV0IGRlbGV0aW5nID0gZmFsc2U7XG4gICAgY29uc3QgdGljayA9ICgpID0+IHtcbiAgICAgIGNvbnN0IHdvcmQgPSB0aGlzLnJvbGVzW2ldO1xuICAgICAgaWYgKCFkZWxldGluZykge1xuICAgICAgICB0aGlzLmN1cnJlbnRSb2xlLnNldCh3b3JkLnN1YnN0cmluZygwLCBjaGFySW5kZXggKyAxKSk7XG4gICAgICAgIGNoYXJJbmRleCsrO1xuICAgICAgICBpZiAoY2hhckluZGV4ID09PSB3b3JkLmxlbmd0aCkge1xuICAgICAgICAgIGRlbGV0aW5nID0gdHJ1ZTtcbiAgICAgICAgICBzZXRUaW1lb3V0KHRpY2ssIDE4MDApO1xuICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuICAgICAgfSBlbHNlIHtcbiAgICAgICAgdGhpcy5jdXJyZW50Um9sZS5zZXQod29yZC5zdWJzdHJpbmcoMCwgY2hhckluZGV4IC0gMSkpO1xuICAgICAgICBjaGFySW5kZXgtLTtcbiAgICAgICAgaWYgKGNoYXJJbmRleCA9PT0gMCkge1xuICAgICAgICAgIGRlbGV0aW5nID0gZmFsc2U7XG4gICAgICAgICAgaSA9IChpICsgMSkgJSB0aGlzLnJvbGVzLmxlbmd0aDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgICAgdGhpcy5yb2xlSW50ZXJ2YWwgPSBzZXRUaW1lb3V0KHRpY2ssIGRlbGV0aW5nID8gNDAgOiA5MCk7XG4gICAgfTtcbiAgICB0aWNrKCk7XG4gIH1cblxuICBwcml2YXRlIHN0YXJ0Q291bnRlcnMoKTogdm9pZCB7XG4gICAgY29uc3Qgb2JzZXJ2ZXIgPSBuZXcgSW50ZXJzZWN0aW9uT2JzZXJ2ZXIoKGVudHJpZXMpID0+IHtcbiAgICAgIGVudHJpZXMuZm9yRWFjaCgoZSkgPT4ge1xuICAgICAgICBpZiAoZS5pc0ludGVyc2VjdGluZykge1xuICAgICAgICAgIHRoaXMuYW5pbWF0ZUNvdW50ZXJzKCk7XG4gICAgICAgICAgb2JzZXJ2ZXIuZGlzY29ubmVjdCgpO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgICBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIGNvbnN0IGVsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLmhlcm8tc3RhdHMnKTtcbiAgICAgIGlmIChlbCkgb2JzZXJ2ZXIub2JzZXJ2ZShlbCk7XG4gICAgfSwgMTAwKTtcbiAgfVxuXG4gIHByaXZhdGUgYW5pbWF0ZUNvdW50ZXJzKCk6IHZvaWQge1xuICAgIGNvbnN0IGR1cmF0aW9uID0gMTUwMDtcbiAgICBjb25zdCBzdGFydCA9IHBlcmZvcm1hbmNlLm5vdygpO1xuICAgIGNvbnN0IHRhcmdldHMgPSB0aGlzLnBvcnRmb2xpby5zdGF0cy5tYXAoKHMpID0+ICh7XG4gICAgICBsYWJlbDogcy5sYWJlbCxcbiAgICAgIHRhcmdldDogcGFyc2VJbnQocy52YWx1ZS5yZXBsYWNlKC9cXEQvZywgJycpLCAxMCkgfHwgMCxcbiAgICB9KSk7XG5cbiAgICBjb25zdCBzdGVwID0gKG5vdzogbnVtYmVyKSA9PiB7XG4gICAgICBjb25zdCBwcm9ncmVzcyA9IE1hdGgubWluKChub3cgLSBzdGFydCkgLyBkdXJhdGlvbiwgMSk7XG4gICAgICBjb25zdCBlYXNlZCA9IDEgLSBNYXRoLnBvdygxIC0gcHJvZ3Jlc3MsIDMpO1xuICAgICAgY29uc3QgcmVzdWx0OiBSZWNvcmQ8c3RyaW5nLCBudW1iZXI+ID0ge307XG4gICAgICB0YXJnZXRzLmZvckVhY2goKHQpID0+IChyZXN1bHRbdC5sYWJlbF0gPSBNYXRoLmZsb29yKHQudGFyZ2V0ICogZWFzZWQpKSk7XG4gICAgICB0aGlzLmNvdW50ZXJzLnNldChyZXN1bHQpO1xuICAgICAgaWYgKHByb2dyZXNzIDwgMSkgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICAgIH07XG4gICAgcmVxdWVzdEFuaW1hdGlvbkZyYW1lKHN0ZXApO1xuICB9XG5cbiAgZm9ybWF0VmFsdWUobGFiZWw6IHN0cmluZywgb3JpZ2luYWw6IHN0cmluZyk6IHN0cmluZyB7XG4gICAgY29uc3QgbnVtID0gdGhpcy5jb3VudGVycygpW2xhYmVsXSA/PyAwO1xuICAgIGNvbnN0IHN1ZmZpeCA9IG9yaWdpbmFsLnJlcGxhY2UoL1swLTldL2csICcnKTtcbiAgICByZXR1cm4gYCR7bnVtfSR7c3VmZml4fWA7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGlkPVwiaG9tZVwiIGNsYXNzPVwiaGVyb1wiPlxuICA8ZGl2IGNsYXNzPVwiY29udGFpbmVyLXhcIj5cbiAgICA8ZGl2IGNsYXNzPVwicm93IGFsaWduLWl0ZW1zLWNlbnRlciBnLTUgaGVyby1yb3dcIj5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctN1wiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1jb250ZW50IHJldmVhbFwiPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ3YXZlXCI+8J+Rizwvc3Bhbj4gV2VsY29tZSB0byBteSBwb3J0Zm9saW9cbiAgICAgICAgICA8L3NwYW4+XG5cbiAgICAgICAgICA8aDEgY2xhc3M9XCJoZXJvLXRpdGxlXCI+XG4gICAgICAgICAgICBIaSwgSSdtIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPnt7IHBvcnRmb2xpby5uYW1lIH19PC9zcGFuPlxuICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJvbGUtbGluZVwiPlxuICAgICAgICAgICAgICBhIDxzcGFuIGNsYXNzPVwidHlwZWRcIj57eyBjdXJyZW50Um9sZSgpIH19PC9zcGFuPjxzcGFuIGNsYXNzPVwiY3Vyc29yXCI+fDwvc3Bhbj5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2gxPlxuXG4gICAgICAgICAgPHAgY2xhc3M9XCJoZXJvLXN1YnRpdGxlXCI+XG4gICAgICAgICAgICB7eyBwb3J0Zm9saW8udGFnbGluZSB9fVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLWluZm9cIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1nZW8tYWx0XCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBwb3J0Zm9saW8ubG9jYXRpb24gfX08L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbmZvLWl0ZW1cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1icmllZmNhc2VcIj48L2k+XG4gICAgICAgICAgICAgIDxzcGFuPjMrIHllYXJzIGJ1aWxkaW5nIHByb2R1Y3Rpb24gQW5ndWxhciBhcHBzPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaGVyby1jdGFcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjcHJvamVjdHNcIiBjbGFzcz1cImJ0biBidG4tcHJpbWFyeVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXJvY2tldC10YWtlb2ZmXCI+PC9pPlxuICAgICAgICAgICAgICBWaWV3IE15IFdvcmtcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDxhIGhyZWY9XCIjY29udGFjdFwiIGNsYXNzPVwiYnRuIGJ0bi1vdXRsaW5lLWxpZ2h0XCI+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZW52ZWxvcGVcIj48L2k+XG4gICAgICAgICAgICAgIEdldCBpbiBUb3VjaFxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPGEgW2hyZWZdPVwiJ21haWx0bzonICsgcG9ydGZvbGlvLmVtYWlsXCIgY2xhc3M9XCJidG4gYnRuLWdob3N0XCIgbWF0LXN0cm9rZWQtYnV0dG9uPlxuICAgICAgICAgICAgICA8bWF0LWljb24+ZG93bmxvYWQ8L21hdC1pY29uPlxuICAgICAgICAgICAgICBEb3dubG9hZCBDVlxuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tc29jaWFsc1wiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzb2NpYWxzLWxhYmVsXCI+Rm9sbG93IG1lPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNvY2lhbC1pY29uc1wiPlxuICAgICAgICAgICAgICBAZm9yIChzIG9mIHBvcnRmb2xpby5zb2NpYWxzLnNsaWNlKDAsIDQpOyB0cmFjayBzLnVybCkge1xuICAgICAgICAgICAgICAgIDxhIFtocmVmXT1cInMudXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBbYXR0ci5hcmlhLWxhYmVsXT1cInMubmFtZVwiIGNsYXNzPVwic29jaWFsLWljb25cIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmlcIiBbbmdDbGFzc109XCJzLmljb25cIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy01XCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJoZXJvLXZpc3VhbCByZXZlYWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwidmlzdWFsLWNhcmRcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWdsb3dcIj48L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjYXJkLWNvbnRlbnRcIj5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci13cmFwcGVyXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhci1yaW5nXCI+PC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJhdmF0YXItaW5pdGlhbHNcIj57eyBwb3J0Zm9saW8uYXZhdGFySW5pdGlhbHMgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXR1cy1pbmRpY2F0b3JcIiB0aXRsZT1cIkF2YWlsYWJsZVwiPjwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV2LWluZm9cIj5cbiAgICAgICAgICAgICAgICA8aDMgY2xhc3M9XCJkZXYtbmFtZVwiPnt7IHBvcnRmb2xpby5uYW1lIH19PC9oMz5cbiAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldi1yb2xlXCI+e3sgcG9ydGZvbGlvLnJvbGUgfX08L3A+XG4gICAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0ZWNoLXN0YWNrXCI+XG4gICAgICAgICAgICAgICAgQGZvciAodGVjaCBvZiBbJ0FuZ3VsYXInLCAnVHlwZVNjcmlwdCcsICdSeEpTJywgJ05nUngnLCAnTWF0ZXJpYWwnXTsgdHJhY2sgdGVjaCkge1xuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWNoLXBpbGxcIj57eyB0ZWNoIH19PC9zcGFuPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImhlcm8tc3RhdHNcIj5cbiAgICAgICAgICAgICAgICBAZm9yIChzdGF0IG9mIHBvcnRmb2xpby5zdGF0czsgdHJhY2sgc3RhdC5sYWJlbCkge1xuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXRcIj5cbiAgICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cInN0YXQuaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YXQtaW5mb1wiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RhdC12YWx1ZSBncmFkaWVudC10ZXh0XCI+e3sgZm9ybWF0VmFsdWUoc3RhdC5sYWJlbCwgc3RhdC52YWx1ZSkgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGF0LWxhYmVsXCI+e3sgc3RhdC5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXRpbmctaWNvbiBpY29uLTFcIj48aSBjbGFzcz1cImJpIGJpLWZpbGV0eXBlLXRzeFwiPjwvaT48L2Rpdj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZmxvYXRpbmctaWNvbiBpY29uLTJcIj48aSBjbGFzcz1cImJpIGJpLWZpbGV0eXBlLWh0bWxcIj48L2k+PC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWljb24gaWNvbi0zXCI+PGkgY2xhc3M9XCJiaSBiaS1maWxldHlwZS1zY3NzXCI+PC9pPjwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1pY29uIGljb24tNFwiPjxpIGNsYXNzPVwiYmkgYmktZ2l0aHViXCI+PC9pPjwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8YSBocmVmPVwiI2Fib3V0XCIgY2xhc3M9XCJzY3JvbGwtY3VlXCIgYXJpYS1sYWJlbD1cIlNjcm9sbCB0byBhYm91dFwiPlxuICAgIDxzcGFuIGNsYXNzPVwibW91c2VcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwid2hlZWxcIj48L3NwYW4+XG4gICAgPC9zcGFuPlxuICAgIDxzcGFuIGNsYXNzPVwiY3VlLXRleHRcIj5TY3JvbGw8L3NwYW4+XG4gIDwvYT5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2VydmljZXMvcG9ydGZvbGlvLnNlcnZpY2UnO1xuXG5pbnRlcmZhY2UgSGlnaGxpZ2h0IHtcbiAgaWNvbjogc3RyaW5nO1xuICB0aXRsZTogc3RyaW5nO1xuICB0ZXh0OiBzdHJpbmc7XG59XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1hYm91dCcsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vYWJvdXQuaHRtbCcsXG4gIHN0eWxlVXJsOiAnLi9hYm91dC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQWJvdXRDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9ydGZvbGlvID0gaW5qZWN0KFBvcnRmb2xpb1NlcnZpY2UpO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBoaWdobGlnaHRzOiBIaWdobGlnaHRbXSA9IFtcbiAgICB7XG4gICAgICBpY29uOiAnYmktbGlnaHRuaW5nLWNoYXJnZS1maWxsJyxcbiAgICAgIHRpdGxlOiAnUGVyZm9ybWFuY2UgRmlyc3QnLFxuICAgICAgdGV4dDogJ0kgb2JzZXNzIG92ZXIgQ29yZSBXZWIgVml0YWxzLCBsYXp5IGxvYWRpbmcsIGFuZCBidW5kbGUgc2l6ZSB0byBkZWxpdmVyIGxpZ2h0bmluZy1mYXN0IGV4cGVyaWVuY2VzLicsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktZGlhZ3JhbS0zLWZpbGwnLFxuICAgICAgdGl0bGU6ICdTY2FsYWJsZSBBcmNoaXRlY3R1cmUnLFxuICAgICAgdGV4dDogJ0J1aWxkaW5nIG1vZHVsYXIsIHRlc3RhYmxlIGNvZGViYXNlcyB3aXRoIGZlYXR1cmUgbW9kdWxlcywgc21hcnQvZHVtYiBjb21wb25lbnRzLCBhbmQgY2xlYW4gc3RhdGUgbWFuYWdlbWVudC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2JpLXVuaXZlcnNhbC1hY2Nlc3MnLFxuICAgICAgdGl0bGU6ICdBY2Nlc3NpYmxlIGJ5IERlZmF1bHQnLFxuICAgICAgdGV4dDogJ1dDQUctY29tcGxpYW50IFVJLCBmdWxsIGtleWJvYXJkIG5hdmlnYXRpb24sIHNjcmVlbi1yZWFkZXIgZnJpZW5kbHkgbWFya3VwIGFuZCBSVEwgc3VwcG9ydC4nLFxuICAgIH0sXG4gICAge1xuICAgICAgaWNvbjogJ2JpLXBlb3BsZS1maWxsJyxcbiAgICAgIHRpdGxlOiAnVGVhbSBQbGF5ZXIgJiBNZW50b3InLFxuICAgICAgdGV4dDogJ0NvZGUgcmV2aWV3cywgcGFpci1wcm9ncmFtbWluZyBhbmQgbWVudG9yaW5nIOKAlCBJIGxpZnQgdGhlIHRlYW0gYXJvdW5kIG1lIGFzIEkgZ3Jvdy4nLFxuICAgIH0sXG4gIF07XG59XG4iLCI8c2VjdGlvbiBpZD1cImFib3V0XCIgY2xhc3M9XCJzZWN0aW9uIGFib3V0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXZlYWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPjxpIGNsYXNzPVwiYmkgYmktcGVyc29uLWJhZGdlXCI+PC9pPiBBYm91dCBtZTwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5DcmFmdGluZyA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5kZWxpZ2h0ZnVsPC9zcGFuPiBkaWdpdGFsIGV4cGVyaWVuY2VzPC9oMj5cbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICBBIHBhc3Npb25hdGUgZnJvbnRlbmQgZGV2ZWxvcGVyIHdobyB0cmVhdHMgZXZlcnkgY29tcG9uZW50IGxpa2UgYSBzbWFsbCBwcm9kdWN0LlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTUgYWxpZ24taXRlbXMtY2VudGVyXCI+XG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTUgcmV2ZWFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC12aXN1YWxcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29kZS13aW5kb3dcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJ3aW5kb3ctYmFyXCI+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZG90IHJlZFwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3QgeWVsbG93XCI+PC9zcGFuPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRvdCBncmVlblwiPjwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmaWxlLW5hbWVcIj5kZXZlbG9wZXIudHM8L3NwYW4+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxwcmUgY2xhc3M9XCJjb2RlXCI+PGNvZGU+PHNwYW4gY2xhc3M9XCJjLWtleXdvcmRcIj5jb25zdDwvc3Bhbj4gPHNwYW4gY2xhc3M9XCJjLXZhclwiPmFobWVkPC9zcGFuPiA9IHt7ICd7JyB9fVxuICA8c3BhbiBjbGFzcz1cImMtcHJvcFwiPnJvbGU8L3NwYW4+OiA8c3BhbiBjbGFzcz1cImMtc3RyaW5nXCI+J1NlbmlvciBBbmd1bGFyIERldmVsb3Blcic8L3NwYW4+LFxuICA8c3BhbiBjbGFzcz1cImMtcHJvcFwiPmV4cGVyaWVuY2U8L3NwYW4+OiA8c3BhbiBjbGFzcz1cImMtbnVtYmVyXCI+Mys8L3NwYW4+IDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4neWVhcnMnPC9zcGFuPixcbiAgPHNwYW4gY2xhc3M9XCJjLXByb3BcIj5mb2N1czwvc3Bhbj46IFtcbiAgICA8c3BhbiBjbGFzcz1cImMtc3RyaW5nXCI+J0FuZ3VsYXIgMTcnPC9zcGFuPixcbiAgICA8c3BhbiBjbGFzcz1cImMtc3RyaW5nXCI+J05nUnggJiBTaWduYWxzJzwvc3Bhbj4sXG4gICAgPHNwYW4gY2xhc3M9XCJjLXN0cmluZ1wiPidNYXRlcmlhbCAmIEJvb3RzdHJhcCc8L3NwYW4+LFxuICAgIDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4nUGVyZm9ybWFuY2UgJiBBMTF5Jzwvc3Bhbj4sXG4gIF0sXG4gIDxzcGFuIGNsYXNzPVwiYy1wcm9wXCI+YXZhaWxhYmxlPC9zcGFuPjogPHNwYW4gY2xhc3M9XCJjLWJvb2xcIj50cnVlPC9zcGFuPixcbiAgPHNwYW4gY2xhc3M9XCJjLXByb3BcIj5sb3Zlczwvc3Bhbj46IDxzcGFuIGNsYXNzPVwiYy1zdHJpbmdcIj4nY2xlYW4gY29kZSAmIGdyZWF0IFVYJzwvc3Bhbj4sXG57eyAnfScgfX07PC9jb2RlPjwvcHJlPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImZsb2F0aW5nLWJhZGdlIGJhZGdlLTFcIj5cbiAgICAgICAgICAgIDxtYXQtaWNvbj53b3Jrc3BhY2VfcHJlbWl1bTwvbWF0LWljb24+XG4gICAgICAgICAgICA8c3Bhbj4zKyBZZWFycyBFeHAuPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmbG9hdGluZy1iYWRnZSBiYWRnZS0yXCI+XG4gICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXN0YXJzXCI+PC9pPlxuICAgICAgICAgICAgPHNwYW4+VG9wIFJhdGVkPC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8ZGl2IGNsYXNzPVwiY29sLWxnLTcgcmV2ZWFsXCI+XG4gICAgICAgIDxkaXYgY2xhc3M9XCJhYm91dC1jb250ZW50XCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiYWJvdXQtaGVhZGluZ1wiPlxuICAgICAgICAgICAgSSdtIHt7IHBvcnRmb2xpby5uYW1lIH19LCBhbiBBbmd1bGFyIGRldmVsb3BlciB3aG8gdHVybnMgY29tcGxleCBwcm9ibGVtc1xuICAgICAgICAgICAgaW50byA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5lbGVnYW50IHNvbHV0aW9uczwvc3Bhbj4uXG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cImFib3V0LXRleHRcIj5cbiAgICAgICAgICAgIHt7IHBvcnRmb2xpby5iaW8gfX1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJhYm91dC10ZXh0XCI+XG4gICAgICAgICAgICBNeSB3b3JrIHNwYW5zIGVudGVycHJpc2UgU2FhUyBkYXNoYm9hcmRzLCBmaW50ZWNoIGFwcHMsIGUtY29tbWVyY2UgcGxhdGZvcm1zIGFuZCBQV0FzLlxuICAgICAgICAgICAgSSBsb3ZlIG93bmluZyB0aGUgZnVsbCBmcm9udGVuZCBsaWZlY3ljbGUg4oCUIGZyb20gYXJjaGl0ZWN0dXJlIGFuZCBkZXNpZ24gdG9rZW5zIHRvXG4gICAgICAgICAgICB1bml0LXRlc3RpbmcsIENJL0NEIGFuZCBwcm9kdWN0aW9uIG1vbml0b3JpbmcuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImhpZ2hsaWdodHMtZ3JpZFwiPlxuICAgICAgICAgICAgQGZvciAoaCBvZiBoaWdobGlnaHRzOyB0cmFjayBoLnRpdGxlKSB7XG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoaWdobGlnaHRcIj5cbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaC1pY29uXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpXCIgW25nQ2xhc3NdPVwiaC5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJoLWJvZHlcIj5cbiAgICAgICAgICAgICAgICAgIDxoNCBjbGFzcz1cImgtdGl0bGVcIj57eyBoLnRpdGxlIH19PC9oND5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiaC10ZXh0XCI+e3sgaC50ZXh0IH19PC9wPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L2Rpdj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJpbXBvcnQgeyBDb21wb25lbnQsIGluamVjdCwgc2lnbmFsLCBjb21wdXRlZCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuaW1wb3J0IHsgQ29tbW9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uJztcbmltcG9ydCB7IE1hdFRhYnNNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC90YWJzJztcbmltcG9ydCB7IE1hdENoaXBzTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvY2hpcHMnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2VydmljZXMvcG9ydGZvbGlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgU2tpbGwsIFNLSUxMX0xFVkVMX1BFUkNFTlQgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVscy9za2lsbC5tb2RlbCc7XG5cbnR5cGUgQ2F0ZWdvcnkgPSAnYWxsJyB8ICdmcm9udGVuZCcgfCAndWknIHwgJ3N0YXRlJyB8ICd0b29saW5nJyB8ICd0ZXN0aW5nJyB8ICdzb2Z0JztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLXNraWxscycsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdFRhYnNNb2R1bGUsIE1hdENoaXBzTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3NraWxscy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3NraWxscy5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgU2tpbGxzQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBvcnRmb2xpbyA9IGluamVjdChQb3J0Zm9saW9TZXJ2aWNlKTtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGFjdGl2ZUNhdGVnb3J5ID0gc2lnbmFsPENhdGVnb3J5PignYWxsJyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBwZXJjZW50TWFwID0gU0tJTExfTEVWRUxfUEVSQ0VOVDtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY2F0ZWdvcmllczogeyBpZDogQ2F0ZWdvcnk7IGxhYmVsOiBzdHJpbmc7IGljb246IHN0cmluZyB9W10gPSBbXG4gICAgeyBpZDogJ2FsbCcsIGxhYmVsOiAnQWxsIFNraWxscycsIGljb246ICdncmlkX3ZpZXcnIH0sXG4gICAgeyBpZDogJ2Zyb250ZW5kJywgbGFiZWw6ICdGcm9udGVuZCcsIGljb246ICdjb2RlJyB9LFxuICAgIHsgaWQ6ICd1aScsIGxhYmVsOiAnVUkgJiBEZXNpZ24nLCBpY29uOiAncGFsZXR0ZScgfSxcbiAgICB7IGlkOiAnc3RhdGUnLCBsYWJlbDogJ1N0YXRlJywgaWNvbjogJ2h1YicgfSxcbiAgICB7IGlkOiAndG9vbGluZycsIGxhYmVsOiAnVG9vbGluZycsIGljb246ICdidWlsZCcgfSxcbiAgICB7IGlkOiAndGVzdGluZycsIGxhYmVsOiAnVGVzdGluZycsIGljb246ICdidWdfcmVwb3J0JyB9LFxuICAgIHsgaWQ6ICdzb2Z0JywgbGFiZWw6ICdTb2Z0IFNraWxscycsIGljb246ICdncm91cHMnIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZpbHRlcmVkU2tpbGxzID0gY29tcHV0ZWQ8U2tpbGxbXT4oKCkgPT4ge1xuICAgIGNvbnN0IGNhdCA9IHRoaXMuYWN0aXZlQ2F0ZWdvcnkoKTtcbiAgICByZXR1cm4gY2F0ID09PSAnYWxsJ1xuICAgICAgPyB0aGlzLnBvcnRmb2xpby5za2lsbHNcbiAgICAgIDogdGhpcy5wb3J0Zm9saW8uc2tpbGxzLmZpbHRlcigocykgPT4gcy5jYXRlZ29yeSA9PT0gY2F0KTtcbiAgfSk7XG5cbiAgc2V0Q2F0ZWdvcnkoY2F0OiBDYXRlZ29yeSk6IHZvaWQge1xuICAgIHRoaXMuYWN0aXZlQ2F0ZWdvcnkuc2V0KGNhdCk7XG4gIH1cblxuICBjb3VudEZvcihjYXQ6IENhdGVnb3J5KTogbnVtYmVyIHtcbiAgICBpZiAoY2F0ID09PSAnYWxsJykgcmV0dXJuIHRoaXMucG9ydGZvbGlvLnNraWxscy5sZW5ndGg7XG4gICAgcmV0dXJuIHRoaXMucG9ydGZvbGlvLnNraWxscy5maWx0ZXIoKHMpID0+IHMuY2F0ZWdvcnkgPT09IGNhdCkubGVuZ3RoO1xuICB9XG5cbiAgdHJhY2tCeU5hbWUoXzogbnVtYmVyLCBpdGVtOiBTa2lsbCk6IHN0cmluZyB7XG4gICAgcmV0dXJuIGl0ZW0ubmFtZTtcbiAgfVxufVxuIiwiPHNlY3Rpb24gaWQ9XCJza2lsbHNcIiBjbGFzcz1cInNlY3Rpb24gc2tpbGxzXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXZlYWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPjxpIGNsYXNzPVwiYmkgYmktbW9ydGFyYm9hcmRcIj48L2k+IFNraWxscyAmIEV4cGVydGlzZTwvc3Bhbj5cbiAgICAgIDxoMiBjbGFzcz1cInNlY3Rpb24tdGl0bGVcIj5BIHRvb2xib3ggYnVpbHQgZm9yIDxzcGFuIGNsYXNzPVwiZ3JhZGllbnQtdGV4dFwiPm1vZGVybiBBbmd1bGFyPC9zcGFuPjwvaDI+XG4gICAgICA8cCBjbGFzcz1cInNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgMysgeWVhcnMgb2YgaGFuZHMtb24gcHJvZHVjdGlvbiBleHBlcmllbmNlIGFjcm9zcyB0aGUgZW50aXJlIGZyb250ZW5kIHN0YWNrLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImNhdGVnb3J5LXRhYnMgcmV2ZWFsXCI+XG4gICAgICBAZm9yIChjYXQgb2YgY2F0ZWdvcmllczsgdHJhY2sgY2F0LmlkKSB7XG4gICAgICAgIDxidXR0b25cbiAgICAgICAgICB0eXBlPVwiYnV0dG9uXCJcbiAgICAgICAgICBjbGFzcz1cImNhdC10YWJcIlxuICAgICAgICAgIFtjbGFzcy5hY3RpdmVdPVwiYWN0aXZlQ2F0ZWdvcnkoKSA9PT0gY2F0LmlkXCJcbiAgICAgICAgICAoY2xpY2spPVwic2V0Q2F0ZWdvcnkoY2F0LmlkKVwiPlxuICAgICAgICAgIDxtYXQtaWNvbj57eyBjYXQuaWNvbiB9fTwvbWF0LWljb24+XG4gICAgICAgICAgPHNwYW4+e3sgY2F0LmxhYmVsIH19PC9zcGFuPlxuICAgICAgICAgIDxzcGFuIGNsYXNzPVwiY291bnRcIj57eyBjb3VudEZvcihjYXQuaWQpIH19PC9zcGFuPlxuICAgICAgICA8L2J1dHRvbj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJza2lsbHMtZ3JpZFwiPlxuICAgICAgQGZvciAoc2tpbGwgb2YgZmlsdGVyZWRTa2lsbHMoKTsgdHJhY2sgdHJhY2tCeU5hbWUoJGluZGV4LCBza2lsbCk7IGxldCBpID0gJGluZGV4KSB7XG4gICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1jYXJkIHJldmVhbFwiIFtzdHlsZS5hbmltYXRpb24tZGVsYXkubXNdPVwiaSAqIDYwXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWhlYWRlclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWljb25cIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cInNraWxsLmljb25cIj48L2k+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJza2lsbC1pbmZvXCI+XG4gICAgICAgICAgICAgIDxoNCBjbGFzcz1cInNraWxsLW5hbWVcIj57eyBza2lsbC5uYW1lIH19PC9oND5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJza2lsbC1tZXRhXCI+e3sgc2tpbGwueWVhcnMgfX0rIHllYXJ7eyBza2lsbC55ZWFycyA+IDEgPyAncycgOiAnJyB9fTwvc3Bhbj5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJza2lsbC1sZXZlbFwiIFtjbGFzc109XCInbHZsLScgKyBza2lsbC5sZXZlbFwiPnt7IHNraWxsLmxldmVsIH19PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cInNraWxsLWJhclwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXItZmlsbFwiIFtzdHlsZS53aWR0aC4lXT1cInBlcmNlbnRNYXBbc2tpbGwubGV2ZWxdXCI+PC9zcGFuPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICA8L2Rpdj5cbiAgICAgIH1cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L3NlY3Rpb24+XG4iLCJleHBvcnQgdHlwZSBTa2lsbExldmVsID0gJ2JlZ2lubmVyJyB8ICdpbnRlcm1lZGlhdGUnIHwgJ2FkdmFuY2VkJyB8ICdleHBlcnQnO1xuXG5leHBvcnQgaW50ZXJmYWNlIFNraWxsIHtcbiAgbmFtZTogc3RyaW5nO1xuICBpY29uOiBzdHJpbmc7IC8vIGJvb3RzdHJhcC1pY29ucyBjbGFzcyBlLmcuICdiaS1maWxldHlwZS10c3gnXG4gIGxldmVsOiBTa2lsbExldmVsO1xuICB5ZWFyczogbnVtYmVyO1xuICBjYXRlZ29yeTogJ2Zyb250ZW5kJyB8ICdzdGF0ZScgfCAndWknIHwgJ3Rvb2xpbmcnIHwgJ3Rlc3RpbmcnIHwgJ3NvZnQnO1xufVxuXG5leHBvcnQgY29uc3QgU0tJTExfTEVWRUxfUEVSQ0VOVDogUmVjb3JkPFNraWxsTGV2ZWwsIG51bWJlcj4gPSB7XG4gIGJlZ2lubmVyOiAzNSxcbiAgaW50ZXJtZWRpYXRlOiA2MCxcbiAgYWR2YW5jZWQ6IDgwLFxuICBleHBlcnQ6IDk1LFxufTtcbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBzaWduYWwsIGNvbXB1dGVkIH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0RGlhbG9nLCBNYXREaWFsb2dNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9kaWFsb2cnO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0QnV0dG9uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvYnV0dG9uJztcbmltcG9ydCB7IE1hdFNuYWNrQmFyLCBNYXRTbmFja0Jhck1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL3NuYWNrLWJhcic7XG5pbXBvcnQgeyBQb3J0Zm9saW9TZXJ2aWNlIH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9zZXJ2aWNlcy9wb3J0Zm9saW8uc2VydmljZSc7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vY29yZS9tb2RlbHMvcHJvamVjdC5tb2RlbCc7XG5pbXBvcnQgeyBQcm9qZWN0RGlhbG9nQ29tcG9uZW50IH0gZnJvbSAnLi9wcm9qZWN0LWRpYWxvZy9wcm9qZWN0LWRpYWxvZyc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9qZWN0cycsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0SWNvbk1vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRTbmFja0Jhck1vZHVsZV0sXG4gIHRlbXBsYXRlVXJsOiAnLi9wcm9qZWN0cy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Byb2plY3RzLnNjc3MnLFxufSlcbmV4cG9ydCBjbGFzcyBQcm9qZWN0c0NvbXBvbmVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb3J0Zm9saW8gPSBpbmplY3QoUG9ydGZvbGlvU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZGlhbG9nID0gaW5qZWN0KE1hdERpYWxvZyk7XG4gIHByaXZhdGUgcmVhZG9ubHkgc25hY2sgPSBpbmplY3QoTWF0U25hY2tCYXIpO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBhY3RpdmVGaWx0ZXIgPSBzaWduYWw8c3RyaW5nPignYWxsJyk7XG4gIHByb3RlY3RlZCByZWFkb25seSBmaWx0ZXJzID0gW1xuICAgIHsgaWQ6ICdhbGwnLCBsYWJlbDogJ0FsbCcgfSxcbiAgICB7IGlkOiAnZmVhdHVyZWQnLCBsYWJlbDogJ0ZlYXR1cmVkJyB9LFxuICAgIHsgaWQ6ICdzYWFzJywgbGFiZWw6ICdTYWFTJyB9LFxuICAgIHsgaWQ6ICdkYXNoYm9hcmQnLCBsYWJlbDogJ0Rhc2hib2FyZHMnIH0sXG4gICAgeyBpZDogJ2Vjb21tZXJjZScsIGxhYmVsOiAnRS1jb21tZXJjZScgfSxcbiAgICB7IGlkOiAncHdhJywgbGFiZWw6ICdQV0EnIH0sXG4gICAgeyBpZDogJ3dlYicsIGxhYmVsOiAnV2ViIEFwcHMnIH0sXG4gIF07XG5cbiAgcHJvdGVjdGVkIHJlYWRvbmx5IGZpbHRlcmVkID0gY29tcHV0ZWQ8UHJvamVjdFtdPigoKSA9PiB7XG4gICAgY29uc3QgZiA9IHRoaXMuYWN0aXZlRmlsdGVyKCk7XG4gICAgaWYgKGYgPT09ICdhbGwnKSByZXR1cm4gdGhpcy5wb3J0Zm9saW8ucHJvamVjdHM7XG4gICAgaWYgKGYgPT09ICdmZWF0dXJlZCcpIHJldHVybiB0aGlzLnBvcnRmb2xpby5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuZmVhdHVyZWQpO1xuICAgIHJldHVybiB0aGlzLnBvcnRmb2xpby5wcm9qZWN0cy5maWx0ZXIoKHApID0+IHAuY2F0ZWdvcnkgPT09IGYpO1xuICB9KTtcblxuICBncmFkaWVudEZvcihpbWFnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnZ3JhZGllbnQtMSc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjZWM0ODk5IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC0yJzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIgMCUsICNlZjQ0NDQgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTMnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2YjZkNCAwJSwgIzNiODJmNiAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtNCc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxIDAlLCAjMDZiNmQ0IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC01JzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YjVjZjYgMCUsICNlYzQ4OTkgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTYnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y0M2Y1ZSAwJSwgI2Y1OWUwYiAxMDAlKScsXG4gICAgfTtcbiAgICByZXR1cm4gbWFwW2ltYWdlXSA/PyAndmFyKC0tZ3JhZGllbnQtcHJpbWFyeSknO1xuICB9XG5cbiAgc2V0RmlsdGVyKGlkOiBzdHJpbmcpOiB2b2lkIHtcbiAgICB0aGlzLmFjdGl2ZUZpbHRlci5zZXQoaWQpO1xuICB9XG5cbiAgb3BlblByb2plY3QocDogUHJvamVjdCwgZXZlbnQ6IEV2ZW50KTogdm9pZCB7XG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcbiAgICB0aGlzLmRpYWxvZy5vcGVuKFByb2plY3REaWFsb2dDb21wb25lbnQsIHtcbiAgICAgIGRhdGE6IHAsXG4gICAgICBtYXhXaWR0aDogJzkwMHB4JyxcbiAgICAgIHdpZHRoOiAnOTV2dycsXG4gICAgICBwYW5lbENsYXNzOiAncHJvamVjdC1kaWFsb2ctcGFuZWwnLFxuICAgICAgYXV0b0ZvY3VzOiBmYWxzZSxcbiAgICB9KTtcbiAgfVxuXG4gIGNvcHlFbWFpbChldmVudDogRXZlbnQpOiB2b2lkIHtcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xuICAgIG5hdmlnYXRvci5jbGlwYm9hcmQ/LndyaXRlVGV4dCh0aGlzLnBvcnRmb2xpby5lbWFpbCk7XG4gICAgdGhpcy5zbmFjay5vcGVuKCdFbWFpbCBjb3BpZWQgdG8gY2xpcGJvYXJkIScsICfinJMnLCB7IGR1cmF0aW9uOiAyNTAwIH0pO1xuICB9XG59XG4iLCI8c2VjdGlvbiBpZD1cInByb2plY3RzXCIgY2xhc3M9XCJzZWN0aW9uIHByb2plY3RzXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXZlYWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPjxpIGNsYXNzPVwiYmkgYmktYnJpZWZjYXNlXCI+PC9pPiBGZWF0dXJlZCBXb3JrPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPlByb2plY3RzIHRoYXQgPHNwYW4gY2xhc3M9XCJncmFkaWVudC10ZXh0XCI+bWFkZSBhbiBpbXBhY3Q8L3NwYW4+PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICBBIHNlbGVjdGlvbiBvZiBwcm9qZWN0cyBJJ3ZlIGRlc2lnbmVkLCBidWlsdCBhbmQgc2hpcHBlZCB0byBwcm9kdWN0aW9uLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cImZpbHRlci1iYXIgcmV2ZWFsXCI+XG4gICAgICBAZm9yIChmIG9mIGZpbHRlcnM7IHRyYWNrIGYuaWQpIHtcbiAgICAgICAgPGJ1dHRvblxuICAgICAgICAgIHR5cGU9XCJidXR0b25cIlxuICAgICAgICAgIGNsYXNzPVwiZmlsdGVyLWJ0blwiXG4gICAgICAgICAgW2NsYXNzLmFjdGl2ZV09XCJhY3RpdmVGaWx0ZXIoKSA9PT0gZi5pZFwiXG4gICAgICAgICAgKGNsaWNrKT1cInNldEZpbHRlcihmLmlkKVwiPlxuICAgICAgICAgIHt7IGYubGFiZWwgfX1cbiAgICAgICAgPC9idXR0b24+XG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwicHJvamVjdHMtZ3JpZFwiPlxuICAgICAgQGZvciAocCBvZiBmaWx0ZXJlZCgpOyB0cmFjayBwLmlkOyBsZXQgaSA9ICRpbmRleCkge1xuICAgICAgICA8YXJ0aWNsZSBjbGFzcz1cInByb2plY3QtY2FyZCByZXZlYWxcIiBbc3R5bGUuYW5pbWF0aW9uLWRlbGF5Lm1zXT1cImkgKiA4MFwiPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWltYWdlXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiZ3JhZGllbnRGb3IocC5pbWFnZSlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbWFnZS1vdmVybGF5XCI+PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtcGF0dGVyblwiPjwvZGl2PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW1hZ2UtY29udGVudFwiPlxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInByb2plY3QteWVhclwiPnt7IHAueWVhciB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgQGlmIChwLmZlYXR1cmVkKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJmZWF0dXJlZC10YWdcIj5cbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc3Rhci1maWxsXCI+PC9pPiBGZWF0dXJlZFxuICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1pY29uLWJpZ1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmlcIiBbbmdDbGFzc109XCJ7XG4gICAgICAgICAgICAgICAgICAnYmktZ3JhcGgtdXAnOiBwLmNhdGVnb3J5ID09PSAnc2FhcycsXG4gICAgICAgICAgICAgICAgICAnYmktYmFnLWNoZWNrJzogcC5jYXRlZ29yeSA9PT0gJ2Vjb21tZXJjZScsXG4gICAgICAgICAgICAgICAgICAnYmktYmFyLWNoYXJ0JzogcC5jYXRlZ29yeSA9PT0gJ2Rhc2hib2FyZCcsXG4gICAgICAgICAgICAgICAgICAnYmktZ2xvYmUnOiBwLmNhdGVnb3J5ID09PSAnd2ViJyxcbiAgICAgICAgICAgICAgICAgICdiaS1waG9uZSc6IHAuY2F0ZWdvcnkgPT09ICdwd2EnXG4gICAgICAgICAgICAgICAgfVwiPjwvaT5cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhcmQtYWN0aW9uc1wiPlxuICAgICAgICAgICAgICA8YnV0dG9uXG4gICAgICAgICAgICAgICAgdHlwZT1cImJ1dHRvblwiXG4gICAgICAgICAgICAgICAgY2xhc3M9XCJhY3Rpb24tYnRuXCJcbiAgICAgICAgICAgICAgICAoY2xpY2spPVwib3BlblByb2plY3QocCwgJGV2ZW50KVwiXG4gICAgICAgICAgICAgICAgYXJpYS1sYWJlbD1cIlZpZXcgZGV0YWlsc1wiPlxuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktYXJyb3dzLWFuZ2xlLWV4cGFuZFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICAgIEBpZiAocC5kZW1vVXJsKSB7XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwicC5kZW1vVXJsXCIgdGFyZ2V0PVwiX2JsYW5rXCIgcmVsPVwibm9vcGVuZXJcIiBjbGFzcz1cImFjdGlvbi1idG5cIiBhcmlhLWxhYmVsPVwiTGl2ZSBkZW1vXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWJveC1hcnJvdy11cC1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGlmIChwLnJlcG9VcmwpIHtcbiAgICAgICAgICAgICAgICA8YSBbaHJlZl09XCJwLnJlcG9VcmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzPVwiYWN0aW9uLWJ0blwiIGFyaWEtbGFiZWw9XCJTb3VyY2UgY29kZVwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1naXRodWJcIj48L2k+XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LWJvZHlcIj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJwcm9qZWN0LXRhZ3NcIj5cbiAgICAgICAgICAgICAgQGZvciAodGFnIG9mIHAudGFncy5zbGljZSgwLCAzKTsgdHJhY2sgdGFnKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJ0YWdcIj57eyB0YWcgfX08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgQGlmIChwLnRhZ3MubGVuZ3RoID4gMykge1xuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidGFnIG1vcmVcIj4re3sgcC50YWdzLmxlbmd0aCAtIDMgfX08L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGgzIGNsYXNzPVwicHJvamVjdC10aXRsZVwiPnt7IHAudGl0bGUgfX08L2gzPlxuICAgICAgICAgICAgPHAgY2xhc3M9XCJwcm9qZWN0LWRlc2NcIj57eyBwLnNob3J0RGVzY3JpcHRpb24gfX08L3A+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwicHJvamVjdC1mb290ZXJcIj5cbiAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vcmUtbGlua1wiIChjbGljayk9XCJvcGVuUHJvamVjdChwLCAkZXZlbnQpXCI+XG4gICAgICAgICAgICAgICAgVmlldyBjYXNlIHN0dWR5XG4gICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1hcnJvdy1yaWdodFwiPjwvaT5cbiAgICAgICAgICAgICAgPC9idXR0b24+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgSW5qZWN0LCBpbmplY3QgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBNQVRfRElBTE9HX0RBVEEsIE1hdERpYWxvZ01vZHVsZSwgTWF0RGlhbG9nUmVmIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvZGlhbG9nJztcbmltcG9ydCB7IE1hdEJ1dHRvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2J1dHRvbic7XG5pbXBvcnQgeyBNYXRJY29uTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvaWNvbic7XG5pbXBvcnQgeyBQcm9qZWN0IH0gZnJvbSAnLi4vLi4vLi4vLi4vLi4vY29yZS9tb2RlbHMvcHJvamVjdC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC1wcm9qZWN0LWRpYWxvZycsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdERpYWxvZ01vZHVsZSwgTWF0QnV0dG9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Byb2plY3QtZGlhbG9nLmh0bWwnLFxuICBzdHlsZVVybDogJy4vcHJvamVjdC1kaWFsb2cuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIFByb2plY3REaWFsb2dDb21wb25lbnQge1xuICBwcml2YXRlIHJlYWRvbmx5IGRpYWxvZ1JlZiA9IGluamVjdChNYXREaWFsb2dSZWY8UHJvamVjdERpYWxvZ0NvbXBvbmVudD4pO1xuXG4gIGNvbnN0cnVjdG9yKEBJbmplY3QoTUFUX0RJQUxPR19EQVRBKSBwdWJsaWMgcHJvamVjdDogUHJvamVjdCkge31cblxuICBncmFkaWVudEZvcihpbWFnZTogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnZ3JhZGllbnQtMSc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjNjM2NmYxIDAlLCAjZWM0ODk5IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC0yJzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICNmNTllMGIgMCUsICNlZjQ0NDQgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTMnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgIzA2YjZkNCAwJSwgIzNiODJmNiAxMDAlKScsXG4gICAgICAnZ3JhZGllbnQtNCc6ICdsaW5lYXItZ3JhZGllbnQoMTM1ZGVnLCAjMTBiOTgxIDAlLCAjMDZiNmQ0IDEwMCUpJyxcbiAgICAgICdncmFkaWVudC01JzogJ2xpbmVhci1ncmFkaWVudCgxMzVkZWcsICM4YjVjZjYgMCUsICNlYzQ4OTkgMTAwJSknLFxuICAgICAgJ2dyYWRpZW50LTYnOiAnbGluZWFyLWdyYWRpZW50KDEzNWRlZywgI2Y0M2Y1ZSAwJSwgI2Y1OWUwYiAxMDAlKScsXG4gICAgfTtcbiAgICByZXR1cm4gbWFwW2ltYWdlXSA/PyAndmFyKC0tZ3JhZGllbnQtcHJpbWFyeSknO1xuICB9XG5cbiAgY2xvc2UoKTogdm9pZCB7XG4gICAgdGhpcy5kaWFsb2dSZWYuY2xvc2UoKTtcbiAgfVxufVxuIiwiPGRpdiBjbGFzcz1cImRpYWxvZy1jb250YWluZXJcIj5cbiAgPGJ1dHRvbiBjbGFzcz1cImNsb3NlLWJ0blwiIChjbGljayk9XCJjbG9zZSgpXCIgYXJpYS1sYWJlbD1cIkNsb3NlXCI+XG4gICAgPG1hdC1pY29uPmNsb3NlPC9tYXQtaWNvbj5cbiAgPC9idXR0b24+XG5cbiAgPGRpdiBjbGFzcz1cImRpYWxvZy1oZXJvXCIgW3N0eWxlLmJhY2tncm91bmRdPVwiZ3JhZGllbnRGb3IocHJvamVjdC5pbWFnZSlcIj5cbiAgICA8ZGl2IGNsYXNzPVwiaGVyby1wYXR0ZXJuXCI+PC9kaXY+XG4gICAgPGRpdiBjbGFzcz1cImhlcm8tY29udGVudFwiPlxuICAgICAgPGRpdiBjbGFzcz1cImhlcm8tbWV0YVwiPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGEtcGlsbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2FsZW5kYXIzXCI+PC9pPiB7eyBwcm9qZWN0LnllYXIgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICA8c3BhbiBjbGFzcz1cIm1ldGEtcGlsbFwiPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktdGFnLWZpbGxcIj48L2k+IHt7IHByb2plY3QuY2F0ZWdvcnkgfX1cbiAgICAgICAgPC9zcGFuPlxuICAgICAgICBAaWYgKHByb2plY3QuY2xpZW50KSB7XG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJtZXRhLXBpbGxcIj5cbiAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktYnVpbGRpbmdcIj48L2k+IHt7IHByb2plY3QuY2xpZW50IH19XG4gICAgICAgICAgPC9zcGFuPlxuICAgICAgICB9XG4gICAgICA8L2Rpdj5cbiAgICAgIDxoMiBjbGFzcz1cImRpYWxvZy10aXRsZVwiPnt7IHByb2plY3QudGl0bGUgfX08L2gyPlxuICAgIDwvZGl2PlxuICA8L2Rpdj5cblxuICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWJvZHlcIj5cbiAgICA8cCBjbGFzcz1cImRpYWxvZy1kZXNjcmlwdGlvblwiPnt7IHByb2plY3QuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICA8aDQgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+XG4gICAgICA8bWF0LWljb24+YXV0b19hd2Vzb21lPC9tYXQtaWNvbj4gS2V5IEZlYXR1cmVzXG4gICAgPC9oND5cbiAgICA8dWwgY2xhc3M9XCJmZWF0dXJlcy1saXN0XCI+XG4gICAgICBAZm9yIChmIG9mIHByb2plY3QuZmVhdHVyZXM7IHRyYWNrIGYpIHtcbiAgICAgICAgPGxpPlxuICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktY2hlY2syLWNpcmNsZVwiPjwvaT5cbiAgICAgICAgICA8c3Bhbj57eyBmIH19PC9zcGFuPlxuICAgICAgICA8L2xpPlxuICAgICAgfVxuICAgIDwvdWw+XG5cbiAgICA8aDQgY2xhc3M9XCJzZWN0aW9uLWxhYmVsXCI+XG4gICAgICA8bWF0LWljb24+bGF5ZXJzPC9tYXQtaWNvbj4gVGVjaCBTdGFja1xuICAgIDwvaDQ+XG4gICAgPGRpdiBjbGFzcz1cInRhZ3MtZ3JpZFwiPlxuICAgICAgQGZvciAodCBvZiBwcm9qZWN0LnRhZ3M7IHRyYWNrIHQpIHtcbiAgICAgICAgPHNwYW4gY2xhc3M9XCJ0ZWNoLXRhZ1wiPnt7IHQgfX08L3NwYW4+XG4gICAgICB9XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwiZGlhbG9nLWFjdGlvbnNcIj5cbiAgICAgIEBpZiAocHJvamVjdC5kZW1vVXJsKSB7XG4gICAgICAgIDxhIFtocmVmXT1cInByb2plY3QuZGVtb1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgY2xhc3M9XCJidG4gYnRuLXByaW1hcnlcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWJveC1hcnJvdy11cC1yaWdodFwiPjwvaT4gTGl2ZSBEZW1vXG4gICAgICAgIDwvYT5cbiAgICAgIH1cbiAgICAgIEBpZiAocHJvamVjdC5yZXBvVXJsKSB7XG4gICAgICAgIDxhIFtocmVmXT1cInByb2plY3QucmVwb1VybFwiIHRhcmdldD1cIl9ibGFua1wiIHJlbD1cIm5vb3BlbmVyXCIgY2xhc3M9XCJidG4gYnRuLW91dGxpbmUtbGlnaHRcIj5cbiAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWdpdGh1YlwiPjwvaT4gU291cmNlIENvZGVcbiAgICAgICAgPC9hPlxuICAgICAgfVxuICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0biBidG4tZ2hvc3RcIiAoY2xpY2spPVwiY2xvc2UoKVwiPlxuICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXgtbGdcIj48L2k+IENsb3NlXG4gICAgICA8L2J1dHRvbj5cbiAgICA8L2Rpdj5cbiAgPC9kaXY+XG48L2Rpdj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2VydmljZXMvcG9ydGZvbGlvLnNlcnZpY2UnO1xuXG5AQ29tcG9uZW50KHtcbiAgc2VsZWN0b3I6ICdhcHAtZXhwZXJpZW5jZScsXG4gIGltcG9ydHM6IFtDb21tb25Nb2R1bGUsIE1hdEljb25Nb2R1bGVdLFxuICB0ZW1wbGF0ZVVybDogJy4vZXhwZXJpZW5jZS5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL2V4cGVyaWVuY2Uuc2NzcycsXG59KVxuZXhwb3J0IGNsYXNzIEV4cGVyaWVuY2VDb21wb25lbnQge1xuICBwcm90ZWN0ZWQgcmVhZG9ubHkgcG9ydGZvbGlvID0gaW5qZWN0KFBvcnRmb2xpb1NlcnZpY2UpO1xuXG4gIHByb3RlY3RlZCB0eXBlTGFiZWwodDogc3RyaW5nKTogc3RyaW5nIHtcbiAgICBjb25zdCBtYXA6IFJlY29yZDxzdHJpbmcsIHN0cmluZz4gPSB7XG4gICAgICAnZnVsbC10aW1lJzogJ0Z1bGwtdGltZScsXG4gICAgICAncGFydC10aW1lJzogJ1BhcnQtdGltZScsXG4gICAgICBjb250cmFjdDogJ0NvbnRyYWN0JyxcbiAgICAgIGZyZWVsYW5jZTogJ0ZyZWVsYW5jZScsXG4gICAgfTtcbiAgICByZXR1cm4gbWFwW3RdID8/IHQ7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGlkPVwiZXhwZXJpZW5jZVwiIGNsYXNzPVwic2VjdGlvbiBleHBlcmllbmNlXCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXZlYWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPjxpIGNsYXNzPVwiYmkgYmktYnJpZWZjYXNlXCI+PC9pPiBFeHBlcmllbmNlPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkEgam91cm5leSBvZiA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5ncm93dGggJiBpbXBhY3Q8L3NwYW4+PC9oMj5cbiAgICAgIDxwIGNsYXNzPVwic2VjdGlvbi1zdWJ0aXRsZVwiPlxuICAgICAgICAzKyB5ZWFycyBhY3Jvc3MgcHJvZHVjdCBjb21wYW5pZXMsIGFnZW5jaWVzIGFuZCBmcmVlbGFuY2Ug4oCUIGJ1aWxkaW5nIHJlYWwtd29ybGQgYXBwcy5cbiAgICAgIDwvcD5cbiAgICA8L2Rpdj5cblxuICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZVwiPlxuICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWxpbmVcIj48L2Rpdj5cbiAgICAgIEBmb3IgKGV4cCBvZiBwb3J0Zm9saW8uZXhwZXJpZW5jZXM7IHRyYWNrIGV4cC5pZDsgbGV0IGkgPSAkaW5kZXgpIHtcbiAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWl0ZW0gcmV2ZWFsXCIgW2NsYXNzLnJpZ2h0XT1cImkgJSAyID09PSAxXCI+XG4gICAgICAgICAgPGRpdiBjbGFzcz1cInRpbWVsaW5lLWRvdFwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPndvcms8L21hdC1pY29uPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJ0aW1lbGluZS1jYXJkXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY2FyZC10b3BcIj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJwZXJpb2RcIj5cbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWNhbGVuZGFyM1wiPjwvaT4ge3sgZXhwLnBlcmlvZCB9fVxuICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwidHlwZS1waWxsXCIgW2NsYXNzXT1cIid0eXBlLScgKyBleHAudHlwZVwiPlxuICAgICAgICAgICAgICAgIHt7IHR5cGVMYWJlbChleHAudHlwZSkgfX1cbiAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMyBjbGFzcz1cInJvbGVcIj57eyBleHAucm9sZSB9fTwvaDM+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29tcGFueVwiPlxuICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWJ1aWxkaW5nXCI+PC9pPlxuICAgICAgICAgICAgICA8c3Bhbj57eyBleHAuY29tcGFueSB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkb3Qtc2VwXCI+wrc8L3NwYW4+XG4gICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktZ2VvLWFsdFwiPjwvaT5cbiAgICAgICAgICAgICAgPHNwYW4+e3sgZXhwLmxvY2F0aW9uIH19PC9zcGFuPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzPVwiZGVzY3JpcHRpb25cIj57eyBleHAuZGVzY3JpcHRpb24gfX08L3A+XG5cbiAgICAgICAgICAgIDxoNCBjbGFzcz1cImFjaGlldmUtdGl0bGVcIj5LZXkgQWNoaWV2ZW1lbnRzPC9oND5cbiAgICAgICAgICAgIDx1bCBjbGFzcz1cImFjaGlldmUtbGlzdFwiPlxuICAgICAgICAgICAgICBAZm9yIChhIG9mIGV4cC5hY2hpZXZlbWVudHM7IHRyYWNrIGEpIHtcbiAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLXRyb3BoeVwiPjwvaT5cbiAgICAgICAgICAgICAgICAgIDxzcGFuPnt7IGEgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC91bD5cblxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0YWNrXCI+XG4gICAgICAgICAgICAgIEBmb3IgKHMgb2YgZXhwLnN0YWNrOyB0cmFjayBzKSB7XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJzdGFjay1waWxsXCI+e3sgcyB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0IH0gZnJvbSAnQGFuZ3VsYXIvY29yZSc7XG5pbXBvcnQgeyBDb21tb25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9jb21tb24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgUG9ydGZvbGlvU2VydmljZSB9IGZyb20gJy4uLy4uLy4uLy4uL2NvcmUvc2VydmljZXMvcG9ydGZvbGlvLnNlcnZpY2UnO1xuaW1wb3J0IHsgVGVzdGltb25pYWwgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL21vZGVscy90ZXN0aW1vbmlhbC5tb2RlbCc7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ2FwcC10ZXN0aW1vbmlhbHMnLFxuICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlLCBNYXRJY29uTW9kdWxlXSxcbiAgdGVtcGxhdGVVcmw6ICcuL3Rlc3RpbW9uaWFscy5odG1sJyxcbiAgc3R5bGVVcmw6ICcuL3Rlc3RpbW9uaWFscy5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgVGVzdGltb25pYWxzQ29tcG9uZW50IHtcbiAgcHJvdGVjdGVkIHJlYWRvbmx5IHBvcnRmb2xpbyA9IGluamVjdChQb3J0Zm9saW9TZXJ2aWNlKTtcblxuICBwcm90ZWN0ZWQgc3RhcnNBcnJheShuOiBudW1iZXIpOiBudW1iZXJbXSB7XG4gICAgcmV0dXJuIEFycmF5LmZyb20oeyBsZW5ndGg6IG4gfSwgKF8sIGkpID0+IGkpO1xuICB9XG5cbiAgdHJhY2tCeUlkKF86IG51bWJlciwgdDogVGVzdGltb25pYWwpOiBzdHJpbmcge1xuICAgIHJldHVybiB0LmlkO1xuICB9XG59XG4iLCI8c2VjdGlvbiBpZD1cInRlc3RpbW9uaWFsc1wiIGNsYXNzPVwic2VjdGlvbiB0ZXN0aW1vbmlhbHNcIj5cbiAgPGRpdiBjbGFzcz1cImNvbnRhaW5lci14XCI+XG4gICAgPGRpdiBjbGFzcz1cInRleHQtY2VudGVyIHJldmVhbFwiPlxuICAgICAgPHNwYW4gY2xhc3M9XCJleWVicm93XCI+PGkgY2xhc3M9XCJiaSBiaS1jaGF0LXF1b3RlXCI+PC9pPiBUZXN0aW1vbmlhbHM8L3NwYW4+XG4gICAgICA8aDIgY2xhc3M9XCJzZWN0aW9uLXRpdGxlXCI+V2hhdCA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5jbGllbnRzICYgdGVhbXM8L3NwYW4+IHNheTwvaDI+XG4gICAgICA8cCBjbGFzcz1cInNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgSG9uZXN0IGZlZWRiYWNrIGZyb20gcGVvcGxlIEkndmUgaGFkIHRoZSBwbGVhc3VyZSB0byB3b3JrIHdpdGguXG4gICAgICA8L3A+XG4gICAgPC9kaXY+XG5cbiAgICA8ZGl2IGNsYXNzPVwidGVzdGltb25pYWxzLWdyaWRcIj5cbiAgICAgIEBmb3IgKHQgb2YgcG9ydGZvbGlvLnRlc3RpbW9uaWFsczsgdHJhY2sgdHJhY2tCeUlkKCRpbmRleCwgdCk7IGxldCBpID0gJGluZGV4KSB7XG4gICAgICAgIDxhcnRpY2xlIGNsYXNzPVwidGVzdGltb25pYWwtY2FyZCByZXZlYWxcIiBbc3R5bGUuYW5pbWF0aW9uLWRlbGF5Lm1zXT1cImkgKiAxMDBcIj5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicXVvdGUtaWNvblwiPlxuICAgICAgICAgICAgPG1hdC1pY29uPmZvcm1hdF9xdW90ZTwvbWF0LWljb24+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwicmF0aW5nXCI+XG4gICAgICAgICAgICBAZm9yIChzIG9mIHN0YXJzQXJyYXkodC5yYXRpbmcpOyB0cmFjayAkaW5kZXgpIHtcbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1zdGFyLWZpbGxcIj48L2k+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8cCBjbGFzcz1cIm1lc3NhZ2VcIj5cInt7IHQubWVzc2FnZSB9fVwiPC9wPlxuXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImF1dGhvclwiPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImF2YXRhclwiPnt7IHQuYXZhdGFyIH19PC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiYXV0aG9yLWluZm9cIj5cbiAgICAgICAgICAgICAgPGg0IGNsYXNzPVwibmFtZVwiPnt7IHQubmFtZSB9fTwvaDQ+XG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwicm9sZVwiPnt7IHQucm9sZSB9fSDCtyB7eyB0LmNvbXBhbnkgfX08L3A+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9hcnRpY2xlPlxuICAgICAgfVxuICAgIDwvZGl2PlxuICA8L2Rpdj5cbjwvc2VjdGlvbj5cbiIsImltcG9ydCB7IENvbXBvbmVudCwgaW5qZWN0LCBzaWduYWwgfSBmcm9tICdAYW5ndWxhci9jb3JlJztcbmltcG9ydCB7IENvbW1vbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL2NvbW1vbic7XG5pbXBvcnQgeyBGb3JtQnVpbGRlciwgUmVhY3RpdmVGb3Jtc01vZHVsZSwgVmFsaWRhdG9ycyB9IGZyb20gJ0Bhbmd1bGFyL2Zvcm1zJztcbmltcG9ydCB7IE1hdEZvcm1GaWVsZE1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2Zvcm0tZmllbGQnO1xuaW1wb3J0IHsgTWF0SW5wdXRNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9pbnB1dCc7XG5pbXBvcnQgeyBNYXRCdXR0b25Nb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9idXR0b24nO1xuaW1wb3J0IHsgTWF0SWNvbk1vZHVsZSB9IGZyb20gJ0Bhbmd1bGFyL21hdGVyaWFsL2ljb24nO1xuaW1wb3J0IHsgTWF0UHJvZ3Jlc3NTcGlubmVyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvcHJvZ3Jlc3Mtc3Bpbm5lcic7XG5pbXBvcnQgeyBNYXRTZWxlY3RNb2R1bGUgfSBmcm9tICdAYW5ndWxhci9tYXRlcmlhbC9zZWxlY3QnO1xuaW1wb3J0IHsgTWF0U25hY2tCYXIsIE1hdFNuYWNrQmFyTW9kdWxlIH0gZnJvbSAnQGFuZ3VsYXIvbWF0ZXJpYWwvc25hY2stYmFyJztcbmltcG9ydCB7IFBvcnRmb2xpb1NlcnZpY2UgfSBmcm9tICcuLi8uLi8uLi8uLi9jb3JlL3NlcnZpY2VzL3BvcnRmb2xpby5zZXJ2aWNlJztcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiAnYXBwLWNvbnRhY3QnLFxuICBpbXBvcnRzOiBbXG4gICAgQ29tbW9uTW9kdWxlLFxuICAgIFJlYWN0aXZlRm9ybXNNb2R1bGUsXG4gICAgTWF0Rm9ybUZpZWxkTW9kdWxlLFxuICAgIE1hdElucHV0TW9kdWxlLFxuICAgIE1hdEJ1dHRvbk1vZHVsZSxcbiAgICBNYXRJY29uTW9kdWxlLFxuICAgIE1hdFByb2dyZXNzU3Bpbm5lck1vZHVsZSxcbiAgICBNYXRTZWxlY3RNb2R1bGUsXG4gICAgTWF0U25hY2tCYXJNb2R1bGUsXG4gIF0sXG4gIHRlbXBsYXRlVXJsOiAnLi9jb250YWN0Lmh0bWwnLFxuICBzdHlsZVVybDogJy4vY29udGFjdC5zY3NzJyxcbn0pXG5leHBvcnQgY2xhc3MgQ29udGFjdENvbXBvbmVudCB7XG4gIHByb3RlY3RlZCByZWFkb25seSBwb3J0Zm9saW8gPSBpbmplY3QoUG9ydGZvbGlvU2VydmljZSk7XG4gIHByaXZhdGUgcmVhZG9ubHkgZmIgPSBpbmplY3QoRm9ybUJ1aWxkZXIpO1xuICBwcml2YXRlIHJlYWRvbmx5IHNuYWNrID0gaW5qZWN0KE1hdFNuYWNrQmFyKTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgbG9hZGluZyA9IHNpZ25hbChmYWxzZSk7XG4gIHByb3RlY3RlZCByZWFkb25seSBzdWJtaXR0ZWQgPSBzaWduYWwoZmFsc2UpO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBmb3JtID0gdGhpcy5mYi5ub25OdWxsYWJsZS5ncm91cCh7XG4gICAgbmFtZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMildXSxcbiAgICBlbWFpbDogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5lbWFpbF1dLFxuICAgIHN1YmplY3Q6IFsnJywgW1ZhbGlkYXRvcnMucmVxdWlyZWQsIFZhbGlkYXRvcnMubWluTGVuZ3RoKDQpXV0sXG4gICAgbWVzc2FnZTogWycnLCBbVmFsaWRhdG9ycy5yZXF1aXJlZCwgVmFsaWRhdG9ycy5taW5MZW5ndGgoMTApXV0sXG4gICAgYnVkZ2V0OiBbJ25vdC1zdXJlJ10sXG4gIH0pO1xuXG4gIHByb3RlY3RlZCByZWFkb25seSBidWRnZXRPcHRpb25zID0gW1xuICAgIHsgdmFsdWU6ICdub3Qtc3VyZScsIGxhYmVsOiAnTm90IHN1cmUgeWV0JyB9LFxuICAgIHsgdmFsdWU6ICc8MWsnLCBsYWJlbDogJzwgJDEsMDAwJyB9LFxuICAgIHsgdmFsdWU6ICcxay01aycsIGxhYmVsOiAnJDFrIOKAlCAkNWsnIH0sXG4gICAgeyB2YWx1ZTogJzVrLTE1aycsIGxhYmVsOiAnJDVrIOKAlCAkMTVrJyB9LFxuICAgIHsgdmFsdWU6ICcxNWsrJywgbGFiZWw6ICckMTVrKycgfSxcbiAgXTtcblxuICBwcm90ZWN0ZWQgcmVhZG9ubHkgY29udGFjdEluZm8gPSBbXG4gICAge1xuICAgICAgaWNvbjogJ2JpLWVudmVsb3BlLWF0JyxcbiAgICAgIGxhYmVsOiAnRW1haWwnLFxuICAgICAgdmFsdWU6ICdhaG1lZC5oYXNzYW4uZGV2QGV4YW1wbGUuY29tJyxcbiAgICAgIGhyZWY6ICdtYWlsdG86YWhtZWQuaGFzc2FuLmRldkBleGFtcGxlLmNvbScsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktdGVsZXBob25lJyxcbiAgICAgIGxhYmVsOiAnUGhvbmUnLFxuICAgICAgdmFsdWU6ICcrMjAgMTAwIDEyMyA0NTY3JyxcbiAgICAgIGhyZWY6ICd0ZWw6KzIwMTAwMTIzNDU2NycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktZ2VvLWFsdCcsXG4gICAgICBsYWJlbDogJ0xvY2F0aW9uJyxcbiAgICAgIHZhbHVlOiAnQ2Fpcm8sIEVneXB0IMK3IFJlbW90ZSBPSycsXG4gICAgICBocmVmOiAnIycsXG4gICAgfSxcbiAgICB7XG4gICAgICBpY29uOiAnYmktY2xvY2snLFxuICAgICAgbGFiZWw6ICdXb3JraW5nIGhvdXJzJyxcbiAgICAgIHZhbHVlOiAnU3VuIOKAlCBUaHUgwrcgOSBBTSDigJQgNiBQTSAoR01UKzIpJyxcbiAgICAgIGhyZWY6ICcjJyxcbiAgICB9LFxuICBdO1xuXG4gIHN1Ym1pdCgpOiB2b2lkIHtcbiAgICBpZiAodGhpcy5mb3JtLmludmFsaWQpIHtcbiAgICAgIHRoaXMuZm9ybS5tYXJrQWxsQXNUb3VjaGVkKCk7XG4gICAgICB0aGlzLnNuYWNrLm9wZW4oJ1BsZWFzZSBmaWxsIGluIGFsbCByZXF1aXJlZCBmaWVsZHMgY29ycmVjdGx5LicsICdHb3QgaXQnLCB7IGR1cmF0aW9uOiAzNTAwIH0pO1xuICAgICAgcmV0dXJuO1xuICAgIH1cblxuICAgIHRoaXMubG9hZGluZy5zZXQodHJ1ZSk7XG4gICAgLy8gU2ltdWxhdGUgc2VuZGluZ1xuICAgIHNldFRpbWVvdXQoKCkgPT4ge1xuICAgICAgdGhpcy5sb2FkaW5nLnNldChmYWxzZSk7XG4gICAgICB0aGlzLnN1Ym1pdHRlZC5zZXQodHJ1ZSk7XG4gICAgICB0aGlzLnNuYWNrLm9wZW4oJ/CfjokgTWVzc2FnZSBzZW50ISBJIHdpbGwgZ2V0IGJhY2sgdG8geW91IHdpdGhpbiAyNCBob3Vycy4nLCAnT0snLCB7XG4gICAgICAgIGR1cmF0aW9uOiA1MDAwLFxuICAgICAgfSk7XG4gICAgICB0aGlzLmZvcm0ucmVzZXQoeyBuYW1lOiAnJywgZW1haWw6ICcnLCBzdWJqZWN0OiAnJywgbWVzc2FnZTogJycsIGJ1ZGdldDogJ25vdC1zdXJlJyB9KTtcbiAgICAgIHNldFRpbWVvdXQoKCkgPT4gdGhpcy5zdWJtaXR0ZWQuc2V0KGZhbHNlKSwgNjAwMCk7XG4gICAgfSwgMTUwMCk7XG4gIH1cbn1cbiIsIjxzZWN0aW9uIGlkPVwiY29udGFjdFwiIGNsYXNzPVwic2VjdGlvbiBjb250YWN0XCI+XG4gIDxkaXYgY2xhc3M9XCJjb250YWluZXIteFwiPlxuICAgIDxkaXYgY2xhc3M9XCJ0ZXh0LWNlbnRlciByZXZlYWxcIj5cbiAgICAgIDxzcGFuIGNsYXNzPVwiZXllYnJvd1wiPjxpIGNsYXNzPVwiYmkgYmktc2VuZFwiPjwvaT4gR2V0IGluIHRvdWNoPC9zcGFuPlxuICAgICAgPGgyIGNsYXNzPVwic2VjdGlvbi10aXRsZVwiPkxldCdzIGJ1aWxkIHNvbWV0aGluZyA8c3BhbiBjbGFzcz1cImdyYWRpZW50LXRleHRcIj5hbWF6aW5nIHRvZ2V0aGVyPC9zcGFuPjwvaDI+XG4gICAgICA8cCBjbGFzcz1cInNlY3Rpb24tc3VidGl0bGVcIj5cbiAgICAgICAgSGF2ZSBhIHByb2plY3QgaW4gbWluZCwgYSBqb2Igb3Bwb3J0dW5pdHksIG9yIGp1c3Qgd2FudCB0byBzYXkgaGk/IERyb3AgbWUgYSBtZXNzYWdlLlxuICAgICAgPC9wPlxuICAgIDwvZGl2PlxuXG4gICAgPGRpdiBjbGFzcz1cInJvdyBnLTQgY29udGFjdC1yb3dcIj5cbiAgICAgIDwhLS0gQ29udGFjdCBpbmZvIC0tPlxuICAgICAgPGRpdiBjbGFzcz1cImNvbC1sZy01IHJldmVhbFwiPlxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1jYXJkXCI+XG4gICAgICAgICAgPGgzIGNsYXNzPVwiaW5mby10aXRsZVwiPlxuICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJncmFkaWVudC10ZXh0XCI+e3sgcG9ydGZvbGlvLm5hbWUgfX08L3NwYW4+XG4gICAgICAgICAgPC9oMz5cbiAgICAgICAgICA8cCBjbGFzcz1cImluZm8tc3ViXCI+e3sgcG9ydGZvbGlvLnJvbGUgfX08L3A+XG4gICAgICAgICAgPHAgY2xhc3M9XCJpbmZvLXRleHRcIj5cbiAgICAgICAgICAgIEknbSBhbHdheXMgb3BlbiB0byBkaXNjdXNzaW5nIHByb2R1Y3QgZGVzaWduLCBkZXZlbG9wbWVudCB3b3JrLCBvclxuICAgICAgICAgICAgcGFydG5lcnNoaXAgb3Bwb3J0dW5pdGllcy4gTGV0J3MgY2hhdCFcbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5mby1saXN0XCI+XG4gICAgICAgICAgICBAZm9yIChpdGVtIG9mIGNvbnRhY3RJbmZvOyB0cmFjayBpdGVtLmxhYmVsKSB7XG4gICAgICAgICAgICAgIDxhIFtocmVmXT1cIml0ZW0uaHJlZlwiIGNsYXNzPVwiaW5mby1pdGVtXCI+XG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImluZm8taWNvblwiPlxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaVwiIFtuZ0NsYXNzXT1cIml0ZW0uaWNvblwiPjwvaT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJpbmZvLWxhYmVsXCI+e3sgaXRlbS5sYWJlbCB9fTwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiaW5mby12YWx1ZVwiPnt7IGl0ZW0udmFsdWUgfX08L3NwYW4+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzb2NpYWwtc3RyaXBcIj5cbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic3RyaXAtbGFiZWxcIj5GaW5kIG1lIG9uPC9zcGFuPlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInN0cmlwLWljb25zXCI+XG4gICAgICAgICAgICAgIEBmb3IgKHMgb2YgcG9ydGZvbGlvLnNvY2lhbHM7IHRyYWNrIHMudXJsKSB7XG4gICAgICAgICAgICAgICAgPGEgW2hyZWZdPVwicy51cmxcIiB0YXJnZXQ9XCJfYmxhbmtcIiByZWw9XCJub29wZW5lclwiIGNsYXNzPVwic3RyaXAtaWNvblwiIFthdHRyLmFyaWEtbGFiZWxdPVwicy5uYW1lXCI+XG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpXCIgW25nQ2xhc3NdPVwicy5pY29uXCI+PC9pPlxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDwhLS0gRm9ybSAtLT5cbiAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbGctNyByZXZlYWxcIj5cbiAgICAgICAgPGZvcm0gY2xhc3M9XCJjb250YWN0LWZvcm1cIiBbZm9ybUdyb3VwXT1cImZvcm1cIiAobmdTdWJtaXQpPVwic3VibWl0KClcIiBub3ZhbGlkYXRlPlxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLTZcIj5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+WW91ciBuYW1lICo8L21hdC1sYWJlbD5cbiAgICAgICAgICAgICAgICA8aW5wdXQgbWF0SW5wdXQgZm9ybUNvbnRyb2xOYW1lPVwibmFtZVwiIHBsYWNlaG9sZGVyPVwiSm9obiBEb2VcIiBhdXRvY29tcGxldGU9XCJuYW1lXCIgLz5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0UHJlZml4PnBlcnNvbjwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgQGlmIChmb3JtLmdldCgnbmFtZScpPy5oYXNFcnJvcigncmVxdWlyZWQnKSAmJiBmb3JtLmdldCgnbmFtZScpPy50b3VjaGVkKSB7XG4gICAgICAgICAgICAgICAgICA8bWF0LWVycm9yPk5hbWUgaXMgcmVxdWlyZWQ8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJjb2wtbWQtNlwiPlxuICAgICAgICAgICAgICA8bWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICAgICAgPG1hdC1sYWJlbD5FbWFpbCAqPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IHR5cGU9XCJlbWFpbFwiIGZvcm1Db250cm9sTmFtZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJ5b3VAZXhhbXBsZS5jb21cIiBhdXRvY29tcGxldGU9XCJlbWFpbFwiIC8+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5lbWFpbDwvbWF0LWljb24+XG4gICAgICAgICAgICAgICAgQGlmIChmb3JtLmdldCgnZW1haWwnKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgZm9ybS5nZXQoJ2VtYWlsJyk/LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3I+RW1haWwgaXMgcmVxdWlyZWQ8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgQGlmIChmb3JtLmdldCgnZW1haWwnKT8uaGFzRXJyb3IoJ2VtYWlsJykgJiYgZm9ybS5nZXQoJ2VtYWlsJyk/LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3I+UGxlYXNlIGVudGVyIGEgdmFsaWQgZW1haWw8L21hdC1lcnJvcj5cbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDwvbWF0LWZvcm0tZmllbGQ+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJyb3cgZy0zXCI+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiY29sLW1kLThcIj5cbiAgICAgICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgICAgIDxtYXQtbGFiZWw+U3ViamVjdCAqPC9tYXQtbGFiZWw+XG4gICAgICAgICAgICAgICAgPGlucHV0IG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cInN1YmplY3RcIiBwbGFjZWhvbGRlcj1cIlByb2plY3QgY29sbGFib3JhdGlvblwiIC8+XG4gICAgICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5zdWJqZWN0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgICBAaWYgKGZvcm0uZ2V0KCdzdWJqZWN0Jyk/Lmhhc0Vycm9yKCdyZXF1aXJlZCcpICYmIGZvcm0uZ2V0KCdzdWJqZWN0Jyk/LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgICAgIDxtYXQtZXJyb3I+U3ViamVjdCBpcyByZXF1aXJlZDwvbWF0LWVycm9yPlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNvbC1tZC00XCI+XG4gICAgICAgICAgICAgIDxtYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgICAgICA8bWF0LWxhYmVsPkJ1ZGdldDwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgICAgIDxtYXQtc2VsZWN0IGZvcm1Db250cm9sTmFtZT1cImJ1ZGdldFwiPlxuICAgICAgICAgICAgICAgICAgQGZvciAob3B0IG9mIGJ1ZGdldE9wdGlvbnM7IHRyYWNrIG9wdC52YWx1ZSkge1xuICAgICAgICAgICAgICAgICAgICA8bWF0LW9wdGlvbiBbdmFsdWVdPVwib3B0LnZhbHVlXCI+e3sgb3B0LmxhYmVsIH19PC9tYXQtb3B0aW9uPlxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDwvbWF0LXNlbGVjdD5cbiAgICAgICAgICAgICAgICA8bWF0LWljb24gbWF0UHJlZml4PnBheW1lbnRzPC9tYXQtaWNvbj5cbiAgICAgICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPG1hdC1mb3JtLWZpZWxkPlxuICAgICAgICAgICAgPG1hdC1sYWJlbD5Zb3VyIG1lc3NhZ2UgKjwvbWF0LWxhYmVsPlxuICAgICAgICAgICAgPHRleHRhcmVhIG1hdElucHV0IGZvcm1Db250cm9sTmFtZT1cIm1lc3NhZ2VcIiByb3dzPVwiNVwiIHBsYWNlaG9sZGVyPVwiVGVsbCBtZSBhYm91dCB5b3VyIHByb2plY3QuLi5cIj48L3RleHRhcmVhPlxuICAgICAgICAgICAgPG1hdC1pY29uIG1hdFByZWZpeD5jaGF0PC9tYXQtaWNvbj5cbiAgICAgICAgICAgIEBpZiAoZm9ybS5nZXQoJ21lc3NhZ2UnKT8uaGFzRXJyb3IoJ3JlcXVpcmVkJykgJiYgZm9ybS5nZXQoJ21lc3NhZ2UnKT8udG91Y2hlZCkge1xuICAgICAgICAgICAgICA8bWF0LWVycm9yPk1lc3NhZ2UgaXMgcmVxdWlyZWQ8L21hdC1lcnJvcj5cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIEBpZiAoZm9ybS5nZXQoJ21lc3NhZ2UnKT8uaGFzRXJyb3IoJ21pbmxlbmd0aCcpICYmIGZvcm0uZ2V0KCdtZXNzYWdlJyk/LnRvdWNoZWQpIHtcbiAgICAgICAgICAgICAgPG1hdC1lcnJvcj5BdCBsZWFzdCAxMCBjaGFyYWN0ZXJzPC9tYXQtZXJyb3I+XG4gICAgICAgICAgICB9XG4gICAgICAgICAgPC9tYXQtZm9ybS1maWVsZD5cblxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJmb3JtLWFjdGlvbnNcIj5cbiAgICAgICAgICAgIDxidXR0b25cbiAgICAgICAgICAgICAgdHlwZT1cInN1Ym1pdFwiXG4gICAgICAgICAgICAgIGNsYXNzPVwiYnRuIGJ0bi1wcmltYXJ5IHN1Ym1pdC1idG5cIlxuICAgICAgICAgICAgICBbZGlzYWJsZWRdPVwibG9hZGluZygpXCI+XG4gICAgICAgICAgICAgIEBpZiAobG9hZGluZygpKSB7XG4gICAgICAgICAgICAgICAgPG1hdC1zcGlubmVyIGRpYW1ldGVyPVwiMThcIiBtb2RlPVwiaW5kZXRlcm1pbmF0ZVwiPjwvbWF0LXNwaW5uZXI+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0yXCI+U2VuZGluZ+KApjwvc3Bhbj5cbiAgICAgICAgICAgICAgfSBAZWxzZSBpZiAoc3VibWl0dGVkKCkpIHtcbiAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImJpIGJpLWNoZWNrMi1jaXJjbGVcIj48L2k+XG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtcy0yXCI+U2VudCE8L3NwYW4+XG4gICAgICAgICAgICAgIH0gQGVsc2Uge1xuICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiYmkgYmktc2VuZFwiPjwvaT5cbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1zLTJcIj5TZW5kIE1lc3NhZ2U8L3NwYW4+XG4gICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIDwvYnV0dG9uPlxuXG4gICAgICAgICAgICA8c3BhbiBjbGFzcz1cInJlc3BvbnNlLXRpbWVcIj5cbiAgICAgICAgICAgICAgPGkgY2xhc3M9XCJiaSBiaS1saWdodG5pbmctY2hhcmdlXCI+PC9pPlxuICAgICAgICAgICAgICBVc3VhbGx5IHJlc3BvbmRzIHdpdGhpbiAyNGhcbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgPC9mb3JtPlxuICAgICAgPC9kaXY+XG4gICAgPC9kaXY+XG4gIDwvZGl2PlxuPC9zZWN0aW9uPlxuIl0sIm1hcHBpbmdzIjoiOzs7OztBQUFBLFNBQVMsYUFBQUEsa0JBQXlCO0FBQ2xDLFNBQVMsZ0JBQUFDLHFCQUFvQjs7O0FFRDdCLFNBQVMsV0FBVyxRQUFRLGNBQWlDO0FBQzdELFNBQVMsb0JB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TUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxPQUFBLEdBQUEsQ0FBQSxHQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxRQUFBLGFBQUEsR0FBQSxPQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsTUFBQSxtQkFBQSxHQUFBLENBQUEsUUFBQSxZQUFBLEdBQUEsT0FBQSxtQkFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLGFBQUEsR0FBQSxDQUFBLHNCQUFBLElBQUEsR0FBQSxPQUFBLGFBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxVQUFBLFVBQUEsT0FBQSxZQUFBLEdBQUEsZUFBQSxHQUFBLE1BQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxXQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLEdBQUEsZ0JBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxTQUFBLGFBQUEsR0FBQSxrQkFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLFFBQUEsR0FB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QSxXQUFBLENBQUEsR0FBQSxPQUFBLElBQUEsTUFBQSxHQUFBLFFBQUEsQ0FBQSxDQUFBLE1BQUEsU0FBQSxHQUFBLFdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxTQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEsaUJBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsT0FBQSxvQkFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLFFBQUEsR0FBQSxDQUFBLEdBQUEsY0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxPQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGtCQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsa0JBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLFVBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLGVBQUEsR0FBQSxDQUFBLEdBQUEsZUFBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFBLGlCQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLFNBQUEsR0FBQSxDQUFBLEdBQUEsUUFBQSxDQUFBLEdB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QUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsWUFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxHQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxhQUFBLEdBQUEsTUFBQSxHQUFBLENBQUEsR0FBQSxjQUFBLEdBQUEsQ0FBQSxHQUFBLGFBQUEsR0FBQSxDQUFBLEdBQUEsYUFBQSxHQUFBLENBQUEsVUFBQSxVQUFBLE9BQUEsWUFBQSxHQUFBLGNBQUEsR0FBQSxNQUFBLEdBQUEsQ0FBQSxHQUFBLFlBQUEsUUFBQSxHQUFBLENBQUEsY0FBQSxJQUFBLEdBQUEsZ0JBQUEsR0FBQSxZQUFBLFdBQUEsR0FBQSxDQUFBLEdBQUEsT0FBQSxLQUFBLEdBQUEsQ0FBQSxHQUFBLFVBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxtQkFBQSxRQUFBLGVBQUEsWUFBQSxnQkFBQSxNQUFBLEdBQUEsQ0FBQSxhQUFBLEVBQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxRQUFBLFNBQUEsbUJBQUEsU0FBQSxlQUFBLG1CQUFBLGdCQUFBLE9BQUEsR0FBQSxDQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsWUFBQSxJQUFBLG1CQUFBLFdBQUEsZUFBQSx1QkFBQSxHQUFBLENBQUEsR0FBQSxVQUFBLEdBQUEsQ0FBQSxtQkFBQSxRQUFBLEdBQUEsQ0FBQSxHQUFBLE9BQUEsR0FBQSxDQUFBLFlBQUEsSUFBQSxtQkFBQSxXQUFBLFFBQUEsS0FBQSxlQUFBLCtCQUFBLEdBQUEsQ0FBQSxHQUFBLGNBQUEsR0FBQSxDQUFBLFFBQUEsVUFBQSxHQUFBLE9BQUEsZUFBQSxjQUFBLEdBQUEsVUFBQSxHQUFBLENBQUEsR0FBQSxlQUFBLEdBQUEsQ0FBQSxHQUFBLE1BQUEscUJBQUEsR0FBQSxDQUFBLEdBQUEsV0FBQSxHQUFBLENBQUEsR0FBQSxNQUFBLEdBQUEsU0FBQSxHQUFBLENBQUEsR0FBQSxZQUFBLEdBQUEsQ0FBQSxHQUFB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LEVBQUEsV0FBQSxpQkFBQSxVQUFBLDhCQUFBLFlBQUEsR0FBQSxDQUFBO0FBQUEsR0FBQTs7Ozs7OzsrREFBYixlQUFhLEVBQUEsU0FBQSxDQUFBRSxLQUFBQyxHQUFBLEdBQUEsQ0FBQUgsZUFBQSxlQUFBLGdCQUFBLGlCQUFBLG1CQUFBLHFCQUFBLHVCQUFBLGtCQUFBQyxVQUFBLEdBQUEsYUFBQSxFQUFBLENBQUE7RUFBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsY0FBQSxzQkFBQSxLQUFBLElBQUEsQ0FBQTtBQUFBLEdBQUEsT0FBQSxjQUFBLGVBQUEsZUFBQSxZQUFBLE9BQUEsWUFBQSxJQUFBLEdBQUEsNEJBQUEsT0FBQSxFQUFBLE9BQUEsTUFBQSxzQkFBQSxFQUFBLFNBQUEsQ0FBQTtBQUFBLEdBQUE7IiwibmFtZXMiOlsiQ29tcG9uZW50IiwiQ29tbW9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaW5qZWN0IiwiQ29tbW9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsImluamVjdCIsIl9mb3JUcmFjazAiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiaTMiLCJDb21wb25lbnQiLCJpbmplY3QiLCJzaWduYWwiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiaW5qZWN0Iiwic2lnbmFsIiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiQ29tcG9uZW50IiwiaW5qZWN0Iiwic2lnbmFsIiwiY29tcHV0ZWQiLCJDb21tb25Nb2R1bGUiLCJNYXREaWFsb2dNb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiQ29tcG9uZW50IiwiaW5qZWN0IiwiQ29tbW9uTW9kdWxlIiwiTWF0QnV0dG9uTW9kdWxlIiwiTWF0SWNvbk1vZHVsZSIsImkwIiwiaTEiLCJpMiIsImkzIiwiaTQiLCJpNSIsIl9jMCIsImluamVjdCIsInNpZ25hbCIsImNvbXB1dGVkIiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdERpYWxvZ01vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJDb21wb25lbnQiLCJpbmplY3QiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiaW5qZWN0IiwiX2ZvclRyYWNrMCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsIkNvbXBvbmVudCIsImluamVjdCIsIkNvbW1vbk1vZHVsZSIsIk1hdEljb25Nb2R1bGUiLCJpbmplY3QiLCJDb21tb25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiQ29tcG9uZW50IiwiaTAiLCJpMSIsImkyIiwiaTMiLCJDb21wb25lbnQiLCJpbmplY3QiLCJzaWduYWwiLCJDb21tb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0U25hY2tCYXIiLCJNYXRTbmFja0Jhck1vZHVsZSIsImluamVjdCIsIk1hdFNuYWNrQmFyIiwic2lnbmFsIiwiX2ZvclRyYWNrMCIsIl9mb3JUcmFjazEiLCJDb21tb25Nb2R1bGUiLCJNYXRCdXR0b25Nb2R1bGUiLCJNYXRJY29uTW9kdWxlIiwiTWF0U25hY2tCYXJNb2R1bGUiLCJDb21wb25lbnQiLCJpMCIsImkxIiwiaTIiLCJpMyIsImk0IiwiaTUiLCJpNiIsImkxMiIsIkNvbW1vbk1vZHVsZSIsIkNvbXBvbmVudCIsImkwIiwiaTEiXX0=