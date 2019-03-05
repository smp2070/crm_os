import React, { Component } from 'react';
import { getOrders } from '../services/authService';

import StatusList from '../components/StatusList';
import OrdersTable from '../components/OrdersTable';
import OrdersFilter from '../components/OrdersFilter';
import OrdersStatistics from '../components/OrdersStatistics';
import OrdersChangeStatus from '../components/OrdersChangeStatus';
import OrdersGlobalSearch from '../components/OrdersGlobalSearch';

// import Modal from '../components/UI/Modal';

class OrdersPage extends Component {
    state = {
        data: {}, // object
    }
    async componentDidMount() {
        this.setState({ data: await getOrders() });
    }
    render() {
        const { data } = this.state;
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
                <OrdersTable data={data}/>
                <div className="orders__flex">
                    <div>pagination ....</div>
                    <OrdersChangeStatus />
                </div>
                <OrdersStatistics data={data.statistic} />
                {/* <Modal></Modal> */}
            </div>
        );
    }
}
 
export default OrdersPage;