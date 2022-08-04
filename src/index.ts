import axios from 'axios';
import { log, format } from './logger';

(async() => {
  let args = process.argv.slice(2);
  let views = parseInt(args[0]);
  let username = String(args[1]);

  if (isNaN(views) || !username) {
    return log('Usage: node index.js <views> <username>', 'error');
  }

  console.clear();

  for (let i = 0; i < views; i++) {
    try {
      await axios.get('https://komarev.com/ghpvc/?username=' + username, { headers: { 'User-Agent': 'github-camo' } });
      printUpdatingMessage(format(`Views botted: ${i + 1}/${views}`, 'info'));
    } catch (error) { }
  }
})();

function printUpdatingMessage(message: String){
  process.stdout.cursorTo(0);
  process.stdout.write(String(message));
}