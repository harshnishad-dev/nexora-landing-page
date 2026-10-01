import React, { useState } from 'react';
import {
  Check,
  ArrowRight,
  Zap,
  ShieldCheck,
  Users
} from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import StatCard from '../components/StatCard';
import ProductCard from '../components/ProductCard';
import ProductModal from '../components/ProductModal';
import BlogCard from '../components/BlogCard';
import SectionTitle from '../components/SectionTitle';
import Footer from '../components/Footer';
import {
  statsData,
  productsData,
  whyChooseUsData,
  blogPostsData,
  ctaData
} from '../data/homeData';

const Home = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleNavbarSearchClick = () => {
    const productsElem = document.getElementById('products');
    if (productsElem) {
      productsElem.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="page-wrapper">
      <Navbar onSearchClick={handleNavbarSearchClick} />

      <main>
        <Hero />

        <section className="stats-full-strip">
          <div className="stats-inner-container">
            {statsData.map((stat) => (
              <StatCard
                key={stat.id}
                value={stat.value}
                label={stat.label}
                iconType={stat.iconType}
              />
            ))}
          </div>
        </section>

        <section id="products" className="products-section">
          <div className="content-container">
            <SectionTitle
              overline="OUR PRODUCTS"
              title="Powerful Tools for Modern Businesses"
              description="Discover our range of products designed to simplify your work and boost productivity."
            />

            <div className="products-grid">
              {productsData.map((product) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onLearnMore={(prod) => setSelectedProduct(prod)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="solutions" className="why-choose-us-section">
          <div className="content-container">
            <div className="why-choose-us-grid">
              <div className="why-choose-content">
                <span className="section-overline">{whyChooseUsData.overline}</span>
                <h2 className="why-title">{whyChooseUsData.title}</h2>
                <p className="why-description">{whyChooseUsData.description}</p>

                <ul className="why-features-list">
                  {whyChooseUsData.features.map((feature, idx) => (
                    <li key={idx} className="why-feature-item">
                      <div className="why-check-solid">
                        <Check size={13} strokeWidth={3} />
                      </div>
                      <span className="why-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#products" className="btn btn-navy why-cta-btn">
                  <span>{whyChooseUsData.buttonText}</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="why-image-column">
                <div className="why-image-wrapper">
                  <img
                    src={whyChooseUsData.image}
                    alt="Modern office desk setup with laptop and plant"
                    className="why-main-photo"
                  />

                  <div className="floating-badge badge-top-right">
                    <div className="floating-badge-icon icon-green">
                      <Zap size={16} />
                    </div>
                    <div className="floating-badge-text">
                      <span className="floating-title">Faster</span>
                      <span className="floating-sub">Performance</span>
                    </div>
                  </div>

                  <div className="floating-badge badge-middle-right">
                    <div className="floating-badge-icon icon-purple">
                      <ShieldCheck size={16} />
                    </div>
                    <div className="floating-badge-text">
                      <span className="floating-title">Enterprise</span>
                      <span className="floating-sub">Grade Security</span>
                    </div>
                  </div>

                  <div className="floating-badge badge-bottom-right">
                    <div className="floating-badge-icon icon-blue">
                      <Users size={16} />
                    </div>
                    <div className="floating-badge-text">
                      <span className="floating-title">Dedicated</span>
                      <span className="floating-sub">Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-section">
          <div className="content-container">
            <SectionTitle
              overline="LATEST NEWS"
              title="From Our Blog"
              description="Insights, tips and updates to help you stay ahead."
              rightAction={
                <a href="#blog" className="view-all-link">
                  <span>View All Articles</span>
                  <ArrowRight size={15} />
                </a>
              }
            />

            <div className="blog-grid">
              {blogPostsData.map((post) => (
                <BlogCard
                  key={post.id}
                  article={post}
                  onReadMore={(article) => setSelectedArticle(article)}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="cta-section" className="cta-full-strip">
          <div className="cta-inner-container">
            <div className="cta-left-content">
              <h2 className="cta-title">{ctaData.title}</h2>
              <p className="cta-description">{ctaData.description}</p>
            </div>

            <div className="cta-right-action">
              <a href="#products" className="btn btn-white-pill cta-btn">
                <span>{ctaData.buttonText}</span>
                <ArrowRight size={16} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <Footer />

      {selectedProduct && (
        <ProductModal
          product={selectedProduct}
          onClose={() => setSelectedProduct(null)}
        />
      )}
    </div>
  );
};

export default Home;
