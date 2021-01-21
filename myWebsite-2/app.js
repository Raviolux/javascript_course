window.addEventListener('scroll', Sticker)

const subtitle = document.querySelector('#main-page')
const sticky = subtitle.offsetTop


function Sticker() {
  if (window.pageYOffset >= sticky) {
    console.log('aaa')
    subtitle.classList.add('sticky')
  } else {
    subtitle.classList.remove('sticky')
  }
}


