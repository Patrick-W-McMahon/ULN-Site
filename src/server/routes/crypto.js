const https = require('https');

const getPrice = (req, res) => {
    const { keypair } = req.query;
    const mres = res;

    https.get(`https://api.binance.com/api/v1/ticker/price?symbol=${keypair}`, res => {
        let data = [];
        res.on('data', chunk => {
            data.push(chunk);
        });

        res.on('end', () => {
            const crypto = JSON.parse(Buffer.concat(data).toString());
            data = crypto;
            mres.send(crypto);
        });
    }).on('error', err => {
        console.log('Error: ', err.message);
    });
};

module.exports = {
    getPrice
};