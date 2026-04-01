import React from 'react';
import { Link } from 'react-router-dom';
import { teamMembers, calculateTeamAverages } from '../data/mockData';
import MetricsCard from '../components/MetricsCard';
import '../styles/Dashboard.css';

function Dashboard() {
  const teamAvg = calculateTeamAverages();

  return (
    <div className="dashboard">
      <h1>Dashboard - Russian Team Metrics Overview</h1>
      
      <div className="dashboard-summary">
        <div className="summary-box">
          <h3>Team Size</h3>
          <p className="big-number">{teamMembers.length}</p>
          <span>Active Members</span>
        </div>
        <div className="summary-box">
          <h3>Team Utilization</h3>
          <p className="big-number">{teamAvg.utilization}%</p>
          <span>Average</span>
        </div>
        <div className="summary-box">
          <h3>Team PKT Score</h3>
          <p className="big-number">{teamAvg.pktScore}</p>
          <span>Average Quality</span>
        </div>
      </div>

      <div className="dashboard-grid">
        <Link to="/team" className="dashboard-card team-card">
          <div className="card-icon">
            <i className="fas fa-users"></i>
          </div>
          <div className="card-content">
            <h2>Team Metrics</h2>
            <p>View aggregated team performance and statistics</p>
          </div>
        </Link>

        <Link to="/individual" className="dashboard-card individual-card">
          <div className="card-icon">
            <i className="fas fa-user-circle"></i>
          </div>
          <div className="card-content">
            <h2>Individual Metrics</h2>
            <p>Browse and compare individual team member performance</p>
          </div>
        </Link>
      </div>

      <div className="dashboard-metrics">
        <h2>Key Metrics Overview</h2>
        <div className="metrics-grid">
          <MetricsCard 
            title="Video AHT" 
            value={teamAvg.videoAHT} 
            unit="minutes"
            color="#3498db"
          />
          <MetricsCard 
            title="Comments AHT" 
            value={teamAvg.commentsAHT} 
            unit="minutes"
            color="#2ecc71"
          />
          <MetricsCard 
            title="Utilization" 
            value={teamAvg.utilization} 
            unit="%"
            color="#e74c3c"
          />
          <MetricsCard 
            title="Quality Score" 
            value={teamAvg.pktScore} 
            unit="pts"
            color="#f39c12"
          />
        </div>
      </div>
    </div>
  );
}

export default Dashboard;
