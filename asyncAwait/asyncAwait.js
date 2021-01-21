async function poster(url, data) {
    const response = await fetch(url, {
        method: 'POST',
        body: JSON.stringify(data)
    })
    return response.json()
}

postData = { 
    name: 'banana',
    code: 'banana2'
}

poster('https://httpbin.org/post', postData)
    .then(response => console.log(response))