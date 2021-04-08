import React from "react";
import NewNoteInput from "./components/NewNoteInput";
import { NotesState } from "./redux/notesReducer";
import { useDispatch, useSelector } from "react-redux";
import { ListOfNotes } from "./components/ListOfNotes";

const App = () => {
  const notes = useSelector<NotesState, NotesState["notes"]>(
    (state) => state.notes
  );

  const dispatch = useDispatch();

  const addNote = (note: String) => {
    dispatch({ type: "ADD_NOTE", payload: note });
  };

  return (
    <div>
      <NewNoteInput addNote={addNote} />
      <ListOfNotes addedNotes={notes} />
    </div>
  );
};

export default App;
