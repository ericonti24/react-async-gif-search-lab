import React, { Component } from 'react'
import GifSearch from '../components/GifSearch'
import GifList from '../components/GifList'

class GifListContainer extends Component {

    state = {
        gifs: []
    }

    render() {
        return (
            <div>
            {console.log(this.state.gifs)}
            <GifSearch fetchGifs={this.fetchGifs}/>
            <GifList gifs={this.state.gifs}/>
            </div>
        )
    }

    fetchGifs = event => {
        event.preventDefault();
        fetch(`https://api.giphy.com/v1/gifs/search?q=${event.target.name.value}&api_key=dc6zaTOxFJmzC&rating=g`)
        .then(resp => resp.json())
        .then(json => 
            this.setState({
                gifs: json.data.slice(0, 3)
            })
        )

    }

}

export default GifListContainer
