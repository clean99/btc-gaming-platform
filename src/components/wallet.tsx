import Image from 'next/image';

const WalletIcon = () => (
  <div>
    <Image
      priority
      src="/wallet.svg"
      height={16}
      width={16}
      alt="wallet icon"
    />
  </div>
);

export default WalletIcon;