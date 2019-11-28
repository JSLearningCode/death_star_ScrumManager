import React, { Component } from 'react';
import { BrowserRouter, Link } from 'react-router-dom';

import { Container } from './styles';

import './../../../node_modules/@trendmicro/react-sidenav/dist/react-sidenav.css';

// Toggle, Nav no import trendmicro
// TODO criar o main e as funcionalidades, estudar sobre rotas

import SideNav, { NavItem, NavIcon, NavText } from '@trendmicro/react-sidenav';

export default class SideBar extends Component {
  render() {
    return (
        <Container>
            <SideNav
                onSelect={(selected) => {
                    // Add your code here
                    }}
            >
                <SideNav.Toggle />
                <SideNav.Nav defaultSelected="dashboard">
                    <NavItem eventKey="dashboard">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText><BrowserRouter><Link to='dashboard'>Dashboard</Link></BrowserRouter></NavText>
                    </NavItem>
                    <NavItem eventKey="projects">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText><BrowserRouter><Link to='projects'>Projects</Link></BrowserRouter></NavText>
                    </NavItem>
                    <NavItem eventKey="sprints">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText>Sprints</NavText>
                        <NavItem eventKey="productBacklog">
                            <NavText><BrowserRouter><Link to='productbacklog'>Product Backlog</Link></BrowserRouter></NavText>
                        </NavItem>
                        <NavItem eventKey="sprintList">
                            <NavText><BrowserRouter><Link to='sprint'>Sprint List</Link></BrowserRouter></NavText>
                        </NavItem>
                    </NavItem>
                    <NavItem eventKey="kanban">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText><BrowserRouter><Link to='kanban'>Kanban Board</Link></BrowserRouter></NavText>
                    </NavItem>
                    <NavItem eventKey="issues">
                        <NavIcon>
                            <i style={{ fontSize: '1.75em' }} />
                        </NavIcon>
                        <NavText><BrowserRouter><Link to='sprint'>Issues</Link></BrowserRouter></NavText>
                    </NavItem>
                </SideNav.Nav>
            </SideNav>    
        </Container>
    );
  }
}
