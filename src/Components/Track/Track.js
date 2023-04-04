import React from 'react';
import './Track.css';

// class Track extends React.Component {
//     constructor(props) {
//         super(props);

//         this.addTrack = this.addTrack.bind(this);
//         this.removeTrack = this.removeTrack.bind(this);
//     }

//     renderAction() {
//         if (this.props.isRemoval) {
//             return <button className="Track-action" onClick={this.removeTrack}>-</button>
//         } else {
//             return <button className="Track-action" onClick={this.addTrack}>+</button>
//         }
//     }

//     addTrack() {
//         this.props.onAdd(this.props.track);
//     }

//     removeTrack() {
//         this.props.onRemove(this.props.track);
//     }

//     render() {
//         return (
//             <div className="Track" >
//                 <div className="Track-information">
//                     <h3>{this.props.track.name}</h3>
//                     <p>{this.props.track.artist} | {this.props.track.album} </p>
//                 </div>
//                 {this.renderAction()}
//             </div>
//         );
//     }
// }

class Track extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            isPlaying: false
        };

        this.audioRef = React.createRef();
        this.addTrack = this.addTrack.bind(this);
        this.removeTrack = this.removeTrack.bind(this);
    }

    renderAction() {
        if (this.props.isRemoval) {
            return <button className="Track-action" onClick={this.removeTrack}>-</button>
        } else {
            return <button className="Track-action" onClick={this.addTrack}>+</button>
        }
    }

    addTrack() {
        this.props.onAdd(this.props.track);
    }

    removeTrack() {
        this.props.onRemove(this.props.track);
    }

    playPreview() {
        const audio = this.audioRef.current;
        if (this.state.isPlaying) {
            audio.pause();
        } else {
            audio.src = this.props.track.preview_url;
            audio.play();
        }
        this.setState({ isPlaying: !this.state.isPlaying });
    }

    render() {
        return (
            <div className="Track">
                <div className="Track-information">
                    <h3>
                        {this.props.track.name}
                        <i
                            className={`fas fa-play-circle ${this.state.isPlaying ? 'playing' : ''}`}
                            onClick={() => this.playPreview()}
                        />
                    </h3>
                    <p>{this.props.track.artist} | {this.props.track.album}</p>
                </div>
                {this.renderAction()}
                <audio
                    ref={this.audioRef}
                    type="audio/mpeg"
                    onEnded={() => this.setState({ isPlaying: false })}
                />
            </div>
        );
    }
}

export default Track;