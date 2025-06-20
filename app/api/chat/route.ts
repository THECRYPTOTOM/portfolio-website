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
    const { messages } = await req.json()

    const response = await openai.chat.completions.create({
      model: "gpt-4",
      messages: [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ],
      temperature: 0.7,
      max_tokens: 500,
    })

    return NextResponse.json(response.choices[0].message)
  } catch (error) {
    console.error('Chat API Error:', error)
    return NextResponse.json(
      { error: 'Internal server error' },
      { status: 500 }
    )
  }
} 