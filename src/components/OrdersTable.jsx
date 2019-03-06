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
        { path: "status", label: <input type="checkbox" />, content: item => <input type="checkbox" /> },
        { path: "id", label: "Номер заказа" },
        { path: "create_time", label: "Дата" },
        { path: "name", label: "Имя" },
        { path: "model", label: "Товар" },
        { path: "price", label: "Цена" },
        { path: "domain", label: "Домен" },
        { path: "vid", label: "Статус" },
        {
            path: "edit",
            label: "Редактировать",
            // content: item => <button className="btn btn--blue btn--edituser"></button>
            content: item => <Button className="btn--blue btn--edituser" onClick={this.props.toggleModal}/>
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
                <div className="orders__table-nav">
                    <div className="orders__table-nav-left">
                        <Button onClick={() => this.props.toggleModal()} className="orders__add-product">Добавить заказ</Button>
                        <Select className="orders__quantity" defaultValue={qnt[0]} value={this.state.selectedOption} onChange={this.handleChange} options={qnt} />
                        <Button className="orders__reload"/>
                        <span>Всего: {data.ordersCount}</span>
                    </div>
                    <input type="text" className=""/>
                </div>
                <Table columns={this.columns} data={data.orders} className="orders__table-inner"/>


            </div>
        );
    }
}
 
export default OrdersTable;