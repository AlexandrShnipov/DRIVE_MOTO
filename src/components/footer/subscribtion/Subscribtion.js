import Button from '../../button/Button';
import './Subscribtion.css';

function Subscribtion({classname, name}) {
  return (
    <div className="subscribtion">
      <h3 className="subscribtion__title">Подпишитесь на нашу рассылку<br/> и узнавайте о акция быстрее</h3>
      <input className="subscribtion__input" type="text"/>
      <Button className="button-blue">ОТПРАВИТЬ</Button>
    </div>
  );
}

export default Subscribtion;
