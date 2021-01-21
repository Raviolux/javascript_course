const posts = [
    {title: 'post one', body: 'post one'},
    {title: 'post two', body: 'post two'}    
]

const selectCase = prompt('type 1 fos synchro mode, 2 for async, 3 for async with promises')

switch (selectCase) {

//=====================synchronous way===========================
case '1':

    function createPost(post) {
        setTimeout(function() { // this one right here is a CALLBACK function 
            posts.push(post)
        }, 1000)
    }


    function getPosts() {
        setTimeout(function() {
            let output = ''
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`
            })
            document.body.innerHTML = output
        }, 2000)
    }

    createPost({title: 'asdasdsada', body: 'sassasasas'})

    console.log(posts)
    getPosts()

break

//=====================Async way====================================
case '2':

    function createPost(post, callback) { // notice that this is a parameter
        setTimeout(function() { // this one right here is a CALLBACK function 
            posts.push(post)
            callback() // i am using the parameter name and calling it as a function
            // (in fact, it is a function)
        }, 2000)
    }


    function getPosts() {
        setTimeout(function() {
            let output = ''
            posts.forEach(function(post){
                output += `<li>${post.title}</li>`
            })
            document.body.innerHTML = output
        }, 1000)
    }

    // this is where i pass getPosts as a callback
    // notice how i didn't CALL the function, i just passed it
    // createPost CALLS the function passed as a parameter
    // callback vs callback()
    createPost({title: 'asdasdads', body: 'bbbbvbcvbcvb'}, getPosts)

break

//====================using Promises========================
case '3':

    function createPost(post) {
        return new Promise(function(resolve, reject) {
            setTimeout(function() { // this one right here is a CALLBACK function 
                posts.push(post)

                const fakeError = false
                if(!fakeError) {
                    resolve()
                } else {
                    reject('This is a simulated error message')
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
            document.body.innerHTML = output
        }, 1000)
    }


    createPost({title: 'tttttt', body: 'ggjgjgjgjvb'}).then(getPosts).catch(function(error){
        console.log(error)
    })

} // end of the big switch case
