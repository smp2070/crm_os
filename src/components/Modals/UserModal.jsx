import React, { Component } from 'react';
import Button from '../UI/Button';
import Modal from '../UI/Modal';

import InputGroup from '../../components/InputGroup';

class UserModal extends Component {
    state = {
        userForm: null
    }
    setInitialState() {
        const base = {
            username: {
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
        };
        const confirm = {
            confirmPassword: {
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
        };
        console.log('this.props.user: ',this.props.user)
        console.log('this...', this.props.isModalEditUser)
        const result = this.props.user ? { ...base, ...confirm } : base;
        // this.setState( (prevState, props) => {
        //     if(prevState !== this.state) {
        //         return { userForm: result };
        //     }
        // });
        if (this.state.userForm !== result) {
            this.setState({ userForm: result })
        }
       
    }

    handleInputGroup() {

    }
    componentWillUpdate() {
        // this.setInitialState();
        console.log('will update')
    }
    componentDidMount() {
        // this.setInitialState();
        // console.log('did mount')
    }
    setType() {

    }
    render() {
        console.log('render', this.props)
        const { userForm } = this.state;

        // let inputs;
        // if (!this.props.user) {
        //     inputs = <InputGroup data={userForm} output={item => this.handleInputGroup(item)} />
        // }else{
        //     inputs = <InputGroup data={userForm} output={item => this.handleInputGroup(item)} />
        // }

        return (

                <form className="users__modal" ref={form => this.usersForm = form} onSubmit={e => this.props.submit(e)}>
                    {/* { inputs } */}
                    <InputGroup data={userForm} output={item => this.handleInputGroup(item)} />
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