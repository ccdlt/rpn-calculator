# RPN CLI Calculator

A command-line Reverse Polish Notation (RPN) calculator built in TypeScript. This tool evaluates mathematical expressions using a stack-based approach and supports the four standard arithmetic operators (+, -, *, /).

## Overview

Reverse Polish Notation is a postfix notation where operators follow their operands. This calculator takes user input from standard input, evaluates the expression, and prints the result. It maintains an internal stack between inputs, providing a fluid and interactive experience.

Example:

```bash
Welcome to RPN Calculator
Get started by typing a numerical value
(type `q` to quit)

> 5
✔ Pushed: 5

(top ↓):
[5]

> 6 7 8
✔ Pushed: 6, 7, 8

(top ↓):
[8]
[7]
[6]
[5]

> +
✔ Result: 15

(top ↓):
[15]
[6]
[5]

> q
👋 Goodbye!
```

## Features

* Interactive CLI interface using standard input/output
* Supports the four basic arithmetic operators: `+`, `-`, `*`, `/`
* Graceful error handling (stack underflow, division by zero, invalid tokens)
* Maintains calculator state across inputs
* Displays a vertical stack with most recent value on top
* Exits cleanly on `q` or EOF (`Ctrl+D`)
* Fully typed with TypeScript
* Unit tested with [Vitest](https://vitest.dev/)

---

## Tech Stack

* **Language**: TypeScript (Node.js)
* **CLI**: Node's built-in `readline` module
* **Testing**: Vitest
* **Build Tool**: npm + `tsc`
* **Styles**: Figlet + Chalk

---

## Project Structure

```
rpn-calculator/
│
├── cli/
│   ├── index.ts           # cli entry point with commander.js
│   └── interactive.ts     # core REPL loop with readline
│
├── src/
│   ├── calculator.ts      # stack calculation logic, controller
│   ├── operations.ts      # operator handling
│   └── utils/
│       ├── index.ts
│       └── types.ts
│
├── test/
│   ├── calculator.test.ts
│   └── operations.test.ts
│
├── .eslintrc.js
├── .prettierrc
├── tsconfig.json
├── vitest.config.js
├── package.json
└── README.md
```

## Getting Started

### Prerequisites

* Node.js (v18 or later)
* npm

### Install & Run

```bash
git clone https://github.com/ccdlt/rpn-calculator.git
cd rpn-calculator
npm install
npm start
```

You can now type full expressions into the CLI:

```bash
> 5 1 2 + 4 * + 3 -
✔ Result: 14

(top ↓):
[14]
```

### Run Tests

```bash
npm test
```

---

## Design Decisions

### Functional, Not Class-Based

I opted for **functional programming** to keep logic simple and composable. Each function is pure, testable, and easily reused across interfaces.

### Decoupled Modules

The CLI, operations, and evaluation logic are in separate modules. This:

* Keeps responsibilities clear
* Makes it easier to add interfaces later (e.g. file, WebSocket, API)

### Extensible Operator System

Operators are implemented as named functions in a map. Adding a new operator (e.g. `sqrt`) just means adding one function and updating the map.

---

## Trade-offs

* The stack is stored in memory per session, which means the calculator doesn’t support persistence across runs.
* I used `readline` over `Inquirer.js` to maintain a low-dependency, UNIX-like CLI feel.
* Logging and error messages are simple and geared for a technical audience. More user-friendly errors could be added with more time.

---

## Future Improvements

* Support for advanced operators (`^`, `%`, `sqrt`)
* Clear / undo / history commands
* Configurable stack display format
* WebSocket, file input, or REST interface
* Persistent storage for session recovery
* Optional GUI frontend (e.g. React + Chakra UI)

---

## Author

**Sierra Wendt**
[GitHub](https://github.com/ccdlt)

