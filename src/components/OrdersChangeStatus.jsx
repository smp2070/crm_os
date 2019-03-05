import React, { Component } from 'react';
import Select from 'react-select';
import Button from './UI/Button';

import { statusList } from '../services/helpers';

class OrdersChangeStatus extends Component {
    state = {
        status: null
    }
    handleChange(status) {
        this.setState({ status })
    }
    onSubmit(e) {
        e.preventDefault()

        if(this.state.status) {
            //
            console.log('onSubmit in OrdersChangeStatus');
            //
        }

        this.setState({ status: null })
    }
    render() {
        const { status } = this.state;


        return (
            <form className="relocate-status" onSubmit={e => this.onSubmit(e)}>
                <Select
                    placeholder="Выберите статус"
                    className="relocate-status__select"
                    name="changeStatus"
                    value={status}
                    onChange={item => this.handleChange(item)}
                    options={statusList.filter(el => el.isSelect)}
                    />
                <Button type="submit">Применить</Button>
            </form>
        );
    }
}
 
export default OrdersChangeStatus;