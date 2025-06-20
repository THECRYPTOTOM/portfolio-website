import Header from '../components/Header'
import ChatInterface from '../components/ChatInterface'

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Chat with Navneet&apos;s AI Assistant</h1>
          <p className="text-gray-600 mb-8">
            Feel free to ask questions about my experience, skills, or projects. 
            The AI will respond on my behalf based on my background and expertise.
          </p>
          <ChatInterface />
        </div>
      </div>
    </main>
  )
} 