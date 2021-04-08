import React, { ChangeEvent } from "react";

type NewNoteInputProps = {
  addNote(note: string): void;
};

const NewNoteInput: React.FC<NewNoteInputProps> = ({ addNote }) => {
  const [note, setNote] = React.useState("");

  const updateNote = (e: ChangeEvent<HTMLInputElement>) => {
    setNote(e.target.value);
  };

  const onAddNoteClick = () => {
    addNote(note);
    setNote("");
  };
  return (
    <div>
      <input
        onChange={updateNote}
        type="text"
        name="note"
        placeholder="type something"
      />
      <button onClick={onAddNoteClick}>Add Note</button>
    </div>
  );
};

export default NewNoteInput;
