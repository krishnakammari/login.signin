import React,{Component } from 'react';
import { Jumbotron } from 'reactstrap';
class Home extends Component{
    render(){
        return(
            
                <Jumbotron className="jumbotron">
                    <div className="container justify-content-center">
                        <div className="row row-header ">
                            <div className="col-12 col-sm-6 h-100">
                            <h5 >Home Component</h5>
                               
                            </div>
                        </div>
                    </div>
                </Jumbotron>
             
            
        );
    }
}
export default Home;