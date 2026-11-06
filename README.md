# Modern Portfolio Website

A stunning, modern portfolio website built with **Angular**, featuring a beautiful green color theme and a dynamic theme switcher.

## ✨ Features

- 🎨 **Dynamic Theme Switcher** - Choose from 4 beautiful color themes (Green, Purple, Blue, Orange)
- 💅 **Modern Design** - Glassmorphism effects, smooth gradients, and micro-animations
- 📱 **Fully Responsive** - Optimized for all devices and screen sizes
- ⚡ **Fast Performance** - Built with Angular's latest features and optimizations
- 🎯 **Smooth Scrolling** - Seamless navigation between sections
- 🌟 **Premium UI** - Custom components with modern styling and animations

## 🎨 Sections

1. **Hero Section** - Eye-catching introduction with animated tech cards and statistics
2. **Projects** - Showcase your work with beautiful project cards
3. **Experience** - Timeline view of your professional journey
4. **Contact** - Get in touch form with social media links

## 🚀 Getting Started

### Prerequisites

- Node.js 24.15.0 (the version specified in `.nvmrc`)
- npm (v10 or higher)

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm start

# Build for production
npm run build
```

The application will be available at `http://localhost:4200/`

## 🎨 Theme Customization

The portfolio comes with 4 pre-built themes:

- **Green** (Default) - Fresh and vibrant
- **Purple** - Elegant and professional
- **Blue** - Clean and modern
- **Orange** - Warm and energetic

Click the palette icon in the header to switch between themes. Your preference is saved in localStorage.

## 📝 Customization

### Update Your Information

1. **Hero Section** (`src/app/components/hero/hero.html`)
   - Update your name and title
   - Modify the statistics
   - Update the tech cards

2. **Projects** (`src/app/components/projects/projects.ts`)
   - Add your projects to the `projects` array
   - Update project details, technologies, and links

3. **Experience** (`src/app/components/experience/experience.ts`)
   - Add your work experience to the `experiences` array
   - Update job titles, companies, and descriptions

4. **Contact** (`src/app/components/contact/contact.html`)
   - Update your contact information
   - Modify social media links in `contact.ts`

### Add More Themes

Edit `src/app/services/theme.service.ts` to add new color themes:

```typescript
yourTheme: {
  name: 'yourTheme',
  label: 'Your Theme',
  primaryGradient: 'linear-gradient(...)',
  secondaryGradient: 'linear-gradient(...)',
  accentGradient: 'linear-gradient(...)',
  primaryColor: '#yourColor',
  secondaryColor: '#yourColor'
}
```

## 🛠️ Technologies Used

- **Angular 22** - Modern web framework
- **PrimeFlex** - Utility CSS framework
- **PrimeIcons** - Icon font
- **TypeScript** - Type-safe development
- **CSS3** - Modern styling with variables and animations

## 📦 Project Structure

```
my-portfolio/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── header/        # Navigation with theme switcher
│   │   │   ├── hero/          # Hero section
│   │   │   ├── projects/      # Projects showcase
│   │   │   ├── experience/    # Work experience timeline
│   │   │   └── contact/       # Contact form
│   │   ├── services/
│   │   │   └── theme.service.ts  # Theme management
│   │   ├── app.ts             # Root component
│   │   └── app.config.ts      # App configuration
│   ├── styles.css             # Global styles
│   └── index.html             # Entry HTML
├── angular.json               # Angular configuration
└── package.json              # Dependencies
```

## 🎯 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 📄 License

This project is open source and available under the MIT License.

## 🤝 Contributing

Feel free to fork this project and customize it for your own portfolio!

---

**Built with ❤️ using Angular**
