import React, { Component } from 'react';
import './App.css';
import axios from 'axios';
import Header from './Header';
import About from './About';
import ArtDisplay from './ArtDisplay';
import AnchorLink from 'react-anchor-link-smooth-scroll';

class App extends Component {

  constructor() {
    super();
    this.state = {
      result: {},
      input: '',
      page: 0,
      allResults: [],
    }
  }
  
  apiCall = (mediumClick) => {
    axios({
      url: 'https://api.harvardartmuseums.org/object',
      method: 'GET',
      dataType: 'json',
      params: {
        apikey: '27755370-b4cc-11ea-be7e-875e5b266cbb',
        classification: mediumClick,
        size: 100,
        page: this.state.page
      }
    }).then((results) => {
      console.log(results)
      // const resultArray = []
      const artworks = results.data.records;
      const expandedArray = this.state.allResults
      if (!this.state.page){
        const randomPage = Math.floor(Math.random() * results.data.info.pages)
        this.setState({page: randomPage})
        this.apiCall(mediumClick)
      } else {
        this.setState({ page: 0 })
        this.renderResults(artworks)
      }


      // refactor into functions to decouple functions
      // -> separate into functions to call it in different components. 
      // design patterns (e.g. mvc, observer pattern)

      // artworks.forEach(result => {expandedArray.push(result)})
      // console.log(resultArray)
      // expandedArray.push([...resultArray])
      // this.setState({allResults: expandedArray})
      // if (this.state.page <= results.data.info.pages) {
      //   const newPage = this.state.page + 1
      //   this.setState({page: newPage})
      //   this.apiCall(mediumClick)
      // } else {
      //   
      // }
    })
  }
    
  
  
  renderResults = (artworks) => {
    const random = artworks[Math.floor(Math.random() * artworks.length)]
    console.log(random)
    // console.log(typeof(random.images.length))
    const selection = {
      name: random.people ? random.people[0].name : "Unknown",
      title: random.title,
      date: random.dated,
      image: random.imagecount && random.images !== undefined && random.images.length ? random.images[0].baseimageurl : "https://ultravires.ca/wp/wp-content/uploads/2018/03/Then-and-Now_-no-image-found.jpg"
    }
        this.setState({
      result: selection
    })
  }

  handleClick = (event) => {
    event.preventDefault();
    console.log(event.target.value);
    const mediumClick = event.target.value
    this.setState({
      input: mediumClick
    });
    
  this.apiCall(mediumClick)
  }

  // page: i + 1, // starts at 1 and incremented with every call
  //   }
  //   }).then((results) => {
  // const totalPages = results.data.info.pages;
  // this.setState({
  //   totalPages,
  //   // increment this state with every api call
  //   page: this.state.page + 1,
  // });




   
  render() {
    return (
      <div className="App">
        <Header />
        <About />
        <div className="medium" id="start">
          <h2>Select Medium</h2>
          <div className="pic">
            <div className="rowOne">
              <AnchorLink href='#display'><button value="Paintings" onClick={this.handleClick}>Painting</button></AnchorLink>
              <AnchorLink href='#display'><button value ="Sculpture" onClick={this.handleClick}>Sculpture</button></AnchorLink>
              <AnchorLink href='#display'><button value="Photographs" onClick={this.handleClick}>Photography</button></AnchorLink>
              <AnchorLink href='#display'><button value="Prints" onClick={this.handleClick}>Prints</button></AnchorLink>
              {/* <AnchorLink href='#display'><button value="Audiovisual Works" onClick={this.handleClick}>Audiovisual</button></AnchorLink>
              <AnchorLink href='#display'><button value="Graphic Design" onClick={this.handleClick}>Design</button></AnchorLink> */}
            </div> 
              <ArtDisplay artInfo={this.state.result} />    
          </div>
        </div>
      </div>
    );
  }
}

export default App;
