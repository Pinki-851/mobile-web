import React from "react";
import { Link } from "react-router-dom";
import SignInLink from "./SignInLink";
import SingOutLink from "./SingOutLink";
import { connect } from "react-redux";

const NavBar = (props) => {
  const { auth } = props;
  const Links = auth ? <SignInLink /> : <SingOutLink />;

  return (
    <div className="nav">
      <div className="logo_container">
        <Link to="/" className="nav_logo">
          Project Plan
        </Link>
      </div>
      <div className="nav_menu_container">{Links}</div>
    </div>
  );
};
const mapStateToProps = (state) => {
  // console.log(state);
  return {
    auth: state.auth.auth,
  };
};

export default connect(mapStateToProps)(NavBar);
