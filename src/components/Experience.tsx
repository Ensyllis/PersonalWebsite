'use client'

import React from 'react';
import { motion } from 'framer-motion';

const timelineData = [
  {
    date: 'June 2024 - August 2024',
    title: 'AI-Powered Topic Modeling Pipeline | Schonfeld Pod',
    description: 'Built an AI-powered topic modeling pipeline, automating financial text classification and saving researchers 20 hours per week. Applied NLP, clustering models, and semantic embeddings.',
    link: '/projects/schonfeld-pipeline',
    imageUrl: '/path/to/image1.jpg',
  },
  {
    date: 'October 2023 - June 2024',
    title: 'Markov Chain Model for Ancient Rome | Biola University',
    description: 'Developed a Markov chain model to analyze ancient Roman road systems. Used Python and scikit-learn to reveal distribution patterns and predict epitaph locations.',
    link: '/projects/markov-chain-rome',
    imageUrl: '/path/to/image2.jpg',
  },
  {
    date: 'March 2024 - May 2024',
    title: 'OpenAI-powered Healthcare Survey Analysis | Freelance',
    description: 'Automated classification of open-ended survey responses using OpenAI’s API, reducing manual analysis time from 125 hours to 7 minutes.',
    link: '/projects/healthcare-survey',
    imageUrl: '/path/to/image3.jpg',
  },
  {
    date: 'July 2023 - June 2024',
    title: 'Founder | Anchor AI',
    description: 'Developed an AI-driven platform to answer theological questions using a semantic embedding pipeline and a MongoDB database.',
    link: 'https://theologyai.net',
    imageUrl: '/path/to/image4.jpg',
  },
  {
    date: 'August 2023 - May 2024',
    title: 'CTO | Cent Startup',
    description: 'Led a team developing a mobile app for student discounts using Flutter and Google Cloud Platform. Improved real-time discount discovery for users.',
    link: '/projects/cent-startup',
    imageUrl: '/path/to/image5.jpg',
  },
  {
    date: 'August 2023 - November 2023',
    title: 'Data Engineer | XML Data Specialist',
    description: 'Engineered an XML parsing system to process 14,000 data points for archaeological research, reducing manual workload and accelerating project timelines.',
    link: '/projects/xml-data',
    imageUrl: '/path/to/image6.jpg',
  },
  {
    date: 'August 2023 - March 2024',
    title: 'Marketing Director | Biola QCC',
    description: 'Led digital marketing strategies for Biola QCC, using data analysis to identify key demographics and increase engagement.',
    link: '/projects/biola-marketing',
    imageUrl: '/path/to/image7.jpg',
  },
  {
    date: '2023',
    title: 'CME Trading Challenge 2023',
    description: 'Participated in a trading challenge and achieved a 200% return by trading metals futures during international geopolitical events.',
    link: '/projects/cme-trading-challenge',
    imageUrl: '/path/to/image8.jpg',
  },
];


const Timeline: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Experience Timeline</h2>
      <div className="relative">
        {/* Timeline line */}
        <div className="hidden md:block absolute left-1/2 transform -translate-x-1/2 w-0.5 h-full bg-gray-200"></div>

        {timelineData.map((item, index) => (
          <motion.div
            key={index}
            className={`mb-12 md:mb-24 flex flex-col md:flex-row items-center ${
              index % 2 === 0 ? 'md:flex-row-reverse' : ''
            }`}
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            {/* Timeline dot */}
            <div className="absolute left-1/2 transform -translate-x-1/2 -translate-y-4 md:translate-y-0 flex items-center justify-center">
              <div className="w-4 h-4 rounded-full bg-blue-500 border-4 border-white shadow-md"></div>
            </div>

            {/* Content card */}
            <div className="w-full md:w-5/12 mb-8 md:mb-0">
              <div className="bg-white rounded-lg shadow-lg overflow-hidden transform transition duration-300 hover:scale-105">
                <img
                  src={item.imageUrl}
                  alt={item.title}
                  className="w-full h-48 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{item.title}</h3>
                  <p className="text-sm text-gray-500 mb-4">{item.date}</p>
                  <p className="text-gray-600 mb-4">{item.description}</p>
                  <a
                    href={item.link}
                    className="inline-block bg-blue-500 text-white py-2 px-4 rounded-md hover:bg-blue-600 transition duration-300"
                  >
                    Learn More
                  </a>
                </div>
              </div>
            </div>

            {/* Spacer for alignment */}
            <div className="hidden md:block w-2/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Timeline;
