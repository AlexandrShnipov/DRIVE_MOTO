import './Social.css';
import Instagram from '../../../assets/images/instagram.svg';
import VK from '../../../assets/images/vk.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Youtube from '../../../assets/images/youtube.svg';

function Social() {
  return (
    <div className="social">
      <ul className="social-items">
        <li className="social-item"><a className="social-link" href="#"><img src={Instagram} alt=""/></a></li>
        <li className="social-item"><a className="social-link" href="#"><img src={VK} alt=""/></a></li>
        <li className="social-item"><a className="social-link" href="#"><img src={Facebook} alt=""/></a></li>
        <li className="social-item"><a className="social-link" href="#"><img src={Youtube} alt=""/></a></li>
      </ul>
    </div>
  );
}

export default Social;
