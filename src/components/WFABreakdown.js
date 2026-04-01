import React from 'react';
import '../styles/WFABreakdown.css';

function WFABreakdown({ wfaData }) {
  const wfaItems = [
    { key: 'login_logout', label: 'Login/Logout', unit: 'times', icon: 'fa-sign-in-alt' },
    { key: 'exposure_time', label: 'Exposure Time', unit: 'min', icon: 'fa-user' },
    { key: 'case_work', label: 'Case Work', unit: 'min', icon: 'fa-tasks' },
    { key: 'general_breaks', label: 'General Breaks', unit: 'min', icon: 'fa-coffee' },
    { key: 'translation_support', label: 'Translation Support', unit: 'min', icon: 'fa-language' },
    { key: 'vertical_training', label: 'Vertical Training', unit: 'min', icon: 'fa-graduation-cap' },
    { key: 'default', label: 'Default', unit: 'min', icon: 'fa-pause' },
    { key: 'system_updates', label: 'System Updates', unit: 'min', icon: 'fa-cog' }
  ];

  return (
    <div className="wfa-breakdown">
      <div className="wfa-grid">
        {wfaItems.map((item) => (
          <div key={item.key} className="wfa-item">
            <div className="wfa-icon">
              <i className={`fas ${item.icon}`}></i>
            </div>
            <div className="wfa-content">
              <p className="wfa-label">{item.label}</p>
              <p className="wfa-value">
                {wfaData[item.key]} <span className="wfa-unit">{item.unit}</span>
              </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default WFABreakdown;
