'use client';

import Image from 'next/image';
import Link from 'next/link';

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
      icon: '🔒',
      description: 'Arcu pharetra venenatis amet tortor sagittis hendrerit porta. Faucibus nec risus purus ornare sodales ac cursus. Sed est amet suscipit faucibus tortor.'
    },
    {
      title: 'Maximum control',
      icon: '🎮',
      description: 'Odio placerat cursus nulla venenatis semper et. Urna risus quisque feugiat pretium hac malesuada purus ornare sodales turpis nisi est.'
    },
    {
      title: 'Minimal dependencies',
      icon: '🔗',
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
    <div className="flex flex-col gap-24 bg-gradient-to-br from-[#0a0b1e] to-[#1a2e1a]">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#0a0b1e] to-[#1a2e1a] py-20">
        <div className="container mx-auto px-6">
          <div className="flex items-center justify-between">
            <div className="max-w-2xl">
              <h1 className="text-5xl font-cleanow mb-6 text-[#39FF14] leading-tight">
                Universal Liquidity Protocol will accelerate your business
              </h1>
              <p className="text-xl text-gray-300 mb-8">
                Start building your smart contract with Universal liquidity protocol
              </p>
              <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-cleanow text-lg hover:bg-opacity-90 transition-all border-[4px] border-[#B8F736]">
                CREATE A CONTRACT
              </button>
            </div>
            <div className="relative w-[542px] h-[478px]">
              <Image
                src="/mascot.svg"
                alt="ULP Mascot"
                fill
                className="object-contain"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="container mx-auto px-6">
        <div className="flex items-center gap-20">
          <div className="flex-1 rounded-3xl border-[3px] border-[#8FD11A] text-white">
            <p className='font-cleanow text-2xl'>Protocol #1</p>
            <p className='italic'><span className='opacity-40'>from</span> Universal Liquidity Protocol</p>
            <Image
              src="/protocol.svg"
              alt="Protocol Illustration"
              width={400}
              height={400}
            />
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold font-cleanow text-[#39FF14] mb-8">
              INTRODUCING UNIVERSAL LIQUIDITY PROTOCOL
            </h2>
            <div className="space-y-8">
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Who We Are</h3>
                <p className="text-gray-300">
                  Universal Liquidity Protocol is a 100% pre-scratched cryptome. There are 1 Million Minutes, and 60% of them can be yours (60% - ICO). Utility & security token (applies to all transactions and gives a monthly dividend).
                </p>
              </div>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-white">Our Mission & Vision</h3>
                <p className="text-gray-300">
                  Everyday practice shows that the constant information and propaganda support of our activities plays an important role in shaping the personnel training system and meets urgent needs.
                </p>
              </div>
              <p className="text-xl font-semibold text-white">
                <span className="text-[#39FF14]">LIQUIDITY PROTOCOL</span> provides the building blocks that make all this possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Roadmap Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-cleanow text-[#39FF14] mb-12 text-center">OUR ROADMAP</h2>
        <div className="relative">
          <div className="flex justify-between gap-8">
            {roadmapItems.map((item, index) => (
              <div key={index} className="flex-1 bg-[#221846] rounded-3xl p-[10px]">
                <div className='border-[3px] border-[#B999FE] rounded-3xl py-[30px] pl-[40px] pr-[15px]'>
                  <h3 className="text-xl font-semibold text-[#39FF14] mb-4">{item.date}</h3>
                  <h4 className="text-xl font-semibold font-cleanow mb-4 text-white">{item.title}</h4>
                  <p className="text-gray-300">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="absolute top-1/2 right-4 transform -translate-y-1/2 flex gap-4">
            <button className="w-10 h-10 rounded-full border-2 border-[#39FF14] flex items-center justify-center text-[#39FF14]">
              ←
            </button>
            <button className="w-10 h-10 rounded-full border-2 border-[#39FF14] flex items-center justify-center text-[#39FF14]">
              →
            </button>
          </div>
        </div>
      </section>

      {/* Partners Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-cleanow text-[#39FF14] mb-12 text-center">OUR TOP PARTNER</h2>
        <div className="flex justify-center items-center gap-8">
          {partners.map((partner, index) => (
            <div key={index} className='bg-[#00D49480] p-[8px] rounded-full'>
              <div
                className="px-6 py-3 bg-[#013A2B] rounded-full border-[5px] border-[#00D494] flex items-center gap-2"
              >
                <Image
                  src={partner.logo}
                  alt={partner.name}
                  width={24}
                  height={24}
                />
                <span className="text-[#3BF474] font-cleanow">{partner.name}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-6">
        <h2 className="text-4xl font-bold font-cleanow text-[#39FF14] mb-12">FUTURE DEVELOPMENT</h2>
        <div className="grid grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <div key={index} className="bg-[#1a1b2e]/50 rounded-xl p-6 border border-purple-500/20">
              <div className="text-4xl mb-4">{feature.icon}</div>
              <h3 className="text-xl font-semibold font-cleanow text-[#39FF14] mb-4">{feature.title}</h3>
              <p className="text-gray-300">{feature.description}</p>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-semibold font-cleanow text-lg hover:bg-opacity-90 transition-all">
            START USING
          </button>
        </div>
      </section>

      {/* Community Section */}
      <section className="container mx-auto px-6 text-center">
        <h2 className="text-4xl font-bold font-cleanow text-purple-400 mb-8">
          Join our vibrant community of crypto enthusiasts, investors, and innovators.
        </h2>
        <button className="bg-[#39FF14] text-black px-8 py-3 rounded-full font-semibold font-cleanow text-lg hover:bg-opacity-90 transition-all">
          START USING
        </button>
      </section>

      {/* FAQ Section */}
      <section className="container mx-auto px-6 mb-24">
        <h2 className="text-4xl font-bold font-cleanow text-[#39FF14] mb-12 text-center">
          FREQUENTLY ASKED QUESTIONS
        </h2>
        <div className="space-y-4 max-w-4xl mx-auto">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-[#1a1b2e]/50 rounded-xl p-6 border border-[#39FF14]/20"
            >
              <div className="flex items-center justify-between">
                <h3 className="text-xl font-semibold text-[#39FF14]">{faq.question}</h3>
                <span className="text-[#39FF14] text-2xl">→</span>
              </div>
              <p className="text-gray-300 mt-4 hidden">{faq.answer}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
