import React from 'react'

function NotesEditor({text, handleChange}) {
    return (
        <textarea value={text} onChange={(e) => {
            handleChange(e.target.value)
        }}/>
    )
}

class NotesDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            isEditing: false,
            draftText: props.note.text,
        }
    }
    render () {
        // declares the note variable and assigns them to the properties from this.props where the name matches.
        const {note} = this.props
        const {isEditing, draftText} = this.state
        return(
            // Ternary here to flip between form and div based on click in or no?
            <div>
                <button onClick={this._toggleIsEditing}>Edit Note</button>
                <br/>
                {
                    isEditing ? <NotesEditor 
                        handleChange={this._changeDraftText} 
                        text={draftText}
                        /> : 
                        draftText
                }
                
                
            </div>
        )
    }
    _changeDraftText = (newText) => {
        this.setState({
            draftText: newText,
        });
    }
    _toggleIsEditing = () => {
        this.setState ({
            isEditing: !this.state.isEditing
        })
    }
}


export default NotesDetail