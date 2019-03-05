import React, { Component } from 'react';
import Button from '../UI/Button';

import InputGroup from '../../components/InputGroup';

class UserModal extends Component {
    state = {
        userForm: null
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
            },
            confirmPassword: {
                elementType: 'input',
                    elementConfig: {
                    type: 'password',
                        placeholder: 'Confirm password'
                },
                value: '',
                    validation: {
                    required: true
                },
                valid: false,
                    touched: false
            }
        }
    }
    handleInputGroup() {

    }
    componentDidMount() {
        this.setState({ userForm: this.getInitialState() })
    }
    setType() {

    }
    render() {
        const { userForm } = this.state;


        if (!this.props.user) {
            // delete this.state.userForm.confirmPassword
            // console.log(111, this.props.user)
            // console.log(this.state.userForm)
            // const newUserForm = {...this.state.userForm}
            // delete newUserForm.confirmPassword;
            // console.log('newUserForm',newUserForm);
            // this.setState({ userForm: newUserForm });
            // console.log(this.state.userForm);

            const inputGroup = <InputGroup data={userForm} output={item => this.handleInputGroup(item)} />
        }else{
            const inputGroup = <InputGroup data={userForm} output={item => this.handleInputGroup(item)} />
        }
        


        return (
            <form className="users__modal" ref={form => this.usersForm = form} onSubmit={e => this.props.submit(e)}>
                {/* { inputGroup } */}
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
        )
    }
}

export default UserModal;