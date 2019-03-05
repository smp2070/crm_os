import React from 'react';

const OrdersStatistics = (props) => {

    if (!props.data) return null;

    const { allCount, allAmount, allPrice, apprCount, apprPrice } = props.data;
    const apprPercent = (allCount === 0) ? 0 : parseFloat(apprCount / allCount * 100).toFixed(2);
    const style = {
        background: '#fff',
        borderRadius: 2,
        maxWidth: 300,
        padding: 15,
        boxShadow: `0 2px 1px -1px rgba(0, 0, 0, 0.2),
                    0 1px 1px 0 rgba(0, 0, 0, 0.14),
                    0 1px 3px 0 rgba(0, 0, 0, 0.12)`,
    }
    
    return (
        <div style={style}>
            <p>Всего заявок: {allCount}</p>
            <p>Всего товаров: {allAmount}</p>
            <p>Сумма заказов: {allPrice}</p>
            <p>Апрувленные: {apprCount}</p>
            <p>% апрувленных: {apprPercent} %</p>
            <p>Сумма апрувленные: {apprPrice}</p>
        </div>
    );

}
export default OrdersStatistics;