import React, { Component, Fragment } from 'react';
import { statusList } from '../services/helpers';
import Input from './UI/Input';
import Button from './UI/Button';

import InputGroup from '../components/InputGroup';

class OrdersNav extends Component {
    state = {

        // currentStatus: 0

    }
    onSubmit(e) {
        e.preventDefault();
        console.log('submit');
    }
    // changeStatus(currentStatus) {
    //     console.log('e', currentStatus);
    //     this.setState({ currentStatus })
    // }
    loading(e, y) {
        console.log('loading', y, e) 
    }
    render() {
        // const { currentStatus } = this.state;
        const list = statusList.filter(el => el.isRadio).map(status => {
            const { value } = status;
            return (
                <Fragment key={value}>
                    <input
                        type="radio"
                        name="radio"
                        className="status__input"
                        id={'status__input--' + value}
                        hidden
                        defaultChecked={this.props.currentStatus === value}
                        onChange={value => this.props.changeStatus(value)}
                    />
                    <label
                        htmlFor={'status__input--' + value}
                        className="status__label"
                        style={{ backgroundColor: status.color }}
                    >{status.radioName}</label>
                </Fragment>
            )
        });
        const borderColor = statusList.filter(el => el.value === this.props.currentStatus)[0].color;
        return (
            <div className="orders__flex orders__head" style={{ borderColor }}>
                <div className="status">{list}</div>
                <form className="global-search" onSubmit={this.onSubmit.bind(this)}>
                    <Input placeholder="Глобальный поиск" className="global-search__input"/>
                    <Button type="submit">Применить</Button>
                </form>
            </div>
        );
    }
}
 
export default OrdersNav;