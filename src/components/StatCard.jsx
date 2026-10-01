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
      <div className={`stat-icon-circle stat-icon-${iconType}`}>
        <IconComponent size={20} />
      </div>
      <div className="stat-text-box">
        <div className="stat-number">{value}</div>
        <div className="stat-label">{label}</div>
      </div>
    </div>
  );
};

export default StatCard;
