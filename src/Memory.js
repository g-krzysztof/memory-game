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
        step: 0,
        count: 0
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

    componentDidUpdate() {
        let buttons = [...this.state.buttons];
        buttons = buttons.filter(button => button.clicked === true ? button : null)

        setTimeout(() => {
            if (buttons.length === 2 && buttons[0].name !== buttons[1].name) {
                let buttons = [...this.state.buttons];
                buttons.forEach(button => { if (button.clicked === true) { button.clicked = false; } })
                this.setState({
                    buttons,
                    count: this.state.count + 1,
                    step: 0
                })
            } else if (buttons.length === 2 && buttons[0].name === buttons[1].name) {
                if (buttons[0].id !== buttons[1].id) {
                    let buttons = [...this.state.buttons];
                    buttons.forEach(button => { if (button.clicked === true) { button.disabled = true; button.clicked = false } })
                    this.setState({
                        buttons,
                        count: this.state.count + 1,
                        step: 0
                    })
                }
            }
        }, 1000);
    }

    handleClick = e => {
        let buttons = [...this.state.buttons];
        if (this.state.step < 2) {
            buttons.forEach(button => { if (parseInt(e.target.id, 10) === button.id) { button.clicked = true; } })

            this.setState({
                buttons
            })
            let clickedButtons = buttons.filter(button => button.clicked === true);

            // prevent from clicked two times the same button

            if (clickedButtons.length !== 1) {
                this.setState({
                    step: this.state.step + 1
                })
            }
        }
    }

    render() {
        return (
            <div className="memory">
                <Button buttons={this.state.buttons} onClick={this.handleClick} />
                <div className="memory__text">Liczba prób: {this.state.count}</div>
                <button className="memory__restart-btn">Zagraj od nowa</button>
            </div>
        );
    }
}

export default Memory;