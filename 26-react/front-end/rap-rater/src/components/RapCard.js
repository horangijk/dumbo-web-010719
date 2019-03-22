import React from "react";
import { Link, withRouter } from "react-router-dom";

class RapCard extends React.Component {
  // constructor(){
  //   super()
  //   this.state = {}
  // }
  //
  state = {
    clicked: false
  };

  clickHandler = () => {
    this.setState({
      clicked: !this.state.clicked
    });
  };

  render() {
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <Link to={`/rappers/${this.props.rapper.name}`}>
          <img
            alt=""
            src={
              this.state.clicked
                ? this.props.rapper.happyImage
                : this.props.rapper.sadImage
            }
          />
        </Link>
        <button onClick={this.clickHandler}>button</button>
      </div>
    );
  }
}

export default withRouter(RapCard);
