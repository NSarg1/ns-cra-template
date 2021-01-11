import React from "react";
import classNames from "classnames";

const Input = (props) => {
    const {
        className,
        variant,
        // suggestionProps = {},
        inputData,
        value = inputData?.inputState[props.name],
        onChange = inputData?.handleInput,
        error = inputData?.invalidMessages,
        onInvalid = inputData?.handleInvalidMessage,
        ...otherProps
    } = props;
    const { name } = props;
    const inputClasses = classNames({
        "ns-input": true,
        [className]: className,
    });

    const nativeInputClasses = classNames({
        "ns-input__native": true,
    });

    const handleFocus = (event) => {
        if (error[name]) onInvalid("");
        event.target.setCustomValidity("");
    };

    return (
        <div className={inputClasses}>
            <input
                className={nativeInputClasses}
                autoComplete="off"
                value={value || ""}
                onChange={onChange}
                onInvalid={onInvalid}
                onFocus={handleFocus}
                {...otherProps}
            />
            {!!error?.[name] && <p className="ns-input__error">{error?.[name] || ""}</p>}
        </div>
    );
};

export default Input;
