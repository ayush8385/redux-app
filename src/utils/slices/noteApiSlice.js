import {
  createAsyncThunk,
  createSlice,
} from "@reduxjs/toolkit";

export const fetchApiNotes = createAsyncThunk(
  "fetchApiNotes",
  async (_, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66c4d7b4b026f3cc6cf0d3b0.mockapi.io/notesapi/notes"
      );
      if (!response.ok) {
        throw new Error("Failed to fetch notes");
      }
      const result = await response.json();
      return result;
    } catch (err) {
      return rejectWithValue(err.message);
    }
  }
);

export const addApiNote = createAsyncThunk(
  "addApiNote",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        "https://66c4d7b4b026f3cc6cf0d3b0.mockapi.io/notesapi/notes",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to add note");
      }
      const result = await response.json();
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const deleteApiNote = createAsyncThunk(
  "deleteApiNote",
  async (id, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66c4d7b4b026f3cc6cf0d3b0.mockapi.io/notesapi/notes/${id}`,
        {
          method: "DELETE",
        }
      );
      if (!response.ok) {
        throw new Error("Failed to delete note");
      }
      const result = await response.json();
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

export const updateApiNote = createAsyncThunk(
  "updateApiNote",
  async (data, { rejectWithValue }) => {
    try {
      const response = await fetch(
        `https://66c4d7b4b026f3cc6cf0d3b0.mockapi.io/notesapi/notes/${data.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );
      if (!response.ok) {
        throw new Error("Failed to update note");
      }
      const result = await response.json();
      return result;
    } catch (e) {
      return rejectWithValue(e.message);
    }
  }
);

const noteApiSlice = createSlice({
  name: "noteApi",
  initialState: {
    data: [],
    isLoading: false,
    isError: false,
  },
  extraReducers: (builder) => {
    builder.addCase(fetchApiNotes.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchApiNotes.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(fetchApiNotes.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Fetch failed: ", action.payload);
    });
    builder.addCase(addApiNote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data.push(action.payload);
    });
    builder.addCase(addApiNote.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(addApiNote.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Fetch failed: ", action.payload);
    });
    builder.addCase(deleteApiNote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.data = state.data.filter((item) => item.id !== action.payload.id);
    });
    builder.addCase(deleteApiNote.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(deleteApiNote.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Fetch failed: ", action.payload);
    });
    builder.addCase(updateApiNote.fulfilled, (state, action) => {
      state.isLoading = false;
      state.isError = false;
      state.data = state.data.map((item) =>
        item.id === action.payload.id
          ? { ...item, text: action.payload.text }
          : item
      );
    });
    builder.addCase(updateApiNote.pending, (state) => {
      state.isLoading = true;
    });
    builder.addCase(updateApiNote.rejected, (state, action) => {
      state.isLoading = false;
      state.isError = true;
      console.error("Fetch failed: ", action.payload);
    });
  },
  selectors: {
    selectApiNotes: (state) => state,
  },
});

export const { selectApiNotes } = noteApiSlice.selectors;
export default noteApiSlice.reducer;
