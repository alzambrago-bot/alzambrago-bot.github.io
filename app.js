'use strict';
// Progressive enhancement: navigation remains usable if JavaScript is disabled.
(() => {
  const button = document.querySelector('.menu-toggle');
  const menu = document.getElementById('main-menu');
  if (!button || !menu) return;
  document.documentElement.classList.add('js');
  button.hidden = false;
  const setOpen = (open, restoreFocus = false) => {
    menu.dataset.open = String(open);
    button.setAttribute('aria-expanded', String(open));
    button.setAttribute('aria-label', open ? 'Cerrar menú' : 'Abrir menú');
    if (restoreFocus) button.focus();
  };
  button.addEventListener('click', () => setOpen(menu.dataset.open !== 'true'));
  menu.addEventListener('click', (event) => {
    if (event.target.closest('a')) setOpen(false);
  });
  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape' && menu.dataset.open === 'true') setOpen(false, true);
  });
  document.addEventListener('click', (event) => {
    if (menu.dataset.open === 'true' && !menu.contains(event.target) && !button.contains(event.target)) setOpen(false);
  });
  const desktop = window.matchMedia('(min-width: 801px)');
  if (desktop.addEventListener) desktop.addEventListener('change', () => setOpen(false));
})();

// Product categories are optional: without JavaScript all cards remain visible.
(() => {
  const filters = document.querySelector('.product-filters');
  const cards = [...document.querySelectorAll('.catalog-product')];
  const count = document.querySelector('.product-count');
  if (!filters || !cards.length || !count) return;
  filters.hidden = false;
  filters.addEventListener('click', (event) => {
    const button = event.target.closest('button[data-filter]');
    if (!button || !filters.contains(button)) return;
    const selected = button.dataset.filter;
    let visible = 0;
    cards.forEach((card) => {
      card.hidden = selected !== 'all' && card.dataset.category !== selected;
      if (!card.hidden) visible += 1;
    });
    filters.querySelectorAll('button').forEach((option) => {
      const active = option === button;
      option.setAttribute('aria-pressed', String(active));
      option.classList.toggle('is-active', active);
    });
    const reference = visible === 1 ? 'referencia' : 'referencias';
    count.textContent = `${visible} ${reference} · ${button.textContent.trim()}`;
  });
})();
