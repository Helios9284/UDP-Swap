'use client';

import { useState, useEffect} from 'react';
import {Star} from "@/app/types/types";

export default function Contact() {
  const [stars, setStars] = useState<Star[]>([]);

  useEffect(() => {
    const generatedStars: Star[] = Array.from({ length: 50 }).map(() => ({
      size: Math.random() * 3 + 2,
      top: Math.random() * 100,
      left: Math.random() * 100,
      delay: Math.random() * 3,
    }));

    setStars(generatedStars);
  }, []);

  return (
    <div className="container mx-auto px-6 py-12 text-white">
      <div className='w-[360px] h-[360px] scale-200 rounded-full blur-[100px] md:blur-[180px] bg-[#BC01FE] opacity-40 absolute -top-20 left-0 -z-1'></div>
      <div className="max-w-2xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">Contact Us</h1>
        <p className="text-center text-gray-400 mb-12">
          Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.
        </p>
        {stars.map((star, i) => (
          <div
            key={i}
            className="absolute rounded-full bg-white animate-twinkle shadow-[0_0_10px_#ffffff]"
            style={{
              width: `${star.size}px`,
              height: `${star.size}px`,
              top: `${star.top}%`,
              left: `${star.left}%`,
              animationDelay: `${star.delay}s`,
            }}
          />
        ))}

        <form className="space-y-6">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              Name
            </label>
            <input
              type="text"
              id="name"
              className="w-full px-4 py-3 bg-[#1a1b2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              placeholder="Your name"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              Email
            </label>
            <input
              type="email"
              id="email"
              className="w-full px-4 py-3 bg-[#1a1b2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              placeholder="you@example.com"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              Message
            </label>
            <textarea
              id="message"
              rows={6}
              className="w-full px-4 py-3 bg-[#1a1b2e] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#39FF14]"
              placeholder="Your message"
            ></textarea>
          </div>

          <button
            type="submit"
            className="w-full bg-[#39FF14]  cursor-pointer text-black py-4 rounded-xl font-semibold hover:bg-opacity-90 transition-all"
          >
            Send Message
          </button>
        </form>

        <div className="mt-12 text-center">
          <h2 className="text-xl font-semibold mb-4">Other Ways to Connect</h2>
          <div className="flex justify-center space-x-6">
            <a href="#" className="text-[#39FF14] hover:text-white transition-colors">
              Twitter
            </a>
            <a href="#" className="text-[#39FF14] hover:text-white transition-colors">
              Telegram
            </a>
            <a href="#" className="text-[#39FF14] hover:text-white transition-colors">
              Discord
            </a>
          </div>
        </div>
      </div>
    </div>
  );
} 