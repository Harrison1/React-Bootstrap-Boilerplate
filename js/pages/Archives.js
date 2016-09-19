import React from "react";

import Article from "../components/Article";

export default class Archives extends React.Component {
	render() {

	const { query } = this.props.location;
    const { params } = this.props;
    const { article } = params;
    const { date, filter } = query;

    const Articles = [
      "Some Article",
      "Some Other Article",
      "Yet Another Article",
      "Still More",
      "Fake Article",
      "Partial Article",
      "American Article",
      "Mexican Article",
    ].map((title, i) => <Article key={i} title={title}/> );

		return (
		<div>	
	      <div class="jumbotron">
	        <h1>Archives Page</h1>
	        <p>ARCHIVES...arent all the archives great.</p>
	        <p><a href="#" class="btn btn-primary btn-lg" role="button">Learn more &raquo;</a></p>
	      </div>

 		<div>
        <h1>Archives</h1>
        <div class="row">{Articles}</div>
      </div>


	    </div>
		);
	}
}