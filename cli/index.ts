import { Command } from 'commander';
import figlet from 'figlet';
import chalk from 'chalk';
import { runInteractiveSession } from './interactive';
const program = new Command();

console.log(
  chalk.cyan(
    figlet.textSync('RPN Calculator!', {
      font: 'Standard',
      horizontalLayout: 'default',
    })
  )
);

program
  .name('rpn')
  .description('A Reverse Polish Notation calculator')
  .version('1.0.0');

program
  .command('start')
  .description('Start the interactive calculator session')
  .action(() => {
    runInteractiveSession();
  });

program.parse(process.argv);
