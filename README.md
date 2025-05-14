# TheSwap: Pokémon-Themed Token Exchange

PokéSwap is a decentralized exchange platform focused on Pokémon-themed ERC20 tokens. Built with Next.js, Solidity, and TailwindCSS, this project demonstrates Web3 development skills and provides a fun, themed trading experience.

![TheSwap Screenshot](./public/TheSwap-screenshot.png)

## Features

- **Swap Pokémon Tokens**: Exchange between various Pokémon-themed ERC20 tokens or ETH
- **Token Portfolio**: View your token balances and portfolio value
- **Real-time Balance Updates**: See your wallet balances update in real-time
- **Interactive UI**: Smooth animations and transitions for a modern user experience
- **Mobile Responsive**: Fully responsive design works on all device sizes

## Pokémon Token Collection

PokéSwap features various Pokémon-themed tokens:

- **Pika USD**: Pikachu-themed stablecoin
- **Bulba Coin**: Grass-type token
- **USD Chard**: Fire-type token
- **squirtleETH**: Water-type token
- **Pidgey Token**: Flying-type token
- **MewtwoETH**: Psychic-type token
- **Gengar INR**: Ghost-type token
- **Eevee Token**: Normal-type token

## Project Tech Stack

- **Frontend**: Next.js, React, TailwindCSS, Framer Motion
- **Smart Contracts**: Solidity, Hardhat
- **Web3 Integration**: ethers.js, wagmi
- **Network**: Holesky Testnet

## Live Demo

Deployed site - TheSwap: [TheSwap](https://theswap-two.vercel.app/)

## Installation

Follow these steps to run the PokéSwap project locally:

### Prerequisites

- Node.js (v18.12.1 or higher)
- npm (8.19.2 or higher)
- MetaMask or any Web3 wallet
- Holesky testnet ETH (for testing transactions)

### Setup Instructions

1. Clone the repository:

```bash
git clone https://github.com/Aaryan-549/TheSwap.git
cd TheSwap
```

2. Install dependencies:

```bash
npm install
```

3. Create a `.env.local` file in the root directory with the following variables:

```
NEXT_PUBLIC_MARKETPLACE_ADDRESS=0xYourDeployedContractAddress
NEXT_PUBLIC_HOLESKY_RPC_URL=https://rpc.ankr.com/eth_holesky
```

4. Start the development server:

```bash
npm run dev
```

5. Open your browser and navigate to http://localhost:3000

## Smart Contracts

The project includes the following main smart contracts:

- **CustomToken.sol**: ERC20 token implementation for Pokémon tokens
- **CustomDex.sol**: DEX contract handling token swaps and liquidity

### Contract Addresses (Holesky Testnet)

- DEX Contract: [`0xYourDexContractAddress`](https://holesky.etherscan.io/address/0xYourDexContractAddress)
- Pika USD: [`0xPikaUSDAddress`](https://holesky.etherscan.io/address/0xPikaUSDAddress)
- Bulba Coin: [`0xBulbaCoinAddress`](https://holesky.etherscan.io/address/0xBulbaCoinAddress)
- And more...

## Getting Testnet Tokens

To test the application, you'll need Holesky testnet ETH:

1. Get testnet ETH from [Holesky Faucet](https://faucet.holesky.ethpandaops.io/)
2. Connect your wallet to PokéSwap
3. Use the swap feature to exchange ETH for Pokémon tokens

## Development

### Deploy Your Own Version

1. Deploy the smart contracts to Holesky testnet:

```bash
npx hardhat run scripts/deploy.js --network holesky
```

2. Update the contract addresses in your `.env.local` file

### Project Structure

```
├── components/          # React components
├── contracts/           # Solidity smart contracts
├── pages/               # Next.js pages
├── public/              # Static assets
├── scripts/             # Deployment scripts
├── styles/              # CSS styles
├── utils/               # Utility functions
└── test/                # Contract tests
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Contact

Aaryan Beniwal - [abeniwal_be23@thapar.edu](mailto:abeniwal_be23@thapar.edu)

Project Link: [https://github.com/Aaryan-549/TheSwap](https://github.com/Aaryan-549/TheSwap)

## Acknowledgments

- Inspired by Pokémon and the world of decentralized finance
- Built for educational purposes to demonstrate Web3 development skills
- Special thanks to the Ethereum and Next.js communities for their excellent documentation