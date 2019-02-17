import React, { Component } from 'react';
import { getOrders } from '../services/authService';

import StatusList from '../components/StatusList';
import OrdersTable from '../components/OrdersTable';
import OrdersFilter from '../components/OrdersFilter';
import OrdersStatistics from '../components/OrdersStatistics';

class OrdersPage extends Component {
    state = {
        data: {}, // object
    }
    statusList = [
        { color: '#999999', value: 0, isRadio: true,  name: 'Новые',          radioName: 'Обработка'      },
        { color: '#0f66c6', value: 1, isRadio: true,  name: 'Подтвержденные', radioName: 'Подтвержденный' },
        { color: '#9b460c', value: 2, isRadio: false, name: 'Перезвонить'                                 },
        { color: '#EB3C00', value: 3, isRadio: true,  name: 'Отказ',          radioName: 'Отказ'          },
        { color: '#4fd9eb', value: 4, isRadio: false, name: 'В работе'                                    },
        { color: '#8f5ceb', value: 5, isRadio: true,  name: 'Дубли',          radioName: 'Дубль'          },
        { color: '#ece92b', value: 6, isRadio: false, name: 'Недозвон'                                    },
        { color: '#cca11b', value: 7, isRadio: true,  name: 'Отправленные',   radioName: 'Отправленный'   },
        { color: '#00A300', value: 8, isRadio: true,  name: 'Полученные',     radioName: 'Полученный'     },
        { color: '#bd140f', value: 9, isRadio: true,  name: 'Возврат',        radioName: 'Возврат'        },
        { color: '#000000', value: 12, isRadio: true, name: 'Архив',          radioName: 'Архив'          }
    ]
    async componentDidMount() {

        this.setState({
            data: await getOrders()
        })
    }
    render() {
        const { data } = this.state;
        console.log(data);
        return (
            <div className="orders">
                {/* <h1>Заявки</h1> */}
                <div className="orders__top">
                    <StatusList data={this.statusList.filter(el => el.isRadio)} />

                </div>
                <div>
                    <OrdersFilter data={data} />
                </div>

                <OrdersTable data={data}/>

                <OrdersStatistics data={data.statistic} />
            </div>
        );
    }
}
 
export default OrdersPage;