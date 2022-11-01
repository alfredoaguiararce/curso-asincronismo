const XMLHttpRequest = require('xmlhttprequest').XMLHttpRequest; 
const API = 'https://api.escuelajs.co/api/v1';

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
        callback(null, JSON.parse(xhttp.responseText));
      }
      else {
        const error = new Error('Error' + urlApi);
        return callback(error, null);
      }
    } 
  }
  xhttp.send();
}

/* A callback hell. */
fetchData(`${API}/products`, (error1, data1) => {
    if(error1) return console.error(error1);
    fetchData(`${API}/products/${data1[0].id}`, (error2, data2) => {
        if(error2) return console.error(error2);
        fetchData(`${API}/categories/${data2?.category?.id}`, (error3, data3) => {
          if(error3) return console.error(error3);
          console.log(data1[0]);
          console.log(data2.title);
          console.log(data3.name);
        });
    });
});