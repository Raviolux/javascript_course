
const modalBtn = document.querySelector('#modal-btn')
const close = document.querySelector('.close-modal')
const modal = document.querySelector('.modal')

window.addEventListener('load', () => {
    if (sessionStorage.getItem('lost') !== null) {
        const getLost = sessionStorage.getItem('lost')
        document.querySelector('#this-span').innerHTML = getLost
    }
})

function openModal() {
    modal.style.display = 'block'
}

function closeModal() {
    modal.style.display = 'none'
}

let lost = 'You clicked the button! All hope is lost!'

modalBtn.addEventListener('click', openModal)
modalBtn.addEventListener('click', () => {
    document.querySelector('#this-span'). innerHTML = lost
    sessionStorage.setItem('lost', lost)
})
close.addEventListener('click', closeModal)
// window.addEventListener('click', (e) => {
//     if (e.target == modal) {
//         closeModal()
//     }
// })


