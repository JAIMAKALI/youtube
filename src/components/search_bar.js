// this file will go to index.js
import React from 'react';

//using class method such that we can declare a variable in it

class SearchBar extends React.Component{

//make a constructor such that it works for me when inpput is onChange
constructor(props){
  super(props);
  this.state={term:''};
}
  render(){
    return(
      <div className="search_bar">
      <input
      value={this.state.term}
      onChange={(event)=>this.search(event.target.value)} />

      </div>
    );
  }
  search(term){
    this.setState({term});
    this.props.onInputChange(term);
  }
}

export default SearchBar;
