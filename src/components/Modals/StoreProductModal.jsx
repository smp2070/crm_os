import React, { Component } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

import InputGroup from '../../components/InputGroup';

class StoreProductModal extends Component {
    state = {
        product: this.setInitialState(),
        formIsValid: false
    }
    setInitialState() {
        return {
            name: {
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
                elementType: 'input',
                elementConfig: {
                    type: 'text',
                    placeholder: 'Виберите категорию'
                },
                value: '',
                validation: { required: true },
                valid: false,
                touched: false
            },
            balance: {
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