// NewsGrid.jsx
import React from 'react';
import Card from '../Card';
import ShimmerCard from '../Shimmer/ShimmerCard';
import NoNews from '../NoNews';
import ErrorComponent from '../ErrorComponent';

const NewsGrid = ({ news, loading, error }) => {
  if (loading) {
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {[...Array(12)].map((_, index) => (
          <ShimmerCard key={index} />
        ))}
      </div>
    );
  }

  if (error) {
    return <ErrorComponent />;
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-6">
      {Array.isArray(news) && news.length ? (
        news.map((article, index) => <Card key={index} article={article} />)
      ) : (
        <div className="flex items-center justify-center w-full h-96">
          <NoNews />
        </div>
      )}
    </div>
  );
};

export default NewsGrid;
