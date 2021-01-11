import { useState } from "react";

const useModals = () => {
    const [modalsIsOpen, setModalsIsOpen] = useState();

    const toggleModal = (modalName) => {
        setModalsIsOpen({ ...modalsIsOpen, [modalName]: !modalsIsOpen?.[modalName] });
    };
    const toggleMultipleModals = (data) => {
        setModalsIsOpen({ ...modalsIsOpen, ...data });
    };

    return { toggleModal, toggleMultipleModals, modalsIsOpen };
};

export default useModals;
