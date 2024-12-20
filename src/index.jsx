import React from "react";
import { createRoot } from "react-dom/client";
import NoteInput from "./component/noteInput";
import './styles/style.css'

const root = createRoot(document.getElementById("root"));
root.render(<NoteInput />);