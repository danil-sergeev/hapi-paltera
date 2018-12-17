const axios = require('axios');

async function getTransactions(endpoint) {
    const requestUrl = `http://localhost:5000/${endpoint}`;

    try {
        const response = await axios.get(requestUrl)
        return response.json()
    }
    catch (e) {
        console.error(e)
    }

};


module.exports = getTransactions();