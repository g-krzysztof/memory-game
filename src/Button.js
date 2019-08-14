import React from 'react';

const Button = (props) => {
    const buttons = props.buttons;
    return (
        buttons.map(button => <button
            className="memory__btn"
            key={button.id}
            id={button.id}
            onClick={props.onClick}>
        </button>)
    );
}

export default Button;