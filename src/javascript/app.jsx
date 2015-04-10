import React from 'react'

class App extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      count : 0
    }
  }

  render() {
    return (
      <main className="app-container">
        <h1>How Many Burritos</h1>
        <input ref="count" type="number" onChange={this.change.bind(this)} />
        <h2>{this.state.count} flippin burritos</h2>
      </main>
    )
  }

  change() {
    this.setState({
      count : Math.round(React.findDOMNode(this.refs.count).value / 7)
    })
  }
}

React.render(<App />, document.getElementById('app'))
