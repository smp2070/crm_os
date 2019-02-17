import React, { Component } from 'react';
import Button from '../components/UI/Button';


class LoginPage extends Component {
    state = {
        
    }
    render() {
        return (
            <div className="signin">
                <div className="signin__inner">
                    <h1 className="signin__title">TOP-SALE</h1>
                    <form className="signin__form" >
                        <input type="text"/>
                        <input type="text"/>
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