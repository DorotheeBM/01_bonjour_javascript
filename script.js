function sayHello(firstName, hour)
{

	let message = `Bonjour ${firstName} !`
	if (hour >= 18) 
		{
			message = `Bonsoir ${firstName} !`
		}
	
	console.log(message)
}

sayHello("Beyonce", 20)
sayHello("Beyonce", 10)
sayHello("Beyonce", 23)