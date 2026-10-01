import React, { useState } from 'react';
import { ArrowRight, Play, X } from 'lucide-react';
import { heroData } from '../data/homeData';

const Hero = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <section id="home" className="hero-section">
      <div className="hero-bg-container">
        <img
          src={heroData.bgImage}
          alt="Scenic mountain landscape at sunrise"
          className="hero-bg-image"
        />
        <div className="hero-overlay-gradient"></div>
      </div>

      <div className="hero-container">
        <div className="hero-content">
          <div className="hero-badge animate-fade-in">
            <span className="hero-badge-text">{heroData.overline}</span>
          </div>

          <h1 className="hero-title animate-slide-up">
            {heroData.titlePart1}
            <span className="hero-title-break">
              {heroData.titlePart2}{' '}
              <span className="hero-highlight">{heroData.titleHighlight}</span>
            </span>
          </h1>

          <p className="hero-description animate-slide-up-delay">
            {heroData.description}
          </p>

          <div className="hero-actions animate-slide-up-delay-2">
            <a href="#products" className="btn btn-teal hero-primary-btn">
              <span>{heroData.primaryCta}</span>
              <ArrowRight size={17} />
            </a>

            <button
              type="button"
              className="btn btn-secondary-glass hero-video-btn"
              onClick={() => setIsVideoModalOpen(true)}
            >
              <span className="play-icon-circle">
                <Play size={13} fill="currentColor" />
              </span>
              <span>{heroData.secondaryCta}</span>
            </button>
          </div>
        </div>
      </div>

      {isVideoModalOpen && (
        <div className="modal-backdrop" onClick={() => setIsVideoModalOpen(false)}>
          <div className="video-modal-dialog" onClick={(e) => e.stopPropagation()}>
            <div className="video-modal-header">
              <h3 className="video-modal-title">Nexora Product Story</h3>
              <button
                type="button"
                className="modal-close-icon-btn"
                onClick={() => setIsVideoModalOpen(false)}
                aria-label="Close video"
              >
                <X size={20} />
              </button>
            </div>
            <div className="video-embed-wrapper">
              <iframe
                title="Nexora Platform Overview"
                src="https://www.youtube.com/embed/dQw4w9WgXcQ?autoplay=1"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Hero;
