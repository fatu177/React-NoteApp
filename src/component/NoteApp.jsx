import React from "react";
import NoteInput from "./NoteInput";
import NoteList from "./NoteList";
import { getData } from "../utils/data";

class NoteApp extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            notes: getData(),
        }
    }
    render() {
        return (
            <div className="noteApp">
                <NoteList notes={this.state.notes} />
            </div>
        );
    }

}

export default NoteApp;