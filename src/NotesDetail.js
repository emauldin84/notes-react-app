import React from 'react'

class NotesDetail extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }
    render () {
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