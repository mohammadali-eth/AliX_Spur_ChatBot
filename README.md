# Spur AI Chat

A high-performance, full-stack AI chat platform powered by React, Node.js, and PostgreSQL. Seamlessly switch between Google Gemini, OpenAI, and Puter.js with built-in Redis caching for optimal speed.

## 🚀 Live Demo
Experience the application: [maddy-chat.vercel.app](https://maddy-chat.vercel.app/)

## 🛠️ Quick Start

```bash
# Clone the repository
git clone https://github.com/mohammadali-eth/AliX_Spur_ChatBot.git
cd AliX_Spur_ChatBot

# Setup Backend
cd backend && npm install
cp .example.env .env # Configure your keys
npx prisma migrate dev
npm run dev

# Setup Frontend (New Terminal)
cd frontend && npm install
cp .example.env .env # Set REACT_APP_API_URL
npm start
```

---

## 🏗️ Tech Stack

### Frontend
- **Framework**: React 19 (TypeScript)
- **Styling**: Tailwind CSS & Radix UI
- **Icons**: Lucide React
- **Features**: Markdown support, real-time streaming, responsive UI

### Backend
- **Runtime**: Node.js & Express
- **Database**: PostgreSQL with Prisma ORM
- **Caching**: Redis (ioredis)
- **AI Providers**: Google Gemini, OpenAI, Puter.js
- **Resilience**: Exponential backoff retry logic

---

## ⚙️ Configuration

The backend supports dynamic AI provider switching via the `AI_PROVIDER` environment variable:
- `google`: Gemini 2.0 Flash (Default)
- `openai`: GPT-4o-mini
- `puter`: Puter.js Integration

Redis caching is enabled by default with a configurable `CACHE_TTL` to optimize API costs and response times.

---

## 👤 Author
**AliX**

## 📄 License
ISC
