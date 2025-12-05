// Tabs functionality
const tabs = document.querySelectorAll('.tabs button');
const panels = document.querySelectorAll('.tab-panel');

function switchTab(target) {
  // Update Tabs
  tabs.forEach(tab => tab.setAttribute('aria-selected', false));
  target.setAttribute('aria-selected', true);

  // Update Panels
  panels.forEach(panel => panel.setAttribute('aria-hidden', true));
  const activePanel = document.getElementById(target.dataset.target);
  activePanel.setAttribute('aria-hidden', false);
}

tabs.forEach(tab => {
  tab.addEventListener('click', () => switchTab(tab));
});

// Accordion functionality
const accordions = document.querySelectorAll('.accordion');

accordions.forEach(acc => {
  const header = acc.querySelector('.accordion-header');
  const content = acc.querySelector('.accordion-content');

  // Initial Check: If hardcoded 'open' class exists in HTML, set height immediately
  if(content.classList.contains('open')){
      content.style.maxHeight = content.scrollHeight + "px";
  }

  header.addEventListener('click', () => {
    const isOpen = header.getAttribute('aria-expanded') === 'true';

    // Toggle ARIA attribute
    header.setAttribute('aria-expanded', !isOpen);

    // Toggle Content Height
    if (!isOpen) {
      // Opening
      content.style.maxHeight = content.scrollHeight + "px";
    } else {
      // Closing
      content.style.maxHeight = null;
    }
  });
});