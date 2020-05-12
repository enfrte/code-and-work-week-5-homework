async function fn() {
	// define your promise
	const prom = new Promise((resolve, reject) => {
			// you can set a conditional here and resolve or reject based on its outcome
			resolve("Resolved"); // try reject() too
		})
			// function must be passed to then/catch, else the function arg is always called
			.then(res => res) 
			.catch(err => err);

		return prom;
}

( async () => {
	// await can only be called in an async function
	const result = await fn();  
	console.log(result);
	console.log("Done");	
})();
