require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */

const NEXT_PUBLIC_PRIVATE_KEY = process.env.Private_Key ;

//SEPOLIA
// const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_sepolia";

//HOLESKY
const NEXT_PUBLIC_RPC_URL = "https://rpc.ankr.com/eth_holesky";

module.exports = {
  solidity: "0.8.0",
  // defaultNetwork: "SepoliaETH",
  defaultNetwork: "ETH",
  networks: {
    hardhat: {},
    sepolia: {
      url: NEXT_PUBLIC_RPC_URL,
      accounts: [`0x${NEXT_PUBLIC_PRIVATE_KEY}`],
      gasPrice: 3000000000,
    },
  },
};
