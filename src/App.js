import React, { Component } from 'react'
import Button from './components/general/Button'
import ProductList from './components/products/ProductsList'

const products =[
  {
    id:1,
    name:'Calça Jeans',
    category: 'calças',
    originalPrice: 99.90,
    price:79.90
  },
  {
    id:2,
    name:'Camisa Xadres',
    category: 'camisas',
    originalPrice: 149.90,
    price:149.90
  },
  {
    id:3,
    name:'Calça Jeans',
    category: 'calças',
    originalPrice: 99.90,
    price:79.90
  },
  {
    id:4,
    name:'Camisa social Bege',
    category: 'camisa social',
    originalPrice: 89.90,
    price:79.90
  },
  {
    id:5,
    name:'Bermuda de praia',
    category: 'bermudas',
    originalPrice: 150.00,
    price:100.00
  }
]

class App extends Component{
  render () {
    return (
      <div>
        <Button text="Criar produto"/>
        <Button text="Adicionar produto no carrinho"/>
        <Button text="Remover produto no carrinho"/>
        <ProductList products={products}/>
      </div>
    )
  }
}

export default App