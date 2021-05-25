import React from "react";
import { useHistory } from "react-router-dom";
import { projectDetail } from "../../store/Action/ProjectAction";
import { connect } from "react-redux";
import moment from "moment";

const ProjectSummury = (props) => {
  // console.log({ props });
  const ProjectDetailHistory = useHistory();
  return (
    <>
      <div
        className="project_summury_container"
        onClick={() => {
          ProjectDetailHistory.push("/project/" + props.project.authorId);
          props.projectDetail(props.project);
        }}
      >
        <h2 className="title">{props.project.title}</h2>
        <p className="content">{props.project.content}</p>
        <h3 className="author_name">
          Posted by {props.project.authorFirstName}
          {props.project.authorLastName}
        </h3>
        <p className="date">
          {moment(props.project.createdAt.toDate()).format(
            "MMM Do YYYY,h:mm:ss a"
          )}
        </p>
      </div>
    </>
  );
};
const mapDispatchToProps = (dispatch) => {
  return {
    projectDetail: (item) => dispatch(projectDetail(item)),
  };
};
export default connect(null, mapDispatchToProps)(ProjectSummury);
