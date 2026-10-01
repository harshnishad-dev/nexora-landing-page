import React from 'react';
import { ArrowRight, Calendar } from 'lucide-react';

const BlogCard = ({ article, onReadMore }) => {
  return (
    <article className="blog-card">
      <div className="blog-image-wrap">
        <img
          src={article.image}
          alt={article.title}
          className="blog-image"
          loading="lazy"
        />
      </div>

      <div className="blog-card-content">
        <div className="blog-date-row">
          <Calendar size={13} className="blog-calendar-icon" />
          <time className="blog-date" dateTime={article.date}>
            {article.date}
          </time>
        </div>

        <h3 className="blog-title">
          <a
            href="#blog"
            onClick={(e) => {
              e.preventDefault();
              onReadMore?.(article);
            }}
          >
            {article.title}
          </a>
        </h3>

        <p className="blog-excerpt">{article.excerpt}</p>

        <div className="blog-card-footer">
          <button
            type="button"
            className="blog-read-more-btn"
            onClick={() => onReadMore?.(article)}
          >
            <span>Read More</span>
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
    </article>
  );
};

export default BlogCard;
