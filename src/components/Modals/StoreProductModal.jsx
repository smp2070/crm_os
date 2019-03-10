import React, { Component } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

import InputGroup from '../../components/InputGroup';

import { getCategories } from '../../services/authService';

class StoreProductModal extends Component {
    state = {
        product: this.setInitialState(),
        formIsValid: false
    }
    setInitialState() {
        return {
            name: {
                label: 'Товар',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Товар'
                },
                value: '',
                validation: { required: true },
                valid: false,
                touched: false
            },
            category: {
                label: 'Категория товара',
                elementType: 'select',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Виберите категорию',
                    options: []
                },
                value: '',
                validation: { required: true },
                valid: false,
                touched: false
            },
            balance: {
                label: 'Остаток',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Остаток'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            purchasePrice: {
                label: 'Закупочная цена',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Закупочная цена'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            price: {
                label: 'Цена',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Цена'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            },
            discountPrice: {
                label: 'Cкидочная цена',
                elementConfig: {
                    type: 'number',
                    placeholder: 'Скидочная цена'
                },
                value: '',
                validation: {
                    required: true,
                    isNumeric: true
                },
                valid: false,
                touched: false
            }
        }
    }
    async componentDidMount() {
        console.log(await getCategories())
        const newProduct = {...this.state.product};
        newProduct.category.elementConfig.options = await getCategories();
        this.setState({ product: newProduct });
    }
    handleInputGroup(output, isValid) {
        this.setState({ product: output, formIsValid: isValid })
        setTimeout(() => console.log(isValid), 500)
    }
    test(e) {
        e.preventDefault();
        if(this.state.formIsValid) {
            console.log('ok');
            
            return;
        }
        let product = {...this.state.product};
        for(let key in product) product[key].touched = true;
        this.setState({ product });
    }
    render() {
        const { product } = this.state;

        return (
            <Modal show={this.props.show}>
                <form className="store__modal" onSubmit={e => this.test(e)}>
                    {/* { inputs } */}
                    <InputGroup data={product} output={(state, isValid) => this.handleInputGroup(state, isValid)} />
                    <Button className="btn--green" type="submit">Сохранить</Button>
                    <Button
                        className="btn--dark"
                        onClick={() => {
                            this.setState({ product: this.setInitialState() });
                            this.props.hide();
                        }}
                    >Отменить</Button>
                    {/* <div className="space">
                        <Button className="btn--green" type="submit">Сохранить</Button>
                        <Button
                            className="btn--dark"
                            onClick={() => {
                                this.setState({ product: this.setInitialState() });
                                this.props.hide();
                            }}
                        >Отменить</Button>
                    </div> */}
                </form>
            </Modal>
        )
    }
}

export default StoreProductModal;