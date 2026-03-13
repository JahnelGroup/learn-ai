import {useEffect} from 'react';

/**
 * Syncs TOC sidebar anchor links with Docusaurus Tabs.
 * When a user clicks a TOC link whose target heading lives inside an inactive tab,
 * this component activates the correct tab first, then scrolls to the heading.
 *
 * Place this component once on any page that combines <Tabs> with heading anchors.
 */
export default function TabsTocSync() {
  useEffect(() => {
    function activateTabForHash(hash) {
      if (!hash) return;

      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (!target) return;

      // Walk up to find the closest hidden tabpanel
      const tabPanel = target.closest('[role="tabpanel"][hidden]');
      if (!tabPanel) {
        // Target is already visible — just scroll
        target.scrollIntoView({behavior: 'smooth'});
        return;
      }

      // Find the tab list that controls this panel group
      const tabsContainer = tabPanel.closest('.tabs-container');
      if (!tabsContainer) return;

      // The panel's label attribute matches the tab button's label
      // Docusaurus sets aria-labelledby on the panel and id on the tab button,
      // but the simplest approach: find all tab buttons, match by the panel's value.
      // TabPanels have data-value or we can match by index.
      const panels = Array.from(
        tabsContainer.querySelectorAll('[role="tabpanel"]'),
      );
      const panelIndex = panels.indexOf(tabPanel);

      const tabButtons = Array.from(
        tabsContainer.querySelectorAll('[role="tab"]'),
      );
      const tabButton = tabButtons[panelIndex];

      if (tabButton) {
        tabButton.click();
        // After tab switch, scroll to the target on next frame
        requestAnimationFrame(() => {
          const el = document.getElementById(targetId);
          if (el) {
            el.scrollIntoView({behavior: 'smooth'});
          }
        });
      }
    }

    // Handle initial page load with hash
    if (window.location.hash) {
      // Delay slightly to let Docusaurus finish rendering tabs
      setTimeout(() => activateTabForHash(window.location.hash), 100);
    }

    // Handle TOC link clicks and any hash changes
    function onHashChange() {
      activateTabForHash(window.location.hash);
    }

    window.addEventListener('hashchange', onHashChange);

    // Also intercept clicks on TOC links directly for smoother UX
    function onTocClick(e) {
      const link = e.target.closest('a[href^="#"]');
      if (!link) return;

      const hash = link.getAttribute('href');
      const targetId = hash.replace('#', '');
      const target = document.getElementById(targetId);
      if (!target) return;

      const tabPanel = target.closest('[role="tabpanel"][hidden]');
      if (tabPanel) {
        e.preventDefault();
        window.history.pushState(null, '', hash);
        activateTabForHash(hash);
      }
    }

    // Attach to the TOC container
    const tocContainer = document.querySelector('.table-of-contents');
    if (tocContainer) {
      tocContainer.addEventListener('click', onTocClick);
    }

    return () => {
      window.removeEventListener('hashchange', onHashChange);
      if (tocContainer) {
        tocContainer.removeEventListener('click', onTocClick);
      }
    };
  }, []);

  return null;
}
