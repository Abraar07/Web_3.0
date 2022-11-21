require('@nomiclabs/hardhat-waffle');

module.exports = {
  solidity : '0.8.0',
  networks: {
    goerli: {
      url: "https://eth-goerli.g.alchemy.com/v2/8QJyFgGXpC4n3_gxiyikI1c5dZ3NXHQS",
      accounts:["d5565a9510686d3096275ca813d1f8cc23f252800965babac1f06ba15b4f467b"]
    }
  }
}