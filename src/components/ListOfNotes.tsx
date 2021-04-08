import React from "react";

type ListOfNotesProps = {
  addedNotes: string[];
};

export const ListOfNotes: React.FC<ListOfNotesProps> = ({ addedNotes }) => {
  return (
    <ul>
      {addedNotes.map((note, id) => {
        return <li key={id}>{note}</li>;
      })}
    </ul>
  );
};
