import { useDispatch } from "react-redux";
import { clearNotes } from "../../utils/slices/noteSlice";

const ClearNotes = () => {
    const dispatch = useDispatch();
    return <button onClick={()=> dispatch(clearNotes())} className="bg-red-900 text-white p-2 rounded-lg mt-4">
    Clear All
  </button>
}
export default ClearNotes;