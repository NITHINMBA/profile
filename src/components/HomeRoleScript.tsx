import { useEffect } from 'react';

export function useRoleCycler(targetId: string) {
  useEffect(() => {
    const el = document.getElementById(targetId);
    if (!el) return;

    const roles = ['Product Management', 'Business Analysis', 'Artificial Intelligence'];

    const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReduced) {
      el.textContent = roles[0];
      return;
    }

    // Reserve width to avoid layout shifts
    const maxLen = Math.max(...roles.map(r => r.length));
    el.style.display = 'inline-block';
    el.style.width = `${maxLen}ch`;

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let rafId: number | null = null;
    let lastTime = 0;
    let carryDelay = 0;

    const typeSpeedMsWhileTyping = 80;
    const typeSpeedMsWhileDeleting = 60;

    const tick = (time: number) => {
      if (!lastTime) lastTime = time;
      let delta = time - lastTime;

      if (carryDelay > 0) {
        carryDelay -= delta;
        lastTime = time;
        rafId = requestAnimationFrame(tick);
        return;
      }

      const targetInterval = isDeleting ? typeSpeedMsWhileDeleting : typeSpeedMsWhileTyping;
      if (delta >= targetInterval) {
        const currentWord = roles[wordIndex];
        if (!isDeleting) {
          charIndex = Math.min(charIndex + 1, currentWord.length);
          if (charIndex === currentWord.length) {
            isDeleting = true; // immediately start deleting
          }
        } else {
          charIndex = Math.max(charIndex - 1, 0);
          if (charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % roles.length;
            carryDelay = 120; // tiny gap before typing next word
          }
        }
        el.textContent = currentWord.substring(0, charIndex);
        lastTime = time;
      }
      rafId = requestAnimationFrame(tick);
    };

    rafId = requestAnimationFrame(tick);

    return () => {
      if (rafId) cancelAnimationFrame(rafId);
      el.style.width = '';
    };
  }, [targetId]);
}


