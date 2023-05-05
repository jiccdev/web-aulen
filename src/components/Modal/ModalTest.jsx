import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

function ModalTest({
    renderTrigger,
    renderContent,
    contentExtraClass,
    contentPaddingClass,
    triggerText = 'Open Modal',
    modalTitle = 'Modal title',
    isOpenProp,
    onCloseModal,
}) {
    const [show, setShow] = useState(isOpenProp);

    return (
        <>
            <Modal
                show={isOpenProp}
                onHide={() => onCloseModal}
                dialogClassName="modal-90w"
                aria-labelledby="example-custom-modal-styling-title"
            >
                <Modal.Header closeButton>
                    <Modal.Title id="example-custom-modal-styling-title">
                        Custom Modal Styling
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <p>

                    </p>
                </Modal.Body>
            </Modal>









        </>
    );
}

export default ModalTest;
