import React from "react";
import './colors.scss'

const RED = '#f00'
const GREEN = '#0f0'
const BLUE = '#00f'

class Colors extends React.Component {
    setBodyColor = (color) => {
        document.body.style.backgroundColor = color
        setTimeout(() => {
            document.body.style.backgroundColor = '#eee'
        }, 2000)
    }
    render() {
        return (
            <div
                className="colors"
            >
                <button
                    className="colors__button"
                    style={
                        {backgroundColor: RED}
                    }
                    onClick={this.setBodyColor.bind(this, RED)}
                    onMouseEnter={this.onMouseEnter}
                />
                <button
                    className="colors__button"
                    style={
                        {backgroundColor: GREEN}
                    }
                    onClick={() => this.setBodyColor(GREEN)}
                />
                <button
                    className="colors__button"
                    style={
                        {backgroundColor: BLUE}
                    }
                    onClick={() => this.setBodyColor(BLUE)}

                />
            </div>
        )
    }
}

export default Colors