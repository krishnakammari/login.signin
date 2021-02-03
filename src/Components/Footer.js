import React,{ Component } from 'react';
class Footer extends Component{
    render(){
        return(
            <div className="footer mt-5">
                <div className="container">
                    <div className="row justify-content-center">             
                        
                        <div className="col-10 col-md-5">
                            <h5>NULL INNOVATION</h5>
                            <address>
                            Null Innovation is a technology company developing products and providing services in the areas of Internet of Things (IoT) and Data Science.
                            <i className="fa fa-phone fa-lg"></i>: +852 1234 5678<br />
                            <i className="fa fa-fax fa-lg"></i>: +852 8765 4321<br />
                            <i className="fa fa-envelope fa-lg"></i>: <a href="mailto:confusion@food.net">
                                confusion@food.net</a>
                            </address>

                            
                            <div >
                                <a className="btn btn-social-icon btn-google" href="http://google.com/+"><i className="fa fa-google-plus"></i></a>
                                <a className="btn btn-social-icon btn-facebook" href="http://www.facebook.com/profile.php?id="><i className="fa fa-facebook"></i></a>
                                <a className="btn bttn-social-icon btn-linkedin" href="htp://www.linkedin.com/in/"><i className="fa fa-linkedin"></i></a>
                                <a className="btn btn-social-icon btn-twitter" href="http://twitter.com/"><i className="fa fa-twitter"></i></a>
                                <a className="btn btn-social-icon btn-google" href="http://youtube.com/"><i className="fa fa-youtube"></i></a>
                                <a className="btn btn-social-icon" href="mailto:"><i className="fa fa-envelope-o"></i></a>
                            </div>
                        
                        </div>
                        
                        <div className="col-5 offset-1 col-md-2">
                            <h5>More Links</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Menu</a></li>
                                <li><a href='/'>Contact</a></li>
                            </ul>
                        </div>
                        <div className="col-5 offset-1 col-md-2">
                            <h5>Products</h5>
                            <ul className="list-unstyled">
                                <li><a href="/">Home</a></li>
                                <li><a href="/">About</a></li>
                                <li><a href="/">Menu</a></li>
                                <li><a href="/">Contact</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="row justify-content-center">             
                <div className="col-auto">
                    <p>©Null Innovation. All Rights Reserved.</p>
                </div>
            </div>
                   
                </div>
    </div>
        );
    }
}
export default Footer;