import { Account, SignedTransaction, TransactionReceipt } from "web3-core";
import { getAccountByPrivateKey } from "./features/accounts";
import { getWeb3 } from "./features/providers";

const HelloWorldContract = require('./HelloWorld.json')

require('dotenv').config()

const web3 = getWeb3();

const sender = getAccountByPrivateKey(web3, process.env.ACCOUNT_PRIVATE_KEY)

if (!!sender) {
  // exampleSendTransaction(sender)

  // let contract = new web3.eth.Contract(HelloWorldContract.abi, process.env.CONTRACT_ADDRESS)

  // contract.methods.setName('Hieu').send({ from: sender.address }).then(console.log)

}

function exampleSendTransaction(sender: Account) {

  console.log("Address:", sender.address);
  console.log("Private Key:", sender.privateKey)

  web3.eth.getBalance(sender.address).then((balanceInWei: string) => {
    const balance = web3.utils.fromWei(balanceInWei)

    console.log("Balance In Wei:", balanceInWei)
    console.log("Balance:", balance)
  });

  const sendValueInEth = 0.01

// Creating the transaction object
  const txObject = {
    from: sender.address,
    to: process.env.RECEIVER_ADDRESS,
    value: web3.utils.numberToHex(web3.utils.toWei(sendValueInEth.toString(), 'ether')),
    gas: web3.utils.numberToHex(1000),
    gasLimit: web3.utils.numberToHex(21000),
    // nonce: web3.eth.getTransactionCount(sender.address),
  };

  web3.eth.accounts.signTransaction(txObject, sender.privateKey).then((signedTx: SignedTransaction) => {
    if (!signedTx) return

    web3.eth.sendSignedTransaction(signedTx.rawTransaction || '').then((receipt: TransactionReceipt) => {
      console.log(receipt)
    })
  });
}

