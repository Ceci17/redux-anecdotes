// const initialState = {
//   message: "",
// };

const notificationReducer = (state = "", action) => {
  console.log("notificationReducer -> state", state);

  switch (action.type) {
    case "SHOW":
      return action.message;
    // case "HIDE":
    //   return "";
    // case "SUCCESS":
    //   return { message: `${action.message}` };
    // case "ERROR":
    //   return { message: `${action.message}` };
    default:
      return state;
  }
};

export const showNotification = (message, time = 3000) => {
  return async (dispatch) => {
    dispatch({
      type: "SHOW",
      message,
    });
    setTimeout(() => {
      dispatch({ type: "SHOW", message: "" });
    }, time);
  };
};

// export const hideNotification = () => {
//   return { type: "HIDE" };
// };

// export const successMsg = (message) => {
//   return {
//     type: "SUCCESS",
//     data: { message },
//   };
// };

// export const errorMsg = (message) => {
//   return {
//     type: "ERROR",
//     data: { message },
//   };
// };

export default notificationReducer;
