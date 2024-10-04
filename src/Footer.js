import { useState } from 'react';
import axios from 'axios';

const Footer = () => {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage(''); // Reset message
    console.log("Submitting subscription with:", { firstname, lastname, email });
    try {
      const response = await axios.post('http://localhost:5000/', { // Ensure this matches your backend port
        firstname,
        lastname,
        email
      });
      console.log("Server response:", response.data);
      setMessage(response.data.message);
      setFirstname('');
      setLastname('');
      setEmail('');
    } catch (error) {
      console.error("Subscription error:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setMessage(error.response.data.message);
      } else {
        setMessage('Subscription failed. Please try again.');
      }
    }
  };

  return (
    <footer>
      <div className="footer-content">
        <h3>Subscribe to our Newsletter</h3>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            value={firstname}
            onChange={(e) => setFirstname(e.target.value)}
            placeholder="First Name"
            required
          />
          <input
            type="text"
            value={lastname}
            onChange={(e) => setLastname(e.target.value)}
            placeholder="Last Name"
            required
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email"
            required
          />
          <button type="submit">Subscribe</button>
        </form>
        {message && <p>{message}</p>}
      </div>
    </footer>
  );
};

export default Footer;