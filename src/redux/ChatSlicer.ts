import { createSlice } from "@reduxjs/toolkit";

type Message = {
  // Define the properties of a message, e.g.:
  text: string;
  sender: string;
};

interface ChatState {
  messages: Message[];
  isLoading: boolean; //
}

const initialState: ChatState = {
  messages: [],
  isLoading: false,
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: { payload: Message }) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: { payload: Message[] }) => {
      state.messages = action.payload;
    },
    clearMessages: (state) => {
      state.messages = [];
    },
     setIsLoading: (state, action: { payload: boolean }) => {
      state.isLoading = action.payload;
    },
  },
});

export const { addMessage, setMessages, clearMessages, setIsLoading } = chatSlice.actions;
export default chatSlice.reducer;
