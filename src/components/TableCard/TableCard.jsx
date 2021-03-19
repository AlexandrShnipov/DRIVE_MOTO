import s from './TableCard.module.scss';

const TableCard = () => {
    return (
        <table>
            <tr>
                <th>Характеристики</th>
                <th>Наличие в магазине</th>
            </tr>
            <tr>
                <td>Производитель</td>
                <td>Канада</td>
            </tr>
            <tr>
                <td>Количество мест, шт: </td>
                <td>3</td>
            </tr>
            <tr>
                <td>Мощность, л.с.</td>
                <td>155</td>
            </tr>
            <tr>
                <td>Тип двигателя</td>
                <td>Бензиновый</td>
            </tr>
            <tr>
                <td>Год выпуска</td>
                <td>2018</td>
            </tr>
        </table>
    )
}

export default TableCard;