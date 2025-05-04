window.addEventListener('DOMContentLoaded', () => {
    gsap.from('.logo-text', {
      duration: 1,
      y: -30,
      opacity: 0,
      ease: 'power3.out'
    });
     gsap.from('.menu-icon div', {
      duration: 0.6,
      y: -10,
      opacity: 0,
      stagger: 0.1,
      delay: 0.3,
      ease: 'back.out(1.7)'
    });
     gsap.from('.band-image img', {
      duration: 1.5,
      scale: 1.1,
      opacity: 0,
      delay: 0.4,
      ease: 'power2.out'
    });
     gsap.from('.social-icons a', {
      duration: 1,
      x: -30,
      opacity: 0,
      stagger: 0.1,
      delay: 0.6,
      ease: 'power2.out'
    });
     gsap.from('.scroll-text', {
      duration: 1,
      x: 30,
      opacity: 0,
      delay: 1,
      ease: 'power2.out'
    });
  });
 
 
 
 
 
 
 const menuIcon = document.querySelector('.menu-icon');
 const splitMenu = document.querySelector('.split-menu');
 const closeBtn = document.getElementById('closeMenu');
 
 
 menuIcon.addEventListener('click', () => {
  splitMenu.classList.add('active');
 });
 
 
 closeBtn.addEventListener('click', () => {
  splitMenu.classList.remove('active');
 });
 
 
 // Auto-close when a link is clicked
 document.querySelectorAll('.split-menu a').forEach(link => {
  link.addEventListener('click', () => {
    splitMenu.classList.remove('active');
  });
 });
 
 
 menuIcon.addEventListener('click', () => {
  splitMenu.classList.add('active');
 
 
  gsap.from('.menu-left ul li, .member-links ul li', {
    opacity: 0,
    y: 20,
    stagger: 0.05,
    duration: 0.6,
    ease: 'power2.out'
  });
 });
 