import React from 'react'
import styles from './NotesList.module.css'

function NotesListItem({id, text, handleClick}) {
    return (
        <li><a href='#' onClick={(e) => {
            (e).preventDefault();
            console.log('you clicked')
            handleClick(id);
        }}>{text}</a>
        </li>
    )
}

function NotesList({notes, i, handleSelection}){
    const items = notes.map(note => <NotesListItem key={i} id={note.id} text={note.title} handleClick={handleSelection}/>)

    return(
        <ul className={styles.notesList}>
            {items}
        </ul>
    )
}


export default NotesList