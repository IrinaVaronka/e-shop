import React, { Component } from 'react'

export class ShowFullItem extends Component {
  render() {
    return (
      <div className='full-item'>
        <div>
          <img alt='chair' src={"./img/" + this.props.item.img} onClick={() => this.props.onShowItem(this.props.item)} />
          <h2>{this.props.item.title}</h2>
          <p>{this.props.item.desc}</p>
          <b>{this.props.item.price} EUR</b>
          <div className='add-to-cart' onClick={() => this.props.onAdd(this.props.item)}>+</div>
          <div className='close' onClick={() => this.props.onShowItem(this.props.item)}>x</div>
        </div>
      </div>
    )
  }
}

export default ShowFullItem