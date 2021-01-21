fetch('https:/httpbin.org/get')
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(error => console.log(error))


postData = {
    name: 'banana',
    code: 'banana2'
}

fetch('https://httpbin.org/post', {
    method: 'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify(postData)
})
    .then(res => res.json())
    .then(resJson => console.log(resJson))
    .catch(err => console.log(err))


Promise.resolve(postData)
    .then(data => console.log(data))




