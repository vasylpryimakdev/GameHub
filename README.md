# 🎮 Game Hub

A modern and responsive React application for discovering video games using the RAWG API.

Game Hub allows users to browse games, filter them by platform and release date, and explore detailed information in a clean and intuitive UI.

---

## 🚀 Live Demo

🔗 **Play the app here:**  
https://game-hub-ten-rho.vercel.app/

---

## ✨ Features

- 🔍 Search games
- 🎮 Filter by platform
- 🗂 Filter by genre
- 📊 Sort games (rating, popularity, release date, etc.)
- 📜 Infinite scrolling
- 🌙 Dark / Light mode
- 🎥 Game trailers
- 🖼 Game screenshots
- 📄 Detailed game pages
- ⚡ Fast data fetching with caching

---

## 🛠 Tech Stack

### Frontend
- **⚛️ React**
- **🔷 TypeScript**
- **⚡ Vite**

### State & Data
- **🔄 React Query (TanStack Query) – server state management**
- **🐻 Zustand – global UI state**

### UI
- **🎨 Chakra UI**
- **React Icons**

### Routing
- **React Router**

### API
- **RAWG Video Games Database API**

### Fetching
- **Axios**

---

## 📸 Application Pages

### Home Page
 Browse games with filters and infinite scrolling.

#### Features:
- platform filtering
- genre filtering
- sorting
- search
- infinite scroll

### Game Detail Page
 Displays detailed information about a selected game.

#### Includes:
- game description
- platforms
- publishers
- Metacritic score
- screenshots
- trailers

---

## 📂 Project Structure

```
src
│
├── assets        # Images and static files
├── components    # Reusable UI components
├── data          # Static fallback data
├── entities      # TypeScript interfaces
├── hooks         # Custom React hooks
├── pages         # Application pages
├── services      # API logic
├── store         # Zustand global store
├── theme         # Chakra UI theme configuration
│
├── main.tsx
└── routes.tsx
```

---

## 🧠 Key Concepts

### React Query

Used for server state management:

- data fetching
- caching
- background refetching
- pagination
- infinite scrolling

### Zustand

Global state management for:

- selected platform
- selected genre
- sorting
- search query

### API Client Abstraction

Reusable API client built with Axios that allows easy interaction with multiple endpoints.

---

## 🎨 UI Features

- Fully responsive layout
- Dark mode support
- Hover animations
- Skeleton loading states
- Grid layout with Chakra UI

---

## ⚡ Performance Optimizations

- React Query caching
- Infinite scrolling
- Skeleton loaders during data fetching
- Image optimization using RAWG CDN

---

## 📦 Installation

Clone the repository:

```bash
git clone https://github.com/vasylpryimakdev/GameHub.git
cd GameHub
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
