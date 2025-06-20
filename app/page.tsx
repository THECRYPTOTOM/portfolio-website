'use client'

import Header from './components/Header'
import { FaGithub, FaLinkedin, FaTelegram } from 'react-icons/fa'
import { motion } from 'framer-motion'

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-16 px-6">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Navneet Kumar
            </h1>
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Blockchain Developer & Strategic Trader with expertise in Layer 2 solutions,
              DeFi, and innovative tech solutions.
            </p>
            <div className="flex justify-center space-x-6">
              <a
                href="https://github.com/your-github"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaGithub size={24} />
              </a>
              <a
                href="https://linkedin.com/in/your-linkedin"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaLinkedin size={24} />
              </a>
              <a
                href="https://t.me/your-telegram"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-900"
              >
                <FaTelegram size={24} />
              </a>
            </div>
          </motion.div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-16 px-6 bg-white">
        <div className="container mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="max-w-3xl mx-auto"
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">About Me</h2>
            <p className="text-gray-600 mb-4">
              Innovative developer and strategic manager with a proven track record of leading and delivering cutting-edge projects,
              including a zk EVM Layer 2 chain using Polygon CDK and Aura Social, a SocialFi platform.
            </p>
            <p className="text-gray-600 mb-4">
              With 5 years of experience in trading spot, perpetuals, and options, I specialize in order flow
              analysis, technical analysis trading, inventory management, and rebalancing.
            </p>
            <p className="text-gray-600">
              Currently pursuing a Bachelor&apos;s in Computer Science, I seamlessly bridge traditional financial acumen
              with blockchain innovation to deliver exceptional results in fast-paced, dynamic environments.
            </p>
          </motion.div>
        </div>
      </section>
    </main>
  )
} 