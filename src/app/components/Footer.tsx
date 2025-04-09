'use client';

import Image from 'next/image';
import Link from 'next/link';
import { ConnectionButton } from './ConnectionButton';

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
        <footer className="w-full bg-[#0a0b1e] py-6 md:py-8 px-4 md:px-6 rounded-t-[100px]">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-col md:flex-row items-center justify-between mb-6 md:mb-8 gap-6 md:gap-0">
              <div className="flex items-center gap-2">
                <Image
                  src="/logo.svg"
                  alt="Universal Liquidity Protocol"
                  width={40}
                  height={40}
                  className="w-8 h-8 md:w-10 md:h-10"
                />
                <span className="text-[#B999FE] font-semibold font-cleanow text-sm md:text-xl text-shadow-[-3px_3px_#054642]">
                  Universal Liquidity<br /> Protocol
                </span>
              </div>

              <nav className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    href={item.path}
                    className="text-xs md:text-base text-gray-300 hover:text-white transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </nav>

              <ConnectionButton />
            </div>

            <div className="flex flex-col md:flex-row items-center justify-center gap-4 md:gap-6 pt-4 border-t border-gray-800">
              <span className="text-gray-400">Follow us</span>
              <div className="flex items-center gap-4">
                <a
                  href="#"
                  className="text-[#39FF14] hover:text-white transition-colors"
                  aria-label="Facebook"
                >
                  <Image
                    src="/footer/facebook.svg"
                    alt="Facebook"
                    width={80}
                    height={80}
                    className="w-[56px] h-[56px] md:w-[80px] md:h-[80px] mt-[20px] md:mt-[30px]"
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
                    className="w-8 h-8 md:w-12 md:h-12"
                  />
                </a>
                <a
                  href="#"
                  className="text-[#39FF14] hover:text-white transition-colors"
                  aria-label="Telegram"
                >
                  <Image
                    src="/footer/telegram.svg"
                    alt="Facebook"
                    width={48}
                    height={48}
                    className="w-8 h-8 md:w-12 md:h-12 ml-2 md:ml-4"
                  />
                </a>
              </div>
            </div>


          </div>
        </footer>
      </div>
      <p className="text-white text-center bg-gradient-to-r from-[#000618] via-[#7D69B3] to-[#000618] py-2 text-sm md:text-base">
        Copyright © Universal Liquidity Protocol
      </p>
    </>
  );
};

export default Footer; 