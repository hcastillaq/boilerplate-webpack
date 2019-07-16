class Person{
	
	name : String;
	lastame : String;

	constructor(name : String, lastname : String)
	{
		this.name = name;
		this.lastame = lastname;
	}

	set setname(name)
	{
		this.name = name;
	}

	set setLastname(lastname)
	{
		this.lastame = lastname
	}
	
	get getName()
	{
		return this.name;
	}

	get getLastname()
	{
		return this.lastame;
	}
}

export default Person;