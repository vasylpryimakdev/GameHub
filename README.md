# 🎮 Game Hub

A modern and responsive React application for discovering video games using the RAWG API.

Game Hub allows users to browse games, filter them by platform and release date, and explore detailed information in a clean and intuitive UI.

---

## 🚀 Live Demo

👉 _Add your deployed link here (e.g. Vercel)_

---

## ✨ Features

- 🔎 Browse popular video games
- 🎯 Filter games by platform
- 📅 Filter by release date
- 🌙 Dark mode support
- ⚡ Fast performance with Vite
- 📱 Fully responsive layout
- 🧩 Clean and reusable component architecture

---

## 🛠 Tech Stack

- **React 18**
- **TypeScript**
- **Chakra UI**
- **Axios**
- **Vite**
- **RAWG Video Games Database API**

---

## 📂 Project Structure

src/
│
├── components/ # Reusable UI components
├── hooks/ # Custom React hooks
├── services/ # API logic (axios instance)
├── assets/ # Images and static files
├── theme/ # Chakra UI theme configuration
└── main.tsx # Application entry point

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/your-username/game-hub.git
cd game-hub
```

### Install dependencies:

```bash
npm install
```

### Run the development server

```bash
npm run dev
```

### The app will be available at

```bash
http://localhost:5173
```

## 🔑 Environment Variables

### Create a .env file in the root directory:

```ts
VITE_RAWG_API_KEY=your_api_key_here
```

### Then update your axios instance:

```ts
params: {
key: import.meta.env.VITE_RAWG_API_KEY,
}
```

## 🌍 API

### This project uses the RAWG Video Games Database API.

Documentation:
https://rawg.io/apidocs

## 🚀 Deployment

### To deploy with Vercel:

```bash
npm i -g vercel
vercel
```

### Or connect your GitHub repository directly through the Vercel dashboard.

## 👨‍💻 Author

GitHub: https://github.com/vasylpryimakdev
LinkedIn: https://www.linkedin.com/in/vasyl-pryimak-64a204384
