import React from "react";

const Navbar = () => (
	<nav class="navbar navbar-light navbar-expand-md navigation-clean-button">
	    <div class="container"><a class="navbar-brand" href="#">Clicking Bad</a><button class="navbar-toggler" data-toggle="collapse" data-target="#navcol-1"><span class="sr-only">Toggle navigation</span><span class="navbar-toggler-icon"></span></button>
	        <div class="collapse navbar-collapse"
	            id="navcol-1">
	            <p class="ml-auto navbar-text actions"> <a class="btn btn-light action-button" role="button" href="#">Score:</a><a class="btn btn-light action-button" role="button" href="#">Top Score:</a></p>
	        </div>
	    </div>
	</nav>
	);

export default Navbar;