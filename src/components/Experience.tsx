'use client'

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const timelineData = [
  {
    date: 'January 2024 - Present',
    title: 'Junior Quantitative Researcher & Data Scientist | Bayesian Capital Management',
    description: "This is where I work now :D. It's a little secretive right now >:3",
    link: '/projects/quant_researcher',
    imageUrl: '/Experience/Thonk.png'
  },
  {
    date: 'June 2024 - August 2024',
    title: 'Quantitative Researcher & Data Scientists Intern | Bayesian Capital Management',
    description: 'Developed an AI-powered pipeline for a +$1B AUM Quant Hedge Fund to extract insightful topic from noisy data. The pipeline automates the processing and classification of large financial text datasets, reducing manual workload by 90% and cutting costs by 70% per dataset. Used semantic embeddings, clustering models (HDBSCAN, K-Means), and multi-AI consensus scoring to extract key insights for trading strategies. Built an interactive web platform for exploring data, enhancing research speed and accuracy.',
    link: '/projects/schonfeld-pipeline',
    imageUrl: '/Experience/Bayesian.jpeg',
  },
  {
    date: 'October 2023 - June 2024',
    title: 'Markov Chain Model for Ancient Rome | Biola University',
    description: 'Conducted research on predicting the movement of epitaphs in 1-4 AD Rome to help archaeologists identify potential epitaph locations. Developed a Markov chain model with network analysis of ancient Roman road and waterway systems using Python, NumPy, and scikit-learn. Collaborated with an Professor Zehavi Husser , creating heatmaps and interactive visualizations to reveal distribution patterns. Proposed backpropagation to refine the model, although time constraints limited full implementation. Key takeaway: A stationary markov matrix for network analysis',
    link: '/projects/markov-chain-rome',
    imageUrl: '/Experience/Husser.png',
  },  
  {
    date: 'July 2023 - June 2024',
    title: 'Founder | Anchor AI',
    description: 'theologyai.net(Depreciated, Service Suspended) Founded and developed an AI-driven platform to facilitate the understanding of theological concepts through a sophisticated question-and-answer system. Spearheaded the creation of a robust data pipeline involving curated theological texts, semantic text embedding, and a MongoDB database for efficient data retrieval. Designed and implemented a user-friendly front-end that accurately processes inquiries and delivers context-rich answers alongside citations, enhancing credibility and user engagement.',
    link: 'https://theologyai.net',
    imageUrl: '/Experience/Anchor.jpeg',
  },  
  {
    date: 'December 2023 - May 2024',
    title: 'Team Lead, Data Science Project | Collaboration with Arizona Diamondbacks Consultant',
    description: "In 2023, led a data science team in a pivotal project consulting for the Arizona Diamondbacks, focusing on validating advanced pitching techniques. Utilized R to analyze and interpret statistical data, demonstrating the effectiveness of the consultant's methods. Directed the team's efforts to deliver actionable insights that enhanced strategic decisions in pitching practices.",
    link: '/projects/healthcare-survey',
    imageUrl: '/Experience/Baseball.png',
  },
  {
    date: 'March 2024 - May 2024',
    title: 'OpenAI-powered Healthcare Survey Analysis | Biola University',
    description: "Developed an AI-driven tool using OpenAI's API to automatically categorize open-ended survey responses for a healthcare-focused survey that received a +$400K grant. Each of the 200+ entries contained approximately 15 individual items, requiring classification. A task that would have taken an estimated 125 hours (nearly 16 full workdays) to complete manually was reduced to just 7 minute with automation. This significantly reduced analysis time and cost, allowing the research team to quickly derive actionable insights and focus on higher-level analysis.",
    link: '/projects/healthcare-survey',
    imageUrl: '/Experience/NoData.jpg',
  },
  {
    date: 'August 2023 - May 2024',
    title: 'CTO | Cent Startup',
    description: 'Served as the CTO for a startup focused on providing students with easily accessible discounts. Led a dynamic development team and collaborated closely with the CEO on strategic initiatives and company direction. Spearheaded code reviews and mentored two junior front-end developers in modern web technologies. Engineered and launched a mobile application using Flutter and Dart, enhancing user engagement through an intuitive interface. Integrated Google Cloud Platform for robust mapping functionalities, enabling the app to alert users about real-time discounts and deals available nearby, particularly in dining establishments. This solution significantly improved the student experience by making discount discovery seamless and immediate.',
    link: '/projects/cent-startup',
    imageUrl: '/Experience/Cent.JPEG',
  },  
  {
    date: 'August 2023 - March 2024',
    title: 'Marketing Director | Biola QCC',
    description: 'Led digital marketing strategies for Biola QCC, using data analysis to identify key demographics and increase engagement.',
    link: '/projects/biola-marketing',
    imageUrl: '/Experience/Facebook.png',
  },
  {
    date: 'August 2023 - December 2023',
    title: "Research Analyst | Computational Mathematics",
    description: "Developed and implemented an advanced algorithm in R to solve the stable marriage problem, aiming to determine the total number of stable matchings. Utilized cloud computing resources to efficiently run simulations and employed Monte Carlo methods to explore potential solutions, optimizing for the maximum number of stable marriages. Contributed findings to a significant study, cited in [OEIS A368419](https://oeis.org/A368419), enhancing the understanding of algorithmic complexity in combinatorial structures.",
    link: 'https://oeis.org/A368419',
    imageUrl: '/Experience/StableMarriage.png'
  },
  {
    date: 'August 2023 - November 2023',
    title: 'Data Engineer | XML Data Specialist',
    description: 'Engineered and implemented a sophisticated XML parsing system using Python and xmltree to efficiently process a large dataset of 14,000 data points for archaeological research. Developed a robust validation process to ensure data integrity, crafting test data to expose and correct parsing errors. Identified and resolved a critical bug related to data redundancy in XML files, which had been overlooked during initial sampling due to unique dataset characteristics. This involved implementing conditional processing logic to handle varying data point lengths within XML files, ensuring accurate data extraction across the entire dataset. By automating the data engineering process, I reduced the time required to process 14,000 data points from an estimated 817 hours (manually) to just over 20 minutes. This not only improved efficiency but also allowed the research team to focus more on analyzing data, significantly accelerating the project’s timeline and contributing to its overall success',
    link: '/projects/xml-data',
    imageUrl: '/Experience/Ilan.png',
  },
];

const Timeline: React.FC = () => {
  const [startIndex, setStartIndex] = useState(0);
  const [direction, setDirection] = useState(0);
  
  const itemsToShow = 3;
  const maxStartIndex = timelineData.length - itemsToShow;

  const getCurrentItems = () => {
    return timelineData.slice(startIndex, startIndex + itemsToShow);
  };

  const handleNext = () => {
    if (startIndex < maxStartIndex) {
      setDirection(1);
      setStartIndex(prev => prev + 1);
    }
  };

  const handlePrev = () => {
    if (startIndex > 0) {
      setDirection(-1);
      setStartIndex(prev => prev - 1);
    }
  };

  const slideVariants = {
    enter: (direction: number) => ({
      x: direction > 0 ? 500 : -500,
      opacity: 0
    }),
    center: {
      x: 0,
      opacity: 1
    },
    exit: (direction: number) => ({
      x: direction < 0 ? 500 : -500,
      opacity: 0
    })
  };

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      <h2 className="text-3xl font-extrabold text-gray-900 mb-8 text-center">Experience Timeline</h2>
      
      <div className="relative">
        <button
          className="absolute left-0 top-1/2 transform -translate-y-1/2 -translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-30 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handlePrev}
          disabled={startIndex === 0}
          aria-label="Previous"
        >
          <FaChevronLeft className="w-6 h-6 text-gray-600" />
        </button>
        
        <button
          className="absolute right-0 top-1/2 transform -translate-y-1/2 translate-x-12 bg-white p-3 rounded-full shadow-lg hover:bg-gray-100 transition-colors duration-200 z-30 disabled:opacity-50 disabled:cursor-not-allowed"
          onClick={handleNext}
          disabled={startIndex === maxStartIndex}
          aria-label="Next"
        >
          <FaChevronRight className="w-6 h-6 text-gray-600" />
        </button>

        <div className="overflow-hidden">
          <div className="flex justify-center gap-6 relative">
            <AnimatePresence initial={false} mode="popLayout">
              {getCurrentItems().map((item, index) => (
                <motion.div
                  key={startIndex + index}
                  custom={direction}
                  variants={slideVariants}
                  initial="enter"
                  animate="center"
                  exit="exit"
                  transition={{
                    x: { type: "spring", stiffness: 300, damping: 30 },
                    opacity: { duration: 0.2 }
                  }}
                  className="w-full max-w-sm flex-shrink-0"
                >
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden h-full">
                    <img
                      src={item.imageUrl}
                      alt={item.title}
                      className="w-full h-48 object-cover"
                    />
                    <div className="p-6">
                      <h3 className="text-xl font-bold text-gray-900 mb-2">
                        {item.title}
                      </h3>
                      <p className="text-sm text-gray-500 mb-4">
                        {item.date}
                      </p>
                      <p className="text-gray-600 text-sm line-clamp-4">
                        {item.description}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
            </AnimatePresence>
          </div>
        </div>

        {/* Progress Indicators */}
        <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {timelineData.map((_, index) => (
            <button
              key={index}
              onClick={() => {
                setDirection(index > startIndex ? 1 : -1);
                setStartIndex(Math.min(Math.max(0, index), maxStartIndex));
              }}
              className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                index >= startIndex && index < startIndex + itemsToShow 
                  ? 'bg-blue-500 w-4' 
                  : 'bg-gray-300'
              }`}
              aria-label={`Go to item ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Timeline;