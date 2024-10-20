'use client'

import Image from 'next/image';
import { motion } from 'framer-motion';
import { FaPython, FaRProject, FaHtml5, FaCss3Alt, FaJsSquare, FaDocker, FaProjectDiagram, FaTree, FaDatabase, FaHandshake, FaBolt, FaCode, FaSearch, FaBrain, FaCheckCircle, FaSitemap, FaChartLine, FaShapes, FaCodeBranch, FaCalculator, FaExchangeAlt, FaCogs, FaNetworkWired, FaRobot } from 'react-icons/fa';
import { SiTypescript, SiCplusplus, SiFlutter, SiDart, SiMysql, SiTensorflow, SiMongodb, SiDigitalocean, SiVercel, SiStreamlit, SiPostman, SiOpenai, SiGit, SiLinux } from 'react-icons/si';
import { useState } from 'react';
import { GiConfirmed, GiArtificialIntelligence, GiCog } from 'react-icons/gi';

const categories = [
  {
    title: "Languages",
    items: [
      { name: 'Python', Icon: FaPython },
      { name: 'R', Icon: FaRProject },
      { name: 'TypeScript', Icon: SiTypescript },
      { name: 'HTML', Icon: FaHtml5 },
      { name: 'CSS', Icon: FaCss3Alt },
      { name: 'JavaScript', Icon: FaJsSquare },
      { name: 'Flutter/Dart', Icon: SiFlutter },
      { name: 'C++', Icon: SiCplusplus },
      { name: 'SQL', Icon: SiMysql },
    ]
  },
  {
    title: "Tools & Technologies",
    items: [
      { name: 'Git', Icon: SiGit },
      { name: 'Linux', Icon: SiLinux },
      { name: 'Docker', Icon: FaDocker },
      { name: 'MongoDB', Icon: SiMongodb },
      { name: 'TensorFlow', Icon: SiTensorflow },
      { name: 'Digital Ocean', Icon: SiDigitalocean },
      { name: 'Vercel', Icon: SiVercel },
      { name: 'Streamlit', Icon: SiStreamlit },
      { name: 'Postman', Icon: SiPostman },
    ]
  },
  {
    title: "Classic Machine Learning",
    items: [
      { name: 'Agglomerative Clustering', Icon: FaProjectDiagram },
      { name: 'K-Means', Icon: FaShapes },
      { name: 'HDBScan', Icon: FaBrain },
      { name: 'Support Vector Machines', Icon: FaCodeBranch },
      { name: 'Logistic Regression', Icon: FaCalculator },
      { name: 'Decision Tree', Icon: FaSitemap },
      { name: 'Contrastive Learning', Icon: FaChartLine },
    ]
  },
  {
    title: "Natural Language Processing",
    items: [
      { name: 'Fine-tuning a Semantic Embedding Model', Icon: FaBrain },
      { name: 'Topic Modeling with Semantic Embeddings', Icon: FaSearch },
      { name: 'Semantic Embeddings for Classification', Icon: FaCode },
      { name: 'Semantic Embeddings for Clustering', Icon: FaBrain },
      { name: 'Search with Semantic Embeddings', Icon: FaSearch },
      { name: 'Hugging Face Models', Icon: GiArtificialIntelligence },
      { name: 'Vector Database for RAG', Icon: FaDatabase },
      { name: 'Dimensionality Reduction with UMAP', Icon: FaSearch },
      { name: 'Dimensionality Reduction with PCA', Icon: FaSearch },
      { name: 'Denoising Noisy Text Data', Icon: FaCode },
      { name: 'Topic Modeling Techniques', Icon: FaBrain },
      { name: 'Context-Based Embeddings', Icon: GiConfirmed },
      { name: 'Deploying NLP Models', Icon: FaCode },
      { name: 'Automated Verification of Topics', Icon: FaCheckCircle },
      { name: 'Fine-tuning BERT Models', Icon: FaBrain },
      { name: 'CI/CD Data Pipelines to Front-End', Icon: FaCheckCircle },
    ]
  },
  {
    title: "Large Language Models",
    items: [
      { name: 'Langchain', Icon: FaCogs },
      { name: 'Langsmith', Icon: FaRobot },
      { name: 'RAG on Documents/Websites', Icon: FaNetworkWired },
      { name: 'OpenAI, Cohere, Anthropic', Icon: SiOpenai },
      { name: 'Building Pipelines', Icon: FaCogs },
      { name: 'Reducing AI Hallucination', Icon: GiArtificialIntelligence },
      { name: 'Batch Requests for AI', Icon: FaExchangeAlt },
      { name: 'Chat Systems', Icon: FaBrain },
      { name: 'Fine-tuning LLMs', Icon: GiCog },
      { name: 'LLM Integration into Pipelines', Icon: FaNetworkWired },
      { name: 'Multi-LLM Pipeline Integration', Icon: FaNetworkWired }
    ]
  }
];


const SkillSection = ({ title, items }: { title: string; items: Array<{ name: string; Icon: React.ComponentType<{ className?: string }> }> }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    animate={{ opacity: 1, y: 0 }}
    exit={{ opacity: 0, y: -20 }}
    transition={{ duration: 0.5 }}
    className="mb-6"
  >
    <h3 className="text-2xl font-semibold mb-6">{title}</h3>
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6">
      {items.map((item, index) => (
        <motion.div
          key={item.name}
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.3, delay: index * 0.1 }}
          className="flex flex-col items-center group"
        >
          <div className="relative w-16 h-16 mb-3 bg-gray-100 rounded-full flex items-center justify-center group-hover:bg-blue-50 transition-all duration-300">
            <item.Icon className="w-8 h-8 text-gray-600 group-hover:text-blue-500 transition-colors duration-300" />
          </div>
          <span className="text-sm font-medium group-hover:text-blue-500 transition-colors duration-300">{item.name}</span>
        </motion.div>
      ))}
    </div>
  </motion.div>
)

const Skills = () => {
  const [activeTab, setActiveTab] = useState<string>('Languages');

  return (
    <section className="my-16 px-4 lg:px-0">
      <div className="max-w-6xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-12">Skills</h2>
        
        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map(category => (
            <motion.button 
              key={category.title} 
              onClick={() => setActiveTab(category.title)} 
              className={`px-6 py-3 rounded-full text-sm font-medium transition-all duration-300 ${activeTab === category.title ? 'bg-blue-500 text-white shadow-lg' : 'bg-gray-100 text-gray-700 hover:bg-gray-200'}`}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category.title}
            </motion.button>
          ))}
        </div>
        
        {/* Active Tab Content */}
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          transition={{ duration: 0.5 }}
        >
          {categories.map(category => (
            activeTab === category.title && (
              <SkillSection 
                key={category.title}
                title={category.title}
                items={category.items}
              />
            )
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Skills;
