const personImport = import('./test/Person');

setTimeout( ()=>{
	personImport.then( e => { 
		const Person = e.default;
		let Me = new Person('One', 'Person');
		console.log(Me.getName(), Me.getLastname());
	});
}, 1000);