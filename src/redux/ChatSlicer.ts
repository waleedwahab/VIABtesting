import { createSlice } from "@reduxjs/toolkit";

type Message = {
  // Define the properties of a message, e.g.:
  text: string;
  sender: string;
};

interface ChatState {
  messages: Message[];
}

const initialState: ChatState = {
  messages: [],
};

const chatSlice = createSlice({
  name: "chat",
  initialState,
  reducers: {
    addMessage: (state, action: { payload: Message }) => {
      state.messages.push(action.payload);
    },
    setMessages: (state, action: { payload: Message[] }) => {
      state.messages = action.payload; // 🆕 Overwrites all messages
    },
    clearMessages: (state) => {
      state.messages = [];
    },
  },
});

export const { addMessage, setMessages, clearMessages } = chatSlice.actions;
export default chatSlice.reducer;
