# India Startup Festival (ISF) - Unified React SPA

This project is a unified, fully responsive React.js SPA migration of the legacy hybrid platform (WordPress CMS + custom PHP modules + Next.js landing pages).

---

## 🚀 Quick Start Guide

### 1. Install Dependencies
Run the following command in the project root directory:
```bash
npm install
```

### 2. Run the Development Server
Launch the local Vite server:
```bash
npm run dev
```
Once started, open your web browser and navigate to:
👉 **[http://localhost:5173/](http://localhost:5173/)**

### 3. Build for Production
To compile and package the application for production deployment:
```bash
npm run build
```
This builds static static files inside the `dist/` directory, optimized and ready to host on Netlify, Vercel, or AWS S3.

---

## 🛠️ Tech Stack & Structure

- **Framework**: React 19 (TypeScript) + Vite
- **Routing**: `react-router-dom` v7
- **Styling**: Tailwind CSS v4 + Montserrat & Segoe UI
- **Animations**: Framer Motion
- **Toasts / Notifications**: Sonner

### Page Routes Map
- `/` - Combined marketing & AI Summit landing page.
- `/registration` - Interactive registration tracks selection hub.
- `/registration/delegate` - Multi-passenger delegate registration form (with dynamic inputs and tax computation).
- `/registration/exhibitor` - Stall dimensions and session presentation selector.
- `/registration/expo` - Free visitor pass.
- `/registration/student` - Verification pass upload for students.
- `/registration/pitch` - Startup pitch deck submissions.
- `/registration/dignitary` - Invite-only VIP validation channels.
- `/registration/bus-yatra` - Roadshow registration.
- `/investors` - Stateful mentorship profile login and session workspace.
