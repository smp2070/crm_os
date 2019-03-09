import React, { Component } from 'react';
import Modal from '../UI/Modal';

class StoreHistoryModal extends Component {
    state = {

    }
    render() {
        return (
            <Modal show={this.props.show}>
                <div>

                    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Exercitationem illo maiores, cumque impedit enim ducimus! Recusandae adipisci ab nesciunt reiciendis consequuntur vitae deleniti et eos vero esse fugit, sunt corrupti.
                </div>
                <button onClick={this.props.hide}>cancel</button>
            </Modal>
        )
    }
}

export default StoreHistoryModal;