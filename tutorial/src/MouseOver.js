import React from 'react';

class MouseOver extends React.Component {

    state = {
        x: 0,
        y: 0
    }

    handleMouseMove = evt => {
        this.setState({
            x: evt.clientX,
            y: evt.clientY
        })
    }

    render() {
        return <div onMouseOver={this.handleMouseMove}>
            {this.state.x || this.state.y 
            ? 'The mouse is at X: ' + this.state.x + ', Y: ' + this.state.y 
            : 'Move the mouse over this box'}
        </div>
    }

}

export default MouseOver;