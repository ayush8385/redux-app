import { useState } from "react";
import { useDispatch } from "react-redux";
import { addNote } from "../../utils/slices/noteSlice";
import { nanoid } from "@reduxjs/toolkit";

const AddNotes = () => {
  const [input, setInput] = useState("");
  const dispatch = useDispatch();
  const insertNote = () => {
    dispatch(addNote({ id: nanoid(), text: input }));
    setInput('')
  };
  return (
    <div className="flex flex-row items-start w-1/3">
      <input
        value={input}
        onChange={(e) => setInput(e.target.value)}
        type="text"
        className="border-2 border-gray-400 flex-1 mr-20 text-black p-2 rounded-lg"
        placeholder="Add a Note"
      />
      <button
        onClick={insertNote}
        className="bg-green-700 text-white rounded-lg p-2"
      >
        Add Note
      </button>
    </div>
  );
};
export default AddNotes;
