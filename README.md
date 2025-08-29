# WaditaSlim Technologies

A modern, responsive website for WaditaSlim Technologies - an innovative IT solutions company. Built with vanilla JavaScript, CSS3, and HTML5, featuring smooth animations, interactive components, and a professional design.

## 🚀 Features

- **Responsive Design**: Mobile-first approach with modern CSS Grid and Flexbox
- **Interactive Navigation**: Smooth scrolling navigation with active state management
- **Dynamic Content**: JavaScript-powered content management for projects, services, and team members
- **Smooth Animations**: CSS animations and transitions for enhanced user experience
- **Modern UI/UX**: Clean, professional design with attention to detail
- **Performance Optimized**: Fast loading with optimized assets and efficient code structure

## 🛠️ Technologies Used

- **Frontend**: HTML5, CSS3, Vanilla JavaScript (ES6+)
- **Build Tool**: Vite
- **CSS Framework**: Custom CSS with CSS Variables and Grid/Flexbox
- **Icons**: Font Awesome 6.4.0
- **Slider**: Swiper.js for team member carousel
- **Assets**: WebP images for optimal performance

## 📁 Project Structure

```
waditaslim/
├── index.html              # Main HTML file
├── style.css              # Main stylesheet
├── main.js                # Entry point JavaScript
├── package.json           # Project dependencies and scripts
├── js/                    # JavaScript modules
│   ├── main.js           # Main entry point
│   ├── navigation.js     # Navigation functionality
│   ├── animations.js     # Animation utilities
│   ├── projects-manager.js # Projects data management
│   ├── services-manager.js # Services data management
│   ├── team-swiper.js    # Team member carousel
│   ├── testimonials.js   # Testimonials functionality
│   ├── contact.js        # Contact form handling
│   └── utils.js          # Utility functions
├── styles/                # CSS organization
│   ├── main.css          # Main stylesheet
│   ├── variables.css     # CSS custom properties
│   ├── reset.css         # CSS reset/normalize
│   ├── layout.css        # Layout components
│   ├── components.css    # Reusable components
│   ├── sections.css      # Page section styles
│   ├── responsive.css    # Media queries
│   └── animations.css    # Animation definitions
└── public/                # Static assets
    ├── logo.webp         # Company logo
    ├── footerlogo.webp   # Footer logo
    ├── members/          # Team member images
    ├── projects/         # Project screenshots
    └── waditaslim_logo.jpeg # Company logo (JPEG)
```

## 🚀 Getting Started

### Prerequisites

- Node.js (version 14 or higher)
- npm or yarn package manager

### Installation

1. **Clone the repository**
   ```bash
   git clone <repository-url>
   cd waditaslim
   ```

2. **Install dependencies**
   ```bash
   npm install
   ```

3. **Start development server**
   ```bash
   npm run dev
   ```

4. **Open your browser**
   Navigate to `http://localhost:5173` (or the port shown in your terminal)

### Build for Production

```bash
npm run build
```

### Preview Production Build

```bash
npm run preview
```

## 📱 Sections

The website includes the following main sections:

- **Hero Section**: Company introduction and call-to-action
- **Services**: IT solutions and services offered
- **About**: Company information and mission
- **Projects**: Portfolio of completed work
- **Testimonials**: Client feedback and reviews
- **Team**: Team member profiles and information
- **Contact**: Contact form and company details

## 🎨 Customization

### Adding New Projects

Edit `js/projects-data.js` to add new projects:

```javascript
{
  id: 'project-id',
  title: 'Project Title',
  description: 'Project description',
  image: './public/projects/project-image.png',
  technologies: ['HTML', 'CSS', 'JavaScript'],
  link: 'https://project-url.com'
}
```

### Adding New Services

Edit `js/services-data.js` to add new services:

```javascript
{
  id: 'service-id',
  title: 'Service Title',
  description: 'Service description',
  icon: 'fas fa-code',
  features: ['Feature 1', 'Feature 2', 'Feature 3']
}
```

### Adding Team Members

Edit `js/team-data.js` to add new team members:

```javascript
{
  id: 'member-id',
  name: 'Member Name',
  position: 'Job Title',
  image: './public/members/member-image.jpg',
  bio: 'Member biography',
  social: {
    linkedin: 'https://linkedin.com/in/username',
    github: 'https://github.com/username'
  }
}
```

## 🔧 Development

### Code Style

- Use ES6+ JavaScript features
- Follow semantic HTML structure
- Use CSS custom properties for consistent theming
- Maintain responsive design principles

### File Organization

- Keep JavaScript modules focused and single-purpose
- Organize CSS by component and functionality
- Use descriptive file and folder names
- Maintain consistent import/export patterns

## 📊 Performance

- Optimized images in WebP format
- Minified CSS and JavaScript for production
- Efficient DOM manipulation
- Lazy loading for better performance

## 🌐 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## 📝 License

This project is proprietary to WaditaSlim Technologies.

## 🤝 Contributing

For internal development and contributions, please follow the established coding standards and review process.

## 📞 Support

For technical support or questions about this project, please contact the development team at WaditaSlim Technologies.

---

**Built with ❤️ by WaditaSlim Technologies** 