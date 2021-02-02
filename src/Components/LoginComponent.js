import React,{ Component } from 'react';
import {Card,CardBody} from 'reactstrap';
class Login extends Component{
    render(){
        return(
            <div className="row justify-content-center mt-5 col-12">
                <Card className="container col-10  col-md-5 shadow p-3 mb-5 bg-white "  >
                <h4 className="m-3 text-center">LOGIN TO ENTER</h4>
                        <form >
                            <div className="form-group">
                                <label for="exampleInputEmail1">Email address</label>
                                <input type="email" class="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="Enter email"/>
                                
                            </div>
                            <div className="form-group">
                                <label for="exampleInputPassword1">Password</label>
                                <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Password"/>
                            </div>
                            <div className="form-check">
                                <input type="checkbox" class="form-check-input" id="exampleCheck1"/>
                                <label class="form-check-label" for="exampleCheck1">Check me out</label>
                            </div>
                            <div className="text-center p-2">
                            <button type="submit" class="btn btn-success w-50">Submit</button>
                            </div>
                        </form>
                        <a className="text-center m-2" href="#">
                            Forgor Password?
                        </a>
                    
                </Card>
                <Card className="container col-10  col-md-5 shadow p-3 mb-5 bg-white "  >
                    
                        <CardBody>
                        
                            
                                <div className="text-center list-group">
                                    <h4 className="m-0">LOGIN WITH</h4>
                                    <ul className="list-group"  >
                                           <li className="list-group-item borderless" > <a className="btn btn-danger social-signin facebook" href="http://google.com/+"><i className="fa fa-google-plus"></i> google</a><br/></li>
                                            <li className="list-group-item borderless"><a className="btn btn-primary btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i> facebook</a><br/></li>
                                            <li className="list-group-item borderless"><a className="btn btn-info btn-social-icon btn-twitter " href="http://twitter.com/"><i className="fa fa-twitter"></i> twitter</a><br/></li>
                                    </ul>
                                    <h4 className="m-0">or</h4>
                                    <div className="p-2">
                                    <a className="btn btn-md btn-warning w-50" href="/register"> create an account</a>
                                    </div>
                                    
                                </div>
                            

                            
                        </CardBody>
                    
                </Card>
                


            </div>
        );
    }
}
export default Login;