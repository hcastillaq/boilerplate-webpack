class Person{
	
	name : String;
	lastame : String;

	constructor(name : String, lastname : String)
	{
		this.name = name;
		this.lastame = lastname;
	}

	setName(name)
	{
		this.name = name;
	}

	setLastname(lastname)
	{
		this.lastame = lastname
	}
	
	getName()
	{
		return this.name;
	}

	getLastname()
	{
		return this.lastame;
	}
}

export default Person;