const initialstate = {
  projects: [
    { id: 1, title: "Help me find peach", content: "blh blah blah" },
    { id: 2, title: "collect all stars", content: "bjbcjs mnbncj" },
    { id: 3, title: "egg hunt", content: "ndjkhjk mcjk" },
  ],
  showData: [],
  showProjectDetail: [],
  isLoaded: false,
};
const ProjectReducer = (state = initialstate, action) => {
  switch (action.type) {
    case "CREATE_PROJECT": {
      // console.log("create", action.payload);
      return state;
    }
    case "CREATE_PROJECT_ERROR": {
      // console.log("create project error", action.payload);
      return state;
    }
    case "SHOW_PROJECT_DATA": {
      // console.log("showReducer", action.payload);
      return { ...state, showData: action.payload };
    }
    case "SHOW_PROJECT_DATA_ERR": {
      // console.log("show err");
      return state;
    }
    case "PROJECT_DETAIL": {
      return { ...state, showProjectDetail: action.payload };
    }
    case "IS_LOADED_ACTION": {
      console.log("isLoaded");
      return { ...state, isLoaded: true };
    }
    case "GET_NOTIFICATION": {
      return state;
    }
    default:
      return state;
  }
};
export default ProjectReducer;
