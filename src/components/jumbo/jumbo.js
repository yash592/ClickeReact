import React from "react";

const styles = {
	jumbo: {

		// backgroundcolor:rgb(133,241,150),
		// backgroundimage:url("assets/img/442086.jpgquot")


	},

	h: {

		// fontfamily:ABeeZee, sansserif,
		// color:rgba(242,245,248,0.47)

	},

	p: {

		// fontfamily:Acme, sansserif,
		// color:rgba(221,221,221,0.62)

	}
};

const Jumbotron = () => (
	<div class="jumbotron" style={styles.jumbo}>
	    <h1 class="text-center" style={styles.h}>Clicking Bad</h1>
	    <p class="text-center" style={styles.p}>Click on any Breaking Bad character and get points. If you click a character twice, you clicked bad!</p>
	    <p></p>
	</div>
	);

export default Jumbotron;
