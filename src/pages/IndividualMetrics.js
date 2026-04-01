import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { teamMembers } from '../data/mockData';
import '../styles/IndividualMetrics.css';

function IndividualMetrics() {
  const [sortBy, setSortBy] = useState('name');

  const sortedMembers = [...teamMembers].sort((a, b) => {
    switch(sortBy) {
      case 'utilization':
        return b.metrics.utilization - a.metrics.utilization;
      case 'pktScore':
        return b.metrics.pktScore - a.metrics.pktScore;
      case 'videoAHT':
        return a.metrics.videoAHT - b.metrics.videoAHT;
      case 'tenure':
        return new Date(a.joinDate) - new Date(b.joinDate);
      default:
        return a.name.localeCompare(b.name);
    }
  });

  const calculateTenure = (joinDate) => {
    const today = new Date();
    const join = new Date(joinDate);
    const years = Math.floor((today - join) / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor(((today - join) % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    return { years, months };
  };

  return (
    <div className="individual-metrics">
      <h1>Individual Team Member Metrics</h1>
      <p className="subtitle">Performance and information for each team member</p>

      <div className="controls">
        <div className="sort-control">
          <label htmlFor="sortSelect">Sort by:</label>
          <select id="sortSelect" value={sortBy} onChange={(e) => setSortBy(e.target.value)}>
            <option value="name">Name (A-Z)</option>
            <option value="utilization">Utilization (Highest)</option>
            <option value="pktScore">Quality Score (Highest)</option>
            <option value="videoAHT">Video AHT (Lowest)</option>
            <option value="tenure">Tenure (Newest)</option>
          </select>
        </div>
      </div>

      <div className="members-list">
        {sortedMembers.map((member) => {
          const tenure = calculateTenure(member.joinDate);
          
          return (
            <Link to={`/member/${member.id}`} key={member.id} className="member-card">
              <div className="member-header">
                <div className="member-info">
                  <h3>{member.name}</h3>
                  <p className="position">{member.position}</p>
                  <p className="email">{member.email}</p>
                </div>
                <div className="member-tenure">
                  <span className="tenure-badge">
                    <i className="fas fa-calendar"></i>
                    {tenure.years > 0 ? `${tenure.years}y ${tenure.months}m` : `${tenure.months}m`}
                  </span>
                </div>
              </div>

              <div className="member-metrics">
                <div className="metric-item">
                  <span className="metric-label">Utilization</span>
                  <span className="metric-value">{member.metrics.utilization}%</span>
                  <div className="metric-bar">
                    <div className="metric-fill" style={{width: `${member.metrics.utilization}%`}}></div>
                  </div>
                </div>

                <div className="metric-item">
                  <span className="metric-label">Video AHT</span>
                  <span className="metric-value">{member.metrics.videoAHT} min</span>
                </div>

                <div className="metric-item">
                  <span className="metric-label">Comments AHT</span>
                  <span className="metric-value">{member.metrics.commentsAHT} min</span>
                </div>

                <div className="metric-item">
                  <span className="metric-label">PKT Score</span>
                  <span className="metric-value">{member.metrics.pktScore} pts</span>
                </div>
              </div>

              <div className="member-footer">
                <span className="view-details">View Details <i className="fas fa-arrow-right"></i></span>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
}

export default IndividualMetrics;
