const fetch = require('isomorphic-fetch');

function callApi(endpoint) {
    const requestUrl = `http://localhost:5000/${endpoint}`;

    return (requestUrl, {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        }
    })
        .then(response => response.json())
        .then(json => {
            if (json) return json;
        })
        .catch(reason => {
            throw new Error(reason)
        })
};


module.exports = callApi();