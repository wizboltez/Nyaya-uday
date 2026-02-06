# Nyaya-Uday 🏛️

**Access to Justice Begins with Access to the Path**

Nyaya-Uday is a **judicial career discovery and simulation platform** designed to make the path to becoming a judge clear, accessible, and achievable for students across India — especially those from non-urban and non-English speaking backgrounds.

## 📋 Problem We Solve
India faces a persistent shortage of judicial officers combined with a growing case backlog. A key, overlooked issue is **lack of early awareness about the judicial career path**.
Many capable students never consider becoming judges because:
- They don't know the step-by-step roadmap to the bench
- Judicial careers seem opaque, elite, or inaccessible
- Early guidance is rarely available
- Information is scattered across multiple sources and languages
**Nyaya-Uday changes this** by providing a free, mobile-first platform that introduces judicial careers early and makes the journey feel clear and approachable.

## 🎯 What Nyaya-Uday Does
### 1. **Personalized Judicial Career Roadmap**
- Enter your state, education level, and career goal
- Receive a clear, visual, step-by-step timeline showing:
  - Required law degrees (5-year or 3-year LLB)
  - Relevant entrance exams (CLAT, AILET, State CETs)
  - State-specific Judicial Services Exam (PCS-J) eligibility
  - All explained in **jargon-free language**
### 2. **"Junior Judge" Simulations**
- Experience what judicial thinking feels like
- Solve realistic case scenarios (theft, rent disputes, breach of contract, etc.)
- Make judgments based on:
  - Evidence evaluation
  - Fairness principles
  - Neutral reasoning
- Receive instant feedback and scoring
### 3. **Career Assessment & Motivation**
- Get a personalized **Judicial Aptitude Score**
- Compete on regional or state leaderboards
- Earn recognition badges and titles
- Understand if judicial reasoning suits your personality
### 4. **Multilingual & Accessible**
- Available in **English and Hindi**
- Optimized for **low-end Android devices**
- Minimal data usage
- Works reliably on poor network conditions

## 🛠️ Tech Stack
### Frontend
- **React.js** — Dynamic UI components
- **React Router** — Navigation & routing
- **React-i18next** — Multilingual support (English/Hindi)
- **CSS3** — Responsive, accessible styling
### Backend
- **Node.js + Express** — RESTful API server
- **MongoDB** — User profiles, scores, and progress tracking
- **JWT Authentication** — Secure user sessions
### Architecture
```
nyaya-uday/
├── client/                    # React frontend
│   ├── src/
│   │   ├── components/        # UI components
│   │   ├── context/           # Auth & global state
│   │   ├── data/              # Case, career, roadmap data
│   │   ├── pages/             # Main screens
│   │   └── utils/             # Helpers & constants
│   └── package.json
├── server/                    # Node.js backend
│   ├── models/                # MongoDB schemas
│   ├── routes/                # API endpoints
│   ├── middleware/            # Auth, logging
│   └── package.json
└── README.md
```
## 🚀 Getting Started
### Prerequisites
- Node.js (v14+)
- npm or yarn
- MongoDB (local or Atlas URI)
### Installation
1. **Clone the repository**
   ```bash
   git clone https://github.com/wizboltez/Nyaya-uday.git
   cd Nyaya-uday
   ```
2. **Install dependencies for both client and server**
   ```bash
   npm install
   cd client && npm install
   cd ../server && npm install
   cd ..
   ```
3. **Set up environment variables**
   Create `.env` in the `server/` directory:
   ```env
   MONGO_URI=your_mongodb_connection_string
   JWT_SECRET=your_jwt_secret_key
   PORT=5000
   NODE_ENV=development
   ```
4. **Start the application**
   **Terminal 1 — Start Backend:**
   ```bash
   cd server
   npm start
   ```
   **Terminal 2 — Start Frontend:**
   ```bash
   cd client
   npm start
   ```
   The app will open at `http://localhost:3000`
## 🌍 Multilingual Support
Currently supported:
- **English** 🇬🇧
- **Hindi** 🇮🇳
Easy to extend to regional languages like Marathi, Tamil, Telugu, Kannada, etc.
## 🚧 Future Enhancements
- [ ] Offline mode (PWA support)
- [ ] Voice-based assistant for quick guidance
- [ ] More regional languages
- [ ] Video modules on judicial processes
- [ ] Integration with law colleges for outreach
- [ ] Mobile app (React Native)
- [ ] Mentor connection system
- [ ] Advanced analytics for educators
## 🤝 Contributing
We welcome contributions! To get started:
1. **Fork** the repository
2. **Create a branch** for your feature: `git checkout -b feature/your-feature`
3. **Commit changes**: `git commit -m 'Add your feature'`
4. **Push to branch**: `git push origin feature/your-feature`
5. **Open a Pull Request**
### Areas to Contribute
- Translate content to regional languages
- Add new case scenarios
- Improve UI/UX for low-end devices
- Enhance accessibility features
- Fix bugs and improve performance
## 📝 License
This project is open source and available under the **MIT License**. See LICENSE file for details.
## 💬 Support & Feedback
- **Found a bug?** Open an issue on GitHub
- **Have a suggestion?** Create a discussion
- **Need help?** Check the FAQ section in the app
## 🙏 Acknowledgments
Built as a solution to the **GDGC PCCOE Problem Statement 3** on judicial career awareness and accessibility.
Inspired by the vision of making the judicial career path clear, approachable, and achievable for every capable student in India.
## 📬 Contact
- Open an issue on the repository
-----
**"न्याय तक पहुँच की शुरुआत सही रास्ते से होती है।"**  
*Access to Justice Begins with Access to the Path.*
