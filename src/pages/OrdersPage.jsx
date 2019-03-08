import React, { Component } from 'react';
import { getOrders } from '../services/authService';

import StatusList from '../components/StatusList';
import OrdersTable from '../components/OrdersTable';
import OrdersFilter from '../components/OrdersFilter';
import OrdersStatistics from '../components/OrdersStatistics';
import OrdersChangeStatus from '../components/OrdersChangeStatus';
import OrdersGlobalSearch from '../components/OrdersGlobalSearch';

import Modal from '../components/UI/Modal';
import OrdersModal from '../components/Modals/OrdersModal';
// import Button from '../components/UI/Button';

class OrdersPage extends Component {
    state = {
        data: {}, // object
        isOpenModal: false
    }
    toggleModal() {
        this.setState({isOpenModal: !this.state.isOpenModal});
    }
    async componentDidMount() {
        this.setState({ data: await getOrders() });
    }
    render() {
        const { data, isOpenModal } = this.state;
        console.log(data);
        return (
            <div className="orders">
                <div className="orders__flex" style={{borderBottom: '5px solid green'}} >
                    <StatusList />
                    <OrdersGlobalSearch />
                </div>
                <div className="orders__flex">
                    <OrdersFilter data={data} />
                    <OrdersChangeStatus />
                </div>
                <OrdersTable data={data} toggleModal={this.toggleModal.bind(this)}/>
                <div className="orders__flex">
                    <div>pagination ....</div>
                    <OrdersChangeStatus />
                </div>
                <OrdersStatistics data={data.statistic} />
                <Modal show={isOpenModal}>
                    <OrdersModal toggleModal={this.toggleModal.bind(this)} modalType=""/>
                </Modal>
            </div>
        );
    }
}
 
export default OrdersPage;