import React, { Component } from 'react';
import Button from '../UI/Button';

class OrdersModal extends Component {
    state = {

    }
    render() {
        return (
            <form className="orders-modal">
                <div className="orders-modal__top">
                    <h2 className="orders-modal__title">Подробно</h2>
                </div>
                <div className="orders-modal__middle">
                    <div>123</div>
                    <div>345</div>
                </div>
                <div className="orders-modal__bottom">
                    <Button>Сохранить</Button>
                    <Button onClick={this.props.toggleModal}>Отменить</Button>
                </div>
            </form>
        )
    }
}
export default OrdersModal;