import React from "react";
import {
    Segment,
    Grid,
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
                                                src="https://i.imgur.com/JLqSjkJ.jpg"
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
                                                src="https://i.imgur.com/fxPc27C.jpg"
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
                                                src="https://i.imgur.com/652M0ej.jpg"
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
