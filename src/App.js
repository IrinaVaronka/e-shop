import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"



class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Safina',
          img: 'safina.jpg',
          desc: 'Chair in oak veneer and solid rubber wood',
          category: 'dining',
          price: '49'
        },
        {
          id: 2,
          title: 'Nina',
          img: 'Nina.jpg',
          desc: 'Nina stackable chair in solid acacia wood with walnut finish and beige rope seat',
          category: 'dining',
          price: '80'
        },
        {
          id: 3,
          title: 'Calixta',
          img: 'Calixta.jpg',
          desc: 'Calixta chair in leather and solid teak',
          category: 'desk',
          price: '60'
        },
        {
          id: 4,
          title: 'Dalisa',
          img: 'Dalisa.jpg',
          desc: 'Dalisa solid acacia folding garden chair in terracotta FSC 100%',
          category: 'folding',
          price: '55'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems =  this.state.items 
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder  = this.deleteOrder.bind(this)
    this.chooseCategory  = this.chooseCategory.bind(this)
    this.onShowItem  = this.onShowItem.bind(this)
    
  }
  render() {
    return (
      <div className="wrapper">
       <Header orders={this.state.orders} onDelete={this.deleteOrder} />
       <Categories chooseCategory={this.chooseCategory} />
       <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
       <Footer />
      </div>
     )
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return 
    }

    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }

  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter( el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArray = false
    this.state.orders.forEach(el => {
      if(el.id === item.id)
      isInArray = true 
    })
    if(!isInArray)
      this.setState({orders: [...this.state.orders, item]})
  }
}

export default App;
