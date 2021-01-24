import React from "react"
import ReactDom from "react-dom";


class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("this1", this)
    this.state = { lat: null, errMessage: "" }
    navigator.geolocation.getCurrentPosition(
      position => {
        // we called state!!!
        this.setState({ lat: position.coords.latitude })
      }
      ,
      err => {
        this.setState({ errMessage: err.message })
      }
    );
  }
  render() {
    if (this.state.lat && !this.state.errMessage) {
      return (
        <div>
          <strong>Latitude:{this.state.lat}</strong>
        </div>
      )
    }
    if (this.state.errMessage && !this.state.lat) {
      return (
        <div>
          <strong>Error: {this.state.errMessage}</strong>
        </div>
      )
    }
    return (
      <div>Loading....!!</div>
    )
  }
}

// const Div = () => {
//   return (
//     <h1>Hello There!</h1>
//   )
// }

ReactDom.render(
  <App />, document.getElementById("root")
);