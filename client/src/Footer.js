import useNavigation from './hooks/navigate';
import React, { useState } from 'react';
import Modal from 'react-modal';



export default function Footer() {
  const { navigateTo } = useNavigation();
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => {
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <footer className="footer">
        <div className="footerSection">
          <h2>&copy; AAJ</h2>
        </div>
        <div className="footerSection">
          <p>Follow us on social media:</p>
          <ul className="socialMediaLinks">
            <li><a href="https://www.facebook.com/TeslaMotorsCorp/" target="_blank" rel="noopener noreferrer">Facebook</a></li>
            <li><a href="https://twitter.com/elonmusk" target="_blank" rel="noopener noreferrer">Twitter</a></li>
            <li><a href="https://www.instagram.com/elonmusk/?hl=en" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          </ul>
        </div>
        <div className="footerSection aboutUs">
          <div>
            <a onClick={() => navigateTo('/about')}>About Us</a>
          </div>
          <div>
      <a className="message" href="#" onClick={openModal}>Contact Us</a>

      <Modal
              isOpen={isModalOpen}
              onRequestClose={closeModal}
              contentLabel="Contact Us Modal"
              style={{
                content: {
                  width: '400px',
                  height: '400px',
                  margin: 'auto',
                },
              }}
            >
        <h2>Contact Us</h2>
        <p> <h1> Founders:</h1>
          <h2> Archit: Archit@arch.com </h2>
          <h2> Ana: Ana@ana.com </h2>
          <h2> Jason: Jason@Jason.com</h2>

        </p>
        <button onClick={closeModal}>Close</button>
      </Modal>
    </div>
          <div>
            <a className="reportButton" onClick={() => navigateTo('/stolen')}>Report Car Stolen</a>
          </div>
        </div>
      </footer>
    </div>
  );
}
