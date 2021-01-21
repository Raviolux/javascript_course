// events
// document.querySelector('.clear-tasks').addEventListener('click',
//     function(rrr){
//         console.log(rrr)
//         rrr.preventDefault()
//     })


let items2 = document.querySelectorAll('ul.collection li.collection-item')
// console.log(items2)

items2.forEach(function(item, index){
    item.textContent = `${index}: test`
})


// mouse events
const clearBtn = document.querySelector('.clear-tasks');
const card = document.querySelector('.card')
const heading = document.querySelector('h5')

function runEvent(e) {
    console.log(`EVENT TYPE: ${e.type}`)
    heading.textContent = `Mouse X: ${e.offsetX}, Mouse Y: ${e.offsetY}`
    document.body.style.backgroundColor = `rgb(${e.offsetX}, ${e.offsetY}, 66)`
}

clearBtn.addEventListener('click', runEvent);
clearBtn.addEventListener('mouseup', runEvent);

card.addEventListener('mousemove', runEvent)


// keyboard events
const form = document.querySelector('form')
const taskInput = document.querySelector('#task')

taskInput.value = ''

form.addEventListener('submit', runEventKeyb)

function runEventKeyb(e) {
    console.log(`EVENT TYPE: ${e.type}`)
    console.log(taskInput.value)
    e.preventDefault()
}






