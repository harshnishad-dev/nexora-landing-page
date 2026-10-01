import React from 'react';
import { ArrowRight, Play } from 'lucide-react';
import { heroData } from '../data/homeData';

const Hero = () => {
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

            <a
              href="https://www.youtube.com"
              target="_blank"
              rel="noreferrer"
              className="btn btn-secondary-glass hero-video-btn"
            >
              <span className="play-icon-circle">
                <Play size={13} fill="currentColor" />
              </span>
              <span>{heroData.secondaryCta}</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
