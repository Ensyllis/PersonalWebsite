'use client'

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaChevronDown, FaChevronUp } from "react-icons/fa"; // Import icons from react-icons


const behavioralQA = [
  {
    question: "What motivated you to apply for this position?",
    answer: "If I applied, it's most likely because your company gives me access to the most fun tools and infrastructure to build cool ideas upon.",
  },
  {
    question: "Why did you leave your previous company?",
    answer: "Didn't! Really like this company, headhunters-- separating me from this company will be like separating weed from the ground.",
  },
  {
    question: "What is your ideal work environment?",
    answer: "I love having some crazy idea, and executing it well. Being able to dedicate sunrise, till sundown for this idea to work then resting like crazy is the best and most ideal work environment. This allows me to capture innovative ideas, work on implementing and bringing them to life fast. Hopefully no red tape I need to work through, or reasonable amount of red-tape. Mathematically, if I work 100 hours one week, then rest for 20 hours the next week, I'd still get my 60 hours a week in.",
  },
  {
    question: "How might former colleagues describe your work style?",
    answer: "Intense bursts of energy. I'm like an ADHD dog, I bite onto something and don't really let go. Very useful when we need to implement an idea fast.",
  },
  {
    question: "What is your greatest strength in the workplace?",
    answer: "Innovative, out of the box thinking. Always questioning everything leads to innovative processes which can save a lot of time.",
  },
  {
    question: "Where would you like to improve in your work life?",
    answer: "More outrageous infrastructure to execute crazier ideas at a level of excellence.",
  },
  {
    question: "Tell me about a time you overcame an obstacle in school or the workplace. What did you learn from the experience?",
    answer: "Was told to do analysis on a set of documents. I started to dive deep into automating it, then in the middle I apologized for not working on it traditionally. My boss was like, 'no, no no no, you keep working on that' and then I built an end-to-end system which automatically extracted all relevant themes and topics from large noisy data. I learnt that this industry encourages crazy ideas, executed well.",
  },
  {
    question: "Do you prefer to work alone or as a part of a team? Why?",
    answer: "Team if it fits the 2 pizza rule in Amazon. I know my weaknesses, and if I can look at someone and go, 'you're great at data engineering right? This is what I need from you' then we each focus on our strengths, that's awesome.",
  },
  {
    question: "Where do you see yourself working in five years?",
    answer: "Crazier ideas! Executed Well! Bigger stakes! Funner life! More experiences! I want to fully enjoy life and continue to tackle interesting and challenging problems.",
  },
  {
    question: "What are your personal strengths in the workplace?",
    answer: "I like to imagine I bring joy with an infectious enthusiasm and a delicate balance between serious play.",
  },
  {
    question: "Tell me something about yourself that is not listed on your resume.",
    answer: "I will try to innovate your processes like a beaver trying to turn everything into a dam.",
  },
  {
    question: "What is the riskiest thing you’ve ever done?",
    answer: "It's difficult. There's this fine line between reasonable risk and stupidity. I was contacted by a headhunter and offered to strike up a deal with him, where I can adjust my job-finding pipeline to identify potential clients or find new clientele in exchange for a job. That was a smart risk in my opinion.",
  },
  {
    question: "Are you more risk-averse or risk-seeking? Give me an example.",
    answer: "Risk-seeking. If the risk is reasonable and the numbers make sense, why not? Right now I'm looking at the economical data and I'm betting on a downturn of the economy, so I'm doing two puts on two stocks that are directly negatively correlated, So I make money only if both stocks go down which is during a financial crisis.",
  },
  {
    question: "What is your greatest weakness?",
    answer: "Obsession. I'm like a drug addict when it comes to a problem, I get a high off being obsessed over a project, and sometimes I forget to figure out if the juice is worth the squeeze. I need a boss that can help me know if a task is worth being obsessed over.",
  },
  {
    question: "How do you feel about waking up early or staying up late?",
    answer: "If I can do what I love, yeah why not? If I'm counting the number of peperoni's on a pizza -- I'd like to see how tall the building I'm working on is.",
  },
  {
    question: "What are your interests outside the classroom/office?",
    answer: "Just satisfying my curiosity. Asking questions, reading books, exploring new things, they're all fun as long as my curiosity is satiated.",
  },
  {
    question: "Why should we hire you?",
    answer: "You have the infrastructure to make money off crazy ideas. I have the skills to execute crazy ideas well. We both need the money and when we merge your infrastructure and my skillset lots of money can be made. Together we can help each other.",
  },
  {
    question: "What is your favorite class that you took?",
    answer: "Corporate Finance I by Andrew Lo. First course that taught me the beauty of finance, statistics and coding.",
  },
  {
    question: "Who has personally influenced you the most? Name someone whom you’ve never met who’s been a strong influence.",
    answer: "Andrew Lo. That man showed me how beautiful this world is through his lectures and books. I fell in love with this subject because of him.",
  },
  {
    question: "Tell me about your biggest failure or a period of adversity.",
    answer: "My first project/start-up Ariadne which helped people know which stocks to pick if they know their risk tolerance. I thought it was impossible at first, and cried in a bathroom over this obsession of mine. 2 years later, I figured out SQSLP can solve a theoretical unsolvable problem with a numeric estimation.",
  },
  {
    question: "Discuss a difficult ethical decision you recently faced.",
    answer: "Being honest in a world where liars are rewarded.",
  },
  {
    question: "What’s the last book you read?",
    answer: "When Genius Fails.",
  },
];

const BehavioralQA = () => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);
  
    const toggleQA = (index: number) => {
      setOpenIndex(openIndex === index ? null : index);
    };
  
    return (
      <section className="max-w-4xl mx-auto my-10 p-6 bg-white rounded-lg shadow-lg">
        <h2 className="text-3xl font-bold mb-6">
          Behavioral QA [If you want to know more about me!]
        </h2>
        <div className="space-y-6">
          {behavioralQA.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="p-4 border border-gray-200 rounded-md cursor-pointer"
              onClick={() => toggleQA(index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold text-grey-600">
                  {item.question}
                </h3>
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FaChevronUp className="text-gray-500" />
                  ) : (
                    <FaChevronDown className="text-gray-500" />
                  )}
                </motion.div>
              </div>
  
              <AnimatePresence>
                {openIndex === index && (
                  <motion.p
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.4 }} // Smooth transition on collapse
                    className="mt-2 text-gray-700"
                  >
                    {item.answer}
                  </motion.p>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </section>
    );
  };

export default BehavioralQA;
