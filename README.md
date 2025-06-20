# Navneet Kumar's Portfolio Website

A modern, responsive portfolio website built with Next.js, featuring an AI-powered chat interface that allows visitors to interact with an AI assistant that can answer questions about my professional experience and expertise.

## Features

- Modern, responsive design with smooth animations
- AI-powered chat interface using OpenAI's GPT-4
- Professional portfolio sections showcasing experience and skills
- Built with Next.js 13+ and TypeScript
- Styled with Tailwind CSS
- Analytics integration with Vercel

## Local Development

1. Clone the repository
2. Install dependencies:
   ```bash
   npm install
   ```
3. Create a `.env.local` file in the root directory with your OpenAI API key:
   ```
   OPENAI_API_KEY=your_api_key_here
   NEXT_PUBLIC_WEBSITE_URL=http://localhost:3000
   ```
4. Run the development server:
   ```bash
   npm run dev
   ```
5. Open [http://localhost:3000](http://localhost:3000) in your browser

## Deployment

This website is designed to be deployed on Vercel. To deploy:

1. Create a [Vercel account](https://vercel.com/signup) if you haven't already
2. Install the Vercel CLI:
   ```bash
   npm install -g vercel
   ```
3. Deploy to Vercel:
   ```bash
   vercel
   ```
4. Add your environment variables (OPENAI_API_KEY) in the Vercel project settings

## Technologies Used

- Next.js 13+
- TypeScript
- Tailwind CSS
- Framer Motion
- OpenAI API
- Vercel Analytics

## License

MIT
