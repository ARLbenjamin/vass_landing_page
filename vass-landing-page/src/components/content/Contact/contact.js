import React from "react";
import {
    Segment,
    Grid
  } from 'semantic-ui-react';
import ContactForm from "./contactForm/index";
import "./contact.scss";

export default function ContactPage() {

    return (
        <Segment style={{ padding: '0em 0em 0em 0em' }} vertical>
            <div className='contact_page_container'>
                    <div className='contact_page_background_receiver'>
                        <div className='contact_page_text_receiver'>
                            CONTACTO
                        </div>
                    </div>
                    
                    <div className='contact_page_welcome_message'>
                        <Segment className={'contact_page_welcome_message_segment'} vertical>
                            <Grid divided verticalAlign='middle'>
                                <Grid.Column largeScreen={3} tablet={5} mobile={16} textAlign='left' className='contact_page_welcome_message_first'>
                                    <div>EMPEZEMOS A</div> 
                                    <div>HACERLO SENCILLO</div>
                                </Grid.Column>
                                <Grid.Column largeScreen={5} tablet={8} mobile={16}  textAlign='left' className='contact_page_welcome_message_second'>
                                    Nos emociona impulsar tu transformación  digital
                                </Grid.Column>
                            </Grid>
                        </Segment>
                    </div>
                <Segment className={'contact_page_contact_form'} inverted>
                    <ContactForm/>
                </Segment>
            </div>
        </Segment>
    );
}