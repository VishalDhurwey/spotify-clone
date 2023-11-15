import React, { useEffect} from "react";
import "./App.css";
import Login from "./Login/Login";
import Player from "./Player";
import { getTokenFromUrl } from "./Spotify";
import SpotifyWebApi from "spotify-web-api-js";
import { useDataLayerValue } from "./DataLayer";

const spotify = new SpotifyWebApi();

function App() {
  
  const [{ user ,token}, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {

      dispatch({
        type: "SET_TOKEN",
        token: _token,
      })

      console.log("i have a token",token); 
       
      spotify.setAccessToken(_token);

      
      spotify.getMe().then( user => {
        

        dispatch({
          type: "SET_USER",
          user: user,
        });
      });
    }

  

  }, [dispatch,token]);

  console.log("user",user);
  console.log("token",token);
  

  return <div className="App">{token ? <Player /> : <Login />}</div>;
}

export default App;
