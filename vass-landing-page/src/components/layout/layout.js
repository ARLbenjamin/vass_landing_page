/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import { createMedia } from '@artsy/fresnel';
import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { InView } from 'react-intersection-observer';
import {
  Container,
  Grid,
  Icon,
  Image,
  Menu,
  Segment,
  Dropdown,
  Tab,
} from 'semantic-ui-react';

import { Link } from "react-router-dom";

import Footer from "../footer/index"

const { MediaContextProvider, Media } = createMedia({
  breakpoints: {
    mobile: 0,
    tablet: 750,
    computer: 1440,
  },
})

const {
  FooterMobile,
  FooterDesktop
} = Footer;

const panes = (functionToDeselectTab) => [
  {
    menuItem: ( <Menu.Item id={0} position='left'>
                  <Link to="/">
                    <Image src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' />
                  </Link>
              </Menu.Item>),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={1} as='a'>
                <Link to="/404">
                  Casos de éxito
                </Link>
              </Menu.Item>),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={2} as='a'>Mercados<Icon style={{cursor:'pointer'}} name='caret down' /></Menu.Item>),
    render: () => (<Tab.Pane attached={false} inverted>
      <Grid columns={4} verticalAlign='middle' divided inverted>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Mercado 1</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Mercado 2</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Mercado 3</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
              <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Mercado 4</span>
          </Link>
        </Grid.Column>
      </Grid>
    </Tab.Pane>),
  },
  {
    menuItem: (<Menu.Item id={3} as='a'>Países<Icon style={{cursor:'pointer'}} name='caret down' /></Menu.Item>),
    render: () => (<Tab.Pane attached={false} inverted>
    <Grid columns={5} verticalAlign='middle' divided inverted>
      <Grid.Column>
        <Link to="/404">
          <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>País 1</span>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/404">
          <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>País 2</span>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/404">
          <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>País 3</span>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/404">
          <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>País 4</span>
        </Link>
      </Grid.Column>
      <Grid.Column>
        <Link to="/404">
          <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>País 5</span>
        </Link>
      </Grid.Column>
    </Grid>
  </Tab.Pane>),
  },
  {
    menuItem: (<Menu.Item id={4} as='a'>Somos VASS<Icon style={{cursor:'pointer'}} name='caret down' /></Menu.Item>),
    render: () => (<Tab.Pane attached={false} inverted>
      <Grid columns={3} verticalAlign='middle' divided inverted>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>VASS 1</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>VASS 2</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>VASS 3</span>
          </Link>
        </Grid.Column>
      </Grid>
    </Tab.Pane>),
  },
  {
    menuItem: (<Menu.Item id={5} as='a'>Cómo lo hacemos<Icon style={{cursor:'pointer'}} name='caret down' /></Menu.Item>),
    render: () =>(<Tab.Pane attached={false} inverted>
      <Grid columns={4} verticalAlign='middle' divided inverted>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Option 1</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Option 2</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Option 3</span>
          </Link>
        </Grid.Column>
        <Grid.Column>
          <Link to="/404">
            <span onClick={()=>functionToDeselectTab(null)} style={{cursor:'pointer'}}>Option 4</span>
          </Link>
        </Grid.Column>
      </Grid>
    </Tab.Pane>),
  },
  {
    menuItem: (<Menu.Item id={6} as='a'>
        <Link to="/contact">
          Contacto
        </Link>
      </Menu.Item>),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={7} as='a'>
        <Link to="/404">
          Noticias
        </Link>
      </Menu.Item>),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={8} as='a'>
        <Link to="/404">
          VASS Research
        </Link>
      </Menu.Item>),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={9} as='a'>EN</Menu.Item> ),
    render: () => null,
  },
  {
    menuItem: (<Menu.Item id={10} position='right'>
                <Icon style={{cursor:'pointer'}} name='search' />
              </Menu.Item> ),
    render: () => null,
  },
]

class DesktopContainer extends Component {
  state = {}

  updateCurrentTab = (inView) => this.setState({ currentTab:  inView})

  render() {
    const { children } = this.props
    const { currentTab } = this.state

    return (
      <Media greaterThanOrEqual='computer'>
        <InView>
          <Segment
            inverted
            textAlign='center'
            vertical
          >
            <Menu
              fixed='top' 
              pointing={true}
              secondary={true}
              size='large'
              inverted
              style={{backgroundColor: '#1b1c1d', width:'100vw'}}
            >
              <Container>
                  <Tab 
                    defaultActiveIndex={null}
                    menu={{ text: true }} 
                    panes={panes(this.updateCurrentTab)}
                    activeIndex={currentTab}
                    onTabChange={(value)=>{
                      this.updateCurrentTab(value.target.id)
                    }}
                    animation="slide down" 
                    duration={500}
                  />
              </Container>
            </Menu>
          </Segment>
        </InView>
        {children}
        {FooterDesktop}
      </Media>
    )
  }
}

DesktopContainer.propTypes = {
  children: PropTypes.node,
}

class TabletContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <Media between={["tablet","computer"]}>
        <InView>
        <Segment
              inverted
              textAlign='center'
              vertical
            >
              <Container>
                <Menu
                  fixed='top' 
                  inverted 
                  pointing 
                  secondary 
                  size='large'
                  style={{backgroundColor: '#1b1c1d', width:'100vw'}}
                  >
                    <Menu.Item position='left'>
                      <Link to="/">
                        <Image src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' />
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Icon style={{cursor:'pointer'}} name='search' />
                    </Menu.Item>
                    <Menu.Item>
                      <Dropdown
                        icon={'sidebar'}
                        trigger={<></>}
                        direction='left'
                        className='icon'
                        inverted={true}
                      >
                        <Dropdown.Menu style={{width:'95vw', backgroundColor: '#1b1c1d'}}>
                            <Dropdown.Item>
                              <Link to="/">
                                <samp style={{color: 'white'}}>HOME</samp>
                              </Link>    
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>CASOS DE ÉXITO</samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  MERCADOS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  CÓMO LO HACEMOS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  SOMOS VASS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  INSIGHTS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/contact">
                                <samp style={{color: 'white'}}>
                                  CONTACTO
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  VASS RESEARCH
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  TALENO
                                </samp>
                              </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                </Menu>
              </Container>
            </Segment>
        </InView>

        {children}
        {FooterDesktop}
      </Media>
    )
  }
}

TabletContainer.propTypes = {
  children: PropTypes.node,
}

class MobileContainer extends Component {

  render() {
    const { children } = this.props

    return (
      <Media at='mobile'>
            <Segment
              inverted
              textAlign='center'
              vertical
            >
              <Container>
                <Menu
                  fixed='top' 
                  inverted 
                  pointing 
                  secondary 
                  size='large'
                  style={{backgroundColor: '#1b1c1d'}}
                  >
                    <Menu.Item position='left'>
                      <Link to="/">
                        <Image src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' />
                      </Link>
                    </Menu.Item>
                    <Menu.Item>
                      <Icon style={{cursor:'pointer'}} name='search' />
                    </Menu.Item>
                    <Menu.Item>
                      <Dropdown
                        icon={'sidebar'}
                        trigger={<></>}
                        direction='left'
                        className='icon'
                        inverted={true}
                      >
                        <Dropdown.Menu style={{width:'95vw', backgroundColor: '#1b1c1d'}}>
                        <Dropdown.Item>
                              <Link to="/">
                                <samp style={{color: 'white'}}>HOME</samp>
                              </Link>    
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>CASOS DE ÉXITO</samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  MERCADOS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  CÓMO LO HACEMOS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  SOMOS VASS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  INSIGHTS
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/contact">
                                <samp style={{color: 'white'}}>
                                  CONTACTO
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  VASS RESEARCH
                                </samp>
                              </Link>
                            </Dropdown.Item>
                            <Dropdown.Item>
                              <Link to="/404">
                                <samp style={{color: 'white'}}>
                                  TALENO
                                </samp>
                              </Link>
                            </Dropdown.Item>
                        </Dropdown.Menu>
                      </Dropdown>
                    </Menu.Item>
                </Menu>
              </Container>
            </Segment>
            {children}
            {FooterMobile}
      </Media>
    )
  }
}

MobileContainer.propTypes = {
  children: PropTypes.node,
}

const ResponsiveLayout = ({ children }) => (
  <MediaContextProvider>
    <DesktopContainer>{children}</DesktopContainer>
    <TabletContainer>{children}</TabletContainer>
    <MobileContainer>{children}</MobileContainer>
  </MediaContextProvider>
)

ResponsiveLayout.propTypes = {
  children: PropTypes.node,
}

export default ResponsiveLayout;