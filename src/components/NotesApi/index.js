import { useDispatch } from "react-redux";
import NotesApiView from "./NotesApiView";
import { fetchApiNotes } from "../../utils/slices/noteApiSlice";
import { useEffect } from "react";
import AddApiNotes from "./AddApiNotes";

const NotesApi = () => {
  const dispatch = useDispatch();
  useEffect(()=> {
    dispatch(fetchApiNotes())
  },[])
  return (
    <div className="bg-white flex flex-col items-center h-full absolute pt-32 w-full">
      <AddApiNotes/>
      <NotesApiView/>
    </div>
  );
};

export default NotesApi;
