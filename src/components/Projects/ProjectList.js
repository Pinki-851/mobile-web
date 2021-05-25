import React, { useEffect } from "react";
import ProjectSummury from "./ProjectSummury";
import { connect } from "react-redux";
import { isLoadedAction } from "../../store/Action/ProjectAction";
import { isLoaded } from "react-redux-firebase";

const ProjectList = (props) => {
  console.log("props", props);
  useEffect(() => {
    props.isLoadedAction();
    console.log("loaded");
  }, []);
  return (
    <div className="projectlist">
      {isLoaded ? (
        <div>
          {props.projects.map((val, index) => {
            return <ProjectSummury project={val} key={val.id} />;
          })}
        </div>
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
