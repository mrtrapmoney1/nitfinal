'use client';

import { useEffect } from 'react';

export default function GsapInit() {
  useEffect(() => {
    let cleanup: (() => void) | undefined;

    (async () => {
      const { gsap } = await import('gsap');
      const { ScrollTrigger } = await import('gsap/ScrollTrigger');
      gsap.registerPlugin(ScrollTrigger);

      // Staggered card grids
      document
        .querySelectorAll<HTMLElement>(
          '.pillars-grid, .benefits-grid, .topics-grid, .pages-grid, .tools-grid'
        )
        .forEach((grid) => {
          const cards = Array.from(grid.querySelectorAll<HTMLElement>(':scope > *'));
          if (cards.length) {
            gsap.fromTo(
              cards,
              { opacity: 0, y: 50, scale: 0.97 },
              {
                opacity: 1,
                y: 0,
                scale: 1,
                duration: 0.6,
                ease: 'power2.out',
                stagger: 0.12,
                scrollTrigger: { trigger: grid, start: 'top 82%', once: true },
              }
            );
          }
        });

      // Section headings and page hero text
      gsap.utils
        .toArray<HTMLElement>(
          '.section-header h2, .section-header p, .page-hero h1, .page-hero p, .page-hero .hero-badge'
        )
        .forEach((el) => {
          gsap.fromTo(el, { opacity: 0, y: 28 }, {
            opacity: 1, y: 0, duration: 0.65, ease: 'power2.out',
            scrollTrigger: { trigger: el, start: 'top 90%', once: true },
          });
        });

      // Hero content stagger
      const heroContent = document.querySelector('.hero-content');
      if (heroContent) {
        gsap.fromTo(
          Array.from(heroContent.children),
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.7, ease: 'power2.out', stagger: 0.15, delay: 0.1 }
        );
      }

      // Generic animate-on-scroll
      gsap.utils.toArray<HTMLElement>('.animate-on-scroll').forEach((el) => {
        gsap.fromTo(el, { opacity: 0, y: 40 }, {
          opacity: 1, y: 0, duration: 0.7, ease: 'power2.out',
          scrollTrigger: { trigger: el, start: 'top 85%', once: true },
        });
      });

      // Number counter animation
      gsap.utils.toArray<HTMLElement>('[data-count]').forEach((el) => {
        const target = parseInt((el as HTMLElement).dataset.count || '0', 10);
        ScrollTrigger.create({
          trigger: el,
          start: 'top 80%',
          once: true,
          onEnter: () => {
            const obj = { val: 0 };
            gsap.to(obj, {
              val: target, duration: 1.8, ease: 'power1.out',
              onUpdate: () => { el.textContent = Math.round(obj.val).toString(); },
            });
          },
        });
      });

      // Hero parallax
      const heroSection = document.querySelector<HTMLElement>('.hero');
      if (heroSection) {
        gsap.to(heroSection, {
          yPercent: 15,
          ease: 'none',
          scrollTrigger: { trigger: heroSection, start: 'top top', end: 'bottom top', scrub: true },
        });
      }

      // Magnetic button effect
      document.querySelectorAll<HTMLElement>('.btn').forEach((btn) => {
        const onMove = (e: MouseEvent) => {
          const rect = btn.getBoundingClientRect();
          const x = e.clientX - rect.left - rect.width / 2;
          const y = e.clientY - rect.top - rect.height / 2;
          gsap.to(btn, { x: x * 0.18, y: y * 0.18, duration: 0.3, ease: 'power2.out' });
        };
        const onLeave = () => {
          gsap.to(btn, { x: 0, y: 0, duration: 0.5, ease: 'elastic.out(1, 0.5)' });
        };
        btn.addEventListener('mousemove', onMove);
        btn.addEventListener('mouseleave', onLeave);
      });

      cleanup = () => ScrollTrigger.getAll().forEach((t) => t.kill());
    })();

    return () => cleanup?.();
  }, []);

  return null;
}
