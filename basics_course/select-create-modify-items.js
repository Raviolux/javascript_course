
// SINGLE element selector
// in case of multiple targets they return the first of the document
console.log(document.getElementById("task-title"));
console.log(`clientLeft is ${document.getElementById("task-title").clientLeft}`);
// change style
document.getElementById("task-title").style.background = "#333";
document.getElementById("task-title").style.color = "pink";
document.getElementById("task-title").style.paddingBlockStart = "3px";
// change content
document.getElementById("task-title").textContent = "your mom";
document.getElementById("task-title").innerHTML = "<span>sssssuck</span>";
// A BETTER WAY
const taskTitle = document.getElementById("task-title");
// and then operate using this variable
taskTitle.textContent = 'sssssssasasa'

// SECOND MORE POWERFUL WAY
console.log(document.querySelector("#task-title")); // the # indicates an ID
// only selects the first li
document.querySelector("li").style.color = "red";





// MULTIPLE element selectors
// they return an html collection OR a node list
const items = document.getElementsByClassName('collection-item')
console.log(items[3])
items[0].style.color = 'green'
items[0].style.background = '#ccc'

const listItems = document.querySelector('ul').getElementsByClassName('collection-item')
console.log(listItems)

let lis = document.getElementsByTagName('li')
lis[1].style.color = 'purple'
lis[1].textContent = 'strasucamelo'

// convert html collection into array
lis = Array.from(lis)

lis.reverse()
console.log(lis)

// this returns a node list
let items2 = document.querySelectorAll('ul.collection li.collection-item')
console.log(items2)

items2.forEach(function(item, index){
    item.textContent = `${index}: T-34`
})

const liOdd = document.querySelectorAll('li:nth-child(odd)')
const liEven = document.querySelectorAll('li:nth-child(even)')

liOdd.forEach(function(li){li.style.background = '#ccc'})

for(let i = 0; i < liEven.length; i++){
    liEven[i].style.background = '#f4f4f4'
}






//////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////



let val;

const list = document.querySelector('ul.collection'); 
const listItem = document.querySelector('li.collection-item:first-child');
val = list
val = listItem

// with this I also get the text nodes in the list
// which are the linebreaks in the list
// returns a node-list
val = list.childNodes

//with this i only get the collection items
// returns an html collection
val = list.children


console.log(val)


// Create element
const lix = document.createElement('li');

// Add class
lix.className = 'collection-item';

// Add ID
lix.id = 'new-item'

// Add attribute
lix.setAttribute('title', 'New Item')

// Create text node and append
lix.appendChild(document.createTextNode('hello world!'))

// here I create the orange X on the right, using the
// same properties/attributes already present in thr html 
// Create new link element
const link = document.createElement('a')
// Add classes
link.className = 'delete-item secondary-content'
// Add icon html
link.innerHTML = '<i class="fa fa-remove"></i>'
// Append link into lix
lix.appendChild(link)

// Append lix as child to ul
document.querySelector('ul.collection').appendChild(lix)


// this is a good way to access PROPERTIES, not ELEMENTS
// to select elements it's better to use a QUERY SELECTOR
let ano
ano = document.all[3]
ano = document.head.length
ano = document.URL

// BAD WAY
ano = document.forms[0].id
ano = document.scripts[2].getAttribute('src')


console.log(ano)
// with this i print a string instead of an interactive element
console.log('ano is ' + ano)

console.log(lix);
console.log('============')

///////////////////////////////////////////////////////////////////////////////

///////////////////////////////////////////////////////////////////////////////



// Edit and delete elements
// editing the h5 title (ssssssuck)
const newHeading = document.createElement('h4')
// add ID
newHeading.id = 'task-title'
// add text node
newHeading.appendChild(document.createTextNode('Termagant'))
// get the old heading
const oldHeading = document.querySelector('#task-title')
// parent
const cardAction = document.querySelector('.card-action')

// replace
cardAction.replaceChild(newHeading, oldHeading)

// REMOVE ELEMENT
const lis2 = document.querySelectorAll('li')
const list2 = document.querySelector('ul')

lis2[0].remove()

list2.removeChild(lis2[1])


// CLASSES AND ATTRIBUTES
const firstLi = document.querySelector('li:first-child')
// we're aiming at the a tag inside this
const link2 = firstLi.children[0]
console.log(firstLi, link2)
// add-remove classes
link2.classList.add('test')
link2.classList.remove('secondary-content')
console.log(link2.classList)
// add-remove attributes
link2.setAttribute('href', 'http://github.com')
console.log(link2)
link.setAttribute('title', 'PornHub')

