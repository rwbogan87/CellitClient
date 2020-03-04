import React, { Component } from 'react';
import { Pane, Heading, Link, Paragraph } from 'evergreen-ui';
// import AboutItem from './AboutItem';

interface IAboutProps {
  will: string;
}


export class About extends Component<IAboutProps> {

     

  found = () => {
    alert('found me!');
    // return(
    //   <Pane>founD!!!!!!</Pane>
    // );
  };

  render() {
    return (
      <div>
        <Pane className="main">
          <Heading>Meet the Team</Heading>
          <Paragraph textAlign='left' marginTop ={20} marginLeft={100} marginRight = {100}>
            <Heading>
              <Link
                href='https://www.linkedin.com/in/william-mckinney-4b6240108?trk=public_profile_browsemap_mini-profile_title'
                target='_blank'
              >
                Will Mckenny
              </Link>
            </Heading>
            <br />
            Full-stack JavaScript Developer. He designed our database. He
            ambitiously decided to pull seven tables out of his hat saying "I'm
            pretty sure I can have it done in no time"(and he did), leaving the
            other two of us saying... "Sure it's all you Will." Since the
            database was specifically designed for the implementation of the store
            cart, he went on to single handedly complete the cart component.
            Catch phrase, "Well done Sir!"
          </Paragraph>

          <Paragraph textAlign='left'  marginTop ={20} marginLeft={100} marginRight = {100}>
            <Heading>
              <Link
                href='https://www.linkedin.com/in/boganryan'
                target='_blank'
              >
                Ryan Bogan
              </Link>
            </Heading>
            <br />
            Software Developer. After creating the Login and Signup
            functionality he spearheaded the implementation of Multer in the
            project. After hours of research, trial and error, and a few very
            helpful consultations with our instructor he finally achieved
            automated file retrieval and storage for images in the database.
            Phew! So breaking the code multiple times ended up being worth it
            luckely for him. He went on to be instrumental in styling the app. Catch
            phrase, "We could add a modal."
          </Paragraph>

          <Paragraph textAlign='left'  marginTop ={20} marginLeft={100} marginRight = {100}>
            <Heading>
              <Link
                href='https://www.linkedin.com/in/douglas-r-brown/'
                target='_blank'
              >
                Douglas Brown
              </Link>
            </Heading>
            <br />
            He helped get the ball rolling with the file and component structure.
            After completing the store front component he went on to build the
            admin dashboard albeit very MVP making a few changes in the
            database here and there. Catch phrase, "MVP!"
          </Paragraph>

          

          <Paragraph textAlign='left' margin={60}>
            Our first app was successfully created in just 24 hours designed to
            fulfill a class requirement at Eleven Fifty Academy. And so{' '}
            <span
              className='hidden'
              onClick={() => {
                this.found();
              }}
            >
              One Day
            </span>
            squad was formed. While crude and simply meeting the project
            requirements the app helped us overcome many new challenges. It was a
            starting point for our knowledge of Github collaboration,
            localStorage, Google Maps API and much more.
          </Paragraph>
        </Pane>
      </div>
    );
  }
}

export default About;
