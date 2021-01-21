class easyHttp {
    get(url) {
        return new Promise ((res, rej) => {
            fetch(url)
                .then(response => response.json())
                .then(responseJson => res(responseJson))
                .catch(error => rej(error))
        })
    }

    post(url, data) {
        return new Promise((res, rej) => {
            fetch(url, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify(data)
            })
                .then(response => response.json())
                .then(responseJson => res(responseJson))
                .catch(error => rej(error))
        })
    }
}