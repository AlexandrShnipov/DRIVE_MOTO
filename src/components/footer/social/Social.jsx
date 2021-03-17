import s from './Social.module.scss';
import Instagram from '../../../assets/images/instagram.svg';
import VK from '../../../assets/images/vk.svg';
import Facebook from '../../../assets/images/facebook.svg';
import Youtube from '../../../assets/images/youtube.svg';

const Social = () => {
  return (
    <div className={s.social}>
      <ul className={s.socialItems}>
        <li><a href="#"><img src={Instagram} alt=""/></a></li>
        <li><a href="#"><img src={VK} alt=""/></a></li>
        <li><a href="#"><img src={Facebook} alt=""/></a></li>
        <li><a href="#"><img src={Youtube} alt=""/></a></li>
      </ul>
    </div>
  );
}

export default Social