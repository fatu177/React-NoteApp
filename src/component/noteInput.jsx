import React from "react";

class NoteInput extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            title: '',
            body: '',
        }
        this.onTitleChangeEventhandler = this.onTitleChangeEventhandler.bind(this);
        this.onBodyChangeEventhandler = this.onBodyChangeEventhandler.bind(this);
        this.onSubmitEventHandler = this.onSubmitEventHandler.bind(this);

    }
    onSubmitEventHandler(event) {
        event.prevenDefault();
        this.props.addNote(this.state);
    }
    onTitleChangeEventhandler(event) {
        this.setState({
            title: event.target.value,
        })
        if (this.state.title.length < 50) {
            this.setState({
                maxCharacter: '',
                hide: '',
                textCenter: 'right',
                color: ''
            })
        } else {
            this.setState({
                maxCharacter: 'Karakter Mencapai Batas Maksimum',
                hide: 'hidden',
                textCenter: 'center',
                color: 'red'
            })

        }
    }
    onBodyChangeEventhandler(event) {
        this.setState({
            body: event.target.value,
        })
    }
    render() {
        return (
            <div>
                <form className="note-input" onSubmit={this.onSubmitEventHandler}>
                    <p style={{
                        alignSelf: this.state.textCenter,
                        color: this.state.color
                    }}>{this.state.maxCharacter}<span hidden={this.state.hide}>Sisa Karakter: {50 - this.state.title.length}</span> </p>
                    <input type="text" value={this.state.title} onChange={this.onTitleChangeEventhandler
                    } placeholder="Masukan Judul Catatan...." />
                    <textarea value={this.state.body} onChange={this.onBodyChangeEventhandler
                    } placeholder="Masukan Isi Catatan...." />
                    <button type="submit">Add Note</button>
                </form>
            </div>
        )
    }

}

export default NoteInput;