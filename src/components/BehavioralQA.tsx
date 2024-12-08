'use client'

import { useState } from "react";
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