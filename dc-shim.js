// Small helper exposing legacy helpers on top of SITE_CASES / SITE_ESSAYS
(function () {
  if (!window.DC) window.DC = {};

  window.DC.getCase = function (slug) {
    return (window.SITE_CASES && window.SITE_CASES[slug]) || null;
  };

  window.DC.getEssay = function (slug) {
    return (window.SITE_ESSAYS && window.SITE_ESSAYS[slug]) || null;
  };

  // Simple init event for pages that want to wait for the shim
  window.dispatchEvent(new CustomEvent('dc:shim:loaded'));
})();
