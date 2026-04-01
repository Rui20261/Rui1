# Russian Team Metrics Management Application

A comprehensive React-based metrics management system for tracking and analyzing team performance for the Russian team. This application provides real-time visibility into individual and team-level metrics.

## 🎯 Features

### 📊 Dashboard
- Overview of team metrics and key performance indicators
- Quick access to team and individual metrics sections
- Team summary statistics
- Real-time metric cards

### 👥 Team Metrics
- **Aggregated Performance Metrics:**
  - Utilization: Average team utilization rate
  - Video AHT: Average Handle Time for video interactions
  - Comments AHT: Average Handle Time for comments
  - PKT Score: Quality/Performance score

- **Workforce Activity (WFA) Breakdown:**
  - Login/Logout tracking
  - Exposure time
  - Case work time
  - General breaks
  - Translation support
  - Vertical training
  - Default activities
  - System updates

### 👤 Individual Metrics
- Browse all team members with their performance metrics
- **Sorting options:**
  - Name (A-Z)
  - Utilization (Highest)
  - Quality Score (Highest)
  - Video AHT (Lowest)
  - Tenure (Newest)
- Quick view of key metrics for each member
- Visual progress bars for utilization

### 📋 Team Member Details
- **Detailed Individual Profile Including:**
  - Contact information
  - Position and employment information
  - Tenure calculation (years/months employed)
  - Individual performance metrics
  - Detailed WFA breakdown
  - Complete information table

## 📁 Project Structure

```
russian-team-metrics/
├── public/
│   └── index.html              # HTML entry point
├── src/
│   ├── components/
│   │   ├── MetricsCard.js      # Reusable metrics display component
│   │   └── WFABreakdown.js     # Workforce Activity breakdown component
│   ├── pages/
│   │   ├── Dashboard.js        # Main dashboard page
│   │   ├── TeamMetrics.js      # Team-level metrics page
│   │   ├── IndividualMetrics.js# Individual metrics listing page
│   │   └── TeamMember.js       # Individual member detail page
│   ├── data/
│   │   └── mockData.js         # Mock team data and calculation functions
│   ├── styles/
│   │   ├── index.css           # Global styles
│   │   ├── App.css             # App component styles
│   │   ├── Dashboard.css       # Dashboard styles
│   │   ├── TeamMetrics.css     # Team metrics styles
│   │   ├── IndividualMetrics.css
│   │   ├── TeamMember.css      # Member detail styles
│   │   ├── MetricsCard.css     # Metrics card component styles
│   │   └── WFABreakdown.css    # WFA breakdown component styles
│   ├── App.js                  # Main application component with routing
│   └── index.js                # React entry point
├── .gitignore                  # Git ignore file
├── package.json                # Project dependencies
└── README.md                   # This file
```

## 🌐 Available Routes

| Route | Page | Description |
|-------|------|-------------|
| `/` | Dashboard | Home page with overview |
| `/team` | Team Metrics | Aggregated team performance |
| `/individual` | Individual Metrics | Browse all team members |
| `/member/:id` | Member Details | Individual member profile |

## 📊 Metrics Explained

### Core Metrics
- **Utilization (%)**: Percentage of time team members are actively engaged in work
- **Video AHT (minutes)**: Average time spent handling video interactions
- **Comments AHT (minutes)**: Average time spent handling comment interactions
- **PKT Score (points)**: Overall quality/performance score

### Workforce Activity (WFA)
- **Login/Logout**: Number of login/logout events
- **Exposure Time**: Total time available for work
- **Case Work**: Active time spent on cases/tickets
- **General Breaks**: Time spent on general breaks
- **Translation Support**: Time spent on translation-related support
- **Vertical Training**: Time spent on training activities
- **Default**: Time in default/system mode
- **System Updates**: Time spent on system maintenance/updates

## 👥 Sample Team Members

The application includes 5 sample team members:
1. **Alexei Volkov** - Senior Agent (Joined: 2022-03-15)
2. **Natasha Petrov** - Agent (Joined: 2021-07-22)
3. **Boris Sokolov** - Junior Agent (Joined: 2023-01-10)
4. **Svetlana Ivanova** - Senior Agent (Joined: 2020-11-05)
5. **Igor Kuznetsov** - Agent (Joined: 2022-05-18)

## 🚀 Getting Started

### Prerequisites
- Node.js (v12 or higher)
- npm or yarn

### Installation

1. **Clone the repository** (or download the files):
```bash
git clone https://github.com/Rui20261/Rui1.git
cd Rui1
```

2. **Install dependencies**:
```bash
npm install
```

3. **Start the development server**:
```bash
npm start
```

4. **Open your browser** and navigate to:
```
http://localhost:3000
```

The app will automatically reload if you make changes.

## 🛠️ Available Scripts

### `npm start`
Runs the app in development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm build`
Builds the app for production in the `build` folder.

### `npm test`
Launches the test runner in interactive watch mode.

### `npm eject`
**Note: this is a one-way operation. Once you eject, you can't go back!**

## 🎨 Design & Styling

- **Color Scheme**: Purple gradient (#667eea to #764ba2) with accent colors
- **Responsive Design**: Works on desktop, tablet, and mobile devices
- **Animations**: Smooth transitions and fade-in effects
- **Icons**: Font Awesome 6.0 integration

## 🔄 Component Hierarchy

```
App
├── Navbar
├── Dashboard
│   ├── Summary Cards
│   ├── Quick Access Cards
│   └── MetricsCard Components
├── TeamMetrics
│   ├── MetricsCard Components
│   └── WFABreakdown
├── IndividualMetrics
│   ├── Sort Controls
│   └── Member Cards
│       ├── Member Info
│       ├── Member Metrics
│       └── Tenure Badge
└── TeamMember (Detail Page)
    ├── Member Header
    ├── MetricsCard Components
    ├── WFABreakdown
    └── Detail Table
```

## 🔮 Future Enhancements

- [ ] Database integration (MongoDB, PostgreSQL, etc.)
- [ ] Real API endpoints instead of mock data
- [ ] User authentication and authorization
- [ ] Advanced filtering and search
- [ ] Export data to PDF/Excel
- [ ] Data visualization with charts (Chart.js, Recharts)
- [ ] Performance trend analysis
- [ ] Customizable dashboards
- [ ] Real-time metric updates (WebSocket)
- [ ] Performance comparison between team members
- [ ] Historical data and analytics
- [ ] Mobile app version (React Native)

## 🛡️ Technologies Used

| Technology | Purpose |
|------------|---------|
| **React** | UI library and state management |
| **React Router** | Client-side routing and navigation |
| **CSS3** | Styling, gradients, and animations |
| **Font Awesome** | Icon library |
| **JavaScript (ES6+)** | Application logic |

## 📝 Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## 🤝 Contributing

To contribute to this project:

1. Create a new branch (`git checkout -b feature/your-feature`)
2. Make your changes
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

## 📄 License

This project is proprietary and intended for internal use by the Russian team management.

## 👨‍💼 Project Information

- **Team**: Russian Team
- **Created**: April 2026
- **Version**: 1.0.0
- **Status**: Active Development

## 💡 Tips & Tricks

### Customizing Team Members
Edit `src/data/mockData.js` to modify team member data, add new members, or change metrics.

### Changing Colors
Update the gradient colors in CSS files (search for `#667eea` and `#764ba2`).

### Adding New Metrics
1. Add the metric to the mock data
2. Create a new MetricsCard in the appropriate page
3. Add styling if needed

## 🆘 Troubleshooting

### Port 3000 already in use
```bash
npm start -- --port 3001
```

### Dependencies issues
```bash
rm -rf node_modules
npm install
```

### Cache issues
```bash
npm cache clean --force
npm install
```

## 📞 Support

For issues or questions, please contact the development team.

---

**Happy coding! 🚀**
