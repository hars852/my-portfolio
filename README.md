<div align="center">

# 🚀 Harsh Prajapati — Personal Portfolio Website

[![React](https://img.shields.io/badge/React-19.2-61DAFB?style=for-the-badge&logo=react&logoColor=black)](https://react.dev/)
[![Vite](https://img.shields.io/badge/Vite-8.0-646CFF?style=for-the-badge&logo=vite&logoColor=white)](https://vitejs.dev/)
[![Netlify](https://img.shields.io/badge/Netlify-Ready-00C7B7?style=for-the-badge&logo=netlify&logoColor=white)](https://www.netlify.com/)
[![GitHub](https://img.shields.io/badge/GitHub-hars852-181717?style=for-the-badge&logo=github&logoColor=white)](https://github.com/hars852)
[![LinkedIn](https://img.shields.io/badge/LinkedIn-Harsh_Prajapati-0A66C2?style=for-the-badge&logo=linkedin&logoColor=white)](https://www.linkedin.com/in/harsh-prajapati-982304293/)
[![WhatsApp](https://img.shields.io/badge/WhatsApp-Chat_Now-25D366?style=for-the-badge&logo=whatsapp&logoColor=white)](https://wa.me/919313945479)

<p align="center">
  A modern, high-performance, and responsive developer portfolio website showcasing professional frontend architecture, MERN stack web applications, and AI-assisted workflows.
</p>

[✨ View Demo](https://harsh-prajapati.netlify.app) • [💼 LinkedIn](https://www.linkedin.com/in/harsh-prajapati-982304293/) • [💬 WhatsApp](https://wa.me/919313945479) • [📫 Email](mailto:hp0920230@gmail.com)

</div>

---

## 📌 Overview

This repository houses the source code for the personal portfolio of **Harsh Prajapati**, a **Frontend & MERN Stack Developer** currently working at **Limbani Software**.

The application is built with modern web technologies focusing on smooth user interactions, glassmorphism aesthetics, single-page navigation, ATS-friendly resume generation, and direct one-click communication channels (WhatsApp & Email).

---

## ✨ Key Features

- **🎨 Modern Dark Glassmorphism Design:** Beautiful dark-themed aesthetic with interactive glowing elements, blurred glass surfaces, and responsive navigation.
- **⚡ Blazing Fast Performance:** Powered by Vite 8 with optimized production bundle splitting and asset caching.
- **📱 100% Fully Responsive:** Tailored layouts for desktop, tablet, and mobile screens.
- **📄 ATS-Optimized Printable 1-Page Resume:**
  - In-browser interactive preview.
  - Formatted 1-page paper view with a one-click PDF print/download engine (`window.print()`).
- **💬 Direct Instant Reach:**
  - One-click **WhatsApp** integration ([https://wa.me/919313945479](https://wa.me/919313945479)) for immediate conversations.
  - Direct **Email** client composer (`mailto:hp0920230@gmail.com`) with pre-filled inquiry subjects.
- **📂 Categorized Project Showcase:** Interactive filtering across Full Stack & E-Commerce, Frontend & UI, Web Apps, and CMS & SEO.
- **🌐 Netlify SPA Ready:** Complete with `netlify.toml` and `public/_redirects` to eliminate 404 errors during client-side route reloads.

---

## 🛠️ Tech Stack & Libraries

| Domain | Technologies & Libraries |
| :--- | :--- |
| **Frontend Core** | React 19, JavaScript (ESNext), HTML5, Modern CSS3 |
| **Tooling & Build** | Vite 8, ESLint 10, Rolldown / Rollup bundler |
| **Routing** | React Router DOM v7 (Single Page Application architecture) |
| **Icons & Effects** | Lucide React, React Type Animation |
| **Deployment** | Netlify (Automated CI/CD, SPA Redirects) |

---

## 📂 Project Directory Structure

```plaintext
hasrh-portfolio/
├── public/
│   ├── _redirects          # Netlify SPA redirect rules (prevents 404 on refresh)
│   └── favicon.svg         # App favicon
├── src/
│   ├── assets/             # Images, icons, and graphic assets
│   ├── components/
│   │   ├── Sidebar.jsx     # Navigation sidebar with profile, routes & social links
│   │   └── Sidebar.css     # Sidebar glass styling
│   ├── pages/
│   │   ├── Dashboard.jsx   # Hero section, stats counters & skill bars
│   │   ├── Dashboard.css   # Dashboard styles & animations
│   │   ├── About.jsx       # Biography, career background & facts
│   │   ├── Skills.jsx      # Comprehensive technical skillset cards
│   │   ├── Experience.jsx  # Limbani Software & Enlighten Infosystems timeline
│   │   ├── Projects.jsx    # Portfolio projects showcase with category filters
│   │   ├── Certifications.jsx # Certified credentials showcase
│   │   ├── Education.jsx   # Academic background (B.E. Information Technology)
│   │   ├── Resume.jsx      # 1-Page ATS Resume viewer and PDF print engine
│   │   ├── Contact.jsx     # Instant WhatsApp & Direct Email communication
│   │   └── Page.css        # Global page styles, cards, and print media rules
│   ├── App.jsx             # Route definitions & base layout
│   ├── App.css             # Layout container & background glow effects
│   ├── index.css           # Global typography, color variables, and resets
│   └── main.jsx            # React root DOM entry
├── netlify.toml            # Netlify build configuration file
├── package.json            # Project dependencies and npm scripts
├── vite.config.js          # Vite bundler configuration
└── README.md               # Project documentation
```

---

## 🚀 Projects Highlighted

1. **TechBazaar:** Full-Stack MERN E-Commerce platform with secure checkout, invoice generation, product catalog, and administrative control.
2. **Netflix Clone:** Streaming platform user interface built with React.js, responsive layouts, dynamic catalog sliders, and REST API integration. • [Live Demo](https://cinimer.netlify.app/)
3. **Food Restaurant App:** Interactive menu browsing, cart management, and ordering workflow designed for smooth user experience.
4. **Dating App UI:** Touch-friendly, modern dating platform UI showcasing fluid layouts and design systems. • [Live Demo](https://vocal-donut-1f162e.netlify.app/step1)
5. **BookHub:** Responsive book exploration and search filtering catalog.
6. **WordPress Business Website:** Fast, SEO-optimized business website designed with custom layouts and responsive principles.

---

## 💻 Getting Started (Local Development)

### 1. Prerequisites
Ensure you have Node.js installed on your machine:
- **Node.js:** v18.0.0 or higher
- **npm:** v9.0.0 or higher

### 2. Clone the Repository
```bash
git clone https://github.com/hars852/portfolio.git
cd portfolio
```

### 3. Install Dependencies
```bash
npm install
```

### 4. Run Development Server
```bash
npm run dev
```
Open your browser and navigate to `http://localhost:5173`.

### 5. Build for Production
```bash
npm run build
```
The optimized production bundle will be generated inside the `dist/` directory.

---

## 🌐 Deploy to Netlify

This project includes pre-configured **`netlify.toml`** and **`public/_redirects`** files for zero-configuration Netlify deployment:

1. Push your code to your GitHub repository ([github.com/hars852](https://github.com/hars852)).
2. Log in to [Netlify](https://app.netlify.com/).
3. Click **"Add new site"** ➔ **"Import an existing project"** ➔ **GitHub**.
4. Select your **portfolio** repository.
5. The build settings will automatically be detected:
   - **Build Command:** `npm run build`
   - **Publish Directory:** `dist`
6. Click **"Deploy site"** and your site will be live!

---

## 👤 Author & Contact

**Harsh Prajapati**  
*Frontend & MERN Stack Developer*  
📍 Halol, Gujarat, India  

- **GitHub:** [@hars852](https://github.com/hars852)
- **LinkedIn:** [harsh-prajapati-982304293](https://www.linkedin.com/in/harsh-prajapati-982304293/)
- **WhatsApp:** [+91 93139 45479](https://wa.me/919313945479)
- **Email:** [hp0920230@gmail.com](mailto:hp0920230@gmail.com)

---

<div align="center">
  <sub>Designed &amp; Developed by <strong>Harsh Prajapati</strong>. Feel free to star ⭐ this repository if you find it helpful!</sub>
</div>
