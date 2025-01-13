import { Keypair } from "@solana/web3.js";
import bs58 from 'bs58';
import prompt from 'prompt-sync';
//Generate a new keypair
let kp = Keypair.generate()
console.log(`You have generated a new Solana wallet: ${kp.publicKey.toBase58()}`)
console.log(`[${kp.secretKey}]`)
const promptSync = prompt();

// You can call these functions like this:
// base58_to_wallet();
// wallet_to_base58();
function base58_to_wallet() {
    const base58 = promptSync("Enter your base58 private key: ");
    const wallet = bs58.decode(base58);
    console.log(Array.from(wallet));
}

function wallet_to_base58() {
    const walletInput = promptSync("164,198,61,125,108,218,49,43,222,168,114,138,196,78,218,101,51,116,57,113,25,105,193,176,222,17,64,211,20,136,93,141,201,8,57,237,84,84,135,213,103,1,16,134,49,205,243,152,12,122,93,211,193,96,104,94,216,199,34,54,99,151,41,191");
    const wallet = new Uint8Array(walletInput.split(',').map(num => parseInt(num.trim())));
    const base58 = bs58.encode(wallet);
    console.log(base58);
}