import { useEffect } from "react";

function Key({ note, setkeyPress, keyPress }) {
  

  return (
    <div
      onClick={() => {
        setkeyPress(note);
      }}
      className={note.length === 1 ? "key" : "key flat"}
    >
      <div
        className={
          note.length === 1 ? "key-text" : note.length > 1 && "key-text-none"
        }
      >
        {note.toUpperCase()}
      </div>
    </div>
  );
}

export default Key;
