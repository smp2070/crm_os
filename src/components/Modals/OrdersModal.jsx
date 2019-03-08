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
                    <div onClick={this.props.toggleModal}>X</div>
                </div>
                <div className="orders-modal__middle">
                    <div>
                        123456
                    </div>
                    <div>
                        <fieldset className="orders-modal__">
                            <blockquote>
                                <p></p>
                                <div>
                                    <span></span>
                                    <span></span>
                                </div>
                            </blockquote>
                        </fieldset>
                    </div> 
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