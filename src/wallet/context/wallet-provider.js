'use client';

import React, { useState, useEffect } from 'react';

import { createWeb3Modal, defaultWagmiConfig } from '@web3modal/wagmi/react';
import { WagmiConfig } from 'wagmi';
// import { arbitrum, mainnet } from 'wagmi/chains';

import { defaultChains } from 'src/wallet/chains';

// 1. Get projectID at https://cloud.walletconnect.com
if (!process.env.NEXT_PUBLIC_PROJECT_ID) {
  throw new Error('You need to provide NEXT_PUBLIC_PROJECT_ID env variable');
}
const projectId = process.env.NEXT_PUBLIC_PROJECT_ID;

// 2. Configure wagmi client
const chains = defaultChains;

const wagmiConfig = defaultWagmiConfig({ chains, projectId, appName: 'Web3Modal' });

// 3. Create modal
createWeb3Modal({ wagmiConfig, projectId, chains });

// 4. Wrap your app with WagmiProvider and add <Web3Modal /> compoennt
export default function WalletProvider({ children }) {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    setReady(true);
  }, []);

  return <>{ready ? <WagmiConfig config={wagmiConfig}>{children}</WagmiConfig> : null}</>;
}
