
/**
 * 
 * @param {string} message 
 */
const say = (message) => {
  console.log(message);
}

const getCompliment = () => {
  return `I like the way your code smells`;
}

(function main () {
  say(`Hello I'm a duck!`);
  say(getCompliment());
})();