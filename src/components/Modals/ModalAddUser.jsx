import React, { Component, Fragment } from 'react';
import Modal from '../UI/Modal';
import Button from '../UI/Button';

import InputGroup from '../InputGroup';

class ModalAddUser extends Component {
    state = {
        
        addUser: null,
        formIsValid: false,
        loading: false

    }
    getInitialState() {
        return {
            username: {
                elementType: 'input',
                    elementConfig: {
                    type: 'text',
                        placeholder: 'Username'
                },
                value: '',
                    validation: {
                    required: true
                },
                valid: false,
                    touched: false
            },
            surname: {
                elementType: 'input',
                    elementConfig: {
                    type: 'text',
                        placeholder: 'Surname'
                },
                value: '',
                    validation: {
                    required: true
                },
                valid: false,
                    touched: false
            },
            email: {
                elementType: 'input',
                    elementConfig: {
                    type: 'email',
                        placeholder: 'E-mail'
                },
                value: '',
                    validation: {
                    required: true,
                        isEmail: true
                },
                valid: false,
                    touched: false
            },
            password: {
                elementType: 'input',
                    elementConfig: {
                    type: 'password',
                        placeholder: 'Password'
                },
                value: '',
                    validation: {
                    required: true,
                    // minLength: 5,
                    // maxLength: 5,
                    // isNumeric: true
                },
                valid: false,
                    touched: false
            }
        }
    }
    handleSubmit(e) {
        e.preventDefault();
        if(this.state.formIsValid) {
            

            console.log('submit valid');
            this.props.hide();
        }
    }

    handleInputGroup(state, isValid) {
        this.setState({ addUser: state, formIsValid: isValid });
    }
    componentDidMount() {
        this.setState({ addUser: this.getInitialState() });
    }
    handleCancel() {
        this.setState({ addUser: this.getInitialState(), formIsValid: false });
        this.props.hide();
    }
    render() {
        const { addUser } = this.state;

        return (
            <Fragment>
                <h2>Добавить оператора</h2>
                <form className="users__modal" onSubmit={e => this.handleSubmit(e)}>
                    <InputGroup data={addUser} output={(state, isValid) => this.handleInputGroup(state, isValid)}/>
                    <div className="users__modal-buttons">
                        <Button className="btn--green" type="submit">Сохранить</Button>
                        <Button className="btn--dark" onClick={() => this.handleCancel()}>Отменить</Button>
                    </div>
                </form>
            </Fragment>
        );
    }
}
 
export default ModalAddUser;