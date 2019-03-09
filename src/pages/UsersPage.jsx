import React, { Component } from 'react';
import { getUsers, getUser } from '../services/authService';
import Table from '../components/UI/Table/table';
import Button from '../components/UI/Button';
import Modal from '../components/UI/Modal';

import ModalAddUser from '../components/Modals/ModalAddUser';
import ModalEditUser from '../components/Modals/ModalEditUser';

import UserModal from '../components/Modals/UserModal';

class AdminPage extends Component {
    state = {
        users: [], // array,
        user: null,
        isModalEditUser: false,
        isOpenModal: false,

        modalType: ''
    }
    columns = [
        { path: "username", label: "Username" },
        { path: "mail", label: "Email" },
        { path: "id", label: "Edit", content: user => (
            <Button onClick={() => {console.log('user ',user); this.showModal(user)} } className="btn-blue btn--edituser" />
        )}
    ]
    async showModal(user) {
        user
            ? this.setState({ isOpenModal: true, isModalEditUser: true, user: await getUser(user.id) })
            : this.setState({ isOpenModal: true, isModalEditUser: false })
    }
    hideModal() {
        // this.usersForm.reset();
        this.setState({
            user: null,
            isOpenModal: false
        });
    }
    onSubmit(e) {
        e.preventDefault();
        console.log('submit', e);
    }

    async updateUsers() {
        this.setState({ users: await getUsers() });
    }
    componentDidMount() {
        this.updateUsers();
    }
    render() {
        const { user, users, isOpenModal, isModalEditUser, modalType } = this.state;

        return (
            <div className="users">
                <h2>Управление операторами</h2>
                <Button onClick={() => this.showModal()} className="btn--green mb-25">Добавить оператора</Button>
                <Table columns={this.columns} data={users} />
                <Modal show={isOpenModal}>
                    <UserModal hide={this.hideModal.bind(this)} user={user} submit={this.onSubmit}/>
                </Modal>
            </div>
        )
    }
}

export default AdminPage;
