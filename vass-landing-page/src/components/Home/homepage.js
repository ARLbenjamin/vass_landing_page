/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React, { useRef }  from 'react';
import {
  Button,
  Container,
  Divider,
  Grid,
  Header,
  Image,
  Icon,
  Segment,
} from 'semantic-ui-react';

import FirstSection from './firstSection/index';

import SecondSection from './secondSection/index';

import "./homepage.scss"

const HomepageLayout = () => {

  const elementRef = useRef(null);

  const handleScroll = () => {
    elementRef.current.scrollIntoView({ behavior: 'smooth' });
  };

  return(
    <>
    <Segment style={{ padding: '0em 0em' }} vertical>
      <div className='home_page_container'>
          <div className="video-container">
            <video
              className="video-background"
              autoPlay
              loop
              muted
            >
              <source src="https://vasscompany.com/wp-content/uploads/2023/02/LOOP-VASS-v3B-low.mp4" type="video/mp4" />
            </video>
            <div className="content">
   
              <h1>DIGITAL EVOLUTION</h1>
              <p>DESCUBRE MÁS </p><Icon onClick={handleScroll} style={{cursor:'pointer'}} name='chevron down' />
            </div>
          </div>
      </div>
        <div ref={elementRef}>
          <FirstSection/>
        </div>
        <SecondSection/>
    </Segment>
  </>
  )
  }


export default HomepageLayout