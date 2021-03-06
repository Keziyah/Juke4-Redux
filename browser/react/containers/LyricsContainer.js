import React, { Component } from 'react';
import Lyrics from '../components/Lyrics';
import axios from 'axios';

import { fetchLyrics } from '../redux/action-creators/setLyrics';
import store from '../store';

export default class extends Component {

    constructor(props) {

        super(props);

        this.state = Object.assign({
            artistQuery: '',
            songQuery: ''
        }, store.getState());

        this.handleArtistInput = this.handleArtistInput.bind(this);
        this.handleSongInput = this.handleSongInput.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    componentDidMount() {
        this.unsubscribe = store.subscribe(() => {
            this.setState(store.getState());
        });
    }

    componentWillUnmount() {
        this.unsubscribe();
    }

    handleArtistInput(artist) {
        this.setState({ artistQuery: artist });
        //console.log("ARTIST from CONTAINER", this.state.artistQuery)
    }

    handleSongInput(song) {
        this.setState({ songQuery: song });
        //console.log("SONG from CONTAINER", this.state.songQuery)
    }

    handleSubmit(event) {

        // event.preventDefault();
        // if (this.state.artistQuery && this.state.songQuery) {

        //   axios.get(`/api/lyrics/${this.state.artistQuery}/${this.state.songQuery}`)
        //     .then(response => {
        //       const setLyricsAction = setLyrics(response.data.lyric);
        //       store.dispatch(setLyricsAction);           
        //     });
        // }
        if (this.state.artistQuery && this.state.songQuery) {
            store.dispatch(fetchLyrics(this.state.artistQuery, this.state.songQuery));
        }
    }

    render() {
        return <Lyrics
            text={this.state.lyrics.text}
            setArtist={this.handleArtistInput}
            setSong={this.handleSongInput}
            artistQuery={this.state.artistQuery}
            songQuery={this.state.songQuery}
            handleSubmit={this.handleSubmit}
        />
    }

}