const fetch = require("node-fetch");

module.exports = (req, res) => {
    let apiQuery = `https://geo.ipify.org/api/v1?apiKey=${process.env.IPYFIKEY}}&ipAddress=8.8.8.8&domain=`;

    const { address = '8.8.8.8' } = req.query;
    apiQuery = apiQuery + `${address}`;

    fetch(apiQuery).then(x => x.json()).then(json => res.status(200).send(json));
}