import React, { Component } from 'react';
import { getProducts } from '../services/authService';
import Table from '../components/UI/Table/table';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

import StoreProductModal from '../components/Modals/StoreProductModal';
import StoreHistoryModal from '../components/Modals/StoreHistoryModal';

class WarehousePage extends Component {
    state = {
        products: [], // array
        productModal: false,
        historyModal: false,
        product: null,
        history: null,

        isOpenModal: false
    }
    columns = [
        { path: "name", label: "Товар" },
        { path: "photo", label: "Фото", content: item => <img src={`http://diamo.oscorp.pro/img/tovar/${item.photo}`} alt={item.name}/> },
        { path: "category", label: "Категория" },
        { path: "balance", label: "Остаток" },
        { path: "reserve", label: "Резерв" },
        { path: "purchasePrice", label: "Закупочная цена" },
        { path: "price", label: "Цена" },
        { path: "discountPrice", label: "Скидочная цена" },
        { path: "history", label: "History",
            content: item => <Button className="btn--blue btn--history" onClick={() => this.showHistoryModal(item.id)} />
        },
        { path: "id", label: "Edit",
            content: item => <Button className="btn--blue btn--edituser" onClick={() => this.showProductModal(item.id)} />
        }
    ]

    showHistoryModal(id) {
        console.log(id)
        this.setState({ historyModal: true, history: id })
    }
    showProductModal() {
        this.setState({ productModal: true, isOpenModal: true})
    }
    submitProduct(e) {
        e.preventDefault();
        console.log('submit');
    }
    hideModal() {
        this.setState({
            productModal: false,
            historyModal: false,
            product: null,
            history: null
        });
    }
    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }
    render() {
        const { products, productModal, historyModal, product, history } = this.state;
        return (
            <div className="warehouse">
                <h2>Склад</h2>
                <Button className="btn--green mb-25" onClick={() => this.showProductModal()}>Добавить товар</Button>
                <Table columns={this.columns} data={products} className="warehouse__table"/>
                <StoreProductModal show={productModal} hide={this.hideModal.bind(this)} data={product} />
                <StoreHistoryModal show={historyModal} hide={this.hideModal.bind(this)} data={history}/>
            </div>
        );
    }
}
 
export default WarehousePage;