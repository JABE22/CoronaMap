/**
 * Writes given text to console.log
 * @param {string} text Text to print out 
 */
const sayHello = (text) => console.log(text);

(() => {
  const helloIndex = "Hello from index.js!";
  sayHello(helloIndex);
})();