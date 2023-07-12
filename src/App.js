import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/items"


class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      items: [
        {
          id: 1,
          title: 'Safina',
          img: 'safina.jpg',
          desc: 'Chair in oak veneer and solid rubber wood',
          category: 'chairs',
          price: '49'
        },
        {
          id: 2,
          title: 'Nina',
          img: 'Nina.jpg',
          desc: 'Nina stackable chair in solid acacia wood with walnut finish and beige rope seat',
          category: 'chairs',
          price: '80'
        },
        {
          id: 3,
          title: 'Calixta',
          img: 'Calixta.jpg',
          desc: 'Calixta chair in leather and solid teak',
          category: 'chairs',
          price: '60'
        }

      ]
    }
  }
  render() {
    return (
      <div className="wrapper">
       <Header />
       <Items items={this.state.items} />
       <Footer />
      </div>
     );
  }

  
}

export default App;
