import React from "react";
import {
    Segment,
    Grid,
    Sticky
  } from 'semantic-ui-react';

import "./secondSection.scss";


export default function SecondSection() {

    return (
        <Segment style={{ padding: '0em 0em 0em 0em' }} vertical>
            <div className='second_section_container'>
                    <div className='background_world'>
                        WORK
                    </div>
                    <div className="scroll_invisible_container">
                        <div className="scrollable_content">
                            <div className="inner_content">
                                <Grid style={{height: '100%'}}>
                                    <Grid.Column width={16} style={{height: '35%'}}>
                                        <Grid columns={2}>
                                            <Grid.Column 
                                                largeScreen={2}
                                                computer={1}
                                                tablet={1}

                                            />
                                            <Grid.Column 
                                                largeScreen={3} 
                                                computer={5}
                                                tablet={5}
                                                mobile={7}
                                                style={{height: '70vh', overflow: 'hidden'}}>
                                            <img
                                                src="https://pixabay.com/get/gc5ef0491b70f9f41d0042d299bda2cd95a77672b7e2bc42e09f8ef4ff69ab1451bbbd4c61626541ef81b4129d5851f95_640.jpg"
                                                className="image"
                                              />
                                            <Grid.Column 
                                                largeScreen={11}
                                                computer={10}
                                                tablet={10}
                                                mobile={8}
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>

                                    <Grid.Column width={16} style={{height: '40%'}}>
                                        <Grid columns={2}>
                                            <Grid.Column 
                                                largeScreen={12}
                                                computer={10}
                                                tablet={8}
                                                mobile={7}
                                                />
                                            <Grid.Column 
                                                largeScreen={3}
                                                computer={5}
                                                tablet={5}
                                                mobile={7}
                                                style={{height: '70vh', overflow: 'hidden'}}
                                                >
                                            <img
                                                src="https://pixabay.com/get/g4fd5ce9e8ec0efb3191c7fd99ee6833a4b2483f0bde163621ed763678f70ac8c38f5895abfbb4c5abe2183047f00b1d0_640.jpg"
                                                className="image"
                                              />
                                            <Grid.Column 
                                                largeScreen={11}
                                                computer={1}
                                                
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>

                                    <Grid.Column width={16} style={{height: '40%'}}>
                                        <Grid columns={2}>
                                            <Grid.Column 
                                                largeScreen={5}
                                                computer={2}
                                                tablet={1}
                                                mobile={4}
                                                />
                                            <Grid.Column 
                                                largeScreen={3}
                                                computer={5}
                                                tablet={5}
                                                mobile={7}
                                                style={{height: '70vh', overflow: 'hidden'}}>
                                            <img
                                                src="https://pixabay.com/get/ge74eb2299f0040108e7a0fa1a4da137adc02a6c6709e8d5c7434ecc3f5833f82cc2f14b3fb1616da14d772f283e63714_640.jpg"
                                                className="image"
                                              />
                                            <Grid.Column 
                                                largeScreen={8}
                                                computer={9}
                                                tablet={8}
                                                mobile={5}
                                                />
                                            </Grid.Column>
                                        </Grid>
                                    </Grid.Column>
                                </Grid>
                            </div>
                        </div>
                    </div>
            </div>
        </Segment>
    );
}