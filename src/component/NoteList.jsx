import React from "react";


function NoteList({ notes, onDelete, onArchive }) {
    return (

        <div className="note-list">
            {notes.map((note) => (
                <div key={note.id} className="note">
                    <h2>{note.title}</h2>
                    <p>{note.body}</p>
                    <p>{note.createdAt}</p>
                    <button onClick={() => onDelete(note.id)}>Delete</button>
                    <button onClick={() => onArchive(note.id)}>Archive</button>
                </div>
            ))}
        </div >
    )
}
export default NoteList;