const mainReducer = {
  userProfile: {},
  repos: []
}

export default (state = mainReducer, action) => {
  switch (action.type) {
    case "USER_PROFILE":
      return {
        ...state,
        userProfile: action.payload
      }
    case "REPOS":
      return {
        ...state,
        repos: action.payload
      }
  
    default:
      return state;
  }
}

