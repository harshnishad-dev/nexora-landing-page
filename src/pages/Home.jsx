import React, { useState, useMemo, useRef, useEffect } from 'react';
import {
  Search,
  X,
  CheckCircle2,
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
  productCategories,
  productsData,
  whyChooseUsData,
  blogPostsData,
  ctaData
} from '../data/homeData';

const Home = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [selectedProduct, setSelectedProduct] = useState(null);
  const [selectedArticle, setSelectedArticle] = useState(null);
  const [showSearchInput, setShowSearchInput] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const searchInputRef = useRef(null);
  const productsSectionRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 280);
    return () => clearTimeout(timer);
  }, []);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const categoryParam = params.get('category');
    const queryParam = params.get('q');

    if (categoryParam && productCategories.includes(categoryParam)) {
      setSelectedCategory(categoryParam);
    }
    if (queryParam) {
      setSearchQuery(queryParam);
      setShowSearchInput(true);
    }
  }, []);

  const updateUrlParams = (category, query) => {
    const params = new URLSearchParams();
    if (category && category !== 'All') {
      params.set('category', category);
    }
    if (query && query.trim() !== '') {
      params.set('q', query.trim());
    }
    const newRelativePathQuery =
      window.location.pathname + (params.toString() ? `?${params.toString()}` : '');
    window.history.replaceState(null, '', newRelativePathQuery);
  };

  const handleCategoryChange = (category) => {
    setSelectedCategory(category);
    updateUrlParams(category, searchQuery);
  };

  const handleSearchChange = (e) => {
    const val = e.target.value;
    setSearchQuery(val);
    updateUrlParams(selectedCategory, val);
  };

  const handleClearSearch = () => {
    setSearchQuery('');
    updateUrlParams(selectedCategory, '');
    if (searchInputRef.current) {
      searchInputRef.current.focus();
    }
  };

  const handleNavbarSearchClick = () => {
    setShowSearchInput(true);
    if (productsSectionRef.current) {
      productsSectionRef.current.scrollIntoView({ behavior: 'smooth' });
    }
    setTimeout(() => {
      if (searchInputRef.current) {
        searchInputRef.current.focus();
      }
    }, 400);
  };

  const filteredProducts = useMemo(() => {
    return productsData.filter((product) => {
      const matchesCategory =
        selectedCategory === 'All' || product.category === selectedCategory;

      const query = searchQuery.toLowerCase().trim();
      const matchesQuery =
        !query ||
        product.title.toLowerCase().includes(query) ||
        product.description.toLowerCase().includes(query) ||
        product.category.toLowerCase().includes(query);

      return matchesCategory && matchesQuery;
    });
  }, [searchQuery, selectedCategory]);

  const floatingIconMap = {
    zap: Zap,
    shield: ShieldCheck,
    users: Users
  };

  return (
    <div className="page-wrapper">
      <Navbar onSearchClick={handleNavbarSearchClick} />

      <main>
        <Hero />

        <section className="stats-section">
          <div className="container">
            <div className="stats-grid-card">
              {statsData.map((stat) => (
                <StatCard
                  key={stat.id}
                  value={stat.value}
                  label={stat.label}
                  iconType={stat.iconType}
                />
              ))}
            </div>
          </div>
        </section>

        <section id="products" ref={productsSectionRef} className="products-section">
          <div className="container">
            <SectionTitle
              overline="OUR PRODUCTS"
              title="Powerful Tools for Modern Businesses"
              description="Discover our range of products designed to simplify your work and boost productivity."
            />

            <div className="products-filter-toolbar">
              <div className="category-tabs-container">
                {productCategories.map((category) => (
                  <button
                    key={category}
                    type="button"
                    className={`category-pill ${
                      selectedCategory === category ? 'active' : ''
                    }`}
                    onClick={() => handleCategoryChange(category)}
                  >
                    {category}
                  </button>
                ))}
              </div>

              <div className="search-box-wrapper">
                <Search size={16} className="search-inline-icon" />
                <input
                  ref={searchInputRef}
                  type="text"
                  placeholder="Search products..."
                  value={searchQuery}
                  onChange={handleSearchChange}
                  className="product-search-input"
                  aria-label="Search products"
                />
                {searchQuery && (
                  <button
                    type="button"
                    className="search-clear-btn"
                    onClick={handleClearSearch}
                    aria-label="Clear search"
                  >
                    <X size={14} />
                  </button>
                )}
              </div>
            </div>

            {isLoading ? (
              <div className="products-grid">
                {[1, 2, 3, 4].map((n) => (
                  <div key={n} className="product-card skeleton-card">
                    <div className="skeleton-icon"></div>
                    <div className="skeleton-line line-title"></div>
                    <div className="skeleton-line line-desc"></div>
                    <div className="skeleton-line line-btn"></div>
                  </div>
                ))}
              </div>
            ) : filteredProducts.length > 0 ? (
              <div className="products-grid">
                {filteredProducts.map((product) => (
                  <ProductCard
                    key={product.id}
                    product={product}
                    onLearnMore={(prod) => setSelectedProduct(prod)}
                  />
                ))}
              </div>
            ) : (
              <div className="no-results-card">
                <div className="no-results-icon-wrap">
                  <Search size={32} />
                </div>
                <h3 className="no-results-title">No matching products found</h3>
                <p className="no-results-text">
                  We couldn't find any tools matching "{searchQuery}". Try searching
                  with another keyword or selecting a different category.
                </p>
                <button
                  type="button"
                  className="btn btn-teal reset-filter-btn"
                  onClick={() => {
                    setSearchQuery('');
                    setSelectedCategory('All');
                    updateUrlParams('All', '');
                  }}
                >
                  Reset All Filters
                </button>
              </div>
            )}
          </div>
        </section>

        <section id="solutions" className="why-choose-us-section">
          <div className="container">
            <div className="why-choose-us-grid">
              <div className="why-choose-content">
                <span className="section-overline">{whyChooseUsData.overline}</span>
                <h2 className="why-title">{whyChooseUsData.title}</h2>
                <p className="why-description">{whyChooseUsData.description}</p>

                <ul className="why-features-list">
                  {whyChooseUsData.features.map((feature, idx) => (
                    <li key={idx} className="why-feature-item">
                      <div className="why-check-circle">
                        <CheckCircle2 size={18} />
                      </div>
                      <span className="why-feature-text">{feature}</span>
                    </li>
                  ))}
                </ul>

                <a href="#products" className="btn btn-primary why-cta-btn">
                  <span>{whyChooseUsData.buttonText}</span>
                  <ArrowRight size={16} />
                </a>
              </div>

              <div className="why-image-column">
                <div className="why-image-card">
                  <img
                    src={whyChooseUsData.image}
                    alt="Workspace showing laptop and office setup"
                    className="why-main-photo"
                  />
                  <div className="why-image-gradient"></div>

                  <div className="floating-badge badge-top-right">
                    <div className="floating-badge-icon icon-teal">
                      <Zap size={16} />
                    </div>
                    <div className="floating-badge-text">
                      <span className="floating-title">Faster Performance</span>
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
                      <span className="floating-title">Dedicated Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="blog" className="blog-section">
          <div className="container">
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

        <section id="cta-section" className="cta-banner-section">
          <div className="container">
            <div className="cta-banner-card">
              <div className="cta-banner-content">
                <h2 className="cta-title">{ctaData.title}</h2>
                <p className="cta-description">{ctaData.description}</p>
              </div>

              <div className="cta-banner-actions">
                <a href="#products" className="btn btn-white cta-btn">
                  <span>{ctaData.buttonText}</span>
                  <ArrowRight size={16} />
                </a>
              </div>
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

      {selectedArticle && (
        <div
          className="modal-backdrop"
          onClick={() => setSelectedArticle(null)}
          role="dialog"
          aria-modal="true"
        >
          <div
            className="product-modal-dialog article-modal-dialog"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="modal-header">
              <div className="modal-title-row">
                <span className="modal-category-tag">{selectedArticle.date}</span>
                <span className="article-read-time">{selectedArticle.readTime}</span>
              </div>
              <button
                type="button"
                className="modal-close-icon-btn"
                onClick={() => setSelectedArticle(null)}
                aria-label="Close article modal"
              >
                <X size={19} />
              </button>
            </div>

            <div className="modal-body">
              <div className="article-modal-img-wrap">
                <img
                  src={selectedArticle.image}
                  alt={selectedArticle.title}
                  className="article-modal-img"
                />
              </div>
              <h3 className="article-modal-title">{selectedArticle.title}</h3>
              <p className="modal-overview-text">{selectedArticle.excerpt}</p>
              <p className="modal-overview-text">
                Technological shifts and modern cloud infrastructure are revolutionizing
                how teams collaborate across geographical barriers. By embedding
                sustainable digital practices and intelligent productivity tooling,
                forward-thinking companies are delivering higher business impact while
                fostering connected, vibrant workplaces.
              </p>
            </div>

            <div className="modal-footer">
              <button
                type="button"
                className="btn btn-teal modal-cta-action"
                onClick={() => setSelectedArticle(null)}
              >
                Done Reading
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Home;
