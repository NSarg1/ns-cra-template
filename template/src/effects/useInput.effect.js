import { useState } from "react";

const useInput = (initialState = {}) => {
    const [inputState, setState] = useState(initialState);
    const [invalidMessages, setInvalidMessages] = useState({});
    const handleInput = (event) => {
        const { value, name, type, checked } = event.target;
        if (invalidMessages[name]) {
            const invalidMessagesCopy = { ...invalidMessages };
            delete invalidMessagesCopy[name];
            setInvalidMessages(invalidMessagesCopy);
        }
        // HANDLE VALUES FOR CHECKBOX INPUT
        else if (type === "checkbox") {
            setState((prevState) => ({ ...prevState, [name]: checked ? true : false }));
        } else {
            // HANDLE VALUES FOR OTHER INPUT TYPES
            setState((prevState) => ({ ...prevState, [name]: value }));
        }
    };
    // HANDLE VALUES FOR SELECT
    const updateInputState = (value) => {
        const invalidMessagesArr = Object.keys(invalidMessages);
        if (invalidMessagesArr.length !== 0) {
            const emptyMessages = {};
            invalidMessagesArr.forEach((item) => (emptyMessages[item] = ""));
            setInvalidMessages((prevState) => ({ ...prevState, ...emptyMessages }));
        }
        setState((prevState) => ({ ...prevState, ...value }));
    };

    const setInputState = (newState = initialState) => {
        setState(newState);
    };

    const handleInvalidMessage = (eventOrData, newMessage) => {
        setInvalidMessages({});
        if (eventOrData) {
            if (typeof eventOrData === "string")
                return setInvalidMessages({ ...invalidMessages, [eventOrData]: newMessage });

            eventOrData.preventDefault();
            const { validationMessage, name } = eventOrData.target;

            setInvalidMessages({ ...invalidMessages, [name]: newMessage || validationMessage });
        }
    };

    return {
        inputState,
        handleInput,
        updateInputState,
        setInputState,
        invalidMessages,
        handleInvalidMessage,
    };
};

export default useInput;
