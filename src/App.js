import React,{Component} from 'react';
import {Navbar,NavItem,NavLink,NavbarToggler,NavbarBrand,Nav} from 'reactstrap';
import {BrowserRouter,Switch,Route,Redirect}from 'react-router-dom';
import Login from './Components/LoginComponent';
import Register from './Components/RegisterComponent';
import './App.css';
import Header from './Components/Header';
import Home from './Components/HomeComponent'
import Footer from './Components/Footer';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

class App extends Component{

  render(){

    return(
      <div>
        
        <BrowserRouter>
          <Header/>
          
              <Switch>
                <Route path="/home" component={()=><Home/>} />
                <Route exact path="/login" component={()=><Login/>} />
                <Route exact path="/register" component={()=><Register/>} />
                <Redirect to="/home"/>
              </Switch> 
            <Footer/>
            
        </BrowserRouter>
      </div>
      
      
        
    );
  }
}



export default App;
