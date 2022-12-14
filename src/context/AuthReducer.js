const AuthReducer = (state, action) => {
    switch (action.type) {
      case "login": {
        return {
          currentUser: action.payload,
        };
      }
      case "logout": {
        return {
          currentUser: null,
        };
      }
      default:
        return state;
    }
  };
  
  export default AuthReducer;
  