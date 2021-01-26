import React from "react"
import ReactDom from "react-dom";
import Spinner from "./Spinner";
import SeasonDisplay from "./SeasonDisplay"

class App extends React.Component {
  state = { lat: null, errMessage: "" }

  componentDidMount() {
    navigator.geolocation.getCurrentPosition(
      position => this.setState({ lat: position.coords.latitude })
      ,
      err => this.setState({ errMessage: err.message })
    );
  }

  renderComponent = () => {
    if (this.state.lat && !this.state.errMessage) {
      return (
        <SeasonDisplay lat={this.state.lat
        } />
      )
    }
    if (this.state.errMessage && !this.state.lat) {
      return (
        <SeasonDisplay err={this.state.errMessage} />
      )
    }
    return (
      <Spinner message="Please accept location request" />
    )
  }

  render() {

    return (
      <div className="border red">
        {this.renderComponent()}
      </div>
    )
  }
}

ReactDom.render(
  <App />, document.getElementById("root")
);