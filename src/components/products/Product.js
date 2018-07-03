import React, { Component } from 'react'
import './Product.css'
import {convertToFixed} from '../../helpers/Utility'


class Product extends Component{
    render () {

        const {
            name,
            category,
            price,
            originalPrice = 0
        } = this.props

        return (
            <div className={ 'product' + (originalPrice > price ? ' sale ' : '') }>
                <div className="name">{ name }</div>
                <div className="category">{ category }</div>
                <div className="price">
                    {
                        originalPrice > price
                        ? (
                            <span>
                                <del>U$${ convertToFixed(originalPrice) }</del>
                                U$${ convertToFixed(price) }
                            </span>
                        )
                        : (
                            <span>U$${ price }</span>
                        )
                    }
                </div>
            </div>
        )
    }
}

export default Product