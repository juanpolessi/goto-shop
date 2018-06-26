import React, { Component } from 'react'
import './Button.css'

class Button extends Component {
    render () {
        const { text } = this.props
        return (
            <button>{ text }</button>
        )
    }
}

export default Button