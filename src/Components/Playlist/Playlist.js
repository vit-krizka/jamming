import React from 'react';
import TrackList from '../TrackList/TrackList';
import './Playlist.css';

class Playlist extends React.Component {
    constructor(props) {
        super(props);

        this.handleNameChange = this.handleNameChange.bind(this);
    }

    handleNameChange(e) {
        let name = e.target.value;
        this.props.onNameChange(name);
    }

    render() {
        return (
            <div class="Playlist">
                <input value={this.props.playlistName} onChange={this.handleNameChange} />
                <TrackList tracks={this.props.playlistTracks} onRemove={this.props.onRemove} isRemoval={true} />
                <button class="Playlist-save" onClick={this.props.onSave}>PŘIDEJ DO MÉHO SPOTIFY ÚČTU</button>
            </div>
        );
    }
}

export default Playlist;

