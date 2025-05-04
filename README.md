# 🎱 Magic Eight Ball

> A React simulation of the classic Magic Eight Ball toy — click the ball to receive a random answer and color.

[![React](https://img.shields.io/badge/react-18%2B-blue)](https://reactjs.org/)

---

## 📋 Table of Contents

1. [About](#about)  
2. [Features](#features)  
3. [Tech Stack](#tech-stack)  
4. [Getting Started](#getting-started)  
   - [Prerequisites](#prerequisites)  
   - [Installation](#installation)  
5. [Usage](#usage)  
6. [Contributing](#contributing)  
7. [Contact](#contact)  

---

## 🌟 About

**Magic Eight Ball** is a small React app that mimics the toy’s behavior. Initially, the ball reads **“Think of a Question”** on a black background. When you click the ball, it randomly selects one of the provided answers, updates its message text, and changes its background color accordingly.

---

## ✨ Features

- **Randomized Responses**: Click the ball to get one of 20 classic Magic Eight Ball answers.  
- **Dynamic Styling**: Ball background color changes (green, goldenrod, or red) based on the answer quality.  
- **Reusable Component**: All answer data is passed as a prop for easy customization.  

---

## 🛠 Tech Stack

- **Library:** React 18+ (functional components)  
- **State Management:** `useState` hook  
- **Styling:** CSS 
- **Build Tool:** Create React App or Vite  

---

## 🏁 Getting Started

### Prerequisites

- Node.js v14 or higher  
- npm (bundled with Node.js) or Yarn  

### Installation

```bash
# 1. Clone the repo
git clone https://github.com/malmonte827/EightBall.git
cd EightBall

# 2. Install dependencies
npm install
# or
yarn

# 3. Start the development server
npm start
# or
yarn start
```
---
### 📖 Usage

1. Initial State: Ball displays “Think of a Question” on a black background.

2. Get Answer: Click the ball—its message and background color update randomly.

3. Repeat: Click again to get another random answer.
---

## Contributing

We welcome contributions! To contribute:

- Fork the repository

- Create a new branch (git checkout -b feature-name)

- Commit your changes (git commit -m 'Add new feature')

- Push to the branch (git push origin feature-name)

- Open a pull request

## Contact

For questions or suggestions, reach out:

- Email: malmonte827@gmail.com
