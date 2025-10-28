document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.pdiv button.md-button--primary').forEach(btn => {
    btn.addEventListener('click', () => {
      if (!window._paq) return;
      const pageTitle = document.title || '';
      const pagePath  = window.location.pathname || '';
      const label     = `${pageTitle} (${pagePath})`;
      _paq.push(['trackEvent', 'APL Quest Example', 'Click', label]);
    });
  });
});
