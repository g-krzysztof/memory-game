import React from 'react';

const Button = (props) => {
    const buttons = props.buttons;
    return (
        buttons.map(button => <button key={button.id} className="memory__btn"></button>)
    );
}

export default Button;