const Web3 = require('web3')

export const getWeb3 = () => {
  const localHttpProvider = 'http://localhost:8545'
  const endpoint = process.env.RPC_ENDPOINT

  return new Web3(new Web3.providers.HttpProvider(endpoint || localHttpProvider))
}
