export const initialState = {
  user: null,
  playlists: [],
  playing: false,
  item: null, 
  //REMOVE after finished developing
  token:"BQAUir29UZD94IAhnmwHO7zX--_klX0PZEpWygDluN31DkB4obrqIT77XIkTx1ww_jSxKkemXPvIv8laKx_h702dgDkiYbUlZkecHD_ytusb1fEpVaNUq70jVvk4yqNwQMyHSD9a5J_T7In3lN2JSYTzZRaanmLNJ4nosIQlkU4h0jW7ZdDQvlT85OU0uznxo4Q3cRE27oGmAXzPYjGSHpzl",
};

const reducer = (state, action) => {
  console.log(action);

  switch (action.type) {
    case "SET_USER":
      return {
        ...state,
        user: action.user,
      };
    case "SET_TOKEN":
      return {
        ...state,
        token: action.token,
      };
      // case "SET_PLAYLISTS":
      // return {
      //   ...state,
      //   playlists: action.playlists,
      // };
     default:
      return state;
  }
};

export default reducer;
