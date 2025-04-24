# 📊 Real-Time Crypto Price Tracker  
*A React + Redux Toolkit application simulating live cryptocurrency price updates*

<iframe width="560" height="315" src="https://www.youtube.com/embed/ukwTpGbrhL8?si=02acHhauEH5nzoQD" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>

## 🛠️ Tech Stack  
| Category       | Technologies                                                                 |
|----------------|-----------------------------------------------------------------------------|
| **Frontend**   | React 18, Redux Toolkit                     |
| **Build Tool** | Vite 4+                                                                    |
| **Styling**    | CSS                                             |

## 🏗️ Architecture Overview
```mermaid
graph TD
  A[UI Components] -->|useSelector| B(Redux Store)
  C[Mock WebSocket Service] -->|dispatch| B
  B -->|Props| A
  D[User Interactions] -->|dispatch| B

# 🚀 Setup Instructions

## Prerequisites
- [Node.js](https://nodejs.org/) v20 or higher
- [npm](https://www.npmjs.com/) v10+ or [yarn](https://yarnpkg.com/)
- Git (for version control)

## Installation

### 1. Clone the repository
```bash
git clone https://github.com/your-username/crypto-tracker.git
cd crypto-tracker

### 2. Install dependencies
```bash
npm install
# or
yarn install

### 2. Run npm run dev
```bash
npm run dev

Starts the development server at http://localhost:5173 with hot reloading.
