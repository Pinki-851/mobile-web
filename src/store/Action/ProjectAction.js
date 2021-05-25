import firebase from "../../config/fbconfig";
const Ref = firebase.firestore().collection("projects");

export const createProject = (projects, Detail) => (dispatch, getState) => {
  console.log(projects, Detail);

  Ref.doc(Detail.id)
    .set({
      ...projects,
      authorFirstName: Detail.authorFirstName,
      authorLastName: Detail.authorLastName,
      authorId: Detail.id,
      initial: Detail.initials,
      createdAt: new Date(),
    })
    .then(() => {
      dispatch({ type: "CREATE_PROJECT", payload: projects });
      console.log("success");
    })
    .catch((err) => {
      dispatch({ type: "CREATE_PROJECT_ERROR", payload: err });
      console.log({ err });
    });
  Ref.onSnapshot((snapshot) => {
    console.log(snapshot);
  });
};
export const showProjectData = () => (dispatch, getState) => {
  Ref.orderBy("createdAt", "desc")
    .get()
    .then((item) => {
      const items = item.docs.map((doc) => doc.data());
      // console.log(items);
      dispatch({ type: "SHOW_PROJECT_DATA", payload: items });
      console.log("getdata successfully");
    })
    .catch((err) => {
      dispatch({ type: "SHOW_PROJECT_DATA_ERR", payload: err });
      console.log({ err });
    });
};

export const projectDetail = (item) => {
  console.log({ item }, "projectDEtail");
  return {
    type: "PROJECT_DETAIL",
    payload: item,
  };
};
export const isLoadedAction = () => (dispatch, getState) => {
  dispatch({ type: "IS_LOADED_ACTION" });
};

export const getNotification = () => (dispatch, getState) => {
  const messaging = firebase.messaging();
  messaging.onMessaging()
  messaging
    .requestPermission()
    .then(() => {
      return messaging.getToken();
    })
    .then((token) => {
      console.log("token", token);
      dispatch({ type: "GET_NOTIFICATION", payload: token });
    });
};
