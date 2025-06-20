'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'

interface Message {
  role: 'user' | 'assistant'
  content: string
}

export default function ChatInterface() {
  const [messages, setMessages] = useState<Message[]>([])
  const [input, setInput] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState<string | null>(null)
  const isDisabled = true // Temporarily disable the chat

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    if (!input.trim() || isDisabled) return

    const newMessage: Message = { role: 'user', content: input }
    setMessages(prev => [...prev, newMessage])
    setInput('')
    setIsLoading(true)
    setError(null)

    try {
      const response = await fetch('/api/chat', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          messages: [...messages, newMessage],
        }),
      })

      if (!response.ok) {
        const errorData = await response.json()
        throw new Error(errorData.details || 'Failed to get response')
      }

      const data = await response.json()
      setMessages(prev => [...prev, data])
    } catch (error) {
      console.error('Chat error:', error)
      setError(error instanceof Error ? error.message : 'An error occurred while fetching the response')
      setMessages(prev => [...prev, {
        role: 'assistant',
        content: 'I apologize, but I encountered an error. Please try again or contact support if the issue persists.',
      }])
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 opacity-75">
      <div className="h-[400px] overflow-y-auto mb-6 space-y-4 flex items-center justify-center">
        <p className="text-gray-500 text-center">
          Chat functionality is temporarily disabled while we upgrade our systems.<br />
          Please check back later!
        </p>
      </div>

      <form onSubmit={handleSubmit} className="flex gap-2">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Chat temporarily unavailable..."
          className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 bg-gray-100"
          disabled={true}
        />
        <button
          type="submit"
          disabled={true}
          className="px-6 py-2 bg-gray-400 text-white rounded-lg opacity-50 cursor-not-allowed"
        >
          Send
        </button>
      </form>
    </div>
  )
} 