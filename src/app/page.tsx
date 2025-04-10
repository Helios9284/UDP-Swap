'use client';

import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

export default function Home() {
  const roadmapItems = [
    {
      date: '2025 Q4',
      title: 'Token Test',
      description: 'Nec fermentum nisl adipiscing eleifend nisl parturient venenatis convallis vulputate. Odio posuere morbi rhoncus turpis etiam facilisis.'
    },
    {
      date: '2025 Q2',
      title: 'Concept',
      description: 'Morbi scelerisque id risus facilisi nisi diam venenatis massa magnis. Eleifend est auctor a nam euismod nisl parturient venenatis convallis.'
    },
    {
      date: '2024 Q4',
      title: 'Research',
      description: 'Suscipit dui est dui pellentesque. A nam eget turpis ipsum. Tempor arcu eu venenatis id. Id sit amet sit diam venenatis massa.'
    }
  ];

  const partners = [
    { name: 'Binace BUSD', logo: '/partners/binance.svg' },
    { name: 'Amber', logo: '/partners/amber.svg' },
    { name: 'XPA', logo: '/partners/xpa.svg' },
    { name: 'Etherium', logo: '/partners/ethereum.svg' },
    { name: 'TRX', logo: '/partners/trx.svg' }
  ];

  const features = [
    {
      title: 'Immutable',
      icon: '/future/immutable.svg',
      description: 'Arcu pharetra venenatis amet tortor sagittis hendrerit porta. Faucibus nec risus purus ornare sodales ac cursus. Sed est amet suscipit faucibus tortor.'
    },
    {
      title: 'Maximum control',
      icon: '/future/maximum.svg',
      description: 'Odio placerat cursus nulla venenatis semper et. Urna risus quisque feugiat pretium hac malesuada purus ornare sodales turpis nisi est.'
    },
    {
      title: 'Minimal dependencies',
      icon: '/future/minimal.svg',
      description: 'Leo quam feugiat eget tincidunt gravida velit purus ornare sodales quisque risus enim. Sodales mattis at vitae volutpat neque.'
    }
  ];

  const faqs = [
    {
      question: 'How will Universal Liquidity Protocol manage crypto volatility?',
      answer: 'Amet amet dictum praesent mi diam diam. Volutpat facilisis sit sociis sagittis id massa ultricies. Arcu aenean gravida ornare elit nullam cras volutpat in scelerisque.'
    },
    {
      question: 'Where are my deposited funds stored?',
      answer: 'Risus quam facilisis velit pulvinar rhoncus lobortis amet tincidunt. Non porta cursus turpis amet. Massa semper vel natoque pharetra iaculis nullam.'
    },
    {
      question: 'How much can I earn by providing liquidity to Universal Liquidity Protocol?',
      answer: 'Turpis pellentesque vitae blandit purus arcu potenti egestas id. Id mi non dui.'
    },
    {
      question: 'How much do I have to wait to withdraw my money?',
      answer: 'Massa semper vel natoque pharetra iaculis nullam. Turpis pellentesque vitae blandit purus arcu potenti egestas id.'
    }
  ];

  return (
    <div className="flex flex-col gap-12 md:gap-24 bg-gradient-to-br from-[#0a0b1e] to-[#1a2e1a] max-w-screen overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative py-10 md:py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-3xl md:text-5xl font-cleanow mb-6 text-[#6CEA31] leading-tight text-shadow-[-3px_3px_#054642]">
                Universal Liquidity Protocol will accelerate your business
              </h1>
              <p className="text-sm md:text-xl text-gray-300 mb-8">
                Start building your smart contract with Universal liquidity protocol
              </p>
              <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-cleanow text-lg hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736]">
                CREATE A CONTRACT
              </button>
            </div>

          </div>
        </div>
        <Image
          src="/mascot.svg"
          alt="ULP Mascot"
          width={542}
          height={478}
          className='absolute right-0 top-0 hidden md:block'
        />
        <Image
          src="/wave.svg"
          alt="Wave"
          width={2257}
          height={1257}
          className='absolute left-0 top-0 -translate-y-1/2 hidden md:block'
        />
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6 bg-[url('/protocol/bg.svg')]">
        <div className="flex flex-col md:flex-row items-center gap-20">
          <div className="flex flex-col items-center md:min-w-[380px] px-8 md:px-16 pt-8 md:pt-16 pb-16 md:pb-32 rounded-3xl border-[3px] border-[#8FD11A] text-white text-center">
            <p className='font-cleanow text-2xl'>Protocol #1</p>
            <p className='italic'><span className='opacity-40'>from</span> Universal Liquidity Protocol</p>
            <Image
              src="/protocol/protocol.svg"
              alt="Protocol Illustration"
              width={205}
              height={184}
              className='mt-6'
            />
          </div>
          <div className="flex-1">
            <h2 className="text-3xl md:text-4xl font-bold font-cleanow text-[#00D49B] mb-8 text-shadow-[-3px_3px_#054642]">
              INTRODUCING UNIVERSAL LIQUIDITY PROTOCOL
            </h2>
            <div className="space-y-8">
              <div>
                <div className='mb-4 flex items-center gap-4'>
                  <Image
                    src="/protocol/circle.svg"
                    alt="Circle Illustration"
                    width={15}
                    height={15}
                  />
                  <h3 className="text-base md:text-2xl font-semibold text-white">
                    Who We Are
                  </h3>
                </div>
                <p className="text-xs md:text-base text-gray-300">
                  Universal Liquidity Protocol is a 100% pre-scratched cryptome. There are 1 Million Minutes, and 60% of them can be yours (60% - ICO). Utility & security token (applies to all transactions and gives a monthly dividend).
                </p>
              </div>
              <div>
                <div className='mb-4 flex items-center gap-4'>
                  <Image
                    src="/protocol/circle.svg"
                    alt="Circle Illustration"
                    width={15}
                    height={15}
                  />
                  <h3 className="text-base md:text-2xl font-semibold text-white">
                    Our Mission & Vision
                  </h3>
                </div>
                <p className="text-xs md:text-base text-gray-300">
                  Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
                </p>
              </div>
              <p className="text-sm md:text-xl font-semibold text-white">
                <span className="text-[#39FF14]">LIQUIDITY PROTOCOL</span> provides the building blocks that make all this possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-6">
        <div className='flex justify-between mb-[50px] md:mb-[100px]'>
          <h2 className="text-3xl md:text-5xl font-bold font-cleanow text-[#6CEA31] mb-12 text-center text-shadow-[-3px_3px_#054642]">OUR ROADMAP</h2>
          <div className="hidden md:flex gap-12">
            <Image
              src="/roadmap/arrow_left.svg"
              alt="Arrow Left"
              width={48}
              height={48}
              className='cursor-pointer'
            />
            <Image
              src="/roadmap/arrow_right.svg"
              alt="Arrow Right"
              width={48}
              height={48}
              className='cursor-pointer'
            />
          </div>
        </div>
        <div className="relative">
          <div className="flex flex-col md:flex-row justify-between gap-24 md:gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex-1 bg-[#221846] rounded-3xl p-[10px]">
                <div className='border-[3px] border-[#B999FE] rounded-3xl py-[15px] md:py-[30px] pl-[40px] pr-[15px] relative'>
                  <h3 className="text-sm font-semibold text-white absolute top-[-90px] left-5">{item.date}</h3>
                  <div className='flex'>
                    <Image
                      src="/roadmap/roadmap.svg"
                      alt="Roadmap Illustration"
                      width={21}
                      height={111}
                      className='mt-[-110px] mr-[10px]'
                    />
                    <h4 className="text-xl font-semibold font-cleanow mb-2 md:mb-4 text-white">{item.title}</h4>
                  </div>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-3xl md:text-4xl font-bold font-cleanow text-[#03D29E] mb-6 md:mb-12 text-center text-shadow-[-3px_3px_#054642]">OUR TOP PARTNER</h2>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8">
          {partners.map((partner, index) => (
            <div key={index} className='bg-[#00D49480] p-[4px] md:p-[8px] rounded-full'>
              <div
                className="px-3 md:px-6 py-1 md:py-3 bg-[#013A2B] rounded-full border-[2px] md:border-[5px] border-[#00D494] flex items-center gap-2"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={24}
                  height={24}
                />
                <span className="text-base md:text-2xl text-[#3BF474] font-cleanow">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <div className='relative'>
        <section className="container mx-auto px-6">
          <Image
            src='/future/ribbon1.svg'
            alt='Ribbon'
            width={80}
            height={80}
            className='absolute left-0 bottom-0 hidden md:block'
          />
          <Image
            src='/future/ribbon2.svg'
            alt='Ribbon'
            width={80}
            height={80}
            className='absolute top-10 md:top-0 right-0'
          />
          <div className='flex flex-col md:flex-row gap-6 md:gap-12 justify-between items-center mb-6 md:mb-12'>
            <h2 className="text-3xl md:text-5xl font-bold font-cleanow text-[#6CEA31] text-shadow-[-3px_3px_#054642]">FUTURE DEVELOPMENT</h2>
            <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-semibold font-cleanow text-lg hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736]">
              START USING
            </button>
          </div>
          <div className="max-w-5xl mx-auto md:bg-[url('/future/bg1.svg')] bg-no-repeat bg-size-[100%_100%] md:p-6">
            <div className="md:bg-[url('/future/bg2.svg')] bg-no-repeat bg-size-[100%_100%] grid grid-cols-1 md:grid-cols-3 gap-8 py-6 md:py-12">
              {features.map((feature, index) => (
                <div key={index} className={`p-2 flex flex-col items-center gap-4 ${index == 0 ? '' : 'border-t border-t-[#145F80] md:border-t-[0px] md:border-l md:border-l-[#145F80]'}`}>
                  <Image
                    src={feature.icon}
                    alt={feature.title}
                    width={80}
                    height={87}
                  />
                  <h3 className="text-2xl font-semibold font-cleanow text-[#8FD11A]">{feature.title}</h3>
                  <p className="text-gray-300 text-center">{feature.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      </div>

      {/* Community Section */}
      <section className="container mx-auto px-6 text-center relative">
        <Image
          src="/community/ribbon1.svg"
          alt="Ribbon"
          width={119}
          height={140}
          className='absolute left-1/2 -translate-x-1/2 transform transition-transform duration-300'
        />
        <Image
          src="/community/ribbon2.svg"
          alt="Ribbon"
          width={94}
          height={96}
          className='absolute bottom-0 right-0 transform transition-transform duration-300'
        />
        <Image
          src="/community/ribbon3.svg"
          alt="Ribbon"
          width={112}
          height={112}
          className='absolute bottom-0 left-0 transform transition-transform duration-300'
        />
        <Image
          src="/community/ribbon4.svg"
          alt="Ribbon"
          width={116}
          height={114}
          className='absolute top-0 right-0 transform transition-transform duration-300'
        />
        <Image
          src="/community/ribbon5.svg"
          alt="Ribbon"
          width={86}
          height={95}
          className='absolute top-0 left-0 translate-y-[100px] transform transition-transform duration-300'
        />
        <h2 className="text-3xl md:text-5xl font-bold font-cleanow text-[#A689E7] text-shadow-[-3px_3px_#391F72] mt-36 md:mt-60 mb-8 max-w-4xl mx-auto">
          Join our vibrant community of crypto enthusiasts, investors, and innovators.
        </h2>
        <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-semibold font-cleanow text-lg hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736]">
          START USING
        </button>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-4 md:px-6 mb-12 md:mb-24">
        <h2 className="text-3xl md:text-5xl font-bold font-cleanow text-[#47E2D0] mb-8 md:mb-12 text-center text-shadow-[-3px_3px_#054642]">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => {
            const [isOpen, setIsOpen] = useState(false);
            return (
              <div key={index}>
                <div
                  className="bg-[#1a1b2e]/50 rounded-full p-4 md:p-6 border-[6px] border-[#094B30]"
                >
                  <div
                    className="flex items-center justify-between cursor-pointer"
                    onClick={() => setIsOpen(!isOpen)}
                  >
                    <h3 className="text-lg md:text-xl font-semibold text-[#39FF14]">{faq.question}</h3>
                    <Image
                      src="/faq/arrow.svg"
                      alt="Arrow"
                      width={22}
                      height={11}
                      className={`transform transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`}
                    />
                  </div>
                </div>
                <p className={`text-gray-300 mt-4 transition-all px-10 duration-300 ${isOpen ? 'block' : 'hidden'}`}>
                  {faq.answer}
                </p>
              </div>
            );
          })}
        </div>
      </section>
    </div>
  );
}
