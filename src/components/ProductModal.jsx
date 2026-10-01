import React, { useEffect } from 'react';
import { X, Check, Star, ArrowRight, LayoutGrid, Users, BarChart3, Cloud, Zap, ShieldCheck } from 'lucide-react';

const iconDictionary = {
  grid: LayoutGrid,
  users: Users,
  chart: BarChart3,
  cloud: Cloud,
  zap: Zap,
  shield: ShieldCheck
};

const ProductModal = ({ product, onClose }) => {
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = 'unset';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [onClose]);

  if (!product) return null;

  const IconComponent = iconDictionary[product.iconType] || LayoutGrid;

  return (
    <div className="modal-backdrop" onClick={onClose} role="dialog" aria-modal="true">
      <div className="product-modal-dialog" onClick={(e) => e.stopPropagation()}>
        <div className="modal-header">
          <div className="modal-header-brand">
            <div
              className="modal-icon-badge"
              style={{
                backgroundColor: product.iconBg,
                color: product.iconColor
              }}
            >
              <IconComponent size={22} />
            </div>
            <div>
              <div className="modal-title-row">
                <h3 className="modal-title">{product.title}</h3>
                <span className="modal-category-tag">{product.category}</span>
              </div>
              <p className="modal-tagline">{product.description}</p>
            </div>
          </div>

          <button
            type="button"
            className="modal-close-icon-btn"
            onClick={onClose}
            aria-label="Close product modal"
          >
            <X size={19} />
          </button>
        </div>

        <div className="modal-body">
          <div className="modal-overview-section">
            <h4 className="modal-section-title">Overview</h4>
            <p className="modal-overview-text">{product.fullDescription}</p>
          </div>

          <div className="modal-features-section">
            <h4 className="modal-section-title">Key Capabilities</h4>
            <ul className="modal-features-list">
              {product.features?.map((feature, idx) => (
                <li key={idx} className="modal-feature-item">
                  <span className="modal-check-icon">
                    <Check size={14} />
                  </span>
                  <span>{feature}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="modal-meta-grid">
            <div className="modal-meta-card">
              <span className="modal-meta-label">Starting Price</span>
              <span className="modal-meta-value">{product.pricing}</span>
            </div>
            <div className="modal-meta-card">
              <span className="modal-meta-label">Rating</span>
              <span className="modal-meta-value rating-val">
                <Star size={15} fill="#f59e0b" color="#f59e0b" />
                <span>{product.rating}</span>
              </span>
            </div>
          </div>
        </div>

        <div className="modal-footer">
          <button
            type="button"
            className="btn btn-outline"
            onClick={onClose}
          >
            Dismiss
          </button>
          <a
            href="#cta-section"
            className="btn btn-teal modal-cta-action"
            onClick={onClose}
          >
            <span>Start Free Trial</span>
            <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </div>
  );
};

export default ProductModal;
