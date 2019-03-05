import React, { Component, Fragment } from 'react';
// import Modal from '../UI/Modal';
import Button from '../UI/Button';
// import { getUsers, getUser } from '../../services/authService';

import InputGroup from '../InputGroup';

class ModalEditUser extends Component {
    state = {

        editUser: {
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
        },
        formIsValid: false,
        loading: false

    }
    async componentDidMount() {
        // console.log(this.props.user);
        // const data = await getUser(this.props.user)
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit; this.state.user', this.state.user);

        this.hideModal()
    }
    render() { 
        console.log('modalEditUser is open');
        console.log(this.props.user)
        const { editUser } = this.state;
        return (
            <Fragment>
                <h2>Редактировать оператора</h2>
                <form className="users__modal" ref={form => this.usersForm = form} onSubmit={e => this.props.submit(e)}>
                    <InputGroup data={editUser} output={item => this.handleInputGroup(item)}/>
                    <div className="users__modal-buttons">
                        <Button className="btn--green" type="submit">Сохранить</Button>
                        <Button
                            className="btn--dark"
                            onClick={() => {
                                
                                this.props.hide()
                            }}
                            >Отменить</Button>
                    </div>
                </form>
            </Fragment>
        );
    }
}
 
export default ModalEditUser;
