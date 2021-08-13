const request = require('request');

function getStatus(url) {
    return new Promise((resolve, reject) => {
        request(url, function(error, response, body) {
            resolve({site: url, status: (!error && response.statusCode == 200) ? "OK": "Down: " + error.message});
        });
    })   
}

module.exports={getStatus};
