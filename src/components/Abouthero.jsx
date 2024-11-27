import React from 'react';
import './Abouthero.css'; // Import the CSS file

const Abouthero = () => {
  return (
    <div className="abouthero-container">
      {/* About Us Section */}
      <div className="abouthero-about-us">
        <div className="abouthero-about-image">
          <img
            src="https://digitalupgrade.com/images/lobbyimage_1.jpg"
            width="808"
            height="458"
            alt="Lobby Image"
          />
        </div>
        <div className="abouthero-about-info">
          <h2>We are Digital Upgrade</h2>
          <p style={{ textAlign: 'justify' }}>
            MKM Thangamaligai LLP is a renowned jewellery brand offering a wide
            range of fine jewellery in gold, diamond, platinum, and silver. Our
            mission is to provide exceptional craftsmanship for every occasion,
            ensuring our customers' complete satisfaction. The registered office
            is in Tirunelveli, and our skilled staff is dedicated to making each
            visit memorable.
          </p>
          <a href="#" title="About Us Button">
            ABOUT US
          </a>
        </div>
      </div>

      {/* History Section */}
      <div className="abouthero-history">
        <div className="abouthero-history-image">
          <img
            src="https://digitalupgrade.com/images/building_pic.jpg"
            width="951"
            height="471"
            alt="Building Pic"
          />
        </div>
        <div className="abouthero-history-info">
          <h2>Preserving Local History</h2>
          <p style={{ textAlign: 'justify' }}>
            MKM Thangamaligai LLP evolved from the well-established MKM
            Jewellers, which has over 25 years of experience in the jewellery
            industry. The brand is part of Team NAVRATNA THANGAMALIGAI, which
            operates under the name NAVRATNA, with stores in India and the UAE,
            including locations in Pattukottai, Karaikudi, Palani, Cumbum, Dubai,
            and Ajman.
            <br />
            Our journey began in 1996 when MKM Jewellers opened its first showroom
            in Tirunelveli and quickly gained a reputation as one of the best in
            South Tamil Nadu. Today, MKM Thangamaligai LLP continues to grow,
            focusing on innovation, quality, and partnerships with professionals
            and investors.
          </p>
          <a href="#" title="History Button">
            HISTORY
          </a>
        </div>
      </div>
    </div>
  );
};

export default Abouthero;
