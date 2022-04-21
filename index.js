
/**
 * 
 * @param {string} message 
 */
const say = (message) => {
  console.log(message);
}

const getJoke = () => {
  return 'undefined';
}

(function main () {
  say(`Hello I'm a duck!`);
  say(getJoke());
})();