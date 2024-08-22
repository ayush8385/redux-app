import AddNotes from "./AddNotes";
import ClearNotes from "./ClearNotes";
import NotesView from "./NotesView";

const Notes = () => {
  return (
    <div className="bg-white flex flex-col items-center h-full absolute pt-32 w-full">
      <AddNotes />
      <NotesView />
      <ClearNotes />
    </div>
  );
};
export default Notes;
