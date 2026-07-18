document.getElementById('year') && (document.getElementById('year').textContent = new Date().getFullYear());

// navbar scroll style
const navbar = document.getElementById('navbar');
if(navbar){
  window.addEventListener('scroll', ()=>{
    if(window.scrollY > 40){ navbar.classList.add('bg-[#060d1f]/90','backdrop-blur-md','border-b','border-white/10','shadow-lg'); }
    else { navbar.classList.remove('bg-[#060d1f]/90','backdrop-blur-md','border-b','border-white/10','shadow-lg'); }
  });
}

// mobile menu
const menuBtn = document.getElementById('menuBtn');
const mobileMenu = document.getElementById('mobileMenu');
if(menuBtn && mobileMenu){
  menuBtn.addEventListener('click', ()=>{
    const open = mobileMenu.style.maxHeight && mobileMenu.style.maxHeight !== '0px';
    mobileMenu.style.maxHeight = open ? '0px' : '500px';
    mobileMenu.style.opacity = open ? '0' : '1';
  });
  document.querySelectorAll('.mnav').forEach(a=>a.addEventListener('click',()=>{
    mobileMenu.style.maxHeight='0px'; mobileMenu.style.opacity='0';
  }));
}

// reveal on scroll
const revealEls = document.querySelectorAll('.reveal');
const io = new IntersectionObserver((entries)=>{
  entries.forEach(e=>{ if(e.isIntersecting){ e.target.classList.add('show'); io.unobserve(e.target); } });
},{threshold:0.15});
revealEls.forEach(el=>io.observe(el));

// contact form (contact page)
const contactForm = document.getElementById('contactForm');
if(contactForm){
  contactForm.addEventListener('submit', (e)=>{
    e.preventDefault();
    alert('Thanks! We will get back to you soon.');
    contactForm.reset();
  });
}
