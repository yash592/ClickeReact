import React from "react";

const Navbar = () => (
	<nav className="navbar navbar-light navbar-expand-md navigation-clean-button">
	    <div className="container"><a className="navbar-brand" href="#">Clicking Bad</a><button className="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span className="sr-only">Toggle navigation</span><span className="navbar-toggler-icon"></span></button>
	        <div className="collapse navbar-collapse"
	            id="navcol-1">
	            <p className="ml-auto navbar-text actions"> <a className="btn btn-light action-button" role="button" href="#">Score:</a><a className="btn btn-light action-button" role="button" href="#">Top Score:</a></p>
	        </div>
	    </div>
	</nav>
	);

export default Navbar;