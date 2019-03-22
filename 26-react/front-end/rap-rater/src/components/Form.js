import React from "react";

class Form extends React.Component {
  state = {
    name: "",
    rating: 0,
    sadImage: "",
    happyImage: ""
  };

  changeHandler = e => {
    console.log(e.target.value);
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitHandler = e => {
    e.preventDefault();
    this.props.submitHandler(this.state);
    this.setState({
      name: "",
      sadImage: "",
      happyImage: ""
    });
  };

  render() {
    return (
      <form onSubmit={this.submitHandler}>
        <input
          type="text"
          placeholder="name"
          name="name"
          value={this.state.name}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="sadImage"
          name="sadImage"
          value={this.state.sadImage}
          onChange={this.changeHandler}
        />
        <input
          type="text"
          placeholder="happyImage"
          name="happyImage"
          value={this.state.happyImage}
          onChange={this.changeHandler}
        />
        <button>Create Rapper</button>
      </form>
    );
  }
}

export default Form;
