const navToggle = document.querySelector('.nav-toggle');
const navLinks = document.querySelectorAll('.nav__link');
const fixedHeader = document.getElementById('fixedHeader');

const myScrollFunc = function () {
  let y = window.scrollY;
  if (y >= 50) {
    fixedHeader.className = 'fixed-header';
  } else {
    fixedHeader.className = 'hide';
  }
};

window.addEventListener('scroll', myScrollFunc);

navToggle.addEventListener('click', () => {
  document.body.classList.toggle('nav-open');
});

navLinks.forEach(link => {
  link.addEventListener('click', () => {
    document.body.classList.remove('nav-open');
  });
});
