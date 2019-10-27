const toggler = document.querySelector('.menu-toggler')
const topNav = document.querySelector('.top-nav')
const navLinks = document.querySelectorAll('.nav-list-link')
const buttonUp = document.querySelector('.button-up')

// open and close navigation
function toggleNav(e) {
  if (e.target === toggler || e.target.classList.contains('bar')) {
    toggler.classList.toggle('open')
    topNav.classList.toggle('open')
  } else {
    toggler.classList.remove('open')
    topNav.classList.remove('open')
  }
}

//smooth scroll
function goScroll(e) {
  e.preventDefault()
  if (
    e.target.classList.contains('button-up') ||
    e.target.classList.contains('fa-chevron-up')
  ) {
    document.body.scrollTo({ top: 0, behavior: 'smooth' })
    document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
    toggleNav(e)
  } else {
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    })
  }
}

//disblay up button when scroll from top
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = 'block'
  } else {
    buttonUp.style.display = 'none'
  }
}

toggler.addEventListener('click', toggleNav)

topNav.addEventListener('click', toggleNav)

navLinks.forEach(link => {
  link.addEventListener('click', goScroll)
})

buttonUp.addEventListener('click', goScroll)
