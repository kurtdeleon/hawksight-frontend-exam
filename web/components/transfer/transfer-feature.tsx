'use client';

import { useWallet } from '@solana/wallet-adapter-react';
import { WalletButton } from '../solana/solana-provider';

// TODO you may put the transfer token components here.
// You are free to add any new components and/or folders
export default function TransferTokensFeature() {
  const wallet = useWallet();

  return (
    <div className="hero py-[64px]">
      <div className="max-w-2xl">
        <h1 className="text-5xl font-bold">transfer tokens</h1>
        <p className="py-2">you may add your implementation here!</p>
        <p className="py-2">
          you're also free to add more pages if you want :)
        </p>

        {wallet.publicKey && (
          <div className="py-2">Connected: {wallet.publicKey.toBase58()}</div>
        )}
        <WalletButton />
      </div>
    </div>
  );
}
