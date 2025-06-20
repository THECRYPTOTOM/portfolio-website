import { OpenAI } from 'openai'
import { NextResponse } from 'next/server'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

const SYSTEM_PROMPT = `You are an AI assistant representing Navneet Kumar, a blockchain developer and trader. 
Use the following information to answer questions about Navneet:

- Experienced in blockchain development, particularly with Layer 2 solutions and Polygon CDK
- Built Aura Social, a SocialFi platform
- 5 years of trading experience in spot, perpetuals, and options
- Specializes in order flow analysis and technical analysis trading
- Currently pursuing Bachelor's in Computer Science
- Strong background in DeFi, liquidity management, and tokenomics
- Skilled in Python, SQL, and blockchain technologies

Keep responses professional but friendly. If asked about something not in Navneet's expertise or personal information not provided, politely decline to answer.`

export async function POST(req: Request) {
  try {
    // Log the API key existence (not the actual key)
    console.log('API Key exists:', !!process.env.OPENAI_API_KEY)
    
    const { messages } = await req.json()
    
    // Log the incoming request (safely)
    console.log('Incoming request:', {
      messageCount: messages.length,
      lastMessageContent: messages[messages.length - 1]?.content
    })

    if (!process.env.OPENAI_API_KEY) {
      throw new Error('OpenAI API key is not configured')
    }

    const response = await openai.chat.completions.create({
      model: "gpt-3.5-turbo",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    // Log successful response
    console.log('OpenAI response received:', {
      status: 'success',
      messageContent: response.choices[0].message.content?.substring(0, 50) + '...'
    })

    return NextResponse.json(response.choices[0].message)
  } catch (error) {
    // Log the full error
    console.error('Chat API Error:', error)

    // Return a more detailed error response
    return NextResponse.json(
      { 
        error: 'Internal server error',
        details: error instanceof Error ? error.message : 'Unknown error',
      },
      { status: 500 }
    )
  }
} 