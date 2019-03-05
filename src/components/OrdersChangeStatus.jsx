import React, { Component } from 'react';
import Select from 'react-select';
import Button from './UI/Button';

class OrdersChangeStatus extends Component {
    state = {
        
    }
    handleChange() {

    }
    onSubmit(e) {
        e.preventDefault()
        console.log(e);
    }
    render() {
        return (
            <form className="relocate-status" onSubmit={e => this.onSubmit(e)}>
                <Select
                    placeholder="Выберите статус"
                    className="relocate-status__select"
                    name="changeStatus"
                    value={[]}
                    onChange={() => this.handleChange()}
                    options={[]}
                    />
                <Button
                    type="submit"
                    className="btn--blue"
                    >Применить</Button>
            </form>
        );
    }
}
 
export default OrdersChangeStatus;