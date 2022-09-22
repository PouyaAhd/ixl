import React, { useState } from "react";
import Key from "./Key";

function Piano() {
    const [keyPress, setKeyPress] = useState('')

  const NOTES = [
    "c",
    "db",
    "d",
    "eb",
    "e",
    "f",
    "gb",
    "g",
    "ab",
    "a",
    "bb",
    "b",
  ];

  return (
    <div className="piano">
      {NOTES.map((note, index) => (
        <Key keyPress={keyPress} setkeyPress={setKeyPress} key={index} note={note} />
      ))}

      <div>
    <audio  src='../public/notes/c.mp3'/>
      </div>
    </div>
  );
}

export default Piano;
