import Modal from 'react-modal';
import {Photo} from "../types";
import {FC} from "react";

interface Modal{
    modalImage: Photo,
    modalIsOpen: boolean,
    closeModal: ()=>void
}
Modal.setAppElement('#root');

const customStyles = {
        overlay: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            zIndex: "999999",
            backgroundColor: "rgba(45, 45, 45, 0.3)",
            backdropFilter: "blur(5px)",
        },
        content: {
            display: "flex",
            position: "relative",
            justifyContent: "center",
            alignItems: "center",
            borderRadius: "0",
            padding: 0,
            width: "800px",
            height: "fit-content",
            opacity: 1,
            backgroundColor: "black",
            color: "white",
            inset: 0,
        },
};
const ModalImage: FC<Modal> = ({modalImage, modalIsOpen, closeModal}) => {

    return (
        <div>
            <Modal
                isOpen={modalIsOpen}
                onRequestClose={closeModal}
                style={customStyles}
                contentLabel="Example Modal"
            >
                <img src={modalImage?.urls.regular} alt={modalImage?.alt_description}/>
            </Modal>
        </div>
    );
};

export default ModalImage;