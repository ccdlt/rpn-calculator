import readline from "readline";
import { evaluateTokens } from './calculator';


const rdln = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
  prompt: "> "
});

console.log("RPN Calculator (Type 'q' to quit)");
rdln.prompt();

let stack: number[] = [];

const handleInput = (line: string) => {
  const trimmed = line.trim();
  if (trimmed === "q") {
    rdln.close();
    return;
  }

  const parseTokens = (input: string): (string | number)[] => {
    return input.split(/\s+/).map(token => {
      const num = Number(token);
      return isNaN(num) ? token : num;
    });
  };

  const tokens = parseTokens(trimmed);


  try {
    evaluateTokens(tokens, stack);
    if (stack.length) {
      console.log(stack.join(" "));
    }
  } catch (err: any) {
    console.error(`Error: ${err.message}`);
  }

  rdln.prompt();
};

rdln.on("line", handleInput);
rdln.on("close", () => {
  console.log("\nGoodbye!");
  process.exit(0);
});
