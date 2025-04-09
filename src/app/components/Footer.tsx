'use client';

import Image from 'next/image';
import Link from 'next/link';

const Footer = () => {
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'Swap', path: '/swap' },
    { name: 'Future development', path: '/future' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <>
      <div className='px-[2px] pt-[4px] bg-gradient-to-r from-[#5BB31C] via-[#B999FE] to-[#B999FE0A] rounded-t-[100px]'>
        <footer className="w-full bg-[#0a0b1e] py-8 px-6 rounded-t-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Universal Liquidity Protocol"
                  width={40}
                  height={40}
                />
                <span className="text-[#B999FE] font-semibold font-cleanow text-xl text-shadow-[-3px_3px_#054642]">
                  Universal Liquidity<br /> Protocol
                </span>
              </div>

              <nav className="flex items-center space-x-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <button className="bg-[#39FF14] text-black text-xl px-4 py-3 rounded-full font-cleanow hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736] cursor-pointer">
                CONNECT WALLET
              </button>
            </div>

            <div className="flex items-center justify-center gap-6 pt-4 border-t border-gray-800">
              <span className="text-gray-400">Follow us</span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-[#39FF14] hover:text-white transition-colors mt-7"
                  aria-label="Facebook"
                >
                  <Image
                    src="/footer/facebook.svg"
                    alt="Facebook"
                    width={70}
                    height={70}
                  />
                </a>
                <a
                  href="#"
                  className="text-[#39FF14] hover:text-white transition-colors"
                  aria-label="Twitter"
                >
                  <Image
                    src="/footer/x.svg"
                    alt="Facebook"
                    width={48}
                    height={48}
                  />
                </a>
                <a
                  href="#"
                  className="text-[#39FF14] hover:text-white transition-colors ml-3"
                  aria-label="Telegram"
                >
                  <Image
                    src="/footer/telegram.svg"
                    alt="Facebook"
                    width={48}
                    height={48}
                  />
                </a>
              </div>
            </div>


          </div>
        </footer>
      </div>
      <p className="text-white text-center bg-gradient-to-r from-[#000618] via-[#7D69B3] to-[#000618]">
        Copyright © Universal Liquidity Protocol
      </p>
    </>
  );
};

export default Footer; 