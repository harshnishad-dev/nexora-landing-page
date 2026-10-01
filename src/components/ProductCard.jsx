import React from 'react';
import {
  LayoutGrid,
  Users,
  BarChart3,
  Cloud,
  Zap,
  ShieldCheck,
  ArrowRight
} from 'lucide-react';

const iconDictionary = {
  grid: LayoutGrid,
  users: Users,
  chart: BarChart3,
  cloud: Cloud,
  zap: Zap,
  shield: ShieldCheck
};

const ProductCard = ({ product, onLearnMore }) => {
  const IconComponent = iconDictionary[product.iconType] || LayoutGrid;

  return (
    <article className="product-card">
      <div className="product-card-body">
        <div
          className="product-icon-wrap"
          style={{
            backgroundColor: product.iconBg,
            color: product.iconColor
          }}
        >
          <IconComponent size={24} />
        </div>

        <div className="product-info-wrap">
          <div className="product-title-row">
            <h3 className="product-title">{product.title}</h3>
            {product.badge && (
              <span className="product-badge">{product.badge}</span>
            )}
          </div>
          <p className="product-description">{product.description}</p>
        </div>
      </div>

      <div className="product-card-footer">
        <button
          type="button"
          className="product-learn-more-btn"
          onClick={() => onLearnMore(product)}
        >
          <span>Learn More</span>
          <ArrowRight size={15} />
        </button>
      </div>
    </article>
  );
};

export default ProductCard;
