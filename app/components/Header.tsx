'use client'

import Link from 'next/link'
import { motion } from 'framer-motion'

const Header = () => {
  return (
    <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-sm">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Link href="/" className="text-2xl font-bold text-gray-800">
              NK
            </Link>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            className="flex space-x-6"
          >
            <Link href="/#about" className="text-gray-600 hover:text-gray-900">
              About
            </Link>
            <Link href="/#experience" className="text-gray-600 hover:text-gray-900">
              Experience
            </Link>
            <Link href="/#skills" className="text-gray-600 hover:text-gray-900">
              Skills
            </Link>
            <Link href="/chat" className="text-gray-600 hover:text-gray-900">
              Chat with AI
            </Link>
          </motion.div>
        </div>
      </nav>
    </header>
  )
}

export default Header 