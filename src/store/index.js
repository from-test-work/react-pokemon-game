import {configureStore} from "@reduxjs/toolkit";
import pokemonsReduser from "./pokemons";

export default configureStore({
    reducer: {
        pokemons: pokemonsReduser
    }
})