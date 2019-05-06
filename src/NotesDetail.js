import React from 'react'

function notesEditor({text}) {
    return (
        <textarea value={text}/>
    )
}

class NotesDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: true,
        }
    }
    render () {
        // declares the note variable and assigns them to the properties from this.props where the name matches.
        const {note} = this.props
        const {isEditing} = this.state
        return(
            // Ternary here to flip between form and div based on click in or no?
            <div>
                {
                    isEditing ? <notesEditor text={note.text}/> : note.text
                }
                
            </div>
        )
    }

}


export default NotesDetail