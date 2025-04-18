import React from 'react';

const About= () => {
  return (
    <div className="about-container">
      <div className="hero-section">
        <h1>ABOUT RAHUL SPORTS</h1>
        {/* <div className="team-image">
          
          <img src="./Images/constructionteam.jpeg" alt="Rahul Sports Team" /> 
        </div> */}
      </div>

      <div className="why-choose-section">
        <h2>Why Choose US?</h2>
        <p>
          Rahul Sports stands as a beacon of transformation in the sports and fitness landscape of India. Our commitment to promoting active living and community development has propelled us to the forefront of the sports industry. By focusing on designing, building, and maintaining premier sports arenas, we aim to make sports accessible, affordable, and enriching across demographics.
        </p>
      </div>

      <div className="mission-section">
        <h2>Our Mission</h2>
        <p>
          Rahul Sports Builders wants to be the backbone of the Sports Ecosystem in India with specialization in development, installation, management & maintenance of Sports Infrastructure. We Build, You Play.
        </p>
      </div>

      <div className="features-section">
        <div className="feature-item">
          <img src="quality-icon.png" alt="Quality Icon" /> {/* Replace with your quality icon */}
          <h3>Quality</h3>
          <p>Our commitment to quality sets us apart. We uphold the highest standards in safety, durability, and functionality in every facility we construct and maintain. Expect unparalleled quality and unmatched prices, coupled with 5 to 12 years of warranty for added assurance.</p>
        </div>

        <div className="feature-item">
          <img src="affordability-icon.png" alt="Affordability Icon" /> {/* Replace with your affordability icon */}
          <h3>Affordability</h3>
          <p>We believe in breaking barriers. Our goal is to make sports a shared experience, welcoming individuals of all ages, genders, and abilities into the fold of an inclusive sports culture, without breaking the bank.</p>
        </div>

        <div className="feature-item">
          <img src="value-icon.png" alt="Value Icon" /> {/* Replace with your value icon */}
          <h3>Value for Money</h3>
          <p>Get more than you pay for. Gallant Sports offers exceptional value for money, ensuring that your investment in health and recreation yields lasting rewards.</p>
        </div>

        <div className="feature-item">
          <img src="community-icon.png" alt="Community Icon" /> {/* Replace with your community icon */}
          <h3>Community Impact</h3>
          <p>We envision healthier communities. Through our engaging sports spaces, we promote physical health, mental well-being, and a sense of unity.</p>
        </div>

        <div className="feature-item">
          <img src="innovation-icon.png" alt="Innovation Icon" /> {/* Replace with your innovation icon */}
          <h3>Innovation</h3>
          <p>Innovation is our driving force. By embracing new technologies, we continuously enhance the sports experience we offer, making it richer and more engaging.</p>
        </div>
      </div>
    </div>
  );
};

export default About;