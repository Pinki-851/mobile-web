import React, { Component } from "react";
import { signIn, changeState } from "../../store/Action/authAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import InputContainer from "../InputContainer";

export class SignIn extends Component {
  state = { email: "", password: "" };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  componentDidMount() {
    this.props.changeState();
    console.log("chngecomponent");
  }
  handleSubmit = async (event) => {
    // debugger;
    event.preventDefault();
    console.log(this.state);
    await this.props.signIn(this.state);
    const { history, auth } = this.props;
    console.log(auth);
    history.push("/");
  };

  render() {
    const { authErr, auth } = this.props;
    // console.log(auth);
    return (
      <div className="wrapper">
        <div className="sign_in_container">
          <form
            onSubmit={(event) => {
              this.handleSubmit(event);
              console.log(auth);
            }}
          >
            <p className="sign_head">Sign In</p>
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
            <div className="input_container">
              <button className="btn">Log in</button>
            </div>
          </form>
          <div className="error">{authErr ? <p>{authErr}</p> : null}</div>
          <p>{auth ? auth.email : ""}</p>
        </div>
      </div>
    );
  }
}
const mapStatToProps = (state) => {
  // console.log(state);
  return {
    authErr: state.auth.authError,
    auth: state.auth.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (credential) => dispatch(signIn(credential)),
    changeState: () => dispatch(changeState()),
  };
};
export default connect(mapStatToProps, mapDispatchToProps)(SignIn);
