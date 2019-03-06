import React, { Component } from 'react';
import Input from '../components/UI/Input';
import Button from '../components/UI/Button';

class OrdersGlobalSearch extends Component {
    state = {
        
    }
    render() {
        return (
            <form className="global-search">
                <Input />
                <Button>Применить</Button>
            </form>
        )
    }
}
export default OrdersGlobalSearch;