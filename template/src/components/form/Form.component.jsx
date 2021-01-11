import React from "react";
import PropTypes from "prop-types";

const Form = ({ children, onSubmit, ...restProps }) => {
    const handleSubmit = (event) => {
        event.preventDefault();
        if (onSubmit)
            if (onSubmit?.length === 0) onSubmit(event);
            else onSubmit();
    };
    return (
        <form onSubmit={handleSubmit} {...restProps}>
            {children}
        </form>
    );
};

Form.propTypes = {
    onSubmit: PropTypes.func.isRequired,
};

export default Form;
