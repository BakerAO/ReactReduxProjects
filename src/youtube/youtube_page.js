import React, { Component } from 'react';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/search_bar';
import VideoList from './components/video_list';
import VideoDetail from './components/video_detail';

// Create a new component (view)
export default class YoutubePage extends Component {
    constructor(props){
        super(props);

        this.state = {
            videos: [],
            selectedVideo: null
        };

        this.videoSearch('');
    }
    
    videoSearch(term){
        const API_KEY = 'AIzaSyD71W-Ig0hmg3ieMNeGPaDQwmaNbAZ9slE';
        YTSearch({key: API_KEY, term: term}, (videos) => {
            this.setState({
                videos: videos,
                selectedVideo: videos[0]
            });
        });
    }
    
    render() {
        const videoSearch = _.debounce((term) => {this.videoSearch(term)}, 300);
        return (
            <div>
                <SearchBar onSearchTermChange={videoSearch} />
                <VideoDetail video={this.state.selectedVideo} />
                <VideoList
                    onVideoSelect = {selectedVideo => this.setState({selectedVideo})}
                    videos={this.state.videos}
                />
            </div>
        );
    }
}