import React from 'react';
import {
  LayoutGrid,
  Users,
  BarChart3,
  Cloud,
  ArrowRight
} from 'lucide-react';

const iconDictionary = {
  grid: LayoutGrid,
  users: Users,
  chart: BarChart3,
  cloud: Cloud
};

const ProductCard = ({ product, onLearnMore }) => {
  const IconComponent = iconDictionary[product.iconType] || LayoutGrid;

  return (
    <div className="product-card">
      <div
        className="product-icon-wrap"
        style={{
          backgroundColor: product.iconBg,
          color: product.iconColor
        }}
      >
        <IconComponent size={22} />
      </div>

      <h3 className="product-title">{product.title}</h3>
      <p className="product-description">{product.description}</p>

      <button
        type="button"
        className="product-learn-more-btn"
        style={{ color: product.themeColor }}
        onClick={(e) => {
          e.preventDefault();
          onLearnMore?.(product);
        }}
      >
        <span>Learn More</span>
        <ArrowRight size={15} />
      </button>
    </div>
  );
};

export default ProductCard;
