import React from 'react'

class NotesDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
        // declares the note variable and assigns them to the properties from this.props where the name matches.
        const {note} = this.props
        return(
            // Ternary here to flip between form and div based on click in or no?
            <div>
                {note.text}
            </div>
        )
    }

}


export default NotesDetail