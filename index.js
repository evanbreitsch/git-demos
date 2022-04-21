
/**
 * 
 * @param {string} message 
 */
const say = (message) => {
  console.log(message);
}

const compliments = [
  `You make me a better person`,
  `I like the way your code smells`,
  `You have great taste in white-space`,
]

const getCompliment = () => {
  const rdmIndex = Math.floor(Math.random() * compliments.length);
  return compliments[rdmIndex];
}

(function main () {
  say(`Hello I'm a duck!`);
  say(getCompliment());
})();