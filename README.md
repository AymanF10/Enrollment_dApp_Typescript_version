## Overview
This project is part of the Turbin3 Q3 Cohort, focusing on developing applications on the Solana blockchain using TypeScript and the Anchor framework. The primary objectives include keypair generation, airdropping SOL tokens, transferring tokens, and enrolling users in a registration program.

## Table of Contents
- [Prerequisites](#prerequisites)
- [Installation](#installation)
- [Project Structure](#project-structure)
- [Scripts](#scripts)
- [Usage](#usage)
- [Error Handling](#error-handling)
- [Contributing](#contributing)
- [License](#license)


## Installation
1. Clone the repository:
   ```bash
   git clone https://github.com/ritrafa/turbin3-portfolio.git
   cd turbin3-portfolio
   ```

2. Install the required packages:
   ```bash
   npm install --force
   ```

3. Ensure your wallet private key is added to the local environment. Update your `.gitignore` to prevent wallet files from being tracked.

4. Initialize TypeScript configuration:
   ```bash
   npx tsc --init
   ```

## Project Structure
The project consists of several TypeScript files, each serving a specific purpose:

| File            | Description                                                 |
|------------------|-------------------------------------------------------------|
| `enroll.ts`      | Handles user enrollment in the WBA registration program.    |
| `transfer.ts`    | Manages SOL token transfers between wallets.                |
| `airdrop.ts`     | Requests an airdrop of SOL tokens to a specified wallet.    |
| `prereq.ts`      | Defines the program's IDL (Interface Definition Language) and data structures.|


## Scripts
### Enrollment Script (`enroll.ts`)
This script enrolls a user by completing a transaction that includes their GitHub account information.

### Transfer Script (`transfer.ts`)
This script transfers a specified amount of SOL from one wallet to another.

### Airdrop Script (`airdrop.ts`)
This script requests an airdrop of SOL tokens to the user's wallet for testing purposes.

### Example Command to Run Scripts
To run any TypeScript file, use:
```bash
npm run {script_name}
```
For example:
```bash
npm run enroll
```

## Usage
1. **Airdrop Tokens**: Run `airdrop.ts` to receive 2 SOL tokens.
2. **Transfer Tokens**: Execute `transfer.ts` to send tokens to another wallet.
3. **Enroll User**: Use `enroll.ts` to enroll with your GitHub account.

### Important Notes:
- Ensure that your wallet files are correctly set up and referenced in the scripts.
- The Solana devnet is used for testing; transactions will not involve real funds.


## License
This project is licensed under the MIT License - see the LICENSE file for details.

