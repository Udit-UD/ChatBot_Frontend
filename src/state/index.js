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
            if (state.conversations.find((convo) => convo._id === action.payload.id)) {
              state.selectedConvo = action.payload.id;
            } else {
              state.selectedConvo = null;
            }
        },
        setConvos: (state, action) => {
            state.conversations = action.payload.conversations.reverse();
        }
    }
})

export const {setselectedConvo, setConvos} = convoSlice.actions;
export default convoSlice.reducer;