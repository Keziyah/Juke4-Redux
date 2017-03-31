import React from 'react';

const Lyrics = (props) => {
    const artistChange = e => {
        console.log("TYPING AN ARTIST", e.target.value)
        props.setArtist(e.target.value);
    };

    console.log("PROPS", props)

    const songChange = e => {
        console.log("TYPING A SONG", e.target.value)
        props.setSong(e.target.value);
    };

    return (
        <div id="lyrics">
            <form onSubmit={props.handleSubmit}>
                <div>
                    <input type="text" value={props.artistQuery} placeholder="Artist" onChange={artistChange} />
                    <input type="text" value={props.songQuery} placeholder="Song" onChange={songChange} />
                </div>
                <pre>{props.text || 'Search above!'}</pre>
                <button type="submit">Search for Lyrics</button>
            </form>
        </div>
    );
}

export default Lyrics; 


// It should expect to receive in six important props:

// text: Possibly a string of lyrics to display, but could very well be null.
// setArtist: A function that should be invoked with the artist that will be searched.
// artistQuery: The current value of artist to be searched
// setSong: A function that should be invoked with the song that will be searched.
// songQuery: The current value of song to be searched
// handleSubmit: A function that should be invoked when ready to search.