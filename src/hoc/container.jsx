import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Backdrop from '../components/UI/Backdrop';

class Container extends Component {
    state = {
        isActiveMenu: false
    }
    toggleMenu() {
        this.setState({ isActiveMenu: !this.state.isActiveMenu })
    }
    hideMenu () {
        this.setState({ isActiveMenu: false })
    }
    handleLogout () {
        
        
        this.hideMenu()
    }
    render() {
        const { isActiveMenu } = this.state
        return (
            <React.Fragment>
                <Backdrop show={isActiveMenu} clicked={() => this.toggleMenu()} />
                <header className="header">
                    <div className="header__inner">
                        <button
                            className={`burger ${isActiveMenu ? 'burger--close' : ''}`}
                            onClick={() => this.toggleMenu()}
                            ><i></i>
                        </button>
                        <Link className="header__logo" to="/" onClick={() => this.hideMenu()}>TOP-SALE</Link>
                    </div>
                </header>
                <aside className={`aside ${isActiveMenu ? 'aside--opened' : ''}`}>
                    <ul>
                        <li className="aside__item">
                            <Link className="aside__link aside__link--orders" to="/" onClick={() => this.hideMenu()}>Заявки</Link>
                        </li>
                        <li className="aside__item">             {/* admin */}
                            <Link className="aside__link aside__link--users" to="/admin" onClick={() => this.hideMenu()}>Пользователи</Link>
                        </li>
                        <li className="aside__item">             {/* admin */}
                            <Link className="aside__link aside__link--warehouse" to="/warehouse" onClick={() => this.hideMenu()}>Склад</Link>
                        </li>
                        <li className="aside__item">
                            <button className="aside__link aside__link--logout" onClick={() => this.handleLogout()}>Выйти</button>
                        </li>
                    </ul>
                </aside>
                <main className="wrapper">{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Container;