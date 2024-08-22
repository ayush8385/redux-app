import { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { deleteApiNote, selectApiNotes, updateApiNote } from "../../utils/slices/noteApiSlice";

const NotesApiItem = ({ note }) => {
  const inputRef = useRef(null);
  const [noteText, setNoteText] = useState(note.text);
  const [isEditing, setIsEditing] = useState(false);
  const notesData = useSelector(selectApiNotes);
  const dispatch = useDispatch();
  const editNote = () => {
    if (isEditing) {
      dispatch(updateApiNote({ id: note.id, text: noteText }));
      setNoteText(notesData?.isError ? note.text: noteText)
      setIsEditing(false);
    } else {
      setIsEditing(true);
      setTimeout(() => {
        inputRef.current.focus();
      }, 0);
    }
  };

  const removeNote = () => {
    dispatch(deleteApiNote(note.id));
  };
  return (
    <div className="w-full mb-2 flex justify-between items-center bg-stone-600 p-3 rounded-lg">
      <input
        ref={inputRef}
        type="text"
        disabled={!isEditing}
        value={noteText}
        onChange={(e) => {
          setNoteText(e.target.value);
        }}
        className="text-white mr-4 bg-transparent outline-none"
      />
      <div className="flex">
        <button
          onClick={editNote}
          className="text-black bg-white min-w-20 mr-4 border-2 p-1 rounded-lg"
        >
          {isEditing ? "Save" : "Edit"}
        </button>
        <button
          onClick={removeNote}
          className="text-black bg-white min-w-20 border-2 p-1 rounded-lg"
        >
          Delete
        </button>
      </div>
    </div>
  );
};
export default NotesApiItem;
