'use client'

import Image from 'next/image'
import { MapPinIcon } from '@heroicons/react/24/solid'

const Introduction = () => {
  return (
    <section className="w-full min-h-screen flex justify-center items-center bg-gray-100 px-8">
      <div className="flex flex-col lg:flex-row items-center lg:items-start space-x-0 lg:space-x-12 max-w-7xl">
        {/* Left side - Image */}
        <div className="relative w-64 h-96 mb-8 lg:mb-0 shrink-0">
          <Image
            src="/introduction.jpg"
            alt="Portrait"
            fill
            className="object-cover rounded-lg"
            priority
          />
        </div>
        
        {/* Right side - Text/Description */}
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold mb-4 text-black">Hi, I&apos;m Joseph!</h1>
          <p className="text-lg mb-4 text-gray-700">
            I&apos;m a full-stack data scientist and junior quant researcher with a passion for building end-to-end solutions. From back-end (Python) to front-end (TypeScript/JavaScript, HTML/CSS), and from databases (MongoDB, SQL) to DevOps (Docker, CI/CD, Microservice), I thrive on turning complex problems into scalable systems.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            My expertise lies in natural language processing (NLP)—working with semantic embeddings, fine-tuning models, and leveraging vector databases. I also specialize in machine learning techniques like clustering, dimensionality reduction, and classification to uncover insights from data.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            Currently, I&apos;m a Junior Quant Researcher at a Buy-Side Quant Hedge Fund, where I focus on applying NLP and machine learning to optimize trading strategies and research workflows.
          </p>
          <p className="text-lg mb-4 text-gray-700">
            When I&apos;m not coding or analyzing data, you&apos;ll find me sipping tea, reading, or experimenting in the kitchen.
          </p>
          <div className="flex flex-col lg:flex-row lg:items-center space-y-4 lg:space-y-0 lg:space-x-4 mb-8">
            <div className="flex items-center justify-center lg:justify-start">
              <MapPinIcon className="h-5 w-5 text-gray-500 mr-1" />
              <span className="text-gray-600">Chicago, Illinois</span>
            </div>
            <span className="text-green-500 font-medium">Open to interesting opportunities!</span>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Introduction