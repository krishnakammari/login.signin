import React,{ Component } from 'react';
import {Card,CardBody} from 'reactstrap';

class Register extends Component{
    render(){
        return(
            <div className="row justify-content-center mt-5 col-12">
                <Card className="container col-10  col-md-5 shadow p-3 mb-5 bg-white "  >
                <h4 className="m-3 text-center">ENTER YOUR DETAILS</h4>
                        <form className="form-horizontal" >
                            <div className="form-group">
                                <label for="usr">First Name:</label>
                                <input type="text" className="form-control " id="usr" placeholder="first name"/>

                            </div>
                            <div className="form-group">
                                <label for="usr">User Id:</label>
                                <input type="text" className="form-control" id="usr" placeholder="user name"/>

                            </div>
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address:</label>
                                <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Conform Password:</label>
                                <input type="password" className="form-control" id="exampleInputPassword1" placeholder="Conform Password"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" className="form-check-input" id="exampleCheck1"/>
                                <label className="form-check-label" for="exampleCheck1">I accept the <a href="#">terms and condition</a></label>
                            </div>
                            <div className="text-center p-2">
                            <button type="submit" className="btn btn-success w-50">Submit</button>
                            </div>
                        </form>
                    
                </Card>
                <Card className="container col-10  col-md-5 shadow p-3 mb-5 bg-white "  >
                    
                        <CardBody>
                        
                            
                                <div className="text-center list-group mt-5">
                                    <h4 className="m-0">LOGIN WITH</h4>
                                    <ul className="list-group"  >
                                           <li className="list-group-item borderless" > <a className="btn btn-danger social-signin facebook" href="http://google.com/+"><i className="fa fa-google-plus"></i> google</a><br/></li>
                                            <li className="list-group-item borderless"><a className="btn btn-primary btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i> facebook</a><br/></li>
                                            <li className="list-group-item borderless"><a className="btn btn-info btn-social-icon btn-twitter " href="http://twitter.com/"><i className="fa fa-twitter"></i> twitter</a><br/></li>
                                    </ul>
                                    <h4 className="m-0">Already have an Account?</h4>
                                    <div className="p-2">
                                    <a className="btn btn-md btn-warning w-50" href="/login"> Login</a>
                                    </div>
                                    
                                </div>
                            

                            
                        </CardBody>
                    
                </Card>
                


            </div>
        );
    }
}
export default Register;