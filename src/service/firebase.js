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

class Firebase {
    constructor() {
        this.fire = firebase;
        this.database = this.fire.database();
    }

    getPokemonsSoket = (cb) => {
        this.database.ref('pokemons').on('value', (snapshot) => {
            cb(snapshot.val());
        })
    }

    getPokemonsOnce = async () => {
        return await this.database.ref('pokemons').once('value')
            .then(snapshot => snapshot.val());
    }

    postPokemon(keyid, pokemon, cb = null) {
        this.database.ref(`pokemons/${keyid}`).set(pokemon)
            .then(() => cb())
            .catch((error) => {console.error(error.message())});
    }

    addPokenon(data, cb) {
        const keyid = this.database.ref().child('pokemons').push().key;
        this.database.ref(`pokemons/${keyid}`).set(data)
            .then(() => cb())
            .catch((error) => {
                console.error(error.message())
            })
    }
}

export default Firebase;
