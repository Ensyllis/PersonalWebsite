'use client'

import { useState } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';

const About = () => {
  const [flipDirection, setFlipDirection] = useState('');
  const [showText, setShowText] = useState(false); // Control visibility of text

  const handleMouseEnter = () => {
    setFlipDirection('scale-x-[-1]'); // Flip on X-axis when hovering
    setShowText(true); // Show text on hover
  };

  const handleMouseLeave = () => {
    setFlipDirection(''); // Reset flip on mouse leave
    setShowText(false); // Hide text on mouse leave
  };

  return (
    <section className="my-12 px-4 lg:px-0">
      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-8">About</h2>
        <div className="flex flex-col md:flex-row items-center gap-12">
          
          {/* Left Section - Profile Picture */}
          <div className="md:w-1/3 flex justify-center relative">
            {/* Animated Text */}
            {showText && (
              <motion.div
                className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 text-xs text-red-500"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                AHH! Stop it!
              </motion.div>
            )}
            
            <div
              className="relative w-64 h-64 md:w-72 md:h-72"
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <Image
                src="/profile_3.jpg"
                alt="About me"
                fill
                className={`object-cover rounded-full shadow-lg transition-transform duration-500 ${flipDirection}`}
              />

            </div>
          </div>
          
          {/* Right Section - Text */}<div className="md:w-2/3 text-left">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Hi! I&apos;m Joseph, a Junior Quant Researcher at Bayesian Capital Management. My journey into data science and quant research began with a curiosity for solving complex problems and a love for storytelling through data.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              I specialize in natural language processing (NLP) and machine learning, using techniques like semantic embeddings, clustering, and dimensionality reduction to uncover insights. One of my proudest achievements was building an LLM system during my internship that automated data classification, saving researchers hours at a multi-billion dollar hedge fund.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              What drives me is the challenge of turning raw data into actionable insights—whether it&apos;s optimizing trading strategies, streamlining research workflows, or exploring the latest advancements in AI.
            </p>
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Outside of work, I&apos;m a lifelong learner with interests in history, psychology, and philosophy. You&apos;ll often find me sipping tea, reading a book, or experimenting in the kitchen. I believe that curiosity and creativity are the keys to solving the world&apos;s most interesting problems.
            </p>
            <p className="text-lg text-gray-700">
              Let&apos;s connect! Reach me at joseph@bayesian.capital.
            </p>
            <div className="mt-8">
              <h3 className="text-xl font-bold mb-4">My Journey</h3>
              <ul className="space-y-4 text-gray-700">
                <li>
                  <span className="font-bold">2024</span> - Junior Quant Researcher at Bayesian Capital Management. Built an AI pipeline for a multi-billion dollar hedge fund, automating data classification and saved hundreds of hours for analyzing each dataset -- forever.
                </li>
                <li>
                  <span className="font-bold">2023</span> - Founded Anchor AI, developed a Markov chain model for ancient Rome research, and led a data science team for the Arizona Diamondbacks Consultant. Also served as CTO at Cent Startup and Founded Marketing Initiative at Biola QCC.
                </li>
                <li>
                  <span className="font-bold">2022</span> - Conducted research on the stable marriage problem and engineered an XML parsing system for archaeological research data.
                </li>
                <li>
                  <span className="font-bold">2021</span> - Discovered my passion for data, math, and finance during a transformative gap year.
                </li>
              </ul>
            </div>
          </div>
          </div>
        </div>
    </section>
  );
};

export default About;
