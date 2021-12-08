import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();

// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional
// const firebaseConfig = {
//   apiKey: "AIzaSyATl0iVc_pMkkhxP1fNb8ksi6F0IcuAfr0",
//   authDomain: "medicaldemo-bfd9c.firebaseapp.com",
//   projectId: "medicaldemo-bfd9c",
//   storageBucket: "medicaldemo-bfd9c.appspot.com",
//   messagingSenderId: "1038727194932",
//   appId: "1:1038727194932:web:89c1bdfbf10f2224c59d61",
//   measurementId: "${config.measurementId}"
// };

// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);