import readline from 'readline';
import chalk from 'chalk';
import { evaluateTokens } from '../src/calculator';

const stack: number[] = [];

export function runInteractiveSession() {
  console.log(chalk.greenBright('Welcome to RPN Calculator \nGet started by typing a numerical value \n(type `q` to quit)\n'));

  const rdln = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
    prompt: chalk.blueBright('> ')
  });

  rdln.prompt();

  rdln.on('line', (line) => {
    const input = line.trim();
    if (input === 'q') {
      console.log(chalk.cyan('\n👋 Goodbye!\n'));
      rdln.close();
      return;
    }

    const tokens = input.split(/\s+/);

    try {
      evaluateTokens(tokens, stack);
      const last = stack[stack.length - 1];
      const containsOperator = tokens.some(token => isNaN(Number(token)));
      const isSingleOperator = tokens.length === 1 && containsOperator;

      if (isSingleOperator) {
        console.log(chalk.green(`✔ Result: ${last}`));
      } else if (containsOperator) {
        console.log(chalk.green(`✔ Result: ${last}`));
      } else {
        console.log(chalk.green(`✔ Pushed: ${tokens.join(', ')}`));
      }

      console.log(chalk.magenta('\n(top ↓):'));
      [...stack].reverse().forEach(val => {
        console.log(chalk.yellow(`[${val}]`));
      });
    } catch (err: any) {
      console.log(chalk.red(`Error: ${err.message}`));
    }

    rdln.prompt();
  });

  rdln.on('close', () => {
    process.exit(0);
  });
}
