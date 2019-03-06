import React, { Component } from 'react';
import Button from '../components/UI/Button';
// import Input from '../components/UI/Input';

import InputGroup from '../components/InputGroup';

class LoginPage extends Component {
    state = {
        login: {
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
        },
        formIsValid: false,
        rememberMe: false

    }
    handleInputGroup(output, isValid) {
        this.setState({ login: output, formIsValid: isValid })
        setTimeout( () => console.log(isValid), 500)
    }
    onSubmit(e) {
        e.preventDefault();
        
        if (this.state.formIsValid) {
            console.log('submit')
        } else {

        }
        
    }
    render() {
        const { login, formIsValid } = this.state;
        
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
                        <Button disabled={!formIsValid} type="submit" className="btn--dark">Вход</Button>
			        </form>
                </div>
            </div>
        );
    }
}
 
export default LoginPage;