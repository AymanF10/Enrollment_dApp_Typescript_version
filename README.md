Solana Airdrop and Enrollment Project. This project demonstrates how to interact with the Solana blockchain using TypeScript. It includes scripts-

● Using @solana/web3.js to create a new keypair ● Use our Public Key to airdrop ourselves some Solana devnet tokens ● Make Solana transfers on devnet ● Empty your devnet wallet into your Turbin3 wallet ● Use our Turbin3 Private Key to enroll in the Turbin3 enrollment dApp

Enrollment Process-

The program's IDL is imported and used to create a TypeScript interface.
Anchor, a Solana development framework, is used to interact with the program.
The user's Turbin3 wallet (containing the private key) is loaded.
A connection to the Solana devnet is established.
The user's GitHub account name is submitted as a UTF-8 buffer.
The complete instruction is called, passing the required accounts and GitHub information.
Upon successful execution, the user's enrollment is recorded on-chain, providing proof of prerequisite completion.
