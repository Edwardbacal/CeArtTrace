import React, { Component } from 'react';
import AnchorLink from 'react-anchor-link-smooth-scroll';

const ArtDisplay = ({artInfo: {image, name, title, date}}) => {
  return (
    <section id="display" className="ArtDisplay">
      <div className="ArtDisplayTwo">
        <div className="imageCont">
          <img src={image} alt="" />
        </div>
        <div className="displayText">     
          <h3>{name}</h3>
          <h3>{title} </h3>
          <h3>{date}</h3>
          <AnchorLink href='#start'><button>Again!</button></AnchorLink>
        </div>
      </div>
    </section>
  )
}

export default ArtDisplay;
