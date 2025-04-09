'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const Header = () => {
  const pathname = usePathname();

  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Swap', path: '/swap' },
    { name: 'Future development', path: '/future' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <header className="w-full bg-[#0a0b1e] py-4 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Image
            src="/logo.svg"
            alt="Universal Liquidity Protocol"
            width={58}
            height={43}
          />
          <span className="text-purple-400 font-semibold font-cleanow text-xl">
            Universal Liquidity<br />Protocol
          </span>
        </div>

        <nav className="flex items-center space-x-8">
          {navItems.map((item) => (
            <Link
              key={item.path}
              href={item.path}
              className={`text-gray-300 hover:text-white transition-colors ${pathname === item.path ? 'text-white border-b-2 border-white' : ''
                }`}
            >
              {item.name}
            </Link>
          ))}
        </nav>

        <button className="bg-[#39FF14] text-black px-6 py-2 rounded-full font-cleanow hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736] cursor-pointer">
          CONNECT WALLET
        </button>
      </div>
    </header>
  );
};

export default Header; 