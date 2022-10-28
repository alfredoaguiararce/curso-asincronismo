/**
 * It takes two numbers as arguments and returns the sum of those numbers.
 * @param num1 - The first number to add.
 * @param num2 - The second number to add.
 * @returns The function sum is being returned.
 */
function sum(num1, num2){
    return num1 + num2;
}

/**
 * The function calc takes in two numbers and a callback function. It then returns the result of the
 * callback function.
 * @param num1 - The first number to be used in the calculation.
 * @param num2 - The second number to be used in the calculation
 * @param callback - A function that will be called after calc() is done.
 * @returns The result of the callback function.
 */
function calc(num1, num2, callback){
    return callback(num1, num2);
}

/* Calling the calc function and passing in the numbers 2 and 2 and the function sum. */
console.log(calc(2, 2, sum));

/* A function that will print "Hola javascript" after 2 seconds. */
setTimeout(() => {
    console.log("Hola javascript");
}, 2000)

/**
 * It takes a name as an argument and prints a greeting to the console
 * @param name - The name of the person you want to greet.
 */
function gretting(name){
    console.log('Hola ' + name);
}

/* Calling the function gretting after 2 seconds and passing in the name Alfredo. */
setTimeout(gretting, 2000, "Alfredo");