import React, { Component, Fragment} from 'react';

// import Aux from '../../../hoc/Aux';
// import Backdrop from '../Backdrop';
import Backdrop from './Backdrop';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    render() {
        return (
            <Fragment>
                <Backdrop show={this.props.show} clicked={this.props.modalClosed} />
                <div
                    className="modal"
                    style={{
                        transform: this.props.show ? 'translate(-50%, -50%)' : 'translate(-50%, -100vh)',
                        opacity: this.props.show ? '1' : '0'
                    }}>
                    {this.props.children}
                </div>
            </Fragment>
        )
    }
}

export default Modal;