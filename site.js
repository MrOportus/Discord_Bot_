const request = require('request');

//const urlList = ["https://www.google.comm", "https://www.amazon.com"];

const urlList = [""];

function getStatus(url) {
    return new Promise((resolve, reject) => {
        request(url, function(error, response, body) {
            resolve({site: url, status: (!error && response.statusCode == 200) ? "OK": "Down: " + error.message});
        });
    })   
}


let promiseList = urlList.map(url => getStatus(url));


// Promise.all(promiseList).then(resultList => {
//     resultList.forEach(result => console.log("Result: ", result));
    
// }); 

module.exports={getStatus};