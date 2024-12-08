'use client'

import { useState } from 'react'
import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'
import { motion } from 'framer-motion'

const Introduction = () => {
  const [flipDirection, setFlipDirection] = useState('');
  const [text, setText] = useState('Give me headpats!'); // Default text
  const [textColor, setTextColor] = useState('#3b82f6'); // Default text color (Blue)

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = e.clientX - left;
    const y = e.clientY - top;

    const isRightSide = x > width / 2;
    const isBottomSide = y > height / 2;

    setText('Yipee!');
    setTextColor('#22c55e'); // Green color on hover

    // Determine flip direction based on mouse position
    if (isRightSide && isBottomSide) {
      setFlipDirection('scale-x-[-1] scale-y-[-1]'); // Flip both x and y axis (bottom-right)
    } else if (isRightSide) {
      setFlipDirection('scale-y-[-1]'); // Flip on y axis (top-right)
    } else if (isBottomSide) {
      setFlipDirection('scale-x-[-1]'); // Flip on x axis (bottom-left)
    } else {
      setFlipDirection(''); // No flip (top-left)
    }
  };

  const handleMouseLeave = () => {
    setFlipDirection(''); // Reset the flip effect
    setText('Give me headpats!'); // Reset text
    setTextColor('#3b82f6'); // Reset text color (Blue)
  };

  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-8">
      {/* Flex container to align text on the left and image on the right */}
      <div className="flex flex-col lg:flex-row items-center lg:items-start lg:space-x-12 max-w-7xl">
        
        {/* Left side - Text/Description */}
        <div className="text-center lg:text-left mb-8 lg:mb-0">
          <h1 className="text-5xl font-bold mb-4">Hi, I&apos;m Joseph 👋</h1>
          <p className="text-lg mb-4 text-gray-700">
            Curiosity-Driven individual who has a love for interesting things. Interested in Building Data Pipelines, Natural Language Processing, Start-Ups and Generating Alpha.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            I&apos;m currently a Junior Quant Researcher and Data Scientist with a focus in NLP for a Quant Hedge Fund!
          </p>
          <div className="flex justify-center lg:justify-start items-center space-x-4 mb-8">
            <div className="flex items-center">
              <MapPinIcon className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-600">Los Angeles, California (Maybe moving to New York)</span>
            </div>
            <span className="text-green-500 font-medium">Available for new projects</span>
          </div>
          <button className="bg-black text-white px-6 py-2 rounded-lg font-bold hover:bg-gray-800">
            See my work
          </button>
        </div>

        {/* Speech Bubble */}
        <motion.div
          className="text-center text-lg font-sans opacity-50" // Switched to minimalist sans-serif font
          animate={{ color: textColor }} // Animates text color smoothly
          transition={{ duration: 0.3 }} // Smooth color transition
        >
          {text}
        </motion.div>

        {/* Right side - Image */}
        <div
          className="relative w-64 h-64 lg:w-96 lg:h-96"
          onMouseMove={handleMouseMove}
          onMouseLeave={handleMouseLeave}
        >
          <Image
            src="/separator_whale_2.png"
            alt="Cute Whale"
            fill
            className={`object-cover rounded-full transition-transform duration-300 ${flipDirection}`}
          />
        </div>


      </div>
    </section>
  )
}

export default Introduction
