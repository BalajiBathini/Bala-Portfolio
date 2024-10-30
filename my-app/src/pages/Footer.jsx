import { useEffect } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGoogle, faTwitter, faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons';
import { faAngleUp } from '@fortawesome/free-solid-svg-icons';

const Footer = () => {
  // Scroll function to show/hide the "Go to top" button
  const scrollFunction = () => {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      document.getElementById("movetop").style.display = "block";
    } else {
      document.getElementById("movetop").style.display = "none";
    }
  };

  // Top function to scroll to the top of the page
  const topFunction = () => {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
  };

  // Add event listener for scrolling when component mounts
  useEffect(() => {
    window.onscroll = scrollFunction;
    return () => {
      window.onscroll = null; // Clean up event listener when component unmounts
    };
  }, []);

  return (
    <footer className="hero-footer">
      <div id="footers14-block" className="py-3">
        <div className="container">
          <div className="text-center">
            <div className="social">
              <a href="mailto:balajijr007@gmail.com" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faGoogle} />
              </a>
              <a href="https://www.twitter.com/BalajiJr5" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faTwitter} />
              </a>
              <a href="https://www.instagram.com/balajijr_03" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faInstagram} />
              </a>
              <a href="https://youtube.com/@balajijr1354" target="_blank" rel="noopener noreferrer">
                <FontAwesomeIcon icon={faYoutube} />
              </a>
            </div>
            <div className="copyright mt-1">
              <p>© 2023 Balaji Bathini. All Rights Reserved</p>
            </div>
          </div>
        </div>
      </div>

      <button onClick={topFunction} id="movetop" title="Go to top">
        <FontAwesomeIcon icon={faAngleUp} />
      </button>
    </footer>
  );
};

export default Footer;
