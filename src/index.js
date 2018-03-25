//crating a function which can be create a html element
import React from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';
import SearchBar from './components/search_bar';
import ViedoList from './components/expected_viedo.js';
import VideoDetails from './components/video_details';
var API_KEY='AIzaSyCbXMQtVd-6beQAejK_W89VM0PORNMO9Lk';


class App extends React.Component{
  constructor(props){
    super(props);
    this.state={videos:[],videoSelected:null,term:'surfboard'};
    this.onSearch('surfboard');
  }

  onSearch(term){
    YTSearch({key:API_KEY,term:term},(videos)=>{
    this.setState({
      videos:videos,
      videoSelected:videos[0]
    });
    });
  }

  render(){
  return (
    <div>
  <SearchBar onInputChange={term=>this.onSearch(term)} />
  <VideoDetails video={this.state.videoSelected} />
  <ViedoList
 onVideoSelect={(videoSelected)=>{this.setState({videoSelected})}}
  videos={this.state.videos} />
</div>
  );
}
};

ReactDOM.render(<App />,document.getElementById('container'));


//AIzaSyCbXMQtVd-6beQAejK_W89VM0PORNMO9Lk
