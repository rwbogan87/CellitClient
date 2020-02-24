import React, { Component } from 'react';
// import AboutItem from './AboutItem';

interface AboutProps {
  will: string;
}

export class About extends Component<AboutProps> {
  render() {
    return <div>{this.props.will}</div>;
  }
}

export default About;
