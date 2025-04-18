import React, { useState } from 'react';

const Contactus = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const response = await fetch('http://localhost:3005/contact', { // Your backend API endpoint
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            if (response.ok) {
                alert('Form submitted successfully!');
                setFormData({ name: '', email: '', phone: '', message: '' }); // Reset the form
            } else {
                alert('Failed to submit form.');
            }
        } catch (error) {
            console.error('Error:', error);
            alert('An error occurred.');
        }
    };

    return (
        <div className="contact-us-container">
            <div className="contact-us-form">
                <h2 className="contact-us-title">Contact us</h2>

                <form onSubmit={handleSubmit}>
                    <div className="contact-us-fields">
                        <div>
                            <div className="contact-us-field">
                                <span className="contact-us-icon">👤</span>
                                <input
                                    type="text"
                                    name="name"
                                    placeholder="Name"
                                    className="contact-us-input"
                                    value={formData.name}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-us-field">
                                <span className="contact-us-icon">📧</span>
                                <input
                                    type="email"
                                    name="email"
                                    placeholder="Email"
                                    className="contact-us-input"
                                    value={formData.email}
                                    onChange={handleChange}
                                />
                            </div>
                            <div className="contact-us-field">
                                <span className="contact-us-icon">📞</span>
                                <input
                                    type="tel"
                                    name="phone"
                                    placeholder="Phone"
                                    className="contact-us-input"
                                    value={formData.phone}
                                    onChange={handleChange}
                                />
                            </div>
                        </div>
                        <div>
                            <textarea
                                name="message"
                                placeholder="Message"
                                className="contact-us-message"
                                value={formData.message}
                                onChange={handleChange}
                            />
                        </div>
                    </div>


                    <button type="submit" className="contact-us-button">
                        SEND
                    </button>
                </form>
            </div>
        </div>
    );
};

export default Contactus;