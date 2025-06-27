// File: main.js
// Mobile menu toggle
const menuBtn = document.querySelector('.mobile-menu-btn');
const navLinks = document.querySelector('.nav-links');

menuBtn.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
    e.preventDefault();
    
    if (navLinks.classList.contains('active')) {
        navLinks.classList.remove('active');
    }
    
    document.querySelector(this.getAttribute('href')).scrollIntoView({
        behavior: 'smooth'
    });
    });
});

// Sticky header on scroll
window.addEventListener('scroll', () => {
    const nav = document.querySelector('nav');
    nav.classList.toggle('sticky', window.scrollY > 0);
});

// Language switcher
const languageBtns = document.querySelectorAll('.language-btn');

languageBtns.forEach(btn => {
    btn.addEventListener('click', () => {
    // Remove active class from all buttons
    languageBtns.forEach(b => b.classList.remove('active'));
    // Add active class to clicked button
    btn.classList.add('active');
    
    const lang = btn.dataset.lang;
    // Hide all language elements
    document.querySelectorAll('.lang-pl, .lang-de').forEach(el => {
        el.classList.add('hidden');
    });
    // Show elements for selected language
    document.querySelectorAll(`.lang-${lang}`).forEach(el => {
        el.classList.remove('hidden');
    });
    
    // Change page title
    if (lang === 'pl') {
        document.title = 'TRUSTOL - Trumny i Urny';
    } else {
        document.title = 'TRUSTOL - Särge und Urnen';
    }
    });
});