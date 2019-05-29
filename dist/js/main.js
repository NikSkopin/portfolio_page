/* Smooth scroll */

$('.menu-nav a').on('click', function(e) {
  if (this.hash !== '') {
    e.preventDefault();

    const hash = this.hash;

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top
      },
      800
    );
  }
});

//Navigation menu

/* Open */
function openNav() {
  document.querySelector('.overlay').style.height = '100%';
}

/* Close */
function closeNav() {
  const x = window.matchMedia('(max-width: 968px)');
  if (x.matches) {
    document.querySelector('.overlay').style.height = '0%';
  }
}

/* Work section details toggle */

const acc = document.getElementsByClassName('details-accordion');

for (let i = 0; i < acc.length; i++) {
  acc[i].addEventListener('click', function() {
    this.classList.toggle('active-details');

    const panel = this.nextElementSibling;
    if (panel.style.display === 'block') {
      panel.style.display = 'none';
    } else {
      panel.style.display = 'block';
    }
  });
}
