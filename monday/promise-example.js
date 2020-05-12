new Promise((resolve, reject) => {
	// you can set a conditional here and resolve or reject based on its outcome
	resolve(); // try reject() too
})
	// function must be passed to then/catch, else the function arg is always called
	.then(() => console.log("Then called.")) 
	.catch(() => console.log("Catch called!"));