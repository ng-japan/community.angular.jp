import { ChangeDetectionStrategy, Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { CardComponent } from '../../shared/card/card.component';
import { ICON_COMPONENTS } from '../../shared/icons';

@Component({
  imports: [RouterLink, CardComponent, ICON_COMPONENTS],
  templateUrl: './home.component.html',
  styles: `
    :host {
      display: block;
    }

    .hero {
      position: relative;
      overflow: hidden;
      margin: -16px -24px 0;
      padding: 48px 24px;
    }
    @media (min-width: 768px) {
      .hero {
        /* main's px-6 (24px) at every breakpoint — keep hero confined to it to avoid horizontal overflow.
           padding-top 64px aligns hero h1 with main content top (markdown h1 / sidenav brand). */
        margin: -16px -24px 0;
        padding: 64px 24px;
      }
    }

    .hero-deco {
      position: absolute;
      pointer-events: none;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      width: 580px;
      height: 580px;
      opacity: 0.05;
    }
    .hero-deco img {
      width: 100%;
      height: 100%;
    }
    @media (min-width: 768px) {
      .hero-deco {
        width: 520px;
        height: 520px;
        opacity: 0.06;
      }
    }
    @media (min-width: 1024px) {
      .hero-deco {
        left: auto;
        right: -220px;
        top: 50%;
        transform: translateY(-50%);
        width: 720px;
        height: 720px;
        opacity: 0.16;
      }
    }

    .hero-content {
      position: relative;
      z-index: 1;
      display: flex;
      flex-direction: column;
      gap: 24px;
    }

    .hero-h1 {
      font-weight: 800;
      font-size: clamp(34px, 5.5vw, 72px);
      line-height: 1.15;
      word-break: auto-phrase;
      line-break: strict;
      text-wrap: pretty;
      max-width: 14em;
      letter-spacing: -0.025em;
      margin: 0;
    }

    .hero-h1__brand {
      background: linear-gradient(115deg, var(--brand-1), var(--brand-2));
      -webkit-background-clip: text;
      background-clip: text;
      color: transparent;
      font-variation-settings: 'wdth' 75;
    }
  `,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HomePageComponent {}
