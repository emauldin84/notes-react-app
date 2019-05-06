import React from 'react'
import NotesList from './NotesList'
import NotesDetail from './NotesDetail'
import styles from './NotesApp.module.css'

class NotesApp extends React.Component{
    constructor(props){
        super(props)
        this.state={
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
        return(
            <div className={styles.app}>
                <div className={styles.list}>
                    <NotesList notes={this.state.notes}/>
                </div>
                <div className={styles.detail}>
                    <NotesDetail />
                </div>
            </div>
        )

    }
}

export default NotesApp