import React from "react";

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
    console.log("card props", this.props.rapper);
    return (
      <div>
        <h2>{this.props.rapper.name}</h2>
        <img
          src={
            this.state.clicked
              ? this.props.rapper.happyImage
              : this.props.rapper.sadImage
          }
        />
        <button onClick={this.clickHandler}>button</button>
      </div>
    );
  }
}

export default RapCard;
