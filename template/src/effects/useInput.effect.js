import { useState } from "react";

const useInput = (initialState = {}) => {
    const [inputState, setState] = useState(initialState);
    const handleInput = (event) => {
        const { value, name, type, checked } = event.target;
        // HANDLE VALUES FOR CHECKBOX INPUT
        if (type === "checkbox") {
            let checkedValue = value === "true" ? true : value;
            setState({ ...inputState, [name]: checked ? checkedValue : false });
        } else {
            // HANDLE VALUES FOR REST INPUT TYPES
            setState({ ...inputState, [name]: value });
        }
    };
    // HANDLE VALUES FOR SELECT
    const updateInputState = (value) => setState({ ...inputState, ...value });
    // REPLACE OR RESET STATE
    const setInputState = (newState = initialState) => setState(newState);

    return { inputState, handleInput, updateInputState, setInputState };
};

export default useInput;
