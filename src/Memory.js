import React, { Component } from 'react';
import './css/App.css';
import Button from './Button';

class Memory extends Component {
    state = {
        buttons: [
            { id: 0, name: 'A', clicked: false, disabled: false },
            { id: 1, name: 'A', clicked: false, disabled: false },
            { id: 2, name: 'B', clicked: false, disabled: false },
            { id: 3, name: 'B', clicked: false, disabled: false },
            { id: 4, name: 'C', clicked: false, disabled: false },
            { id: 5, name: 'C', clicked: false, disabled: false },
            { id: 6, name: 'D', clicked: false, disabled: false },
            { id: 7, name: 'D', clicked: false, disabled: false },
            { id: 8, name: 'E', clicked: false, disabled: false },
            { id: 9, name: 'E', clicked: false, disabled: false },
            { id: 10, name: 'F', clicked: false, disabled: false },
            { id: 11, name: 'F', clicked: false, disabled: false },
            { id: 12, name: 'G', clicked: false, disabled: false },
            { id: 13, name: 'G', clicked: false, disabled: false },
            { id: 14, name: 'H', clicked: false, disabled: false },
            { id: 15, name: 'H', clicked: false, disabled: false },
        ],
        step: 0
    }

    compareNumbers = () => {
        let a = Math.random() - 0.5;
        let b = Math.random() - 0.5;
        return a - b
    }

    componentDidMount() {
        let buttons = [...this.state.buttons];
        buttons = buttons.sort(this.compareNumbers);
        this.setState({
            buttons
        })
    }

    handleClick = e => {
        let buttons = [...this.state.buttons];
        if (this.state.step < 2) {
            // buttons = buttons.map(button => parseInt(e.target.id, 10) === button.id ? { id: button.id, name: button.name, clicked: true, disabled: false } : button)
            buttons.forEach(button => { if (parseInt(e.target.id, 10) === button.id) { button.clicked = true; } })

            this.setState({
                buttons,
                step: this.state.step + 1
            })
        }
    }

    render() {
        return (
            <div className="memory">
                <Button buttons={this.state.buttons} onClick={this.handleClick} />
            </div>
        );
    }
}

export default Memory;