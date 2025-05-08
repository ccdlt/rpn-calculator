import chalk from 'chalk';
import inquirer from 'inquirer';
import { evaluateTokens } from '../src/calculator';

const stack: number[] = [];

export async function runInteractiveSession() {
  console.log(chalk.green('Welcome to the interactive RPN calculator!\n(Type `q` to quit)\n'));

  while (true) {
    const { input } = await inquirer.prompt([
      {
        type: 'input',
        name: 'input',
        message: '> ',
      },
    ]);

    if (input.toLowerCase() === 'q') {
      console.log(chalk.blue('\nGoodbye!'));
      process.exit(0);
    }

    const tokens = input.trim().split(/\s+/);
    try {
      evaluateTokens(tokens, stack);
      console.log(chalk.magenta('Stack:'), chalk.yellow(JSON.stringify(stack)));
    }  catch (err: any) {
      console.log(chalk.red(`${err.message}`));
    }
  }
}
