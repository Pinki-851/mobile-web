import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../Projects/ProjectList";
import { connect } from "react-redux";
import { showProjectData } from "../../store/Action/ProjectAction";
import { Redirect } from "react-router";
import { changeState } from "../../store/Action/authAction";

class Dashboard extends Component {
  componentDidMount() {
    // debugger;
    this.props.showProjectData();
    this.props.changeState();
    console.log("dashchange");
  }
  render() {
    const { showData, auth } = this.props;
    // console.log(this.props);
    console.log("dashauth", auth);
    console.log("showData", showData);
    return (
      <>
        {!auth ? (
          <Redirect to="/signin" />
        ) : (
          <div className="dashboard_conrtainer">
            <div className="dashboard_conrtainer_center">
              <ProjectList projects={showData} />
              {/* <Notification /> */}
            </div>
          </div>
        )}
      </>
    );
  }
}
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    showData: state.project.showData,
    auth: state.auth.auth,
  };
};
const mapDispatchToProps = (dispatch) => {
  // console.log("dispatch");
  return {
    showProjectData: () => dispatch(showProjectData()),
    changeState: () => dispatch(changeState()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
