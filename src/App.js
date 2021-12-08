import logo from './logo.svg';
import './App.css';

import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";

//Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import SignIn from './components/signIn';


const firebaseConfig = {
  apiKey: "AIzaSyATl0iVc_pMkkhxP1fNb8ksi6F0IcuAfr0",
  authDomain: "medicaldemo-bfd9c.firebaseapp.com",
  projectId: "medicaldemo-bfd9c",
  storageBucket: "medicaldemo-bfd9c.appspot.com",
  messagingSenderId: "1038727194932",
  appId: "1:1038727194932:web:89c1bdfbf10f2224c59d61",
  measurementId: "${config.measurementId}"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);



function App() {
  return (
    // <div className="App">
    //   <header className="App-header">
    //     <img src={logo} className="App-logo" alt="logo" />
    //     <p>
    //       Edit <code>src/App.js</code> and save to reload.
    //     </p>
    //     <a
    //       className="App-link"
    //       href="https://reactjs.org"
    //       target="_blank"
    //       rel="noopener noreferrer"
    //     >
    //       Learn React
    //     </a>
    //   </header>
    // </div>
    <div>
      <SignIn></SignIn>
    </div>
  );
}
function signInWithGoogle(){
  const provider = new GoogleAuthProvider();
  const auth = getAuth();
  signInWithPopup(auth, provider)
    .then((result) => {
      // This gives you a Google Access Token. You can use it to access the Google API.
      const credential = GoogleAuthProvider.credentialFromResult(result);
      const token = credential.accessToken;
      // The signed-in user info.
      const user = result.user;
      console.log(credential)
      console.log(token)
      console.log(user)
      // ...
    }).catch((error) => {
      // Handle Errors here.
      const errorCode = error.code;
      const errorMessage = error.message;
      // The email of the user's account used.
      const email = error.email;
      // The AuthCredential type that was used.
      const credential = GoogleAuthProvider.credentialFromError(error);

      console.log(errorCode)
      console.log(errorMessage)
      console.log(email)
      console.log(credential)
      // ...
    });
}
export default App;
