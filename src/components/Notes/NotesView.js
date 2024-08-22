import { useSelector } from "react-redux";
import NotesItem from "./NotesItem";
import { selectNotes } from "../../utils/slices/noteSlice";

const NotesView = () => {
    const noteItems = useSelector(selectNotes);
    console.log(noteItems);
    return (
      <div className="flex flex-col mt-10 items-start w-1/3">
        {noteItems.map((item) => {
            return <NotesItem key={item.id} note={item}/>
        })}
      </div>
    );
  };
  export default NotesView;
  