import React, { Component } from 'react';
import Table from '../components/UI/Table/table';
import Select from 'react-select';
import Button from '../components/UI/Button';
// import Modal from './UI/Modal';


const qnt = [
    {value: 5, label: 5},
    {value: 10, label: 10},
    {value: 15, label: 15},
    {value: 20, label: 20},
    {value: 50, label: 50},
    {value: 100, label: 100}
];

class OrdersTable extends Component {
    state = {
        selectedOption: 5,
        isOpenModal: false
    }
    columns = [
        { path: "name", label: "---" },
        { path: "photo", label: "Номер заказа" },
        { path: "category", label: "Дата" },
        { path: "balance", label: "Имя" },
        { path: "reserve", label: "Товар" },
        { path: "purchasePrice", label: "Цена" },
        { path: "price", label: "Домен" },
        { path: "discountPrice", label: "Статус" },
        {
            path: "id",
            label: "Редактировать",
            // content: item => <button className="btn btn--blue btn--edituser"></button>
            content: item => <Button className="btn--blue btn--edituser"/>
        }
    ]
    handleChange = (selectedOption) => {
        this.setState({ selectedOption });
        console.log(`Option selected:`, selectedOption);
    }

    render() { 
        let { data } = this.props;
        
        console.log(data, 'data')
        return (
            <div className="orders__table">
                <div>
                    <div style={{display: 'flex'}}>
                        <Button onClick={() => this.showModal()}>Добавить заказ</Button>

                        <Select className="orders__quantity" defaultValue={qnt[0]} value={this.state.selectedOption} onChange={this.handleChange} options={qnt} />
                        <span>Всего: {data.ordersCount}</span>
                    </div>
                    <input type="text" />
                </div>
                <Table columns={this.columns} data={data.orders} />


            </div>
        );
    }
}
 
export default OrdersTable;