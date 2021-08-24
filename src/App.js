import logo from './logo.svg';
import './App.css';
import liff from '@line/liff';
import React,{ useState,useEffect } from 'react'
import { createStore } from 'redux'
import { routeReducer } from './Redux/Reducers/routeReducer'
import Main from './Screens/Main'



// const store = createStore(
//   routeReducer,
//   window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
// )

function App() {
  const [pictureUrl, setPictureUrl] = useState(logo);
  const [idToken, setIdToken] = useState("");
  const [displayName, setDisplayName] = useState("");
  const [statusMessage, setStatusMessage] = useState("");
  const [userId, setUserId] = useState("");


  const logout = () =>{
    liff.logout();
    window.location.reload();

  }

  const initLine = () => {
    liff.init({ liffId: '1656323976-B3v9pmvg' }, () => {
      if (liff.isLoggedIn()) {
        runApp();
      } else {
        liff.login();
      }
    }, err => console.error(err));
  }
  

  const runApp = () => {
    const idToken = liff.getIDToken();
    setIdToken(idToken);
    
    liff.getProfile().then(profile => {
      console.log(profile);
      setDisplayName(profile.displayName);
      setPictureUrl(profile.pictureUrl);
      setStatusMessage(profile.statusMessage);
      setUserId(profile.userId)
      
    }).catch(err => console.error(err));
  }

  // useEffect(() => {

    
  //   initLine();
  // }, []);

  return (


    <Main/>
    // <div className="App">
    //   <header className="App-header">
    //   <h1>React with LINE Login</h1>
    //   <hr/>
    //     <img src={pictureUrl} width="300px" height="300px" />
    //     <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%" }}><b>id token: </b> {idToken}</p>
    //     <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%" }}><b>display name: </b> {displayName}</p>
    //     <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%" }}><b>status message: </b> {statusMessage}</p>
    //     <p style={{ textAlign: "left", marginLeft: "20%", marginRight: "20%" }}><b>user id: </b> {userId}</p>
    //     <button onClick={() => logout()} style={{width: "50%",height: 30}}>Logout</button>
        
    //   </header>
    // </div>
  );
}

export default App;
