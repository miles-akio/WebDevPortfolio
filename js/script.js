document.addEventListener("DOMContentLoaded", () => {
    // Smooth scroll for links
    const links = document.querySelectorAll("a.nav-link");
    for (const link of links) {
      link.addEventListener("click", (event) => {
        event.preventDefault();
        document.querySelector(link.getAttribute("href")).scrollIntoView({
          behavior: "smooth"
        });
      });
    }
  
    // Sticky header
    const header = document.querySelector('.header');
    const hero = document.querySelector('.hero');
    const heroHeight = hero.offsetHeight;
  
    window.addEventListener('scroll', () => {
      if (window.scrollY > heroHeight) {
        header.classList.add('sticky');
      } else {
        header.classList.remove('sticky');
      }
    });
  });
  
