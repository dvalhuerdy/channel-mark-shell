'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

export default function SiteInteractions() {
  const pathname = usePathname();

  useEffect(() => {
    const d = document.getElementById('cur-d');
    const r = document.getElementById('cur-r');
    const onMouseMove = (e: MouseEvent) => {
      if (d) {
        d.style.left = e.clientX + 'px';
        d.style.top = e.clientY + 'px';
      }
      if (r) {
        r.style.left = e.clientX + 'px';
        r.style.top = e.clientY + 'px';
      }
    };
    document.addEventListener('mousemove', onMouseMove);

    const hoverables = document.querySelectorAll(
      'a,button,.svc-card,.trust-item,.stat,.pillar,.info-card'
    );
    const onEnter = () => document.body.classList.add('ch');
    const onLeave = () => document.body.classList.remove('ch');
    hoverables.forEach((el) => {
      el.addEventListener('mouseenter', onEnter);
      el.addEventListener('mouseleave', onLeave);
    });

    const revealObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('on');
            revealObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.08, rootMargin: '0px 0px -36px 0px' }
    );
    document.querySelectorAll('.rv').forEach((el) => revealObserver.observe(el));

    return () => {
      document.removeEventListener('mousemove', onMouseMove);
      hoverables.forEach((el) => {
        el.removeEventListener('mouseenter', onEnter);
        el.removeEventListener('mouseleave', onLeave);
      });
      revealObserver.disconnect();
    };
  }, [pathname]);

  return (
    <>
      <div id="cur-d" />
      <div id="cur-r" />
    </>
  );
}
