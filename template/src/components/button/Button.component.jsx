import React from "react";
import classNames from "classnames";
import Spinner from "components/spinner/Spinner.component";

const Button = (props) => {
    const { children, className, isLoading = false, disabled, variant, ...otherProps } = props;

    const btn_styles = classNames({
        "ns-btn": true,
        "ns-btn--primary": variant === "primary",
        [className]: className,
    });

    return (
        <button className={btn_styles} {...otherProps} disabled={disabled || isLoading}>
            <span>{children}</span>
            {isLoading && <Spinner className="spinner" />}
        </button>
    );
};

export default Button;
