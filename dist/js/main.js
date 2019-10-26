// navigation
console.log('hello')

const toggler = document.querySelector('.menu-toggler')
const topNav = document.querySelector('.top-nav')

toggler.addEventListener('click', () => {
  toggler.classList.toggle('open')
  topNav.classList.toggle('open')
})

//scroll to top
window.onscroll = () => {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    buttonUp.style.display = 'block'
  } else {
    buttonUp.style.display = 'none'
  }
}

const buttonUp = document.querySelector('.button-up')

buttonUp.addEventListener('click', e => {
  e.preventDefault()

  document.body.scrollTo({ top: 0, behavior: 'smooth' })
  document.documentElement.scrollTo({ top: 0, behavior: 'smooth' })
})
