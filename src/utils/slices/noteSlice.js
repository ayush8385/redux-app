import { createSlice } from "@reduxjs/toolkit";

const noteSlice = createSlice({
  name: "note",
  initialState: {
    noteItems: [],
  },
  reducers: {
    addNote: (state, action) => {
      const newNote = {
        id: action.payload.id,
        text: action.payload.text,
      };
      state.noteItems.push(newNote);
    },
    updateNote: (state, action) => {
      state.noteItems = state.noteItems.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    },
    deleteNote: (state, action) => {
        state.noteItems = state.noteItems.filter((item) => item.id !== action.payload.id);
    },
    clearNotes: (state) => {
        state.noteItems.length = 0;
    },
  },
  selectors: {
    selectNotes: (state) => state.noteItems,
  },
});

export const { addNote, updateNote, deleteNote, clearNotes } =
  noteSlice.actions;
export const { selectNotes } = noteSlice.selectors;
export default noteSlice.reducer;
