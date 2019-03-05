import React, { Component } from 'react';
import { getProducts } from '../services/authService';
import Table from '../components/UI/Table/table';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

class WarehousePage extends Component {
    state = {
        products: [], // array
        isOpenProductModal: false,
        isOpenHistoryModal: false,
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
    showHistoryModal(item) {
        console.log('clicked history button with id: ', item)
    }

    showProductModal(item) {
        console.log(item)
        
        this.setState({ isOpenProductModal: true })
    }
    hideProductModal() {
        this.setState({ isOpenProductModal: false })
    }
    submitProduct(e) {
        e.preventDefault();
        console.log('submit');
    }
    async componentDidMount() {
        this.setState({
            products: await getProducts()
        })
    }
    render() {
        const { products } = this.state;
        return (
            <div className="warehouse">
                <h2>Склад</h2>
                <Button className="btn--green mb-25" onClick={() => this.showProductModal()}>Добавить товар</Button>
                <Table columns={this.columns} data={products} className="warehouse__table"/>
                <Modal show={this.state.isOpenHistoryModal}>

                </Modal>
                <Modal show={this.state.isOpenProductModal}>
                    {/* <h2>{isEditModal ? 'Редактировать' : 'Добавить'} оператора</h2> */}
                    <form className="users__modal" ref={form => this.usersForm = form} onSubmit={e => this.submitProduct(e)}>
                        {/* {inputs} */}
                        <div className="users__modal-buttons">
                            <Button className="btn--green" type="submit">Сохранить</Button>
                            <Button className="btn--dark" onClick={() => this.hideProductModal()}>Отменить</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        );
    }
}
 
export default WarehousePage;