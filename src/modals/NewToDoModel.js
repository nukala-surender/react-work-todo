import React, { Component } from 'react';
import Modal from 'react-modal';

import ModalHeader from 'react-modal';
import ModalBody from 'react-modal';
import ModalFooter from 'react-modal';
import Button from 'react-modal';


class NewItemModal extends Component{

    constructor(props){
        super(props);

        this.state={
            isModalOpen:true
        }
    }

    render(){
        return(
            <Modal isOpen={this.state.modalIsOpen} onCancel={this.toggleModal} backdropClosesModal>
                <ModalHeader text="Lots of text to show scroll behavior" showCloseButton onClose={this.toggleModal} />
                <ModalBody>[...]</ModalBody>
                <ModalFooter>
                    <Button type="primary" onClick={this.toggleModal}>Close modal</Button>
                    <Button type="link-cancel" onClick={this.toggleModal}>Also closes modal</Button>
                </ModalFooter>
            </Modal>

        );
    }

}

export default NewItemModal;