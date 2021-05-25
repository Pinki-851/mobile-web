import React, { Component } from "react";
import { connect } from "react-redux";
import { changeState, signUp } from "../../store/Action/authAction";
import { v4 as uuid } from "uuid";
import InputContainer from "../InputContainer";

export class Signup extends Component {
  state = {
    email: "",
    password: "",
    firstName: "",
    lastName: "",
    id: uuid(),
  };
  componentDidMount() {
    this.props.changeState();
    console.log("singupChangeState");
  }
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = async (event) => {
    event.preventDefault();
    await this.props.signUp(this.state);
    const { history } = this.props;
    history.push("/");
    console.log(this.state);
  };
  render() {
    return (
      <div className="wrapper">
        <div className="sign_up_container">
          <form onSubmit={this.handleSubmit}>
            <p className="sign_head">Sign up</p>
            <InputContainer
              type="email"
              labelName="email"
              id="email"
              onChange={this.handleChange}
            />
            <InputContainer
              type="password"
              labelName="password"
              id="password"
              onChange={this.handleChange}
            />
            <InputContainer
              type="text"
              id="firstName"
              onChange={this.handleChange}
              labelName="FirstName"
            />
            <InputContainer
              type="text"
              id="lastName"
              onChange={this.handleChange}
              labelName="LastName"
            />

            <div className="input_container">
              <button className="btn">Sign up</button>
            </div>
          </form>
        </div>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  console.log("signup", state);
  return {
    auth: state.auth.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newuser) => dispatch(signUp(newuser)),
    changeState: () => dispatch(changeState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Signup);
