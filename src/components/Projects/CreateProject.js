import React, { Component, createRef } from "react";
import {
  createProject,
  getNotification,
} from "../../store/Action/ProjectAction";
import { connect } from "react-redux";
import { Redirect } from "react-router";
import InputContainer from "../InputContainer";
export class CreateProject extends Component {
  state = { title: "", content: "" };
  handleChange = (event) => {
    this.setState({ [event.target.id]: event.target.value });
  };
  handleSubmit = (event) => {
    event.preventDefault();
    const getUserCollection = this.props.getUserCollection;
    console.log(getUserCollection);
    this.props.createProject(this.state, getUserCollection);
    const { history } = this.props;
    history.push("/");
    this.props.getNotification();
    console.log(this.state);
  };

  textarea = createRef();
  createProjectLabel = createRef();
  changeTextareaStyle = () => {
    console.log(this.textarea);
    if (this.textarea.current.value.length === 0) {
      this.createProjectLabel.current.style.transform = "translateY(-20px)";
    }
  };
  changeLabelstyle = () => {
    if (this.textarea.current.value.length === 0) {
      this.createProjectLabel.current.style.transform = "none";
    }
  };
  render() {
    const { auth } = this.props;
    return (
      <>
        <div className="wrapper">
          {!auth ? (
            <Redirect to="/signin" />
          ) : (
            <div className="sign_in_container">
              <form onSubmit={this.handleSubmit}>
                <h5 className="sign_head">Create New Project</h5>
                <InputContainer
                  type="text"
                  id="title"
                  onChange={this.handleChange}
                  labelName="Title"
                />
                <div className="input_container">
                  <textarea
                    cols="20"
                    rows="5"
                    id="content"
                    onChange={this.handleChange}
                    ref={this.textarea}
                    onClick={this.changeTextareaStyle}
                    onBlur={this.changeLabelstyle}
                  ></textarea>
                  <label htmlFor="content" ref={this.createProjectLabel}>
                    Create Project
                  </label>
                </div>
                <div className="input_container">
                  <button className="btn">Create Project</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.auth.auth,
    getUserCollection: state.auth.getUserCollection,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    createProject: (projects, Detail) =>
      dispatch(createProject(projects, Detail)),
    getNotification: () => dispatch(getNotification()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(CreateProject);
