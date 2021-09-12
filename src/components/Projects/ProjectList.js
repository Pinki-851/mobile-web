import React, { useEffect } from "react";
import ProjectSummury from "./ProjectSummury";
import { connect } from "react-redux";
import { isLoadedAction } from "../../store/Action/ProjectAction";
import { isLoaded } from "react-redux-firebase";
import { Redirect } from "react-router";

const ProjectList = (props) => {
  console.log("props", props);
  console.log("prosLength", props.projects.length);

  useEffect(() => {
    props.isLoadedAction();
    console.log("loaded");
  }, []);
  return (
    <div className="projectlist">
      {isLoaded ? (
        props.projects.length >= 1 ? (
          <div>
            {props.projects.map((val, index) => {
              return <ProjectSummury project={val} key={val.id} />;
            })}
          </div>
        ) : (
          (console.log(props.projects.length),
          (<Redirect to="/createproject" />))
        )
      ) : (
        <p>project loading....</p>
      )}
    </div>
  );
};
const mapStateToProps = (state) => {
  return {
    isLoaded: state.project.isLoaded,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    isLoadedAction: () => dispatch(isLoadedAction()),
  };
};
export default connect(mapStateToProps, mapDispatchToProps)(ProjectList);
