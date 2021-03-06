import React, { Component, Fragment, useState } from 'react';
import Select from 'react-select';
import DatePicker from 'react-date-picker';
import makeAnimated from 'react-select/lib/animated';
import { statusList, colorStyles } from '../services/helpers';
import Button from './UI/Button';

// import { DatePicker } from "material-ui-pickers";


function BasicDatePicker(props) {
    const [selectedDate, handleDateChange] = useState(new Date());

    return (
        <Fragment>
            <div className="picker">
                <DatePicker
                    label="Basic example"
                    value={selectedDate}
                    onChange={handleDateChange}
                    animateYearScrolling
                />
            </div>
        </Fragment>
    );
}
class OrdersFilter extends Component {
    state = {
        domains: null,
        products: null,
        statuses: null,
        startDate: new Date(),
        endDate: new Date(),
    }
    componentDidMount() {
        // this.setState({  });
    }
    handleChange = (selectedOption, prop) => {
        console.log(selectedOption)
        console.log(prop)
        this.setState({ [prop.name]: selectedOption })
    }
    render() {
        const { domains, products, statuses, startDate, endDate } = this.state;
        let { data } = this.props;

        data = data || [];


        return (
            <ul className="orders__filter">
                <li className="orders__filter-item">
                    <h3>Статусы</h3>
                    <Select closeMenuOnSelect={false} components={makeAnimated()} placeholder="Статусы" className="orders__filter-select" isMulti name="statuses" value={statuses} onChange={this.handleChange} options={statusList.filter(el => el.isSelect)} styles={colorStyles}/>
                </li>
                <li className="orders__filter-item">
                    <h3>Сайты</h3>
                    <Select closeMenuOnSelect={false} components={makeAnimated()} placeholder="Сайты" className="orders__filter-select" isMulti name="domains"  value={domains}  onChange={this.handleChange} options={data.domains} />
                </li>
                <li className="orders__filter-item">
                    <h3>Товары</h3>
                    <Select closeMenuOnSelect={false} components={makeAnimated()} placeholder="Товары" className="orders__filter-select" isMulti name="products" value={products} onChange={this.handleChange} options={data.products} />
                </li>
                <li className="orders__filter-item">
                    <h3>Дата</h3>
                    <div>
                        {/* <DatePicker
                            clearIcon={null}
                            calendarIcon={null}
                            className="orders__filter-date"
                            onChange={date => this.setState({ startDate: date })}
                            value={startDate}/> */}
                        <span>—</span>
                        {/* <DatePicker className="orders__filter-date" onChange={date => this.setState({ endDate: date })} value={endDate}/> */}
                        
                        
                        
                    </div>
                </li>
                <li className="orders__filter-item">
                    <Button>Применить</Button>
                </li>
            </ul>
        );
    }
}
 
export default OrdersFilter;