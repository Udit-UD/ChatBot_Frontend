import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [],
    selectedConvo: null,
};

export const convoSlice = createSlice({
    name: "convo",
    initialState,
    reducers: {
        setselectedConvo: (state, action) => {
            state.selectedConvo = action.payload;
        },
        setConvos: (state, action) => {
            state.conversations = action.payload.conversations.reverse();
        },
        setClear: (state) => {
            state.selectedConvo = null;
        }
    }
})

export const {setselectedConvo, setConvos, setClear} = convoSlice.actions;
export default convoSlice.reducer;