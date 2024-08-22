import { useSelector } from "react-redux";
import { selectApiNotes } from "../../utils/slices/noteApiSlice";
import NotesApiItem from "./NotesApiItem";

const NotesApiView = () => {
  const notesData = useSelector(selectApiNotes);
  console.log(notesData);
  return (
    <div className="flex flex-col mt-10 items-start w-1/3">
      {notesData.data.map((item) => {
        return <NotesApiItem key={item.id} note={item} />;
      })}
    </div>
  );
};
export default NotesApiView;
