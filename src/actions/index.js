import fetch from "axios";

const Actions = {
  fetchProfileDetails: (payload) => {
    return (dispatch) => {
      fetch({
        url: "https://api.github.com/users/supreetsingh247",
        method: "GET",
      }).then(resp => {
        dispatch({
          type: "USER_PROFILE",
          payload: resp.data
        })
      })
    };
  },
  fetchRepos: (payload) => {
    return (dispatch) => {
      fetch({
        url: "https://api.github.com/users/supreetsingh247/repos",
        method: "GET",
      }).then(resp => {
        dispatch({
          type: "REPOS",
          payload: resp.data
        })
      })
    };
  },
};

export default Actions
