/* eslint-disable max-classes-per-file */
/* eslint-disable react/no-multi-comp */

import React from 'react';
import { Link } from "react-router-dom";
import {
  Container,
  Divider,
  Grid,
  Header,
  Icon,
  Image,
  List,
  Segment,
} from 'semantic-ui-react';

const FooterDesktop = (
    <Segment inverted vertical style={{ padding: '4em 0em' }}>
        <Container style={{ width:'100%' }}>
            <Grid style={{ padding: '0em 2em' }} inverted stackable>
              <Grid.Row>
              
                <Grid.Column textAlign='right' width={1}>
                  <Header inverted as='h3' content='Complex made simple' />
                </Grid.Column>
                <Grid.Column width={2}>
                </Grid.Column>
                <Grid.Column textAlign='left' width={4}>
                  <Header inverted as='h4' content='Sitemap VASS' />
                  <List link inverted>
                      <List.Item as='a'>
                        <Link to="/">
                          Home
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                            Casos éxito
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Somos VASS
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Impactos
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Método
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Tecnologías
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Proyectos I+D+i
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Insights
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Noticias
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          VASS Research
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Canal de denuncias
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/contact">
                          Contacto
                        </Link>
                      </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column textAlign='left' width={7}>
                  <Header inverted as='h4' content='Sitemap Talento' />
                  <List link inverted>
                      <List.Item as='a'>
                        <Link to="/404">
                          Talento
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          #lifeVASS
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Beneficios
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Planes para ti
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Proyectos
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Smartworking
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Ofertas
                        </Link>
                      </List.Item>
                  </List>
                </Grid.Column>
                <Grid.Column textAlign='left' width={1}>
                  <Header inverted as='h4' content='Empresas' />
                  <List link inverted>
                    <List.Item as='a'>
                      <Link to="/404">
                        VASS
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        Nateevo
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        Serbatic
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        vdSHOP
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Column>
              </Grid.Row>
            </Grid>
            <Grid style={{ padding: '0em 2em' }}>
              <Grid.Column textAlign='left' floated='left' width={5}>
                <Link to="/">
                  <Image src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' />
                </Link>
              </Grid.Column>
              <Grid.Column textAlign='right' floated='right' width={5}>
                <Image size='medium' verticalAlign='top' floated='right' src='https://vasscompany.com/wp-content/themes/vass/images/CERTIFICADOS-2022_NEGATIVO.png' /> 
              </Grid.Column>
            </Grid>
            <Divider style={{ backgroundColor: 'white' }} inverted />
            <Grid verticalAlign='middle' style={{paddingTop:'2em'}}>
              <Grid.Column largeScreen={4} mobile={16}>
                <span>
                  Copyright © 2023 Todos los derechos reservados
                </span>
              </Grid.Column>
              <Grid.Column largeScreen={9} mobile={16}>
                <Grid columns={4} verticalAlign='middle' divided inverted>
                  <Grid.Column largeScreen={4}  mobile={8}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Memoria ambinetal
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4}  mobile={8}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de cookies
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4} mobile={16}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de privacidad
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4} mobile={16}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de calidad y medio ambiente
                      </span>
                    </Link>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column largeScreen={3} mobile={16}>
                <Grid columns={10} centered>
                  <Grid.Column>
                    <Icon name='twitter' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='linkedin' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='instagram' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='youtube play' />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
        </Container>
    </Segment>
)

const FooterMobile = (
    <Segment inverted vertical style={{ padding: '4em 0em' }}>
        <Container style={{ width:'100%' }}>
            <Grid style={{ padding: '0em 1em' }} inverted >
                <Grid.Column width={16}>
                    <Grid>
                        <Grid.Column width={12}>
                        </Grid.Column>
                        <Grid.Column textAlign='right' width={4}>
                          <Header inverted as='h3' content='Complex made simple' />
                        </Grid.Column>
                    </Grid>
                </Grid.Column>
                    <Grid.Column textAlign='left' width={7}>
                      <Header inverted as='h4' content='Sitemap VASS' />
                      <List link inverted>
                      <List.Item as='a'>
                        <Link to="/">
                          Home
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                            Casos éxito
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Somos VASS
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Impactos
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Método
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Tecnologías
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Proyectos I+D+i
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Insights
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Noticias
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          VASS Research
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Canal de denuncias
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/contact">
                          Contacto
                        </Link>
                      </List.Item>
                      </List>
                    </Grid.Column>
                    <Grid.Column width={2}>
                    </Grid.Column>
                    <Grid.Column textAlign='left' width={7}>
                      <Header inverted as='h4' content='Sitemap Talento' />
                      <List link inverted>
                      <List.Item as='a'>
                        <Link to="/404">
                          Talento
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          #lifeVASS
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Beneficios
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Planes para ti
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Proyectos
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Smartworking
                        </Link>
                      </List.Item>
                      <List.Item as='a'>
                        <Link to="/404">
                          Ofertas
                        </Link>
                      </List.Item>
                      </List>
                    </Grid.Column>
                <Grid.Column textAlign='left' width={1}>
                  <Header inverted as='h4' content='Empresas' />
                  <List link inverted>
                  <List.Item as='a'>
                      <Link to="/404">
                        VASS
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        Nateevo
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        Serbatic
                      </Link>
                    </List.Item>
                    <List.Item as='a'>
                      <Link to="/404">
                        vdSHOP
                      </Link>
                    </List.Item>
                  </List>
                </Grid.Column>
            </Grid>
            <Grid style={{ padding: '0em 2em' }}>
              <Grid.Column textAlign='left' floated='left' width={5}>
                <Link to="/">
                  <Image src='https://vasscompany.com/wp-content/uploads/2020/07/logo-vass-blanco.png' /> 
                </Link>
              </Grid.Column>
              <Grid.Column textAlign='right' floated='right' width={5}>
                <Image size='medium' verticalAlign='top' floated='right' src='https://vasscompany.com/wp-content/themes/vass/images/CERTIFICADOS-2022_NEGATIVO.png' /> 
              </Grid.Column>
            </Grid>
            <Divider style={{ backgroundColor: 'white' }} inverted />
            <Grid verticalAlign='middle' style={{paddingTop:'2em'}}>
              <Grid.Column largeScreen={4} mobile={16}>
                <span>
                  Copyright © 2023 Todos los derechos reservados
                </span>
              </Grid.Column>
              <Grid.Column largeScreen={9} mobile={16}>
                <Grid columns={4} verticalAlign='middle'>
                  <Grid.Column largeScreen={4}  mobile={8}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Memoria ambinetal
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4}  mobile={8}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de cookies
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4} mobile={16}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de privacidad
                      </span>
                    </Link>
                  </Grid.Column>
                  <Grid.Column largeScreen={4} mobile={16}>
                    <Link to="/404">
                      <span style={{color: 'white'}}>
                        Politica de calidad y medio ambiente
                      </span>
                    </Link>
                  </Grid.Column>
                </Grid>
              </Grid.Column>
              <Grid.Column largeScreen={3} mobile={16}>
                <Grid columns={10} centered>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='twitter' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='linkedin' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='instagram' />
                  </Grid.Column>
                  <Grid.Column>
                    <Icon style={{cursor:'pointer'}} name='youtube play' />
                  </Grid.Column>
                </Grid>
              </Grid.Column>
            </Grid>
        </Container>
    </Segment>
)

const Footer = {
    FooterMobile,
    FooterDesktop
}

export default Footer