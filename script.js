/**
 * Dennis L. Shung MD PhD - Personal Website
 * Minimal JavaScript for smooth scrolling and interactive enhancements
 */

(function() {
    'use strict';

    /**
     * Smooth scroll for anchor links
     * Enhances the CSS scroll-behavior with programmatic scrolling
     */
    function initSmoothScroll() {
        // Get all anchor links that point to sections on the same page
        const anchorLinks = document.querySelectorAll('a[href^="#"]');
        
        anchorLinks.forEach(link => {
            link.addEventListener('click', function(e) {
                const href = this.getAttribute('href');
                
                // Skip if it's just "#" or empty
                if (!href || href === '#') return;
                
                const targetId = href.substring(1);
                const targetElement = document.getElementById(targetId);
                
                if (targetElement) {
                    e.preventDefault();
                    
                    // Smooth scroll to target
                    targetElement.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                    
                    // Update URL without jumping
                    if (history.pushState) {
                        history.pushState(null, null, href);
                    }
                }
            });
        });
    }

    /**
     * Add fade-in animation for sections on scroll
     * Subtle enhancement for better user experience
     */
    function initScrollAnimations() {
        const observerOptions = {
            root: null,
            threshold: 0.1,
            rootMargin: '0px 0px -100px 0px'
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);

        // Observe all major sections except hero (which is visible on load)
        const sections = document.querySelectorAll('.about, .cv, .contact');
        sections.forEach(section => {
            section.style.opacity = '0';
            section.style.transform = 'translateY(20px)';
            section.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(section);
        });
    }

    /**
     * Handle external links - open in new tab
     * Improves security and user experience
     */
    function handleExternalLinks() {
        const links = document.querySelectorAll('a[href^="http"]');
        links.forEach(link => {
            // Add security attributes if not already present
            if (!link.getAttribute('target')) {
                link.setAttribute('target', '_blank');
            }
            if (!link.getAttribute('rel')) {
                link.setAttribute('rel', 'noopener noreferrer');
            }
        });
    }

    /**
     * Detect if user prefers reduced motion
     * Respect accessibility preferences
     */
    function respectReducedMotion() {
        const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
        
        if (prefersReducedMotion) {
            // Disable scroll animations
            document.documentElement.style.scrollBehavior = 'auto';
        }
    }

    /**
     * Initialize all functionality when DOM is ready
     */
    function init() {
        // Check for reduced motion preference first
        respectReducedMotion();
        
        // Initialize smooth scrolling
        initSmoothScroll();
        
        // Initialize scroll animations (will be disabled if reduced motion is preferred)
        if (!window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
            initScrollAnimations();
        }
        
        // Handle external links
        handleExternalLinks();
    }

    // Wait for DOM to be fully loaded
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        // DOM is already loaded
        init();
    }

})();
