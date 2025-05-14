import "../styles/globals.css";

import merge from "lodash/merge";
import "@rainbow-me/rainbowkit/styles.css";

import {
  getDefaultWallets,
  RainbowKitProvider,
  darkTheme,
  midnightTheme,
} from "@rainbow-me/rainbowkit";

import { chain, configureChains, createClient, WagmiConfig } from "wagmi";
import { jsonRpcProvider } from "wagmi/providers/jsonRpc";

//SEPOLIA RPC URL
const SEPOLIA = process.env.NEXT_PUBLIC_SEPOLIA_URL;

//HOLESKY RPC URL
const HOLESKY = process.env.NEXT_PUBLIC_HOLESKY_RPC_URL;

//SEPOLIA
// const { chains, provider } = configureChains(
//   [
//     {
//       id: 11155111,
//       name: "Sepolia",
//       network: "sepolia",
//       nativeCurrency: {
//         name: "Sepolia Ether",
//         symbol: "ETH",
//         decimals: 18,
//       },
//       rpcUrls: {
//         default: {
//           http: [`${SEPOLIA}`],
//         },
//         public: {
//           http: [`${SEPOLIA}`],
//         },
//       },
//       blockExplorers: {
//         default: {
//           name: "Etherscan",
//           url: "https://sepolia.etherscan.io",
//         },
//       },
//       testnet: true,
//     },
//   ],
//   [
//     jsonRpcProvider({
//       rpc: (chain) => {
//         if (chain.id === 11155111) {
//           return { http: `${SEPOLIA}` };
//         }
//         return null;
//       },
//       priority: 1,
//     }),
//   ]
// );

//HOLESKY
const { chains, provider } = configureChains(
  [
    {
      id: 17000,
      name: "Holesky",
      network: "holesky",
      nativeCurrency: {
        name: "Holesky Ether",
        symbol: "ETH",
        decimals: 18,
      },
      rpcUrls: {
        default: {
          http: [`${HOLESKY}`],
        },
        public: {
          http: [`${HOLESKY}`],
        },
      },
      blockExplorers: {
        default: {
          name: "Holescan",
          url: "https://holesky.etherscan.io/",
        },
      },
      testnet: true,
    },
  ],
  [
    jsonRpcProvider({
      rpc: (chain) => {
        if (chain.id === 17000) {
          return { http: `${HOLESKY}` };
        }
        return null;
      },
      priority: 1,
    }),
  ]
);

const { connectors } = getDefaultWallets({
  appName: "Custom Dex",
  chains,
});

const wagmiClient = createClient({
  autoConnect: true,
  connectors,
  provider,
});

const myTheme = merge(midnightTheme(), {
  colors: {
    accentColor: "#18181b",
    accentColorForeground: "#fff",
  },
});

function MyApp({ Component, pageProps }) {
  return (
    <WagmiConfig client={wagmiClient}>
      <RainbowKitProvider chains={chains} theme={myTheme}>
        <Component {...pageProps} />
      </RainbowKitProvider>
    </WagmiConfig>
  );
}

export default MyApp;
