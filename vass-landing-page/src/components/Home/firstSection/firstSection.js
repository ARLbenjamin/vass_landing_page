import React from "react";
import {
    Segment,
    Grid,
    Icon
  } from 'semantic-ui-react';

import { FirstSectionHook } from './firstSectionHook'

import "./firstSection.scss";


export default function FirstSection() {

    const {
        setCurrentOption,
        backgroundOptionRendering,
        renderKey
    } = FirstSectionHook();

    return (
        <Segment style={{ padding: '0em 0em 0em 0em' }} vertical>
            <div className='first_section_container'>
                <Grid verticalAlign='middle' className='first_section_main_grid' inverted>
                    {/*brand option */}
                    <Grid.Column computer={4} tablet={16} className='first_brand_option_grid' 
                        onMouseEnter={()=>setCurrentOption('brand')}
                        onMouseLeave={()=>setCurrentOption('default')}
                        >
                        <Grid verticalAlign='middle' inverted className='brand_option'>
                            <Grid.Column width={8} textAlign='left'>
                                <span>Brand</span>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='right'>
                                <Icon
                                    className='first_section_icon' 
                                    inverted={renderKey == 'brand' ? false : true} 
                                    name='arrow alternate circle right' />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    {/*product option */}
                    <Grid.Column computer={4} tablet={16} className='first_product_option_grid'
                        onMouseEnter={()=>setCurrentOption('product')}
                        onMouseLeave={()=>setCurrentOption('default')}
                        >
                        <Grid verticalAlign='middle' inverted className='product_option'>
                            <Grid.Column width={8} textAlign='left'>
                                <span>Product</span>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='right'>
                                <Icon
                                    className='first_section_icon' 
                                    inverted={renderKey == 'product' ? false : true} 
                                    name='arrow alternate circle right' />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                    {/*product option */}
                    <Grid.Column computer={4} tablet={16} className='first_motion_option_grid'
                        onMouseEnter={()=>setCurrentOption('motion')}
                        onMouseLeave={()=>setCurrentOption('default')}
                        >
                        <Grid verticalAlign='middle' inverted className='motion_option'>
                            <Grid.Column width={8} textAlign='left'>
                                <span>Motion</span>
                            </Grid.Column>
                            <Grid.Column width={8} textAlign='right'>
                                <Icon
                                    className='first_section_icon' 
                                    inverted={renderKey == 'motion' ? false : true} 
                                    name='arrow alternate circle right' />
                            </Grid.Column>
                        </Grid>
                    </Grid.Column>
                     {/*product animation */}
                     <Grid.Column computer={4} tablet={16} className='first_animation_option_default'>
                        <video
                            id="renderElement"
                            autoPlay
                            loop
                            muted
                            key={renderKey}
                            style={{ transition: 'opacity 0.5s ease' }}
                            >
                                <source src={backgroundOptionRendering} type="video/mp4" />
                        </video>
                    </Grid.Column>
                </Grid>
            </div>
        </Segment>
    );
}