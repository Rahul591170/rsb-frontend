import React, { useState } from 'react';

const Services = () => {
    const [activeIndex, setActiveIndex] = useState(null);

    const services = [
        { title: 'Stadium Construction', description: 'We build state-of-the-art stadiums for all sports.' },
        { title: 'Sports Courts', description: 'High-quality courts for basketball, tennis, and more.' },
        { title: 'Artificial Turf Installation', description: 'Durable and professional-grade artificial turf solutions.' }
    ];

    const handleClick = (index) => {
        setActiveIndex(index === activeIndex ? null : index);
    };

    return (
        <div className="services">
            <h1>services</h1>
            {services.map((service, index) => (
                <div 
                    key={index} 
                    className={`service ${index === activeIndex ? 'active' : ''}`}
                    onClick={() => handleClick(index)}
                >
                    <h3>{service.title}</h3>
                    <p>{service.description}</p>
                </div>
            ))}
        </div>
    );
};

export default Services;

