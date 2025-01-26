Overview
This repository contains the code and resources for the Turbin3 Prerequisite Project developed as part of the WBA Turbine 2024 Q3 Cohort. The project demonstrates various functionalities on the Solana blockchain, including wallet management, token transfers, and interaction with smart contracts using TypeScript and Anchor framework.
Table of Contents
Prerequisites
Installation
Project Structure
Key Files
Usage
Development
License
Prerequisites
Before you begin, ensure you have the following installed:
Node.js: Version 14 or higher
Yarn: Package manager for JavaScript
TypeScript: For type definitions and compiling TypeScript code
Installation
Clone the repository:
bash
git clone https://github.com/ritrafa/turbin3-portfolio.git
cd turbin3-portfolio
Install dependencies:
bash
npm install --force
Ensure your wallet file is correctly configured and added to .gitignore to avoid accidental exposure of sensitive information.
Project Structure
The project consists of several TypeScript files organized as follows:
text
turbin3-portfolio/
├── enroll.ts          # Handles enrollment in the WBA program
├── transfer.ts        # Manages token transfers between wallets
├── airdrop.ts         # Requests airdrop of SOL tokens
└── prereq.ts          # Defines the program's IDL and types
Key Files
enroll.ts
This script is responsible for enrolling a user in the WBA program by creating a Program Derived Address (PDA) and executing a transaction that completes the enrollment process using the GitHub account as an identifier.
transfer.ts
This file facilitates transferring SOL tokens from one wallet to another on the Solana devnet. It constructs a transaction using the System Program's transfer method.
airdrop.ts
This script requests an airdrop of SOL tokens to a specified wallet address, allowing developers to fund their wallets for testing purposes.
prereq.ts
Defines the structure of the smart contract, including instructions, accounts, and error messages. It exports an Interface Definition Language (IDL) used by Anchor to interact with the smart contract.
Usage
To run any of the scripts, use the following command format:
bash
npx ts-node <script_name>.ts
For example, to execute the enrollment script:
bash
npx ts-node enroll.ts
Make sure to replace <script_name> with transfer, airdrop, or prereq as needed.
Development
Compiling TypeScript
After making changes to any TypeScript files, compile them using:
bash
npm run build
Running Tests
To ensure everything works as expected, run tests with:
bash
npm test
License
This project is licensed under the MIT License Overview
This repository contains the code and resources for the Turbin3 Prerequisite Project developed as part of the WBA Turbine 2024 Q3 Cohort. The project demonstrates various functionalities on the Solana blockchain, including wallet management, token transfers, and interaction with smart contracts using TypeScript and Anchor framework.
Table of Contents
Prerequisites
Installation
Project Structure
Key Files
Usage
Development
License
Prerequisites
Before you begin, ensure you have the following installed:
Node.js: Version 14 or higher
Yarn: Package manager for JavaScript
TypeScript: For type definitions and compiling TypeScript code
Installation
Clone the repository:
bash
git clone https://github.com/ritrafa/turbin3-portfolio.git
cd turbin3-portfolio
Install dependencies:
bash
npm install --force
Ensure your wallet file is correctly configured and added to .gitignore to avoid accidental exposure of sensitive information.
Project Structure
The project consists of several TypeScript files organized as follows:
text
turbin3-portfolio/
├── enroll.ts          # Handles enrollment in the WBA program
├── transfer.ts        # Manages token transfers between wallets
├── airdrop.ts         # Requests airdrop of SOL tokens
└── prereq.ts          # Defines the program's IDL and types
Key Files
enroll.ts
This script is responsible for enrolling a user in the WBA program by creating a Program Derived Address (PDA) and executing a transaction that completes the enrollment process using the GitHub account as an identifier.
transfer.ts
This file facilitates transferring SOL tokens from one wallet to another on the Solana devnet. It constructs a transaction using the System Program's transfer method.
airdrop.ts
This script requests an airdrop of SOL tokens to a specified wallet address, allowing developers to fund their wallets for testing purposes.
prereq.ts
Defines the structure of the smart contract, including instructions, accounts, and error messages. It exports an Interface Definition Language (IDL) used by Anchor to interact with the smart contract.
Usage
To run any of the scripts, use the following command format:
bash
npx ts-node <script_name>.ts
For example, to execute the enrollment script:
bash
npx ts-node enroll.ts
Make sure to replace <script_name> with transfer, airdrop, or prereq as needed.
Development
Compiling TypeScript
After making changes to any TypeScript files, compile them using:
bash
npm run build
Running Tests
License
This project is licensed under the MIT License 
