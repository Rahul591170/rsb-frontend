import React, { useState, useEffect, useRef } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
        '/Images/slider1.webp',
        '/Images/slider2.webp',
        '/Images/slider3.webp'
    ];

    const intervalRef = useRef(null);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev + 1) % slides.length);
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length);
    };

    // Start auto-slide
    useEffect(() => {
        startAutoSlide();
        return () => stopAutoSlide(); // Clean up on unmount
    }, []);

    const startAutoSlide = () => {
        stopAutoSlide(); // Avoid multiple intervals
        intervalRef.current = setInterval(nextSlide, 3000);
    };

    const stopAutoSlide = () => {
        if (intervalRef.current) {
            clearInterval(intervalRef.current);
            intervalRef.current = null;
        }
    };

    return (
        <div
            className="slider-container"
            onMouseEnter={stopAutoSlide}
            onMouseLeave={startAutoSlide}
        >
            <div className="slider" style={{ transform: `translateX(-${currentSlide * 100}%)` }}>
                {slides.map((slide, index) => (
                    <img
                        key={index}
                        src={slide}
                        alt={`Slide ${index + 1}`}
                        className="slide"
                    />
                ))}
            </div>
            <button className="prev" onClick={prevSlide}>&#10094;</button>
            <button className="next" onClick={nextSlide}>&#10095;</button>
        </div>
    );
};

export default Slider;
