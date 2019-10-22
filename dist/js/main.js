// navigation
console.log('hello')

const toggler = document.querySelector('.menu-toggler')
const topNav = document.querySelector('.top-nav')

toggler.addEventListener('click', () => {
  toggler.classList.toggle('open')
  topNav.classList.toggle('open')
})
