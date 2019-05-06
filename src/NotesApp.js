import React from 'react'
import NotesList from './NotesList'
import NotesDetail from './NotesDetail'
import styles from './NotesApp.module.css'

class NotesApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
            selectedNote: '1001',
            notes: [    // This will hold an array of objects
                {
                    id: '1001',
                    title: 'first note',
                    text: 'this is the first note'
                },
                {
                    id: '1002',
                    title: 'second note',
                    text: 'this is the second note'
                },
                {
                    id: '1003',
                    title: 'third note',
                    text: 'this is the third note'
                },

            ]
        }

    }

    render() {
        // returns note where ids match
        const theNote = this.state.notes.find(note => this.state.selectedNote === note.id)

        return(
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList notes={this.state.notes} handleSelection={this._selectNote}/>
                </div>
                <div className={styles.detail}>
                    <NotesDetail note={theNote}/>
                </div>
            </div>
        )

    }
    _selectNote = (id) => {
        // choose a note to show
        this.setState({
            selectedNote: id,
        })
    }

    _updateNote = (idToUpdate, newText) => {
        // Can't simply reassign the item in the array
        // We need to create a new array with all the existing notes
        // But, we want to use the new text for the note with id === idToUpdate
        const updatedNotes1 = this.state.notes.map(note => {
            if (note.id === idToUpdate) {
                // return the modified version
                return {
                    ...note,        // spread out all the existing key-value pairs...
                    text: newText   // ...but, overwrite just the text property
                }
            } else {
                // return a copy of the note as-is.
                return {
                    ...note
                };
            } 
        });
    }
}

export default NotesApp