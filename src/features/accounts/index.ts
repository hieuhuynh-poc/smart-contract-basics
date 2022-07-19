import Web3 from "web3";
import { Account } from "web3-core";

export const getAccountByPrivateKey = (web3: Web3, privateKey: string = ''): Account | null => {
  if(!web3 || !privateKey) return null;

  return web3.eth.accounts.privateKeyToAccount(privateKey);
}
