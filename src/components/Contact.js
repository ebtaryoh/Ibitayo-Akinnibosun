import React, { useEffect, useState } from 'react';
import './Contact.css';
import Aos from 'aos';
import 'aos/dist/aos.css';

function Contact() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    Aos.init({ once: true });
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);

    const form = e.target;
    const data = new FormData(form);

    try {
      const response = await fetch(
        'https://formspree.io/f/xnjnkkob', 
        {
          method: 'POST',
          body: data,
          headers: {
            Accept: 'application/json',
          },
        }
      );

      if (response.ok) {
        setSuccess(true);
        form.reset();
      } else {
        alert('Something went wrong. Try again.');
      }
    } catch (error) {
      alert('Network error. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <section id="contact">
      <div className="contact">
        <div>
          <h2 data-aos="fade-right">Contact Me</h2>
          <p data-aos="fade-right">For more information contact me</p>
        </div>

        <form
          onSubmit={handleSubmit}
          data-aos="fade-left"
        >
          <label>Name :</label>
          <input
            type="text"
            name="name"
            placeholder="Enter Name"
            required
          />

          <label>Email :</label>
          <input
            type="email"
            name="email"
            placeholder="Enter Email"
            required
          />

          <label>Message :</label>
          <textarea
            name="message"
            placeholder="Message"
            required
          />

          <button type="submit" disabled={loading}>
            {loading ? 'Sending...' : 'Submit'}
          </button>

          {success && (
            <p className="success-message">
              ✅ Message sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default Contact;
