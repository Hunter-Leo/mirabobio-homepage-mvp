/**
 * Contact Form Handler
 * Handles form validation, submission, and user feedback
 */

// Form elements
const contactForm = document.getElementById('contactForm');
const submitBtn = document.getElementById('submitBtn');
const btnText = document.getElementById('btnText');
const btnLoader = document.getElementById('btnLoader');
const successMessage = document.getElementById('successMessage');
const messageTextarea = document.getElementById('message');
const charCount = document.getElementById('charCount');

// Character counter for message field
if (messageTextarea && charCount) {
    messageTextarea.addEventListener('input', () => {
        const length = messageTextarea.value.length;
        const maxLength = 1000;
        charCount.textContent = `${length} / ${maxLength}`;
        
        if (length > maxLength) {
            messageTextarea.value = messageTextarea.value.substring(0, maxLength);
            charCount.textContent = `${maxLength} / ${maxLength}`;
        }
    });
}

// Email validation
function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

// Show error message
function showError(fieldId, message) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = message;
        errorElement.classList.add('active');
    }
    
    if (inputElement) {
        inputElement.classList.add('error');
    }
}

// Clear error message
function clearError(fieldId) {
    const errorElement = document.getElementById(`${fieldId}Error`);
    const inputElement = document.getElementById(fieldId);
    
    if (errorElement) {
        errorElement.textContent = '';
        errorElement.classList.remove('active');
    }
    
    if (inputElement) {
        inputElement.classList.remove('error');
    }
}

// Clear all errors
function clearAllErrors() {
    ['name', 'email', 'company', 'subject', 'message'].forEach(clearError);
}

// Validate form
function validateForm(formData) {
    let isValid = true;
    clearAllErrors();
    
    // Validate name
    if (!formData.get('name') || formData.get('name').trim() === '') {
        showError('name', 'Name is required');
        isValid = false;
    }
    
    // Validate email
    const email = formData.get('email');
    if (!email || email.trim() === '') {
        showError('email', 'Email is required');
        isValid = false;
    } else if (!isValidEmail(email)) {
        showError('email', 'Please enter a valid email address');
        isValid = false;
    }
    
    // Validate company
    if (!formData.get('company') || formData.get('company').trim() === '') {
        showError('company', 'Company is required');
        isValid = false;
    }
    
    // Validate subject
    if (!formData.get('subject') || formData.get('subject').trim() === '') {
        showError('subject', 'Subject is required');
        isValid = false;
    }
    
    // Validate message
    const message = formData.get('message');
    if (!message || message.trim() === '') {
        showError('message', 'Message is required');
        isValid = false;
    } else if (message.length < 10) {
        showError('message', 'Message must be at least 10 characters');
        isValid = false;
    }
    
    return isValid;
}

// Handle form submission
if (contactForm) {
    contactForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const formData = new FormData(contactForm);
        
        // Validate form
        if (!validateForm(formData)) {
            return;
        }
        
        // Show loading state
        submitBtn.disabled = true;
        btnText.classList.add('hidden');
        btnLoader.classList.remove('hidden');
        successMessage.classList.add('hidden');
        
        try {
            // Submit to Web3Forms
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData
            });
            
            const data = await response.json();
            
            if (data.success) {
                // Show success message
                successMessage.classList.remove('hidden');
                contactForm.reset();
                charCount.textContent = '0 / 1000';
                
                // Scroll to success message
                successMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
                
                // Hide success message after 5 seconds
                setTimeout(() => {
                    successMessage.classList.add('hidden');
                }, 5000);
            } else {
                throw new Error('Form submission failed');
            }
            
        } catch (error) {
            console.error('Form submission error:', error);
            alert('Failed to send message. Please try again or email us directly at info@mirabobio.com');
        } finally {
            // Reset button state
            submitBtn.disabled = false;
            btnText.classList.remove('hidden');
            btnLoader.classList.add('hidden');
        }
    });
}

// Real-time validation on blur
['name', 'email', 'company', 'subject', 'message'].forEach(fieldId => {
    const field = document.getElementById(fieldId);
    if (field) {
        field.addEventListener('blur', () => {
            const formData = new FormData(contactForm);
            
            if (fieldId === 'name' && (!formData.get('name') || formData.get('name').trim() === '')) {
                showError('name', 'Name is required');
            } else if (fieldId === 'email') {
                const email = formData.get('email');
                if (!email || email.trim() === '') {
                    showError('email', 'Email is required');
                } else if (!isValidEmail(email)) {
                    showError('email', 'Please enter a valid email address');
                }
            } else if (fieldId === 'company' && (!formData.get('company') || formData.get('company').trim() === '')) {
                showError('company', 'Company is required');
            } else if (fieldId === 'subject' && (!formData.get('subject') || formData.get('subject').trim() === '')) {
                showError('subject', 'Subject is required');
            } else if (fieldId === 'message') {
                const message = formData.get('message');
                if (!message || message.trim() === '') {
                    showError('message', 'Message is required');
                } else if (message.length < 10) {
                    showError('message', 'Message must be at least 10 characters');
                }
            }
        });
        
        // Clear error on focus
        field.addEventListener('focus', () => {
            clearError(fieldId);
        });
    }
});

// Smooth scroll to map when clicking "View on Map" links
document.querySelectorAll('a[href="#map"]').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        const mapSection = document.getElementById('map');
        if (mapSection) {
            mapSection.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Initialize Map based on user location
if (typeof L !== 'undefined') {
    const hkLocation = [22.4264, 114.2061];
    const shLocation = [31.2047, 121.6066];
    const centerLat = (hkLocation[0] + shLocation[0]) / 2;
    const centerLng = (hkLocation[1] + shLocation[1]) / 2;
    
    const map = L.map('contactMap', {
        center: [centerLat, centerLng],
        zoom: 5,
        zoomControl: true,
        scrollWheelZoom: false
    });
    
    // Detect user location and choose appropriate tile server
    fetch('https://ipapi.co/json/')
        .then(res => res.json())
        .then(data => {
            const country = data.country_code;
            let tileUrl;
            
            // Use GaoDe map for China, OSM for others
            if (country === 'CN') {
                tileUrl = 'https://webrd0{1-4}.is.autonavi.com/appmaptile?lang=zh_cn&size=1&scale=1&style=8&x={x}&y={y}&z={z}';
            } else {
                tileUrl = 'https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png';
            }
            
            L.tileLayer(tileUrl, {
                attribution: country === 'CN' ? '高德地图' : '&copy; OpenStreetMap',
                maxZoom: 19,
                subdomains: country === 'CN' ? ['1','2','3','4'] : ['a','b','c']
            }).addTo(map);
        })
        .catch(() => {
            // Fallback to CartoDB if geolocation fails
            L.tileLayer('https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png', {
                attribution: '&copy; OpenStreetMap',
                maxZoom: 19
            }).addTo(map);
        });
    
    const hkIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #4B8DFF; width: 30px; height: 30px; border-radius: 50%; border: 3px solid #003BA3; box-shadow: 0 0 20px rgba(75,141,255,0.6);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const shIcon = L.divIcon({
        className: 'custom-marker',
        html: `<div style="background: #32CD32; width: 30px; height: 30px; border-radius: 50%; border: 3px solid #228B22; box-shadow: 0 0 20px rgba(50,205,50,0.6);"></div>`,
        iconSize: [30, 30],
        iconAnchor: [15, 15]
    });
    
    const hkMarker = L.marker(hkLocation, { icon: hkIcon }).addTo(map);
    hkMarker.bindPopup(`
        <div style="color: #000; padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">MIRABO Biotechnology Limited</h3>
            <p style="margin: 0; font-size: 14px;">Hong Kong Science Park, Hong Kong</p>
        </div>
    `);
    
    const shMarker = L.marker(shLocation, { icon: shIcon }).addTo(map);
    shMarker.bindPopup(`
        <div style="color: #000; padding: 8px;">
            <h3 style="font-weight: bold; margin-bottom: 4px;">Shanghai MIRABO Biotechnology</h3>
            <p style="margin: 0; font-size: 14px;">Zhangjiang Pharma Valley, Shanghai, China</p>
        </div>
    `);
    
    const group = L.featureGroup([hkMarker, shMarker]);
    map.fitBounds(group.getBounds().pad(0.2));
}

