import React from 'react';
import Card from '../Card';
import ShimmerCard from '../Shimmer/ShimmerCard';
import NoNews from '../NoNews';
import ErrorComponent from '../ErrorComponent';

const NewsGrid = ({ news, loading, error }) => {
  if (loading) {
    return (
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {[...Array(9)].map((_, i) => <ShimmerCard key={i} />)}
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center h-80">
        <ErrorComponent />
      </div>
    );
  }

  return (
    <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 transition-all duration-300">
      {Array.isArray(news) && news.length > 0 ? (
        news.map((article, index) => (
          <div
            key={index}
            className="transform hover:-translate-y-1 transition duration-200"
          >
            <Card article={article} />
          </div>
        ))
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          <NoNews />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
