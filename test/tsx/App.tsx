import React from 'react';
const importModule = () => (import('./../Person'));

class App extends React.Component{

	state : any;
	constructor(props)
	{
		super(props);
		this.state = { person : null };
	}
	
	componentDidMount() {
		setTimeout( () => {
			importModule()
			.then( e => {
				let Person = e.default;
				let Me = new Person('I am', ' a Person');
				this.setState( { person : Me } );
			});
		}, 3000);
	}
	
	render()
	{
		const	{ person } = this.state; 
		return(
			<div>
				{ person != null ? person.getName + person.getLastname : this.props.msg }
			</div>
		);
	}
}

export default App;