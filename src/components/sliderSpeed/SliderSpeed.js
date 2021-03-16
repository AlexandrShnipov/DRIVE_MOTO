import './SliderSpeed.css';
import SliderImg from '../../assets/images/slider-banner.svg';
import arrowLeft from '../../assets/images/arrow-left.svg'
import arrowRight from '../../assets/images/arrow-right.svg'

function SliderSpeed () {
  return (
    <div className="slider-speed" style={{ backgroundImage: `url(${SliderImg})` }}>
      <button className="slider-left" ><img className="arrow-left" src={arrowLeft}/></button>
      <button className="slider-right" ><img className="arrow-right" src={arrowRight}/></button>
    </div>
  );
}

export default SliderSpeed;
