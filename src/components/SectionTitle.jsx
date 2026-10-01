import React from 'react';

const SectionTitle = ({ overline, title, description, rightAction }) => {
  return (
    <div className="section-header-wrap">
      <div className="section-header-left">
        {overline && <span className="section-overline">{overline}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
      </div>
      {rightAction && <div className="section-header-right">{rightAction}</div>}
    </div>
  );
};

export default SectionTitle;
