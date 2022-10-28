const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
const API = 'https://api.escuelajs.co/api/v1/products';

/**
 * It takes a URL and a callback function as arguments, and makes an HTTP request to the URL. When the
 * HTTP request is complete, it calls the callback function with either an error object or the response
 * data (if any) from the HTTP request.
 * @param urlApi - The URL of the API you want to fetch data from.
 * @param callback - The function to call when the request is complete.
 * @returns the callback function.
 */
function fetchData(urlApi, callback) {
  let xhttp = new XMLHttpRequest();

  xhttp.open('GET', urlApi, true);
  xhttp.onreadystatechange = function (event) {
    if (xhttp.readyState === 4) {
      if(xhttp.status === 200) {
        callback(null, JSON.parse(xhttp.resposeText));
      }
    } else {
      const error = new Error('Error' + urlApi);
      return callback(error, null);
    }
  }
  xhttp.send();
}

/* Calling the function fetchData with the API URL and a callback function. */
fetchData(API, (a, b) => {
    console.log(b);
});