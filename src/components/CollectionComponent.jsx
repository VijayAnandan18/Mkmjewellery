import React from 'react';
import './CollectionComponent.css';

const CollectionComponent = () => {
  const products = Array(8).fill({
    name: 'Rayon a-line Dress',
    image: 'https://i.ibb.co/RjvTJY5/7.jpg',
  });

  return (
    <div className="collection-container">
      {products.map((product, index) => (
        <div className="collection-card" key={index}>
          <div className="collection-imgBox">
            <img src={product.image} alt={`Product ${index + 1}`} />
          </div>
          <div className="collection-content">
            <div className="collection-productName">{product.name}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CollectionComponent;
