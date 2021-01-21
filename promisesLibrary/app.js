const posts = [
    {title: 'post one', body: 'post one'},
    {title: 'post two', body: 'post two'}    
]


function createPost(post) {
    return new Promise(function(res, rej) {
        setTimeout(function() { // this one right here is a CALLBACK function 
            posts.push(post)

            const fakeError = false
            if(!fakeError) {
                res()
            } else {
                rej('This is a simulated error message')
            }
        }, 2000)
    })
}


function getPosts() {
    setTimeout(function() {
        let output = ''
        posts.forEach(function(post){
            output += `<li>${post.title}</li>`
        })
        document.querySelector('#customers').innerHTML = output
    }, 1000)
}


createPost({title: 'tttttt', body: 'ggjgjgjgjvb'}).then(getPosts).catch(function(error){
    console.log(error)
})




document.querySelector('#button0').addEventListener('click', multi)

function sendPromise(e) {
    return new Promise((res, rej) => {
        console.log(e.type)
        if (e.type == 'click') {
            res(`${e.currentTarget} was clicked`)
        } else {
            rej('This wasn\'t a click event')
        }
    })
        // .then(() => console.log('a')) // not this way
}

function logPromise(prom) {
    document.querySelector('#promise-result').innerHTML = prom
}

function multi(evnt) {
    sendPromise(evnt).then(logPromise).catch(() => {console.log('qualcosa')})
}

const clickon = function clicker() {
    this.type = 'click'
}

// multi(clicker)
console.log(clickon.type)
let aaa = 0
aaa.onchange = console.log(aaa)
document.querySelector('#button0').addEventListener('click', () => {aaa = 1})




//============================================//

const http = new easyHttp


// http.get('https://google.com')
//     .then(console.log(res))
//     .catch(console.log(error))




