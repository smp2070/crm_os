import React, { Component } from 'react';
import Button from '../components/UI/Button';
// import Input from '../components/UI/Input';

import InputGroup from '../components/InputGroup';

class LoginPage extends Component {
    state = {
        login: {
            email: {
                label: 'Email',
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
                label: 'Password',
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
    handleInputGroup(output) {
        const login = {
            email: output.email,
            password: output.password
        };
        this.setState({ login })
        console.log(this.state.login)
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('submit')
    }
    render() {
        const { login } = this.state;
        
        return (
            <div className="signin">
                <div className="signin__inner">
                    <h1 className="signin__title">TOP-SALE</h1>
                    <form className="signin__form" onSubmit={e => this.onSubmit(e)}>
                        <InputGroup data={login} output={(state, isValid) => this.handleInputGroup(state, isValid)}/>
                        <label className="new__check">
                            <input type="checkbox"/>
                            <b>Запомнить меня</b>
					    </label>
                        <Button type="submit" className="btn--dark">Вход</Button>
			        </form>
                </div>
            </div>
        );
    }
}
 
export default LoginPage;