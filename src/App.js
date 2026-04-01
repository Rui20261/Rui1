import React from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Dashboard from './pages/Dashboard';
import TeamMetrics from './pages/TeamMetrics';
import IndividualMetrics from './pages/IndividualMetrics';
import TeamMember from './pages/TeamMember';
import './styles/App.css';

function App() {
  return (
    <div className="app-container">
      <nav className="navbar">
        <div className="nav-brand">
          <i className="fas fa-chart-line"></i>
          <span>Russian Team Metrics</span>
        </div>
        <ul className="nav-links">
          <li><Link to="/">Dashboard</Link></li>
          <li><Link to="/team">Team Metrics</Link></li>
          <li><Link to="/individual">Individual Metrics</Link></li>
        </ul>
      </nav>

      <main className="main-content">
        <Switch>
          <Route exact path="/" component={Dashboard} />
          <Route path="/team" component={TeamMetrics} />
          <Route path="/individual" component={IndividualMetrics} />
          <Route path="/member/:id" component={TeamMember} />
        </Switch>
      </main>
    </div>
  );
}

export default App;
