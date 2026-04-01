import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { teamMembers } from '../data/mockData';
import MetricsCard from '../components/MetricsCard';
import WFABreakdown from '../components/WFABreakdown';
import '../styles/TeamMember.css';

function TeamMember() {
  const { id } = useParams();
  const member = teamMembers.find(m => m.id === parseInt(id));

  if (!member) {
    return (
      <div className="member-detail">
        <div className="error-message">
          <p>Member not found</p>
          <Link to="/individual">Back to Individual Metrics</Link>
        </div>
      </div>
    );
  }

  const calculateTenure = (joinDate) => {
    const today = new Date();
    const join = new Date(joinDate);
    const years = Math.floor((today - join) / (365.25 * 24 * 60 * 60 * 1000));
    const months = Math.floor(((today - join) % (365.25 * 24 * 60 * 60 * 1000)) / (30.44 * 24 * 60 * 60 * 1000));
    return { years, months };
  };

  const tenure = calculateTenure(member.joinDate);

  return (
    <div className="member-detail">
      <Link to="/individual" className="back-link">
        <i className="fas fa-arrow-left"></i> Back to Individual Metrics
      </Link>

      <div className="member-header-section">
        <div className="member-avatar">
          <i className="fas fa-user-circle"></i>
        </div>
        <div className="member-info-section">
          <h1>{member.name}</h1>
          <p className="position">{member.position}</p>
          <p className="email">{member.email}</p>
          <div className="tenure-info">
            <span><i className="fas fa-calendar"></i> Joined: {member.joinDate}</span>
            <span><i className="fas fa-hourglass"></i> Tenure: {tenure.years > 0 ? `${tenure.years} years ${tenure.months} months` : `${tenure.months} months`}</span>
          </div>
        </div>
      </div>

      <div className="metrics-section">
        <h2>Performance Metrics</h2>
        <div className="metrics-grid">
          <MetricsCard 
            title="Utilization" 
            value={member.metrics.utilization} 
            unit="%"
            color="#e74c3c"
          />
          <MetricsCard 
            title="Video AHT" 
            value={member.metrics.videoAHT} 
            unit="min"
            color="#3498db"
          />
          <MetricsCard 
            title="Comments AHT" 
            value={member.metrics.commentsAHT} 
            unit="min"
            color="#2ecc71"
          />
          <MetricsCard 
            title="PKT Score" 
            value={member.metrics.pktScore} 
            unit="pts"
            color="#f39c12"
          />
        </div>
      </div>

      <div className="metrics-section">
        <h2>Workforce Activity (WFA) Breakdown</h2>
        <WFABreakdown wfaData={member.metrics.wfa} />
      </div>

      <div className="metrics-section">
        <h2>Detailed Information</h2>
        <div className="detail-table">
          <table>
            <tbody>
              <tr>
                <td>Name</td>
                <td>{member.name}</td>
              </tr>
              <tr>
                <td>Position</td>
                <td>{member.position}</td>
              </tr>
              <tr>
                <td>Email</td>
                <td>{member.email}</td>
              </tr>
              <tr>
                <td>Join Date</td>
                <td>{member.joinDate}</td>
              </tr>
              <tr>
                <td>Tenure</td>
                <td>{tenure.years > 0 ? `${tenure.years} years ${tenure.months} months` : `${tenure.months} months`}</td>
              </tr>
              <tr>
                <td>Utilization Rate</td>
                <td>{member.metrics.utilization}%</td>
              </tr>
              <tr>
                <td>Video AHT</td>
                <td>{member.metrics.videoAHT} minutes</td>
              </tr>
              <tr>
                <td>Comments AHT</td>
                <td>{member.metrics.commentsAHT} minutes</td>
              </tr>
              <tr>
                <td>Quality Score (PKT)</td>
                <td>{member.metrics.pktScore} points</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeamMember;
