import {createSlice} from "@reduxjs/toolkit";
import FirebaseClass from "../service/firebase";

export const slice = createSlice({
    name: 'pokemons',
    initialState: {
        isLoadind: false,
        data: {},
        error: null
    },
    reducers: {
        fetchPokemons: state => ({
            ...state,
            isLoadind: true,
        }),

        fetchPokemonsResolve: (state, action) => ({
            ...state,
            isLoadind: false,
            data: action.payload
        }),

        fetchPokemonsReject: (state, action) => ({
            ...state,
            isLoadind: false,
            data: {},
            error: action.payload
        })
    }
})

export const {fetchPokemons, fetchPokemonsResolve, fetchPokemonsReject} = slice.actions;

export const selectPokemonsLoading = state => state.pokemons.isLoadind;
export const selectPokemonsData = state => state.pokemons.data;

export const getPokemonsAsync = () => async (dispatch) => {
    dispatch(fetchPokemons());
    const data = await FirebaseClass.getPokemonsOnce();
    dispatch(fetchPokemonsResolve(data));
}

export default slice.reducer;
