import React, { Component } from 'react';
import Table from '../components/UI/Table/table';
import Select from 'react-select';
import Button from '../components/UI/Button';
// import Modal from './UI/Modal';
// import { pageCount } from '../services/helpers';


class OrdersTable extends Component {
    state = {
        selectedOption: null,
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
    pageCount = [
        { value: 5, label: 5 },
        { value: 10, label: 10 },
        { value: 15, label: 15 },
        { value: 20, label: 20 },
        { value: 50, label: 50 },
        { value: 100, label: 100 }
    ];
    handleChange = (selectedOption) => {
        this.setState({ selectedOption: selectedOption });
        console.log(`Option selected: `, selectedOption);
    }

    render() {
        const { selectedOption } = this.state; 
        let { data } = this.props;

        console.log('pageCount ', this.pageCount[0]);
        
        console.log(data, 'data')
        return (
            <div className="orders__table">
                <div className="orders__table-nav">
                    <div className="orders__table-nav-left">
                        <Button
                            onClick={() => this.props.toggleModal()}
                            className="orders__add-product"
                            >Добавить заказ</Button>
                        <Select
                            className="orders__quantity"
                            value={selectedOption}
                            onChange={value => this.handleChange(value)}
                            options={this.pageCount}
                            defaultValue={this.pageCount[0]}
                        />
                        <Button className="orders__reload" />
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