import React from 'react';
import { calculateTeamAverages } from '../data/mockData';
import MetricsCard from '../components/MetricsCard';
import WFABreakdown from '../components/WFABreakdown';
import '../styles/TeamMetrics.css';

function TeamMetrics() {
  const teamAvg = calculateTeamAverages();

  return (
    <div className="team-metrics">
      <h1>Team Metrics</h1>
      <p className="subtitle">Aggregated performance metrics for the entire Russian team</p>

      <div className="metrics-section">
        <h2>Core Performance Metrics</h2>
        <div className="metrics-grid">
          <MetricsCard 
            title="Utilization" 
            value={teamAvg.utilization} 
            unit="%"
            color="#e74c3c"
            description="Average team utilization rate"
          />
          <MetricsCard 
            title="Video AHT" 
            value={teamAvg.videoAHT} 
            unit="min"
            color="#3498db"
            description="Average Handle Time for video"
          />
          <MetricsCard 
            title="Comments AHT" 
            value={teamAvg.commentsAHT} 
            unit="min"
            color="#2ecc71"
            description="Average Handle Time for comments"
          />
          <MetricsCard 
            title="PKT Score" 
            value={teamAvg.pktScore} 
            unit="pts"
            color="#f39c12"
            description="Quality/Performance score"
          />
        </div>
      </div>

      <div className="metrics-section">
        <h2>Workforce Activity (WFA) Breakdown</h2>
        <WFABreakdown wfaData={teamAvg.wfa} />
      </div>

      <div className="metrics-section">
        <h2>Performance Summary</h2>
        <div className="summary-table">
          <table>
            <tbody>
              <tr>
                <td>Average Utilization Rate</td>
                <td className="value">{teamAvg.utilization}%</td>
              </tr>
              <tr>
                <td>Average Video AHT</td>
                <td className="value">{teamAvg.videoAHT} minutes</td>
              </tr>
              <tr>
                <td>Average Comments AHT</td>
                <td className="value">{teamAvg.commentsAHT} minutes</td>
              </tr>
              <tr>
                <td>Average Quality Score (PKT)</td>
                <td className="value">{teamAvg.pktScore} points</td>
              </tr>
              <tr>
                <td>Average Case Work Time</td>
                <td className="value">{teamAvg.wfa.case_work} minutes/day</td>
              </tr>
              <tr>
                <td>Average Training Time</td>
                <td className="value">{teamAvg.wfa.vertical_training} minutes/day</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

export default TeamMetrics;
