module.exports = (req, res) => {
    let regEx = `\b(25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.
    (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.
    (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.
    (25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\b`;

    let apiQuery = `https://geo.ipify.org/api/v1?apiKey=${process.env.IPYFIKEY}&ipAddress=`;

    if(regEx.test(address)) {
        apiQuery = apiQuery + address;
    }
    else {
        apiQuery = apiQuery + `8.8.8.8&domain=${address}`;
    }

    res.redirect(apiQuery);
  }