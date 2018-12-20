const axios = require('axios');

function getTransactions(endpoint) {
    const requestUrl = `http://localhost:5000/${endpoint}`;

    axios.get(requestUrl)
        .then(response => response.json())
        .then(json => {
            return json
        })
        .catch(reason => {
            return reason
        })
};


module.exports = getTransactions();