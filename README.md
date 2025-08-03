# 🌟 Rohit Patil - Portfolio Website

A modern, responsive portfolio website built with Next.js, showcasing my journey as a Full Stack Developer with 3+ years of project experience.

## 🚀 Live Demo

[View Live Portfolio](https://your-portfolio-url.vercel.app) <!-- Replace with your actual URL -->

## 📋 Table of Contents

- [About](#about)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Installation](#installation)
- [Environment Setup](#environment-setup)
- [Usage](#usage)
- [Project Structure](#project-structure)
- [Components](#components)
- [Contact Form](#contact-form)
- [Deployment](#deployment)
- [Contributing](#contributing)
- [License](#license)

## 🎯 About

This portfolio website represents my journey as a passionate Full Stack Developer. With over 3 years of hands-on project experience, I specialize in building robust, scalable web applications using modern technologies. The portfolio showcases my projects, skills, education, and provides a way for potential clients and employers to connect with me.

## ✨ Features

### 🎨 Design & UI

- **Modern Design**: Clean, professional interface with smooth animations
- **Responsive Layout**: Fully responsive design that works on all devices
- **Dark Theme**: Elegant dark theme with gradient accents
- **Smooth Animations**: Framer Motion powered animations and transitions
- **Interactive Elements**: Hover effects, 3D cards, and dynamic components

### 🔧 Functionality

- **Dynamic Typing Effect**: Animated role titles on the home page
- **Intersection Observer**: Smooth section visibility animations
- **Contact Form**: Functional contact form with multiple handling options
- **Project Showcase**: Interactive project cards with live demos
- **Skills Visualization**: Animated skill progress indicators
- **Education Timeline**: Interactive education journey display

### 📱 Sections

- **Home**: Hero section with introduction and call-to-action
- **About**: Personal story and development journey
- **Skills**: Technical skills with proficiency levels
- **Education**: Academic background and learning journey
- **Projects**: Portfolio of completed projects
- **Contact**: Multiple ways to get in touch

## 🛠️ Tech Stack

### Frontend

- **Framework**: Next.js 15.4.4 (React 19.1.0)
- **Styling**: Tailwind CSS 4.0
- **Animations**: Framer Motion 12.23.9
- **Icons**: Tabler Icons React, Lucide React
- **Typography**: Next.js Font Optimization

### Backend & Database

- **API Routes**: Next.js API routes
- **Database**: MongoDB with Mongoose (contact form)
- **Email Service**: Nodemailer (Gmail SMTP)

### Development Tools

- **Language**: TypeScript 5.0
- **Build Tool**: Next.js with Turbopack
- **Linting**: ESLint
- **Package Manager**: npm

### UI Components

- **Radix UI**: Accessible component primitives
- **Custom Components**: Hand-crafted UI components
- **3D Effects**: Custom 3D card components
- **Gradient Effects**: Custom gradient animations

## 🚀 Installation

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn
- Git

### Clone the Repository

```bash
git clone https://github.com/rohitp-18/my-portfolio.git
cd my-portfolio
```

### Install Dependencies

```bash
npm install
# or
yarn install
```

## ⚙️ Environment Setup

### 1. Create Environment File

```bash
cp .env.example .env.local
```

### 2. Configure Environment Variables

```env
# MongoDB Database
MONGODB_URI=your-mongodb-connection-string

# Email Configuration (for contact form)
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-app-specific-password
```

### 3. MongoDB Setup

1. Create a MongoDB Atlas account
2. Create a new cluster
3. Get your connection string
4. Replace `MONGODB_URI` in `.env.local`

### 4. Email Setup (Gmail)

1. Enable 2-factor authentication on Gmail
2. Generate an App Password
3. Use the app password in `EMAIL_PASS`

## 🎮 Usage

### Development

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Start production server
npm start

# Lint code
npm run lint
```

### Access the Application

- **Local Development**: http://localhost:3000
- **Production**: Your deployed URL

## 📁 Project Structure

```
my-portfolio/
├── public/                 # Static assets
│   ├── file.svg
│   ├── globe.svg
│   ├── next.svg
│   ├── vercel.svg
│   └── window.svg
├── src/
│   ├── app/               # Next.js App Router
│   │   ├── api/           # API routes
│   │   │   └── contact/   # Contact form API
│   │   ├── globals.css    # Global styles
│   │   ├── layout.tsx     # Root layout
│   │   └── page.tsx       # Home page
│   ├── components/        # React components
│   │   ├── main/          # Main page sections
│   │   │   ├── about.tsx
│   │   │   ├── contact.tsx
│   │   │   ├── educations.tsx
│   │   │   ├── footer.tsx
│   │   │   ├── home.tsx
│   │   │   ├── loader.tsx
│   │   │   ├── project.tsx
│   │   │   ├── skills.tsx
│   │   │   └── spotlight.tsx
│   │   ├── ui/            # UI components
│   │   │   ├── 3d-card.tsx
│   │   │   ├── avatar.tsx
│   │   │   ├── button.tsx
│   │   │   ├── hover-border-gradient.tsx
│   │   │   └── resizable-navbar.tsx
│   │   ├── navbar.tsx     # Navigation
│   │   └── theme-provider.tsx
│   ├── hooks/             # Custom React hooks
│   │   └── useContactForm.ts
│   └── lib/               # Utility functions
│       └── utils.ts       # General utilities
├── .env.local            # Environment variables
├── .env.example          # Environment template
├── components.json       # Shadcn/ui config
├── next.config.ts        # Next.js configuration
├── tailwind.config.js    # Tailwind CSS config
├── tsconfig.json         # TypeScript config
├── package.json          # Dependencies
└── README.md            # Project documentation
```

## 🧩 Components

### Main Sections

- **Home**: Hero section with animated typing effect
- **About**: Personal introduction and journey
- **Skills**: Technical skills with animated progress bars
- **Education**: Academic timeline with interactive elements
- **Projects**: Portfolio showcase with live demos
- **Contact**: Multi-channel contact form

### UI Components

- **3D Card**: Interactive card component with 3D effects
- **Hover Border Gradient**: Animated gradient border buttons
- **Background Beams**: Animated background effects
- **Animated Testimonials**: Sliding testimonial carousel

## 📧 Contact Form

The contact form supports MongoDB storage:

### MongoDB Storage

- Saves all submissions to MongoDB database
- Direct form submission handling

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Connect repository to Vercel
3. Add environment variables in Vercel dashboard
4. Deploy automatically

### Manual Deployment

```bash
# Build the project
npm run build

# Start production server
npm start
```

### Environment Variables for Production

Ensure all environment variables are properly set in your hosting platform:

- `MONGODB_URI`

## 🎨 Customization

### Colors & Themes

- Modify `tailwind.config.js` for color schemes
- Update gradient combinations in components
- Customize animation durations and effects

### Content Updates

- Update personal information in component files
- Replace project data with your own projects
- Modify skill sets and proficiency levels
- Update education and experience details

### Adding New Sections

1. Create component in `src/components/main/`
2. Add to main page layout
3. Update navigation links
4. Add intersection observer for animations

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit changes (`git commit -m 'Add AmazingFeature'`)
4. Push to branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## 📄 License

This project is licensed under the ISC License - see the [LICENSE](LICENSE) file for details.

## 🙏 Acknowledgments

- **Next.js Team**: For the amazing React framework
- **Tailwind CSS**: For the utility-first CSS framework
- **Framer Motion**: For smooth animations
- **Radix UI**: For accessible component primitives
- **Tabler Icons**: For beautiful SVG icons

## 📞 Contact

**Rohit Patil** - Full Stack Developer

- **Portfolio**: [Your Portfolio URL]
- **Email**: rohitpatil18@hotmail.com
- **LinkedIn**: [linkedin.com/in/rohit-patil18](https://www.linkedin.com/in/rohit-patil18/)
- **GitHub**: [github.com/rohitp-18](https://github.com/rohitp-18)
- **WhatsApp**: [+91 93569 71002](https://api.whatsapp.com/send/?phone=919356971002)

---

⭐ **If you found this portfolio helpful, please give it a star!**

Built with ❤️ by Rohit Patil
