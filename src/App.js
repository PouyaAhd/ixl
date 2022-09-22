import "./index.css";
import { useState, useEffect } from "react";
import "./App.css";
import { Document, Page, pdfjs } from "react-pdf/dist/esm/entry.webpack";
import Xml from "./components/xml/xml";

function App() {
  return (
    <div>
      <Xml />
    </div>
  );
}

export default App;
