const fetch = require("node-fetch");

module.exports = (req, res) => {
    res.setHeader('Access-Control-Allow-Credentials', true)
    res.setHeader('Access-Control-Allow-Origin', '*')
    res.setHeader('Access-Control-Allow-Methods', 'GET,OPTIONS,PATCH,DELETE,POST,PUT')
    res.setHeader(
        'Access-Control-Allow-Headers',
        'X-CSRF-Token, X-Requested-With, Accept, Accept-Version, Content-Length, Content-MD5, Content-Type, Date, X-Api-Version'
    )
    
    let apiQuery = `https://geo.ipify.org/api/v1?apiKey=${process.env.IPYFIKEY}&ipAddress=8.8.8.8&domain=`;

    const { address = '8.8.8.8' } = req.query;
    apiQuery = apiQuery + `${address}`;

    fetch(apiQuery).then(x => x.json()).then(json => res.status(200).send(json));
}