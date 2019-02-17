import React, { Component } from 'react';
import { getUsers, getUser } from '../services/authService';
import Table from '../components/UI/Table/table';
import Modal from '../components/UI/Modal';
import Button from '../components/UI/Button';

class AdminPage extends Component {
    state = {
        users: [], // array,
        user: [
            { _id: 1, id: '' },
            { _id: 3, username: '', label: 'Username', name: 'username' },
            { _id: 4, surname: '', label: 'Surname', name: 'surname' },
            { _id: 2, email: '', label: 'Email', name: 'email' },
            { _id: 5, password: '', label: 'Password', name: 'password' },
            { _id: 6, confirmPassword: '', label: 'Confirm password', name: 'confirmPassword', isEdit: true }
        ],
        isEditModal: false,
        isOpenModal: false
    }
    columns = [
        { path: "username", label: "Username"},
        { path: "mail", label: "Email" },
        { path: "id", label: "Edit",
            content: user => (
                <Button onClick={() => this.showModal(user)} className="btn-blue btn--edituser"/>
            )
        }
    ]
    setInitialUserState() {
        return [
            { _id: 1, id: '' },
            { _id: 3, username: '', label: 'Username', name: 'username'},
            { _id: 4, surname: '', label: 'Surname', name: 'surname' },
            { _id: 2, email: '', label: 'Email', name: 'email' },
            { _id: 5, password: '', label: 'Password', name: 'password' },
            { _id: 6, confirmPassword: '', label: 'Confirm password', name: 'confirmPassword', isEdit: true }
        ]
    }

    async showModal(user) {
        console.log('user', user)
        if (user) {
            const data = await getUser(user.id);
            
            console.log('answer', data);
            this.setState({ isEditModal: true });
            console.log('modal is Edit', this.state.isEditModal)
        }
        this.setState({ isOpenModal: true });
        this.renderInputs()
    }
    hideModal() {
        this.usersForm.reset();
        this.setState({
            isOpenModal: false,
            isEditModal: false
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        console.log('submit; this.state.user', this.state.user);

        this.hideModal()
    }
    changeInput(e) {
        const { name, value } = e.target;
        console.log(name);
        this.setState({ user: { username: value} })
        console.log('change input: ', value);
    }
    renderInputs() {
        return this.state.user
            .filter(el => el.label && (this.state.isEditModal ? el : !el.isEdit))
            .map(el => {
                return <input 
                            key={el._id}
                            type="text"
                            value={el.value}
                            placeholder={el.label}
                            onChange={this.changeInput}
                            name={el.name}/>
            });
    }

    async componentDidMount() {
        this.setState({ users: await getUsers() });
    }
    render() {
        const { users, user, isEditModal } = this.state;
        const inputs = this.state.user.filter(el => el.label && (isEditModal ? el : !el.isEdit)).map(el => {
            return <input key={el._id} type="text" onChange={this.changeInput} defaultValue={el.value} placeholder={el.label} name={el.name} />
        })
        
        return (
            <div className="users">
                <h2>Управление операторами</h2>
                <Button onClick={() => this.showModal()} className="btn--green mb-25">Добавить оператора</Button>
                <Table columns={this.columns} data={users} />
                <Modal show={this.state.isOpenModal}>
                    <h2>{isEditModal ? 'Редактировать' : 'Добавить'} оператора</h2>
                    <form className="users__modal" ref={form => this.usersForm = form} onSubmit={e => this.handleSubmit(e)}>
                        {/* {inputs} */}
                        {this.renderInputs()}
                        <div className="users__modal-buttons">
                            <Button className="btn--green" type="submit">Сохранить</Button>
                            <Button className="btn--dark" onClick={() => this.hideModal()}>Отменить</Button>
                        </div>
                    </form>
                </Modal>
            </div>
        )
    }
}
 
export default AdminPage;
