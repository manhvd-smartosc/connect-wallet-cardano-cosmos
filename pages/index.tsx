import type { NextPage } from 'next';
import { CardanoWallet } from '@meshsdk/react';
import SendToken from '@/containers/SendToken';
import { Layout } from '@/components/common';
import { WalletSection } from '@/components/wallet';
import { useState } from 'react';
import { ChainName } from 'cosmos-kit';

const Home: NextPage = () => {
  const [chainName, setChainName] = useState<ChainName>();

  return (
    <>
      <h1>Home</h1>
      {/* <CardanoWallet />
      <WalletSection
        providedChainName={chainName}
        setChainName={setChainName}
      /> */}
    </>
  );
};

export default Home;
