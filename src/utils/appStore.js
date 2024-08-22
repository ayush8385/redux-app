import { configureStore } from "@reduxjs/toolkit";
import noteApiSlice from "./slices/noteApiSlice";
const { default: noteSlice } = require("./slices/noteSlice");

const appStore = configureStore({
    reducer: {
        note: noteSlice,
        noteApi: noteApiSlice,
    },
})

export default appStore