/**
 * Platform Page Interactions
 */

document.addEventListener('DOMContentLoaded', function() {
    // Accordion functionality
    const accordionHeaders = document.querySelectorAll('.accordion-header');
    
    accordionHeaders.forEach(header => {
        header.addEventListener('click', function() {
            const item = this.parentElement;
            const content = item.querySelector('.accordion-content');
            const toggle = this.querySelector('.accordion-toggle');
            const isOpen = item.classList.contains('active');
            
            // Close all other accordions
            document.querySelectorAll('.accordion-item').forEach(otherItem => {
                if (otherItem !== item) {
                    otherItem.classList.remove('active');
                    otherItem.querySelector('.accordion-content').style.maxHeight = null;
                    otherItem.querySelector('.accordion-toggle').textContent = '+';
                }
            });
            
            // Toggle current accordion
            if (isOpen) {
                item.classList.remove('active');
                content.style.maxHeight = null;
                toggle.textContent = '+';
            } else {
                item.classList.add('active');
                content.style.maxHeight = content.scrollHeight + 'px';
                toggle.textContent = '−';
            }
        });
    });

    // Pipeline stage hover effects
    const pipelineStages = document.querySelectorAll('.pipeline-stage');
    
    pipelineStages.forEach(stage => {
        stage.addEventListener('mouseenter', function() {
            const platform = this.dataset.platform;
            // Highlight related stages
            pipelineStages.forEach(s => {
                if (s.dataset.platform === platform) {
                    s.classList.add('highlighted');
                }
            });
        });
        
        stage.addEventListener('mouseleave', function() {
            pipelineStages.forEach(s => {
                s.classList.remove('highlighted');
            });
        });
    });
});
