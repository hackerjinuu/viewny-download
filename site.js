(() => {
  const toggle = document.querySelector('[data-menu-toggle]');
  const drawer = document.querySelector('[data-mobile-drawer]');
  if (toggle && drawer) {
    toggle.addEventListener('click', () => {
      const expanded = toggle.getAttribute('aria-expanded') === 'true';
      toggle.setAttribute('aria-expanded', String(!expanded));
      drawer.classList.toggle('open', !expanded);
    });
    drawer.querySelectorAll('a').forEach(link => link.addEventListener('click', () => {
      toggle.setAttribute('aria-expanded', 'false');
      drawer.classList.remove('open');
    }));
  }
  document.querySelectorAll('[data-copy]').forEach(button => {
    button.addEventListener('click', async () => {
      const value = button.getAttribute('data-copy') || '';
      const original = button.textContent;
      try {
        await navigator.clipboard.writeText(value);
        button.textContent = 'Copied';
      } catch (_) {
        const input = document.createElement('textarea');
        input.value = value;
        input.style.position = 'fixed';
        input.style.opacity = '0';
        document.body.appendChild(input);
        input.select();
        const ok = document.execCommand('copy');
        input.remove();
        button.textContent = ok ? 'Copied' : 'Copy failed';
      }
      window.setTimeout(() => { button.textContent = original; }, 1600);
    });
  });
})();
