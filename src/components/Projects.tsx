'use client'

import React from 'react';
import { motion } from 'framer-motion';

interface Project {
  id: number;
  title: string;
  description: string;
  link: string;
}

const projectsData: Project[] = [
  { id: 0, 
    title: "Stylometry on Medieval Age Authors",
    description: "Joined a Research Group where we had to do Stylometry on Roberta and Transformer models. Using Hugging Face Semantic Embedding models (RoBERTa), we had to fine-tun the model, then running it on a virtual machine. Then we used Contrastive Learning to do inference to identify potential unknown texts for Authorship Attribution based on writing style.",
    link: "/project-(-1)" },
  { id: 1,
    title: "Built a Data Pipeline to Mass Email Potential Employers",
    description: "Created a Data pipeline that Scraped EDGAR SEC Data to find companies holding $100M AUM, then set up a data pipeline using MongoDB, Docker Container, HunterIO Api, Web-Scrapers, Virtual Machines, Digital Ocean and Topic Modeling that enriched the data to find website descriptions, contact information and industry of these companies. This allowed me to filter for specific companies that were aligned with my interest and emailed all of the people working inside these companies. (I got a job offer before I ran this so my infamy is not known)",
    link: '/project-0'},
  { id: 2, 
    title: 'Project Lead for Democratized Financial Advice', 
    description: 'ariadneportfolio.com <- prototype (Do not use for real financial advice) Developed an innovative algorithm designed to democratize financial advice, enabling individuals with limited resources to craft diversified stock portfolios. Utilized machine learning techniques, specifically Sequential Least Squares Programming, to tailor investment strategies to individual risk tolerances and financial goals, making effective financial management accessible to all. Engineered and coded the underlying algorithms, demonstrating full-stack development and expertise in utilizing Python, Scipy, HTML, JavaScript', 
     link: '/project-1' },
  { id: 3, 
    title: 'Built this Cute Personal Website!', 
    description: 'I made this website using typescript, nextjs, tailwind css then deployed it onto Vercel with CI/CD. Note super sure what else to add here you feel me? Check around the website for fun!', 
    link: '/project-2' },
  { id: 4, 
    title: "Friend's Birthday Gift", 
    description: 'For my friend I created a cute typescript website that had everything she liked, and some things I am grateful about for her. It is her birthday present so I cannot show >:3 it is just for her eyes only', 
    link: '/project-3' },
  { id: 5, 
    title: 'Analysis of Data Science and Statistics Job Market', 
    description: "Took the California Bureu's Data and analyzed which of the following occupations that Data Science and Statistics Majors tend to go to have the highest average growth and the lowest variance as the same time.", 
    link: '/project-4' },
  { id: 6, 
    title: 'Application Developer for Harpious, an App Designed for Speech-Impaired Individuals', 
    description: 'Created a a Flutter-based app wrapping an Elevenlabs API inside a Flutter application to generate realistic synthetic voice output. Demonstrated proficiency in utilizing Dart, Flutter, and RESTful APIs to deliver assistive technology solutions.', 
    link: '/project-5' },
  { id: 7, 
    title: "Factor Analysis of Women's workforce participation using Logistic Regression with In and Out of Sample training.", 
    description: "Using the Mr087 data of women income, we were capable of predicting the greatest factors that influenced women labor participation finally noting that the highest predictor of women labor participation is extra household income, if we discounted that factor the the 2nd highest factor is education concluding the research by suggesting that investing in woman's education can lead to higher women labor participation.", 
    link: '/project-6' },
  { id: 8,
    title: "Financial Pitch - Quantitative Investing Strategy",
    description : "Using pandas dataframe I was able to analyze the fundamentals of a stock (P/E, Cashflow, etc.) Rank it in a percentile to get the Top 50 stocks then used Markowitz Portfolio Theory to find the best stocks from the top 50. I pitched the results to my University's investment club.",
    link: "/project-7" },
  { id: 9,
    title: "Automated Messaging Scripts",
    description: "Programmed a script that was capable of automating Whatsapp messages and Emails as well.",
    link: "/project-8"
  },
  { id: 10,
    title: "Financial Portfolio Optimization",
    description: "Applied Markowitz's Modern Portfolio Theory in Python to design algorithms that balance risk and return.",
    link: "/project-9"
  },
  { id: 11,
    title: "Markdown Converted Website",
    description: "Made a small data-pipeline which took in markdown files from Obsidian, and then rendered it to typescript. Supposed to be used for non-technical students to show off their artwork and portfolio.",
    link: "/project-10"
  }
];

const Projects: React.FC = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold mb-6">My Projects</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {projectsData.map((project) => (
          <motion.div
            key={project.id}
            className="bg-white rounded-lg shadow-md p-6 hover:shadow-lg transition-shadow duration-300"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
            <p className="text-gray-600">{project.description}</p>
            <a 
              href={project.link} 
              className="text-blue-500 hover:underline mt-4 inline-block"
            >
              View Project Details
            </a>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
