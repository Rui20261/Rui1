import React from 'react';
import '../styles/MetricsCard.css';

function MetricsCard({ title, value, unit, color, description }) {
  return (
    <div className="metrics-card" style={{ borderTopColor: color }}>
      <div className="card-header">
        <h3>{title}</h3>
      </div>
      <div className="card-body">
        <div className="card-value" style={{ color: color }}>
          {value}<span className="unit">{unit}</span>
        </div>
        {description && <p className="card-description">{description}</p>}
      </div>
    </div>
  );
}

export default MetricsCard;
