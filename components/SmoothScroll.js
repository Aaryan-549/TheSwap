import React, { useEffect } from 'react';
import { animateScroll as scroll, scroller } from 'react-scroll';

const SmoothScroll = () => {
  useEffect(() => {
    // Configure global scroll settings
    const scrollOptions = {
      duration: 800,
      delay: 0,
      smooth: 'easeInOutQuart'
    };

    // Add click handlers to all anchor links
    const handleLinkClick = (e) => {
      const href = e.currentTarget.getAttribute('href');
      if (!href || !href.startsWith('#')) return;
      
      e.preventDefault();
      const targetId = href === '#' ? 'top' : href.substring(1);
      
      if (targetId === 'top') {
        // Scroll to top with animation
        scroll.scrollToTop(scrollOptions);
      } else {
        // Scroll to element with ID
        scroller.scrollTo(targetId, scrollOptions);
      }
      
      // Update URL without causing scroll
      window.history.pushState(null, null, href);
    };

    // Handle buttons with data-scroll attribute
    const handleScrollButton = (e) => {
      const targetId = e.currentTarget.getAttribute('data-scroll');
      if (!targetId) return;
      
      e.preventDefault();
      
      if (targetId === 'top') {
        scroll.scrollToTop(scrollOptions);
      } else {
        scroller.scrollTo(targetId, scrollOptions);
      }
    };

    // Add event listeners
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', handleLinkClick);
    });

    document.querySelectorAll('[data-scroll]').forEach(button => {
      button.addEventListener('click', handleScrollButton);
    });

    // Clean up
    return () => {
      document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.removeEventListener('click', handleLinkClick);
      });
      
      document.querySelectorAll('[data-scroll]').forEach(button => {
        button.removeEventListener('click', handleScrollButton);
      });
    };
  }, []);

  return null;
};

export default SmoothScroll;