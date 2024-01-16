import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    conversations: [],
    selectedConvo: null,
    leftBar: false,
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
        },
        setLeftBar: (state, action) => {
            state.leftBar = action.payload;
        }
    }
})

export const {setselectedConvo, setConvos, setClear, setLeftBar} = convoSlice.actions;
export default convoSlice.reducer;