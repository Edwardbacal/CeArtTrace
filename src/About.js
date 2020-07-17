import React, { Component } from 'react';
import harv from './assets/harv.png'
import AnchorLink from 'react-anchor-link-smooth-scroll';

class About extends Component {
  render() {
    return (
      <div className="about"> 
        <div className="wrapper">
          <h2>About</h2>
          <div className="container">
            <img src={harv} alt="harvard art museums interior"/>  
            <div className="textContainer">
              <p>CE Art Trace is a React-based app that draws from the Harvard Art Museums' public API. This app draws on a databse of over 230,000 objects to select a random item, within a chosen medium. Please click on one of the buttons below to get your result!</p>
              <p>CE Art Trace was developed and designed by <a href="https://edwarddbacal.com">Edward Bacal</a> in June 2020. Expanded functionality coming soon!</p>
            </div>
          </div>
          <div className="center">
            <button className="arrow"><AnchorLink href='#start'>start! ▽</AnchorLink></button>
          </div>
        </div>
      </div>
    )
  }
}

export default About;