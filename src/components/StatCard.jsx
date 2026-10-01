import React from 'react';
import { Leaf, Building2, Star, Globe } from 'lucide-react';

const iconMap = {
  leaf: Leaf,
  building: Building2,
  star: Star,
  globe: Globe
};

const StatCard = ({ value, label, iconType }) => {
  const IconComponent = iconMap[iconType] || Leaf;

  return (
    <div className="stat-card">
      <div className={`stat-icon-box stat-icon-${iconType}`}>
        <IconComponent size={20} className="stat-svg-icon" />
      </div>
      <div className="stat-text-box">
        <h3 className="stat-number">{value}</h3>
        <p className="stat-label">{label}</p>
      </div>
    </div>
  );
};

export default StatCard;
