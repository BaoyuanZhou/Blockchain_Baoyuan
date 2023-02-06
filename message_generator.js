//import
const secp256k1= require("secp256k1");
const EthCrypto = require('eth-crypto');
//message
const secret= '010b63ab4f7d5f586fe0be512b854fa725ac7e55283cc9622f841eadb418cbc';
const name= "Baoyuan Zhou";
const email="baoyuan2@illinois.edu";
const code="not yet";
const fav_spot="Sakanaya";
const message=secret+'\n'+ name +'\n'+ code + '\n' + fav_spot;
console.log(message);


//encrption and stringify
async function encryption(){
    const encrypted = await EthCrypto.encryptWithPublicKey(
        '80f712a0d29c0853b3cb9459459729c2a5af5d6f528130cf149c4549b794cf951961c592d9b86695c3c2f23694c6e2472e163a29a011b7cc932817bfee9448ce', // publicKey
        message // message
    );
    return encrypted;
}

async function main(){
    const result= await encryption();
    console.log(result);
    const str = EthCrypto.cipher.stringify(result)
    console.log(str);
}
main()
//for interacting with the Part1 contract, I copy and paste the P1 contract code to Remix IDE. 
//I set the enviorment to Goerli Testnet Network using metamask and deployed it and interact with it.


