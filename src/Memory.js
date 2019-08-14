import React, { Component } from 'react';
import './css/App.css';
import Button from './Button';

class Memory extends Component {
    state = {}
    render() {
        return (
            <div className="memory">
                <Button />
            </div>
        );
    }
}

export default Memory;