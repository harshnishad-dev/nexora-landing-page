import React from 'react';

const SectionTitle = ({ overline, title, description, align = 'center', rightAction }) => {
  return (
    <div className={`section-header-wrap ${align === 'left' ? 'text-left' : 'text-center'}`}>
      <div className="section-header-content">
        {overline && <span className="section-overline">{overline}</span>}
        {title && <h2 className="section-title">{title}</h2>}
        {description && <p className="section-description">{description}</p>}
      </div>
      {rightAction && <div className="section-header-action">{rightAction}</div>}
    </div>
  );
};

export default SectionTitle;
