# 🎯 WisePrep

**A modern AI-powered job interview preparation platform**

WisePrep is an innovative web application that helps job seekers practice and improve their interview skills through AI-powered voice conversations. Get real-time feedback, track your progress, and boost your confidence before your next big interview.

---

## 🚀 Project Description

**AI-powered interview preparation platform built with Next.js, Firebase, and Vapi voice agents. Practice mock interviews, receive instant AI feedback, and track your progress with a modern, responsive interface.**

---

## ⚙️ Tech Stack

- **Frontend**: Next.js, TailwindCSS, shadcn/ui
- **Backend**: Next.js API Routes
- **Database & Auth**: Firebase
- **AI Integration**: Vapi AI Voice Agents, Google Gemini
- **Validation**: Zod
- **Styling**: Tailwind CSS

---

## ✨ Features

### 🔐 **Authentication**
- Secure email/password authentication
- User session management with Firebase

### 🎤 **AI Interview Practice**
- Real-time voice conversations with AI agents
- Dynamic question generation based on job roles
- Natural conversation flow with intelligent responses

### 📊 **Instant Feedback**
- Detailed analysis of your interview performance
- Actionable suggestions for improvement
- Performance scoring and insights

### 📱 **Modern Interface**
- Clean, intuitive user experience
- Fully responsive design for all devices
- Dark/light mode support

### 📈 **Progress Tracking**
- Personal dashboard to manage interviews
- Interview history and analytics
- Performance trends over time

---

## 🛠️ Installation & Setup

### Prerequisites
- Node.js (v18 or higher)
- npm or yarn
- Git

### 1. Clone the Repository
```bash
git clone [your-repo-link]
cd WisePrep
```

### 2. Install Dependencies
```bash
npm install
```

### 3. Environment Setup
Create a `.env.local` file in the root directory:

```env
# Vapi Configuration
NEXT_PUBLIC_VAPI_WEB_TOKEN=your_vapi_token
NEXT_PUBLIC_VAPI_WORKFLOW_ID=your_workflow_id

# Google AI
GOOGLE_GENERATIVE_AI_API_KEY=your_gemini_api_key

# Application
NEXT_PUBLIC_BASE_URL=http://localhost:3000

# Firebase Configuration
NEXT_PUBLIC_FIREBASE_API_KEY=your_firebase_api_key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your_project.firebaseapp.com
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your_project_id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your_project.appspot.com
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your_sender_id
NEXT_PUBLIC_FIREBASE_APP_ID=your_app_id

# Firebase Admin (Server-side)
FIREBASE_PROJECT_ID=your_project_id
FIREBASE_CLIENT_EMAIL=your_service_account_email
FIREBASE_PRIVATE_KEY=your_private_key
```

### 4. Run the Development Server
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) to view the application.

---

## 📁 Project Structure

```
WisePrep/
├── app/                    # Next.js app directory
│   ├── (auth)/            # Authentication pages
│   ├── (root)/            # Main application pages
│   ├── api/               # API routes
│   └── globals.css        # Global styles
├── components/            # Reusable UI components
├── lib/                   # Utility functions and configurations
├── public/               # Static assets
└── ...config files
```

---

## 🔧 Key Components

### Authentication System
- Firebase Auth integration
- Protected routes and middleware
- User session management

### Interview Engine
- Vapi AI voice agent integration
- Google Gemini for question generation
- Real-time conversation handling

### Feedback System
- AI-powered performance analysis
- Detailed scoring algorithms
- Improvement recommendations

---

## 🚀 Deployment

### Using Vercel (Recommended)
1. Push your code to GitHub
2. Connect your repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically on every push

### Using Other Platforms
The application can be deployed on any platform that supports Next.js:
- Netlify
- Railway
- DigitalOcean App Platform

---

## 🤝 Contributing

Contributions are welcome! Please feel free to submit issues and enhancement requests.

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

---

## 📄 License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## 🙏 Acknowledgments

- [Vapi AI](https://vapi.ai/) for voice agent technology
- [Google Gemini](https://gemini.google.com/) for AI capabilities
- [Firebase](https://firebase.google.com/) for backend services
- [shadcn/ui](https://ui.shadcn.com/) for UI components

---

## 📞 Contact

Dhruv Vaishnav - dhruvvaishnav687@gmail.com

Project Link: https://github.com/dhruvxvaishnav/AI_Interview_System

---

<div align="center">

**⭐ Star this repository if you found it helpful!**

</div>
