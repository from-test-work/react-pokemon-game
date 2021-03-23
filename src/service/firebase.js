import firebase from "firebase/app";
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDVrHLUDyGpRt-97OaqpS51PWNZXab-FeI",
    authDomain: "react-pokemon-game.firebaseapp.com",
    databaseURL: "https://react-pokemon-game-default-rtdb.firebaseio.com",
    projectId: "react-pokemon-game",
    storageBucket: "react-pokemon-game.appspot.com",
    messagingSenderId: "189738107506",
    appId: "1:189738107506:web:80bc2ada7799f02ecf38eb"
};

firebase.initializeApp(firebaseConfig);

export const fire = firebase;
export const database = fire.database();

export default database;
