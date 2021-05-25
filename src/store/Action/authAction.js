import firebase from "../../config/fbconfig";
const userRef = firebase.firestore().collection("users");
export const signIn = (credential) => async (dispatch, getState) => {
  console.log(credential);
  await firebase
    .auth()
    .signInWithEmailAndPassword(credential.email, credential.password)
    .then(() => {
      dispatch({
        type: "LOGIN_SUCCESS",
      });
      console.log("login success");
    })
    .catch((err) => {
      dispatch({ type: "LOGIN_ERROR", payload: err });
      console.log("login err");
    });
};

export const signOut = () => (dispatch, getState) => {
  console.log("logout");
  firebase
    .auth()
    .signOut()
    .then(() => {
      dispatch({ type: "SIGN_OUT" });
    });
};

export const changeState = () => (dispatch, getState) => {
  firebase.auth().onAuthStateChanged((user) => {
    console.log(user);
    dispatch({ type: "CHANGE_STATE", payload: user });
  });
};

export const signUp = (newuser) => async (dispatch, getState) => {
  console.log("signup", newuser);
  await firebase
    .auth()
    .createUserWithEmailAndPassword(newuser.email, newuser.password)
    .then((response) => {
      console.log("response", response.user.uid);
      userRef
        .doc(response.user.uid)
        .set({
          id: response.user.uid,
          authorFirstName: newuser.firstName,
          authorLastName: newuser.lastName,
          initials: newuser.firstName[0] + newuser.lastName[0],
          createdAt: new Date(),
        })
        .then(() => {
          dispatch({ type: "SIGNUP_SUCCESS" });
          const data = firebase
            .firestore()
            .collection("users")
            .doc(firebase.auth().currentUser.uid);
          console.log(data, "getuserdata");
        })
        .catch((err) => {
          dispatch({ type: "SIGNUP_ERR", payload: err });
        });
    });
};
export const getUserData = () => (dispatch, getState) => {
  console.log("getUserDta");
  firebase.auth().onAuthStateChanged((user) => {
    const uid = user.uid;
    // console.log(uid);
    userRef
      .doc(uid)
      .get()
      .then((doc) => {
        const userDoc = doc.data();
        // console.log(userDoc, "doc.data");

        dispatch({ type: "GET_USER_DATA", payload: userDoc });
      });
  });
};
