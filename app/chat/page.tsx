import Header from '../components/Header'
import ChatInterface from '../components/ChatInterface'

export default function ChatPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Header />
      <div className="container mx-auto px-4 pt-32 pb-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl font-bold text-gray-900 mb-8">Chat with Navneet&apos;s AI Assistant</h1>
          
          {/* Temporary maintenance notice */}
          <div className="bg-yellow-50 border-l-4 border-yellow-400 p-4 mb-8">
            <div className="flex">
              <div className="flex-shrink-0">
                <svg className="h-5 w-5 text-yellow-400" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
              </div>
              <div className="ml-3">
                <p className="text-sm text-yellow-700">
                  The chat feature is temporarily unavailable while we upgrade our systems. Please check back later!
                </p>
                <p className="mt-2 text-sm text-yellow-700">
                  In the meantime, you can reach out to me via:
                  <a href="https://t.me/your-telegram" className="ml-1 font-medium underline">Telegram</a> or
                  <a href="https://linkedin.com/in/your-linkedin" className="ml-1 font-medium underline">LinkedIn</a>
                </p>
              </div>
            </div>
          </div>
          
          <ChatInterface />
        </div>
      </div>
    </main>
  )
} 