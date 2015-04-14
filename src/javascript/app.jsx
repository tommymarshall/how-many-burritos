import React from 'react'

var find = React.findDOMNode

const BURRITO_COST = 7.25
const QUAC_COST    = 1.95

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count : 0,
      quac  : false
    }
  }

  render() {
    return (
      <main className="app-container">
        <h1>How Many Burritos</h1>
        <input ref="count" type="number" onChange={this.change.bind(this)} />
        <input ref="quac" type="checkbox" onChange={this.change.bind(this)} />
        <h2>{this.state.count} flippin burritos!</h2>
      </main>
    )
  }

  change() {
    let money = parseInt(find(this.refs.count).value)
    let quac = parseInt(find(this.refs.quac).checked ? QUAC_COST : 0)

    this.setState({
      count : money / (BURRITO_COST + quac)
    })
  }
}

React.render(<App />, document.getElementById('app'))
