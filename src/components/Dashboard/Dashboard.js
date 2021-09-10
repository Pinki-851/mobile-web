import React, { Component } from "react";
import Notification from "./Notification";
import ProjectList from "../Projects/ProjectList";
import { connect } from "react-redux";
import { showProjectData } from "../../store/Action/ProjectAction";
import { Redirect } from "react-router";

class Dashboard extends Component {
  componentDidMount() {
    this.props.showProjectData();
  }
  render() {
    const { showData, auth } = this.props;
    // console.log(this.props);
    // console.log(auth);
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
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
