const initialState = {
  authError: null,
  auth: null,
  getUserCollection: [],
};
const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_ERROR": {
      console.log("login error");
      return {
        ...state,
        authError: "Login failed",
      };
    }
    case "LOGIN_SUCCESS": {
      console.log("login success");
      return {
        ...state,
        authError: null,
      };
    }
    case "CHANGE_STATE": {
      // console.log("chngeReducer", action.payload);
      return { ...state, auth: action.payload };
    }
    case "SIGN_OUT": {
      console.log("signOutSuccess");
      return state;
    }
    case "SIGNUP_SUCCESS": {
      console.log("Singupsuccess");
      return { ...state, authError: null };
    }
    case "SIGNUP_ERR": {
      return { ...state, authError: action.payload };
    }
    case "GET_USER_DATA": {
      console.log("getuser", action.payload);
      return { ...state, getUserCollection: action.payload };
    }
    default:
      return state;
  }
};
export default AuthReducer;
