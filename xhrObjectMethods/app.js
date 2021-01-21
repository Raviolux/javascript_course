
// these lines demonstrate that i can also call events this way
// addEventListener uses a query (jQuery) since in accepts a string
// 'click' to reference an event type
const btnn = document.getElementById('button')
btnn.onclick = function(e) {
    console.log(e.type + "strasucaaaaaaaa")
}

//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx
// btnn.on('click', function(e) {
//     console.log(e.type + " putridone")
// })
// DOES NOT WORK
//xxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxxx

//----------------------------------//
document.getElementById('button').addEventListener('click', loadData)

function loadData() {
    // create xhr object
    const xhr = new XMLHttpRequest()

    // open
    xhr.open('GET', 'data.txt', true) // true means async

    xhr.send()

    // create on-load event. is triggered by every packet
    xhr.onload = function() {
        if(this.status === 200) {
            console.log(this.response)
        }
    }
}


// =============================================== //

// simple function to avoid typing that long string over and over
function eventer(element, event, execute) {
    document.getElementById(element).addEventListener(event, execute)
}

eventer('button1', 'click', loadCustomer)
eventer('button2', 'click', loadCustomers)

// reads from file customer.json adn returns the content
function loadCustomer() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customer.json', true) // true means asynchronous

    xhr.send()

    // onload means ON LOAD EVENT
    // just like in html onlick='on-click-event-function-here'
    // in this case onload='on-load-event-function-here'
    xhr.onload = function() { 
        // i still have to understand the THIS part
        if(this.status === 200) {
            const customer = JSON.parse(this.response)
        
            const output = `
            <ul>
              <li>id: ${customer.id}</li>
              <li>name: ${customer.name}</li>
            </ul>`  
        
            document.getElementById('customer').innerHTML = output
        
        }    
    }    
}    


function loadCustomers() {
    const xhr = new XMLHttpRequest()

    xhr.open('GET', 'customers.json', true) // trues means asynchronous
        
    xhr.send() // i would put the request BODY here if it was a post, put, delete or other

    xhr.onload = function() {
        if(this.status === 200) {
            const customers = JSON.parse(this.response)
            let output = ''

            customers.forEach(function(customer){
                output += `
                <ul>
                  <li>id: ${customer.id}</li>
                  <li>name: ${customer.name}</li>
                </ul>`  
            })

            document.getElementById('customers').innerHTML = output
        
        }    
    }    
}  

