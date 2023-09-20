import React, {Component} from "react";
import './good-button.scss'

class GoodButton extends Component {
    handleClick(e) {
        console.log(e.target.textContent)
        alert('Good job!')
    }
    render () {
        return (
            <button
                className="fancy-button"
                onClick={this.handleClick}
            >
                Click me!
            </button>
        )
    }
}

export default GoodButton