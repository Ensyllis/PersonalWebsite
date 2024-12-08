'use client'

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const behavioralQA = [
  {
    question: "What drives you in your work?",
    answer: "I love having some crazy idea, and executing it well. Being able to dedicate sunrise till sundown for this idea to work is ideal. Mathematically, if I work 100 hours one week, then rest for 20 hours the next week, I'd still get my 60 hours a week in.",
  },
  {
    question: "How would colleagues describe your work style?",
    answer: "Intense bursts of energy. I'm like an ADHD dog, I bite onto something and don't really let go. Very useful when we need to implement an idea fast.",
  },
  {
    question: "Tell me about a significant achievement.",
    answer: "When tasked with document analysis, instead of traditional methods, I built an end-to-end system that automatically extracted themes from large noisy data. I learned that this industry encourages crazy ideas, executed well.",
  },
  {
    question: "What's your approach to risk?",
    answer: "Risk-seeking, but calculated. If the risk is reasonable and the numbers make sense, why not? I look for opportunities where data supports the decision.",
  },
  {
    question: "What makes you unique?",
    answer: "I bring infectious enthusiasm and balance serious work with playful innovation. I'll try to innovate your processes like a beaver trying to turn everything into a dam.",
  },
  {
    question: "What's your biggest challenge?",
    answer: "Obsession. I get a high off being obsessed over a project, sometimes forgetting to evaluate if the juice is worth the squeeze. I need guidance on prioritizing which problems deserve that intensity.",
  },
  {
    question: "Why are you in this field?",
    answer: "Andrew Lo's Corporate Finance course showed me the beauty of combining finance, statistics, and coding. That intersection of disciplines drives my passion for this work.",
  },
  {
    question: "What's your ideal collaboration style?",
    answer: "I thrive in small, focused teams following Amazon's 'two pizza rule'. I value working with specialists where everyone can focus on their strengths while pushing innovative solutions.",
  }
];


const BehavioralQA = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  return (
    <section className="max-w-6xl mx-auto p-6">
      <h2 className="text-3xl font-bold mb-8 text-center">
        Get to Know Me Better
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        {behavioralQA.map((item, index) => (
          <div key={index} className="contents">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, delay: index * 0.1 }}
              className={`
                relative group 
                ${hoveredIndex !== null && hoveredIndex < index ? 'translate-y-40' : ''}
                transition-transform duration-300
              `}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <div className={`
                bg-white rounded-lg shadow-sm group-hover:shadow-md 
                transition-all duration-300 p-4
                ${hoveredIndex === index ? 'bg-gray-50 rounded-b-none' : ''}
              `}>
                <h3 className="text-lg font-medium text-gray-700 line-clamp-2 pr-4">
                  {item.question}
                </h3>
              </div>

              <AnimatePresence>
                {hoveredIndex === index && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.2 }}
                    className="
                      bg-white shadow-md rounded-b-lg overflow-hidden
                      border-t border-gray-100
                    "
                  >
                    <div className="p-6 max-h-[40vh] overflow-y-auto">
                      <div className="prose prose-sm max-w-none">
                        <p className="text-gray-600 whitespace-pre-wrap">
                          {item.answer}
                        </p>
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BehavioralQA;