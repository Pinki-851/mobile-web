import React, { useEffect } from "react";
import { Link, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import {
  signOut,
  changeState,
  getUserData,
} from "../../store/Action/authAction";

const SignInLink = (props) => {
  const { getUserCollection } = props;
  console.log(getUserCollection);
  useEffect(() => {
    console.log("useEffect");
    props.getUserData();
  }, []);

  return (
    <ul>
      <div className="initial">{getUserCollection.initials}</div>

      <li>
        <Link to="/createproject" className="nav_menu">
          New Project
        </Link>
      </li>
      <li>
        <a
          onClick={() => {
            <Redirect to="/signin" />;
            props.signOut();
            console.log(props);
            props.changeState();
          }}
          className="nav_menu"
        >
          Log Out
        </a>
      </li>
    </ul>
  );
};
const mapStatToProps = (state) => {
  // console.log(state);
  return {
    getUserCollection: state.auth.getUserCollection,
  };
};
const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut()),
    changeState: () => dispatch(changeState()),
    getUserData: () => dispatch(getUserData()),
  };
};
export default connect(mapStatToProps, mapDispatchToProps)(SignInLink);
