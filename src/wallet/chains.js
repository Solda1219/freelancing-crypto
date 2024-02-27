// import { mainnet, polygon, arbitrum, bsc, bscTestnet, dogechain, telos } from 'wagmi/chains';
import { bsc, bscTestnet } from 'wagmi/chains';

export const defaultChains = [
  {
    ...bscTestnet,
    name: 'BSC Testnet',
    network: 'BSC Testnet',
    iconUrl: '/chains/tbsc.png',
    iconBackground: 'transparent',
    rpcUrls: {
      default: {
        http: [
          // 'https://data-seed-prebsc-1-s3.binance.org:8545',
          'https://data-seed-prebsc-2-s1.binance.org:8545',
          'https://bsc-testnet.public.blastapi.io',
        ],
      },
      public: {
        http: [
          // 'https://data-seed-prebsc-1-s3.binance.org:8545',
          'https://data-seed-prebsc-2-s1.binance.org:8545',
          'https://bsc-testnet.public.blastapi.io',
        ],
      },
    },
  },
  {
    ...bsc,
    iconUrl: '/chains/bsc.png',
    iconBackground: 'transparent',
    rpcUrls: {
      default: {
        http: [
          'https://bsc-dataseed.binance.org',
          'https://bsc-dataseed2.defibit.io',
          'https://bsc-dataseed3.defibit.io',
          'https://bsc-dataseed2.ninicoin.io',
          'https://bsc-dataseed4.binance.org',
          'https://bsc-dataseed3.ninicoin.io',
          'https://bsc-dataseed1.binance.org',
          'https://bsc-dataseed3.binance.org',
        ],
      },
      public: {
        http: [
          'https://bsc-dataseed.binance.org',
          'https://bsc-dataseed2.defibit.io',
          'https://bsc-dataseed3.defibit.io',
          'https://bsc-dataseed2.ninicoin.io',
          'https://bsc-dataseed4.binance.org',
          'https://bsc-dataseed3.ninicoin.io',
          'https://bsc-dataseed1.binance.org',
          'https://bsc-dataseed3.binance.org',
        ],
      },
    },
  },
];
// : [
//     {
//       ...bsc,
//       iconUrl: '/chains/bsc.png',
//       iconBackground: 'transparent',
//       rpcUrls: {
//         default: {
//           http: [
//             'https://bsc-dataseed.binance.org',
//             'https://bsc-dataseed2.defibit.io',
//             'https://bsc-dataseed3.defibit.io',
//             'https://bsc-dataseed2.ninicoin.io',
//             'https://bsc-dataseed4.binance.org',
//             'https://bsc-dataseed3.ninicoin.io',
//             'https://bsc-dataseed1.binance.org',
//             'https://bsc-dataseed3.binance.org',
//           ],
//         },
//         public: {
//           http: [
//             'https://bsc-dataseed.binance.org',
//             'https://bsc-dataseed2.defibit.io',
//             'https://bsc-dataseed3.defibit.io',
//             'https://bsc-dataseed2.ninicoin.io',
//             'https://bsc-dataseed4.binance.org',
//             'https://bsc-dataseed3.ninicoin.io',
//             'https://bsc-dataseed1.binance.org',
//             'https://bsc-dataseed3.binance.org',
//           ],
//         },
//       },
//     },
//     {
//       ...mainnet,
//       iconUrl: '/chains/eth.png',
//       iconBackground: 'transparent',
//     },
//     {
//       ...arbitrum,
//       iconUrl: '/chains/arbi.png',
//       iconBackground: 'transparent',
//     },
//     {
//       ...polygon,
//       iconUrl: '/chains/polygon.png',
//       iconBackground: 'transparent',
//     },
//     {
//       id: 1116,
//       name: 'CoreDAO',
//       network: 'Core Blockchain Mainnet',
//       iconUrl: '/chains/core.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'CORE',
//         symbol: 'CORE',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc.coredao.org'],
//         },
//         public: {
//           http: ['https://rpc.coredao.org'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'CoreDAOScan', url: 'https://scan.coredao.org' },
//         etherscan: { name: 'CoreDAOScan', url: 'https://scan.coredao.org' },
//       },
//       testnet: false,
//     },
//     {
//       id: 88,
//       name: 'TomoChain',
//       network: 'TomoChain',
//       iconUrl: '/chains/tomo.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'TOMO',
//         symbol: 'TOMO',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc.tomochain.com'],
//         },
//         public: {
//           http: ['https://rpc.tomochain.com'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'TomoScan', url: 'https://tomoscan.io' },
//         etherscan: { name: 'TomoScan', url: 'https://tomoscan.io' },
//       },
//       testnet: false,
//     },
//     {
//       id: 369,
//       name: 'PulseChain',
//       network: 'PulseChain',
//       iconUrl: '/chains/pls.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'PLS',
//         symbol: 'PLS',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc.pulsechain.com'],
//         },
//         public: {
//           http: ['https://rpc.pulsechain.com'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'PulseScan', url: 'https://scan.pulsechain.com' },
//         etherscan: { name: 'PulseScan', url: 'https://scan.pulsechain.com' },
//       },
//       testnet: false,
//     },
//     {
//       ...dogechain,
//       iconUrl: '/chains/dogechain.png',
//     },
//     {
//       id: 25,
//       name: 'Cronos',
//       network: 'cronos',
//       iconUrl: '/chains/cro.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'Cronos',
//         symbol: 'CRO',
//       },
//       rpcUrls: {
//         default: {
//           http: [
//             'https://evm.cronos.org',
//             'https://cronosrpc-1.xstaking.sg/',
//             'https://mmf-rpc.xstaking.sg',
//             'https://evm-cronos.crypto.org',
//           ],
//         },
//         public: {
//           http: [
//             'https://evm.cronos.org',
//             'https://cronosrpc-1.xstaking.sg/',
//             'https://mmf-rpc.xstaking.sg',
//             'https://evm-cronos.crypto.org',
//           ],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'CronoScan', url: 'https://cronoscan.com' },
//         etherscan: { name: 'CronoScan', url: 'https://cronoscan.com' },
//       },
//       testnet: false,
//     },
//     {
//       id: 3797,
//       name: 'Alvey',
//       network: 'alvey',
//       iconUrl: '/chains/alv.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'Alvey',
//         symbol: 'ALV',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc.alvey.io/rpc'],
//         },
//         public: {
//           http: ['https://rpc.alvey.io/rpc'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'AlveyScan', url: 'https://alveyscan.com' },
//         etherscan: { name: 'AlveyScan', url: 'https://alveyscan.com' },
//       },
//       testnet: false,
//     },
//     {
//       ...telos,
//       iconUrl: '/chains/tlos.png',
//     },
//     {
//       id: 4099,
//       name: 'Bitindi',
//       network: 'bitindi',
//       iconUrl: '/chains/bni.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'Bitindi',
//         symbol: 'BNI',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc-mainnet.bitindi.org'],
//         },
//         public: {
//           http: ['https://rpc-mainnet.bitindi.org'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'BitindiScan', url: 'https://bitindiscan.com' },
//         etherscan: { name: 'BitindiScan', url: 'https://bitindiscan.com' },
//       },
//       testnet: false,
//     },
//     {
//       id: 82,
//       name: 'Meter',
//       network: 'meter',
//       iconUrl: '/chains/mtr.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'Meter',
//         symbol: 'MTR',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://rpc.meter.io'],
//         },
//         public: {
//           http: ['https://rpc.meter.io'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'MeterExplorer', url: 'https://explorer.meter.io' },
//         etherscan: { name: 'MeterExplorer', url: 'https://explorer.meter.io' },
//       },
//       testnet: false,
//     },
//     {
//       id: 52,
//       name: 'CoinEX',
//       network: 'coinEX',
//       iconUrl: '/chains/cet.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'CoinEX',
//         symbol: 'CET',
//       },
//       rpcUrls: {
//         default: {
//           http: [
//             'https://rpc.coinex.net/',
//             'https://rpc1.coinex.net/',
//             'https://rpc2.coinex.net/',
//             'https://rpc3.coinex.net/',
//             'https://rpc4.coinex.net/',
//           ],
//         },
//         public: {
//           http: [
//             'https://rpc.coinex.net/',
//             'https://rpc1.coinex.net/',
//             'https://rpc2.coinex.net/',
//             'https://rpc3.coinex.net/',
//             'https://rpc4.coinex.net/',
//           ],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'CoinexNet', url: 'https://www.coinex.net' },
//         etherscan: { name: 'CoinexNet', url: 'https://www.coinex.net' },
//       },
//       testnet: false,
//     },
//     {
//       id: 180,
//       name: 'AME',
//       network: 'ame',
//       iconUrl: '/chains/ame.png',
//       iconBackground: 'transparent',
//       nativeCurrency: {
//         decimals: 18,
//         name: 'AME',
//         symbol: 'AME',
//       },
//       rpcUrls: {
//         default: {
//           http: ['https://node1.amechain.io'],
//         },
//         public: {
//           http: ['https://node1.amechain.io'],
//         },
//       },
//       blockExplorers: {
//         default: { name: 'AMEScan', url: 'https://amescan.io' },
//         etherscan: { name: 'AMEScan', url: 'https://amescan.io' },
//       },
//       testnet: false,
//     },
//     // {
//     //   id: 324,
//     //   name: 'zkSync',
//     //   network: 'zkSync Era Mainnet',
//     //   iconUrl: '/chains/zkSync.png',
//     //   iconBackground: 'transparent',
//     //   nativeCurrency: {
//     //     decimals: 18,
//     //     name: 'zkEther',
//     //     symbol: 'zkETH',
//     //   },
//     //   rpcUrls: {
//     //     default: {
//     //       http: ['https://mainnet.era.zksync.io'],
//     //     },
//     //     public: {
//     //       http: ['https://mainnet.era.zksync.io'],
//     //     },
//     //   },
//     //   blockExplorers: {
//     //     default: { name: 'zkSyncExplorer', url: 'https://explorer.zksync.io' },
//     //     etherscan: { name: 'zkSyncExplorer', url: 'https://explorer.zksync.io/' },
//     //   },
//     //   testnet: false,
//     // },
//   ];
