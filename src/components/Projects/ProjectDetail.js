import React from "react";
import { Redirect, useParams } from "react-router";
import { connect } from "react-redux";
import moment from "moment";

const ProjectDetail = (props) => {
  const { id } = useParams();
  return (
    <>
      <div className="project_detail_container">
        {!props.auth ? (
          <Redirect to="/signin" />
        ) : (
          <div className="project_detail">
            <h2 className="title">
              {props.showProjectDetail.title}-{id}
            </h2>
            <div>
              <p className="content">{props.showProjectDetail.content}</p>
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. It has
              survived not only five centuries, but also the leap into
              electronic typesetting, remaining essentially unchanged.
            </div>
            <div>
              <h3 className="author_name">
                Posted by {props.showProjectDetail.authorFirstName}{" "}
                {props.showProjectDetail.authorLastName}
              </h3>
            </div>
            <p className="date">
              {moment(props.showProjectDetail.createdAt.toDate()).format(
                "MMM Do YYYY,h:mm:ss a"
              )}
            </p>
          </div>
        )}
      </div>
    </>
  );
};
const mapStateToProps = (state) => {
  console.log(state);
  return {
    showProjectDetail: state.project.showProjectDetail,
    auth: state.auth.auth,
  };
};
export default connect(mapStateToProps)(ProjectDetail);
