const promise = new Promise(function (resolve, reject) {
    resolve('Hey! todo correcto!')
});

/* A promise chain. */
const cows = 15;

const countCows = new Promise(function (resolve, reject) {
    if(cows > 10){
        resolve(`We have ${cows} cows on the farm.`);
    }else{
        reject(`There is no cows on the farm.`);
    }
});

/* A promise chain. */
countCows.then((result) => {
    console.log(result);
}).catch((error) => {
    console.log(error);
}).finally(() => {
    console.log('Finish');
});


const Delay = (time, message) => {
    return new Promise((resolve, reject) =>{
        setTimeout(() => {
            resolve(message)
        }, time);
    })
};

/* A promise chain. */
Delay(2000, "Hola alfredo")
.then((msg) => console.log(msg));