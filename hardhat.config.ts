require('dotenv').config({path: '.env'});

import 'dotenv/config';
import {HardhatUserConfig} from 'hardhat/types';
import 'hardhat-deploy';
import 'hardhat-deploy-ethers';
import 'hardhat-gas-reporter';
// import 'hardhat-spdx-license-identifier';
// import 'hardhat-contract-sizer';
// import '@nomiclabs/hardhat-etherscan';


const config: HardhatUserConfig = {
  solidity: {
    compilers: [
      {
        version: '0.6.12',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
      {
        version: '0.8.13',
        settings: {
          optimizer: {
            enabled: true,
            runs: 200
          },
        },
      },
    ],
  },
  networks: {
    hardhat: {
      blockGasLimit: 12_450_000,
      hardfork: "london"
    },
    localhost: {
      url: 'http://localhost:8545',
    },
    testnet: {
      url: `https://speedy-nodes-nyc.moralis.io/${process.env.MORALIS}/bsc/testnet`,
      accounts: [`${process.env.PRIVATE_KEY}`]
    },
  },
  paths: {
    sources: 'contracts',
  },
  mocha: {
    timeout: 0,
  },
  etherscan: {
    apiKey: `${process.env.API_KEY}`
  },
  gasReporter: {
    enabled: false
  }
};

export default config;
