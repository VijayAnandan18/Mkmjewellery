import React from 'react';
import './SilverCollection.css';

const SilverCollection = () => {
  const products = [
    { name: 'Kuthuvilakku', image: '/assets/jewels/silver/articles/articles1.webp' },
    { name: 'KumKum Box', image: '/assets/jewels/silver/articles/articles2.webp' },
    { name: 'Silver Pooja Set', image: '/assets/jewels/silver/articles/articles3.webp' },
    { name: 'KumKum box', image: '/assets/jewels/silver/articles/articles4.webp' },
    { name: 'Silver Bangle', image:  '/assets/jewels/silver/bangles/bangle1.webp' },
    { name: ' Crafted Gleam Silver Bangle', image: '/assets/jewels/silver/bangles/bangle2.webp' },
    { name: 'Stylish Stylish Bangle', image:  '/assets/jewels/silver/bangles/bangle3.webp' },
    { name: ' Vintage  Silver Anklet', image:  '/assets/jewels/silver/bangles/bangle4.webp'},
    { name: 'Silver Bracelet', image: '/assets/jewels/silver/bracelet/bracelet1.webp' },
    { name: 'Hearty Silver Bracelet', image: '/assets/jewels/silver/bracelet/bracelet2.webp' },
    { name: 'Designery Silver Bracelet', image:  '/assets/jewels/silver/bracelet/bracelet3.webp' },
    { name: 'Glam Silver Bracelet', image:  '/assets/jewels/silver/bracelet/bracelet4.webp' },
    { name: 'Silver Elephant Idols', image: '/assets/jewels/silver/idols/idol1.webp' },
    { name: 'Silver Saraswathi Idol', image: '/assets/jewels/silver/idols/idol2.webp' },
    { name: 'Silver Elephant Idol', image: '/assets/jewels/silver/idols/idol3.webp'},
    { name: 'Silver Ganeshs Idol', image:'/assets/jewels/silver/idols/idol4.webp' },


  ];
  

  // Group products into sections
  const productGroups = [
    { heading: 'Articles', items: products.slice(0, 4) },
    { heading: 'Bangles', items: products.slice(4, 8) },
    { heading: 'Bracelets', items: products.slice(8, 12) },
    { heading: 'Idols', items: products.slice(12, 16) },

  ];
  

  return (
    <div>
      <div className="one">
        <h1 className="main-heading">Silver Jewellery</h1>
        <p>Shine with the brilliance of our exquisite silver designs.</p>
      </div>
      {productGroups.map((group, index) => (
        <div key={index}>
          <div className="sub-heading-container">
            <h2 className="sub-heading shiny-text" data-text={group.heading}>
              {group.heading}
            </h2>
          </div>
          <div className="collection-container">
            {group.items.map((product, idx) => (
              <div className="collection-card" key={idx}>
                <div className="collection-imgBox">
                  <img src={product.image} alt={`${product.name}`} />
                </div>
                <div className="collection-content">
                  <div className="collection-productName">{product.name}</div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SilverCollection;