import s from'./Subscribtion.module.scss';
import Button from '../../button/Button';


const Subscribtion = ({classname, name}) => {
  return (
      <div className={s.subscribtion}>
      <h3 className={s.subscribtionTitle}>Подпишитесь на нашу рассылку<br/> и узнавайте о акция быстрее</h3>
      <input className={s.subscribtionInput} type="text"/>
      <Button className="buttonBlue">ОТПРАВИТЬ</Button>
    </div>
  );
}

export default Subscribtion;
