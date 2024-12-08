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
        <h2 className="text-3xl font-bold mb-8">My Story</h2>
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
                src="/profile.jpeg"
                alt="About me"
                fill
                className={`object-cover rounded-full shadow-lg transition-transform duration-500 ${flipDirection}`}
              />

            </div>
          </div>
          
          {/* Right Section - Text */}
          <div className="md:w-2/3 text-left">
            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              I&apos;m Joseph and I love turning the unknown into the known. My curiosity and wonder drives me and lately I&apos;ve developed a passion for building smart, scalable data pipelines. My focus is applying NLP to text data turning it into valuable insights.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              My journey began during a gap year where I discovered my love for finance through MIT&apos;s Opencourseware. This led me to Finance, then Math, then Coding. Soon I was blending my interests in Math, Finance, and Coding into building meaningful products.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Since then, I&apos;ve had the opportunity to work on exciting projects: building data systems for Major League Baseball, developing text classification systems for research grants, and streamlining processes at a $1B hedge fund—saving researchers hours each week through automation.
            </p>

            <p className="mb-6 text-lg leading-relaxed text-gray-700">
              Now, as I complete my mathematics degree with a focus on data science and statistics, I&apos;m driven by the challenge of solving complex problems through data-driven solutions.
            </p>

            <p className="text-lg text-gray-700">
              I&apos;m currently employed a Junior Quantitative Researcher and Data Scientist in a Quant Hedge Fund!
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
