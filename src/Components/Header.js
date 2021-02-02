import React,{Component} from 'react';
import {Navbar,NavItem,NavbarToggler,NavbarBrand,Nav, Collapse} from 'reactstrap';
import{NavLink} from 'react-router-dom'

class Header extends Component{
    constructor(props){
        super(props);
        this.state={
            isNavOpen:false
        }
        this.toggleNav=this.toggleNav.bind(this);
    
    }
    toggleNav(){
        this.setState({
            isNavOpen: !this.state.isNavOpen
        });
    }
    render(){
        return(
            <React.Fragment>
                <Navbar dark expand="sm" className="navbar navbar-dark ">
                    <div className="container text-primary-50 ">
                        <NavbarToggler onClick={this.toggleNav}/>
                        <NavbarBrand className="mr-auto" href="/" color='pink'>
                            <img src='assets/images/logo.png' width="40" height="40" alt="logo"/>
                        </NavbarBrand>
                        <Collapse isOpen={this.state.isNavOpen} navbar>
                            <Nav className="ml-auto" navbar>
                                <NavItem>
                                    <NavLink className="nav-link" to="/home">
                                        <span className="fa fa-home fa-lg"></span>Home
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/login">
                                        <span className="fa fa-sign-in fa-lg" aria-hidden="true"></span>Login
                                    </NavLink>
                                </NavItem>
                                <NavItem>
                                    <NavLink className="nav-link" to="/register">
                                        <span className="fa fa-registered  fa-lg"></span>Register
                                    </NavLink>
                                </NavItem>

                            </Nav>
                        </Collapse>
                    </div>
                </Navbar>
            </React.Fragment>
        );
    }
}
export default Header;