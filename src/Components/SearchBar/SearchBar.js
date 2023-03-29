import React from 'react';
import './SearchBar.css';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            term: ""
        }

        this.search = this.search.bind(this);
        this.handleTermChange = this.handleTermChange.bind(this);

    }

    search() {
        this.props.onSearch(this.state.term);
    }

    handleTermChange(e) {
        this.setState({ term: e.target.value });
    }

    render() {
        return (
            <div className="SearchBar">
                <p>Ahoj, pokud mi chceš udělat radost. Můžeš mi vytvořit playlist na Spotify.</p>
                <input placeholder="Hledej song, album nebo umělce" onChange={this.handleTermChange} />
                <button className="SearchButton" onClick={this.search}>HLEDEJ SONGY</button>
            </div>
        );
    }
}

export default SearchBar;